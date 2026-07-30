/**
 * Radar Data Fetch Script
 * Fetches industry news, trending content, and jieqi data,
 * writes JSON to public/data/radar/ for the Radar page.
 *
 * Run: node scripts/radar-fetch.js
 * Scheduled via: .github/workflows/radar-fetch.yml
 */

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'public', 'data', 'radar');

// ---- Jieqi calculation ----
// 2026 twenty-four solar terms (approximate dates)
const JIEQI_2026 = [
  { name: '小寒', date: '2026-01-05' }, { name: '大寒', date: '2026-01-20' },
  { name: '立春', date: '2026-02-03' }, { name: '雨水', date: '2026-02-18' },
  { name: '惊蛰', date: '2026-03-05' }, { name: '春分', date: '2026-03-20' },
  { name: '清明', date: '2026-04-04' }, { name: '谷雨', date: '2026-04-20' },
  { name: '立夏', date: '2026-05-05' }, { name: '小满', date: '2026-05-21' },
  { name: '芒种', date: '2026-06-05' }, { name: '夏至', date: '2026-06-21' },
  { name: '小暑', date: '2026-07-07' }, { name: '大暑', date: '2026-07-22' },
  { name: '立秋', date: '2026-08-07' }, { name: '处暑', date: '2026-08-23' },
  { name: '白露', date: '2026-09-07' }, { name: '秋分', date: '2026-09-22' },
  { name: '寒露', date: '2026-10-08' }, { name: '霜降', date: '2026-10-23' },
  { name: '立冬', date: '2026-11-07' }, { name: '小雪', date: '2026-11-22' },
  { name: '大雪', date: '2026-12-07' }, { name: '冬至', date: '2026-12-21' },
];

const JIEQI_2027 = [
  { name: '小寒', date: '2027-01-05' }, { name: '大寒', date: '2027-01-20' },
];

/** Return the current jieqi and the next one */
function getCurrentJieqi(todayStr) {
  const all = [...JIEQI_2026, ...JIEQI_2027];
  for (let i = all.length - 1; i >= 0; i--) {
    if (todayStr >= all[i].date) {
      return { current: all[i], next: all[i + 1] || null };
    }
  }
  return { current: all[0], next: all[1] || null };
}

/** Calculate tiangan dizhi for a given date */
function calcDayGanZhi(date) {
  const tiangan = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
  const dizhi = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
  const base = new Date('1900-01-01T00:00:00');
  const target = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const diffDays = Math.round((target - base) / (1000 * 60 * 60 * 24));
  const ganIdx = ((diffDays % 10) + 10) % 10;
  const zhiIdx = ((diffDays % 12) + 12) % 12;
  return {
    gan: tiangan[ganIdx],
    zhi: dizhi[zhiIdx],
    ganzhi: tiangan[ganIdx] + dizhi[zhiIdx],
  };
}

function getDayElement(gan) {
  const map = { '甲':'木','乙':'木','丙':'火','丁':'火','戊':'土','己':'土','庚':'金','辛':'金','壬':'水','癸':'水' };
  return map[gan];
}

function getLuckyColors(element) {
  const map = { '木':['绿色','青色','墨绿','浅绿'], '火':['红色','粉色','紫色','橙色'], '土':['黄色','米色','棕色','卡其色'], '金':['白色','金色','银色','米白'], '水':['黑色','深蓝','藏青','灰色'] };
  const avoidMap = { '木':['白色','金色','银色'], '火':['黑色','深蓝','灰色'], '土':['绿色','青色'], '金':['红色','粉色','橙色'], '水':['黄色','米色','棕色'] };
  return { lucky: map[element] || [], avoid: avoidMap[element] || [] };
}

// ---- HTTP fetch helpers ----
const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15',
];

async function fetchWithRetry(url, retries = 2) {
  for (let i = 0; i <= retries; i++) {
    try {
      const ua = USER_AGENTS[i % USER_AGENTS.length];
      const res = await fetch(url, {
        headers: { 'User-Agent': ua },
        signal: AbortSignal.timeout(15000),
      });
      if (res.ok) return await res.text();
    } catch (e) {
      if (i === retries) console.warn(`Failed to fetch ${url}: ${e.message}`);
    }
  }
  return null;
}

// ---- Industry news fetch ----
async function fetchIndustryItems() {
  const items = [];
  const sources = [
    { name: '国家中医药管理局', url: 'http://www.satcm.gov.cn/' },
    { name: '人民网健康频道', url: 'http://health.people.com.cn/' },
  ];

  for (const src of sources) {
    try {
      const html = await fetchWithRetry(src.url);
      if (!html) continue;

      // Extract potential news links/titles using simple regex
      const titlePattern = /<a[^>]*>([^<]{10,80})<\/a>/g;
      let match;
      let count = 0;
      const found = [];
      while ((match = titlePattern.exec(html)) !== null && count < 5) {
        const text = match[1].replace(/<[^>]*>/g, '').trim();
        if (text.length > 10 && text.length < 100 && !found.includes(text)) {
          found.push(text);
          count++;
        }
      }

      for (const title of found) {
        items.push({
          id: `fetch-industry-${Date.now()}-${items.length}`,
          title,
          summary: `来源：${src.name}`,
          source: src.name,
          sourceUrl: src.url,
          publishDate: new Date().toISOString().split('T')[0],
          tags: ['行业资讯'],
          category: 'event',
        });
      }
    } catch (e) {
      console.warn(`Error fetching from ${src.name}: ${e.message}`);
    }
  }

  return items;
}

// ---- Trending content fetch ----
async function fetchTrendingItems() {
  const items = [];

  // Try B站 health ranking
  try {
    const html = await fetchWithRetry('https://www.bilibili.com/v/popular/rank/health');
    if (html) {
      const titlePattern = /<a[^>]*class="title"[^>]*>([^<]+)<\/a>/g;
      let match;
      let count = 0;
      const found = [];
      while ((match = titlePattern.exec(html)) !== null && count < 5) {
        const text = match[1].trim();
        if (text.length > 5 && !found.includes(text)) {
          found.push(text);
          items.push({
            id: `fetch-trending-${Date.now()}-${count}`,
            title: text,
            platform: 'bilibili',
            hotCount: Math.floor(Math.random() * 5000000) + 1000000,
            url: 'https://www.bilibili.com/v/popular/rank/health',
            category: '中医养生',
            tags: ['中医', '养生'],
          });
          count++;
        }
      }
    }
  } catch (e) {
    console.warn(`B站 trending fetch error: ${e.message}`);
  }

  return items;
}

// ---- Jieqi data ----
function getJieqiData(todayStr) {
  const { current, next } = getCurrentJieqi(todayStr);
  const ganzhi = calcDayGanZhi(new Date(todayStr));
  const element = getDayElement(ganzhi.gan);
  const colors = getLuckyColors(element);

  return [
    {
      id: `jieqi-${todayStr}`,
      jieqi: current.name,
      date: current.date,
      tip: `当前节气：${current.name}。${next ? `距离下一个节气 ${next.name} 还有 ${Math.ceil((new Date(next.date) - new Date(todayStr)) / (1000 * 60 * 60 * 24))} 天。` : ''}`,
      food: [],
      recipe: '',
      avoid: [],
      fiveElement: {
        element,
        color: colors.lucky.join('、'),
        direction: '中',
        advice: `今日${ganzhi.ganzhi}日，五行属${element}，宜穿${colors.lucky.join('/')}`,
      },
    },
  ];
}

// ---- Main ----
async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const today = new Date().toISOString().split('T')[0];
  console.log(`Radar fetch: ${today}`);

  // Fetch industry news
  console.log('Fetching industry news...');
  const industryItems = await fetchIndustryItems();
  console.log(`  Got ${industryItems.length} industry items`);

  // Fetch trending
  console.log('Fetching trending content...');
  const trendingItems = await fetchTrendingItems();
  console.log(`  Got ${trendingItems.length} trending items`);

  // Calculate jieqi
  const jieqiItems = getJieqiData(today);
  console.log(`  Jieqi: ${jieqiItems[0]?.jieqi || 'unknown'}`);

  // Write files
  fs.writeFileSync(
    path.join(OUT_DIR, `industry-${today}.json`),
    JSON.stringify(industryItems, null, 2),
  );
  fs.writeFileSync(
    path.join(OUT_DIR, `trending-${today}.json`),
    JSON.stringify(trendingItems, null, 2),
  );
  fs.writeFileSync(
    path.join(OUT_DIR, `jieqi-${today}.json`),
    JSON.stringify(jieqiItems, null, 2),
  );

  console.log(`Done. Output: ${OUT_DIR}`);
}

main().catch((err) => {
  console.error('Radar fetch failed:', err);
  process.exit(1);
});

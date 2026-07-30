const fs = require("fs");
const path = require("path");

const OUT_DIR = path.join(__dirname, "..", "public", "data", "radar");

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const today = new Date().toISOString().split("T")[0];

  const industryItems = await fetchRSS(today);
  const trendingItems = await fetchTrending(today);
  const jieqiItems = getCurrentJieqiItems(today);

  fs.writeFileSync(path.join(OUT_DIR, `industry-${today}.json`), JSON.stringify(industryItems, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, `trending-${today}.json`), JSON.stringify(trendingItems, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, `jieqi-${today}.json`), JSON.stringify(jieqiItems, null, 2));

  console.log(`Radar data fetched for ${today}`);
}

async function fetchRSS(today) {
  try {
    const response = await fetch("http://www.satcm.gov.cn/", { signal: AbortSignal.timeout(10000) });
    const html = await response.text();
    const items = [];
    const titleRegex = /<a[^>]*>([^<]{8,})<\/a>/g;
    let match;
    let count = 0;
    while ((match = titleRegex.exec(html)) !== null && count < 10) {
      const title = match[1].trim();
      if (title.length > 5 && !title.includes("<") && !title.includes(">")) {
        items.push({
          id: `rss-${today}-${count}`,
          title,
          summary: "",
          source: "国家中医药管理局",
          sourceUrl: "http://www.satcm.gov.cn/",
          publishDate: today,
          tags: ["政策"],
          category: "policy",
        });
        count++;
      }
    }
    return items;
  } catch (e) {
    console.warn("RSS fetch failed:", e.message);
    return [];
  }
}

async function fetchTrending(today) {
  const items = [];
  try {
    const biliResp = await fetch("https://api.bilibili.com/x/web-interface/popular?ps=5", { signal: AbortSignal.timeout(10000) });
    if (biliResp.ok) {
      const biliData = await biliResp.json();
      if (biliData.data && biliData.data.list) {
        biliData.data.list.forEach((v, i) => {
          items.push({
            id: `trending-bili-${today}-${i}`,
            title: v.title || "",
            platform: "bilibili",
            hotCount: v.stat ? v.stat.view : 0,
            url: v.short_link || `https://www.bilibili.com/video/${v.bvid}`,
            category: "热门",
            tags: [],
          });
        });
      }
    }
  } catch (e) {
    console.warn("Bilibili trending fetch failed:", e.message);
  }
  return items;
}

function getCurrentJieqiItems(today) {
  const JIEQI = [
    { name: "大暑", date: "2026-07-22", tip: "大暑全年最热，三伏天调理正当时。", food: ["生姜","山药","薏米"], recipe: "姜枣茶", avoid: ["贪凉","大汗","冰饮"] },
    { name: "立秋", date: "2026-08-07", tip: "立秋润肺生津。", food: ["梨","百合","银耳"], recipe: "银耳百合羹", avoid: ["辛辣","熬夜"] },
  ];
  const found = JIEQI.filter((j) => j.date <= today);
  const current = found.length > 0 ? found[found.length - 1] : JIEQI[0];
  return [{
    id: `jieqi-${today}`,
    jieqi: current.name,
    date: current.date,
    tip: current.tip,
    food: current.food,
    recipe: current.recipe,
    avoid: current.avoid,
  }];
}

main().catch(console.error);

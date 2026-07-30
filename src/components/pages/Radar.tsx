import { useState, useMemo } from "react";
import { useRadar } from "../../hooks/useRadar";
import { useJieqi } from "../../hooks/useJieqi";
import KittyRibbon from "../kitty/KittyRibbon";
import KittyFlower from "../kitty/KittyFlower";
import type { RadarCategory, RadarViewMode, RadarIndustryItem, RadarTrendingItem, RadarJieqiItem, FiveElementsDaily } from "../../types/radar";

const ITEMS_PER_PAGE = 10;

const CATEGORY_LABELS: { key: RadarCategory; label: string; emoji: string }[] = [
  { key: "all", label: "全部", emoji: "🌐" },
  { key: "industry", label: "行业", emoji: "📰" },
  { key: "trending", label: "爆款", emoji: "🔥" },
  { key: "jieqi", label: "节气", emoji: "🌸" },
  { key: "five-elements", label: "五行", emoji: "👗" },
];

function formatHotCount(n: number): string {
  if (n >= 100000000) return (n / 100000000).toFixed(1) + "亿";
  if (n >= 10000) return (n / 10000).toFixed(1) + "万";
  return n.toString();
}

function IndustryCard({ item }: { item: RadarIndustryItem }) {
  return (
    <div className="card-pink p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="tag">{item.category === "policy" ? "政策" : item.category === "academic" ? "学术" : "事件"}</span>
        <span className="text-xs text-text-gray">{item.publishDate}</span>
      </div>
      <h3 className="font-semibold text-text-dark text-sm mb-1">{item.title}</h3>
      <p className="text-sm text-text-gray leading-relaxed mb-2">{item.summary}</p>
      <div className="flex items-center gap-2 text-xs text-text-gray">
        <span>📌 {item.source}</span>
      </div>
    </div>
  );
}

function TrendingCard({ item }: { item: RadarTrendingItem }) {
  const platformIcon = item.platform === "douyin" ? "🎵" : item.platform === "xiaohongshu" ? "📕" : "📺";
  return (
    <div className="card-pink p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-medium">{platformIcon} {item.platform === "douyin" ? "抖音" : item.platform === "xiaohongshu" ? "小红书" : "B站"}</span>
        <span className="tag tag-ribbon">🔥 {formatHotCount(item.hotCount)}</span>
      </div>
      <h3 className="font-semibold text-text-dark text-sm mb-1">{item.title}</h3>
      <div className="flex gap-1 flex-wrap mb-2">
        {item.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
      </div>
    </div>
  );
}

function JieqiCard({ item }: { item: RadarJieqiItem }) {
  return (
    <div className="card-pink p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="tag tag-mint">{item.jieqi}</span>
        <span className="text-xs text-text-gray">{item.date}</span>
      </div>
      <p className="text-sm text-text-dark mb-2">{item.tip}</p>
      {item.recipe && <p className="text-xs text-text-gray mb-1">🍲 {item.recipe}</p>}
      {item.fiveElement && (
        <div className="mt-2 p-2 bg-bg-pink rounded-lg text-xs">
          <span className="font-medium text-ribbon">五行·{item.fiveElement.element}行</span>
          <span className="text-text-gray ml-2">{item.fiveElement.advice}</span>
        </div>
      )}
      <div className="flex gap-1 flex-wrap mt-2">
        {item.food.map((f) => <span key={f} className="tag">{f}</span>)}
      </div>
    </div>
  );
}

function FiveElementsCard({ data }: { data: FiveElementsDaily }) {
  return (
    <div className="card-pink p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-ribbon text-sm">👗 今日五行穿衣指南</span>
        <span className="text-xs text-text-gray">{data.today} · {data.dayGanZhi}</span>
      </div>
      <div className="bg-bg-pink rounded-xl p-3">
        <p className="text-sm text-text-dark font-medium mb-1">日主：{data.dayElement}行 · 吉方：{data.auspiciousDirection}</p>
        <p className="text-sm text-text-gray">{data.dressAdvice}</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-mint/20 rounded-lg p-2">
          <p className="text-xs font-medium text-mint mb-1">✅ 幸运色</p>
          <div className="flex gap-1 flex-wrap">
            {data.luckyColors.map((c) => (
              <span key={c} className="tag tag-mint">{c}</span>
            ))}
          </div>
        </div>
        <div className="bg-pink/10 rounded-lg p-2">
          <p className="text-xs font-medium text-ribbon mb-1">❌ 避讳色</p>
          <div className="flex gap-1 flex-wrap">
            {data.avoidColors.map((c) => (
              <span key={c} className="tag tag-ribbon">{c}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div>
          <span className="text-text-gray">宜：</span>
          <span className="text-text-dark">{data.activities.join("、")}</span>
        </div>
        <div>
          <span className="text-text-gray">忌：</span>
          <span className="text-text-dark">{data.avoidActivities.join("、")}</span>
        </div>
      </div>
    </div>
  );
}

export default function Radar() {
  const { data, loading, error, isOffline, refresh } = useRadar();
  const { currentJieqi, nextJieqi, daysUntilNext } = useJieqi();
  const [category, setCategory] = useState<RadarCategory>("all");
  const [viewMode, setViewMode] = useState<RadarViewMode>("card");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const allItems = useMemo(() => {
    if (!data) return [];
    const items: { type: "industry" | "trending" | "jieqi"; data: RadarIndustryItem | RadarTrendingItem | RadarJieqiItem; date: string }[] = [];
    data.industry.forEach((i) => items.push({ type: "industry", data: i, date: i.publishDate }));
    data.trending.forEach((t) => items.push({ type: "trending", data: t, date: "" }));
    data.jieqi.forEach((j) => items.push({ type: "jieqi", data: j, date: j.date }));
    if (items.filter((i) => i.type === "jieqi").length === 0 && currentJieqi) {
      items.push({
        type: "jieqi",
        data: { id: "builtin-jieqi", jieqi: currentJieqi.name, date: currentJieqi.date, tip: currentJieqi.tip, food: currentJieqi.food, recipe: currentJieqi.recipe, avoid: currentJieqi.avoid },
        date: currentJieqi.date,
      });
    }
    items.sort((a, b) => b.date.localeCompare(a.date));
    return items;
  }, [data, currentJieqi]);

  const filteredItems = useMemo(() => {
    if (category === "all") return allItems;
    return allItems.filter((i) => i.type === category);
  }, [allItems, category]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;
  const loadMore = () => setVisibleCount((c) => c + ITEMS_PER_PAGE);

  return (
    <div className="space-y-4 animate-fade-in-up">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-ribbon">📡 资讯雷达</h2>
        <div className="flex gap-1">
          <button onClick={() => setViewMode("card")} className={`px-3 py-2 rounded-btn text-xs font-medium transition-all min-h-[44px] ${viewMode === "card" ? "bg-pink text-white shadow-pink" : "bg-white text-text-dark border border-light-pink"}`}>卡片</button>
          <button onClick={() => setViewMode("timeline")} className={`px-3 py-2 rounded-btn text-xs font-medium transition-all min-h-[44px] ${viewMode === "timeline" ? "bg-pink text-white shadow-pink" : "bg-white text-text-dark border border-light-pink"}`}>时间线</button>
        </div>
      </div>

      <KittyRibbon title={`当前节气：${currentJieqi.name} · 距${nextJieqi.name}还有${daysUntilNext}天`} emoji="🌸" />

      {isOffline && (
        <div className="card-pink p-3 text-xs text-text-gray flex items-center gap-2">
          <span>⚠️</span><span>离线数据，点击刷新</span>
          <button onClick={refresh} className="btn-outline-pink text-xs py-1 px-3 ml-auto">刷新</button>
        </div>
      )}

      {/* 五行穿衣卡片 - 始终显示 */}
      {data?.fiveElements && (
        <FiveElementsCard data={data.fiveElements} />
      )}

      <div className="flex gap-2 overflow-x-auto pb-2">
        {CATEGORY_LABELS.map(({ key, label, emoji }) => (
          <button key={key} onClick={() => { setCategory(key); setVisibleCount(ITEMS_PER_PAGE); }}
            className={`flex-shrink-0 px-4 py-2.5 rounded-btn text-sm font-medium transition-all min-h-[44px] ${category === key ? "bg-pink text-white shadow-pink" : "bg-white text-text-dark border border-light-pink"}`}>
            {emoji} {label}
          </button>
        ))}
      </div>

      {loading && (
        <div className="text-center py-8 text-text-gray">
          <span className="text-3xl">🎀</span>
          <p className="mt-2 text-sm">加载中...</p>
        </div>
      )}

      {error && !loading && (
        <div className="card-pink p-4 text-center text-sm text-text-gray">
          <p>加载失败：{error}</p>
          <button onClick={refresh} className="btn-pink text-xs mt-2">重试</button>
        </div>
      )}

      {!loading && !error && category !== "five-elements" && visibleItems.length === 0 && (
        <div className="text-center py-12 text-text-gray">
          <span className="text-4xl">🎀</span>
          <p className="mt-3 text-sm">暂无最新资讯</p>
        </div>
      )}

      {category !== "five-elements" && (
        <div className={viewMode === "timeline" ? "relative pl-6 border-l-2 border-light-pink" : "grid gap-3"}>
          {visibleItems.map((item, idx) => {
            const card = item.type === "industry" ? <IndustryCard item={item.data as RadarIndustryItem} />
              : item.type === "trending" ? <TrendingCard item={item.data as RadarTrendingItem} />
              : <JieqiCard item={item.data as RadarJieqiItem} />;
            if (viewMode === "timeline") {
              return (
                <div key={idx} className="relative pb-4">
                  <div className="absolute -left-[22px] top-3 w-3 h-3 rounded-full bg-pink border-2 border-white" />
                  {card}
                </div>
              );
            }
            return <div key={idx}>{card}</div>;
          })}
        </div>
      )}

      {hasMore && (
        <div className="text-center pb-4">
          <button onClick={loadMore} className="btn-outline-pink text-sm">加载更多</button>
        </div>
      )}

      <KittyFlower text="🌸 资讯由 GitHub Actions 每6小时自动抓取" />
    </div>
  );
}

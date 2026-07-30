import { useState, useEffect } from "react";
import type { QuoteV2 } from "../../data/quotes";
import { quotes } from "../../data/quotes";
import { useFavorites } from "../../hooks/useFavorites";
import { copyToClipboard } from "../../utils/clipboard";
import KittyFlower from "../kitty/KittyFlower";

export default function DailyQuote() {
  const [index, setIndex] = useState(0);
  const [toast, setToast] = useState("");
  const { addFavorite, isFavorited, removeFavorite, favorites } = useFavorites();
  const [favStatus, setFavStatus] = useState<Map<number, boolean>>(new Map());

  const quote = quotes[index % quotes.length];
  const soothing = quotes.filter((q) => q.type === "soothing");
  const wisdom = quotes.filter((q) => q.type === "wisdom");

  useEffect(() => {
    isFavorited("quote", quote.id).then((v) =>
      setFavStatus((prev) => new Map(prev).set(quote.id, v))
    );
  }, [quote.id]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  const handleCopy = async () => {
    const text = `${quote.emotionHook}\n\n${quote.wisdom}\n\n${quote.actionGuide}`;
    const ok = await copyToClipboard(text);
    showToast(ok ? "已复制" : "复制失败");
  };

  const handleFavorite = async () => {
    const fav = favorites.find((f) => f.type === "quote" && f.itemId === quote.id);
    if (fav) {
      await removeFavorite(fav.id!);
      setFavStatus((prev) => new Map(prev).set(quote.id, false));
      showToast("已取消收藏");
    } else {
      await addFavorite("quote", quote.id, JSON.stringify(quote));
      setFavStatus((prev) => new Map(prev).set(quote.id, true));
      showToast("已收藏 💖");
    }
  };

  const typeLabel = quote.type === "soothing" ? "💕 情绪安抚" : "✨ 通透短句";

  return (
    <div className="space-y-5 animate-fade-in-up max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-ribbon">💖 治愈一语</h2>

      {/* 主卡片 — 三段式 */}
      <div className="card-pink p-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 text-6xl opacity-10">🌸</div>
        <div className="relative z-10">
          <span className="inline-block tag mb-4">{typeLabel}</span>

          {/* 情绪锚点 */}
          <p className="text-sm text-text-gray leading-relaxed mb-4 italic">
            {quote.emotionHook}
          </p>

          {/* 中医哲理 */}
          <p className="text-base leading-relaxed text-text-dark font-medium mb-3">
            {quote.wisdom}
          </p>

          {/* 核心短句 */}
          <p className="text-lg font-bold text-ribbon mb-4">「{quote.corePhrase}」</p>

          {/* 行动引导 */}
          <p className="text-sm text-text-gray leading-relaxed mb-4 border-t border-light-pink pt-3">
            🌿 {quote.actionGuide}
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <button className="btn-outline-pink text-sm" onClick={handleCopy}>📋 复制</button>
            <button
              className={`btn-outline-pink text-sm ${favStatus.get(quote.id) ? "bg-bg-pink" : ""}`}
              onClick={handleFavorite}
            >
              {favStatus.get(quote.id) ? "💖 已收藏" : "🤍 收藏"}
            </button>
            <button className="btn-pink text-sm" onClick={() => setIndex((i) => i + 1)}>
              🔄 换一条
            </button>
          </div>

          {/* 标签 */}
          <div className="flex justify-center gap-1 mt-4 flex-wrap">
            {quote.tags.map((tag) => (
              <span key={tag} className="tag text-[10px]">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 情绪安抚列表 */}
      <div>
        <h3 className="text-sm font-semibold text-text-gray mb-3">💕 情绪安抚</h3>
        <div className="grid gap-2">
          {soothing.slice(0, 4).map((q) => (
            <div key={q.id} className="card-pink p-3 text-sm text-text-dark">
              <p className="font-medium text-xs text-ribbon mb-1">「{q.corePhrase}」</p>
              <p className="text-text-gray text-xs leading-relaxed line-clamp-2">{q.emotionHook}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 通透短句列表 */}
      <div>
        <h3 className="text-sm font-semibold text-text-gray mb-3">✨ 通透短句</h3>
        <div className="grid gap-2">
          {wisdom.slice(0, 4).map((q) => (
            <div key={q.id} className="card-pink p-3 text-sm text-text-dark">
              <p className="font-medium text-xs text-ribbon mb-1">「{q.corePhrase}」</p>
              <p className="text-text-gray text-xs leading-relaxed line-clamp-2">{q.wisdom}</p>
            </div>
          ))}
        </div>
      </div>

      <KittyFlower text="🌸 每天一句治愈语，养心比养生更重要" />
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

import { useState, useEffect } from "react";
import { quotes } from "../../data/quotes";
import { useFavorites } from "../../hooks/useFavorites";
import { copyToClipboard } from "../../utils/clipboard";

export default function DailyQuote() {
  const [index, setIndex] = useState(0);
  const [toast, setToast] = useState("");
  const { addFavorite, isFavorited, removeFavorite, favorites } = useFavorites();
  const [favStatus, setFavStatus] = useState<Map<number, boolean>>(new Map());
  const [favIds, setFavIds] = useState<Map<number, number>>(new Map());

  const quote = quotes[index % quotes.length];
  const soothe = quotes.filter((q) => q.type === "安抚");
  const wisdom = quotes.filter((q) => q.type === "通透");

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
    const ok = await copyToClipboard(quote.text);
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

  return (
    <div className="space-y-5 animate-fade-in-up max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-ribbon">💖 治愈一语</h2>

      {/* 大卡片 */}
      <div className="card-pink p-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 text-6xl opacity-10">🌸</div>
        <div className="relative z-10">
          <span className="inline-block tag mb-4">{quote.type === "安抚" ? "💕 情绪安抚" : "✨ 通透短句"}</span>
          <p className="text-lg leading-relaxed text-text-dark font-medium mb-4">
            {quote.text}
          </p>
          <div className="flex items-center justify-center gap-3">
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
        </div>
      </div>

      {/* 安抚卡片 */}
      <div>
        <h3 className="text-sm font-semibold text-text-gray mb-3">💕 情绪安抚</h3>
        <div className="grid gap-2">
          {soothe.slice(0, 4).map((q) => (
            <div key={q.id} className="card-pink p-3 text-sm text-text-dark flex justify-between items-center">
              <span>{q.text}</span>
              <button className="btn-ghost" onClick={() => { copyToClipboard(q.text); showToast("已复制"); }}>
                📋
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 通透短句 */}
      <div>
        <h3 className="text-sm font-semibold text-text-gray mb-3">✨ 通透短句</h3>
        <div className="grid gap-2">
          {wisdom.slice(0, 4).map((q) => (
            <div key={q.id} className="card-pink p-3 text-sm text-text-dark flex justify-between items-center">
              <span>{q.text}</span>
              <button className="btn-ghost" onClick={() => { copyToClipboard(q.text); showToast("已复制"); }}>
                📋
              </button>
            </div>
          ))}
        </div>
      </div>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

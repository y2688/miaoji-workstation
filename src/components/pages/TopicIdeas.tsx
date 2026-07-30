import { useState, useEffect } from "react";
import { topics } from "../../data/topics";
import { useFavorites } from "../../hooks/useFavorites";
import { copyToClipboard } from "../../utils/clipboard";
import { todayStr } from "../../utils/date";

function getDailyTopics() {
  const date = new Date();
  const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
  const shuffled = [...topics];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = (seed * (i + 1)) % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, 8);
}

export default function TopicIdeas() {
  const [dailyTopics] = useState(() => getDailyTopics());
  const [toast, setToast] = useState("");
  const { addFavorite, isFavorited, removeFavorite, favorites } = useFavorites();
  const [favStatus, setFavStatus] = useState<Map<number, boolean>>(new Map());

  useEffect(() => {
    dailyTopics.forEach(async (t) => {
      const v = await isFavorited("topic", t.id);
      setFavStatus((prev) => new Map(prev).set(t.id, v));
    });
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  const handleCopy = async (t: typeof topics[0]) => {
    const text = `【选题】${t.title}\n标签：${t.tags.join(" / ")}\n分类：${t.category}`;
    const ok = await copyToClipboard(text);
    showToast(ok ? "已复制选题" : "复制失败");
  };

  const handleFavorite = async (t: typeof topics[0]) => {
    const fav = favorites.find((f) => f.type === "topic" && f.itemId === t.id);
    if (fav) {
      await removeFavorite(fav.id!);
      setFavStatus((prev) => new Map(prev).set(t.id, false));
      showToast("已取消收藏");
    } else {
      await addFavorite("topic", t.id, JSON.stringify(t));
      setFavStatus((prev) => new Map(prev).set(t.id, true));
      showToast("已收藏 💡");
    }
  };

  return (
    <div className="space-y-4 animate-fade-in-up">
      <h2 className="text-xl font-bold text-ribbon">💡 选题灵感</h2>
      <p className="text-sm text-text-gray">今日推荐 {dailyTopics.length} 组选题，选一个开始创作吧</p>

      <div className="grid gap-3">
        {dailyTopics.map((t) => (
          <div key={t.id} className="card-pink p-4">
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="font-semibold text-text-dark text-sm flex-1">{t.title}</h3>
              <span className="tag flex-shrink-0">{t.category}</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              {t.tags.map((tag) => {
                let cls = "tag";
                if (tag === "翻拍") cls = "tag tag-mint";
                if (tag === "二创") cls = "tag tag-lavender";
                return <span key={tag} className={cls}>{tag}</span>;
              })}
            </div>
            <div className="flex gap-2">
              <button className="btn-outline-pink text-xs py-1.5" onClick={() => handleCopy(t)}>
                📋 复制
              </button>
              <button
                className={`btn-outline-pink text-xs py-1.5 ${favStatus.get(t.id) ? "bg-bg-pink" : ""}`}
                onClick={() => handleFavorite(t)}
              >
                {favStatus.get(t.id) ? "💖" : "🤍"} 收藏
              </button>
            </div>
          </div>
        ))}
      </div>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

import { useState } from "react";
import { useFavorites } from "../../hooks/useFavorites";
import { copyToClipboard } from "../../utils/clipboard";

const tabs = [
  { id: "all", label: "全部" },
  { id: "quote", label: "💖 治愈" },
  { id: "topic", label: "💡 选题" },
  { id: "copywriting", label: "✍️ 文案" },
];

export default function Favorites() {
  const { favorites, removeFavorite, getByType } = useFavorites();
  const [tab, setTab] = useState("all");
  const [toast, setToast] = useState("");

  const filtered = tab === "all" ? favorites : getByType(tab as "quote" | "topic" | "copywriting");

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  const handleCopy = async (data: string) => {
    const ok = await copyToClipboard(data);
    showToast(ok ? "已复制" : "复制失败");
  };

  const getItemContent = (fav: typeof favorites[0]) => {
    try {
      const d = JSON.parse(fav.itemData);
      if (fav.type === "quote") return d.text;
      if (fav.type === "topic") return d.title;
      if (fav.type === "copywriting") return d.content;
    } catch {
      return fav.itemData;
    }
  };

  return (
    <div className="space-y-4 animate-fade-in-up">
      <h2 className="text-xl font-bold text-ribbon">⭐ 收藏夹</h2>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`tab-underline flex-shrink-0 px-4 py-2.5 rounded-btn text-sm font-medium transition-all min-h-[44px] ${
              tab === t.id
                ? "bg-pink text-white shadow-pink active"
                : "bg-white text-text-dark border border-light-pink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="card-pink p-8 text-center text-text-gray">
          <div className="text-4xl mb-3">📭</div>
          <p>还没有收藏内容</p>
          <p className="text-sm mt-1">去逛逛其他页面收藏一些吧</p>
        </div>
      ) : (
        <div className="grid gap-3">
          {filtered.map((fav) => (
            <div key={fav.id} className="card-pink p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="tag">{fav.type === "quote" ? "💖 治愈" : fav.type === "topic" ? "💡 选题" : "✍️ 文案"}</span>
              </div>
              <p className="text-sm text-text-dark leading-relaxed mb-3">{getItemContent(fav)}</p>
              <div className="flex gap-2">
                <button className="btn-outline-pink text-xs py-1.5" onClick={() => handleCopy(getItemContent(fav))}>
                  📋 复制
                </button>
                <button
                  className="btn-outline-pink text-xs py-1.5"
                  onClick={() => { removeFavorite(fav.id!); showToast("已取消收藏"); }}
                >
                  🗑 取消收藏
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

import { useState, useEffect } from "react";
import { platforms, copywritingItems } from "../../data/copywriting";
import { useFavorites } from "../../hooks/useFavorites";
import { copyToClipboard } from "../../utils/clipboard";

export default function Copywriting() {
  const [platform, setPlatform] = useState("all");
  const [toast, setToast] = useState("");
  const { addFavorite, isFavorited, removeFavorite, favorites } = useFavorites();
  const [favStatus, setFavStatus] = useState<Map<number, boolean>>(new Map());

  const filtered = platform === "all"
    ? copywritingItems
    : copywritingItems.filter((c) => c.platform === platform);

  useEffect(() => {
    filtered.forEach(async (c) => {
      const v = await isFavorited("copywriting", c.id);
      setFavStatus((prev) => new Map(prev).set(c.id, v));
    });
  }, [platform]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  const handleCopy = async (c: typeof copywritingItems[0]) => {
    const ok = await copyToClipboard(c.content);
    showToast(ok ? "已复制文案" : "复制失败");
  };

  const handleFavorite = async (c: typeof copywritingItems[0]) => {
    const fav = favorites.find((f) => f.type === "copywriting" && f.itemId === c.id);
    if (fav) {
      await removeFavorite(fav.id!);
      setFavStatus((prev) => new Map(prev).set(c.id, false));
      showToast("已取消收藏");
    } else {
      await addFavorite("copywriting", c.id, JSON.stringify(c));
      setFavStatus((prev) => new Map(prev).set(c.id, true));
      showToast("已收藏 ✍️");
    }
  };

  return (
    <div className="space-y-4 animate-fade-in-up">
      <h2 className="text-xl font-bold text-ribbon">✍️ 文案素材 🎀</h2>
      <p className="text-sm text-text-gray">已适配四大平台的文案，复制即用，轻松创作 🐱</p>

      <div className="card-pink p-3 text-xs text-text-gray flex items-start gap-2">
        <span>⚠️</span>
        <span>合规提示：文案仅供参考，发布时请结合个人实际情况调整，避免夸大功效和医疗承诺。</span>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        <button
          onClick={() => setPlatform("all")}
          className={`tab-underline flex-shrink-0 px-4 py-2 rounded-btn text-sm font-medium transition-all ${
            platform === "all" ? "bg-pink text-white shadow-pink active" : "bg-white text-text-dark border border-light-pink"
          }`}
        >
          🌐 全部
        </button>
        {platforms.map((p) => (
          <button
            key={p.id}
            onClick={() => setPlatform(p.id)}
            className={`tab-underline flex-shrink-0 px-4 py-2 rounded-btn text-sm font-medium transition-all ${
              platform === p.id ? "bg-pink text-white shadow-pink active" : "bg-white text-text-dark border border-light-pink"
            }`}
          >
            {p.icon} {p.name}
          </button>
        ))}
      </div>

      <div className="grid gap-3">
        {filtered.map((c) => (
          <div key={c.id} className="card-pink p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="tag">{platforms.find((p) => p.id === c.platform)?.icon} {platforms.find((p) => p.id === c.platform)?.name}</span>
              <span className="tag tag-lavender">{c.category}</span>
            </div>
            <h3 className="font-semibold text-text-dark text-sm mb-2">{c.title}</h3>
            <p className="text-sm text-text-gray leading-relaxed mb-3">{c.content}</p>
            <div className="flex gap-2">
              <button className="btn-outline-pink text-xs py-1.5" onClick={() => handleCopy(c)}>
                📋 复制文案
              </button>
              <button
                className={`btn-outline-pink text-xs py-1.5 ${favStatus.get(c.id) ? "bg-bg-pink" : ""}`}
                onClick={() => handleFavorite(c)}
              >
                {favStatus.get(c.id) ? "💖" : "🤍"} 收藏
              </button>
            </div>
          </div>
        ))}
      </div>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

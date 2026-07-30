import { useState, useEffect } from "react";
import type { TopicIdeaV2 } from "../../data/topics";
import { topics } from "../../data/topics";
import { useFavorites } from "../../hooks/useFavorites";
import { copyToClipboard } from "../../utils/clipboard";
import KittyFlower from "../kitty/KittyFlower";

function getDailyTopics(): TopicIdeaV2[] {
  const date = new Date();
  const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
  const shuffled = [...topics];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = (seed * (i + 1)) % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, 8);
}

function TopicCard({ topic, favStatus, onCopy, onFavorite }: {
  topic: TopicIdeaV2;
  favStatus: boolean;
  onCopy: () => void;
  onFavorite: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const { script, shooting, publish } = topic;

  return (
    <div className="card-pink p-4">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-semibold text-text-dark text-sm flex-1">{topic.title}</h3>
        <span className="tag flex-shrink-0">{topic.category}</span>
      </div>
      <div className="flex items-center gap-2 mb-3">
        {topic.tags.map((tag) => {
          let cls = "tag";
          if (tag === "翻拍") cls = "tag tag-mint";
          if (tag === "二创") cls = "tag tag-lavender";
          return <span key={tag} className={cls}>{tag}</span>;
        })}
      </div>

      {/* 快速预览 */}
      <p className="text-xs text-text-gray mb-2">📢 {script.hook}</p>

      {expanded && (
        <div className="mt-3 space-y-3 text-sm border-t border-light-pink pt-3">
          <div>
            <p className="font-medium text-text-dark mb-1">🎬 脚本框架：</p>
            <p className="text-text-gray mb-1"><span className="font-medium">开头：</span>{script.opening}</p>
            <div className="ml-2 space-y-1 mb-2">
              {script.body.map((b, i) => (
                <p key={i} className="text-text-gray">· {b}</p>
              ))}
            </div>
            <p className="text-text-gray"><span className="font-medium">结尾：</span>{script.cta}</p>
          </div>
          <div>
            <p className="font-medium text-text-dark mb-1">📷 拍摄建议：</p>
            <p className="text-text-gray">风格：{shooting.style} · 时长：{shooting.duration}</p>
            <p className="text-text-gray">道具：{shooting.props.join("、")}</p>
            <p className="text-text-gray">BGM：{shooting.bgm}</p>
          </div>
          <div>
            <p className="font-medium text-text-dark mb-1">📅 发布建议：</p>
            <p className="text-text-gray">平台：{publish.platform} · 最佳时间：{publish.bestTime}</p>
            <div className="flex gap-1 flex-wrap mt-1">
              {publish.hashtags.map((h) => <span key={h} className="tag text-[10px]">{h}</span>)}
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-2 mt-3">
        <button onClick={() => setExpanded(!expanded)} className="btn-outline-pink text-xs py-1.5">
          {expanded ? "收起" : "展开完整脚本"}
        </button>
        <button className="btn-outline-pink text-xs py-1.5" onClick={onCopy}>
          📋 复制选题
        </button>
        <button
          className={`btn-outline-pink text-xs py-1.5 ${favStatus ? "bg-bg-pink" : ""}`}
          onClick={onFavorite}
        >
          {favStatus ? "💖" : "🤍"} 收藏
        </button>
      </div>
    </div>
  );
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

  const handleCopy = async (t: TopicIdeaV2) => {
    const text = `【选题】${t.title}\n\n📢 钩子：${t.script.hook}\n\n🎬 开头：${t.script.opening}\n${t.script.body.map((b) => "· " + b).join("\n")}\n结尾：${t.script.cta}\n\n📷 拍摄：${t.shooting.style} · ${t.shooting.duration}\n道具：${t.shooting.props.join("、")}\n\n📅 发布：${t.publish.platform} · ${t.publish.bestTime}\n标签：${t.publish.hashtags.join(" ")}`;
    const ok = await copyToClipboard(text);
    showToast(ok ? "已复制选题" : "复制失败");
  };

  const handleFavorite = async (t: TopicIdeaV2) => {
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
      <p className="text-sm text-text-gray">今日推荐 {dailyTopics.length} 组选题（含完整脚本框架），选一个开始创作吧</p>

      <div className="grid gap-3">
        {dailyTopics.map((t) => (
          <TopicCard
            key={t.id}
            topic={t}
            favStatus={favStatus.get(t.id) ?? false}
            onCopy={() => handleCopy(t)}
            onFavorite={() => handleFavorite(t)}
          />
        ))}
      </div>

      <KittyFlower text="💡 好选题是爆款的一半" />
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

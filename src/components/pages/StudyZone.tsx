import { useState } from "react";
import { studyCategories, studyItems, type StudyItemV2 } from "../../data/study";
import KittyFlower from "../kitty/KittyFlower";

function StudyCard({ item, learned, onToggle }: { item: StudyItemV2; learned: boolean; onToggle: () => void }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={`card-pink p-4 transition-all ${learned ? "opacity-70 border-mint" : ""}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="font-semibold text-text-dark mb-1">{item.title}</h3>
          <p className="text-sm text-ribbon font-medium mb-2">{item.hook}</p>

          {expanded && (
            <div className="mt-3 space-y-3 text-sm">
              <div>
                <p className="font-medium text-text-dark mb-1">📋 方法步骤：</p>
                <ol className="list-decimal list-inside space-y-1 text-text-gray">
                  {item.steps.map((s, i) => <li key={i}>{s}</li>)}
                </ol>
              </div>
              <div>
                <p className="font-medium text-text-dark mb-1">💡 中医原理：</p>
                <p className="text-text-gray">{item.why}</p>
              </div>
              <div>
                <p className="font-medium text-text-dark mb-1">✨ 预期效果：</p>
                <p className="text-text-gray">{item.effect}</p>
              </div>
              {item.caution && (
                <div>
                  <p className="font-medium text-text-dark mb-1">⚠️ 注意：</p>
                  <p className="text-text-gray">{item.caution}</p>
                </div>
              )}
              {item.videoTip && (
                <div>
                  <p className="font-medium text-text-dark mb-1">🎬 视频灵感：</p>
                  <p className="text-text-gray">{item.videoTip}</p>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setExpanded(!expanded)}
            className="min-w-[44px] h-[44px] rounded-full flex items-center justify-center text-sm bg-white border border-light-pink text-text-dark hover:bg-bg-pink transition-all"
          >
            {expanded ? "▲" : "▼"}
          </button>
          <button
            onClick={onToggle}
            className={`flex-shrink-0 min-w-[44px] h-[44px] rounded-full flex items-center justify-center text-sm transition-all ${
              learned ? "bg-mint text-green-700" : "bg-bg-pink text-pink hover:bg-pink hover:text-white"
            }`}
          >
            {learned ? "✓" : "学"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function StudyZone() {
  const [activeCategory, setActiveCategory] = useState(studyCategories[0].id);
  const [learned, setLearned] = useState<Set<string>>(new Set());

  const items = studyItems.filter((s) => s.category === activeCategory);
  const cat = studyCategories.find((c) => c.id === activeCategory);

  return (
    <div className="space-y-4 animate-fade-in-up">
      <h2 className="text-xl font-bold text-ribbon">📚 中医自学</h2>
      <p className="text-sm text-text-gray">每天学一个小方法，日积月累你就是半个中医通</p>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {studyCategories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCategory(c.id)}
            className={`tab-underline flex-shrink-0 px-4 py-2 rounded-btn text-sm font-medium transition-all ${
              activeCategory === c.id
                ? "bg-pink text-white shadow-pink active"
                : "bg-white text-text-dark border border-light-pink hover:bg-bg-pink"
            }`}
          >
            {c.icon} {c.name}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-text-gray">
          已学 {learned.size}/{items.length} 条
        </span>
      </div>

      <div className="grid gap-3">
        {items.map((item) => (
          <StudyCard
            key={item.id}
            item={item}
            learned={learned.has(item.id)}
            onToggle={() =>
              setLearned((prev) => {
                const next = new Set(prev);
                next.has(item.id) ? next.delete(item.id) : next.add(item.id);
                return next;
              })
            }
          />
        ))}
      </div>

      <KittyFlower text="🌸 不急不躁，每天进步一点点" />
    </div>
  );
}

import { useState } from "react";
import { studyCategories, studyItems } from "../../data/study";

export default function StudyZone() {
  const [activeCategory, setActiveCategory] = useState(studyCategories[0].id);
  const [learned, setLearned] = useState<Set<string>>(new Set());

  const items = studyItems.filter((s) => s.category === activeCategory);
  const cat = studyCategories.find((c) => c.id === activeCategory);

  return (
    <div className="space-y-4 animate-fade-in-up">
      <h2 className="text-xl font-bold text-ribbon">📚 中医自学</h2>
      <p className="text-sm text-text-gray">每天学一点，日积月累你就是半个中医通</p>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
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
          <div
            key={item.id}
            className={`card-pink p-4 transition-all ${
              learned.has(item.id) ? "opacity-70 border-mint" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="font-semibold text-text-dark mb-1">{item.title}</h3>
                <p className="text-sm text-text-gray leading-relaxed">{item.content}</p>
              </div>
              <button
                onClick={() =>
                  setLearned((prev) => {
                    const next = new Set(prev);
                    next.has(item.id) ? next.delete(item.id) : next.add(item.id);
                    return next;
                  })
                }
                className={`flex-shrink-0 min-w-[44px] h-[44px] rounded-full flex items-center justify-center text-sm transition-all ${
                  learned.has(item.id)
                    ? "bg-mint text-green-700"
                    : "bg-bg-pink text-pink hover:bg-pink hover:text-white"
                }`}
              >
                {learned.has(item.id) ? "✓" : "学"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

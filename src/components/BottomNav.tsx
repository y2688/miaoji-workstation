type Page = "home" | "plan" | "quote" | "study" | "quiz" | "topics" | "copywriting" | "favorites" | "checkin" | "radar";

interface Props {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const items: { page: Page; label: string; emoji: string }[] = [
  { page: "home", label: "首页", emoji: "🏠" },
  { page: "radar", label: "资讯", emoji: "📡" },
  { page: "plan", label: "备忘", emoji: "📝" },
  { page: "study", label: "自学", emoji: "📚" },
  { page: "quiz", label: "考题", emoji: "✏️" },
  { page: "topics", label: "选题", emoji: "💡" },
  { page: "copywriting", label: "文案", emoji: "✍️" },
  { page: "favorites", label: "收藏", emoji: "⭐" },
];

export default function BottomNav({ currentPage, onNavigate }: Props) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-light-pink safe-area-bottom md:hidden">
      <div className="flex overflow-x-auto gap-0 px-1 py-1.5 no-scrollbar">
        {items.map(({ page, label, emoji }) => (
          <button
            key={page}
            onClick={() => onNavigate(page)}
            className={`flex flex-col items-center justify-center flex-shrink-0 rounded-xl transition-all ${
              currentPage === page
                ? "text-ribbon bg-bg-pink"
                : "text-text-gray"
            }`}
            style={{ minWidth: "56px", minHeight: "44px", padding: "4px 6px" }}
          >
            <span className="text-lg leading-none">{emoji}</span>
            <span className="text-[10px] font-medium leading-tight mt-0.5">{label}</span>
            {currentPage === page && (
              <div className="w-1 h-1 rounded-full bg-ribbon mt-0.5" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}

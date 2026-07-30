type Page = "home" | "plan" | "quote" | "study" | "quiz" | "topics" | "copywriting" | "favorites" | "checkin" | "radar";

interface Props {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const items: { page: Page; label: string; emoji: string }[] = [
  { page: "home", label: "首页", emoji: "🏠" },
  { page: "plan", label: "备忘", emoji: "📝" },
  { page: "radar", label: "资讯", emoji: "📡" },
  { page: "study", label: "自学", emoji: "📚" },
  { page: "quiz", label: "考题", emoji: "✏️" },
  { page: "topics", label: "选题", emoji: "💡" },
  { page: "favorites", label: "收藏", emoji: "⭐" },
  { page: "checkin", label: "打卡", emoji: "✅" },
];

export default function BottomNav({ currentPage, onNavigate }: Props) {
  return (
    <nav className="bottom-nav-mobile fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-light-pink px-1 py-1 safe-area-bottom">
      <div className="flex justify-around items-center">
        {items.map(({ page, label, emoji }) => (
          <button
            key={page}
            onClick={() => onNavigate(page)}
            className={`flex flex-col items-center py-1 px-0.5 rounded-xl transition-all min-w-0 ${
              currentPage === page ? "text-ribbon" : "text-text-gray"
            }`}
            style={{ minWidth: 0, flex: "1 1 0%" }}
          >
            <span className="text-base leading-none">{emoji}</span>
            <span className="text-[9px] font-medium leading-tight mt-0.5">{label}</span>
            {currentPage === page && (
              <div className="w-1 h-1 rounded-full bg-ribbon mt-0.5" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}

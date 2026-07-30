type Page = "home" | "plan" | "quote" | "study" | "quiz" | "topics" | "copywriting" | "favorites" | "checkin";

interface Props {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const items: { page: Page; label: string; emoji: string }[] = [
  { page: "home", label: "首页", emoji: "🏠" },
  { page: "plan", label: "备忘", emoji: "📝" },
  { page: "study", label: "自学", emoji: "📚" },
  { page: "favorites", label: "收藏", emoji: "⭐" },
  { page: "checkin", label: "打卡", emoji: "✅" },
];

export default function BottomNav({ currentPage, onNavigate }: Props) {
  return (
    <nav className="bottom-nav-mobile fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-light-pink px-2 py-1 flex justify-around items-center safe-area-bottom">
      {items.map(({ page, label, emoji }) => (
        <button
          key={page}
          onClick={() => onNavigate(page)}
          className={`flex flex-col items-center py-1 px-3 rounded-xl min-w-[56px] transition-all ${
            currentPage === page ? "text-ribbon" : "text-text-gray"
          }`}
        >
          <span className="text-xl">{emoji}</span>
          <span className="text-[10px] font-medium mt-0.5">{label}</span>
          {currentPage === page && (
            <div className="w-1 h-1 rounded-full bg-ribbon mt-0.5" />
          )}
        </button>
      ))}
    </nav>
  );
}

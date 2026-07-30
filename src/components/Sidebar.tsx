type Page = "home" | "plan" | "quote" | "study" | "quiz" | "topics" | "copywriting" | "favorites" | "checkin";

interface Props {
  open: boolean;
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onClose: () => void;
}

const navItems: { page: Page; label: string; emoji: string }[] = [
  { page: "home", label: "首页", emoji: "🏠" },
  { page: "plan", label: "备忘录", emoji: "📝" },
  { page: "quote", label: "治愈一语", emoji: "💖" },
  { page: "study", label: "中医自学", emoji: "📚" },
  { page: "quiz", label: "考题", emoji: "✏️" },
  { page: "topics", label: "选题", emoji: "💡" },
  { page: "copywriting", label: "文案", emoji: "✍️" },
  { page: "favorites", label: "收藏", emoji: "⭐" },
  { page: "checkin", label: "打卡", emoji: "✅" },
];

export default function Sidebar({ open, currentPage, onNavigate, onClose }: Props) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={onClose} />
      )}
      <aside
        className={`sidebar-desktop fixed md:sticky top-0 left-0 h-screen w-56 bg-white/80 backdrop-blur border-r border-light-pink z-50 flex-col py-4 px-3 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex items-center gap-2 px-3 mb-6">
          <span className="text-2xl">🌸</span>
          <span className="text-lg font-bold text-ribbon">妙锦工作台</span>
        </div>
        <nav className="flex flex-col gap-1">
          {navItems.map(({ page, label, emoji }) => (
            <button
              key={page}
              onClick={() => onNavigate(page)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-btn text-left text-sm transition-all ${
                currentPage === page
                  ? "bg-pink text-white font-semibold shadow-pink"
                  : "text-text-dark hover:bg-bg-pink"
              }`}
            >
              <span className="text-base">{emoji}</span>
              <span>{label}</span>
            </button>
          ))}
        </nav>
        <div className="mt-auto pt-4 px-3">
          <p className="text-xs text-text-gray">中医养生博主工作台 v1.0</p>
        </div>
      </aside>
    </>
  );
}

interface Props {
  onMenuClick: () => void;
}

export default function TopNav({ onMenuClick }: Props) {
  const now = new Date();
  const hours = now.getHours();
  const greeting = hours < 6 ? "夜深了" : hours < 9 ? "早上好" : hours < 12 ? "上午好" : hours < 14 ? "中午好" : hours < 18 ? "下午好" : "晚上好";

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-light-pink px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="btn-ghost md:hidden">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF85A2" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <span className="text-lg md:text-xl font-bold text-ribbon">
          🌸 妙锦工作台
        </span>
      </div>
      <div className="text-sm text-text-gray">
        {greeting}，今天也要元气满满 🌞
      </div>
    </header>
  );
}

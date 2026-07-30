// Hello Kitty 标志性蝴蝶结 — 独立 SVG 组件
// 可用作水印/装饰/分隔线
export default function KittyBow({ size = 40, className = "", variant = "red" }: { size?: number; className?: string; variant?: "red" | "pink" | "white" }) {
  const colors = {
    red: { main: "#FF1A3A", center: "#CC0020", highlight: "#FF6680" },
    pink: { main: "#FF85A2", center: "#FF6680", highlight: "#FFB5C5" },
    white: { main: "#fff", center: "#FFD1DC", highlight: "#fff" },
  };
  const c = colors[variant];
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="24" rx="14" ry="10" fill={c.main} transform="rotate(-20, 12, 24)"/>
      <ellipse cx="36" cy="24" rx="14" ry="10" fill={c.main} transform="rotate(20, 36, 24)"/>
      <circle cx="24" cy="24" r="7" fill={c.center}/>
      <circle cx="22" cy="22" r="2.5" fill={c.highlight} opacity="0.5"/>
      {/* 缎带垂尾 */}
      <path d="M22,30 Q20,40 18,44" fill="none" stroke={c.main} strokeWidth="4" strokeLinecap="round"/>
      <path d="M26,30 Q28,40 30,44" fill="none" stroke={c.main} strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}

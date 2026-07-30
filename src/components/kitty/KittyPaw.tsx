// Kitty 爪印装饰组件 — 可重复使用的小装饰
// Props: size?, color?, className?
export default function KittyPaw({ size = 24, color = "#FFB5C5", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      {/* 主肉垫 */}
      <ellipse cx="12" cy="14" rx="6" ry="5" fill={color} opacity="0.7"/>
      {/* 三个小趾垫 */}
      <ellipse cx="6" cy="7" rx="3" ry="3.5" fill={color} opacity="0.7" transform="rotate(-15, 6, 7)"/>
      <ellipse cx="12" cy="4" rx="3" ry="3.5" fill={color} opacity="0.7"/>
      <ellipse cx="18" cy="7" rx="3" ry="3.5" fill={color} opacity="0.7" transform="rotate(15, 18, 7)"/>
      {/* 小高光 */}
      <ellipse cx="10" cy="14" rx="2" ry="1.5" fill="#fff" opacity="0.4"/>
      <ellipse cx="4.5" cy="6" rx="1" ry="1" fill="#fff" opacity="0.3"/>
      <ellipse cx="11" cy="3" rx="1" ry="1" fill="#fff" opacity="0.3"/>
      <ellipse cx="17" cy="6" rx="1" ry="1" fill="#fff" opacity="0.3"/>
    </svg>
  );
}

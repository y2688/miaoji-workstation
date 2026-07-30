// 纯CSS蝴蝶结装饰
// Props: size?: number, color?: string (默认#FF2442)
export default function KittyBow({ size = 36, color = "#FF2442" }: { size?: number; color?: string }) {
  const scale = size / 36;
  return (
    <div
      className="kitty-bow"
      style={{ width: size, height: size / 2, transform: `translateX(-50%) scale(${scale})` }}
      aria-hidden="true"
    >
      <div className="kitty-bow-dot" style={{ background: color }} />
    </div>
  );
}

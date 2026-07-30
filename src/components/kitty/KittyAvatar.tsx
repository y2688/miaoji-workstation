// 纯 CSS Hello Kitty 头像，无外部依赖
// Props: size?: number (默认80), className?: string
export default function KittyAvatar({ size = 80, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`kitty-container ${className}`} style={{ width: size, height: size }} aria-hidden="true">
      <div className="kitty-bow"><div className="kitty-bow-dot" /></div>
      <div className="kitty-ear left"><div className="kitty-ear-inner left" /></div>
      <div className="kitty-ear right"><div className="kitty-ear-inner right" /></div>
      <div className="kitty-head" />
      <div className="kitty-eye left" /><div className="kitty-eye right" />
      <div className="kitty-nose" />
      <div className="kitty-whisker l1" /><div className="kitty-whisker l2" />
      <div className="kitty-whisker r1" /><div className="kitty-whisker r2" />
    </div>
  );
}

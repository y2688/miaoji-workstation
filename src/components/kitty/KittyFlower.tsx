export default function KittyFlower({ text, className = "" }: { text?: string; className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`} aria-hidden="true">
      <img src="/kitty/cherry-blossom.svg" alt="" style={{ width: 14, height: 14 }} />
      {text && <span className="text-xs text-text-gray">{text}</span>}
      <img src="/kitty/cherry-blossom.svg" alt="" style={{ width: 14, height: 14, transform: "scaleX(-1)" }} />
    </div>
  );
}

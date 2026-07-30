// 装饰性 Kitty 水印 — 在卡片/页面背景随机散布心形和星星
export default function KittyDecor({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden opacity-[0.06] ${className}`} aria-hidden="true">
      <img src="/kitty/heart-pink.svg" alt="" style={{ position: "absolute", top: "5%", left: "10%", width: 24, height: 24 }} />
      <img src="/kitty/star.svg" alt="" style={{ position: "absolute", top: "15%", right: "8%", width: 18, height: 18 }} />
      <img src="/kitty/heart-pink.svg" alt="" style={{ position: "absolute", bottom: "20%", left: "5%", width: 20, height: 20 }} />
      <img src="/kitty/star.svg" alt="" style={{ position: "absolute", bottom: "10%", right: "12%", width: 16, height: 16 }} />
      <img src="/kitty/heart-pink.svg" alt="" style={{ position: "absolute", top: "50%", right: "3%", width: 22, height: 22 }} />
    </div>
  );
}

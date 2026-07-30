// Hello Kitty 风格头像 — Twemoji 猫脸 + 蝴蝶结叠加
// SVG 素材在 public/kitty/ 目录
export default function KittyAvatar({ size = 80, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: size }} aria-hidden="true">
      <img src="/kitty/cat-face.svg" alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      <img
        src="/kitty/ribbon.svg"
        alt=""
        style={{
          position: "absolute", top: "-12%", right: "-8%",
          width: "50%", height: "50%", objectFit: "contain",
          filter: "drop-shadow(0 1px 2px rgba(255,0,0,0.3))",
        }}
      />
    </div>
  );
}

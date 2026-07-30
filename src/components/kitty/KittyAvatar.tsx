// 精确 Hello Kitty SVG 头像组件
// 特征：椭圆头、左耳大红蝴蝶结、椭圆黑眼、黄鼻子、无嘴、6根胡须
export default function KittyAvatar({ size = 80, className = "" }: { size?: number; className?: string }) {
  const s = size;
  return (
    <svg
      width={s} height={s}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 左耳 - 三角形 */}
      <polygon points="22,32 8,2 38,18" fill="#fff" stroke="#ddd" strokeWidth="1.5" />
      {/* 左耳内部粉色 */}
      <polygon points="21,27 12,8 33,19" fill="#FFB5C5" />
      {/* 右耳 - 三角形 */}
      <polygon points="78,32 92,2 62,18" fill="#fff" stroke="#ddd" strokeWidth="1.5" />
      {/* 右耳内部粉色 */}
      <polygon points="79,27 88,8 67,19" fill="#FFB5C5" />
      
      {/* 大红蝴蝶结 - 在左耳附近 */}
      <g transform="translate(18, 4)">
        {/* 蝴蝶结左侧 */}
        <ellipse cx="-6" cy="0" rx="9" ry="7" fill="#FF2442" transform="rotate(-20)" />
        {/* 蝴蝶结右侧 */}
        <ellipse cx="6" cy="0" rx="9" ry="7" fill="#FF2442" transform="rotate(20)" />
        {/* 蝴蝶结中心结 */}
        <circle cx="0" cy="0" r="4" fill="#CC1030" />
      </g>
      
      {/* 头部 - 椭圆 */}
      <ellipse cx="50" cy="52" rx="28" ry="30" fill="#fff" stroke="#E0E0E0" strokeWidth="1.5" />
      
      {/* 左眼 - 椭圆 */}
      <ellipse cx="38" cy="48" rx="3.5" ry="4.5" fill="#222" />
      {/* 左眼高光 */}
      <ellipse cx="37" cy="46" rx="1.2" ry="1.5" fill="#fff" />
      
      {/* 右眼 - 椭圆 */}
      <ellipse cx="62" cy="48" rx="3.5" ry="4.5" fill="#222" />
      {/* 右眼高光 */}
      <ellipse cx="61" cy="46" rx="1.2" ry="1.5" fill="#fff" />
      
      {/* 鼻子 - 黄色椭圆 */}
      <ellipse cx="50" cy="58" rx="4" ry="3" fill="#FFD700" />
      
      {/* 胡须 - 左边3根 */}
      <line x1="10" y1="46" x2="30" y2="48" stroke="#CCC" strokeWidth="1" />
      <line x1="10" y1="52" x2="30" y2="52" stroke="#CCC" strokeWidth="1" />
      <line x1="10" y1="58" x2="30" y2="56" stroke="#CCC" strokeWidth="1" />
      
      {/* 胡须 - 右边3根 */}
      <line x1="90" y1="46" x2="70" y2="48" stroke="#CCC" strokeWidth="1" />
      <line x1="90" y1="52" x2="70" y2="52" stroke="#CCC" strokeWidth="1" />
      <line x1="90" y1="58" x2="70" y2="56" stroke="#CCC" strokeWidth="1" />
      
      {/* 标志性无嘴 — Hello Kitty 没有嘴巴！ */}
    </svg>
  );
}

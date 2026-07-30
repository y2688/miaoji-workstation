import type { ReactNode } from "react";

// 波点背景包装器
export default function KittyDotBg({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`kitty-dot-bg ${className}`}>{children}</div>;
}

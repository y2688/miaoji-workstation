import type { ReactNode } from "react";

export default function KittyBadge({ children, badge }: { children: ReactNode; badge?: string | number }) {
  return (
    <div className="relative inline-block">
      {children}
      {badge !== undefined && (
        <span className="kitty-badge" aria-hidden="true">{badge}</span>
      )}
    </div>
  );
}

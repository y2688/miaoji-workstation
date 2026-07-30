import { type ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

type Page = "home" | "plan" | "quote" | "study" | "quiz" | "topics" | "copywriting" | "favorites" | "checkin";

interface Props {
  children: ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Layout({ children, currentPage, onNavigate }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="hello-kitty-bg min-h-screen flex flex-col">
      <TopNav onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex flex-1 relative z-10">
        <Sidebar
          open={sidebarOpen}
          currentPage={currentPage}
          onNavigate={(p) => { onNavigate(p); setSidebarOpen(false); }}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="flex-1 p-4 md:p-6 pb-20 md:pb-6 max-w-4xl mx-auto w-full overflow-y-auto">
          {children}
        </main>
      </div>

      <BottomNav currentPage={currentPage} onNavigate={onNavigate} />
    </div>
  );
}

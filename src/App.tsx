import { useState } from "react";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import DailyPlan from "./components/pages/DailyPlan";
import DailyQuote from "./components/pages/DailyQuote";
import StudyZone from "./components/pages/StudyZone";
import DailyQuiz from "./components/pages/DailyQuiz";
import TopicIdeas from "./components/pages/TopicIdeas";
import Copywriting from "./components/pages/Copywriting";
import Favorites from "./components/pages/Favorites";
import Checkin from "./components/pages/Checkin";

type Page =
  | "home"
  | "plan"
  | "quote"
  | "study"
  | "quiz"
  | "topics"
  | "copywriting"
  | "favorites"
  | "checkin";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const renderPage = () => {
    switch (page) {
      case "home": return <Home onNavigate={setPage} />;
      case "plan": return <DailyPlan />;
      case "quote": return <DailyQuote />;
      case "study": return <StudyZone />;
      case "quiz": return <DailyQuiz />;
      case "topics": return <TopicIdeas />;
      case "copywriting": return <Copywriting />;
      case "favorites": return <Favorites />;
      case "checkin": return <Checkin />;
      default: return <Home onNavigate={setPage} />;
    }
  };

  return (
    <Layout currentPage={page} onNavigate={setPage}>
      {renderPage()}
    </Layout>
  );
}

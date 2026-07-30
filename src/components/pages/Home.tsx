import { useEffect, useState } from "react";
import { usePlans } from "../../hooks/usePlans";
import { useCheckin } from "../../hooks/useCheckin";
import { db } from "../../db";

type Page = "home" | "plan" | "quote" | "study" | "quiz" | "topics" | "copywriting" | "favorites" | "checkin";

interface Props {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: Props) {
  const { plans } = usePlans();
  const { getStreak, getCheckinDates } = useCheckin();
  const [quizDone, setQuizDone] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    db.quizLogs.where("date").equals(today).count().then((c) => setQuizDone(c > 0));
  }, []);

  const todayPlans = plans.filter((p) => !p.completed).length;
  const completedPlans = plans.filter((p) => p.completed).length;
  const streak = getStreak();
  const checkinDays = getCheckinDates().length;

  const cards = [
    { label: "待办事项", value: todayPlans, emoji: "📝", color: "from-pink to-ribbon" },
    { label: "已完成", value: completedPlans, emoji: "✅", color: "from-mint to-green-300" },
    { label: "连续打卡", value: `${streak}天`, emoji: "🔥", color: "from-lavender to-purple-300" },
    { label: "总打卡", value: `${checkinDays}天`, emoji: "📅", color: "from-amber-200 to-orange-300" },
  ];

  const shortcuts: { page: Page; label: string; emoji: string; desc: string }[] = [
    { page: "plan", label: "备忘录", emoji: "📝", desc: "今日待办" },
    { page: "quote", label: "治愈一语", emoji: "💖", desc: "每日金句" },
    { page: "study", label: "中医自学", emoji: "📚", desc: "知识库" },
    { page: "quiz", label: "每日考题", emoji: "✏️", desc: quizDone ? "已完成" : "去答题" },
    { page: "topics", label: "选题灵感", emoji: "💡", desc: "60组选题" },
    { page: "copywriting", label: "文案素材", emoji: "✍️", desc: "多平台" },
    { page: "favorites", label: "收藏夹", emoji: "⭐", desc: "我的收藏" },
    { page: "checkin", label: "打卡记录", emoji: "✅", desc: "坚持记录" },
  ];

  return (
    <div className="space-y-5 animate-fade-in-up">
      <div className="flex items-center gap-2">
        <span className="text-3xl animate-ribbon">🎀</span>
        <div>
          <h1 className="text-xl font-bold text-ribbon">妙锦工作台</h1>
          <p className="text-sm text-text-gray">中医养生博主的专属内容助手</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {cards.map((c) => (
          <div key={c.label} className="card-pink p-4 text-center">
            <div className="text-2xl mb-1">{c.emoji}</div>
            <div className="text-2xl font-bold text-ribbon">{c.value}</div>
            <div className="text-xs text-text-gray mt-1">{c.label}</div>
          </div>
        ))}
      </div>

      <div className="card-pink p-5">
        <h2 className="text-base font-semibold text-text-dark mb-4">快捷入口</h2>
        <div className="grid grid-cols-4 gap-3">
          {shortcuts.map((s) => (
            <button
              key={s.page}
              onClick={() => onNavigate(s.page)}
              className="flex flex-col items-center gap-1.5 p-3 rounded-2xl hover:bg-bg-pink transition-all active:scale-95 min-h-[72px]"
            >
              <span className="text-2xl">{s.emoji}</span>
              <span className="text-xs font-medium text-text-dark">{s.label}</span>
              <span className="text-[10px] text-text-gray">{s.desc}</span>
            </button>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-text-gray pb-4">
        🌸 养生先养心，不急不躁，慢慢来 🌸
      </p>
    </div>
  );
}

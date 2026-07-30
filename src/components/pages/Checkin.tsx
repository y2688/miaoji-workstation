import { useState } from "react";
import { useCheckin } from "../../hooks/useCheckin";
import { formatDate, getMonthCalendar } from "../../utils/date";

const weekDays = ["日", "一", "二", "三", "四", "五", "六"];

export default function Checkin() {
  const { checkins, getCheckinDates, getStreak } = useCheckin();
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());

  const checkinDates = getCheckinDates();
  const streak = getStreak();
  const calendar = getMonthCalendar(year, month);
  const today = new Date().toISOString().split("T")[0];

  const prevMonth = () => {
    if (month === 0) { setYear(y => y - 1); setMonth(11); }
    else setMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setYear(y => y + 1); setMonth(0); }
    else setMonth(m => m + 1);
  };

  const typeStats = new Map<string, number>();
  checkins.forEach((c) => {
    typeStats.set(c.type, (typeStats.get(c.type) || 0) + 1);
  });

  return (
    <div className="space-y-4 animate-fade-in-up max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-ribbon">✅ 打卡记录</h2>

      <div className="grid grid-cols-2 gap-3">
        <div className="card-pink p-4 text-center">
          <div className="text-3xl font-bold text-ribbon">{streak}</div>
          <div className="text-xs text-text-gray mt-1">连续打卡天数 🔥</div>
        </div>
        <div className="card-pink p-4 text-center">
          <div className="text-3xl font-bold text-ribbon">{checkinDates.length}</div>
          <div className="text-xs text-text-gray mt-1">累计打卡天数 📅</div>
        </div>
      </div>

      <div className="card-pink p-4">
        <div className="flex items-center justify-between mb-4">
          <button onClick={prevMonth} className="btn-ghost text-xs">◀</button>
          <span className="font-semibold text-text-dark">{year}年{month + 1}月</span>
          <button onClick={nextMonth} className="btn-ghost text-xs">▶</button>
        </div>
        <div className="calendar-grid mb-2">
          {weekDays.map((d) => (
            <div key={d} className="text-center text-xs text-text-gray font-medium py-1">{d}</div>
          ))}
          {calendar.map((day, i) => {
            if (day === null) return <div key={`e${i}`} />;
            const ds = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            const checked = checkinDates.includes(ds);
            const isToday = ds === today;
            return (
              <div
                key={i}
                className={`calendar-day ${checked ? "checked" : ""} ${isToday ? "today" : ""}`}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>

      {checkins.length === 0 ? (
        <div className="card-pink p-6 text-center text-text-gray">
          <div className="text-3xl mb-2">📭</div>
          <p>还没有打卡记录</p>
          <p className="text-xs mt-1">完成考题或日常任务自动打卡</p>
        </div>
      ) : (
        <div className="card-pink p-4">
          <h3 className="text-sm font-semibold text-text-gray mb-3">打卡统计</h3>
          <div className="flex flex-wrap gap-2">
            {Array.from(typeStats.entries()).map(([type, count]) => (
              <div key={type} className="tag">{type}: {count}次</div>
            ))}
          </div>
        </div>
      )}

      {checkins.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-text-gray">最近打卡</h3>
          {checkins.slice(0, 10).map((c) => (
            <div key={c.id} className="card-pink p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="tag">{c.type}</span>
                <span className="text-xs text-text-dark">{c.detail}</span>
              </div>
              <span className="text-xs text-text-gray">{formatDate(c.date)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

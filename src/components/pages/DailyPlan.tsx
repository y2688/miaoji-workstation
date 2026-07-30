import { useState } from "react";
import { usePlans } from "../../hooks/usePlans";

export default function DailyPlan() {
  const { plans, addPlan, togglePlan, deletePlan, clearCompleted } = usePlans();
  const [input, setInput] = useState("");

  const handleAdd = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    await addPlan(trimmed);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleAdd();
  };

  const pending = plans.filter((p) => !p.completed);
  const completed = plans.filter((p) => p.completed);

  return (
    <div className="space-y-4 animate-fade-in-up max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-ribbon">📝 每日备忘录</h2>
      <p className="text-sm text-text-gray">把今天要做的事情写下来，做完就划掉它 ✨</p>

      <div className="flex gap-2">
        <input
          className="input-pink flex-1"
          placeholder="添加新的待办事项..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="btn-pink px-6" onClick={handleAdd}>添加</button>
      </div>

      {plans.length === 0 && (
        <div className="card-pink p-8 text-center text-text-gray">
          <div className="text-4xl mb-3">📋</div>
          <p>今天还没有待办事项</p>
          <p className="text-sm mt-1">写下第一件事吧</p>
        </div>
      )}

      {pending.length > 0 && (
        <div className="card-pink p-4 space-y-2">
          <h3 className="text-sm font-semibold text-text-gray mb-2">待完成 ({pending.length})</h3>
          {pending.map((plan) => (
            <div key={plan.id} className="flex items-center gap-3 py-2 px-1 group">
              <div
                className="circle-checkbox"
                onClick={() => plan.id && togglePlan(plan.id, true)}
              />
              <span className="flex-1 text-sm text-text-dark">{plan.content}</span>
              <button
                className="btn-ghost opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => plan.id && deletePlan(plan.id)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      {completed.length > 0 && (
        <div className="card-pink p-4 space-y-2">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-semibold text-text-gray">已完成 ({completed.length})</h3>
            <button
              className="text-xs text-ribbon hover:underline"
              onClick={clearCompleted}
            >
              清空已完成
            </button>
          </div>
          {completed.map((plan) => (
            <div key={plan.id} className="flex items-center gap-3 py-2 px-1 group">
              <div
                className="circle-checkbox checked"
                onClick={() => plan.id && togglePlan(plan.id, false)}
              />
              <span className="flex-1 text-sm text-text-gray line-through">{plan.content}</span>
              <button
                className="btn-ghost opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => plan.id && deletePlan(plan.id)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

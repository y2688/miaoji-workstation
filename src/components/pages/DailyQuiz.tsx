import { useState, useEffect } from "react";
import { quizQuestions } from "../../data/quiz";
import { db } from "../../db";
import { useCheckin } from "../../hooks/useCheckin";
import { todayStr } from "../../utils/date";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function DailyQuiz() {
  const { addCheckin } = useCheckin();
  const [questions, setQuestions] = useState<typeof quizQuestions>([]);
  const [answers, setAnswers] = useState<Map<number, number | string>>(new Map());
  const [submitted, setSubmitted] = useState(false);
  const [overallDone, setOverallDone] = useState(false);

  useEffect(() => {
    const today = todayStr();
    db.quizLogs.where("date").equals(today).first().then((log) => {
      if (log) {
        setOverallDone(true);
        setSubmitted(true);
      } else {
        const mcq = shuffle(quizQuestions.filter((q) => q.type === "single")).slice(0, 3);
        const saq = shuffle(quizQuestions.filter((q) => q.type === "short")).slice(0, 1);
        setQuestions(shuffle([...mcq, ...saq]));
      }
    });
  }, []);

  const handleSelect = (qId: number, optIdx: number) => {
    if (submitted) return;
    setAnswers((prev) => new Map(prev).set(qId, optIdx));
  };

  const handleShortChange = (qId: number, val: string) => {
    if (submitted) return;
    setAnswers((prev) => new Map(prev).set(qId, val));
  };

  const handleSubmit = async () => {
    if (questions.length === 0) return;
    let score = 0;
    questions.forEach((q) => {
      if (q.type === "single") {
        if (answers.get(q.id) === q.answer) score++;
      } else {
        if (answers.get(q.id) && String(answers.get(q.id)).trim().length > 5) score++;
      }
    });
    const today = todayStr();
    await db.quizLogs.add({
      date: today,
      score,
      total: questions.length,
      answers: JSON.stringify(Object.fromEntries(answers)),
      createdAt: Date.now(),
    });
    await addCheckin("quiz", `考题得分 ${score}/${questions.length}`);
    setSubmitted(true);
  };

  if (overallDone) {
    return (
      <div className="space-y-4 animate-fade-in-up max-w-lg mx-auto text-center">
        <h2 className="text-xl font-bold text-ribbon">✏️ 每日考题</h2>
        <div className="card-pink p-8">
          <div className="text-5xl mb-4">🎉</div>
          <p className="text-lg font-semibold text-text-dark mb-2">今日考题已完成</p>
          <p className="text-sm text-text-gray">坚持学习，明天继续！</p>
        </div>
      </div>
    );
  }

  const mcqCount = questions.filter((q) => q.type === "single").length;
  const answeredCount = Array.from(answers.keys()).filter((id) => {
    const q = questions.find((qq) => qq.id === id);
    if (!q) return false;
    if (q.type === "single") return answers.get(id) !== undefined;
    return String(answers.get(id) || "").trim().length > 0;
  }).length;
  const canSubmit = answeredCount === questions.length;

  return (
    <div className="space-y-4 animate-fade-in-up max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-ribbon">
        ✏️ 每日考题 ({mcqCount}单选 + {questions.length - mcqCount}简答)
      </h2>
      <p className="text-sm text-text-gray">每天四道题，检验中医知识储备</p>

      <div className="space-y-4">
        {questions.map((q, idx) => (
          <div key={q.id} className="card-pink p-4">
            <div className="flex items-start gap-2 mb-3">
              <span className="tag tag-ribbon flex-shrink-0">{idx + 1}</span>
              <div>
                <p className="font-semibold text-text-dark text-sm">{q.question}</p>
                <span className="text-xs text-text-gray">{q.category}</span>
              </div>
            </div>

            {q.type === "single" && q.options && (
              <div className="space-y-2 ml-2">
                {q.options.map((opt, oi) => {
                  const selected = answers.get(q.id) === oi;
                  const correct = submitted && q.answer === oi;
                  const wrong = submitted && selected && q.answer !== oi;
                  let cls = "border-light-pink bg-white";
                  if (selected && !submitted) cls = "border-pink bg-bg-pink";
                  if (correct) cls = "border-mint bg-mint/30";
                  if (wrong) cls = "border-ribbon bg-red-50";
                  return (
                    <button
                      key={oi}
                      onClick={() => handleSelect(q.id, oi)}
                      className={`w-full text-left p-3 rounded-xl border-2 text-sm transition-all min-h-[44px] ${cls}`}
                    >
                      {String.fromCharCode(65 + oi)}. {opt}
                    </button>
                  );
                })}
                {submitted && (
                  <p className="text-xs text-mint font-medium mt-2 bg-mint/10 p-2 rounded-lg">
                    ✅ {q.explanation}
                  </p>
                )}
              </div>
            )}

            {q.type === "short" && (
              <div>
                <textarea
                  className="input-pink min-h-[80px] resize-none"
                  placeholder="请输入你的回答..."
                  value={String(answers.get(q.id) || "")}
                  onChange={(e) => handleShortChange(q.id, e.target.value)}
                  disabled={submitted}
                />
                {submitted && (
                  <div className="mt-2 space-y-2">
                    <p className="text-xs text-text-gray bg-bg-pink p-2 rounded-lg">
                      📝 参考答案：{q.answer as string}
                    </p>
                    <p className="text-xs text-mint font-medium">{q.explanation}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {!submitted && (
        <button
          className={`btn-pink w-full ${!canSubmit ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handleSubmit}
          disabled={!canSubmit}
        >
          提交答案 ({answeredCount}/{questions.length})
        </button>
      )}
    </div>
  );
}

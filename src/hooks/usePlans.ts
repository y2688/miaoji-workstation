import { useState, useEffect, useCallback } from "react";
import { db, type Plan } from "../db";
import { todayStr } from "../utils/date";

export function usePlans() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [error, setError] = useState<string | null>(null);
  const date = todayStr();

  const load = useCallback(async () => {
    try {
      const items = await db.plans.where("date").equals(date).toArray();
      setPlans(items.sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0)));
      setError(null);
    } catch (e: any) {
      console.error("usePlans load failed:", e);
      setError(e?.message || "加载失败");
    }
  }, [date]);

  useEffect(() => { load(); }, [load]);

  const addPlan = async (content: string) => {
    try {
      const plan: Plan = { date, content, completed: false, createdAt: Date.now() };
      const id = await db.plans.add(plan);
      await load();
      return id;
    } catch (e: any) {
      console.error("addPlan failed:", e);
      setError(e?.message || "添加失败");
    }
  };

  const togglePlan = async (id: number, completed: boolean) => {
    try {
      const count = await db.plans.update(id, { completed });
      if (count === 0) {
        console.warn("togglePlan: no plan found with id", id);
        await load(); // 重新加载以防状态不同步
      } else {
        await load();
      }
    } catch (e: any) {
      console.error("togglePlan failed:", e);
      setError(e?.message || "更新失败");
    }
  };

  const deletePlan = async (id: number) => {
    try {
      await db.plans.delete(id);
      await load();
    } catch (e: any) {
      console.error("deletePlan failed:", e);
      setError(e?.message || "删除失败");
    }
  };

  const clearCompleted = async () => {
    try {
      await db.plans.where({ date, completed: true }).delete();
      await load();
    } catch (e: any) {
      console.error("clearCompleted failed:", e);
      setError(e?.message || "清空失败");
    }
  };

  return { plans, error, addPlan, togglePlan, deletePlan, clearCompleted, reload: load };
}

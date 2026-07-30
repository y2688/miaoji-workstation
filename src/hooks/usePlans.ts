import { useState, useEffect, useCallback } from "react";
import { db, type Plan } from "../db";
import { todayStr } from "../utils/date";

export function usePlans() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const date = todayStr();

  const load = useCallback(async () => {
    const items = await db.plans.where("date").equals(date).toArray();
    setPlans(items.sort((a, b) => a.createdAt - b.createdAt));
  }, [date]);

  useEffect(() => { load(); }, [load]);

  const addPlan = async (content: string) => {
    const plan: Plan = { date, content, completed: false, createdAt: Date.now() };
    const id = await db.plans.add(plan);
    await load();
    return id;
  };

  const togglePlan = async (id: number, completed: boolean) => {
    await db.plans.update(id, { completed });
    await load();
  };

  const deletePlan = async (id: number) => {
    await db.plans.delete(id);
    await load();
  };

  const clearCompleted = async () => {
    await db.plans.where({ date, completed: true }).delete();
    await load();
  };

  return { plans, addPlan, togglePlan, deletePlan, clearCompleted };
}

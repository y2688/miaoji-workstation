import { useState, useEffect, useCallback } from "react";
import { db, type Checkin } from "../db";

export function useCheckin() {
  const [checkins, setCheckins] = useState<Checkin[]>([]);

  const load = useCallback(async () => {
    const items = await db.checkins.orderBy("createdAt").reverse().toArray();
    setCheckins(items);
  }, []);

  useEffect(() => { load(); }, [load]);

  const addCheckin = async (type: string, detail: string) => {
    const date = new Date().toISOString().split("T")[0];
    const existing = await db.checkins.where({ date, type }).first();
    if (existing) return;
    await db.checkins.add({ date, type, detail, createdAt: Date.now() });
    await load();
  };

  const getCheckinDates = () => {
    const dates = new Set<string>();
    checkins.forEach((c) => dates.add(c.date));
    return Array.from(dates).sort().reverse();
  };

  const getStreak = () => {
    const dates = getCheckinDates();
    if (dates.length === 0) return 0;
    let streak = 0;
    const today = new Date();
    for (let i = 0; i < 365; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const ds = d.toISOString().split("T")[0];
      if (dates.includes(ds)) streak++;
      else break;
    }
    return streak;
  };

  return { checkins, addCheckin, getCheckinDates, getStreak, reload: load };
}

import Dexie, { type Table } from "dexie";

export interface Plan {
  id?: number;
  date: string;
  content: string;
  completed: boolean;
  createdAt: number;
}

export interface Favorite {
  id?: number;
  type: "quote" | "topic" | "copywriting";
  itemId: number;
  itemData: string;
  createdAt: number;
}

export interface Checkin {
  id?: number;
  date: string;
  type: string;
  detail: string;
  createdAt: number;
}

export interface QuizLog {
  id?: number;
  date: string;
  score: number;
  total: number;
  answers: string;
  createdAt: number;
}

class MiaojiDB extends Dexie {
  plans!: Table<Plan, number>;
  favorites!: Table<Favorite, number>;
  checkins!: Table<Checkin, number>;
  quizLogs!: Table<QuizLog, number>;

  constructor() {
    super("miaoji-workstation");
    this.version(1).stores({
      plans: "++id, date, completed",
      favorites: "++id, type, [type+itemId]",
      checkins: "++id, date, type",
      quizLogs: "++id, date",
    });
  }
}

export const db = new MiaojiDB();

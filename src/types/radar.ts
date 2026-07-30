export interface RadarIndustryItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl: string;
  publishDate: string;
  tags: string[];
  category: "policy" | "academic" | "event";
}

export interface RadarTrendingItem {
  id: string;
  title: string;
  platform: "douyin" | "xiaohongshu" | "bilibili";
  hotCount: number;
  url: string;
  category: string;
  tags: string[];
}

export interface RadarJieqiItem {
  id: string;
  jieqi: string;
  date: string;
  tip: string;
  food: string[];
  recipe: string;
  avoid: string[];
  fiveElement?: {
    element: string;
    color: string;
    direction: string;
    advice: string;
  };
}

export interface FiveElementsDaily {
  today: string;
  dayGanZhi: string;
  dayElement: string;
  luckyColors: string[];
  avoidColors: string[];
  dressAdvice: string;
  auspiciousDirection: string;
  activities: string[];
  avoidActivities: string[];
}

export type RadarCategory = "all" | "industry" | "trending" | "jieqi" | "five-elements";

export type RadarViewMode = "card" | "timeline";

export interface RadarData {
  date: string;
  industry: RadarIndustryItem[];
  trending: RadarTrendingItem[];
  jieqi: RadarJieqiItem[];
  fiveElements?: FiveElementsDaily;
  updatedAt: string;
}

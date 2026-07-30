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
}

export type RadarCategory = "all" | "industry" | "trending" | "jieqi";

export type RadarViewMode = "card" | "timeline";

export interface RadarData {
  date: string;
  industry: RadarIndustryItem[];
  trending: RadarTrendingItem[];
  jieqi: RadarJieqiItem[];
  updatedAt: string;
}

import type { FiveElementsDaily } from "../types/radar";

export const tiangan: Record<string, { element: string; yinYang: string }> = {
  甲: { element: "木", yinYang: "阳" },
  乙: { element: "木", yinYang: "阴" },
  丙: { element: "火", yinYang: "阳" },
  丁: { element: "火", yinYang: "阴" },
  戊: { element: "土", yinYang: "阳" },
  己: { element: "土", yinYang: "阴" },
  庚: { element: "金", yinYang: "阳" },
  辛: { element: "金", yinYang: "阴" },
  壬: { element: "水", yinYang: "阳" },
  癸: { element: "水", yinYang: "阴" },
};

export const dizhi: Record<string, { element: string; direction: string }> = {
  子: { element: "水", direction: "北" },
  丑: { element: "土", direction: "东北" },
  寅: { element: "木", direction: "东北" },
  卯: { element: "木", direction: "东" },
  辰: { element: "土", direction: "东南" },
  巳: { element: "火", direction: "东南" },
  午: { element: "火", direction: "南" },
  未: { element: "土", direction: "西南" },
  申: { element: "金", direction: "西南" },
  酉: { element: "金", direction: "西" },
  戌: { element: "土", direction: "西北" },
  亥: { element: "水", direction: "西北" },
};

export const wuxingColors: Record<string, { lucky: string[]; avoid: string[] }> = {
  木: { lucky: ["绿色", "青色", "墨绿", "浅绿"], avoid: ["白色", "金色", "银色"] },
  火: { lucky: ["红色", "粉色", "紫色", "橙色"], avoid: ["黑色", "深蓝", "灰色"] },
  土: { lucky: ["黄色", "米色", "棕色", "卡其色"], avoid: ["绿色", "青色"] },
  金: { lucky: ["白色", "金色", "银色", "米白"], avoid: ["红色", "粉色", "橙色"] },
  水: { lucky: ["黑色", "深蓝", "藏青", "灰色"], avoid: ["黄色", "米色", "棕色"] },
};

export const wuxingRelations = {
  sheng: { 木: "火", 火: "土", 土: "金", 金: "水", 水: "木" } as Record<string, string>,
  ke: { 木: "土", 土: "水", 水: "火", 火: "金", 金: "木" } as Record<string, string>,
};

export const shengxiao: Record<string, string> = {
  子: "鼠", 丑: "牛", 寅: "虎", 卯: "兔",
  辰: "龙", 巳: "蛇", 午: "马", 未: "羊",
  申: "猴", 酉: "鸡", 戌: "狗", 亥: "猪",
};

const tianganList = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];
const dizhiList = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];

export function calcDayGanZhi(date: Date): { dayGan: string; dayZhi: string; dayGanZhi: string } {
  const base = new Date("1900-01-01T00:00:00");
  const target = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const diffDays = Math.round((target.getTime() - base.getTime()) / (24 * 60 * 60 * 1000));
  const ganIdx = ((diffDays % 10) + 10) % 10;
  const zhiIdx = ((diffDays % 12) + 12) % 12;
  return { dayGan: tianganList[ganIdx], dayZhi: dizhiList[zhiIdx], dayGanZhi: tianganList[ganIdx] + dizhiList[zhiIdx] };
}

function wuxingElementActivity(element: string): string {
  const map: Record<string, string> = {
    "木": "生长、创造、规划新计划",
    "火": "表达、分享、热情社交",
    "土": "沉淀、收纳、踏实做事",
    "金": "决断、整理、精简生活",
    "水": "休息、内省、滋补调理",
  };
  return map[element] ?? "平衡养生";
}

function wuxingElementAvoid(element: string): string {
  const map: Record<string, string> = {
    "木": "消耗、剧烈竞争",
    "火": "急躁、冲动决策",
    "土": "过度思虑、停滞",
    "金": "纠结、过度批判",
    "水": "孤单、过度沉浸",
  };
  return map[element] ?? "消耗";
}

function getActivityList(element: string): string[] {
  const base = "适合" + wuxingElementActivity(element);
  const extras: Record<string, string[]> = {
    "木": ["伸展运动", "踏青", "植树", "园艺活动"],
    "火": ["社交活动", "运动出汗", "写作创作", "表达分享"],
    "土": ["收纳整理", "烹饪美食", "静坐冥想", "园艺种菜"],
    "金": ["复盘计划", "断舍离", "开会谈判", "清理旧物"],
    "水": ["休息放松", "泡澡", "听音乐", "阅读"],
  };
  return [base, ...(extras[element] ?? [])];
}

export function calcFiveElementsDaily(date: Date): FiveElementsDaily {
  const { dayGan, dayZhi, dayGanZhi } = calcDayGanZhi(date);
  const dayElement = tiangan[dayGan].element;
  const shengElement = wuxingRelations.sheng[dayElement];
  const luckyFromDay = wuxingColors[dayElement]?.lucky ?? [];
  const luckyFromSheng = shengElement ? wuxingColors[shengElement]?.lucky ?? [] : [];
  const luckyColors = [...new Set([...luckyFromDay, ...luckyFromSheng])];
  const keElement = Object.entries(wuxingRelations.ke).find(([, v]) => v === dayElement)?.[0];
  const beKeElement = wuxingRelations.ke[dayElement];
  const avoidFromKe = keElement ? wuxingColors[keElement]?.avoid ?? [] : [];
  const avoidFromBeKe = beKeElement ? wuxingColors[beKeElement]?.avoid ?? [] : [];
  const avoidColors = [...new Set([...avoidFromKe, ...avoidFromBeKe])];
  const auspiciousDirection = dizhi[dayZhi].direction;
  return {
    today: date.toISOString().split("T")[0],
    dayGanZhi,
    dayElement,
    luckyColors,
    avoidColors,
    dressAdvice: "今日五行【" + dayElement + "】，宜穿" + luckyColors.join("、") + "，忌穿" + avoidColors.join("、") + "，吉方" + auspiciousDirection,
    auspiciousDirection,
    activities: getActivityList(dayElement),
    avoidActivities: ["避免过度" + wuxingElementAvoid(dayElement)],
  };
}

export function generateDressAdvice(params: { dayGanZhi: string; element: string; luckyColors: string[]; avoidColors: string[] }): string {
  const elementEmoji: Record<string, string> = { "木": "🌳", "火": "🔥", "土": "⛰️", "金": "💎", "水": "💧" };
  const elementDesc: Record<string, string> = {
    "木": "木曰曲直，主生长升发。今日宜释放创造力，穿绿色系生机盎然。",
    "火": "火曰炎上，主热烈向上。今日宜大胆表达，穿暖色系气场全开。",
    "土": "土曰稼穑，主承载包容。今日宜扎实做事，穿大地色系沉稳笃定。",
    "金": "金曰从革，主变革决断。今日宜干脆利落，穿素色系清爽干练。",
    "水": "水曰润下，主滋润收藏。今日宜休养生息，穿深色系静谧内敛。",
  };
  return [
    "✨ 今日" + params.dayGanZhi + " | 五行" + params.element + " " + (elementEmoji[params.element] ?? ""),
    elementDesc[params.element] ?? "",
    "🎀 幸运色：" + params.luckyColors.join(" • "),
    "⛔ 避讳色：" + params.avoidColors.join(" • "),
    "💡 搭配建议：主色选幸运色之一，配饰点缀另一个。避讳色尽量不出现在上半身。",
  ].filter(Boolean).join("\n");
}

export const dressCopySamples: Record<string, string> = {
  "木": "今天是【木】日🌳 木主生长升发，穿绿色系的衣服能给你一天的好运势。推荐墨绿针织衫+米白阔腿裤，温柔又有力量。避讳大面积白色金色哦～",
  "火": "今天是【火】日🔥 是时候把你的粉色小裙子拿出来啦！火主热情和行动力，穿暖色系工作效率翻倍。今天适合穿粉色+奶油白的搭配，Kitty风满满🎀",
  "土": "今天是【土】日⛰️ 大地色系是你的幸运色！卡其色风衣+棕色短靴，稳重又时髦。今天适合做计划和总结，穿搭越稳心态越稳。避开绿色哦～",
  "金": "今天是【金】日💎 简约才是高级。白色衬衫+银色配饰，干净利落。金主决断力，今天适合做选择和断舍离。避开大面积红色～",
  "水": "今天是【水】日💧 深蓝+灰色的搭配既显瘦又有气质。水主休息和收藏，今天不宜太折腾。如果一定要出门，用金属配饰（金色耳环等）来平衡。",
};

export function getTodayFiveElements(): FiveElementsDaily {
  return calcFiveElementsDaily(new Date());
}

export interface JieqiInfo {
  name: string;
  date: string;
  tip: string;
  food: string[];
  recipe: string;
  avoid: string[];
}

const JIEQI_2026: JieqiInfo[] = [
  { name: "小寒", date: "2026-01-05", tip: "小寒是一年中最冷的开始，宜温补忌寒凉。", food: ["羊肉", "核桃", "栗子"], recipe: "当归生姜羊肉汤", avoid: ["生冷食物", "过度出汗", "熬夜"] },
  { name: "大寒", date: "2026-01-20", tip: "大寒节气寒至极点，保暖是第一要务。", food: ["牛肉", "桂圆", "红枣"], recipe: "桂圆红枣茶", avoid: ["冷饮", "晨练过早", "洗冷水澡"] },
  { name: "立春", date: "2026-02-03", tip: "立春阳气初生，宜早起舒展身体，多吃苗芽类蔬菜。", food: ["豆芽", "韭菜", "春笋"], recipe: "韭菜炒鸡蛋", avoid: ["冷饮", "过度出汗", "暴怒"] },
  { name: "雨水", date: "2026-02-18", tip: "雨水时节湿气渐重，注意健脾祛湿。", food: ["山药", "薏米", "茯苓"], recipe: "山药薏米粥", avoid: ["生冷油腻", "久坐湿地", "淋雨不换衣"] },
  { name: "惊蛰", date: "2026-03-05", tip: "惊蛰万物复苏，春雷乍动，宜疏肝理气。", food: ["菠菜", "芹菜", "玫瑰花茶"], recipe: "菠菜猪肝汤", avoid: ["辛辣燥热", "情绪压抑", "熬夜"] },
  { name: "春分", date: "2026-03-20", tip: "春分阴阳平衡，注意调节作息，保持心态平和。", food: ["荠菜", "香椿", "蜂蜜"], recipe: "荠菜豆腐羹", avoid: ["偏食偏嗜", "剧烈运动", "大喜大悲"] },
  { name: "清明", date: "2026-04-04", tip: "清明肝气最旺，宜踏青舒展，避免情绪抑郁。", food: ["艾草", "荠菜", "春茶"], recipe: "艾草青团", avoid: ["发怒生气", "久坐不动", "暴饮暴食"] },
  { name: "谷雨", date: "2026-04-20", tip: "谷雨是春季最后一个节气，雨水增多需防湿。", food: ["薏仁", "赤小豆", "冬瓜"], recipe: "冬瓜薏米汤", avoid: ["淋雨受潮", "生冷甜腻", "过劳"] },
  { name: "立夏", date: "2026-05-05", tip: "立夏心气渐旺，宜养心安神，午时小憩。", food: ["红豆", "番茄", "莲子"], recipe: "莲子百合汤", avoid: ["大汗淋漓", "狂喜过极", "过度消耗"] },
  { name: "小满", date: "2026-05-21", tip: "小满湿热渐盛，注意清热利湿防皮肤病。", food: ["绿豆", "苦瓜", "黄瓜"], recipe: "绿豆薏米汤", avoid: ["辛辣油炸", "贪凉饮冷", "熬夜伤阴"] },
  { name: "芒种", date: "2026-06-05", tip: "芒种暑湿交加，宜清补忌大补，多喝汤水。", food: ["冬瓜", "鸭肉", "荷叶"], recipe: "冬瓜老鸭汤", avoid: ["大补滋腻", "烈日暴晒", "过度贪凉"] },
  { name: "夏至", date: "2026-06-21", tip: "夏至一阴生，阳极阴生，注意养护心阴。", food: ["百合", "麦冬", "酸梅"], recipe: "酸梅汤", avoid: ["辛辣烧烤", "剧烈运动", "午时暴晒"] },
  { name: "小暑", date: "2026-07-07", tip: "小暑炎热初显，防中暑防伤津，及时补充水分。", food: ["西瓜", "丝瓜", "薄荷"], recipe: "薄荷绿豆汤", avoid: ["烈日下运动", "冷热交替", "冰镇饮料"] },
  { name: "大暑", date: "2026-07-22", tip: "大暑全年最热，三伏天调理正当时，冬病夏治。", food: ["生姜", "山药", "薏米"], recipe: "姜枣茶", avoid: ["贪凉过度", "大汗伤津", "肥甘厚腻"] },
  { name: "立秋", date: "2026-08-07", tip: "立秋暑气未消秋燥已至，宜润肺生津少辛增酸。", food: ["梨", "百合", "银耳"], recipe: "银耳百合羹", avoid: ["辛辣烧烤", "熬夜伤阴", "过度贪凉"] },
  { name: "处暑", date: "2026-08-23", tip: "处暑暑气渐消，秋燥渐显，润肺防干咳。", food: ["雪梨", "蜂蜜", "莲藕"], recipe: "蜂蜜雪梨水", avoid: ["燥热食物", "过度劳累", "熬夜"] },
  { name: "白露", date: "2026-09-07", tip: "白露秋意渐浓，早晚温差大，注意添衣防寒。", food: ["龙眼", "红薯", "山药"], recipe: "红薯山药粥", avoid: ["赤膊露体", "生冷瓜果过量", "晨练过早"] },
  { name: "秋分", date: "2026-09-22", tip: "秋分阴阳各半，宜早卧早起收敛神气。", food: ["柿子", "石榴", "核桃"], recipe: "核桃芝麻糊", avoid: ["辛辣发散", "剧烈运动出汗", "情绪激动"] },
  { name: "寒露", date: "2026-10-08", tip: "寒露露水更凉，注意足部保暖，温养脾胃。", food: ["芝麻", "板栗", "山药"], recipe: "板栗炖鸡", avoid: ["露脚踝", "生冷伤胃", "过度节食"] },
  { name: "霜降", date: "2026-10-23", tip: "霜降秋末冬初，宜平补润燥，为入冬做准备。", food: ["白萝卜", "芡实", "牛肉"], recipe: "白萝卜炖牛肉", avoid: ["大辛大辣", "暴饮暴食", "熬夜耗精"] },
  { name: "立冬", date: "2026-11-07", tip: "立冬阳气潜藏，宜早卧晚起，开始温补。", food: ["羊肉", "黑豆", "核桃"], recipe: "当归生姜羊肉汤", avoid: ["大汗运动", "生冷寒凉", "过度劳累"] },
  { name: "小雪", date: "2026-11-22", tip: "小雪天气渐寒，温补肾阳，保持心情舒畅。", food: ["黑芝麻", "板栗", "山药"], recipe: "黑芝麻糊", avoid: ["抑郁寡欢", "暴饮暴食", "熬夜"] },
  { name: "大雪", date: "2026-12-07", tip: "大雪寒气最盛，宜温补潜藏，护好头颈。", food: ["羊肉", "桂圆", "枸杞"], recipe: "枸杞羊肉汤", avoid: ["头部受寒", "清晨锻炼", "冷水洗漱"] },
  { name: "冬至", date: "2026-12-21", tip: "冬至一阳生，进补最佳时机。宜吃饺子/汤圆，温补肾阳。", food: ["羊肉", "黑豆", "桂圆"], recipe: "冬至饺子（羊肉馅）", avoid: ["过度劳累", "房事不节", "冷饮"] },
];

export function getCurrentJieqi(date?: Date): { current: JieqiInfo; next: JieqiInfo; daysUntilNext: number; index: number } {
  const d = date || new Date();
  const todayStr = d.toISOString().split("T")[0];

  let currentIndex = JIEQI_2026.length - 1;
  for (let i = 0; i < JIEQI_2026.length; i++) {
    if (JIEQI_2026[i].date > todayStr) {
      currentIndex = i - 1;
      break;
    }
  }
  if (currentIndex < 0) currentIndex = 0;

  const nextIndex = (currentIndex + 1) % JIEQI_2026.length;
  const current = JIEQI_2026[currentIndex];
  const next = JIEQI_2026[nextIndex];

  const nextDate = new Date(next.date);
  const diffTime = nextDate.getTime() - d.getTime();
  const daysUntilNext = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return { current, next, daysUntilNext, index: currentIndex };
}

export function getJieqiByName(name: string): JieqiInfo | undefined {
  return JIEQI_2026.find((j) => j.name === name);
}

export function getAllJieqi(): JieqiInfo[] {
  return JIEQI_2026;
}

# 妙锦工作台 V2 — 开发执行清单 (Codex 可执行)

> 本文件是 Codex AI 可直接执行的开发任务清单。按编号顺序执行。
> 所有路径为相对路径（基于仓库根目录 `miaoji-workstation/`）。
> 执行完毕运行 `npm install && npm run build` 验证。

---

## 文件索引

| 编号 | 类型 | 路径 | 操作 |
|------|------|------|------|
| S1 | 重写 | `src/components/Sidebar.tsx` | 修复 Sidebar 交互缺陷 |
| S2 | 修改 | `src/components/BottomNav.tsx` | 补全导航链接 |
| V1 | 修改 | `src/index.css` | 添加 Kitty CSS 组件 |
| V2 | 新建 | `src/components/kitty/KittyAvatar.tsx` | Kitty 头像 |
| V3 | 新建 | `src/components/kitty/KittyBow.tsx` | 蝴蝶结装饰 |
| V4 | 新建 | `src/components/kitty/KittyDotBg.tsx` | 波点背景 |
| V5 | 新建 | `src/components/kitty/KittyRibbon.tsx` | 缎带横幅 |
| V6 | 新建 | `src/components/kitty/KittyFlower.tsx` | 小花分隔线 |
| V7 | 新建 | `src/components/kitty/KittyBadge.tsx` | Kitty 角标 |
| C1 | 替换 | `src/data/quotes.ts` | 三段式治愈一语 |
| C2 | 替换 | `src/data/study.ts` | 小方法格式内容 |
| C3 | 替换 | `src/data/topics.ts` | 脚本框架选题 |
| I1 | 新建 | `src/types/radar.ts` | 雷达类型定义 |
| I2 | 新建 | `src/lib/radar-api.ts` | 雷达数据接口层 |
| I3 | 新建 | `src/lib/jieqi-data.ts` | 节气数据 |
| I4 | 新建 | `src/hooks/useRadar.ts` | 雷达 hook |
| I5 | 新建 | `src/hooks/useJieqi.ts` | 节气 hook |
| T1 | 新建 | `src/components/pages/Radar.tsx` | 资讯雷达页面 |
| T2 | 新建 | `src/data/fallback-radar.json` | 兜底雷达数据 |
| T3 | 新建 | `src/data/jieqi-tips.json` | 节气养生文案 |
| T4 | 新建 | `.github/workflows/radar-fetch.yml` | 雷达抓取工作流 |
| T5 | 新建 | `scripts/radar-fetch.js` | 雷达抓取脚本 |
| A1 | 修改 | `src/App.tsx` | 添加雷达路由 |
| A2 | 修改 | `src/components/Layout.tsx` | 修复 Sidebar 集成 |
| A3 | 修改 | `src/components/TopNav.tsx` | 添加 Kitty 元素 |
| A4 | 修改 | `src/components/pages/DailyQuote.tsx` | 适配三段式内容 |
| A5 | 修改 | `src/components/pages/StudyZone.tsx` | 适配小方法格式 |
| A6 | 修改 | `src/components/pages/TopicIdeas.tsx` | 适配脚本框架 |
| A7 | 修改 | `src/components/pages/Copywriting.tsx` | 文案风格微调 |
| A8 | 修改 | `src/components/pages/Home.tsx` | Kitty 首页升级 |
| A9 | 修改 | `tailwind.config.ts` | 添加 Kitty 色板 |

---

## 第一阶段：修复 Sidebar 交互缺陷（S1-S2）

### S1: 重写 Sidebar.tsx

**路径**: `src/components/Sidebar.tsx`

**问题**: 自定义 class `sidebar-desktop` 不被 Tailwind 识别，`md:translate-x-0` 与桌面端冲突。

**方案**: 分**两套** `<aside>`

```tsx
type Page = "home" | "plan" | "quote" | "study" | "quiz" | "topics" | "copywriting" | "favorites" | "checkin" | "radar";

interface Props { open: boolean; currentPage: Page; onNavigate: (page: Page) => void; onClose: () => void; }

const navItems: { page: Page; label: string; emoji: string }[] = [
  { page: "home", label: "首页", emoji: "🏠" },
  { page: "plan", label: "备忘录", emoji: "📝" },
  { page: "quote", label: "治愈一语", emoji: "💖" },
  { page: "study", label: "中医自学", emoji: "📚" },
  { page: "quiz", label: "考题", emoji: "✏️" },
  { page: "radar", label: "资讯雷达", emoji: "📡" },
  { page: "topics", label: "选题", emoji: "💡" },
  { page: "copywriting", label: "文案", emoji: "✍️" },
  { page: "favorites", label: "收藏", emoji: "⭐" },
  { page: "checkin", label: "打卡", emoji: "✅" },
];
```

**渲染规则**:

```tsx
export default function Sidebar({ open, currentPage, onNavigate, onClose }: Props) {
  return (
    <>
      {/* 1. 手机端遮罩 - 仅 open 时显示 */}
      {open && <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={onClose} />}

      {/* 2. 手机端浮动 Sidebar - fixed 定位，translate-x 切换 */}
      <aside className={`
        fixed md:hidden top-0 left-0 h-screen w-56
        bg-white/95 backdrop-blur-md border-r border-light-pink
        z-50 flex-col py-4 px-3
        transition-transform duration-300 ease-in-out
        ${open ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* ... nav items ... */}
      </aside>

      {/* 3. 桌面端固定 Sidebar - 始终显示，无需 translate */}
      <aside className="hidden md:flex sticky top-0 left-0 h-screen w-56 flex-shrink-0 bg-white/95 backdrop-blur-md border-r border-light-pink flex-col py-4 px-3">
        {/* 标题 */}
        <div className="flex items-center gap-2 px-3 mb-6">
          <span className="text-2xl">🎀</span>
          <span className="text-lg font-bold text-pink">妙锦工作台</span>
        </div>
        {/* 导航 */}
        <nav className="flex flex-col gap-1">
          {navItems.map(({ page, label, emoji }) => (
            <button key={page} onClick={() => onNavigate(page)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-btn text-left text-sm transition-all ${
                currentPage === page
                  ? 'bg-pink text-white font-semibold shadow-pink'
                  : 'text-text-dark hover:bg-bg-pink'
              }`}>
              <span className="text-base">{emoji}</span>
              <span>{label}</span>
            </button>
          ))}
        </nav>
        <div className="mt-auto pt-4 px-3">
          <p className="text-xs text-text-gray">🐱 v2.0 Hello Kitty 版</p>
        </div>
      </aside>
    </>
  );
}
```

**验证**: 手机端汉堡菜单正常打开/关闭 sidebar，桌面端 sidebar 始终可见且不被汉堡按钮影响。

### S2: 修改 BottomNav.tsx

**路径**: `src/components/BottomNav.tsx`

**目标**: 增加"资讯雷达"和"考题"入口，从 5 个变为两行 grid 或列表。

```tsx
const items: { page: Page; label: string; emoji: string }[] = [
  { page: "home", label: "首页", emoji: "🏠" },
  { page: "plan", label: "备忘", emoji: "📝" },
  { page: "radar", label: "资讯", emoji: "📡" },
  { page: "study", label: "自学", emoji: "📚" },
  { page: "quiz", label: "考题", emoji: "✏️" },
  { page: "topics", label: "选题", emoji: "💡" },
  { page: "favorites", label: "收藏", emoji: "⭐" },
  { page: "checkin", label: "打卡", emoji: "✅" },
];
```

将 `<nav>` 改为 `grid grid-cols-4` 或 `flex flex-wrap`。

---

## 第二阶段：Hello Kitty 真元素视觉（V1-V7）

### V1: 修改 index.css — 添加 Kitty CSS 组件

**路径**: `src/index.css`

**操作**: 保留原有 CSS（按钮、卡片、输入、标签等基础组件），**追加**以下 Kitty CSS 组件。不要删除已有样式。

追加的 CSS 组件：

```css
/* ===== Hello Kitty 纯CSS组件 ===== */

/* Kitty 头像容器 - 80x80px */
.kitty-container {
  position: relative;
  width: 80px;
  height: 80px;
  display: inline-block;
}
.kitty-head {
  position: absolute;
  inset: 4px 4px 4px 4px;
  background: white;
  border-radius: 50%;
  border: 2px solid #E0E0E0;
}
.kitty-ear {
  position: absolute;
  width: 22px; height: 22px;
  background: white;
  border: 2px solid #E0E0E0;
  z-index: 1;
}
.kitty-ear.left { top: -4px; left: 10px; border-radius: 50% 50% 50% 0; transform: rotate(-30deg); }
.kitty-ear.right { top: -4px; right: 10px; border-radius: 50% 50% 0 50%; transform: rotate(30deg); }
.kitty-ear-inner {
  position: absolute;
  width: 16px; height: 16px;
  background: #FFB5C5;
  z-index: 2;
}
.kitty-ear-inner.left { top: -1px; left: 13px; border-radius: 50% 50% 50% 0; transform: rotate(-30deg); }
.kitty-ear-inner.right { top: -1px; right: 13px; border-radius: 50% 50% 0 50%; transform: rotate(30deg); }
.kitty-eye {
  position: absolute;
  top: 32px; width: 8px; height: 10px;
  background: #333; border-radius: 50%;
}
.kitty-eye.left  { left: 21px; }
.kitty-eye.right { right: 21px; }
.kitty-nose {
  position: absolute; top: 40px; left: 50%;
  transform: translateX(-50%);
  width: 6px; height: 5px;
  background: #FFD700; border-radius: 50%;
}
.kitty-whisker {
  position: absolute; top: 30px;
  width: 18px; height: 1px; background: #CCC;
}
.kitty-whisker.l1 { left: 47px; top: 30px; transform: rotate(-15deg); }
.kitty-whisker.l2 { left: 47px; top: 35px; transform: rotate(5deg); }
.kitty-whisker.r1 { right: 47px; top: 30px; transform: rotate(15deg); }
.kitty-whisker.r2 { right: 47px; top: 35px; transform: rotate(-5deg); }

/* 蝴蝶结 - 标志性红色 */
.kitty-bow {
  position: absolute; top: -8px; left: 50%;
  transform: translateX(-50%);
  width: 36px; height: 18px; z-index: 5;
}
.kitty-bow::before, .kitty-bow::after {
  content: ''; position: absolute;
  width: 16px; height: 10px;
  background: #FF2442; border-radius: 50%;
}
.kitty-bow::before { left: 0; top: 2px; transform: rotate(-20deg); }
.kitty-bow::after  { right: 0; top: 2px; transform: rotate(20deg); }
.kitty-bow-dot {
  position: absolute; top: 4px; left: 50%;
  transform: translateX(-50%);
  width: 8px; height: 8px;
  background: #FF2442; border-radius: 50%; z-index: 6;
}

/* 缎带装饰横幅 */
.kitty-ribbon {
  position: relative;
  background: linear-gradient(135deg, #FF85A2 0%, #FFB5C5 50%, #FF85A2 100%);
  padding: 10px 20px;
  border-radius: 0 0 20px 20px;
}
.kitty-ribbon::after {
  content: '🎀';
  position: absolute; right: 12px; top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
}

/* 波点背景 */
.kitty-dot-bg {
  position: relative;
  overflow: hidden;
}
.kitty-dot-bg::before {
  content: '';
  position: absolute; inset: 0;
  background-image: radial-gradient(circle, #FFD1DC 1.5px, transparent 1.5px);
  background-size: 24px 24px;
  opacity: 0.12;
  pointer-events: none;
}

/* 小花装饰 */
.kitty-flower {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #FF85A2;
}
.kitty-flower::before, .kitty-flower::after {
  content: '🌸';
  font-size: 10px;
}

/* Kitty 卡片角标 */
.kitty-badge {
  position: absolute; top: -6px; right: -6px;
  width: 28px; height: 28px;
  background: #FF2442;
  border: 2px solid white;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; color: white;
  box-shadow: 0 2px 6px rgba(255, 36, 66, 0.3);
}
```

### V2-V7: Kitty 组件文件

每个组件的规格如下：

**V2: KittyAvatar.tsx**
```tsx
// 路径: src/components/kitty/KittyAvatar.tsx
// 纯 CSS Hello Kitty 头像，无外部依赖
// Props: size?: number (默认80), className?: string
// 输出: 80x80 纯CSS绘制的Kitty猫头，带蝴蝶结
// 渲染: 用 div + CSS class（上面 index.css 定义的 kitty-* 系列）
export default function KittyAvatar({ size = 80, className = '' }: { size?: number; className?: string }) {
  return (
    <div className={`kitty-container ${className}`} style={{ width: size, height: size }} aria-hidden="true">
      {/* 蝴蝶结 */}
      <div className="kitty-bow"><div className="kitty-bow-dot" /></div>
      {/* 耳朵 */}
      <div className="kitty-ear left"><div className="kitty-ear-inner left" /></div>
      <div className="kitty-ear right"><div className="kitty-ear-inner right" /></div>
      {/* 头部 */}
      <div className="kitty-head" />
      {/* 眼睛 */}
      <div className="kitty-eye left" /><div className="kitty-eye right" />
      {/* 鼻子 */}
      <div className="kitty-nose" />
      {/* 胡须 */}
      <div className="kitty-whisker l1" /><div className="kitty-whisker l2" />
      <div className="kitty-whisker r1" /><div className="kitty-whisker r2" />
    </div>
  );
}
```

**V3: KittyBow.tsx**
```tsx
// 路径: src/components/kitty/KittyBow.tsx
// Props: size?: number, color?: string (默认#FF2442, 纯CSS蝴蝶结装饰)
// 输出: 红色蝴蝶结装饰元素，用于页面装饰
```

**V4: KittyDotBg.tsx**
```tsx
// 路径: src/components/kitty/KittyDotBg.tsx
// Props: children: ReactNode, className?: string, opacity?: number
// 包装器: 添加波点背景（透明波点，不干扰内容）
// 直接在 div 上应用 kitty-dot-bg class
```

**V5: KittyRibbon.tsx**
```tsx
// 路径: src/components/kitty/KittyRibbon.tsx
// Props: title: string, emoji?: string
// 输出: 粉色渐变缎带横幅，右侧有🎀装饰
// 用于页面标题区域
```

**V6: KittyFlower.tsx**
```tsx
// 路径: src/components/kitty/KittyFlower.tsx
// Props: text?: string
// 输出: 文字 + 小花装饰的分隔线
// 用于列表项之间、段落之间的装饰性分割
```

**V7: KittyBadge.tsx**
```tsx
// 路径: src/components/kitty/KittyBadge.tsx
// Props: children: ReactNode, badge?: string | number
// 输出: 在卡片右上角显示 Kitty 风格角标，适合"NEW"标记
```

---

## 第三阶段：内容深度升级（C1-C3）

### C1: 替换 quotes.ts

**路径**: `src/data/quotes.ts`

**说明**: 移除旧的 90 条单句数据，替换为至少 **30 条**三段式内容（情绪锚点+中医哲理+互动引导）。

**数据格式**（TypeScript）：

```typescript
export interface QuoteV2 {
  id: number;
  emotionHook: string;    // 2-3句情绪共情
  wisdom: string;         // 1-2句中医哲理
  actionGuide: string;    // 1-2句互动引导
  corePhrase: string;     // 核心短句（用于分享）
  tags: string[];         // 标签
  type: "soothing" | "wisdom";  // 安抚类 or 通透类
}

export const quotes: QuoteV2[] = [
  {
    id: 1,
    emotionHook: "有时候觉得特别累，不是身体累，是心里压着很多没说完的话、没消化的情绪。翻来覆去睡不着，第二天起来头昏昏沉沉的。",
    wisdom: "中医说「肝藏血、血舍魂」，肝血不足的时候，魂就无处安放，所以夜里容易胡思乱想。这不是你矫情，是你的肝在向你求助。",
    actionGuide: "今晚睡前，泡一杯温热的玫瑰花茶，按揉太冲穴三分钟，给肝气一个出口。然后对自己说：我允许自己不完美。",
    corePhrase: "你不是睡不着，是你的肝需要被温柔对待",
    tags: ["失眠", "肝气", "情绪", "睡眠"],
    type: "soothing"
  },
  // ... 至少 30 条，覆盖失眠/焦虑/季节/脾胃/气血等主题
];
```

**需要至少 30 条**，每条都要是中医语境下的深度内容。风格示例：

- 主题：脾胃虚弱 → "不是你的代谢慢，是你的脾在偷懒"
- 主题：经期焦虑 → "月经不是麻烦，是身体给你的排毒信号"
- 主题：秋燥上火 → "不是天气让你烦躁，是肺在喊救命"
- 主题：春困夏乏 → "不是你没意志力，是你的身体在按节气调频"

### C2: 替换 study.ts

**路径**: `src/data/study.ts`

**说明**: 从基础穴位科普改为**实用小方法**。每条包含可立即执行的方法。

**数据格式**：

```typescript
export interface StudyItemV2 {
  id: string;
  category: "meridian" | "diet" | "herb" | "constitution" | "season" | "daily";
  title: string;
  hook: string;            // 一句话吸引人
  steps: string[];         // 3-5步方法
  why: string;             // 1-2句中医原理
  effect: string;          // 预期效果
  caution?: string;        // 注意事项
  videoTip?: string;       // 拍视频灵感
}

export const studyItems: StudyItemV2[] = [
  {
    id: "m-v2-1",
    category: "daily",
    title: "晨起推肝经",
    hook: "每天花2分钟推一推大腿内侧，比喝任何排毒茶都管用",
    steps: [
      "坐在地上或床上，双腿弯曲脚底相对（蝴蝶式姿势）",
      "双手握拳，用指关节从大腿根部开始，沿着大腿内侧往下推至膝盖",
      "重复30次，左右腿各做一遍",
      "推到酸痛的地方停一停，深呼吸三次再继续"
    ],
    why: "大腿内侧是肝经循行区域。肝气郁结时此处酸痛，推肝经就是在给肝气「松绑」。",
    effect: "连续推一周，情绪变平和、睡眠变好、月经前乳房胀痛减轻",
    caution: "经期量多时暂停",
    videoTip: "坐在地上边推边讲，用日更vlog形式"
  },
  // ... 至少每个分类 5 条，共 30+ 条
];
```

**分类保留**：meridian（经络穴位）, diet（食疗养生）, herb（本草入门）, constitution（体质辨识）, season（四季养生）, daily（日常调理）

**每个分类至少 5 条**，共 30+ 条小方法。

### C3: 替换 topics.ts

**路径**: `src/data/topics.ts`

**说明**: 每条选题包含**完整脚本框架**。

**数据格式**：

```typescript
export interface TopicIdeaV2 {
  id: number;
  title: string;
  script: {
    opening: string;       // 开头钩子（前3秒）
    hook: string;          // 悬念/痛点
    body: string[];        // 主体内容（分点）
    cta: string;           // 结尾引导
  };
  shooting: {
    style: string;         // 拍摄风格
    duration: string;      // 建议时长
    props: string[];       // 道具
    bgm: string;           // 音乐建议
  };
  publish: {
    bestTime: string;      // 最佳发布时段
    hashtags: string[];    // 话题标签
    platform: string;      // 推荐平台
  };
  category: string;
  tags: string[];
}
```

**需要至少 20 条**，深度脚本框架级别。

---

## 第四阶段：资讯雷达基础设施（I1-I5）

### I1: 类型定义 — src/types/radar.ts

```typescript
// 行业新闻
export interface RadarIndustryItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl: string;
  publishDate: string;
  tags: string[];
  category: 'policy' | 'academic' | 'event';
}

// 爆款追踪
export interface RadarTrendingItem {
  id: string;
  title: string;
  platform: 'douyin' | 'xiaohongshu' | 'bilibili';
  hotCount: number;
  url: string;
  category: string;
  tags: string[];
}

// 节气养生
export interface RadarJieqiItem {
  id: string;
  jieqi: string;
  date: string;
  tip: string;
  food: string[];
  recipe: string;
  avoid: string[];
}

// 主分类
export type RadarCategory = 'all' | 'industry' | 'trending' | 'jieqi';

// 视图模式
export type RadarViewMode = 'card' | 'timeline';

// 完整雷达数据
export interface RadarData {
  date: string;
  industry: RadarIndustryItem[];
  trending: RadarTrendingItem[];
  jieqi: RadarJieqiItem[];
  updatedAt: string;
}
```

### I2: 数据接口层 — src/lib/radar-api.ts

```typescript
// 抽象数据接口层
// 当前: 从 public/data/radar/*.json 读取
// 未来: 可切换为真实 API

import type { RadarData, RadarCategory } from '../types/radar';
import fallbackData from '../data/fallback-radar.json?raw'; // 或 import js

const RADAR_BASE = '/miaoji-workstation/data/radar';

export async function fetchRadarData(): Promise<RadarData> {
  const today = getTodayStr();
  const urls = [
    `${RADAR_BASE}/industry-${today}.json`,
    `${RADAR_BASE}/trending-${today}.json`,
    `${RADAR_BASE}/jieqi-${today}.json`,
  ];

  try {
    const [industry, trending, jieqi] = await Promise.all(
      urls.map(url => fetch(url).then(r => {
        if (!r.ok) throw new Error('Not found');
        return r.json();
      }))
    );
    return { date: today, industry, trending, jieqi, updatedAt: new Date().toISOString() };
  } catch {
    // 降级：使用内置兜底数据
    return getFallbackData();
  }
}

function getTodayStr(): string {
  return new Date().toISOString().split('T')[0];
}

function getFallbackData(): RadarData {
  // 从 fallback-radar.json 导入
}
```

### I3: 节气数据 — src/lib/jieqi-data.ts

```typescript
// 内置二十四节气计算 + 养生文案匹配
// 节气日期计算使用简单公式（够用，无需额外库）

export interface JieqiInfo {
  name: string;
  date: string;      // 日期字符串
  tip: string;       // 养生提示
  food: string[];    // 推荐食材
  recipe: string;    // 食谱
  avoid: string[];   // 禁忌
}

// 2026年二十四节气日期（硬编码，每年更新）
const JIEQI_2026 = [
  { name: "小寒", date: "2026-01-05", ... },
  // ... 24个节气
];

export function getCurrentJieqi(date?: Date): { name: string; daysUntilNext: number } {
  // 返回当前所在的节气
}
```

### I4: useRadar hook — src/hooks/useRadar.ts

```typescript
// React hook 封装雷达数据获取
// 输入: 无
// 输出: { data, loading, error, refresh }
// 功能: 页面加载时 fetchRadarData，提供 refresh 方法手动刷新
// 注意: 缓存上次成功数据到 localStorage
```

### I5: useJieqi hook — src/hooks/useJieqi.ts

```typescript
// 节气 hook
// 输出: { currentJieqi, nextJieqi, daysUntilNext, jieqiTips }
// 功能: 根据当前日期计算所在节气，返回对应养生信息
```

---

## 第五阶段：资讯雷达页面（T1-T5）

### T1: Radar.tsx 页面组件

**路径**: `src/components/pages/Radar.tsx`

**规格**:

```
┌──────────────────────────────────────┐
│ 📡 资讯雷达       [卡片] [时间线]   │ ← 标题 + 视图切换
├──────────────────────────────────────┤
│ [全部] [行业动态] [爆款追踪] [节气] │ ← 分类标签
├──────────────────────────────────────┤
│                                      │
│  ┌──────────────────────────────┐   │
│  │ ● 今日 14:30                │   │
│  │ 标题: 国家中医药管理局发布…  │   │
│  │ 摘要: 为促进中医药传承创新… │   │
│  │ [政策] 来源: 国家中医药局    │   │
│  └──────────────────────────────┘   │
│                                      │
│  ┌──────────────────────────────┐   │
│  │ ● 今日 12:00                │   │
│  │ 标题: 「三伏贴」抖音播放量…  │   │
│  │ 平台: 抖音  热度: 1.2亿     │   │
│  └──────────────────────────────┘   │
│                                      │
│  [加载更多]                          │
└──────────────────────────────────────┘
```

**交互**:
- 默认显示"全部"，按时间倒序混合展示
- 分类标签切换后只显示该类别
- 卡片模式：信息卡片流
- 时间线模式：左侧带时间轴竖线
- 加载更多：初始 10 条，每次点加载更多加 10 条
- 空状态：显示"暂无最新资讯，稍后再来看看 🎀"

**注意**: 如果 fetch 失败，自动降级到 fallback 数据，并显示"当前为离线数据"提示横幅。

### T2: 兜底数据 — src/data/fallback-radar.json

```json
{
  "date": "2026-07-30",
  "industry": [
    {
      "id": "fallback-industry-1",
      "title": "国家中医药管理局发布中医药发展规划",
      "summary": "为促进中医药传承创新发展，国家中医药管理局发布新阶段发展规划...",
      "source": "国家中医药管理局",
      "sourceUrl": "http://www.satcm.gov.cn/",
      "publishDate": "2026-07-30",
      "tags": ["政策", "规划"],
      "category": "policy"
    }
  ],
  "trending": [
    {
      "id": "fallback-trending-1",
      "title": "三伏贴的正确用法，90%的人都用错了",
      "platform": "douyin",
      "hotCount": 12000000,
      "url": "https://www.douyin.com/",
      "category": "养生",
      "tags": ["三伏贴", "冬病夏治"]
    }
  ],
  "jieqi": []
}
```

### T3: 节气养生文案 — src/data/jieqi-tips.json

```json
[
  {
    "id": "jieqi-1",
    "jieqi": "立春",
    "dateRange": ["2026-02-04", "2026-02-18"],
    "tip": "立春是万物复苏的起点，阳气开始升发。宜早起舒展身体，多吃苗芽类蔬菜。",
    "food": ["豆芽", "韭菜", "蒜苗", "春笋"],
    "recipe": "韭菜炒鸡蛋：韭菜温阳、鸡蛋滋阴，一阳一阴最合立春之气。",
    "avoid": ["冷饮", "过度出汗", "暴怒"],
    "videoIdea": "拍一条'立春了，把阳气'吃'回来'的vlog"
  }
  // ... 24节气
]
```

### T4: GitHub Actions 工作流 — .github/workflows/radar-fetch.yml

```yaml
name: Radar Data Fetch
on:
  schedule:
    - cron: '0 */6 * * *'
  workflow_dispatch:

jobs:
  fetch:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: node scripts/radar-fetch.js
      - name: Commit and push radar data
        run: |
          git config user.name "MiaoJi Radar Bot"
          git config user.email "radar@miaoji.app"
          git add public/data/radar/
          git diff --quiet && git diff --staged --quiet || \
            (git commit -m "chore: radar data update $(date +%F-%H)" && git push)
```

### T5: 抓取脚本 — scripts/radar-fetch.js

```javascript
// 使用 Node.js 原生 fetch + 简单 RSS 解析
// 输出: public/data/radar/ 下的 JSON 文件

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'public', 'data', 'radar');

async function main() {
  // 创建目录
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const today = new Date().toISOString().split('T')[0];

  // 1. 抓取 RSS 源
  const rssSources = [
    'http://www.satcm.gov.cn/', // 国家中医药局
  ];
  const industryItems = await fetchRSS(rssSources);

  // 2. 抓取热门（模拟 API 调用）
  const trendingItems = await fetchTrending();

  // 3. 节气计算
  const jieqiItems = await getJieqi(today);

  // 4. 写文件
  fs.writeFileSync(
    path.join(OUT_DIR, `industry-${today}.json`),
    JSON.stringify(industryItems, null, 2)
  );
  fs.writeFileSync(
    path.join(OUT_DIR, `trending-${today}.json`),
    JSON.stringify(trendingItems, null, 2)
  );
  fs.writeFileSync(
    path.join(OUT_DIR, `jieqi-${today}.json`),
    JSON.stringify(jieqiItems, null, 2)
  );
}

async function fetchRSS(urls) {
  // 用 fetch 获取 XML，简单正则提取 title/link/description
  // 或者使用 rss-parser npm 包（可选）
}

async function fetchTrending() {
  // 调用公开 API:
  // 抖音: https://www.douyin.com/aweme/v1/web/hot/search/list/
  // B站: https://api.bilibili.com/x/web-interface/popular
  // 小红书: 搜索公开 endpoint
}

async function getJieqi(today) {
  // 节气计算...
}

main().catch(console.error);
```

---

## 第六阶段：集成与适配（A1-A9）

### A1: 修改 App.tsx

更新 `Page` 类型，增加 `"radar"`，在 `renderPage` 中添加 case：

```tsx
type Page = "home" | "plan" | "quote" | "study" | "quiz" | "radar" | "topics" | "copywriting" | "favorites" | "checkin";
// ...
case "radar": return <Radar />;
```

同时更新 Layout 组件中的 Page 类型导出，统一为共享类型。

### A2: 修改 Layout.tsx

Sidebar 部分使用修复后的版本（两套 `<aside>` 结构）。

### A3: 修改 TopNav.tsx

添加 Kitty 头像元素：

```tsx
import KittyAvatar from './kitty/KittyAvatar';

// 在标题旁添加
<span className="hidden sm:inline-block mr-1">
  <KittyAvatar size={32} />
</span>
```

### A4-A6: 修改页面组件适配新版数据格式

- DailyQuote.tsx → 适配三段式 `emotionHook` / `wisdom` / `actionGuide`
- StudyZone.tsx → 适配 `hook` + `steps` 的展示
- TopicIdeas.tsx → 适配 `script` 对象的展示

### A7: Copywriting.tsx 微调

保持现有功能，文案风格可调整更可爱（加 emoji）。

### A8: Home.tsx — Kitty 升级

- 添加 KittyAvatar 到首页
- 添加 KittyRibbon 横幅
- 保留指标卡片和快捷入口
- 首页背景应用 kitty-dot-bg

### A9: tailwind.config.ts — 添加 Kitty 色板

```typescript
colors: {
  pink: '#FF85A2',
  'light-pink': '#FFB5C5',  // V2 加亮
  'bg-pink': '#FFF5F7',     // V2 加暖
  ribbon: '#FF2442',        // V2 更深（蝴蝶结色）
  mint: '#B8E6C8',
  lavender: '#E8D5F5',
  'text-dark': '#4A4A4A',
  'text-gray': '#9E9E9E',
  'border-pink': '#FFD1DC',
  'kitty-yellow': '#FFD700',
  'kitty-white': '#FFFFFF',
},
borderRadius: {
  card: '20px',
  btn: '24px',
},
boxShadow: {
  pink: '0 4px 16px rgba(255,133,162,0.2)',
  kitty: '0 4px 20px rgba(255,130,162,0.25)',
  soft: '0 2px 8px rgba(255,130,162,0.12)',
},
```

---

## 执行顺序建议

1. **S1-S2** → Sidebar 修复（必须先修复，否则导航不可用）
2. **V1-V7** → Kitty 视觉组件（增加装饰元素）
3. **C1-C3** → 内容数据替换（替换静态数据）
4. **I1-I5** → 资讯雷达基础设施（hooks + lib + types）
5. **T1-T5** → 雷达页面 + 抓取脚本
6. **A1-A9** → 集成与适配（路由 + 页面升级）
7. **验证**: `npm install && npm run build`

---

## 创建规则

1. **所有文件使用相对路径**（基于仓库根目录）
2. **Tailwind 类名优先级**：使用 Tailwind 原生类，避免自定义 CSS class（除了 Kitty CSS 组件）
3. **按钮最小 44px**：所有可点击元素 min-height: 44px
4. **禁止深色模式**：所有背景为浅色
5. **TypeScript 严格模式**：禁止使用 `any`
6. **无外部 API 依赖**：所有数据要么内嵌，要么通过 GitHub Actions 抓取
7. **CSS 变量可复用**：所有颜色通过 CSS 变量引用
8. **Kitty 装饰元素必须带 `aria-hidden="true"`**

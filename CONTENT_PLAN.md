# 🎀 妙锦工作台 — 自媒体中医主播专属内容规划文档

> 版本: V2.0 · Hello Kitty 中医版
> 适用平台: 抖音 / 小红书 / 视频号 / 快手
> 目标用户: 已有中医知识的中医养生博主（非基础科普）

---

## 目录

1. [🎤 一天一个话术小技巧（30条）](#1-话术小技巧)
2. [📈 一天一个营销小技巧（30条）](#2-营销小技巧)
3. [🔥 低粉爆款视频选题（30组）](#3-爆款选题)
4. [💬 平台资讯抓取策略](#4-资讯抓取)
5. [👗 五行穿搭每日（天干地支算法）](#5-五行穿搭)

---

<a name="1-话术小技巧"></a>

## 1. 🎤 一天一个话术小技巧（30条）

> 每条 80-150 字，直接可录。涵盖：开头钩子 / 转折话术 / 金句 / 互动引导。

### TypeScript 数据类型

```typescript
export interface SpeechTip {
  id: number;
  category: "hook" | "turn" | "golden" | "interaction";
  title: string;
  content: string; // 80-150 chars
  usage: string;   // 使用场景说明
  example: string; // 实际应用示例
}
```

### 数据表

```typescript
export const speechTips: SpeechTip[] = [
  // ======= 开头钩子 (hook) =======
  {
    id: 1,
    category: "hook",
    title: "反常识钩子",
    content: "「你以为的养生可能一直在伤身。」——这是中医博主最好的开场白。用反常识制造认知冲突，让观众停下来想：那我做错了什么？",
    usage: "开头第一句，配合认真表情+停顿1秒",
    example: "「你以为每天喝八杯水是在养生？」停一下——「对你的体质来说，可能是负担。」"
  },
  {
    id: 2,
    category: "hook",
    title: "痛点钩子",
    content: "「有没有一种人，怎么睡都睡不够？」直接点名目标人群，让用户产生「这不就是我吗」的代入感。痛点越具体越好——口臭、长痘、手脚冰凉、大便粘马桶。",
    usage: "开头，搭配『自查』类话题",
    example: "「有没有像我一样，夏天也手脚冰凉、空调房要披毯子的姐妹？」"
  },
  {
    id: 3,
    category: "hook",
    title: "数字钩子",
    content: "善用具体数字制造期待：「3个穴位」「1杯茶」「7天变化」「1个动作」。数字越精确越好，避开「几个」「一些」这种模糊词。奇数比偶数更让人记住。",
    usage: "标题+开头双重使用",
    example: "「每晚按揉1个穴位，坚持7天，睡眠变化太明显了——就是三阴交。」"
  },
  {
    id: 4,
    category: "hook",
    title: "恐怖故事钩子",
    content: "「24岁姑娘每天一杯冰美式，一年后她的身体变成了这样。」——悬念式钩子引发好奇，但中医博主注意不要制造焦虑，要给出解决方案。适合讲不良习惯的危害。",
    usage: "避免过度恐吓，点到为止立刻给解法",
    example: "「每天熬夜到两点，你的肝在做什么？一个真实病例告诉你。」"
  },
  {
    id: 5,
    category: "hook",
    title: "季节钩子",
    content: "「立秋了，这三件事再不做就晚了。」节气养生天然有话题性，时间紧迫感驱动点击。每年24个节气就是24次流量高峰。",
    usage: "节气前后3天发布效果最佳",
    example: "「大雪到了，比穿秋裤更重要的一件事——护好这里。」（手指大椎穴）"
  },
  {
    id: 6,
    category: "hook",
    title: "对镜自嘲钩子",
    content: "「以前的我：吃冰喝冷熬夜蹦迪 / 现在的我：泡脚艾灸保温杯。」用「过去的我 vs 现在的我」制造反差，既幽默又有代入感。适合人设破冰。",
    usage: "新手博主用来建立人设的第一个视频",
    example: "「三年前的我：枸杞是什么鬼 / 三年后的我：这个枸杞是宁夏的还是中宁的？」"
  },
  {
    id: 7,
    category: "hook",
    title: "谣言破除钩子",
    content: "「朋友圈疯传的养生方法，到底哪个是真的？」以辟谣姿态切入，建立专业权威感。中医领域谣言特别多——每天一杯柠檬水美白、吃酵素排毒——都是好靶子。",
    usage: "适合长尾流量，辟谣类视频会被反复推荐",
    example: "「网传喝醋软化血管？今天从中医角度告诉你真相。」"
  },
  {
    id: 8,
    category: "hook",
    title: "明星/热点钩子",
    content: "「某某明星看起来比同龄人年轻十岁，秘密竟然是——」蹭热点但不蹭八卦，把话题拉回中医养生。注意不要过度消费明星形象，用「竟然」而不是恶意揣测。",
    usage: "热点48小时内发布",
    example: "「最近大家都在讨论某某40岁的状态，其实中医早就说了——养好气血就是最好的抗老。」"
  },
  {
    id: 9,
    category: "hook",
    title: "灵魂拷问钩子",
    content: "「你知道身体哪个器官最怕你不开心吗？」Q&A式开头用问题驱动好奇心。问题要有悬念，答案要有干货。适合互动率高的短视频。",
    usage: "开头用提问+特写镜头",
    example: "「有一件事，你每天做，但你的身体每天都在替你扛——猜猜是什么？」（答案是情绪压抑伤肝）"
  },
  {
    id: 10,
    category: "hook",
    title: "对比反差钩子",
    content: "「同一个身体，不同的习惯，结果天差地别。」用对比强化信息传递——喝冰水 vs 喝温水的人、早起 vs 熬夜的人。视觉上可以做左右分屏。",
    usage: "配合分屏画面效果更佳",
    example: "「同样25岁，一个每天泡脚艾灸，一个每天冰咖啡熬夜——一年后看看她们的身体差距。」"
  },

  // ======= 转折话术 (turn) =======
  {
    id: 11,
    category: "turn",
    title: "但是转折法",
    content: "「很多人都知道吃红枣补血，但是——」用「但是」「然而」「不过」打破观众预期，引出更深一层的中医知识。转折后给解决方法，不能只挑毛病不给答案。",
    usage: "信息密度高的内容中间的转折点",
    example: "「很多人都知道泡脚好，但是他们不知道—泡完脚要立刻穿袜子，不然寒气反而进去了。」"
  },
  {
    id: 12,
    category: "turn",
    title: "你以为法",
    content: "「你以为是在养生？」用否定的语气让观众重新思考。先放一个常见做法，再揭示中医视角的正确做法。语气要温和——不是指责，而是「我以前也这么以为」。",
    usage: "建立专业信任感",
    example: "「你以为喝柠檬水美白？从中医角度，柠檬酸味入肝，适量疏肝，过量反而伤胃。」"
  },
  {
    id: 13,
    category: "turn",
    title: "关键区别法",
    content: "「重点不在于做什么，而在于怎么做。」抓住一个常见误区，强调细节决定了养生效果是「加分」还是「减分」。细节越具体越有说服力。",
    usage: "讲解具体方法的视频",
    example: "「重点不是泡脚，而是怎么泡——水温多少、泡多久、加什么料，错了还不如不泡。」"
  },
  {
    id: 14,
    category: "turn",
    title: "因人而异法",
    content: "「别人适合的不一定适合你。」中医的最大魅力——个体化调理。每次用一个体质视角打破通用建议，建立「关注我才知道你的体质」的订阅动机。",
    usage: "在给出通用建议后补充个性化视角",
    example: "「所有人都说多喝水对身体好，但如果你是痰湿体质，喝太多水反而加重湿气。」"
  },
  {
    id: 15,
    category: "turn",
    title: "分层递进法",
    content: "「初级养生在做什么，高级养生在做什么。」用阶梯式结构让观众有成长感——从简单到深入，从表面到根本。让用户觉得「我还能更厉害」。",
    usage: "系列长视频的结构框架",
    example: "「初级养生：保温杯泡枸杞。中级养生：了解自己是什么体质。高级养生：根据节气变化调整作息和饮食。」"
  },

  // ======= 金句 (golden) =======
  {
    id: 16,
    category: "golden",
    title: "养生金句1",
    content: "「最好的护肤品是早睡，最好的保健品是好心情，最好的医生是自己。」",
    usage: "视频结尾总结或文案开头",
    example: "适合配合温馨画面做结尾字幕"
  },
  {
    id: 17,
    category: "golden",
    title: "养生金句2",
    content: "「养生不是老年人的专利，而是每个不想让父母操心的年轻人的必修课。」",
    usage: "人设建立类视频结尾",
    example: "配合轻快BGM出字幕"
  },
  {
    id: 18,
    category: "golden",
    title: "养生金句3",
    content: "「身体是你唯一要住一辈子的房子，别把最贵的装修给了外面，把最差的环境留给了里面。」",
    usage: "生活方式类视频结尾",
    example: "配合温馨厨房/泡脚画面"
  },
  {
    id: 19,
    category: "golden",
    title: "养生金句4",
    content: "「中医不是慢郎中，是你的身体在告诉你——该听我的了。」",
    usage: "破除「中医见效慢」偏见类视频",
    example: "配合穴位按压即刻缓解的画面"
  },
  {
    id: 20,
    category: "golden",
    title: "养生金句5",
    content: "「你熬的不是夜，是肝血。你喝的不是酒，是湿气。你生的不是气，是结块。」",
    usage: "痛点唤醒类视频",
    example: "配上「坏习惯→身体后果」的视觉化转场"
  },
  {
    id: 21,
    category: "golden",
    title: "养生金句6",
    content: "「真正的养生，是让身体回到它本该有的状态——而不是往里面塞各种东西。」",
    usage: "极简养生理念类视频",
    example: "配合自然风光/静坐画面"
  },
  {
    id: 22,
    category: "golden",
    title: "养生金句7",
    content: "「把泡脚当成睡前仪式的人，和把它当成任务的人，效果不一样。带着好心情养生，效果翻倍。」",
    usage: "生活方式仪式感类视频",
    example: "配合一人一桶一壶热水的美好画面"
  },
  {
    id: 23,
    category: "golden",
    title: "养生金句8",
    content: "「药补不如食补，食补不如睡补，睡补不如心补。」",
    usage: "心态养生类视频核心观点",
    example: "用阶梯式动画展示"
  },
  {
    id: 24,
    category: "golden",
    title: "养生金句9",
    content: "「春天养肝、夏天养心、秋天养肺、冬天养肾——而四季都在养的是脾胃。」",
    usage: "四季养生体系介绍",
    example: "配合四季画面切换展示"
  },
  {
    id: 25,
    category: "golden",
    title: "养生金句10",
    content: "「健康不是目标，而是你好好生活的副产品。」",
    usage: "视频完美收尾",
    example: "配合博主微笑特写淡出"
  },

  // ======= 互动引导 (interaction) =======
  {
    id: 26,
    category: "interaction",
    title: "评论区自测",
    content: "「伸出舌头看一眼，你是哪种舌象？评论区告诉我，我帮你看看。」引导用户自主检查+评论，互动率直接拉满。舌诊、面诊、手诊都是天然互动利器。",
    usage: "诊法类视频末尾",
    example: "「看完这个视频，马上看看你的指甲有没有月牙？评论区告诉我有几个~」"
  },
  {
    id: 27,
    category: "interaction",
    title: "二选一投票",
    content: "「早上喝温水还是凉水？选A的扣1，选B的扣2。」简单二选一，参与门槛极低。评论区扣1扣2是抖音最活跃的互动形式。",
    usage: "每个视频结尾都可以加",
    example: "「泡脚用热水还是温水？大正方扣1，小正方扣2。」"
  },
  {
    id: 28,
    category: "interaction",
    title: "打卡挑战",
    content: "「从今天开始，跟我一起30天早睡打卡。每天睡觉前来我评论区说晚安。」长期打卡养成粉丝习惯，建立社群归属感。每个视频都可以提醒打卡。",
    usage: "系列内容持续引流",
    example: "「第一天的跟我评论区打1，一个月后回来看变化。」"
  },
  {
    id: 29,
    category: "interaction",
    title: "下一期预告",
    content: "「下次跟大家讲——为什么你喝了那么多祛湿茶还是湿气重？想知道为什么的评论区扣'想'。」用下一期精彩预告驱动本期互动。",
    usage: "系列内容之间的衔接",
    example: "「想知道哪三个穴位治失眠的？评论区扣'失眠'，过两天安排。」"
  },
  {
    id: 30,
    category: "interaction",
    title: "圈人艾特",
    content: "「@你那个天天说养生却天天熬夜的姐妹，让她来看看。」利用人际关系链传播。注意语气要轻松友好，不是指责——「@你的养生搭子，一起打卡。」",
    usage: "适合轻松话题类视频",
    example: "「记得@那个天一冷就找你要泡脚链接的朋友。」"
  },
];
```

---

<a name="2-营销小技巧"></a>

## 2. 📈 一天一个营销小技巧（30条）

> 针对抖音/小红书/视频号的中医内容营销策略。涵盖发布时间、标题技巧、封面建议、评论区运营。

### TypeScript 数据类型

```typescript
export interface MarketingTip {
  id: number;
  platform: "douyin" | "xiaohongshu" | "shipinhao" | "kuaishou" | "all";
  category: "timing" | "title" | "cover" | "comment" | "operation" | "data";
  title: string;
  content: string;
}
```

### 数据表

```typescript
export const marketingTips: MarketingTip[] = [
  // ======= 发布时间策略 =======
  {
    id: 1,
    platform: "douyin",
    category: "timing",
    title: "抖音最佳发布时间",
    content: "中医养生类内容在抖音的流量高峰：工作日晚 19:00-21:00（下班放松刷手机），午间 12:00-13:00（午饭时间）。周末清晨 8:00-10:00 也有不错表现（周末晨起养生群体活跃）。建议开播前1小时发布，给算法预热时间。"
  },
  {
    id: 2,
    platform: "xiaohongshu",
    category: "timing",
    title: "小红书最佳发布时间",
    content: "小红书养生内容黄金时段：早 7:00-9:00（起床后刷养生内容）、晚 20:00-22:00（睡前仪式感）。小红书的女性用户高度重合养生人群。建议周二至周四发布，避开周末内卷。"
  },
  {
    id: 3,
    platform: "shipinhao",
    category: "timing",
    title: "视频号最佳发布时间",
    content: "视频号用户偏向中年群体，养生内容有天然优势。最佳时间：早 6:30-8:00（晨练人群刷微信）、晚 19:00-21:00（饭后刷朋友圈）。视频号传播靠朋友圈转发，内容要适合中老年人群——字体大、语速慢、内容实用。"
  },
  {
    id: 4,
    platform: "kuaishou",
    category: "timing",
    title: "快手最佳发布时间",
    content: "快手养生用户偏下沉市场，真实感最重要。最佳时间：晚 18:00-20:00（下班饭后）、周末 10:00-12:00。快手的老铁文化适合「实在人讲实在话」风格。不搞玄乎，直接用方言/通俗语言讲。"
  },
  {
    id: 5,
    platform: "all",
    category: "timing",
    title: "节气发布时间策略",
    content: "每个节气前3天和后3天是最佳发布时间窗口。此时用户搜索节气养生关键词最多。建议提前准备24节气内容日历，每个节气固定发布1-2条相关视频。节气当天视频流量通常比日常高出30-50%。"
  },

  // ======= 标题技巧 =======
  {
    id: 6,
    platform: "douyin",
    category: "title",
    title: "抖音标题公式",
    content: "抖音标题推荐结构：痛点/好奇 + 数字 + 结果承诺。例：「每天按3分钟这个穴位，睡眠质量翻了倍」。前5个字决定打开率。避免标题党（会被限流），但可以用悬念：「90%的人不知道的……」"
  },
  {
    id: 7,
    platform: "xiaohongshu",
    category: "title",
    title: "小红书标题公式",
    content: "小红书标题＝ Emoji 开头 + 含关键词 + 具体数字 + 用户收益。例：「🌿 坚持泡脚30天，我的身体发生了5个变化（真实记录）」小红书标题要像朋友安利，多用「姐妹们」「亲测」「后悔才知道」等口吻。"
  },
  {
    id: 8,
    platform: "shipinhao",
    category: "title",
    title: "视频号标题策略",
    content: "视频号标题要适合中老年传播：「太实用了！转给家人看看」「中医专家告诉你，这个习惯正在伤害你的身体」。语气要关切、实用。标题加上「建议收藏」「记得转发」等行动号召。字体要大而清晰。"
  },
  {
    id: 9,
    platform: "all",
    category: "title",
    title: "中医热词库（SEO用）",
    content: "标题必须包含的高频中医搜索词：祛湿、补气血、养肝、失眠、健脾、排毒、手脚冰凉、经期、痛经、脱发、便秘、痘痘、水肿、体质、穴位、泡脚、艾灸、刮痧、八段锦、食疗。用长尾词提升搜索排名。"
  },
  {
    id: 10,
    platform: "all",
    category: "title",
    title: "选题词表（流量池关键词）",
    content: "以下关键词叠加中医内容可获得更高流量：挑战、跟练、打卡、对比、自测、测评、避雷、翻包、room tour、一天vlog、30天、手把手、低成本、学生党、打工人、懒人版。例：「打工人低成本养生room tour」"
  },

  // ======= 封面建议 =======
  {
    id: 11,
    platform: "xiaohongshu",
    category: "cover",
    title: "小红书封面黄金标准",
    content: "小红书封面建议使用3:4竖版。主视觉+大字标题（不超过15个字）+ 高饱和度但柔和的色调。中医养生适合暖色调（米黄、粉、橙）。封面字要清晰醒目，可以用贴纸标注核心卖点。参考Hello Kitty风格——奶萌+实用。"
  },
  {
    id: 12,
    platform: "douyin",
    category: "cover",
    title: "抖音封面策略",
    content: "抖音封面最好用真人出镜+情绪化表情（惊讶/开心/认真）。封面上不要放太多文字，最多2-3个大字突出重点。色彩明亮的封面点击率比暗色的高40%以上。如果是Kitty风格封面，可以用粉色主色调+白色大字。"
  },
  {
    id: 13,
    platform: "all",
    category: "cover",
    title: "中医封面配色方案",
    content: "推荐封面配色方案：(1) 粉色+白色+米色（Kitty可爱风）(2) 暖橙色+深棕色（传统中医风）(3) 浅绿色+白色（自然草本风）。统一色系让主页视觉一致，提升关注率。每周换一次色系但保持品牌调性。"
  },
  {
    id: 14,
    platform: "xiaohongshu",
    category: "cover",
    title: "封面文字排版技巧",
    content: "封面大字不超过3行：主标题用粗体（含核心关键词）、副标题用小字（补充信息）。例：【3个穴位告别手脚冰凉】/ （亲测有效）。Kitty风格可以加🎀🌸等装饰emoji。字间距不要太挤，留白很重要。"
  },
  {
    id: 15,
    platform: "douyin",
    category: "cover",
    title: "视频第一帧策略",
    content: "抖音封面就是视频第一帧。前3秒决定用户是否划走。前3秒不要出现黑屏、封面文字、重复内容。直接上干货或钩子。如果是Kitty风格开场，可以让Kitty元素从侧边滑入同时主播直接讲内容。"
  },

  // ======= 评论区运营 =======
  {
    id: 16,
    platform: "douyin",
    category: "comment",
    title: "评论区自导自演",
    content: "发布后立即用小号在评论区留引导性问题：『姐妹们还有什么养生问题？』『第3点有人试过吗？』然后用主号回复增加互动。抖音算法把评论区活跃度作为重要排名指标。前1小时至少要有10条互动。"
  },
  {
    id: 17,
    platform: "xiaohongshu",
    category: "comment",
    title: "小红书神评论策略",
    content: "小红书评论区要精选+置顶最有价值的评论。可以设置福利互动：『抽一位送出养生茶包』。养生的评论区天然适合大家分享自己的经验——引导用户分享自己的养生小习惯，形成UGC。"
  },
  {
    id: 18,
    platform: "all",
    category: "comment",
    title: "评论区答疑技巧",
    content: "评论区被问最多的10个问题，收集起来做下一期视频。『昨天评论区被问最多的一个问题是……』这样既解决粉丝疑惑，又获得源源不断的选题灵感。中医领域用户最爱问：什么体质喝什么、什么时间做什么。"
  },
  {
    id: 19,
    platform: "douyin",
    category: "comment",
    title: "评论区话术模板",
    content: "评论区回复要有人情味：(1) 感谢型：『谢谢姐妹提醒！』(2) 补充型：『对对对，还可以加两片生姜~』(3) 关心型：『别急，下一期就安排上！』(4) 专业型：『你这个情况建议先看舌象……』。不要机械回复，不要刷屏同一句话。"
  },
  {
    id: 20,
    platform: "xiaohongshu",
    category: "comment",
    title: "评论区转化私域",
    content: "在小红书评论区引导私域流量要巧妙：『想要体质自测表的姐妹，看我的瞬间~』（引导到个人主页）。『详细的食谱我整理成了PDF』（引导关注后私信）。不能直接放微信号，会被限流。可以放邮箱号（用『at』代替@）。"
  },

  // ======= 运营策略 =======
  {
    id: 21,
    platform: "douyin",
    category: "operation",
    title: "抖音前3秒黄金法则",
    content: "中医知识类视频前3秒必须：要么制造悬念（『你知道泡脚的三大禁忌吗？』）、要么直击痛点（『手脚冰凉的姐妹集合』）、要么展示结果（对比图/变化）。前3秒节奏要快，不要自我介绍、不要开场白、不要拖延。"
  },
  {
    id: 22,
    platform: "xiaohongshu",
    category: "operation",
    title: "小红书图文vs视频策略",
    content: "小红书养生内容：图文适合『干货清单』（5个穴位、3种体质自测、7天食谱），适合收藏党；视频适合『跟练/过程』（泡脚vlog、煮汤过程、晨间routine）。每周3-4篇图文+2个视频，图文引流、视频涨粉。"
  },
  {
    id: 23,
    platform: "all",
    category: "operation",
    title: "中医账号人设打造",
    content: "中医博主的人设三要素：(1) 专业背书——『我是中医爱好者/多年中医养生经验』(2) 真实感——『我也走过弯路，才知道这些有用』(3) 亲和力——Kitty风格天然加分。不要装高冷，中医讲究亲近感。每周固定一个『坦白局』拉近距离。"
  },
  {
    id: 24,
    platform: "all",
    category: "operation",
    title: "系列化内容策略",
    content: "系列内容涨粉效率比单条高3倍。推荐系列：(1) 30天调理挑战（每天打卡）(2) 24节气养生（一年更新）(3) 九种体质深度解析（9期）(4) 经络入门从零到一（10期）。每个视频结尾预告下一期。"
  },
  {
    id: 25,
    platform: "all",
    category: "operation",
    title: "大号联动策略",
    content: "新手博主可通过以下方式获取初始流量：(1) 在同领域大号评论区留高质量评论（占前排）(2) 参与平台挑战赛（#中医养生 等话题）(3) 跨界联动——和美食博主合作「养生食谱」、和健身博主合作「八段锦跟练」。"
  },
  {
    id: 26,
    platform: "douyin",
    category: "operation",
    title: "dou+投流策略",
    content: "中医养生类目标人群画像：25-45岁女性、一线/新一线城市、关注健康/美妆/美食。投流计划：先用100元测试自然流量表现好的视频，挂车视频投成交目标、人设类视频投粉丝增长。单条视频ROI>2后再加投。"
  },
  {
    id: 27,
    platform: "all",
    category: "operation",
    title: "蹭热点方法论",
    content: "中医博主的蹭热点策略：(1) 节气热点——24节气一个不落 (2) 季节热点——三伏天贴三九贴、春季养肝、秋季润肺 (3) 社会热点——流感季节的预防、换季过敏、考试季压力 (4) 明星热点——明星养生法解析。热点时效性越强，发布越早越好。"
  },
  {
    id: 28,
    platform: "all",
    category: "operation",
    title: "短视频节奏控制",
    content: "中医养生视频最佳时长：抖音30-60秒（完播率最高）、小红书图文8-12页、视频号45-90秒。信息密度：每10秒一个信息点。不要超过3个核心知识点。节奏：钩子（5秒）→ 第1个知识点（15秒）→ 转折（5秒）→ 第2个知识点（15秒）→ 总结+CTA（10秒）。"
  },

  // ======= 数据分析 =======
  {
    id: 29,
    platform: "all",
    category: "data",
    title: "关键数据指标",
    content: "中医养生账号每周必看的5个数据：(1) 完播率——低于25%说明内容太长或开头不吸引 (2) 分享率——养生内容天然高分享（收藏给家人），低于5%检查实用性 (3) 关注转化——从观看到关注的比例，低于1%说明人设不够 (4) 评论区互动率——高于3%内容有共鸣 (5) 搜索来源占比——越高说明内容SEO做得好。"
  },
  {
    id: 30,
    platform: "all",
    category: "data",
    title: "A/B测试清单",
    content: "定期测试以下变量：(1) 封面：真人出镜 vs 纯文字 vs 对比图 (2) 标题：数字开头 vs 疑问句 vs 陈述句 (3) 时长：30秒 vs 60秒 vs 90秒 (4) 开头：钩子 vs 痛点 vs 金句 (5) BGM：古风 vs 轻快 vs 纯音乐 (6) 发布时间：晚上8点 vs 早上8点。每次只测试一个变量，记录7天数据对比。"
  },
];
```

---

<a name="3-爆款选题"></a>

## 3. 🔥 低粉爆款视频选题（30组）

> 每个选题包含：标题+脚本框架(3段式)+拍摄建议+发布平台建议。直接可拍的 Level。

### TypeScript 数据类型

```typescript
export interface ViralTopic {
  id: number;
  title: string;
  script: {
    hook: string;       // 开头钩子（0-5秒）
    body: string;       // 正文核心（5-45秒）
    cta: string;        // 结尾行动号召（45-60秒）
  };
  shooting: {
    style: string;      // 拍摄风格
    duration: string;   // 建议时长
    props: string[];    // 道具清单
    bgm: string;        // 背景音乐建议
  };
  platform: string[];   // 推荐平台
  estimatedDuration: string;
}
```

### 数据表

```typescript
export const viralTopics: ViralTopic[] = [
  // ===== 体质自测类（天然高互动） =====
  {
    id: 1,
    title: "5秒自测！你是哪种体质？对照这3点秒懂",
    script: {
      hook: "伸出舌头看一眼，我就能知道你是什么体质。",
      body: "第一，看舌体——胖大有齿痕是气虚/脾虚，瘦小是阴虚。第二，看舌苔——白厚腻是寒湿/痰湿，黄厚腻是湿热。第三，看舌色——淡白是血虚，紫暗是血瘀。你中了几条？",
      cta: "评论区告诉我你的舌象是什么样，我帮你看看怎么调理！"
    },
    shooting: { style: "对镜自拍+舌象图片特写", duration: "45秒", props: ["镜子", "手机", "舌象对比图卡"], bgm: "轻快古风" },
    platform: ["抖音", "小红书", "视频号"],
    estimatedDuration: "45秒"
  },
  {
    id: 2,
    title: "手脚冰凉的姐妹看过来！你不是冷，你是「堵」了",
    script: {
      hook: "你以为手脚冰凉是因为冷？错，80%的人是因为堵。",
      body: "中医讲「四肢为诸阳之末」，手脚冰凉说明阳气到不了末端。两个原因：一是阳虚（身体产热不够），二是气滞（道路不通）。一个动作帮你判断——按揉手足心，如果是凉的还怕冷是阳虚；如果手脚是冰的但身体是热的，是气滞。",
      cta: "想知道你是哪种？评论区扣1，我告诉你对应的调理方法。"
    },
    shooting: { style: "桌面前置拍摄+穴位图解", duration: "50秒", props: ["穴位图", "暖宝宝（道具）", "袜子"], bgm: "舒缓治愈" },
    platform: ["抖音", "快手"],
    estimatedDuration: "50秒"
  },
  {
    id: 3,
    title: "脸黄、没精神、失眠？大姨妈还少？小心「气血不足」",
    script: {
      hook: "对着镜子看3秒：脸色黄黄的、嘴唇白白的、头发枯枯的？",
      body: "气血不足的典型表现：一看脸，黄气重不重；二看眼睑，苍白还是红润；三看指甲月牙，少于6个是气血虚。补气血三步走：先健脾胃（山药小米粥）→ 再补肝血（当归炖蛋）→ 最后养心（午睡15分钟）。",
      cta: "气血不足的姐妹评论区集合！明天出详细补气血食谱。"
    },
    shooting: { style: "镜子前自测+厨房实拍", duration: "55秒", props: ["山药", "当归", "鸡蛋", "镜子"], bgm: "温馨日常" },
    platform: ["小红书", "抖音"],
    estimatedDuration: "55秒"
  },
  {
    id: 4,
    title: "一换季就感冒、过敏、打喷嚏？你该关心「肺」了",
    script: {
      hook: "为什么一到换季的时候你就中招，别人却好好的？",
      body: "中医讲「肺主皮毛，开窍于鼻」。换季容易感冒的人，大多是肺卫不固——就是肺的防御能力不够。三个日常养肺法：简单版——深呼吸，每天早上对着窗户做5次深呼吸；食疗版——银耳百合雪梨羹，一周两次；进阶版——拍打中府穴和云门穴。",
      cta: "换季易感冒的扣1，教你一招让肺强大起来。"
    },
    shooting: { style: "户外+室内实拍", duration: "50秒", props: ["银耳", "百合", "雪梨", "穴位棒"], bgm: "自然白噪音" },
    platform: ["抖音", "视频号"],
    estimatedDuration: "50秒"
  },
  {
    id: 5,
    title: "明明很瘦却有肚子，你可能是「痰湿体质」",
    script: {
      hook: "有没有一种人：上半身很瘦，但小肚子鼓鼓的，怎么也减不下去？",
      body: "这个叫「痰湿胖」——不是真的胖，而是脾运化不好，水湿停留在中焦。自测三点：早上起来舌苔厚腻、大便粘马桶、身体沉重不想动。祛痰湿三步走：第一步，停掉奶制品和甜食；第二步，陈皮茯苓水（煮水喝）；第三步，每天快走30分钟微微出汗。",
      cta: "有小肚子困扰的姐妹评论区集合，大家一起打卡祛湿。"
    },
    shooting: { style: "镜子前展示+煮茶过程", duration: "60秒", props: ["陈皮", "茯苓", "玻璃壶", "镜子"], bgm: "轻快爵士" },
    platform: ["小红书", "抖音"],
    estimatedDuration: "60秒"
  },

  // ===== 养生方法类（高收藏） =====
  {
    id: 6,
    title: "睡前10分钟躺在床上就能做的5个「养生动作」",
    script: {
      hook: "躺在床上不玩手机，做这5个动作，一个月后你会感谢自己。",
      body: "动作一，揉腹——顺时针50圈，消食通便。动作二，搓涌泉——脚心对搓100次，引火下行助眠。动作三，敲带脉——腰部两侧各50下，瘦腰祛湿。动作四，按神门——手腕内侧按揉3分钟，安神定志。动作五，深呼吸——鼻子吸4秒、憋7秒、嘴呼8秒。",
      cta: "今晚就开始做！30天后回来评论区告诉我你的变化。"
    },
    shooting: { style: "床上实拍跟练视角", duration: "50秒", props: ["睡衣", "枕头", "床"], bgm: "迷幻催眠纯音乐" },
    platform: ["抖音", "小红书", "快手"],
    estimatedDuration: "50秒"
  },
  {
    id: 7,
    title: "3块钱一杯的「养肝水」，熬夜党的救命茶",
    script: {
      hook: "熬夜到两三点，第二天起来脸黄眼干口苦？这杯水救你。",
      body: "食材只需3样：菊花5朵（清肝明目）、枸杞15粒（滋补肝肾）、决明子一小撮（清肝通便）。80度热水冲泡，盖上盖子闷5分钟。最好是上午喝——肝经当令时间（1-3点）你不可能在喝，所以上午9-11点脾经当令时喝吸收最好。",
      cta: "收藏这条视频！今晚熬夜明天就安排上。"
    },
    shooting: { style: "桌面上冲泡过程特写", duration: "45秒", props: ["菊花", "枸杞", "决明子", "透明玻璃杯", "热水壶"], bgm: "治愈轻音乐" },
    platform: ["抖音", "小红书", "视频号"],
    estimatedDuration: "45秒"
  },
  {
    id: 8,
    title: "90%的人都泡错了脚！正确泡脚指南来啦",
    script: {
      hook: "泡了十多年的脚才发现——我一直泡错了！",
      body: "泡脚四大误区：误区一，水越烫越好——正确是40-45度（手放进去不烫就是正好）。误区二，泡越久越好——正确是15-20分钟，微微出汗就停。误区三，随便泡就行——养生版加花椒生姜驱寒，祛湿版加艾草。误区四，泡完不擦干——脚上水分蒸发带走热量，反而更冷！",
      cta: "今晚泡脚的时候对照看看你中了几条？评论区告诉我！"
    },
    shooting: { style: "第一人称泡脚vlog", duration: "55秒", props: ["泡脚桶", "花椒", "生姜", "艾草", "毛巾", "温度计"], bgm: "舒缓水声" },
    platform: ["抖音", "快手", "小红书"],
    estimatedDuration: "55秒"
  },
  {
    id: 9,
    title: "早上做这件事，一整天都不累了（中医晨间routine）",
    script: {
      hook: "你的早晨决定了你的一天。看看中医人的早晨是怎么开始的。",
      body: "第一步，醒来不急着起——床上伸个懒腰，双手搓热敷眼睛（掌心劳宫穴温养双眼）。第二步，喝一杯温水（加点盐更好）——唤醒肠胃。第三步，叩齿36下+吞津——固齿养肾。第四步，搓耳朵36下——耳朵是全身的反射区。第五步，梳头100下——疏通头部经络。总耗时不超过10分钟。",
      cta: "明天早上就这样做！坚持一周你会来感谢我。"
    },
    shooting: { style: "早晨vlog跟拍", duration: "60秒", props: ["梳子", "温水杯", "床"], bgm: "清新早晨钢琴曲" },
    platform: ["小红书", "抖音"],
    estimatedDuration: "60秒"
  },
  {
    id: 10,
    title: "失眠救星！按这3个穴位，5分钟就想睡",
    script: {
      hook: "翻来覆去睡不着？不要数羊了，按这三个穴位。",
      body: "第一个，神门穴——手腕内侧小指侧，腕横纹上。按揉3分钟，酸胀感传到小指最好。安神定志的第一要穴。第二个，安眠穴——耳垂后凹陷处往后一横指。按揉2分钟，重点在于力度要轻。第三个，涌泉穴——脚底前三分之一凹陷处。搓热手心后按压100下，引火下行。",
      cta: "今晚睡不着就来按！按完评论区告诉我管不管用。"
    },
    shooting: { style: "手部脚部穴位特写", duration: "50秒", props: ["经络图", "按摩棒", "手", "脚"], bgm: "舒缓催眠白噪音" },
    platform: ["抖音", "小红书", "视频号"],
    estimatedDuration: "50秒"
  },
  {
    id: 11,
    title: "脾胃不好的看过来！一个万能「养胃粥」",
    script: {
      hook: "胃胀、反酸、没胃口、吃一点就饱？你的脾胃在求救。",
      body: "脾胃是后天之本——你吃进去的东西能不能变成气血全看它。推荐「山药小米南瓜粥」：铁棍山药100g（健脾养胃）、小米50g（和胃安神）、南瓜100g（补中益气）。做法：山药去皮切块，南瓜切丁，小米淘洗，一起煮30分钟。每周吃3-4次，两周后胃口明显改善。",
      cta: "胃不好的姐妹评论区扣1，我把详细做法发给你。"
    },
    shooting: { style: "厨房实拍烹饪过程", duration: "60秒", props: ["山药", "小米", "南瓜", "砂锅", "碗"], bgm: "温暖厨房BGM" },
    platform: ["小红书", "视频号", "快手"],
    estimatedDuration: "60秒"
  },
  {
    id: 12,
    title: "不要再乱喝水了！中医告诉你什么时间该喝水",
    script: {
      hook: "多喝水是对的，但喝错时间不如不喝。",
      body: "中医喝水时间表：早上5-7点（大肠经）喝温水加一点盐——帮助排便。上午9-11点（脾经）喝白水——脾是运化水的，这时喝效果最好。下午3-5点（膀胱经）喝够水——帮助排毒。晚上7点后少喝水——加重肾脏负担还容易水肿。记住：不渴不饮、小口慢饮、不喝冰水。",
      cta: "收藏这张喝水时间表，明天开始科学喝水。"
    },
    shooting: { style: "生活场景混剪+时间表手绘", duration: "50秒", props: ["水杯", "时间表卡片", "蜂蜜", "柠檬"], bgm: "轻快活泼" },
    platform: ["抖音", "小红书"],
    estimatedDuration: "50秒"
  },
  {
    id: 13,
    title: "三伏天的正确打开方式——冬病夏治做对3件事",
    script: {
      hook: "三伏天不是让你躺平的，是一年最好的调理窗口！",
      body: "冬病夏治的黄金40天，做对三件事：一、三伏贴——去中医院贴或者自己做简易版（白芥子+细辛+生姜汁调糊敷背腧穴）。二、晒背——早上8-9点晒后背15分钟，补阳气祛寒气。三、不吃冰的——从三伏天开始戒冰，坚持到冬天，手脚冰凉明显改善。",
      cta: "三伏天开始的扣1！一起打卡40天健康挑战。"
    },
    shooting: { style: "户外晒背+室内敷贴演示", duration: "60秒", props: ["三伏贴", "遮阳帽", "毛巾", "水壶"], bgm: "夏日轻快" },
    platform: ["抖音", "视频号", "快手"],
    estimatedDuration: "60秒"
  },
  {
    id: 14,
    title: "八段锦跟练版｜每天12分钟，比去健身房还管用",
    script: {
      hook: "老祖宗留下的广播体操——八段锦，是我坚持最久的运动。",
      body: "八个动作分别是：两手托天理三焦、左右开弓似射雕、调理脾胃须单举、五劳七伤往后瞧、摇头摆尾去心火、两手攀足固肾腰、攒拳怒目增气力、背后七颠百病消。每个动作做8次，总共12分钟。早上练最好——升发阳气。比跑步更适合中老年人、办公室久坐族。",
      cta: "现在就站起来跟我练！评论区打卡今天练了几遍。"
    },
    shooting: { style: "跟练视角全身出镜", duration: "12分钟（剪辑60秒精华版）", props: ["运动服", "瑜伽垫", "宽松衣服"], bgm: "古琴禅音" },
    platform: ["抖音", "小红书", "视频号", "快手"],
    estimatedDuration: "60秒（精华版）"
  },
  {
    id: 15,
    title: "办公室养生｜每天坐8小时的中医自救指南",
    script: {
      hook: "每天对着电脑坐8小时，你的腰和颈椎在替你承受一切。",
      body: "办公室养生三件套：第一，每坐45分钟起来活动5分钟——打八段锦的「两手托天」动作。第二，喝对茶——上午绿茶提神抗氧化、下午菊花枸杞养肝明目、晚上别喝了。第三，午休不要趴着睡——会压迫心脏和胃，用U型枕靠着休息15分钟最好。",
      cta: "打工人收藏这条！明天上班就用起来。"
    },
    shooting: { style: "办公室场景混剪", duration: "45秒", props: ["电脑", "水杯", "菊花枸杞", "U型枕", "养生壶"], bgm: "轻快办公音乐" },
    platform: ["抖音", "小红书"],
    estimatedDuration: "45秒"
  },

  // ===== 经络穴位类（搜索流量高） =====
  {
    id: 16,
    title: "手上自带的「救心丸」——按按这个穴关键时刻救命",
    script: {
      hook: "你知道手上有个穴，按对了能让心脏瞬间舒服吗？",
      body: "内关穴——手腕横纹上三指宽，两筋之间。心悸、胸闷、心慌的时候，用力按揉内关穴，会有酸胀感传到手臂。心痛发作时先按内关再叫救护车。日常养心：每天按揉内关+神门各3分钟，预防心脑血管问题。高血压患者配合太冲穴效果更好。",
      cta: "学会的点个赞让更多人看到，关键时刻真的有用。"
    },
    shooting: { style: "手臂穴位特写+实操", duration: "45秒", props: ["穴位笔", "手臂", "经络图"], bgm: "沉稳古典" },
    platform: ["抖音", "视频号"],
    estimatedDuration: "45秒"
  },
  {
    id: 17,
    title: "按了3个月的「美容穴」，脸上的斑淡了气色好了",
    script: {
      hook: "不花一分钱的脸部"美容仪"——三个穴位就够了。",
      body: "第一个，四白穴——眼眶下缘正中直下一横指，按揉时有酸胀感。美白淡斑、紧致皮肤。第二个，迎香穴——鼻翼两侧，按揉不仅能通鼻塞，还能改善法令纹。第三个，颊车穴——咬紧牙时肌肉凸起处，按揉瘦脸、缓解牙痛。每晚睡前按3分钟，配合热敷更好。",
      cta: "想变美的姐妹今晚就按起来！一个月后看对比效果。"
    },
    shooting: { style: "脸部穴位特写+按揉演示", duration: "50秒", props: ["镜子", "手指", "面部穴位图"], bgm: "治愈轻音乐" },
    platform: ["小红书", "抖音"],
    estimatedDuration: "50秒"
  },
  {
    id: 18,
    title: "痛经痛到想撞墙？按这个穴位3分钟立马缓解",
    script: {
      hook: "痛经来了别硬扛！这个穴位比布洛芬还管用——三阴交。",
      body: "三阴交——内踝尖上四指（约4寸），胫骨后缘。这是肝脾肾三条阴经的交会穴，妇科第一大穴。痛经的时候用力按揉3分钟，酸胀感会传到脚踝。还可以配合足三里（膝盖下四指）和关元穴（肚脐下四指）。平时每周按3次可以调理月经。",
      cta: "痛经的姐妹保存！下次来大姨妈之前就开始按。"
    },
    shooting: { style: "腿部穴位特写+演示", duration: "45秒", props: ["穴位笔", "腿", "经络图", "抱枕"], bgm: "舒缓古典" },
    platform: ["小红书", "抖音"],
    estimatedDuration: "45秒"
  },
  {
    id: 19,
    title: "便秘的看过来！肚子上有个「通便开关」一按就灵",
    script: {
      hook: "几天不上厕所、肚子胀鼓鼓的？我教你一个不用吃药的方子。",
      body: "天枢穴——肚脐旁开三指宽（约2寸），左右各一个。这是大肠的募穴，专门调理肠道问题的。顺时针按揉天枢穴5分钟，力度要渗透进去，感觉到肚子里面有反应。按的时候配合深呼吸——吸气时按、呼气时松。早上一起来就按效果最好，因为5-7点是大肠经当令。",
      cta: "被便秘困扰的收藏这条！明天早上就试试。"
    },
    shooting: { style: "腹部穴位特写+躺姿演示", duration: "50秒", props: ["按摩棒", "精油", "肚脐穴道贴"], bgm: "放松冥想" },
    platform: ["抖音", "小红书", "快手"],
    estimatedDuration: "50秒"
  },
  {
    id: 20,
    title: "最容易忽略的「长寿穴」——每天按一按活到九十九",
    script: {
      hook: "中医有句话：常按足三里，胜吃老母鸡。",
      body: "足三里——膝盖外膝眼下四指宽（约3寸），胫骨外侧一横指。这是胃经的合穴，调理脾胃、补益气血、增强免疫。每天按揉足三里3分钟，酸胀感最好。还可以用艾灸——艾条悬灸15分钟，一周2次。常按足三里的人：消化好、精神好、不容易生病。",
      cta: "现在就找到足三里按起来！一周后回来告诉我感觉怎么样。"
    },
    shooting: { style: "腿部穴位+实操演示", duration: "45秒", props: ["艾条", "穴位定位器", "腿"], bgm: "温润古琴" },
    platform: ["抖音", "视频号", "小红书"],
    estimatedDuration: "45秒"
  },
  {
    id: 21,
    title: "早上起来眼睛肿肿的？按按这个穴5分钟消肿",
    script: {
      hook: "昨晚水喝多了或者熬夜了，早上起来眼睛肿得像核桃？",
      body: "别用冰敷——中医讲「寒主收引」，反而让水肿排不出去。正确做法：按揉睛明穴（内眼角稍上方凹陷处）和攒竹穴（眉头凹陷处）。每个按1分钟，力度要轻。配合搓热掌心的劳宫穴敷眼睛2分钟。最后喝一杯茯苓薏米水——从内排水。",
      cta: "早上一醒就试试！比任何眼霜都有效。"
    },
    shooting: { style: "脸部特写+护肤routine", duration: "45秒", props: ["镜子", "手指", "温热毛巾", "茯苓薏米"], bgm: "清晨治愈" },
    platform: ["小红书", "抖音"],
    estimatedDuration: "45秒"
  },
  {
    id: 22,
    title: "头痛不想吃药？头部6个穴位按一按马上好",
    script: {
      hook: "头痛、偏头痛的姐妹别急着吃药，先按这几个穴。",
      body: "不同位置头痛按不同穴：前额痛（胃经）按头维穴和足三里。太阳穴痛（胆经）按太阳穴和率谷穴——从太阳穴往耳尖方向推。头顶痛（肝经）按百会穴和太冲穴。后头痛（膀胱经）按风池穴和天柱穴。每个按揉2分钟，力度要渗透但不暴力。",
      cta: "收藏这条！下次头痛直接翻出来照着按。"
    },
    shooting: { style: "头部穴位巡回讲解", duration: "60秒", props: ["头部穴位图", "手指", "梳子"], bgm: "舒缓冥想" },
    platform: ["抖音", "小红书"],
    estimatedDuration: "60秒"
  },

  // ===== 食疗养生类（高收藏） =====
  {
    id: 23,
    title: "把这家常食材变成「补肾乌发丸」——成本不到20块",
    script: {
      hook: "白头发越来越多？别去买昂贵的染发剂了，吃这个。",
      body: "九蒸九晒黑芝麻丸的简化版：黑芝麻200g炒熟打粉、黑豆100g炒熟打粉、黑米100g打粉、核桃50g碾碎、蜂蜜适量。所有材料混合，加蜂蜜揉成10g一个的小丸子，每天早晚各一颗。坚持三个月，头发会又黑又亮。关键：黑芝麻要炒过才出油。",
      cta: "想做的小红书扣1，我出详细视频教程！"
    },
    shooting: { style: "厨房实拍制作过程", duration: "60秒", props: ["黑芝麻", "黑豆", "黑米", "核桃", "蜂蜜", "料理机", "锡纸"], bgm: "温馨手工BGM" },
    platform: ["小红书", "抖音", "快手"],
    estimatedDuration: "60秒"
  },
  {
    id: 24,
    title: "湿气重的姐妹喝这碗汤——一周见效不反弹",
    script: {
      hook: "喝了那么多祛湿茶还是湿气重？因为你忽略了最关键的一点。",
      body: "祛湿的关键不是去掉湿气，是健脾胃——脾主运化，脾好了才能自己把湿气运出去。推荐「四神汤」升级版：山药15g、茯苓15g、莲子15g、芡实15g、薏米20g（先炒过去寒性）。猪骨焯水后一起煲1.5小时。一周喝2-3次，连续一个月。",
      cta: "湿气重的姐妹收藏！周末就煲起来。"
    },
    shooting: { style: "厨房煲汤过程", duration: "55秒", props: ["四神汤料包", "砂锅", "猪骨", "碗"], bgm: "家庭温馨" },
    platform: ["小红书", "视频号", "快手"],
    estimatedDuration: "55秒"
  },
  {
    id: 25,
    title: "秋天必喝的5款润肺汤水——比敷100张面膜还养人",
    script: {
      hook: "秋天干燥，嗓子干皮肤干全身都干？该润肺了。",
      body: "五款润肺汤水分享：1、银耳百合羹——基础款，每周3次。2、雪梨川贝炖冰糖——干咳的时候喝。3、莲藕排骨汤——清润不腻。4、麦冬沙参玉竹汤——适合养阴的升级版。5、无花果南北杏瘦肉汤——喉咙不舒服时喝。核心：白色食物入肺——银耳、百合、雪梨、莲藕、山药。",
      cta: "收藏这个秋天的养生清单！明天就去买材料。"
    },
    shooting: { style: "快速切换5种汤品制作特写", duration: "50秒", props: ["银耳", "雪梨", "莲藕", "砂锅", "各种汤碗"], bgm: "秋日温馨" },
    platform: ["小红书", "抖音", "视频号"],
    estimatedDuration: "50秒"
  },
  {
    id: 26,
    title: "大姨妈来了吃什么？——3天的经期食谱（照着吃）",
    script: {
      hook: "每个月的那几天别乱吃！吃对了舒服一整天，吃错了痛到哭。",
      body: "第一天：早上红糖姜枣茶（驱寒暖宫）、中午清炒菠菜猪肝（补铁）、晚上不要吃凉的生冷的。第二天：早上桂圆红枣小米粥（暖身）、中午当归炖蛋（经典补血方）、晚上萝卜汤（如果胀气）。第三天：早上黑芝麻糊（补肾）、中午山药枸杞鸡汤（补气）、晚上红豆薏米粥（祛湿消水肿）。",
      cta: "女生们保存好！下次大姨妈照着做。"
    },
    shooting: { style: "分屏展示三天食谱内容", duration: "60秒", props: ["红糖", "红枣", "当归", "鸡蛋", "黑芝麻", "山药"], bgm: "温柔治愈" },
    platform: ["小红书", "抖音"],
    estimatedDuration: "60秒"
  },
  {
    id: 27,
    title: "小孩积食、不爱吃饭？一碗「焦米水」就搞定",
    script: {
      hook: "宝宝不爱吃饭、舌苔厚、口臭、晚上睡不好？这是积食了。",
      body: "焦米水做法超级简单：一把大米放进无油的锅里，小火炒到焦黄色（注意别炒糊了），然后加水煮10分钟，过滤出米水。放温了给宝宝喝。焦香入脾——炒焦的大米健脾消食、和中止泻。6个月以上就能喝。如果宝宝拉肚子可以加一点苹果煮水。",
      cta: "宝妈们收藏这条！关键时刻用得上。"
    },
    shooting: { style: "厨房炒米特写", duration: "45秒", props: ["大米", "炒锅", "勺子", "宝宝水杯"], bgm: "轻快儿歌风" },
    platform: ["抖音", "快手", "视频号"],
    estimatedDuration: "45秒"
  },
  {
    id: 28,
    title: "为什么你越减越肥？中医告诉你减肥的正确方法",
    script: {
      hook: "节食减肥的后果不是瘦了——是脾胃伤了，变成喝凉水都胖的体质。",
      body: "中医眼中肥胖的3种类型：一是痰湿型（虚胖、肉松软）——祛湿健脾，重点不吃甜食冷饮。二是气虚型（容易累、肚子大）——补气提升代谢，重点早睡和黄芪水。三是肝郁型（压力大吃得多）——疏肝理气，重点是情绪管理和玫瑰花茶。",
      cta: "你是哪种胖？评论区告诉我，我告诉你怎么减。"
    },
    shooting: { style: "镜子前自测+对比画面", duration: "55秒", props: ["卷尺", "镜子", "黄芪", "玫瑰花"], bgm: "活力轻快" },
    platform: ["小红书", "抖音"],
    estimatedDuration: "55秒"
  },

  // ===== 热点/争议类 =====
  {
    id: 29,
    title: "养生骗局大揭秘！这5个「伪养生」你还在做吗？",
    script: {
      hook: "这些你以为在养生的事，其实正在伤害你的身体。",
      body: "伪养生一：每天走两万步——伤膝盖！正确是6000-8000步。伪养生二：每天喝八杯水——对痰湿体质是雪上加霜。伪养生三：吃水果代替正餐——果糖伤脾！伪养生四：每天泡很长时间的脚——出汗过多反伤津液。伪养生五：喝醋软化血管——不科学，醋反而伤胃粘膜。",
      cta: "你中了几个？评论区诚实告诉我！"
    },
    shooting: { style: "博主说话+错误做法X示范", duration: "55秒", props: ["水杯", "水果", "醋瓶", "跑鞋"], bgm: "节奏感强+音效" },
    platform: ["抖音", "小红书"],
    estimatedDuration: "55秒"
  },
  {
    id: 30,
    title: "24节气养生法｜每个月最重要的一件事",
    script: {
      hook: "老祖宗把一年分成了24份，每一份都告诉你该做什么。",
      body: "立春——吃芽菜升发阳气。惊蛰——疏肝理气防上火。清明——踏青舒展。立夏——养心午睡。夏至——吃姜排寒。大暑——三伏贴。立秋——润肺白色食物。白露——加衣服不露脚踝。秋分——收敛情绪。立冬——开始温补。冬至——进补最关键。大寒——藏好不要折腾。",
      cta: "收藏这一条！每个月看一眼就知道该做什么。"
    },
    shooting: { style: "24节气快速切换+核心金句", duration: "60秒", props: ["24节气卡片", "四季服装变化"], bgm: "四季变化交响" },
    platform: ["抖音", "小红书", "视频号", "快手"],
    estimatedDuration: "60秒"
  },
];
```

---

<a name="4-资讯抓取"></a>

## 4. 💬 平台资讯抓取策略

> 切实可用的免费数据源，用于「资讯雷达」模块实时抓取行业动态。

### 4.1 抖音热搜 & 趋势

| 数据源 | 类型 | URL | 说明 |
|--------|------|-----|------|
| 抖音热搜榜 | 网页 | `https://www.douyin.com/hot` | 综合性热搜，可搜索过滤「中医」「养生」等关键词 |
| 抖音健康榜 | 网页 | `https://www.douyin.com/search/中医` | 抖音搜索「中医」后的搜索结果聚合 |
| 抖音话题页 | 网页 | `https://www.douyin.com/hashtag/中医养生` | 话题聚合页面，显示话题播放量和相关视频 |
| 抖音创作者学习中心 | 网页 | `https://creator.douyin.com/` | 官方运营指南和热门趋势分析（需登录） |

### 4.2 小红书热点

| 数据源 | 类型 | URL | 说明 |
|--------|------|-----|------|
| 小红书搜索热词 | 网页 | `https://www.xiaohongshu.com/search_result?keyword=中医养生` | 搜索页显示热门关键词推荐 |
| 小红书话题广场 | 网页 | `https://www.xiaohongshu.com/page/topics` | 话题广场热门话题 |
| 小红书养生类目 | RSS替代 | `https://www.xiaohongshu.com/search_result?keyword=养生&sort=general&type=general` | 用搜索结果的定时采集替代RSS |
| 小红书创作灵感 | 网页 | `https://creator.xiaohongshu.com/` | 官方创作灵感（需登录创作者中心） |

### 4.3 B站健康区

| 数据源 | 类型 | URL | 说明 |
|--------|------|-----|------|
| B站健康区 | 网页 | `https://www.bilibili.com/v/popular/rank/health` | B站健康区排行榜 |
| B站中医UP主合集 | 网页 | `https://search.bilibili.com/all?keyword=中医养生&order=click` | 按热度排序的中医内容 |
| B站热门标签 | 网页 | `https://www.bilibili.com/tag/中医/` | 中医标签聚合页 |

### 4.4 微信公众号 & 知乎

| 数据源 | 类型 | URL | 说明 |
|--------|------|-----|------|
| 微信搜一搜 | 网页 | `https://weixin.sogou.com/weixin?type=2&query=中医养生` | 搜狗微信搜索，可搜公众号文章 |
| 知乎健康话题 | 网页 | `https://www.zhihu.com/topic/19583019/hot` | 知乎中医话题热门内容 |
| 知乎养生热门 | 网页 | `https://www.zhihu.com/topic/19816111/hot` | 知乎养生话题热门 |

### 4.5 行业资讯 & 政策

| 数据源 | 类型 | URL | 说明 |
|--------|------|-----|------|
| 国家中医药管理局 | 网页 | `http://www.satcm.gov.cn/` | 最新中医药政策法规 |
| 中国中医药网 | 网页 | `http://www.cncm.com.cn/` | 行业新闻和学术动态 |
| 人民网健康频道 | 网页 | `http://health.people.com.cn/` | 主流媒体健康资讯 |
| 新华网健康 | 网页 | `http://www.xinhuanet.com/health/` | 健康新闻 |
| 中国知网-中医药 | RSS/搜索 | `https://kns.cnki.net/kns8/defaultresult/index` | 学术论文（适合深度内容选题） |

### 4.6 可用的RSS源（供radar模块使用）

| RSS源 | URL | 说明 |
|-------|-----|------|
| 知乎日报健康 | `https://www.zhihu.com/rss/daily` | 知乎日报RSS |
| 科学网-中医 | `http://news.sciencenet.cn/rss/xml/kjts.xml` | 科学网新闻RSS |
| Hacker News健康 | `https://hnrss.org/frontpage` | 可过滤health关键词 |
| 36氪健康 | `https://36kr.com/feed` | 科技+大健康新闻 |

### 4.7 热搜关键词监控列表

```typescript
export const hotKeywords: string[] = [
  // 核心关键词
  "中医", "养生", "中药", "穴位", "经络",
  "体质", "食疗", "艾灸", "刮痧", "拔罐",
  "针灸", "推拿", "八段锦", "太极拳", "五禽戏",
  // 痛点关键词
  "祛湿", "补气血", "失眠", "便秘", "痛经",
  "脱发", "痘痘", "手脚冰凉", "减肥", "水肿",
  "脾胃", "养肝", "补肾", "润肺", "养心",
  // 热词
  "三伏贴", "冬病夏治", "泡脚", "保温杯", "药膳",
  "舌诊", "面诊", "中医减肥", "中医美容", "中草药",
  // 流量词
  "养生日常", "健康科普", "中医知识", "家庭养生",
  "女性养生", "中医文化", "黄帝内经", "本草纲目",
];
```

### 4.8 爬虫/抓取策略（用于 radar-fetch.js）

```typescript
// 抓取策略配置
export const fetchStrategy = {
  // 每日抓取哪些源
  douyin: {
    enabled: true,
    intervalMs: 4 * 60 * 60 * 1000, // 每4小时
    endpoints: [
      { name: "热搜", url: "https://www.douyin.com/hot", type: "page" },
      { name: "中医搜索", url: "https://www.douyin.com/search/中医", type: "search" },
    ],
  },
  xiaohongshu: {
    enabled: true,
    intervalMs: 6 * 60 * 60 * 1000, // 每6小时
    endpoints: [
      { name: "养生搜索", url: "https://www.xiaohongshu.com/search_result?keyword=中医养生", type: "search" },
    ],
  },
  bilibili: {
    enabled: true,
    intervalMs: 6 * 60 * 60 * 1000, // 每6小时
    endpoints: [
      { name: "健康排行", url: "https://www.bilibili.com/v/popular/rank/health", type: "page" },
    ],
  },
  rss: {
    enabled: true,
    intervalMs: 12 * 60 * 60 * 1000, // 每12小时
    feeds: [
      { name: "知乎日报", url: "https://www.zhihu.com/rss/daily" },
    ],
  },
  // 最大同时抓取数（避免被ban）
  maxConcurrent: 2,
  // 请求间隔（ms）
  requestDelayMs: 1000,
  // User-Agent 轮换
  userAgents: [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
  ],
};
```

---

<a name="5-五行穿搭"></a>

## 5. 👗 五行穿搭每日（天干地支计算逻辑）

> 基于天干地支五行生克，计算每日幸运色、避讳色、吉方。数据可导出为 TypeScript 供前端使用。

### 5.1 天干地支 & 五行对照表

#### 十天干

```typescript
export const tiangan: Record<string, { element: string; yinYang: string }> = {
  "甲": { element: "木", yinYang: "阳" },
  "乙": { element: "木", yinYang: "阴" },
  "丙": { element: "火", yinYang: "阳" },
  "丁": { element: "火", yinYang: "阴" },
  "戊": { element: "土", yinYang: "阳" },
  "己": { element: "土", yinYang: "阴" },
  "庚": { element: "金", yinYang: "阳" },
  "辛": { element: "金", yinYang: "阴" },
  "壬": { element: "水", yinYang: "阳" },
  "癸": { element: "水", yinYang: "阴" },
};
```

#### 十二地支

```typescript
export const dizhi: Record<string, { element: string; direction: string }> = {
  "子": { element: "水", direction: "北" },
  "丑": { element: "土", direction: "东北" },
  "寅": { element: "木", direction: "东北" },
  "卯": { element: "木", direction: "东" },
  "辰": { element: "土", direction: "东南" },
  "巳": { element: "火", direction: "东南" },
  "午": { element: "火", direction: "南" },
  "未": { element: "土", direction: "西南" },
  "申": { element: "金", direction: "西南" },
  "酉": { element: "金", direction: "西" },
  "戌": { element: "土", direction: "西北" },
  "亥": { element: "水", direction: "西北" },
};
```

#### 五行对应颜色

```typescript
export const wuxingColors: Record<string, { lucky: string[]; avoid: string[] }> = {
  "木": { lucky: ["绿色", "青色", "墨绿", "浅绿"], avoid: ["白色", "金色", "银色"] },
  "火": { lucky: ["红色", "粉色", "紫色", "橙色"], avoid: ["黑色", "深蓝", "灰色"] },
  "土": { lucky: ["黄色", "米色", "棕色", "卡其色"], avoid: ["绿色", "青色"] },
  "金": { lucky: ["白色", "金色", "银色", "米白"], avoid: ["红色", "粉色", "橙色"] },
  "水": { lucky: ["黑色", "深蓝", "藏青", "灰色"], avoid: ["黄色", "米色", "棕色"] },
};
```

#### 五行相生相克

```typescript
export const wuxingRelations = {
  sheng: { 木: "火", 火: "土", 土: "金", 金: "水", 水: "木" }, // 相生
  ke:    { 木: "土", 土: "水", 水: "火", 火: "金", 金: "木" }, // 相克
};
```

#### 生肖五行（用于本命年提醒和流年运势）

```typescript
export const shengxiao: Record<string, string> = {
  "子": "鼠", "丑": "牛", "寅": "虎", "卯": "兔",
  "辰": "龙", "巳": "蛇", "午": "马", "未": "羊",
  "申": "猴", "酉": "鸡", "戌": "狗", "亥": "猪",
};
```

### 5.2 天干地支日期计算逻辑

#### 核心算法：公历转天干地支

```typescript
/**
 * 计算某日的天干地支（日柱）
 * 算法说明：
 *   1. 基准日：1900年1月1日 = 甲子日（天干1/地支1）
 *   2. 计算距基准日的天数差
 *   3. 天干 = (天数差 % 10) 的索引
 *   4. 地支 = (天数差 % 12) 的索引
 *
 * @param date 要计算的日期
 * @returns { dayGan: string, dayZhi: string, dayGanZhi: string }
 */
export function calcDayGanZhi(date: Date): {
  dayGan: string;
  dayZhi: string;
  dayGanZhi: string;
} {
  const tianganList = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];
  const dizhiList   = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];

  // 基准日 1900-01-01 = 甲子日，天干idx=0, 地支idx=0
  const base = new Date("1900-01-01T00:00:00");
  const target = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const diffDays = Math.round(
    (target.getTime() - base.getTime()) / (24 * 60 * 60 * 1000)
  );

  const ganIdx = ((diffDays % 10) + 10) % 10;
  const zhiIdx = ((diffDays % 12) + 12) % 12;

  return {
    dayGan: tianganList[ganIdx],
    dayZhi: dizhiList[zhiIdx],
    dayGanZhi: tianganList[ganIdx] + dizhiList[zhiIdx],
  };
}

/**
 * 计算某日的五行穿搭建议
 * @param date 日期
 * @returns FiveElementsDaily 五行每日数据
 */
export function calcFiveElementsDaily(date: Date): FiveElementsDaily {
  const { dayGan, dayZhi, dayGanZhi } = calcDayGanZhi(date);
  const ganElement = tiangan[dayGan].element;    // 天干五行
  const zhiElement = dizhi[dayZhi].element;       // 地支五行
  const dayElement = ganElement;                  // 以天干为准

  // 幸运色：当天干支五行对应的颜色 + 相生五行对应的颜色
  const shengElement = wuxingRelations.sheng[dayElement]; // 生我者
  const shengByElement = Object.entries(wuxingRelations.sheng)
    .find(([, v]) => v === dayElement)?.[0]; // 我生者（泄）

  const luckyFromDay = wuxingColors[dayElement]?.lucky ?? [];
  const luckyFromSheng = shengElement ? wuxingColors[shengElement]?.lucky ?? [] : [];
  const luckyColors = [...new Set([...luckyFromDay, ...luckyFromSheng])];

  // 避讳色：相克五行对应的颜色（克我的和被我克的都避免）
  const keElement = Object.entries(wuxingRelations.ke)
    .find(([, v]) => v === dayElement)?.[0]; // 克我者
  const beKeElement = wuxingRelations.ke[dayElement]; // 我克者

  const avoidFromKe = keElement ? wuxingColors[keElement]?.avoid ?? [] : [];
  const avoidFromBeKe = beKeElement ? wuxingColors[beKeElement]?.avoid ?? [] : [];
  const avoidColors = [...new Set([...avoidFromKe, ...avoidFromBeKe])];

  // 吉方：当天干的五行对应方位
  const auspiciousDirection = dizhi[dayZhi].direction;

  return {
    today: date.toISOString().split("T")[0],
    dayGanZhi,
    dayElement,
    luckyColors,
    avoidColors,
    dressAdvice: `今日五行【${dayElement}】，宜穿${luckyColors.join("、")}，忌穿${avoidColors.join("、")}，吉方${auspiciousDirection}`,
    auspiciousDirection,
    activities: [
      `适合${wuxingElementActivity(dayElement)}`,
      ...(dayElement === "木" ? ["伸展运动", "踏青", "植树"] :
          dayElement === "火" ? ["社交活动", "运动出汗", "写作创作"] :
          dayElement === "土" ? ["收纳整理", "烹饪美食", "静坐冥想"] :
          dayElement === "金" ? ["复盘计划", "断舍离", "开会谈判"] :
          ["休息放松", "泡澡", "听音乐"]),
    ],
    avoidActivities: [
      `避免过度${wuxingElementAvoid(dayElement)}`,
    ],
  };
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
```

### 5.3 穿搭建议文案库（可直接使用）

```typescript
/**
 * 根据五行生成穿搭文案（用于每日穿搭卡片）
 */
export function generateDressAdvice(params: {
  dayGanZhi: string;
  element: string;
  luckyColors: string[];
  avoidColors: string[];
}): string {
  const elementEmoji: Record<string, string> = {
    "木": "🌳", "火": "🔥", "土": "⛰️", "金": "💎", "水": "💧",
  };
  const elementDesc: Record<string, string> = {
    "木": "木曰曲直，主生长升发。今日宜释放创造力，穿绿色系生机盎然。",
    "火": "火曰炎上，主热烈向上。今日宜大胆表达，穿暖色系气场全开。",
    "土": "土曰稼穑，主承载包容。今日宜扎实做事，穿大地色系沉稳笃定。",
    "金": "金曰从革，主变革决断。今日宜干脆利落，穿素色系清爽干练。",
    "水": "水曰润下，主滋润收藏。今日宜休养生息，穿深色系静谧内敛。",
  };

  return [
    `✨ 今日${params.dayGanZhi} | 五行${params.element} ${elementEmoji[params.element] ?? ""}`,
    elementDesc[params.element] ?? "",
    `🎀 幸运色：${params.luckyColors.join(" • ")}`,
    `⛔ 避讳色：${params.avoidColors.join(" • ")}`,
    `💡 搭配建议：主色选幸运色之一，配饰点缀另一个。避讳色尽量不出现在上半身。`,
  ].filter(Boolean).join("\n");
}

/**
 * 穿搭文案样例（可直接用于短视频口播 / 图文）
 */
export const dressCopySamples: Record<string, string> = {
  "木": "今天是【木】日🌳 木主生长升发，穿绿色系的衣服能给你一天的好运势。推荐墨绿针织衫+米白阔腿裤，温柔又有力量。避讳大面积白色金色哦～",
  "火": "今天是【火】日🔥 是时候把你的粉色小裙子拿出来啦！火主热情和行动力，穿暖色系工作效率翻倍。今天适合穿粉色+奶油白的搭配，Kitty风满满🎀",
  "土": "今天是【土】日⛰️ 大地色系是你的幸运色！卡其色风衣+棕色短靴，稳重又时髦。今天适合做计划和总结，穿搭越稳心态越稳。避开绿色哦～",
  "金": "今天是【金】日💎 简约才是高级。白色衬衫+银色配饰，干净利落。金主决断力，今天适合做选择和断舍离。避开大面积红色～",
  "水": "今天是【水】日💧 深蓝+灰色的搭配既显瘦又有气质。水主休息和收藏，今天不宜太折腾。如果一定要出门，用金属配饰（金色耳环等）来平衡。",
};
```

---

## 附录：快速使用指南

### 这些数据如何接入 Codex

本文档中的所有内容都遵循统一的 TypeScript 导出格式，可以直接复制对应代码块保存为 `.ts` 文件：

| 模块 | 建议文件路径 | 导出变量 |
|------|------------|---------|
| 话术技巧 | `src/data/speechTips.ts` | `speechTips: SpeechTip[]` |
| 营销技巧 | `src/data/marketingTips.ts` | `marketingTips: MarketingTip[]` |
| 爆款选题 | 已有 `src/data/topics.ts` | 追加到现有 `topics` 数组 |
| 抓取策略 | `src/data/fetchStrategy.ts` | `hotKeywords: string[]` + `fetchStrategy` |
| 五行穿搭 | `src/lib/wuxing.ts` | `calcDayGanZhi()` + `calcFiveElementsDaily()` |

### 数据更新频率建议

- **话术技巧 & 营销技巧**：月度更新（根据平台算法变化）
- **爆款选题**：季度更新（根据季节/热点调整）
- **抓取策略**：半年度更新（根据平台接口变化）
- **五行穿搭**：算法固定，无需更新

### Hello Kitty 风格融合建议

所有内容的视觉呈现遵循以下原则：
- 标题加 Emoji（🎀🌸💖✨🍬）
- 分类使用粉色/白色/米色色板
- 卡片圆角+柔和阴影
- 字体选用圆润可爱风格
- 五行穿搭卡片用蝴蝶结+花卉装饰点缀

---

> 🎀 妙锦工作台 · 内容规划文档 V2.0
> 让每一个中医博主的创作都变得轻松又可爱 ✨

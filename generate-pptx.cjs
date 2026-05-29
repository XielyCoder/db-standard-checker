const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "DB 贯标助手";
pres.title = "DB 贯标助手 - 数据库表结构智能合规检测平台";

// Color scheme
const BG = "0B1120";
const BG_CARD = "111827";
const BG_CARD2 = "1E293B";
const TEAL = "0D9488";
const TEAL_LIGHT = "14B8A6";
const TEAL_DARK = "0F766E";
const PURPLE = "7C3AED";
const PURPLE_LIGHT = "8B5CF6";
const ORANGE = "EA580C";
const ORANGE_LIGHT = "F97316";
const WHITE = "FFFFFF";
const GRAY = "94A3B8";
const GRAY_LIGHT = "CBD5E1";
const GRAY_DARK = "475569";

// Helper: fresh shadow
const makeShadow = () => ({
  type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.25
});

// Helper: card shape
function addCard(slide, x, y, w, h, color) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w, h,
    fill: { color: color || BG_CARD },
    shadow: makeShadow(),
    rectRadius: 0.08
  });
}

// Helper: accent bar
function addAccent(slide, x, y, w, h, color) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w, h,
    fill: { color: color || TEAL }
  });
}

// Helper: section number circle
function addNumberCircle(slide, x, y, num, color) {
  slide.addShape(pres.shapes.OVAL, {
    x, y, w: 0.45, h: 0.45,
    fill: { color: color || TEAL }
  });
  slide.addText(String(num), {
    x, y, w: 0.45, h: 0.45,
    fontSize: 14, fontFace: "Arial", color: WHITE, bold: true,
    align: "center", valign: "middle", margin: 0
  });
}

// ==================== SLIDE 1: Cover ====================
let s1 = pres.addSlide();
s1.background = { color: BG };
addAccent(s1, 0, 0, 10, 0.06, TEAL);
s1.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 1.5, w: 0.12, h: 1.2, fill: { color: TEAL } });
s1.addText("DB 贯标助手", {
  x: 1.2, y: 1.4, w: 7, h: 0.9,
  fontSize: 44, fontFace: "Arial Black", color: WHITE, bold: true, margin: 0
});
s1.addText("数据库表结构智能合规检测平台", {
  x: 1.2, y: 2.3, w: 7, h: 0.5,
  fontSize: 20, fontFace: "Arial", color: TEAL_LIGHT, margin: 0
});
s1.addShape(pres.shapes.LINE, { x: 1.2, y: 3.1, w: 3, h: 0, line: { color: GRAY_DARK, width: 1 } });
s1.addText("基于 AI Agent 的数据库表结构贯标检测工具\n支持命名规范、字段类型、索引设计、安全合规等五大维度自动检测", {
  x: 1.2, y: 3.4, w: 6, h: 1.0,
  fontSize: 13, fontFace: "Arial", color: GRAY_LIGHT, lineSpacingMultiple: 1.5, margin: 0
});
s1.addText("CodeBuddy Agent SDK  |  React + Electron", {
  x: 1.2, y: 4.7, w: 6, h: 0.4,
  fontSize: 11, fontFace: "Arial", color: GRAY, margin: 0
});
// Decorative elements
s1.addShape(pres.shapes.OVAL, { x: 7.8, y: 0.8, w: 1.8, h: 1.8, fill: { color: TEAL, transparency: 85 } });
s1.addShape(pres.shapes.OVAL, { x: 8.2, y: 3.0, w: 1.2, h: 1.2, fill: { color: PURPLE, transparency: 88 } });
s1.addShape(pres.shapes.OVAL, { x: 7.0, y: 3.8, w: 0.8, h: 0.8, fill: { color: ORANGE, transparency: 85 } });

// ==================== SLIDE 2: TOC ====================
let s2 = pres.addSlide();
s2.background = { color: BG };
addAccent(s2, 0, 0, 10, 0.06, TEAL);
s2.addText("内容概览", {
  x: 0.8, y: 0.3, w: 8, h: 0.7,
  fontSize: 32, fontFace: "Arial Black", color: WHITE, bold: true, margin: 0
});
s2.addShape(pres.shapes.LINE, { x: 0.8, y: 1.05, w: 2.5, h: 0, line: { color: TEAL, width: 3 } });

const tocItems = [
  { num: "01", title: "行业痛点", sub: "数据库合规现状与挑战", color: TEAL },
  { num: "02", title: "产品方案", sub: "DB贯标助手核心能力", color: PURPLE },
  { num: "03", title: "检测体系", sub: "五大贯标检测维度", color: TEAL },
  { num: "04", title: "技术架构", sub: "Agent SDK + 双模式运行", color: ORANGE },
  { num: "05", title: "演示场景", sub: "实际检测效果展示", color: TEAL },
  { num: "06", title: "未来展望", sub: "自动化数据库治理趋势", color: PURPLE },
];
tocItems.forEach((item, i) => {
  const y = 1.4 + i * 0.65;
  addCard(s2, 0.8, y, 8.4, 0.55, BG_CARD);
  addAccent(s2, 0.8, y, 0.08, 0.55, item.color);
  s2.addText(item.num, {
    x: 1.1, y, w: 0.6, h: 0.55,
    fontSize: 18, fontFace: "Arial Black", color: item.color, bold: true, valign: "middle", margin: 0
  });
  s2.addText(item.title, {
    x: 1.8, y, w: 3, h: 0.55,
    fontSize: 16, fontFace: "Arial", color: WHITE, bold: true, valign: "middle", margin: 0
  });
  s2.addText(item.sub, {
    x: 5.0, y, w: 4, h: 0.55,
    fontSize: 13, fontFace: "Arial", color: GRAY, valign: "middle", margin: 0
  });
});

// ==================== SLIDE 3: Transition - 行业痛点 ====================
let s3 = pres.addSlide();
s3.background = { color: BG };
addAccent(s3, 0, 0, 10, 0.06, TEAL);
s3.addShape(pres.shapes.RECTANGLE, { x: 3.5, y: 1.8, w: 3, h: 0.06, fill: { color: TEAL } });
s3.addText("01", {
  x: 4.2, y: 1.0, w: 1.6, h: 0.7,
  fontSize: 28, fontFace: "Arial Black", color: TEAL, bold: true, align: "center", margin: 0
});
s3.addText("行业痛点", {
  x: 1, y: 2.2, w: 8, h: 0.9,
  fontSize: 40, fontFace: "Arial Black", color: WHITE, bold: true, align: "center", margin: 0
});
s3.addText("数据库合规现状与挑战", {
  x: 1, y: 3.1, w: 8, h: 0.6,
  fontSize: 18, fontFace: "Arial", color: GRAY_LIGHT, align: "center", margin: 0
});

// ==================== SLIDE 4: 数据库合规现状 ====================
let s4 = pres.addSlide();
s4.background = { color: BG };
addAccent(s4, 0, 0, 10, 0.06, TEAL);
s4.addText("数据库合规现状：触目惊心", {
  x: 0.8, y: 0.3, w: 8, h: 0.7,
  fontSize: 28, fontFace: "Arial Black", color: WHITE, bold: true, margin: 0
});
s4.addShape(pres.shapes.LINE, { x: 0.8, y: 1.0, w: 2, h: 0, line: { color: TEAL, width: 3 } });

// Stats row
const stats = [
  { value: "$12.9M", label: "年均数据质量损失", source: "Gartner 2024", color: TEAL },
  { value: "61%", label: "企业数据质量首要挑战", source: "DATAVERSITY 2025", color: PURPLE },
  { value: "11%", label: "元数据管理高成熟度", source: "行业调研", color: ORANGE },
];
stats.forEach((st, i) => {
  const x = 0.8 + i * 3.0;
  addCard(s4, x, 1.3, 2.7, 1.5, BG_CARD);
  addAccent(s4, x, 1.3, 2.7, 0.06, st.color);
  s4.addText(st.value, {
    x, y: 1.45, w: 2.7, h: 0.7,
    fontSize: 30, fontFace: "Arial Black", color: st.color, bold: true, align: "center", margin: 0
  });
  s4.addText(st.label, {
    x, y: 2.15, w: 2.7, h: 0.35,
    fontSize: 12, fontFace: "Arial", color: WHITE, align: "center", margin: 0
  });
  s4.addText(st.source, {
    x, y: 2.5, w: 2.7, h: 0.25,
    fontSize: 9, fontFace: "Arial", color: GRAY, align: "center", margin: 0
  });
});

// Bottom stats
addCard(s4, 0.8, 3.1, 4.2, 1.1, BG_CARD);
addAccent(s4, 0.8, 3.1, 0.08, 1.1, TEAL);
s4.addText([
  { text: "生产力下降 20%", options: { bold: true, color: ORANGE_LIGHT, fontSize: 14, breakLine: true } },
  { text: "运营成本增加 30%", options: { bold: true, color: ORANGE_LIGHT, fontSize: 14, breakLine: true } },
  { text: "McKinsey 研究数据", options: { color: GRAY, fontSize: 10 } }
], { x: 1.1, y: 3.2, w: 3.7, h: 0.9, valign: "middle", margin: 0 });

addCard(s4, 5.3, 3.1, 4.2, 1.1, BG_CARD);
addAccent(s4, 5.3, 3.1, 0.08, 1.1, PURPLE);
s4.addText([
  { text: "异构系统标准不统一", options: { bold: true, color: WHITE, fontSize: 14, breakLine: true } },
  { text: "MES / ERP / PLM / OA 各自为政", options: { color: GRAY_LIGHT, fontSize: 12, breakLine: true } },
  { text: "2023年中国数据总量 32.9 ZB，治理能力严重滞后", options: { color: GRAY, fontSize: 10 } }
], { x: 5.6, y: 3.2, w: 3.7, h: 0.9, valign: "middle", margin: 0 });

// ==================== SLIDE 5: 传统检测方式困境 ====================
let s5 = pres.addSlide();
s5.background = { color: BG };
addAccent(s5, 0, 0, 10, 0.06, TEAL);
s5.addText("传统检测方式的困境", {
  x: 0.8, y: 0.3, w: 8, h: 0.7,
  fontSize: 28, fontFace: "Arial Black", color: WHITE, bold: true, margin: 0
});
s5.addShape(pres.shapes.LINE, { x: 0.8, y: 1.0, w: 2, h: 0, line: { color: TEAL, width: 3 } });

// Two eras
addCard(s5, 0.8, 1.3, 4.2, 1.4, BG_CARD);
addNumberCircle(s5, 1.1, 1.45, 1, GRAY_DARK);
s5.addText("手工时代", { x: 1.7, y: 1.4, w: 3, h: 0.35, fontSize: 16, fontFace: "Arial", color: WHITE, bold: true, margin: 0 });
s5.addText("DESCRIBE TABLE 逐表检查\n易遗漏、耗时长、无法规模化", {
  x: 1.7, y: 1.8, w: 3, h: 0.7, fontSize: 12, fontFace: "Arial", color: GRAY_LIGHT, margin: 0
});

addCard(s5, 5.3, 1.3, 4.2, 1.4, BG_CARD);
addNumberCircle(s5, 5.6, 1.45, 2, GRAY_DARK);
s5.addText("脚本时代", { x: 6.2, y: 1.4, w: 3, h: 0.35, fontSize: 16, fontFace: "Arial", color: WHITE, bold: true, margin: 0 });
s5.addText("每条规则单独脚本\n维护成本螺旋上升，环境逻辑不同", {
  x: 6.2, y: 1.8, w: 3, h: 0.7, fontSize: 12, fontFace: "Arial", color: GRAY_LIGHT, margin: 0
});

// Comparison table
addCard(s5, 0.8, 3.0, 8.7, 0.45, TEAL_DARK);
s5.addText("对比项", { x: 1.0, y: 3.0, w: 2, h: 0.45, fontSize: 12, fontFace: "Arial", color: WHITE, bold: true, valign: "middle", margin: 0 });
s5.addText("传统方式", { x: 3.2, y: 3.0, w: 2.8, h: 0.45, fontSize: 12, fontFace: "Arial", color: WHITE, bold: true, valign: "middle", align: "center", margin: 0 });
s5.addText("AI 自动化", { x: 6.2, y: 3.0, w: 3, h: 0.45, fontSize: 12, fontFace: "Arial", color: WHITE, bold: true, valign: "middle", align: "center", margin: 0 });

const comparisons = [
  ["审计响应", "数周", "数小时"],
  ["规则覆盖", "人为遗漏不可避免", "规则 100% 覆盖"],
  ["标准化工作", "人工 40-60% 时间", "接近 0"],
];
comparisons.forEach((row, i) => {
  const y = 3.5 + i * 0.45;
  const bgColor = i % 2 === 0 ? BG_CARD : BG_CARD2;
  addCard(s5, 0.8, y, 8.7, 0.45, bgColor);
  s5.addText(row[0], { x: 1.0, y, w: 2, h: 0.45, fontSize: 12, fontFace: "Arial", color: WHITE, valign: "middle", margin: 0 });
  s5.addText(row[1], { x: 3.2, y, w: 2.8, h: 0.45, fontSize: 12, fontFace: "Arial", color: ORANGE_LIGHT, valign: "middle", align: "center", margin: 0 });
  s5.addText(row[2], { x: 6.2, y, w: 3, h: 0.45, fontSize: 12, fontFace: "Arial", color: TEAL_LIGHT, valign: "middle", align: "center", margin: 0 });
});

// Core contradiction
addCard(s5, 0.8, 4.9, 8.7, 0.45, BG_CARD);
addAccent(s5, 0.8, 4.9, 0.08, 0.45, ORANGE);
s5.addText("核心矛盾：数据规模指数增长，治理能力线性增长", {
  x: 1.1, y: 4.9, w: 8, h: 0.45, fontSize: 13, fontFace: "Arial", color: ORANGE_LIGHT, bold: true, valign: "middle", margin: 0
});

// ==================== SLIDE 6: Transition - 产品方案 ====================
let s6 = pres.addSlide();
s6.background = { color: BG };
addAccent(s6, 0, 0, 10, 0.06, PURPLE);
s6.addShape(pres.shapes.RECTANGLE, { x: 3.5, y: 1.8, w: 3, h: 0.06, fill: { color: PURPLE } });
s6.addText("02", {
  x: 4.2, y: 1.0, w: 1.6, h: 0.7,
  fontSize: 28, fontFace: "Arial Black", color: PURPLE, bold: true, align: "center", margin: 0
});
s6.addText("产品方案", {
  x: 1, y: 2.2, w: 8, h: 0.9,
  fontSize: 40, fontFace: "Arial Black", color: WHITE, bold: true, align: "center", margin: 0
});
s6.addText("DB贯标助手核心能力", {
  x: 1, y: 3.1, w: 8, h: 0.6,
  fontSize: 18, fontFace: "Arial", color: GRAY_LIGHT, align: "center", margin: 0
});

// ==================== SLIDE 7: 产品定位与核心能力 ====================
let s7 = pres.addSlide();
s7.background = { color: BG };
addAccent(s7, 0, 0, 10, 0.06, PURPLE);
s7.addText("DB 贯标助手：AI 驱动的智能检测", {
  x: 0.8, y: 0.3, w: 8, h: 0.7,
  fontSize: 28, fontFace: "Arial Black", color: WHITE, bold: true, margin: 0
});
s7.addShape(pres.shapes.LINE, { x: 0.8, y: 1.0, w: 2, h: 0, line: { color: PURPLE, width: 3 } });
s7.addText("基于 CodeBuddy Agent SDK 的数据库表结构贯标检测工具", {
  x: 0.8, y: 1.15, w: 8, h: 0.35, fontSize: 13, fontFace: "Arial", color: GRAY_LIGHT, margin: 0
});

const capabilities = [
  { title: "智能贯标检测", desc: "五大维度自动检测，输出合规评分", color: TEAL },
  { title: "DDL 实时解析", desc: "粘贴 SQL 即可解析，零配置上手", color: PURPLE },
  { title: "贯标规则配置", desc: "自定义检测规则，按业务域差异化", color: ORANGE },
  { title: "合规评分报告", desc: "自动评分+改进建议，可操作性强", color: TEAL },
  { title: "双模式运行", desc: "浏览器开发 + Electron 桌面端打包", color: PURPLE },
  { title: "多 Agent 体系", desc: "三种内置模式+可扩展模板", color: ORANGE },
];
capabilities.forEach((cap, i) => {
  const col = i % 3;
  const row = Math.floor(i / 3);
  const x = 0.8 + col * 3.0;
  const y = 1.7 + row * 1.7;
  addCard(s7, x, y, 2.7, 1.5, BG_CARD);
  addAccent(s7, x, y, 0.08, 1.5, cap.color);
  s7.addShape(pres.shapes.OVAL, { x: x + 0.25, y: y + 0.25, w: 0.4, h: 0.4, fill: { color: cap.color, transparency: 20 } });
  s7.addText(String(i + 1), {
    x: x + 0.25, y: y + 0.25, w: 0.4, h: 0.4,
    fontSize: 14, fontFace: "Arial", color: WHITE, bold: true, align: "center", valign: "middle", margin: 0
  });
  s7.addText(cap.title, {
    x: x + 0.8, y: y + 0.25, w: 1.7, h: 0.4,
    fontSize: 14, fontFace: "Arial", color: WHITE, bold: true, valign: "middle", margin: 0
  });
  s7.addText(cap.desc, {
    x: x + 0.25, y: y + 0.8, w: 2.3, h: 0.55,
    fontSize: 11, fontFace: "Arial", color: GRAY_LIGHT, margin: 0
  });
});

// ==================== SLIDE 8: 三种内置 Agent ====================
let s8 = pres.addSlide();
s8.background = { color: BG };
addAccent(s8, 0, 0, 10, 0.06, PURPLE);
s8.addText("多 Agent 协作体系", {
  x: 0.8, y: 0.3, w: 8, h: 0.7,
  fontSize: 28, fontFace: "Arial Black", color: WHITE, bold: true, margin: 0
});
s8.addShape(pres.shapes.LINE, { x: 0.8, y: 1.0, w: 2, h: 0, line: { color: PURPLE, width: 3 } });

const agents = [
  { name: "表结构贯标检测", role: "主检测 Agent，执行完整贯标检测", output: "检测报告 + 合规评分 + 改进建议", color: TEAL, icon: "01" },
  { name: "贯标规则配置", role: "管理和自定义贯标规则体系", output: "规则配置 JSON/YAML 导出", color: PURPLE, icon: "02" },
  { name: "DDL 解析分析", role: "解析 SQL DDL 提取表结构信息", output: "结构化表信息（字段/索引/约束）", color: ORANGE, icon: "03" },
];
agents.forEach((ag, i) => {
  const y = 1.3 + i * 1.2;
  addCard(s8, 0.8, y, 8.4, 1.05, BG_CARD);
  addAccent(s8, 0.8, y, 0.1, 1.05, ag.color);
  s8.addShape(pres.shapes.OVAL, { x: 1.2, y: y + 0.15, w: 0.65, h: 0.65, fill: { color: ag.color, transparency: 15 } });
  s8.addText(ag.icon, {
    x: 1.2, y: y + 0.15, w: 0.65, h: 0.65,
    fontSize: 16, fontFace: "Arial Black", color: WHITE, bold: true, align: "center", valign: "middle", margin: 0
  });
  s8.addText(ag.name, {
    x: 2.1, y: y + 0.1, w: 3, h: 0.4,
    fontSize: 16, fontFace: "Arial", color: ag.color, bold: true, margin: 0
  });
  s8.addText(ag.role, {
    x: 2.1, y: y + 0.5, w: 3, h: 0.35,
    fontSize: 12, fontFace: "Arial", color: GRAY_LIGHT, margin: 0
  });
  s8.addText("输出：", {
    x: 5.5, y: y + 0.1, w: 0.7, h: 0.35,
    fontSize: 11, fontFace: "Arial", color: GRAY, margin: 0
  });
  s8.addText(ag.output, {
    x: 6.2, y: y + 0.1, w: 2.8, h: 0.8,
    fontSize: 12, fontFace: "Arial", color: WHITE, margin: 0
  });
});

// Extensible
addCard(s8, 0.8, 4.8, 8.4, 0.5, BG_CARD2);
s8.addText("可扩展：安全合规检测  |  性能优化分析  |  迁移方案生成", {
  x: 1.2, y: 4.8, w: 7.8, h: 0.5,
  fontSize: 12, fontFace: "Arial", color: GRAY, valign: "middle", margin: 0
});

// ==================== SLIDE 9: Transition - 检测体系 ====================
let s9 = pres.addSlide();
s9.background = { color: BG };
addAccent(s9, 0, 0, 10, 0.06, TEAL);
s9.addShape(pres.shapes.RECTANGLE, { x: 3.5, y: 1.8, w: 3, h: 0.06, fill: { color: TEAL } });
s9.addText("03", {
  x: 4.2, y: 1.0, w: 1.6, h: 0.7,
  fontSize: 28, fontFace: "Arial Black", color: TEAL, bold: true, align: "center", margin: 0
});
s9.addText("检测体系", {
  x: 1, y: 2.2, w: 8, h: 0.9,
  fontSize: 40, fontFace: "Arial Black", color: WHITE, bold: true, align: "center", margin: 0
});
s9.addText("五大贯标检测维度", {
  x: 1, y: 3.1, w: 8, h: 0.6,
  fontSize: 18, fontFace: "Arial", color: GRAY_LIGHT, align: "center", margin: 0
});

// ==================== SLIDE 10: 命名规范与字段规范 ====================
let s10 = pres.addSlide();
s10.background = { color: BG };
addAccent(s10, 0, 0, 10, 0.06, TEAL);
s10.addText("维度一 & 二：命名规范 + 字段规范", {
  x: 0.8, y: 0.3, w: 8, h: 0.7,
  fontSize: 26, fontFace: "Arial Black", color: WHITE, bold: true, margin: 0
});
s10.addShape(pres.shapes.LINE, { x: 0.8, y: 1.0, w: 2, h: 0, line: { color: TEAL, width: 3 } });

// Left: 命名规范
addCard(s10, 0.8, 1.2, 4.3, 3.8, BG_CARD);
addAccent(s10, 0.8, 1.2, 4.3, 0.5, TEAL);
s10.addText("命名规范检测", {
  x: 1.0, y: 1.25, w: 3.8, h: 0.4,
  fontSize: 16, fontFace: "Arial", color: WHITE, bold: true, valign: "middle", margin: 0
});
s10.addText([
  { text: "表名格式：", options: { bold: true, color: TEAL_LIGHT, fontSize: 11, breakLine: false } },
  { text: "<业务域>_<子域>_<表用途>", options: { color: GRAY_LIGHT, fontSize: 11, breakLine: true } },
  { text: "如 order_trade_detail", options: { color: GRAY, fontSize: 10, breakLine: true } },
  { text: "", options: { fontSize: 6, breakLine: true } },
  { text: "字段名：", options: { bold: true, color: TEAL_LIGHT, fontSize: 11, breakLine: false } },
  { text: "小写+下划线", options: { color: GRAY_LIGHT, fontSize: 11, breakLine: true } },
  { text: "如 user_id、created_time", options: { color: GRAY, fontSize: 10, breakLine: true } },
  { text: "", options: { fontSize: 6, breakLine: true } },
  { text: "索引名：", options: { bold: true, color: TEAL_LIGHT, fontSize: 11, breakLine: false } },
  { text: "pk_/uk_/idx_ 前缀规范", options: { color: GRAY_LIGHT, fontSize: 11, breakLine: true } },
  { text: "", options: { fontSize: 6, breakLine: true } },
  { text: "外键名：", options: { bold: true, color: TEAL_LIGHT, fontSize: 11, breakLine: false } },
  { text: "fk_<从表>_<主表>_<字段>", options: { color: GRAY_LIGHT, fontSize: 11 } },
], { x: 1.0, y: 1.8, w: 3.8, h: 2.8, valign: "top", margin: 0 });

// Right: 字段规范
addCard(s10, 5.3, 1.2, 4.3, 3.8, BG_CARD);
addAccent(s10, 5.3, 1.2, 4.3, 0.5, PURPLE);
s10.addText("字段规范检测", {
  x: 5.5, y: 1.25, w: 3.8, h: 0.4,
  fontSize: 16, fontFace: "Arial", color: WHITE, bold: true, valign: "middle", margin: 0
});
s10.addText([
  { text: "必须包含 id 主键", options: { bullet: true, color: GRAY_LIGHT, fontSize: 11, breakLine: true } },
  { text: "（BIGINT 自增或 UUID）", options: { color: GRAY, fontSize: 10, breakLine: true, indentLevel: 1 } },
  { text: "必须包含 created_time、updated_time", options: { bullet: true, color: GRAY_LIGHT, fontSize: 11, breakLine: true } },
  { text: "必须包含 created_by、updated_by", options: { bullet: true, color: GRAY_LIGHT, fontSize: 11, breakLine: true } },
  { text: "布尔字段 is_ 前缀", options: { bullet: true, color: GRAY_LIGHT, fontSize: 11, breakLine: true } },
  { text: "金额 DECIMAL(18,2)", options: { bullet: true, color: GRAY_LIGHT, fontSize: 11, breakLine: true } },
  { text: "禁止 ENUM，使用 TINYINT 替代", options: { bullet: true, color: ORANGE_LIGHT, fontSize: 11 } },
], { x: 5.5, y: 1.8, w: 3.8, h: 2.8, valign: "top", margin: 0 });

// ==================== SLIDE 11: 索引规范、设计规范与安全合规 ====================
let s11 = pres.addSlide();
s11.background = { color: BG };
addAccent(s11, 0, 0, 10, 0.06, ORANGE);
s11.addText("维度三 & 四 & 五：索引 + 设计 + 安全", {
  x: 0.8, y: 0.3, w: 8, h: 0.7,
  fontSize: 24, fontFace: "Arial Black", color: WHITE, bold: true, margin: 0
});
s11.addShape(pres.shapes.LINE, { x: 0.8, y: 1.0, w: 2, h: 0, line: { color: ORANGE, width: 3 } });

// Three columns
const dims = [
  {
    title: "索引规范检测", color: TEAL,
    items: [
      "单表索引不超过 5 个",
      "联合索引字段不超过 5 个",
      "外键字段必须建索引",
      "区分度低字段不应单独建索引"
    ]
  },
  {
    title: "设计规范检测", color: PURPLE,
    items: [
      "禁止外键约束",
      "单表字段不超过 30 个",
      "大字段拆分子表",
      "表和字段必须有 COMMENT",
      "字符集统一 utf8mb4"
    ]
  },
  {
    title: "安全合规检测", color: ORANGE,
    items: [
      "敏感字段必须加密存储",
      "密码字段不可明文",
      "日志表不记录敏感信息"
    ]
  }
];
dims.forEach((dim, i) => {
  const x = 0.6 + i * 3.15;
  addCard(s11, x, 1.2, 2.95, 3.8, BG_CARD);
  addAccent(s11, x, 1.2, 2.95, 0.5, dim.color);
  s11.addText(dim.title, {
    x: x + 0.15, y: 1.25, w: 2.6, h: 0.4,
    fontSize: 14, fontFace: "Arial", color: WHITE, bold: true, valign: "middle", margin: 0
  });
  const bullets = dim.items.map((item, j) => ({
    text: item,
    options: { bullet: true, color: GRAY_LIGHT, fontSize: 11, breakLine: j < dim.items.length - 1 }
  }));
  s11.addText(bullets, {
    x: x + 0.15, y: 1.8, w: 2.6, h: 2.8,
    valign: "top", margin: 0
  });
});

// ==================== SLIDE 12: 合规评分报告 ====================
let s12 = pres.addSlide();
s12.background = { color: BG };
addAccent(s12, 0, 0, 10, 0.06, TEAL);
s12.addText("智能评分报告", {
  x: 0.8, y: 0.3, w: 8, h: 0.7,
  fontSize: 28, fontFace: "Arial Black", color: WHITE, bold: true, margin: 0
});
s12.addShape(pres.shapes.LINE, { x: 0.8, y: 1.0, w: 2, h: 0, line: { color: TEAL, width: 3 } });

// Score bars
const scores = [
  { name: "命名规范", score: 85, color: TEAL },
  { name: "字段规范", score: 72, color: PURPLE },
  { name: "索引规范", score: 90, color: TEAL_LIGHT },
  { name: "设计规范", score: 68, color: ORANGE },
  { name: "安全合规", score: 78, color: PURPLE_LIGHT },
];
scores.forEach((sc, i) => {
  const y = 1.3 + i * 0.55;
  s12.addText(sc.name, { x: 0.8, y, w: 1.5, h: 0.4, fontSize: 12, fontFace: "Arial", color: WHITE, margin: 0 });
  // Background bar
  addCard(s12, 2.5, y + 0.05, 4.5, 0.3, BG_CARD2);
  // Score bar
  const barW = 4.5 * sc.score / 100;
  s12.addShape(pres.shapes.RECTANGLE, { x: 2.5, y: y + 0.05, w: barW, h: 0.3, fill: { color: sc.color }, rectRadius: 0.04 });
  s12.addText(sc.score + "/100", { x: 7.2, y, w: 0.8, h: 0.4, fontSize: 12, fontFace: "Arial", color: sc.color, bold: true, margin: 0 });
});

// Total
addCard(s12, 0.8, 4.1, 7.2, 0.5, BG_CARD);
addAccent(s12, 0.8, 4.1, 0.1, 0.5, TEAL);
s12.addText("综合评分", { x: 1.1, y: 4.1, w: 2, h: 0.5, fontSize: 14, fontFace: "Arial", color: WHITE, bold: true, valign: "middle", margin: 0 });
s12.addText("78.6 / 100", { x: 3.5, y: 4.1, w: 4, h: 0.5, fontSize: 20, fontFace: "Arial Black", color: TEAL_LIGHT, bold: true, valign: "middle", margin: 0 });

// Right side features
addCard(s12, 8.3, 1.3, 1.3, 3.3, BG_CARD);
s12.addText([
  { text: "报告特性", options: { bold: true, color: TEAL, fontSize: 12, breakLine: true } },
  { text: "", options: { fontSize: 6, breakLine: true } },
  { text: "字段级建议", options: { bullet: true, color: GRAY_LIGHT, fontSize: 10, breakLine: true } },
  { text: "多轮追问", options: { bullet: true, color: GRAY_LIGHT, fontSize: 10, breakLine: true } },
  { text: "可操作性强", options: { bullet: true, color: GRAY_LIGHT, fontSize: 10, breakLine: true } },
  { text: "实时输出", options: { bullet: true, color: GRAY_LIGHT, fontSize: 10 } },
], { x: 8.4, y: 1.4, w: 1.1, h: 3.0, valign: "top", margin: 0 });

// ==================== SLIDE 13: Transition - 技术架构 ====================
let s13 = pres.addSlide();
s13.background = { color: BG };
addAccent(s13, 0, 0, 10, 0.06, ORANGE);
s13.addShape(pres.shapes.RECTANGLE, { x: 3.5, y: 1.8, w: 3, h: 0.06, fill: { color: ORANGE } });
s13.addText("04", {
  x: 4.2, y: 1.0, w: 1.6, h: 0.7,
  fontSize: 28, fontFace: "Arial Black", color: ORANGE, bold: true, align: "center", margin: 0
});
s13.addText("技术架构", {
  x: 1, y: 2.2, w: 8, h: 0.9,
  fontSize: 40, fontFace: "Arial Black", color: WHITE, bold: true, align: "center", margin: 0
});
s13.addText("Agent SDK + 双模式运行", {
  x: 1, y: 3.1, w: 8, h: 0.6,
  fontSize: 18, fontFace: "Arial", color: GRAY_LIGHT, align: "center", margin: 0
});

// ==================== SLIDE 14: 技术架构 ====================
let s14 = pres.addSlide();
s14.background = { color: BG };
addAccent(s14, 0, 0, 10, 0.06, ORANGE);
s14.addText("技术架构：Agent SDK 驱动", {
  x: 0.8, y: 0.3, w: 8, h: 0.7,
  fontSize: 28, fontFace: "Arial Black", color: WHITE, bold: true, margin: 0
});
s14.addShape(pres.shapes.LINE, { x: 0.8, y: 1.0, w: 2, h: 0, line: { color: ORANGE, width: 3 } });

// Architecture layers
const layers = [
  { name: "前端层", tech: "React 18 + TypeScript + Vite 5 + TDesign + Tailwind CSS", color: TEAL },
  { name: "后端层", tech: "Express 4 + Agent SDK + SSE 流式推送 + SQLite 持久化", color: PURPLE },
  { name: "桌面层", tech: "Electron 33 + contextBridge 安全封装", color: ORANGE },
];
layers.forEach((l, i) => {
  const y = 1.3 + i * 0.85;
  addCard(s14, 0.8, y, 8.4, 0.7, BG_CARD);
  addAccent(s14, 0.8, y, 0.1, 0.7, l.color);
  s14.addShape(pres.shapes.OVAL, { x: 1.2, y: y + 0.1, w: 0.45, h: 0.45, fill: { color: l.color } });
  s14.addText(String(i + 1), {
    x: 1.2, y: y + 0.1, w: 0.45, h: 0.45,
    fontSize: 14, fontFace: "Arial", color: WHITE, bold: true, align: "center", valign: "middle", margin: 0
  });
  s14.addText(l.name, { x: 1.85, y, w: 1.2, h: 0.7, fontSize: 14, fontFace: "Arial", color: l.color, bold: true, valign: "middle", margin: 0 });
  s14.addText(l.tech, { x: 3.1, y, w: 5.8, h: 0.7, fontSize: 12, fontFace: "Arial", color: GRAY_LIGHT, valign: "middle", margin: 0 });
});

// Data flow
addCard(s14, 0.8, 3.85, 8.4, 0.65, BG_CARD);
addAccent(s14, 0.8, 3.85, 0.1, 0.65, TEAL);
s14.addText("数据流", { x: 1.1, y: 3.85, w: 1, h: 0.65, fontSize: 12, fontFace: "Arial", color: TEAL, bold: true, valign: "middle", margin: 0 });
s14.addText("用户输入  \u2192  Express  \u2192  Agent SDK query()  \u2192  SSE 推送  \u2192  实时渲染", {
  x: 2.2, y: 3.85, w: 6.8, h: 0.65, fontSize: 12, fontFace: "Arial", color: WHITE, valign: "middle", margin: 0
});

// Permission model
addCard(s14, 0.8, 4.65, 4.0, 0.65, BG_CARD);
addAccent(s14, 0.8, 4.65, 0.1, 0.65, PURPLE);
s14.addText("权限模型：默认 / 自动编辑 / 仅规划 / 全部允许", {
  x: 1.1, y: 4.65, w: 3.5, h: 0.65, fontSize: 11, fontFace: "Arial", color: GRAY_LIGHT, valign: "middle", margin: 0
});

// Dual mode
addCard(s14, 5.1, 4.65, 4.1, 0.65, BG_CARD);
addAccent(s14, 5.1, 4.65, 0.1, 0.65, ORANGE);
s14.addText("双模式：pnpm dev (浏览器) | pnpm dev:electron (桌面端)", {
  x: 5.4, y: 4.65, w: 3.6, h: 0.65, fontSize: 11, fontFace: "Arial", color: GRAY_LIGHT, valign: "middle", margin: 0
});

// ==================== SLIDE 15: Transition - 演示场景 ====================
let s15 = pres.addSlide();
s15.background = { color: BG };
addAccent(s15, 0, 0, 10, 0.06, TEAL);
s15.addShape(pres.shapes.RECTANGLE, { x: 3.5, y: 1.8, w: 3, h: 0.06, fill: { color: TEAL } });
s15.addText("05", {
  x: 4.2, y: 1.0, w: 1.6, h: 0.7,
  fontSize: 28, fontFace: "Arial Black", color: TEAL, bold: true, align: "center", margin: 0
});
s15.addText("演示场景", {
  x: 1, y: 2.2, w: 8, h: 0.9,
  fontSize: 40, fontFace: "Arial Black", color: WHITE, bold: true, align: "center", margin: 0
});
s15.addText("实际检测效果展示", {
  x: 1, y: 3.1, w: 8, h: 0.6,
  fontSize: 18, fontFace: "Arial", color: GRAY_LIGHT, align: "center", margin: 0
});

// ==================== SLIDE 16: 典型使用流程 ====================
let s16 = pres.addSlide();
s16.background = { color: BG };
addAccent(s16, 0, 0, 10, 0.06, TEAL);
s16.addText("三步完成贯标检测", {
  x: 0.8, y: 0.3, w: 8, h: 0.7,
  fontSize: 28, fontFace: "Arial Black", color: WHITE, bold: true, margin: 0
});
s16.addShape(pres.shapes.LINE, { x: 0.8, y: 1.0, w: 2, h: 0, line: { color: TEAL, width: 3 } });

// 3 Steps
const steps = [
  { num: "1", title: "粘贴 DDL", desc: "将 CREATE TABLE 语句粘贴到输入框，或上传 SQL 文件", color: TEAL },
  { num: "2", title: "自动检测", desc: "Agent 自动解析表结构，执行五大维度贯标检测", color: PURPLE },
  { num: "3", title: "获取报告", desc: "实时输出检测结果、合规评分和改进建议，可多轮追问", color: ORANGE },
];
steps.forEach((st, i) => {
  const x = 0.8 + i * 3.1;
  addCard(s16, x, 1.2, 2.85, 1.8, BG_CARD);
  addAccent(s16, x, 1.2, 2.85, 0.06, st.color);
  s16.addShape(pres.shapes.OVAL, { x: x + 1.05, y: 1.45, w: 0.6, h: 0.6, fill: { color: st.color } });
  s16.addText(st.num, {
    x: x + 1.05, y: 1.45, w: 0.6, h: 0.6,
    fontSize: 22, fontFace: "Arial Black", color: WHITE, bold: true, align: "center", valign: "middle", margin: 0
  });
  s16.addText(st.title, {
    x: x + 0.2, y: 2.2, w: 2.4, h: 0.35,
    fontSize: 16, fontFace: "Arial", color: WHITE, bold: true, align: "center", margin: 0
  });
  s16.addText(st.desc, {
    x: x + 0.2, y: 2.55, w: 2.4, h: 0.6,
    fontSize: 11, fontFace: "Arial", color: GRAY_LIGHT, align: "center", margin: 0
  });
  // Arrow between steps
  if (i < 2) {
    s16.addText("\u2192", {
      x: x + 2.85, y: 1.8, w: 0.25, h: 0.5,
      fontSize: 24, fontFace: "Arial", color: GRAY_DARK, align: "center", valign: "middle", margin: 0
    });
  }
});

// Scenarios
addCard(s16, 0.8, 3.3, 8.4, 0.5, BG_CARD);
addAccent(s16, 0.8, 3.3, 0.08, 0.5, TEAL);
s16.addText("场景 A：新建表上线前合规检查   |   场景 B：存量表批量贯标审查   |   场景 C：贯标规则自定义配置", {
  x: 1.1, y: 3.3, w: 7.8, h: 0.5, fontSize: 12, fontFace: "Arial", color: GRAY_LIGHT, valign: "middle", margin: 0
});

// Efficiency
addCard(s16, 0.8, 4.05, 8.4, 0.7, BG_CARD);
addAccent(s16, 0.8, 4.05, 0.1, 0.7, ORANGE);
s16.addText("效率提升", { x: 1.1, y: 4.05, w: 1.5, h: 0.7, fontSize: 14, fontFace: "Arial", color: ORANGE, bold: true, valign: "middle", margin: 0 });
s16.addText("传统人工 2-3 天", { x: 2.8, y: 4.05, w: 2.2, h: 0.35, fontSize: 13, fontFace: "Arial", color: GRAY_LIGHT, valign: "middle", margin: 0 });
s16.addText("AI 辅助 10 分钟", { x: 5.2, y: 4.05, w: 2, h: 0.35, fontSize: 16, fontFace: "Arial Black", color: TEAL_LIGHT, bold: true, valign: "middle", margin: 0 });
s16.addText("效率提升 99%+", { x: 7.5, y: 4.05, w: 1.5, h: 0.7, fontSize: 20, fontFace: "Arial Black", color: ORANGE_LIGHT, bold: true, valign: "middle", margin: 0 });

// ==================== SLIDE 17: Transition - 未来展望 ====================
let s17 = pres.addSlide();
s17.background = { color: BG };
addAccent(s17, 0, 0, 10, 0.06, PURPLE);
s17.addShape(pres.shapes.RECTANGLE, { x: 3.5, y: 1.8, w: 3, h: 0.06, fill: { color: PURPLE } });
s17.addText("06", {
  x: 4.2, y: 1.0, w: 1.6, h: 0.7,
  fontSize: 28, fontFace: "Arial Black", color: PURPLE, bold: true, align: "center", margin: 0
});
s17.addText("未来展望", {
  x: 1, y: 2.2, w: 8, h: 0.9,
  fontSize: 40, fontFace: "Arial Black", color: WHITE, bold: true, align: "center", margin: 0
});
s17.addText("自动化数据库治理趋势", {
  x: 1, y: 3.1, w: 8, h: 0.6,
  fontSize: 18, fontFace: "Arial", color: GRAY_LIGHT, align: "center", margin: 0
});

// ==================== SLIDE 18: 未来趋势与规划 ====================
let s18 = pres.addSlide();
s18.background = { color: BG };
addAccent(s18, 0, 0, 10, 0.06, PURPLE);
s18.addText("自动化数据库治理的未来", {
  x: 0.8, y: 0.3, w: 8, h: 0.7,
  fontSize: 28, fontFace: "Arial Black", color: WHITE, bold: true, margin: 0
});
s18.addShape(pres.shapes.LINE, { x: 0.8, y: 1.0, w: 2, h: 0, line: { color: PURPLE, width: 3 } });

// Left: Industry trends
addCard(s18, 0.8, 1.2, 4.3, 2.8, BG_CARD);
addAccent(s18, 0.8, 1.2, 0.08, 2.8, TEAL);
s18.addText("行业趋势", {
  x: 1.1, y: 1.25, w: 3.8, h: 0.4,
  fontSize: 16, fontFace: "Arial", color: TEAL, bold: true, margin: 0
});
s18.addText([
  { text: "2026年 60% AI 项目因数据质量失败", options: { bullet: true, color: GRAY_LIGHT, fontSize: 11, breakLine: true } },
  { text: "Gartner 预测", options: { color: GRAY, fontSize: 9, breakLine: true, indentLevel: 1 } },
  { text: "", options: { fontSize: 4, breakLine: true } },
  { text: "声明式 + CI/CD 成标配", options: { bullet: true, color: GRAY_LIGHT, fontSize: 11, breakLine: true } },
  { text: "Schema 验证左移到开发流程", options: { color: GRAY, fontSize: 9, breakLine: true, indentLevel: 1 } },
  { text: "", options: { fontSize: 4, breakLine: true } },
  { text: "自愈数据库系统", options: { bullet: true, color: GRAY_LIGHT, fontSize: 11, breakLine: true } },
  { text: "监控 \u2192 修复 \u2192 验证 \u2192 回滚", options: { color: GRAY, fontSize: 9, breakLine: true, indentLevel: 1 } },
  { text: "", options: { fontSize: 4, breakLine: true } },
  { text: "活跃元数据采用率年增长 70%", options: { bullet: true, color: GRAY_LIGHT, fontSize: 11 } },
], { x: 1.1, y: 1.7, w: 3.8, h: 2.2, valign: "top", margin: 0 });

// Right: Product roadmap
addCard(s18, 5.3, 1.2, 4.3, 2.8, BG_CARD);
addAccent(s18, 5.3, 1.2, 0.08, 2.8, PURPLE);
s18.addText("产品规划", {
  x: 5.6, y: 1.25, w: 3.8, h: 0.4,
  fontSize: 16, fontFace: "Arial", color: PURPLE, bold: true, margin: 0
});
s18.addText([
  { text: "v1.1", options: { bold: true, color: PURPLE_LIGHT, fontSize: 13, breakLine: true } },
  { text: "贯标规则持久化、批量检测、报告导出 PDF/Excel", options: { color: GRAY_LIGHT, fontSize: 11, breakLine: true } },
  { text: "", options: { fontSize: 6, breakLine: true } },
  { text: "v1.2", options: { bold: true, color: PURPLE_LIGHT, fontSize: 13, breakLine: true } },
  { text: "多数据库方言（MySQL/PG/Oracle）", options: { color: GRAY_LIGHT, fontSize: 11, breakLine: true } },
  { text: "可视化表结构图、CI/CD 集成", options: { color: GRAY_LIGHT, fontSize: 11 } },
], { x: 5.6, y: 1.7, w: 3.8, h: 2.2, valign: "top", margin: 0 });

// Vision
addCard(s18, 0.8, 4.2, 8.8, 0.7, BG_CARD);
addAccent(s18, 0.8, 4.2, 0.1, 0.7, TEAL);
s18.addText("核心愿景", { x: 1.1, y: 4.2, w: 1.5, h: 0.7, fontSize: 14, fontFace: "Arial", color: TEAL, bold: true, valign: "middle", margin: 0 });
s18.addText("让每一张数据库表都符合标准", {
  x: 2.8, y: 4.2, w: 6.5, h: 0.7,
  fontSize: 20, fontFace: "Arial Black", color: WHITE, bold: true, valign: "middle", margin: 0
});

// ==================== SLIDE 19: Ending ====================
let s19 = pres.addSlide();
s19.background = { color: BG };
addAccent(s19, 0, 0, 10, 0.06, TEAL);
// Decorative circles
s19.addShape(pres.shapes.OVAL, { x: 0.5, y: 0.5, w: 2, h: 2, fill: { color: TEAL, transparency: 90 } });
s19.addShape(pres.shapes.OVAL, { x: 7.5, y: 3.5, w: 2, h: 2, fill: { color: PURPLE, transparency: 90 } });

s19.addShape(pres.shapes.RECTANGLE, { x: 3, y: 1.5, w: 4, h: 0.06, fill: { color: TEAL } });
s19.addText("让每一张表都符合标准", {
  x: 1, y: 1.8, w: 8, h: 1.0,
  fontSize: 36, fontFace: "Arial Black", color: WHITE, bold: true, align: "center", margin: 0
});
s19.addText("DB 贯标助手", {
  x: 1, y: 2.8, w: 8, h: 0.6,
  fontSize: 20, fontFace: "Arial", color: TEAL_LIGHT, align: "center", margin: 0
});
s19.addShape(pres.shapes.LINE, { x: 4, y: 3.6, w: 2, h: 0, line: { color: GRAY_DARK, width: 1 } });
s19.addText("CodeBuddy Agent SDK  |  React + Electron", {
  x: 1, y: 3.8, w: 8, h: 0.4,
  fontSize: 13, fontFace: "Arial", color: GRAY, align: "center", margin: 0
});
s19.addText("github.com/XielyCoder/db-standard-checker", {
  x: 1, y: 4.3, w: 8, h: 0.4,
  fontSize: 12, fontFace: "Arial", color: GRAY_LIGHT, align: "center", margin: 0
});

// Write file
pres.writeFile({ fileName: "/workspace/db-standard-checker/docs/DB贯标助手演示PPT.pptx" })
  .then(() => {
    console.log("PPTX generated successfully!");
  })
  .catch(err => {
    console.error("Error generating PPTX:", err);
  });

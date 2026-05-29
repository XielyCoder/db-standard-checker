## Page 1: 封面
- **Page Type**: Cover
- **Page Title**: DB 贯标助手
- **Page Subtitle**: 数据库表结构智能合规检测平台
- **Selected Template**: cover/tech/036.tpl

- **Content Structure**:
  - 主标题：DB 贯标助手
  - 副标题：数据库表结构智能合规检测平台
  - 核心定位：基于 AI Agent 的数据库表结构贯标检测工具，支持命名规范、字段类型、索引设计、安全合规等五大维度自动检测

- **Content Density**: Light
- **Narrative Role**: 开场定位，建立产品第一印象

- **Image Requirements**: 无

- **Page Weight**: Core page
- **Content Page Selection Rationale**: 封面页，呈现产品核心定位

## Page 2: 目录
- **Page Type**: TOC
- **Page Title**: 内容概览
- **Selected Template**: toc/tech/3575.tpl

- **Content Structure**:
  1. 行业痛点 — 数据库合规现状
  2. 产品方案 — DB贯标助手核心能力
  3. 检测体系 — 五大贯标检测维度
  4. 技术架构 — Agent SDK + 双模式运行
  5. 演示场景 — 实际检测效果展示
  6. 未来展望 — 自动化数据库治理趋势

- **Content Density**: Light
- **Narrative Role**: 全局导航，让观众了解演示结构

- **Image Requirements**: 无

- **Page Weight**: Transition page
- **Content Page Selection Rationale**: 目录页

## Page 3: 章节过渡 - 行业痛点
- **Page Type**: Transition
- **Page Title**: 行业痛点
- **Page Subtitle**: 数据库合规现状与挑战
- **Selected Template**: transition/tech/517.tpl

- **Content Structure**: 章节标题展示

- **Content Density**: Light
- **Narrative Role**: 章节过渡，引出痛点分析

- **Image Requirements**: 无

- **Page Weight**: Transition page

## Page 4: 数据库合规现状
- **Page Type**: Content
- **Page Title**: 数据库合规现状：触目惊心
- **Selected Template**: content/tech/1581.tpl

- **Content Structure**:
  - 数据质量差年均损失 $12.9M（Gartner 2024）
  - 61% 企业将数据质量列为首要挑战（DATAVERSITY 2025）
  - 仅 11% 企业拥有高元数据管理成熟度
  - 生产力下降 20%，运营成本增加 30%（McKinsey）
  - 异构系统标准不统一：MES/ERP/PLM/OA 各自为政
  - 2023年中国数据总量 32.9 ZB，但治理能力严重滞后

- **Content Density**: Medium
- **Narrative Role**: 用数据建立紧迫感，证明问题的严重性

- **Image Requirements**: 无

- **Page Weight**: Core page
- **Content Page Selection Rationale**: 核心数据页，建立痛点紧迫感

## Page 5: 传统检测方式的困境
- **Page Type**: Content
- **Page Title**: 传统检测方式的困境
- **Selected Template**: content/tech/1582.tpl

- **Content Structure**:
  - 手工时代：DESCRIBE TABLE 逐表检查，易遗漏、耗时长、无法规模化
  - 脚本时代：每条规则单独脚本，维护成本螺旋上升，不同环境逻辑不同
  - 痛点对比：
    - 人工审计响应：数周 | AI 自动化：数小时
    - 规则覆盖：人为遗漏不可避免 | AI：规则100%覆盖
    - 标准化工作：人工40-60%时间 | 自动化后接近0
  - 核心矛盾：数据规模指数增长，治理能力线性增长

- **Content Density**: Medium
- **Narrative Role**: 对比传统方式的问题，为AI方案做铺垫

- **Image Requirements**: 无

- **Page Weight**: Core page
- **Content Page Selection Rationale**: 问题深挖，引发对解决方案的需求

## Page 6: 章节过渡 - 产品方案
- **Page Type**: Transition
- **Page Title**: 产品方案
- **Page Subtitle**: DB贯标助手核心能力
- **Selected Template**: transition/tech/517.tpl

- **Content Structure**: 章节标题展示

- **Content Density**: Light
- **Narrative Role**: 过渡到产品介绍

- **Image Requirements**: 无

- **Page Weight**: Transition page

## Page 7: 产品定位与核心能力
- **Page Type**: Content
- **Page Title**: DB 贯标助手：AI 驱动的智能检测
- **Selected Template**: content/tech/1589.tpl

- **Content Structure**:
  - 产品定位：基于 CodeBuddy Agent SDK 的数据库表结构贯标检测工具
  - 核心能力：
    1. 智能贯标检测 — 五大维度自动检测，输出合规评分
    2. DDL 实时解析 — 粘贴 SQL 即可解析，零配置上手
    3. 贯标规则配置 — 自定义检测规则，按业务域差异化
    4. 合规评分报告 — 自动评分+改进建议，可操作性强
    5. 双模式运行 — 浏览器开发 + Electron 桌面端打包
    6. 多 Agent 体系 — 三种内置模式+可扩展模板

- **Content Density**: Medium
- **Narrative Role**: 展示产品核心能力全貌

- **Image Requirements**: 无

- **Page Weight**: Core page
- **Content Page Selection Rationale**: 产品核心价值页

## Page 8: 三种内置 Agent
- **Page Type**: Content
- **Page Title**: 多 Agent 协作体系
- **Selected Template**: content/tech/1585.tpl

- **Content Structure**:
  - Agent 1：表结构贯标检测（Teal #0d9488）
    - 职责：主检测 Agent，执行完整贯标检测
    - 输出：检测报告 + 合规评分 + 改进建议
  - Agent 2：贯标规则配置（Purple #7c3aed）
    - 职责：管理和自定义贯标规则体系
    - 输出：规则配置 JSON/YAML 导出
  - Agent 3：DDL 解析分析（Orange #ea580c）
    - 职责：解析 SQL DDL 提取表结构信息
    - 输出：结构化表信息（字段/索引/约束）
  - 可扩展：安全合规检测、性能优化分析、迁移方案生成

- **Content Density**: Medium
- **Narrative Role**: 展示 Agent 架构的灵活性和专业性

- **Image Requirements**: 无

- **Page Weight**: Core page
- **Content Page Selection Rationale**: 技术亮点页，展示Agent架构

## Page 9: 章节过渡 - 检测体系
- **Page Type**: Transition
- **Page Title**: 检测体系
- **Page Subtitle**: 五大贯标检测维度
- **Selected Template**: transition/tech/517.tpl

- **Content Structure**: 章节标题展示

- **Content Density**: Light
- **Narrative Role**: 过渡到检测维度详情

- **Image Requirements**: 无

- **Page Weight**: Transition page

## Page 10: 命名规范与字段规范
- **Page Type**: Content
- **Page Title**: 维度一&二：命名规范 + 字段规范
- **Selected Template**: content/tech/1583.tpl

- **Content Structure**:
  - 命名规范检测：
    - 表名格式：<业务域>_<子域>_<表用途>，如 order_trade_detail
    - 字段名：小写+下划线，如 user_id、created_time
    - 索引名：pk_/uk_/idx_ 前缀规范
    - 外键名：fk_<从表>_<主表>_<字段>
  - 字段规范检测：
    - 必须包含 id 主键（BIGINT 自增或 UUID）
    - 必须包含 created_time、updated_time
    - 必须包含 created_by、updated_by
    - 布尔字段 is_ 前缀，金额 DECIMAL(18,2)
    - 禁止 ENUM，使用 TINYINT 替代

- **Content Density**: Heavy
- **Narrative Role**: 详细展示检测规则的专业性

- **Image Requirements**: 无

- **Page Weight**: Core page
- **Content Page Selection Rationale**: 核心功能展示页

## Page 11: 索引规范、设计规范与安全合规
- **Page Type**: Content
- **Page Title**: 维度三&四&五：索引 + 设计 + 安全
- **Selected Template**: content/tech/1581.tpl

- **Content Structure**:
  - 索引规范检测：
    - 单表索引不超过5个，联合索引字段不超过5个
    - 外键字段必须建索引，区分度低字段不应单独建索引
  - 设计规范检测：
    - 禁止外键约束，单表字段不超过30个
    - 大字段拆分子表，表和字段必须有 COMMENT
    - 字符集统一 utf8mb4
  - 安全合规检测：
    - 敏感字段必须加密存储
    - 密码字段不可明文
    - 日志表不记录敏感信息

- **Content Density**: Heavy
- **Narrative Role**: 补全检测维度，展示全面覆盖能力

- **Image Requirements**: 无

- **Page Weight**: Core page
- **Content Page Selection Rationale**: 功能完整性展示

## Page 12: 合规评分报告
- **Page Type**: Content
- **Page Title**: 智能评分报告
- **Selected Template**: content/tech/1586.tpl

- **Content Structure**:
  - 检测结果表格：检测项 | 规则 | 实际值 | 结果 | 建议
  - 各维度评分（0-100分）：
    - 命名规范：XX/100
    - 字段规范：XX/100
    - 索引规范：XX/100
    - 设计规范：XX/100
    - 安全合规：XX/100
    - 综合评分：XX/100
  - 改进建议清单：具体到字段级别的修改建议
  - 多轮对话：可追问深入分析特定问题

- **Content Density**: Medium
- **Narrative Role**: 展示检测输出效果

- **Image Requirements**: 无

- **Page Weight**: Core page
- **Content Page Selection Rationale**: 核心输出展示页

## Page 13: 章节过渡 - 技术架构
- **Page Type**: Transition
- **Page Title**: 技术架构
- **Page Subtitle**: Agent SDK + 双模式运行
- **Selected Template**: transition/tech/517.tpl

- **Content Structure**: 章节标题展示

- **Content Density**: Light
- **Narrative Role**: 过渡到技术细节

- **Image Requirements**: 无

- **Page Weight**: Transition page

## Page 14: 技术架构
- **Page Type**: Content
- **Page Title**: 技术架构：Agent SDK 驱动
- **Selected Template**: content/tech/1589.tpl

- **Content Structure**:
  - 前端层：React 18 + TypeScript + Vite 5 + TDesign React + Tailwind CSS
  - 后端层：Express 4 + @tencent-ai/agent-sdk + SSE 流式推送 + SQLite 持久化
  - 桌面层：Electron 33 + contextBridge 安全封装
  - 数据流：用户输入 → Express → Agent SDK query() → SSE 推送 → 实时渲染
  - 权限模型：四种模式（默认/自动编辑/仅规划/全部允许）
  - 双模式运行：pnpm dev（浏览器）/ pnpm dev:electron（桌面端）

- **Content Density**: Medium
- **Narrative Role**: 技术可信度展示

- **Image Requirements**: 无

- **Page Weight**: Secondary page
- **Content Page Selection Rationale**: 技术架构说明

## Page 15: 章节过渡 - 演示场景
- **Page Type**: Transition
- **Page Title**: 演示场景
- **Page Subtitle**: 实际检测效果展示
- **Selected Template**: transition/tech/517.tpl

- **Content Structure**: 章节标题展示

- **Content Density**: Light
- **Narrative Role**: 过渡到演示

- **Image Requirements**: 无

- **Page Weight**: Transition page

## Page 16: 典型使用流程
- **Page Type**: Content
- **Page Title**: 三步完成贯标检测
- **Selected Template**: content/tech/1587.tpl

- **Content Structure**:
  - Step 1：粘贴 DDL — 将 CREATE TABLE 语句粘贴到输入框，或上传 SQL 文件
  - Step 2：自动检测 — Agent 自动解析表结构，执行五大维度贯标检测
  - Step 3：获取报告 — 实时输出检测结果、合规评分和改进建议，可多轮追问
  - 典型场景：
    - 场景A：新建表上线前合规检查
    - 场景B：存量表批量贯标审查
    - 场景C：贯标规则自定义配置
  - 效率提升：传统人工2-3天 → AI辅助10分钟

- **Content Density**: Medium
- **Narrative Role**: 展示使用便捷性和效率提升

- **Image Requirements**: 无

- **Page Weight**: Core page
- **Content Page Selection Rationale**: 使用场景展示

## Page 17: 章节过渡 - 未来展望
- **Page Type**: Transition
- **Page Title**: 未来展望
- **Page Subtitle**: 自动化数据库治理趋势
- **Selected Template**: transition/tech/517.tpl

- **Content Structure**: 章节标题展示

- **Content Density**: Light
- **Narrative Role**: 过渡到未来规划

- **Image Requirements**: 无

- **Page Weight**: Transition page

## Page 18: 未来趋势与规划
- **Page Type**: Content
- **Page Title**: 自动化数据库治理的未来
- **Selected Template**: content/tech/1590.tpl

- **Content Structure**:
  - 行业趋势：
    - Gartner：2026年60%的AI项目将因数据质量不足而失败
    - 声明式+CI/CD成为标配，Schema验证左移到开发流程
    - 自愈数据库系统：自动监控→修复→验证→回滚
    - 活跃元数据采用率年增长70%
  - 产品规划：
    - v1.1：贯标规则持久化、批量检测、报告导出PDF/Excel
    - v1.2：多数据库方言（MySQL/PG/Oracle）、可视化表结构图、CI/CD集成
  - 核心愿景：让每一张数据库表都符合标准

- **Content Density**: Medium
- **Narrative Role**: 展示长期价值和方向

- **Image Requirements**: 无

- **Page Weight**: Secondary page
- **Content Page Selection Rationale**: 愿景展示

## Page 19: 结束页
- **Page Type**: Ending
- **Page Title**: 让每一张表都符合标准
- **Selected Template**:

- **Content Structure**:
  - 核心标语：让每一张数据库表都符合标准
  - 产品名称：DB 贯标助手
  - 技术栈：CodeBuddy Agent SDK + React + Electron
  - 开源地址：github.com/XielyCoder/db-standard-checker
  - 致谢

- **Content Density**: Light
- **Narrative Role**: 收尾，留下核心印象

- **Image Requirements**: 无

- **Page Weight**: Core page
- **Content Page Selection Rationale**: 结束页

# DB 贯标助手 — 设计文档

## 1. 项目概述

### 1.1 项目名称
DB 贯标助手（db-standard-checker）

### 1.2 项目定位
基于 CodeBuddy Agent SDK 的数据库表结构贯标检测 Web 应用，通过 AI 对话方式帮助用户检查数据库表结构是否符合企业级贯标规范，支持浏览器开发和 Electron 桌面端打包。

### 1.3 目标用户
- 数据库管理员（DBA）
- 后端开发工程师
- 数据架构师
- 运维工程师

---

## 2. 功能设计

### 2.1 核心功能

#### 2.1.1 表结构贯标检测
- **命名规范检测**：检查表名、字段名、索引名、外键名是否符合企业命名规范
  - 表名格式：`<业务域>_<子域>_<表用途>`，如 `order_trade_detail`
  - 字段名：小写字母+下划线，如 `user_id`、`created_time`
  - 索引名：`pk_<表名>` / `uk_<表名>_<字段>` / `idx_<表名>_<字段>`
  - 外键名：`fk_<从表>_<主表>_<字段>`

- **字段规范检测**：检查字段类型、默认值、必填字段等
  - 必须包含 `id` 主键字段（BIGINT 自增或 UUID）
  - 必须包含 `created_time`、`updated_time` 时间戳
  - 必须包含 `created_by`、`updated_by` 操作人字段
  - 布尔字段使用 `is_` 前缀
  - 金额类型统一 DECIMAL(18,2)
  - 禁止使用 ENUM 类型

- **索引规范检测**：检查索引数量、字段选择、区分度等
  - 单表索引不超过5个
  - 联合索引字段不超过5个
  - 外键字段必须建索引

- **设计规范检测**：检查表设计合理性
  - 禁止外键约束
  - 单表字段不超过30个
  - 大字段拆分子表
  - 表和字段必须有 COMMENT
  - 字符集统一 utf8mb4

- **安全合规检测**：检查敏感数据处理
  - 敏感字段加密存储
  - 密码不可明文
  - 日志表不记录敏感信息

#### 2.1.2 DDL 解析分析
- 支持粘贴 CREATE TABLE / ALTER TABLE / CREATE INDEX / CREATE VIEW 语句
- 自动提取表名、字段、索引、约束等结构信息
- 支持 SQL 文件、PowerDesigner DDL、Excel/Wiki 表结构描述

#### 2.1.3 贯标规则配置
- 查看当前规则配置
- 新增/修改/删除规则
- 设置规则严重等级（严重/警告/建议）
- 按业务域配置差异化规则
- 导出规则为 JSON/YAML

#### 2.1.4 检测报告生成
- 表格化检测结果（检测项 | 规则 | 实际值 | 结果 | 建议）
- 各维度合规评分（0-100）
- 改进建议清单
- 支持多轮对话深入分析

### 2.2 Agent 体系

| Agent ID | 名称 | 图标 | 颜色 | 职责 |
|----------|------|------|------|------|
| default | 表结构贯标检测 | Database | #0d9488 | 主检测 Agent，执行完整贯标检测 |
| standard-config | 贯标规则配置 | Settings | #7c3aed | 管理和自定义贯标规则 |
| ddl-parser | DDL 解析分析 | FileSearch | #ea580c | 解析 SQL DDL 提取结构信息 |

预设模板 Agent（用户可创建）：

| 模板名称 | 图标 | 颜色 | 职责 |
|----------|------|------|------|
| 安全合规检测 | Shield | #e34d59 | 数据库安全合规检测 |
| 性能优化分析 | BarChart3 | #0594fa | 表结构性能分析和优化 |
| 迁移方案生成 | Code | #7c3aed | 生成 ALTER TABLE 和迁移脚本 |

### 2.3 交互功能

| 功能 | 说明 |
|------|------|
| 多会话管理 | 创建、切换、删除检测会话，SQLite 持久化 |
| 流式响应 | SSE 实时推送 AI 回复，支持中断 |
| 模型切换 | 下拉选择可用 AI 模型 |
| 权限控制 | 四种模式：默认/自动编辑/仅规划/全部允许 |
| 工具调用可视化 | 展示 Agent 使用的工具和执行结果 |
| 深浅主题 | 一键切换浅色/深色模式 |

---

## 3. 技术架构

### 3.1 整体架构

```
┌─────────────────────────────────────────────────┐
│                   用户界面层                      │
│  ┌──────────┐ ┌──────────┐ ┌──────────────────┐ │
│  │ Sidebar  │ │  Header  │ │   ChatPage       │ │
│  │ 会话列表  │ │ 模型/主题 │ │ 消息+输入+权限    │ │
│  └──────────┘ └──────────┘ └──────────────────┘ │
│  ┌──────────────────────────────────────────────┐│
│  │           SettingsPage (设置)                 ││
│  │     登录配置 / Agent 管理 / 快速模板           ││
│  └──────────────────────────────────────────────┘│
├─────────────────────────────────────────────────┤
│                   前端框架层                      │
│  React 18 + TypeScript + Vite 5                 │
│  TDesign React + Tailwind CSS + Lucide Icons    │
│  @tdesign-react/chat (ChatSender)               │
├─────────────────────────────────────────────────┤
│                   后端服务层                      │
│  Express 4 + TypeScript (tsx watch)             │
│  @tencent-ai/agent-sdk (query / v2 API)         │
│  SSE 流式推送 + 权限回调                          │
│  SQLite (better-sqlite3) 会话持久化              │
├─────────────────────────────────────────────────┤
│                   桌面封装层（可选）               │
│  Electron 33 + contextBridge                    │
│  preload 安全暴露 API                            │
└─────────────────────────────────────────────────┘
```

### 3.2 请求链路

```
浏览器 → :5173 (Vite) → proxy /api → :3000 (Express) → Agent SDK → AI 模型
                                                                      ↓
浏览器 ← SSE ← :3000 ← Agent SDK 流式响应 ← AI 模型回复
```

### 3.3 数据流

```
用户输入 → ChatInput → useChat Hook → POST /api/chat
                                          ↓
                                    Express Server
                                    创建/恢复会话
                                    保存用户消息
                                    调用 SDK query()
                                          ↓
                                    SSE 流式推送
                                    ├─ type: init        (会话ID)
                                    ├─ type: text         (文本片段)
                                    ├─ type: tool         (工具调用)
                                    ├─ type: tool_result  (工具结果)
                                    ├─ type: permission_request (权限确认)
                                    └─ type: done         (完成)
                                          ↓
                                    useChat 解析 SSE
                                    更新消息列表
                                    渲染 ChatMessages
```

### 3.4 数据库设计

**sessions 表：**

| 字段 | 类型 | 说明 |
|------|------|------|
| id | TEXT PK | 会话 ID (UUID) |
| title | TEXT | 会话标题 |
| model | TEXT | 使用的模型 |
| sdk_session_id | TEXT | Agent SDK 会话 ID |
| created_at | TEXT | 创建时间 |
| updated_at | TEXT | 更新时间 |

**messages 表：**

| 字段 | 类型 | 说明 |
|------|------|------|
| id | TEXT PK | 消息 ID (UUID) |
| session_id | TEXT FK | 所属会话 |
| role | TEXT | user / assistant |
| content | TEXT | 消息内容 |
| model | TEXT | 使用的模型 |
| created_at | TEXT | 创建时间 |
| tool_calls | TEXT | 工具调用 JSON |

---

## 4. 目录结构

```
db-standard-checker/
├── electron/                    # Electron 桌面端
│   ├── main.ts                 # 主进程入口
│   └── preload.ts              # 预加载脚本
├── server/                      # 后端服务
│   ├── index.ts                # Express + SSE + Agent SDK
│   ├── db.ts                   # SQLite 数据库操作
│   ├── index.d.ts              # 类型声明
│   └── db.d.ts                 # 类型声明
├── src/                         # 前端代码
│   ├── main.tsx                # 入口文件
│   ├── App.tsx                 # 根组件 + 路由
│   ├── config.ts               # 应用配置（名称/描述）
│   ├── types.ts                # TypeScript 类型定义
│   ├── index.css               # 全局样式 + TDesign 变量
│   ├── components/             # UI 组件
│   │   ├── Sidebar.tsx         # 侧边栏（会话列表）
│   │   ├── Header.tsx          # 顶部栏（模型/主题）
│   │   ├── ChatInput.tsx       # 输入框（模型选择/权限模式）
│   │   ├── ChatMessages.tsx    # 消息列表
│   │   ├── NewChatView.tsx     # 新对话页（Agent 选择）
│   │   ├── NewChatDialog.tsx   # 新对话弹窗
│   │   ├── SettingsPage.tsx    # 设置页（登录/Agent 管理）
│   │   ├── AgentConfigDialog.tsx # Agent 配置弹窗
│   │   ├── PermissionDialog.tsx  # 权限确认弹窗
│   │   ├── InlinePermissionCard.tsx # 内联权限卡片
│   │   └── ToolCallsCollapse.tsx   # 工具调用折叠展示
│   ├── hooks/                  # React Hooks
│   │   ├── useAgents.ts        # Agent 管理（内置+自定义）
│   │   ├── useChat.ts          # 聊天逻辑（SSE/发送/权限）
│   │   ├── useSessions.ts      # 会话管理
│   │   ├── useModels.ts        # 模型列表
│   │   └── useTheme.ts         # 主题切换
│   ├── pages/
│   │   └── ChatPage.tsx        # 聊天页面
│   └── utils/
│       └── iconMap.ts          # Lucide 图标映射
├── data/                        # 数据目录
│   └── chat.db                 # SQLite 数据库
├── package.json                 # 依赖和脚本
├── vite.config.ts               # Vite 配置
├── tailwind.config.js           # Tailwind 配置
├── tsconfig.json                # TypeScript 配置
├── tsconfig.electron.json       # Electron TypeScript 配置
├── .env.example                 # 环境变量模板
└── .gitignore                   # Git 忽略规则
```

---

## 5. 设计规范

### 5.1 色彩体系

**品牌色：Teal（#0d9488）**

| 用途 | 浅色模式 | 深色模式 |
|------|----------|----------|
| 品牌主色 | #0d9488 | #14b8a6 |
| 品牌悬浮 | #14b8a6 | #2dd4bf |
| 品牌激活 | #0f766e | #0d9488 |
| 品牌浅色 | rgba(13,148,136,0.1) | rgba(20,184,166,0.15) |

**Agent 颜色编码：**

| Agent | 颜色 | 含义 |
|-------|------|------|
| 表结构贯标检测 | #0d9488 Teal | 专业/可信赖 |
| 贯标规则配置 | #7c3aed Purple | 配置/管理 |
| DDL 解析分析 | #ea580c Orange | 解析/提取 |
| 安全合规检测 | #e34d59 Red | 安全/警告 |
| 性能优化分析 | #0594fa Blue | 性能/数据 |
| 迁移方案生成 | #7c3aed Purple | 变更/迁移 |

### 5.2 图标体系

使用 Lucide React 图标库，核心图标：

| 图标 | 名称 | 用途 |
|------|------|------|
| 🗄️ | Database | 表结构检测 |
| ⚙️ | Settings | 规则配置 |
| 🔍 | FileSearch | DDL 解析 |
| 🛡️ | Shield | 安全合规 |
| 📊 | BarChart3 | 性能分析 |
| 💻 | Code | 迁移脚本 |

### 5.3 字体

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
  'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 
  'Helvetica Neue', Helvetica, Arial, sans-serif;
```

代码区域：
```css
font-family: 'SF Mono', Monaco, Consolas, 'Liberation Mono', 
  'Courier New', monospace;
```

---

## 6. 运行与部署

### 6.1 环境要求

| 依赖 | 最低版本 |
|------|----------|
| Node.js | 18+ |
| pnpm | 8+ |
| Git | 2.x |

### 6.2 启动命令

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 浏览器开发模式（前端 :5173 + 后端 :3000） |
| `pnpm dev:electron` | Electron 桌面端开发模式 |
| `pnpm build` | 构建前端产物 |
| `pnpm build:electron` | 构建 Electron 版本 |
| `pnpm dist` | 打包桌面安装包 |
| `pnpm preview` | 预览构建产物 |
| `pnpm server` | 仅启动后端 |

### 6.3 环境变量

| 变量 | 必填 | 说明 |
|------|------|------|
| CODEBUDDY_API_KEY | 二选一 | CodeBuddy API 密钥 |
| CODEBUDDY_AUTH_TOKEN | 二选一 | CodeBuddy 认证令牌 |
| PORT | 否 | 后端端口，默认 3000 |

### 6.4 认证方式

1. **环境变量**：在 `.env` 文件中配置 API Key
2. **CLI 登录**：通过 `codebuddy` CLI 登录，应用自动检测
3. **页面配置**：在设置页面手动输入 API Key

---

## 7. 权限模型

| 模式 | 标识 | 说明 |
|------|------|------|
| 默认模式 | default | 每次操作都需要确认 |
| 自动编辑 | acceptEdits | 自动允许文件编辑，Bash 仍需确认 |
| 仅规划 | plan | 只生成计划，不执行操作 |
| 全部允许 | bypassPermissions | 跳过所有权限确认（危险） |

权限流程：
```
Agent 调用工具 → canUseTool 回调 → 发送 permission_request 到前端
                                         ↓
                              用户点击允许/拒绝
                                         ↓
                              POST /api/permission-response
                                         ↓
                              resolve Promise → Agent 继续/终止
```

---

## 8. 版本规划

### v1.0.0（当前）
- 基础贯标检测对话
- 三种内置 Agent
- DDL 解析
- 浏览器 + Electron 双模式
- 深浅主题切换

### v1.1.0（规划中）
- 贯标规则持久化（数据库存储自定义规则）
- 批量表结构检测
- 检测报告导出（PDF/Excel）
- 历史检测记录对比

### v1.2.0（规划中）
- 多数据库方言支持（MySQL/PostgreSQL/Oracle）
- 可视化表结构图
- 团队协作规则共享
- CI/CD 集成检测脚本

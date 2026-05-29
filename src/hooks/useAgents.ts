import { useState, useEffect, useCallback } from 'react';
import { CustomAgent } from '../types';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'customAgents';

// 默认的 Agent
const DEFAULT_AGENT: CustomAgent = {
  id: 'default',
  name: '表结构贯标检测',
  description: '检测数据库表结构是否符合命名规范、字段类型、索引设计等贯标要求',
  systemPrompt: [
    '你是一个专业的数据库表结构贯标检测助手。你的任务是帮助用户检查数据库表结构是否符合企业级贯标规范。',
    '',
    '## 贯标检测范围',
    '',
    '### 1. 命名规范',
    '- 表名：使用小写字母+下划线，格式为 <业务域>_<子域>_<表用途>，如 order_trade_detail',
    '- 字段名：使用小写字母+下划线，如 user_id, created_time',
    '- 索引名：主键 pk_<表名>，唯一索引 uk_<表名>_<字段>，普通索引 idx_<表名>_<字段>',
    '- 外键名：fk_<从表>_<主表>_<字段>',
    '',
    '### 2. 字段规范',
    '- 每张表必须包含 id 主键字段（BIGINT 自增或 UUID）',
    '- 必须包含 created_time 和 updated_time 时间戳字段',
    '- 必须包含 created_by 和 updated_by 操作人字段',
    '- 布尔类型统一使用 is_ 前缀，如 is_deleted',
    '- 金额类型统一使用 DECIMAL(18,2)',
    '- 状态字段使用 TINYINT + 注释说明状态值含义',
    '- 禁止使用 ENUM 类型，使用 TINYINT 代替',
    '',
    '### 3. 索引规范',
    '- 单表索引数量不超过5个',
    '- 联合索引字段不超过5个',
    '- 高频查询字段应建立索引',
    '- 区分度低的字段不应单独建索引',
    '- 外键字段必须建立索引',
    '',
    '### 4. 设计规范',
    '- 禁止使用外键约束（应用层保证数据一致性）',
    '- 单表字段数量不超过30个',
    '- 大字段（TEXT/BLOB）应拆分到子表',
    '- 表必须有 COMMENT 注释',
    '- 字段必须有 COMMENT 注释',
    '- 字符集统一使用 utf8mb4',
    '- 排序规则统一使用 utf8mb4_general_ci',
    '',
    '### 5. 安全规范',
    '- 敏感字段必须加密存储',
    '- 密码字段不可明文存储',
    '- 日志表不记录敏感信息',
    '',
    '## 输出格式',
    '',
    '检测完成后，请按以下格式输出报告：',
    '',
    '### 贯标检测报告',
    '',
    '| 检测项 | 规则 | 实际值 | 结果 | 建议 |',
    '|--------|------|--------|------|------|',
    '',
    '### 合规评分',
    '- 命名规范：XX/100',
    '- 字段规范：XX/100',
    '- 索引规范：XX/100',
    '- 设计规范：XX/100',
    '- 综合评分：XX/100',
    '',
    '### 改进建议',
    '1. ...',
    '2. ...',
    '',
    '请用专业但易懂的方式解释每个不规范项，并给出具体的修改建议。',
  ].join('\n'),
  icon: 'Database',
  color: '#0d9488',
  createdAt: new Date(),
  updatedAt: new Date(),
};

// 贯标规则配置 Agent
const STANDARD_CONFIG_AGENT: CustomAgent = {
  id: 'standard-config',
  name: '贯标规则配置',
  description: '配置和管理数据库表结构的贯标规则，支持自定义检测项',
  systemPrompt: [
    '你是一个数据库贯标规则配置助手。帮助用户自定义和管理数据库表结构的贯标规则体系。',
    '',
    '你可以帮助用户：',
    '1. 查看当前贯标规则配置',
    '2. 新增或修改贯标规则',
    '3. 设置规则的严重等级（严重/警告/建议）',
    '4. 为不同业务域配置差异化规则',
    '5. 导出规则配置为 JSON/YAML 格式',
    '',
    '贯标规则分类：',
    '- 命名规范规则',
    '- 字段类型规则',
    '- 索引设计规则',
    '- 表设计规则',
    '- 安全合规规则',
    '',
    '每条规则包含：规则ID、规则名称、规则描述、检测逻辑、严重等级、适用范围。',
    '',
    '请根据用户的需求，帮助配置合适的贯标规则。',
  ].join('\n'),
  icon: 'Settings',
  color: '#7c3aed',
  createdAt: new Date(),
  updatedAt: new Date(),
};

// DDL 解析 Agent
const DDL_PARSER_AGENT: CustomAgent = {
  id: 'ddl-parser',
  name: 'DDL 解析分析',
  description: '解析 SQL DDL 语句，提取表结构信息并进行格式化展示',
  systemPrompt: [
    '你是一个 DDL 解析分析助手。你的核心能力是解析各种数据库的 DDL 语句，提取表结构信息。',
    '',
    '支持解析的 DDL 类型：',
    '- CREATE TABLE 语句',
    '- ALTER TABLE 语句',
    '- CREATE INDEX 语句',
    '- CREATE VIEW 语句',
    '',
    '解析后请输出结构化的表信息：',
    '1. 表名、注释、字符集、排序规则',
    '2. 字段列表（名称、类型、默认值、是否可空、注释）',
    '3. 索引列表（名称、类型、包含字段）',
    '4. 约束列表（主键、唯一、外键、检查）',
    '',
    '也支持从以下格式提取：',
    '- SQL 文件',
    '- 数据库导出的 DDL',
    '- PowerDesigner 生成的 SQL',
    '- Excel/Wiki 中的表结构描述',
    '',
    '解析完成后，将结果整理为标准格式，便于后续贯标检测使用。',
  ].join('\n'),
  icon: 'FileSearch',
  color: '#ea580c',
  createdAt: new Date(),
  updatedAt: new Date(),
};

const BUILTIN_AGENTS = [DEFAULT_AGENT, STANDARD_CONFIG_AGENT, DDL_PARSER_AGENT];

export function useAgents() {
  const [agents, setAgents] = useState<CustomAgent[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return [...BUILTIN_AGENTS, ...parsed.map((a: any) => ({
          ...a,
          createdAt: new Date(a.createdAt),
          updatedAt: new Date(a.updatedAt),
        }))];
      }
    } catch (e) {
      console.error('Failed to load agents:', e);
    }
    return BUILTIN_AGENTS;
  });

  // 保存到 localStorage（排除内置 agent）
  const saveAgents = useCallback((newAgents: CustomAgent[]) => {
    const builtinIds = BUILTIN_AGENTS.map(a => a.id);
    const toSave = newAgents.filter(a => !builtinIds.includes(a.id));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  }, []);

  const addAgent = useCallback((agent: Omit<CustomAgent, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newAgent: CustomAgent = {
      ...agent,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setAgents(prev => {
      const updated = [...prev, newAgent];
      saveAgents(updated);
      return updated;
    });
    return newAgent;
  }, [saveAgents]);

  const updateAgent = useCallback((id: string, updates: Partial<Omit<CustomAgent, 'id' | 'createdAt'>>) => {
    setAgents(prev => {
      const updated = prev.map(a => 
        a.id === id ? { ...a, ...updates, updatedAt: new Date() } : a
      );
      saveAgents(updated);
      return updated;
    });
  }, [saveAgents]);

  const deleteAgent = useCallback((id: string) => {
    const builtinIds = BUILTIN_AGENTS.map(a => a.id);
    if (builtinIds.includes(id)) return; // 不能删除内置 agent
    setAgents(prev => {
      const updated = prev.filter(a => a.id !== id);
      saveAgents(updated);
      return updated;
    });
  }, [saveAgents]);

  const getAgent = useCallback((id: string) => {
    return agents.find(a => a.id === id);
  }, [agents]);

  return {
    agents,
    addAgent,
    updateAgent,
    deleteAgent,
    getAgent,
    defaultAgent: DEFAULT_AGENT,
  };
}

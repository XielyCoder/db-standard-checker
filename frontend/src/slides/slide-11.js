window.slideDataMap.set(11, `
  <div class="w-[1440px] h-[810px] relative overflow-hidden slide-bg">
    <div class="absolute top-0 left-0 right-0 h-[3px] bg-teal-500"></div>
    <div class="absolute inset-0 flex flex-col px-14 py-10">
      <div class="flex items-center gap-4 mb-4">
        <div class="w-10 h-10 flex items-center justify-center flex-shrink-0 border-2 border-teal-500">
          <span class="font-mono text-[14px] font-bold text-teal-500">&gt;_</span>
        </div>
        <div>
          <h1 class="text-[34px] font-bold text-white">索引 + 设计 + 安全规范</h1>
          <p class="text-[13px] font-mono text-gray-500">INDEX / DESIGN / SECURITY SPECIFICATION</p>
        </div>
      </div>
      <div class="flex-1 flex flex-col gap-3">
        <!-- 索引规范 -->
        <div class="flex gap-3 flex-1">
          <div class="w-[120px] flex-shrink-0 flex items-center justify-center bg-teal-600">
            <span class="text-[13px] font-bold font-mono text-white">INDEX</span>
          </div>
          <div class="flex-1 flex gap-3">
            <div class="flex-1 p-4 bg-slate-800/50">
              <p class="text-[14px] font-bold font-mono mb-1 text-teal-400">索引数量</p>
              <p class="text-[13px] text-gray-500">单表索引不超过5个</p>
            </div>
            <div class="flex-1 p-4 bg-slate-800/50">
              <p class="text-[14px] font-bold font-mono mb-1 text-teal-400">联合索引</p>
              <p class="text-[13px] text-gray-500">联合索引字段不超5个</p>
            </div>
            <div class="flex-1 p-4 bg-slate-800/50">
              <p class="text-[14px] font-bold font-mono mb-1 text-teal-400">外键索引</p>
              <p class="text-[13px] text-gray-500">外键字段必须建索引</p>
            </div>
            <div class="flex-1 p-4 bg-slate-800/50">
              <p class="text-[14px] font-bold font-mono mb-1 text-teal-400">低区分度</p>
              <p class="text-[13px] text-gray-500">不应单独建索引</p>
            </div>
          </div>
        </div>
        <svg class="w-full h-3 flex-shrink-0" viewBox="0 0 1200 12"><line x1="600" y1="0" x2="600" y2="12" stroke="#0d9488" stroke-width="1" stroke-dasharray="4,3"/></svg>
        <!-- 设计规范 -->
        <div class="flex gap-3 flex-1">
          <div class="w-[120px] flex-shrink-0 flex items-center justify-center bg-purple-600">
            <span class="text-[13px] font-bold font-mono text-white">DESIGN</span>
          </div>
          <div class="flex-1 flex gap-3">
            <div class="flex-1 p-4 bg-slate-800/50">
              <p class="text-[14px] font-bold font-mono mb-1 text-purple-400">禁止外键</p>
              <p class="text-[13px] text-gray-500">禁止外键约束</p>
            </div>
            <div class="flex-1 p-4 bg-slate-800/50">
              <p class="text-[14px] font-bold font-mono mb-1 text-purple-400">字段限制</p>
              <p class="text-[13px] text-gray-500">单表字段不超30个</p>
            </div>
            <div class="flex-1 p-4 bg-slate-800/50">
              <p class="text-[14px] font-bold font-mono mb-1 text-purple-400">大字段拆分</p>
              <p class="text-[13px] text-gray-500">大字段拆分子表</p>
            </div>
            <div class="flex-1 p-4 bg-slate-800/50">
              <p class="text-[14px] font-bold font-mono mb-1 text-purple-400">COMMENT</p>
              <p class="text-[13px] text-gray-500">表和字段必须有注释</p>
            </div>
            <div class="flex-1 p-4 bg-slate-800/50">
              <p class="text-[14px] font-bold font-mono mb-1 text-purple-400">字符集</p>
              <p class="text-[13px] text-gray-500">统一 utf8mb4</p>
            </div>
          </div>
        </div>
        <svg class="w-full h-3 flex-shrink-0" viewBox="0 0 1200 12"><line x1="600" y1="0" x2="600" y2="12" stroke="#7c3aed" stroke-width="1" stroke-dasharray="4,3"/></svg>
        <!-- 安全合规 -->
        <div class="flex gap-3 flex-1">
          <div class="w-[120px] flex-shrink-0 flex items-center justify-center bg-orange-600">
            <span class="text-[13px] font-bold font-mono text-white">SEC</span>
          </div>
          <div class="flex-1 flex gap-3">
            <div class="flex-1 p-4 bg-slate-800/50">
              <p class="text-[14px] font-bold font-mono mb-1 text-orange-400">敏感字段</p>
              <p class="text-[13px] text-gray-500">敏感字段必须加密存储</p>
            </div>
            <div class="flex-1 p-4 bg-slate-800/50">
              <p class="text-[14px] font-bold font-mono mb-1 text-orange-400">密码字段</p>
              <p class="text-[13px] text-gray-500">密码不可明文存储</p>
            </div>
            <div class="flex-1 p-4 bg-slate-800/50">
              <p class="text-[14px] font-bold font-mono mb-1 text-orange-400">日志脱敏</p>
              <p class="text-[13px] text-gray-500">日志表不记录敏感信息</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3 flex justify-between items-center">
        <p class="text-[12px] font-mono text-gray-600">// Dimension 3-5 | 5-Dimension Full Coverage</p>
        <p class="text-[12px] font-mono text-gray-600">COMPLIANCE: 100%</p>
      </div>
    </div>
  </div>
`);

window.slideDataMap.set(8, `
  <div class="w-[1440px] h-[810px] relative overflow-hidden slide-bg">
    <div class="absolute top-0 right-0 w-[3px] h-full bg-orange-500"></div>
    <div class="absolute inset-0 flex flex-col px-14 py-10">
      <div class="flex items-center gap-4 mb-5">
        <div class="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-orange-600">
          <svg class="w-5 h-5" viewBox="0 0 20 20" fill="white"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 17v1h-3zM4.75 14.094A5.973 5.973 0 004 17v1H1v-1a3 3 0 013.75-2.906z"/></svg>
        </div>
        <div>
          <h1 class="text-[38px] font-bold text-white">多Agent协作体系</h1>
          <p class="text-[13px] font-mono text-gray-500">MULTI-AGENT COLLABORATION</p>
        </div>
        <div class="ml-auto flex gap-2 items-center">
          <div class="w-2 h-2 rounded-full bg-teal-500"></div>
          <span class="font-mono text-[12px] text-teal-400">ACTIVE</span>
        </div>
      </div>
      <!-- 3个Agent层 -->
      <div class="flex-1 flex gap-4">
        <div class="flex-1 flex flex-col gap-3">
          <!-- Agent 1 -->
          <div class="flex-1 flex gap-3">
            <div class="w-[100px] flex-shrink-0 flex items-center justify-center bg-teal-600">
              <span class="text-[13px] font-bold font-mono text-white" style="writing-mode:vertical-lr;transform:rotate(180deg);">AGENT-1</span>
            </div>
            <div class="flex-1 flex gap-3">
              <div class="flex-1 p-4 bg-slate-800/50">
                <p class="text-[13px] font-bold font-mono mb-1 text-teal-400">表结构贯标检测</p>
                <p class="text-[12px] text-gray-500">主检测Agent，执行完整贯标检测</p>
              </div>
              <div class="flex-1 p-4 bg-slate-800/50">
                <p class="text-[13px] font-bold font-mono mb-1 text-teal-400">输出</p>
                <p class="text-[12px] text-gray-500">检测报告+合规评分+改进建议</p>
              </div>
            </div>
          </div>
          <!-- Agent 2 -->
          <div class="flex-1 flex gap-3">
            <div class="w-[100px] flex-shrink-0 flex items-center justify-center bg-purple-600">
              <span class="text-[13px] font-bold font-mono text-white" style="writing-mode:vertical-lr;transform:rotate(180deg);">AGENT-2</span>
            </div>
            <div class="flex-1 flex gap-3">
              <div class="flex-1 p-4 bg-slate-800/50">
                <p class="text-[13px] font-bold font-mono mb-1 text-purple-400">贯标规则配置</p>
                <p class="text-[12px] text-gray-500">管理和自定义贯标规则体系</p>
              </div>
              <div class="flex-1 p-4 bg-slate-800/50">
                <p class="text-[13px] font-bold font-mono mb-1 text-purple-400">输出</p>
                <p class="text-[12px] text-gray-500">规则配置 JSON/YAML 导出</p>
              </div>
            </div>
          </div>
          <!-- Agent 3 -->
          <div class="flex-1 flex gap-3">
            <div class="w-[100px] flex-shrink-0 flex items-center justify-center bg-orange-600">
              <span class="text-[13px] font-bold font-mono text-white" style="writing-mode:vertical-lr;transform:rotate(180deg);">AGENT-3</span>
            </div>
            <div class="flex-1 flex gap-3">
              <div class="flex-1 p-4 bg-slate-800/50">
                <p class="text-[13px] font-bold font-mono mb-1 text-orange-400">DDL 解析分析</p>
                <p class="text-[12px] text-gray-500">解析SQL DDL提取表结构信息</p>
              </div>
              <div class="flex-1 p-4 bg-slate-800/50">
                <p class="text-[13px] font-bold font-mono mb-1 text-orange-400">输出</p>
                <p class="text-[12px] text-gray-500">结构化表信息(字段/索引/约束)</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 右侧扩展面板 -->
        <div class="w-[300px] flex-shrink-0 flex flex-col gap-3">
          <div class="p-4 bg-slate-800/50 border border-purple-500/50">
            <p class="font-mono text-[13px] font-bold mb-3 text-purple-400">EXTENSIBLE</p>
            <div class="space-y-2">
              <div class="flex items-center gap-2"><div class="w-2 h-2 bg-teal-500"></div><span class="text-[13px] text-gray-400">安全合规检测</span></div>
              <div class="flex items-center gap-2"><div class="w-2 h-2 bg-purple-500"></div><span class="text-[13px] text-gray-400">性能优化分析</span></div>
              <div class="flex items-center gap-2"><div class="w-2 h-2 bg-orange-500"></div><span class="text-[13px] text-gray-400">迁移方案生成</span></div>
            </div>
          </div>
          <div class="flex-1 p-4 bg-slate-800/50">
            <p class="font-mono text-[13px] font-bold mb-3 text-teal-400">AGENT SDK</p>
            <div class="space-y-2">
              <div class="flex justify-between"><span class="text-[12px] text-gray-500">权限模式</span><span class="text-[14px] font-mono text-white">4种</span></div>
              <div class="h-px bg-gray-700"></div>
              <div class="flex justify-between"><span class="text-[12px] text-gray-500">内置Agent</span><span class="text-[14px] font-mono text-white">3种</span></div>
              <div class="h-px bg-gray-700"></div>
              <div class="flex justify-between"><span class="text-[12px] text-gray-500">可扩展</span><span class="text-[14px] font-mono text-teal-400">Yes</span></div>
            </div>
          </div>
          <div class="p-3 font-mono bg-slate-800/50">
            <p class="text-[12px] text-gray-600">// Agent Template System</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`);

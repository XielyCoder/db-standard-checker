window.slideDataMap.set(12, `
  <div class="w-[1440px] h-[810px] relative overflow-hidden slide-bg">
    <div class="absolute top-0 left-0 right-0 h-[3px] bg-teal-500"></div>
    <div class="absolute inset-0 flex flex-col px-14 py-10">
      <div class="flex items-center justify-between mb-5">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-teal-600">
            <svg class="w-5 h-5" viewBox="0 0 20 20" fill="white"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/></svg>
          </div>
          <div>
            <h1 class="text-[38px] font-bold text-white">智能评分报告</h1>
            <p class="text-[13px] font-mono text-gray-500">COMPLIANCE SCORING REPORT</p>
          </div>
        </div>
        <div class="flex items-center gap-2 px-3 py-1 bg-slate-800/50">
          <div class="w-2 h-2 rounded-full bg-teal-500"></div>
          <span class="font-mono text-[12px] text-teal-400">REPORT</span>
        </div>
      </div>
      <!-- 5个评分指标 -->
      <div class="grid grid-cols-5 gap-3 mb-4">
        <div class="p-3 bg-slate-800/50" style="border-top:3px solid #0d9488;">
          <p class="text-[11px] font-mono mb-1 text-gray-500">命名规范</p>
          <p class="text-[26px] font-bold font-mono text-teal-400">85</p>
          <p class="text-[11px] font-mono text-gray-600">/100</p>
        </div>
        <div class="p-3 bg-slate-800/50" style="border-top:3px solid #7c3aed;">
          <p class="text-[11px] font-mono mb-1 text-gray-500">字段规范</p>
          <p class="text-[26px] font-bold font-mono text-purple-400">72</p>
          <p class="text-[11px] font-mono text-gray-600">/100</p>
        </div>
        <div class="p-3 bg-slate-800/50" style="border-top:3px solid #ea580c;">
          <p class="text-[11px] font-mono mb-1 text-gray-500">索引规范</p>
          <p class="text-[26px] font-bold font-mono text-orange-400">90</p>
          <p class="text-[11px] font-mono text-gray-600">/100</p>
        </div>
        <div class="p-3 bg-slate-800/50" style="border-top:3px solid #3b82f6;">
          <p class="text-[11px] font-mono mb-1 text-gray-500">设计规范</p>
          <p class="text-[26px] font-bold font-mono text-blue-400">68</p>
          <p class="text-[11px] font-mono text-gray-600">/100</p>
        </div>
        <div class="p-3 bg-slate-800/50" style="border-top:3px solid #ef4444;">
          <p class="text-[11px] font-mono mb-1 text-gray-500">安全合规</p>
          <p class="text-[26px] font-bold font-mono text-red-400">55</p>
          <p class="text-[11px] font-mono text-gray-600">/100</p>
        </div>
      </div>
      <!-- 详情区 -->
      <div class="flex-1 flex gap-5">
        <div class="flex-1 flex flex-col gap-3">
          <div class="p-4 bg-slate-800/50">
            <p class="text-[16px] font-bold mb-3 text-white">检测结果示例</p>
            <div class="space-y-2 font-mono text-[12px]">
              <div class="flex items-center gap-2 p-2 bg-gray-900/50">
                <span class="px-1.5 py-0.5 text-[10px] font-bold bg-red-600 text-white">FAIL</span>
                <span class="text-gray-400 flex-1">字段 user_name 缺少 COMMENT</span>
                <span class="text-gray-600">设计规范</span>
              </div>
              <div class="flex items-center gap-2 p-2 bg-gray-900/50">
                <span class="px-1.5 py-0.5 text-[10px] font-bold bg-red-600 text-white">FAIL</span>
                <span class="text-gray-400 flex-1">password 字段未加密</span>
                <span class="text-gray-600">安全合规</span>
              </div>
              <div class="flex items-center gap-2 p-2 bg-gray-900/50">
                <span class="px-1.5 py-0.5 text-[10px] font-bold bg-yellow-600 text-white">WARN</span>
                <span class="text-gray-400 flex-1">索引 idx_status 区分度低</span>
                <span class="text-gray-600">索引规范</span>
              </div>
              <div class="flex items-center gap-2 p-2 bg-gray-900/50">
                <span class="px-1.5 py-0.5 text-[10px] font-bold bg-green-600 text-white">PASS</span>
                <span class="text-gray-400 flex-1">表名 order_trade_detail 符合规范</span>
                <span class="text-gray-600">命名规范</span>
              </div>
              <div class="flex items-center gap-2 p-2 bg-gray-900/50">
                <span class="px-1.5 py-0.5 text-[10px] font-bold bg-green-600 text-white">PASS</span>
                <span class="text-gray-400 flex-1">包含 created_time/updated_time</span>
                <span class="text-gray-600">字段规范</span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[320px] flex-shrink-0 flex flex-col gap-3">
          <div class="p-4 bg-slate-800/50 border border-teal-500/50">
            <p class="font-mono text-[13px] font-bold mb-3 text-teal-400">TOTAL SCORE</p>
            <p class="text-[48px] font-bold font-mono text-teal-400 leading-none">74</p>
            <p class="text-[13px] text-gray-500 mt-1">/100 综合评分</p>
            <div class="h-1 mt-3 bg-gray-900"><div class="h-full bg-teal-500" style="width:74%;"></div></div>
          </div>
          <div class="flex-1 p-4 bg-slate-800/50">
            <p class="font-mono text-[13px] font-bold mb-2 text-purple-400">FEATURES</p>
            <div class="space-y-2 text-[12px]">
              <div class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-teal-500"></div><span class="text-gray-400">改进建议清单</span></div>
              <div class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-purple-500"></div><span class="text-gray-400">多轮对话深入分析</span></div>
              <div class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-orange-500"></div><span class="text-gray-400">字段级修改建议</span></div>
            </div>
          </div>
          <div class="p-3 font-mono bg-slate-800/50">
            <p class="text-[12px] text-gray-600">// Auto Scoring Engine v1.0</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`);

window.slideDataMap.set(5, `
  <div class="w-[1440px] h-[810px] relative overflow-hidden slide-bg">
    <div class="absolute top-0 left-0 w-[3px] h-full bg-teal-500"></div>
    <div class="absolute inset-0 flex flex-col pl-16 pr-14 py-10">
      <div class="flex items-center gap-4 mb-5">
        <div class="px-3 py-1 bg-teal-600">
          <span class="font-mono text-[14px] font-bold text-white">PAIN</span>
        </div>
        <div>
          <h1 class="text-[38px] font-bold text-white">传统检测困境</h1>
          <p class="text-[13px] font-mono text-gray-500">TRADITIONAL DETECTION DILEMMA</p>
        </div>
      </div>
      <!-- 三代演进 -->
      <div class="flex gap-2 mb-5 items-stretch">
        <div class="flex-1 p-4 bg-slate-800/50" style="border-top:3px solid #64748b;">
          <p class="text-[13px] font-mono font-bold mb-2 text-gray-400">01 MANUAL</p>
          <p class="text-[13px] text-gray-400">手工时代</p>
          <p class="text-[12px] text-gray-600">DESCRIBE TABLE逐表检查</p>
        </div>
        <div class="flex items-center flex-shrink-0"><span class="font-mono text-[14px] text-gray-700">&gt;</span></div>
        <div class="flex-1 p-4 bg-slate-800/50" style="border-top:3px solid #0d9488;">
          <p class="text-[13px] font-mono font-bold mb-2 text-teal-400">02 SCRIPT</p>
          <p class="text-[13px] text-gray-400">脚本时代</p>
          <p class="text-[12px] text-gray-600">每条规则单独脚本维护</p>
        </div>
        <div class="flex items-center flex-shrink-0"><span class="font-mono text-[14px] text-gray-700">&gt;</span></div>
        <div class="flex-1 p-4 bg-slate-800/50" style="border-top:3px solid #7c3aed;">
          <p class="text-[13px] font-mono font-bold mb-2 text-purple-400">03 AI AGENT</p>
          <p class="text-[13px] text-gray-400">智能时代</p>
          <p class="text-[12px] text-gray-600">自动化+智能化检测</p>
        </div>
      </div>
      <!-- 对比区 -->
      <div class="flex-1 flex gap-5">
        <div class="flex-1 flex flex-col gap-3">
          <h3 class="text-[20px] font-bold mb-1 text-white">痛点对比</h3>
          <div class="p-4 font-mono bg-slate-800/50">
            <p class="text-[13px] mb-2"><span class="text-teal-400">人工审计响应:</span> <span class="text-gray-400">数周</span></p>
            <p class="text-[13px] mb-2"><span class="text-teal-400">AI 自动化:</span> <span class="text-teal-300">数小时</span></p>
            <div class="h-px bg-gray-700 my-2"></div>
            <p class="text-[13px] mb-2"><span class="text-teal-400">规则覆盖:</span> <span class="text-gray-400">人为遗漏不可避免</span></p>
            <p class="text-[13px] mb-2"><span class="text-teal-400">AI 覆盖:</span> <span class="text-teal-300">规则100%覆盖</span></p>
            <div class="h-px bg-gray-700 my-2"></div>
            <p class="text-[13px] mb-2"><span class="text-teal-400">标准化工作:</span> <span class="text-gray-400">人工40-60%时间</span></p>
            <p class="text-[13px]"><span class="text-teal-400">自动化后:</span> <span class="text-teal-300">接近0</span></p>
          </div>
          <div class="p-4 bg-slate-800/50">
            <p class="text-[14px] font-bold mb-2 text-orange-400">核心矛盾</p>
            <p class="text-[13px] text-gray-400">数据规模指数增长，治理能力线性增长</p>
          </div>
        </div>
        <div class="w-[340px] flex-shrink-0 flex flex-col gap-3">
          <div class="p-5 bg-slate-800/50 border border-teal-500/50">
            <p class="font-mono text-[13px] font-bold mb-3 text-teal-400">EFFICIENCY GAP</p>
            <div class="space-y-3">
              <div>
                <div class="flex justify-between mb-1"><span class="text-[13px] text-gray-400">人工审计</span><span class="text-[13px] font-mono text-gray-500">数周</span></div>
                <div class="h-1 bg-gray-900"><div class="h-full w-[15%] bg-gray-500"></div></div>
              </div>
              <div>
                <div class="flex justify-between mb-1"><span class="text-[13px] text-gray-400">AI 自动化</span><span class="text-[13px] font-mono text-teal-400">数小时</span></div>
                <div class="h-1 bg-gray-900"><div class="h-full w-[95%] bg-teal-500"></div></div>
              </div>
            </div>
          </div>
          <div class="flex-1 p-5 bg-slate-800/50">
            <p class="font-mono text-[13px] font-bold mb-3 text-purple-400">AI BOOST</p>
            <div class="space-y-2">
              <div class="flex justify-between"><span class="text-[13px] text-gray-500">效率提升</span><span class="text-[18px] font-bold text-white">40-60%</span></div>
              <div class="h-px bg-gray-700"></div>
              <div class="flex justify-between"><span class="text-[13px] text-gray-500">成本降低</span><span class="text-[18px] font-bold text-white">~30%</span></div>
              <div class="h-px bg-gray-700"></div>
              <div class="flex justify-between"><span class="text-[13px] text-gray-500">规则覆盖</span><span class="text-[18px] font-bold text-teal-400">100%</span></div>
            </div>
          </div>
          <div class="p-3 font-mono bg-slate-800/50">
            <p class="text-[12px] text-gray-600">// AI-Driven Compliance Detection</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`);

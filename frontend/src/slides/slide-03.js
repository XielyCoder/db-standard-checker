window.slideDataMap.set(3, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="w-[1350px] h-[720px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 relative">
      <!-- 六边形网格背景 -->
      <svg class="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="hex3" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse"><polygon points="30,2 56,15 56,37 30,50 4,37 4,15" fill="none" stroke="#5eead4" stroke-width="0.8"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#hex3)"/>
      </svg>
      <!-- 雷达圆环 -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-teal-500/10"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-teal-400/15"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-teal-400/20"></div>
      <!-- 四角定位框 -->
      <div class="absolute top-12 left-12"><div class="w-16 h-16 border-l-2 border-t-2 border-teal-500/50"></div><div class="text-[10px] font-mono text-teal-600 mt-1">SYS.ACTIVE</div></div>
      <div class="absolute top-12 right-12"><div class="w-16 h-16 border-r-2 border-t-2 border-teal-500/50 ml-auto"></div><div class="text-[10px] font-mono text-teal-600 mt-1 text-right">NODE.READY</div></div>
      <div class="absolute bottom-12 left-12"><div class="text-[10px] font-mono text-teal-600 mb-1">SEC.VERIFIED</div><div class="w-16 h-16 border-l-2 border-b-2 border-teal-500/50"></div></div>
      <div class="absolute bottom-12 right-12"><div class="text-[10px] font-mono text-teal-600 mb-1 text-right">LINK.STABLE</div><div class="w-16 h-16 border-r-2 border-b-2 border-teal-500/50 ml-auto"></div></div>
      <!-- 扫描线 -->
      <div class="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent -translate-y-1/2"></div>
      <div class="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-teal-500/20 to-transparent -translate-x-1/2"></div>
      <!-- 中央内容 -->
      <div class="relative z-10 flex items-center justify-center h-full">
        <div class="text-center">
          <div class="relative inline-block mb-8">
            <div class="w-28 h-28 rounded-full border-2 border-teal-400/60 flex items-center justify-center mx-auto" style="box-shadow:0 0 40px rgba(13,148,136,0.15),inset 0 0 30px rgba(13,148,136,0.08);">
              <span class="text-5xl font-mono font-bold text-teal-400" style="text-shadow:0 0 12px rgba(13,148,136,0.6);">01</span>
            </div>
            <svg class="absolute -top-3 -left-3 w-[136px] h-[136px]" viewBox="0 0 136 136"><circle cx="68" cy="68" r="64" fill="none" stroke="rgba(13,148,136,0.25)" stroke-width="1" stroke-dasharray="8 12"/></svg>
          </div>
          <h1 class="text-5xl font-bold text-white mb-4 tracking-wide">行业痛点</h1>
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-16 h-px bg-gradient-to-r from-transparent to-teal-500/70"></div>
            <div class="w-1.5 h-1.5 bg-teal-400 rotate-45"></div>
            <div class="w-16 h-px bg-gradient-to-l from-transparent to-teal-500/70"></div>
          </div>
          <p class="text-lg text-teal-400/80 font-light tracking-widest">数据库合规现状与挑战</p>
        </div>
      </div>
    </div>
  </div>
`);

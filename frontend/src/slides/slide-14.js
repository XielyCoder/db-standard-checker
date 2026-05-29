window.slideDataMap.set(14, `
  <div class="w-[1440px] h-[810px] relative overflow-hidden slide-bg">
    <div class="absolute top-0 left-0 w-[3px] h-full bg-purple-500"></div>
    <div class="absolute inset-0 flex flex-col pl-16 pr-14 py-10">
      <div class="flex items-center gap-4 mb-4">
        <div class="px-3 py-1 border-2 border-purple-500"><span class="font-mono text-[14px] font-bold text-purple-400">ARCH</span></div>
        <div>
          <h1 class="text-[36px] font-bold text-white">Agent SDK驱动架构</h1>
          <p class="text-[13px] font-mono text-gray-500">AGENT SDK DRIVEN ARCHITECTURE</p>
        </div>
      </div>
      <!-- 4层技术栈 -->
      <div class="flex-1 flex flex-col gap-3">
        <div class="flex gap-3 flex-1">
          <div class="w-[110px] flex-shrink-0 flex items-center justify-center bg-teal-600">
            <span class="text-[11px] font-bold font-mono text-white">FRONTEND</span>
          </div>
          <div class="flex-1 flex gap-2">
            <div class="flex-1 p-3 flex flex-col justify-center bg-slate-800/50">
              <p class="text-[13px] font-bold font-mono text-teal-400">React 18</p>
              <p class="text-[11px] text-gray-500">UI Framework</p>
            </div>
            <div class="flex-1 p-3 flex flex-col justify-center bg-slate-800/50">
              <p class="text-[13px] font-bold font-mono text-teal-400">TypeScript</p>
              <p class="text-[11px] text-gray-500">Type Safety</p>
            </div>
            <div class="flex-1 p-3 flex flex-col justify-center bg-slate-800/50">
              <p class="text-[13px] font-bold font-mono text-teal-400">Vite 5</p>
              <p class="text-[11px] text-gray-500">Build Tool</p>
            </div>
            <div class="flex-1 p-3 flex flex-col justify-center bg-slate-800/50">
              <p class="text-[13px] font-bold font-mono text-teal-400">TDesign</p>
              <p class="text-[11px] text-gray-500">UI Library</p>
            </div>
            <div class="flex-1 p-3 flex flex-col justify-center bg-slate-800/50">
              <p class="text-[13px] font-bold font-mono text-teal-400">Tailwind</p>
              <p class="text-[11px] text-gray-500">CSS Utility</p>
            </div>
          </div>
        </div>
        <div class="flex gap-3 flex-1">
          <div class="w-[110px] flex-shrink-0 flex items-center justify-center bg-purple-600">
            <span class="text-[11px] font-bold font-mono text-white">BACKEND</span>
          </div>
          <div class="flex-1 flex gap-2">
            <div class="flex-1 p-3 flex flex-col justify-center bg-slate-800/50">
              <p class="text-[13px] font-bold font-mono text-purple-400">Express 4</p>
              <p class="text-[11px] text-gray-500">HTTP Server</p>
            </div>
            <div class="flex-1 p-3 flex flex-col justify-center bg-slate-800/50">
              <p class="text-[13px] font-bold font-mono text-purple-400">Agent SDK</p>
              <p class="text-[11px] text-gray-500">AI Agent Core</p>
            </div>
            <div class="flex-1 p-3 flex flex-col justify-center bg-slate-800/50">
              <p class="text-[13px] font-bold font-mono text-purple-400">SSE</p>
              <p class="text-[11px] text-gray-500">Stream Push</p>
            </div>
            <div class="flex-1 p-3 flex flex-col justify-center bg-slate-800/50">
              <p class="text-[13px] font-bold font-mono text-purple-400">SQLite</p>
              <p class="text-[11px] text-gray-500">Persistence</p>
            </div>
          </div>
        </div>
        <div class="flex gap-3 flex-1">
          <div class="w-[110px] flex-shrink-0 flex items-center justify-center bg-orange-600">
            <span class="text-[11px] font-bold font-mono text-white">DESKTOP</span>
          </div>
          <div class="flex-1 flex gap-2">
            <div class="flex-1 p-3 flex flex-col justify-center bg-slate-800/50">
              <p class="text-[13px] font-bold font-mono text-orange-400">Electron 33</p>
              <p class="text-[11px] text-gray-500">Desktop Runtime</p>
            </div>
            <div class="flex-1 p-3 flex flex-col justify-center bg-slate-800/50">
              <p class="text-[13px] font-bold font-mono text-orange-400">contextBridge</p>
              <p class="text-[11px] text-gray-500">Security Isolation</p>
            </div>
            <div class="flex-2 p-3 flex flex-col justify-center bg-slate-800/50" style="flex:2;">
              <p class="text-[13px] font-bold font-mono text-orange-400">双模式运行</p>
              <p class="text-[11px] text-gray-500">pnpm dev(浏览器) / pnpm dev:electron(桌面端)</p>
            </div>
          </div>
        </div>
        <div class="flex gap-3 flex-1">
          <div class="w-[110px] flex-shrink-0 flex items-center justify-center bg-gray-600">
            <span class="text-[11px] font-bold font-mono text-white">DATA FLOW</span>
          </div>
          <div class="flex-1 flex items-center gap-2 bg-slate-800/50 px-4">
            <span class="text-[13px] font-mono text-gray-300">用户输入</span>
            <span class="text-teal-400">&rarr;</span>
            <span class="text-[13px] font-mono text-gray-300">Express</span>
            <span class="text-purple-400">&rarr;</span>
            <span class="text-[13px] font-mono text-gray-300">Agent SDK query()</span>
            <span class="text-orange-400">&rarr;</span>
            <span class="text-[13px] font-mono text-gray-300">SSE推送</span>
            <span class="text-teal-400">&rarr;</span>
            <span class="text-[13px] font-mono text-gray-300">实时渲染</span>
          </div>
        </div>
      </div>
      <div class="mt-3 flex justify-between items-center">
        <p class="text-[12px] font-mono text-gray-600">// Permission Modes: Default / Auto-Edit / Plan-Only / Full-Access</p>
        <div class="flex gap-4 font-mono text-[12px]">
          <span class="text-teal-400">Frontend 5</span>
          <span class="text-purple-400">Backend 4</span>
          <span class="text-orange-400">Desktop 2</span>
        </div>
      </div>
    </div>
  </div>
`);

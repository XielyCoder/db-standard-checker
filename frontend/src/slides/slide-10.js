window.slideDataMap.set(10, `
  <div class="w-[1440px] h-[810px] relative overflow-hidden slide-bg">
    <div class="absolute bottom-0 left-0 right-0 h-[3px] bg-teal-500"></div>
    <div class="absolute inset-0 flex flex-col px-14 py-10">
      <div class="flex items-center gap-4 mb-4">
        <div class="px-3 py-1 bg-teal-600"><span class="font-mono text-[14px] font-bold text-white">DIM-1&2</span></div>
        <div>
          <h1 class="text-[34px] font-bold text-white">命名规范 + 字段规范</h1>
          <p class="text-[13px] font-mono text-gray-500">NAMING & FIELD SPECIFICATION</p>
        </div>
      </div>
      <div class="flex-1 flex gap-5">
        <!-- 左侧：命名规范 -->
        <div class="flex-1 flex flex-col gap-3">
          <div class="p-4 bg-slate-800/50" style="border-left:3px solid #0d9488;">
            <h3 class="text-[18px] font-bold mb-3 text-teal-400">命名规范检测</h3>
            <div class="space-y-3">
              <div class="flex gap-3 items-start">
                <span class="text-[12px] font-mono font-bold px-2 py-0.5 flex-shrink-0 bg-teal-600 text-white">01</span>
                <div><p class="text-[14px] font-bold text-white">表名格式</p><p class="text-[12px] text-gray-500">&lt;业务域&gt;_&lt;子域&gt;_&lt;表用途&gt;</p><p class="text-[11px] text-gray-600 font-mono">如 order_trade_detail</p></div>
              </div>
              <div class="flex gap-3 items-start">
                <span class="text-[12px] font-mono font-bold px-2 py-0.5 flex-shrink-0 bg-teal-600 text-white">02</span>
                <div><p class="text-[14px] font-bold text-white">字段名规范</p><p class="text-[12px] text-gray-500">小写+下划线分隔</p><p class="text-[11px] text-gray-600 font-mono">如 user_id / created_time</p></div>
              </div>
              <div class="flex gap-3 items-start">
                <span class="text-[12px] font-mono font-bold px-2 py-0.5 flex-shrink-0 bg-teal-600 text-white">03</span>
                <div><p class="text-[14px] font-bold text-white">索引名前缀</p><p class="text-[12px] text-gray-500">pk_ / uk_ / idx_ 规范</p></div>
              </div>
              <div class="flex gap-3 items-start">
                <span class="text-[12px] font-mono font-bold px-2 py-0.5 flex-shrink-0 bg-teal-600 text-white">04</span>
                <div><p class="text-[14px] font-bold text-white">外键名规范</p><p class="text-[12px] text-gray-500">fk_&lt;从表&gt;_&lt;主表&gt;_&lt;字段&gt;</p></div>
              </div>
            </div>
          </div>
        </div>
        <!-- 右侧：字段规范 -->
        <div class="w-[480px] flex-shrink-0 flex flex-col gap-3">
          <div class="p-4 bg-slate-800/50" style="border-left:3px solid #7c3aed;">
            <h3 class="text-[18px] font-bold mb-3 text-purple-400">字段规范检测</h3>
            <div class="space-y-2 font-mono text-[13px]">
              <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 text-[11px] font-bold bg-purple-600 text-white">REQ</span>
                <span class="text-gray-400">必须包含 id 主键(BIGINT/UUID)</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 text-[11px] font-bold bg-purple-600 text-white">REQ</span>
                <span class="text-gray-400">必须 created_time / updated_time</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 text-[11px] font-bold bg-purple-600 text-white">REQ</span>
                <span class="text-gray-400">必须 created_by / updated_by</span>
              </div>
              <div class="h-px bg-gray-700 my-1"></div>
              <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 text-[11px] font-bold bg-orange-600 text-white">FMT</span>
                <span class="text-gray-400">布尔字段 is_ 前缀</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 text-[11px] font-bold bg-orange-600 text-white">FMT</span>
                <span class="text-gray-400">金额字段 DECIMAL(18,2)</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 text-[11px] font-bold bg-red-600 text-white">BAN</span>
                <span class="text-gray-400">禁止 ENUM，使用 TINYINT</span>
              </div>
            </div>
          </div>
          <div class="p-3 font-mono bg-slate-800/50">
            <p class="text-[12px] text-gray-600">// Naming & Field Convention v1.0</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`);

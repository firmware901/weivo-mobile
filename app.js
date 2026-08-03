/* ============================================================
 * 威沃报价器 app.js（UI + 算价逻辑）
 * ------------------------------------------------------------
 * 依赖同目录 biz-data.js 提供的全局变量 QUOTE_DATA（<script src> 加载，
 * 纯离线、file:// 可用，无任何网络请求）。
 *
 * 算价口径与 tools/extract_data.py --verify 完全一致：
 *   mode=round  : 面价 = 基础价(尺寸) + Σ选配
 *                 平台价 = ROUND(面价 × discountP, 0)
 *                 限价   = ROUND(面价 × discountL, 0)
 *   mode=raw    : 显示器型（IPM/OPX），逐尺寸折扣、原表不取整
 *                 平台价 = 面价 × 尺寸行 p，限价 = 面价 × 尺寸行 l
 *   mode=static : 静态表，平台价/限价直接取尺寸行 plat/limit
 *   正版系统/软件：计入面价，与机器配置一同参与总价统一打折（平台价=ROUND(总价×折扣)，限价同理）。
 * ============================================================ */

/* ---------------- 纯算价核心（无 DOM 依赖，可在 node 中独立对账） ---------------- */

/* node 环境导出（供 tools 之外的对账脚本复用同一套算价函数） */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QuoteCore;
}

/* ---------------- UI 层（仅在浏览器中运行） ---------------- */
(function () {
  'use strict';
  if (typeof document === 'undefined') return; /* node 环境只暴露 QuoteCore */

  if (typeof QUOTE_DATA === 'undefined') {
    document.body.innerHTML =
      '<p style="padding:60px;font-size:16px;">数据文件 biz-data.js 加载失败。<br>' +
      '请确认 biz-data.js 与本页面在同一文件夹，且整个文件夹完整解压后再打开。</p>';
    return;
  }

  /* ---------- 全局状态 ---------- */
  var state = {
    srcIdx: 0,        // QUOTE_DATA.sources 下标（0=主推 1=非主推）
    product: '',      // 已选产品大类（工业平板电脑/工控机/IP广播服务器/显示器），''=全部
    seriesIdx: -1,    // 当前源内系列下标
    sizeName: null,   // 已选尺寸名
    sel: {},          // {类别名: 选项名}
    osLabel: null,    // 已选系统/软件 label
    productionRemark: '', // ⑥ 生产订单备注（原封不动写入生产订单「备注」U6）
    rule: 'total'     // 计价规则
  };

  /* 产品大类：从数据中所有系列去重得到，避免硬编码（数据变更自动同步） */
  var PRODUCTS = (function () {
    var seen = {}, out = [];
    QUOTE_DATA.sources.forEach(function (s) {
      s.series.forEach(function (ser) {
        if (ser.product && !seen[ser.product]) { seen[ser.product] = 1; out.push(ser.product); }
      });
    });
    return out;
  })();

  /* ---------- 工具 ---------- */
  function $(id) { return document.getElementById(id); }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function src() { return QUOTE_DATA.sources[state.srcIdx]; }

  function curSeries() {
    return state.seriesIdx >= 0 ? src().series[state.seriesIdx] : null;
  }

  function curSize() {
    var s = curSeries();
    return s ? QuoteCore.findSize(s, state.sizeName) : null;
  }

  function findOsItem(label) {
    if (!label) return null;
    var g, i;
    for (g = 0; g < QUOTE_DATA.osOptions.length; g++) {
      var grp = QUOTE_DATA.osOptions[g];
      for (i = 0; i < grp.items.length; i++) {
        if (grp.items[i].label === label) return grp.items[i];
      }
    }
    return null;
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  var toastTimer = null;
  function toast(msg) {
    var t = $('toast');
    t.textContent = msg;
    t.className = 'show';
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.className = ''; }, 1800);
  }


  /* 防 XSS：转义文本用于 innerHTML */
  function esc(t) {
    return String(t == null ? '' : t)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* 大型号：去掉平台/变体后缀，如 IPRO(x86)→IPRO、VFACE(安卓)→VFACE、GBOOK-GPS(DC系列)→GBOOK-GPS */
  function modelName(name) {
    if (!name) return '';
    var i = name.lastIndexOf('(');
    if (i === -1) return name;
    return name.slice(0, i).trim();
  }

  function nowStr() {
    var d = new Date();
    return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()) +
      ' ' + pad2(d.getHours()) + ':' + pad2(d.getMinutes()) + ':' + pad2(d.getSeconds());
  }

  /* Excel 日期序列号（如 46230）转 YYYY/M/D；非序列号原样返回 */
  function fmtLogDate(s) {
    var text = String(s == null ? '' : s).trim();
    if (/^\d+(\.\d+)?$/.test(text)) {
      var serial = parseFloat(text);
      if (serial > 20000 && serial < 80000) {
        var d = new Date(Date.UTC(1899, 11, 30) + Math.round(serial) * 86400000);
        return d.getUTCFullYear() + '/' + (d.getUTCMonth() + 1) + '/' + d.getUTCDate();
      }
    }
    return text;
  }

  /* ---------- 顶栏：版本号常驻 + 目录切换 ---------- */
  function renderHeader() {
    var vb = $('versionBadges');
    vb.innerHTML = '';
    QUOTE_DATA.sources.forEach(function (s, i) {
      var b = el('span', 'ver-badge' + (i === state.srcIdx ? ' active' : ''));
      var label = el('b', null, s.label + ' ');
      b.appendChild(label);
      b.appendChild(document.createTextNode(
        'v' + s.version + '（有效期至 ' + s.validUntil + '）'));
      vb.appendChild(b);
    });
    var gen = el('span', 'ver-badge');
    gen.title = 'biz-data.js 生成时间';
    gen.textContent = '数据 ' + QUOTE_DATA.generatedAt;
    vb.appendChild(gen);

    var sw = $('srcSwitch');
    sw.innerHTML = '';
    QUOTE_DATA.sources.forEach(function (s, i) {
      var btn = el('button', i === state.srcIdx ? 'active' : '', s.label + '目录');
      btn.setAttribute('data-src', String(i));
      btn.addEventListener('click', function () { switchSource(i); });
      sw.appendChild(btn);
    });
  }

  function switchSource(i) {
    if (i === state.srcIdx) return;
    state.srcIdx = i;
    state.product = '';
    state.seriesIdx = -1;
    state.sizeName = null;
    state.sel = {};
    renderAll();
  }

  /* ---------- 0 产品大类（下拉，默认空值，过滤系列列表） ---------- */
  function renderProduct() {
    var sel = $('productSelect');
    sel.innerHTML = '';
    var first = new Option('请选择产品', '');
    if (!state.product) first.selected = true;
    sel.appendChild(first);
    PRODUCTS.forEach(function (p) {
      var o = new Option(p, p);
      if (p === state.product) o.selected = true;
      sel.appendChild(o);
    });
    sel.onchange = function () {
      if (this.value === state.product) return;
      state.product = this.value;
      state.seriesIdx = -1;
      state.sizeName = null;
      state.sel = {};
      renderAll();
    };
  }

  /* ---------- ① 系列（下拉，默认空值；按产品大类 + 关键字过滤） ---------- */
  function renderSeries() {
    /* 防御：当前系列若不在已选产品大类内、或已下架，则归零（如切产品/切目录后） */
    var cur = curSeries();
    if (cur && (cur.disabled || (state.product && cur.product !== state.product))) state.seriesIdx = -1;

    var box = $('seriesList');
    box.innerHTML = '';
    var sel = el('select', 'sel');
    sel.id = 'seriesSelect';
    var first = new Option('请选择系列', '');
    if (state.seriesIdx === -1) first.selected = true;
    sel.appendChild(first);
    var shown = 0;
    src().series.forEach(function (s, i) {
      if (s.disabled) return; // 已下架系列不显示
      if (state.product && s.product !== state.product) return;
      var opt = document.createElement('option');
      opt.value = String(i);
      opt.textContent = s.name + '（' + s.product + '）';
      if (i === state.seriesIdx) opt.selected = true;
      sel.appendChild(opt);
      shown++;
    });
    if (!shown) {
      box.appendChild(el('div', 'empty-tip',
        state.product ? ('「' + state.product + '」暂无可选系列。') : '暂无可选系列。'));
      return;
    }
    sel.addEventListener('change', function () {
      var v = this.value;
      pickSeries(v === '' ? -1 : parseInt(v, 10));
    });
    box.appendChild(sel);
  }

  function pickSeries(i) {
    if (i === state.seriesIdx) return;
    state.seriesIdx = i;
    state.sizeName = null;
    state.sel = {};
    renderAll();
  }

  /* ---------- ② 尺寸（下拉） ---------- */
  function renderSizes() {
    var box = $('sizeList');
    box.innerHTML = '';
    var sel = el('select', 'sel');
    sel.appendChild(new Option('请选择尺寸 / 型号', ''));
    var s = curSeries();
    if (!s) {
      box.appendChild(el('div', 'empty-tip', '请先选择系列。'));
      return;
    }
    s.sizes.forEach(function (z) {
      var opt = new Option(QuoteCore.sizeLabel(z.name) + '  ¥' + QuoteCore.fmtMoney(z.price), z.name);
      if (z.name === state.sizeName) opt.selected = true;
      sel.appendChild(opt);
    });
    sel.addEventListener('change', function () {
      state.sizeName = this.value || null;
      renderAll();
    });
    box.appendChild(sel);
  }

  /* ---------- ③ 各配置类别（下拉） ---------- */
  /* 解析 CPU 名称里的兼容性后缀，如 (2*D3/16/MS) -> {slots:2, memType:'D3', cap:16, storType:'MS'} */
  function parseCpuCompat(cpuName) {
    if (!cpuName) return null;
    var m = cpuName.match(/\((\d+)\s*\*\s*([A-Za-z0-9]+)\s*\/\s*(\d+)\s*\/\s*([A-Za-z0-9]+)\)/i);
    if (!m) return null;
    return {
      slots: parseInt(m[1], 10),
      memType: m[2].toUpperCase(),   // D3 / D4
      cap: parseInt(m[3], 10),       // 8 / 16 / 32
      storType: m[4].toUpperCase()   // MS / M2
    };
  }

  /* CPU 代数解析：'5代I3...' -> 5；'I3 6100' -> 6；'I3-4160T' -> 4；'12代i5-1235U' -> 12；ARM/RK 等返回 null */
  function cpuGen(name) {
    if (!name) return null;
    var p = name.match(/(\d{1,2})\s*代/);
    if (p) return parseInt(p[1], 10);
    var m = name.match(/i[357][\s-]*(\d{3,4})/i);
    if (m) {
      var s = m[1];
      if (/^1[0-4]/.test(s)) return parseInt(s.slice(0, 2), 10);
      return parseInt(s[0], 10);
    }
    return null;
  }

  /* 解析主板名称 -> 兼容性约束 {genMin,genMax,memType,slots,storTypes,cpuDisabled} */
  function parseMbCompat(name) {
    if (!name) return null;
    var genMin = null, genMax = null;
    var gm = name.match(/(\d{1,2})\s*-\s*(\d{1,2})\s*代/);   // 6-9代
    if (gm) { genMin = parseInt(gm[1], 10); genMax = parseInt(gm[2], 10); }
    else {
      var gs = name.match(/(\d{1,2})\s*代/);                  // 4代 / 12-14代
      if (gs) { genMin = genMax = parseInt(gs[1], 10); }
      else {
        var g2 = name.match(/(\d{1,2})\s*-\s*(\d{1,2})(?!\s*代)/); // 6-9（无"代"字兜底）
        if (g2) { genMin = parseInt(g2[1], 10); genMax = parseInt(g2[2], 10); }
      }
    }
    var memType = null;
    var dm = name.match(/(\d+)\s*\*\s*D([34])/i);            // 2*D3 / 2*D4
    if (dm) memType = 'D' + dm[2].toUpperCase();
    else if (/\bD4\b/.test(name)) memType = 'D4';
    else if (/\bD3\b/.test(name)) memType = 'D3';
    var slots = 2;
    var sm = name.match(/(\d+)\s*\*\s*D[34]/i);
    if (sm) slots = parseInt(sm[1], 10);
    var storTypes = [];
    var hasM2 = /M2/i.test(name), hasMS = /MS/i.test(name);
    if (hasM2 && !hasMS) storTypes.push('M2');
    if (hasMS && !hasM2) storTypes.push('MS');
    if (hasM2 && hasMS) { storTypes.push('M2'); storTypes.push('MS'); }
    if (storTypes.length === 0 && genMin !== null && genMin >= 6) storTypes = ['M2']; // 缩写主板（如 B310D/6-9代/D3、H610/12-14代/D4）兜底
    return {
      genMin: genMin, genMax: genMax,
      memType: memType, slots: slots,
      storTypes: storTypes,
      cpuDisabled: (genMin !== null && genMin >= 12)   // 12-14代 CPU 不在报价器内
    };
  }

  /* 解析单个内存选项名 -> {type:'D3'|'D4'|null, cap:Number|null, dual:bool} */
  function parseMemOpt(name) {
    var type = name.indexOf('(D3)') >= 0 ? 'D3' : (name.indexOf('(D4)') >= 0 ? 'D4' : null);
    var dual = /(\d+)\s*\+\s*(\d+)\s*G/i.test(name);
    var cap = null;
    if (dual) {
      var dm = name.match(/(\d+)\s*\+\s*(\d+)\s*G/i);
      cap = parseInt(dm[1], 10) + parseInt(dm[2], 10);
    } else {
      var cm = name.match(/(\d+)\s*G/i);
      if (cm) cap = parseInt(cm[1], 10);
    }
    return { type: type, cap: cap, dual: dual };
  }

  /* 解析单个硬盘选项名 -> 'MS' | 'M2' | null */
  function parseStorOpt(name) {
    if (name.indexOf('(MS)') >= 0) return 'MS';
    if (name.indexOf('(M2)') >= 0) return 'M2';
    return null;
  }

  /* 兼容性约束：主板优先决定 CPU/内存/硬盘；无主板时回退到 CPU 后缀规则。
     并自动清空已选中的不兼容项。 */
  function applyCpuConstraints() {
    var mbName = state.sel['主板'];
    var cpuName = state.sel['CPU'];
    // "含主板" 是占位选项（基础机型自带主板、不指定型号），兼容性改由 CPU 配置决定（D3/D4、MS/M2）
    var mb = (mbName && mbName !== '含主板') ? parseMbCompat(mbName) : null;
    var cpuC = (!mb && cpuName) ? parseCpuCompat(cpuName) : null;

    // 主板优先，回退到 CPU 后缀
    var memType = mb ? mb.memType : (cpuC ? cpuC.memType : null);
    var slots   = mb ? mb.slots   : (cpuC ? cpuC.slots : 2);
    var cap     = cpuC ? cpuC.cap : null;                       // 容量仅来自 CPU 后缀
    var storAllow = mb ? mb.storTypes : (cpuC ? [cpuC.storType] : null);

    var memSel  = document.querySelector('.sel-grid select[data-cat="内存"]');
    var storSel = document.querySelector('.sel-grid select[data-cat="固态硬盘"]');
    var cpuSel  = document.querySelector('.sel-grid select[data-cat="CPU"]');
    var changed = false;

    function clearIfBanned(sel, catName) {
      var idx = sel.selectedIndex;
      var opt = idx >= 0 ? sel.options[idx] : null;
      if (opt && opt.disabled && opt.value) {
        sel.value = '';
        delete state.sel[catName];
        changed = true;
      }
    }

    // ---- 主板决定 CPU 下拉 ----
    if (cpuSel) {
      if (mb && mb.cpuDisabled) {
        cpuSel.disabled = true;
        cpuSel.title = 'CPU价格请咨询采购。';
        if (cpuSel.value) { cpuSel.value = ''; delete state.sel['CPU']; changed = true; }
      } else {
        cpuSel.disabled = false;
        cpuSel.title = '';
        if (mb && mb.genMin !== null) {
          for (var c = 0; c < cpuSel.options.length; c++) {
            var co = cpuSel.options[c];
            if (!co.value) { co.disabled = false; co.classList.remove('opt-ban'); continue; }
            // 仅放开：代际在范围内、且为台式机（无名网口后缀）的 CPU
            var g = cpuGen(co.value);
            var ok = g !== null && g >= mb.genMin && g <= mb.genMax && !/单网|双网|四网/.test(co.value);
            co.disabled = !ok;
            if (ok) co.classList.remove('opt-ban'); else co.classList.add('opt-ban');
          }
          clearIfBanned(cpuSel, 'CPU');
        } else {
          for (var c2 = 0; c2 < cpuSel.options.length; c2++) {
            cpuSel.options[c2].disabled = false;
            cpuSel.options[c2].classList.remove('opt-ban');
          }
        }
      }
    }

    // ---- 内存 ----
    if (memSel) {
      for (var i = 0; i < memSel.options.length; i++) {
        var o = memSel.options[i];
        if (!o.value) { o.disabled = false; o.classList.remove('opt-ban'); continue; }
        var info = parseMemOpt(o.value);
        var ban = false;
        if (memType && info.type && info.type !== memType) ban = true;
        if (cap != null && info.cap != null && info.cap > cap) ban = true;
        if (slots === 1 && info.dual) ban = true;
        o.disabled = ban;
        if (ban) o.classList.add('opt-ban'); else o.classList.remove('opt-ban');
      }
      clearIfBanned(memSel, '内存');
    }
    // ---- 固态硬盘 ----
    if (storSel) {
      for (var j = 0; j < storSel.options.length; j++) {
        var so = storSel.options[j];
        if (!so.value) { so.disabled = false; so.classList.remove('opt-ban'); continue; }
        var st = parseStorOpt(so.value);
        var sban = false;
        if (storAllow && st && storAllow.indexOf(st) < 0) sban = true;
        so.disabled = sban;
        if (sban) so.classList.add('opt-ban'); else so.classList.remove('opt-ban');
      }
      clearIfBanned(storSel, '固态硬盘');
    }
    if (changed) renderResult();
  }

  function renderCats() {
    var box = $('catList');
    box.innerHTML = '';
    var s = curSeries();
    if (!s) {
      box.appendChild(el('div', 'empty-tip', '请先选择系列。'));
      return;
    }
    var visible = s.categories.filter(function (c) { return c.options.length > 0; });
    if (!visible.length) {
      box.appendChild(el('div', 'empty-tip', '该系列无可选配项，直接进入④。'));
      return;
    }
    var grid = el('div', 'sel-grid');
    visible.forEach(function (cat) {
      var cell = el('div', 'sel-cell');
      cell.appendChild(el('div', 'cat-name', cat.name));
      var sel = el('select', 'sel');
      sel.dataset.cat = cat.name;
      sel.appendChild(new Option('（不选）', ''));
      // 按尺寸白名单过滤 CPU 可选项（如 GW-200 仅限 2 个 CPU）；其余尺寸无此字段则不受影响
      var opts = cat.options;
      if (cat.name === 'CPU') {
        var sz = curSize();
        if (sz && Array.isArray(sz.cpuOptions) && sz.cpuOptions.length) {
          opts = cat.options.filter(function (o) { return sz.cpuOptions.indexOf(o.name) !== -1; });
          if (state.sel['CPU'] && sz.cpuOptions.indexOf(state.sel['CPU']) === -1) delete state.sel['CPU'];
        }
      }
      opts.forEach(function (opt) {
        var o = new Option(opt.name + '  +¥' + QuoteCore.fmtMoney(opt.price), opt.name);
        if (state.sel[cat.name] === opt.name) o.selected = true;
        sel.appendChild(o);
      });
      sel.addEventListener('change', function () {
        if (this.value) state.sel[cat.name] = this.value;
        else delete state.sel[cat.name];
        renderResult();
        applyCpuConstraints();
      });
      cell.appendChild(sel);
      grid.appendChild(cell);
    });
    box.appendChild(grid);
    applyCpuConstraints();
  }

  /* ---------- ④ 正版系统/软件（下拉） ---------- */
  function renderOS() {
    var box = $('osList');
    box.innerHTML = '';
    var sel = el('select', 'sel');
    sel.appendChild(new Option('（不选系统，默认）', ''));
    QUOTE_DATA.osOptions.forEach(function (grp) {
      var og = document.createElement('optgroup');
      og.label = grp.group;
      grp.items.forEach(function (item) {
        var o = new Option(item.label + '  +¥' + QuoteCore.fmtMoney(item.price), item.label);
        if (state.osLabel === item.label) o.selected = true;
        og.appendChild(o);
      });
      sel.appendChild(og);
    });
    sel.addEventListener('change', function () {
      state.osLabel = this.value || null;
      renderResult();
    });
    box.appendChild(sel);
  }

  /* ---------- 结果区 ---------- */
  function currentQuote() {
    var s = curSeries();
    if (!s) return null;
    var os = findOsItem(state.osLabel);
    return QuoteCore.computeQuote(s, curSize(), state.sel, os ? os.price : 0, state.rule);
  }

  function renderResult() {
    var s = curSeries();
    var z = curSize();
    $('srcEcho').textContent = s ? ('当前：' + src().label + ' / ' + s.name) : '';

    var bdEl = $('breakdown');
    var specEl = $('specLine');

    if (!s) {
      $('pFace').textContent = '—';
      $('pPlat').textContent = '—';
      $('pLimit').textContent = '—';
      bdEl.textContent = '';
      specEl.textContent = '请先选择系列与尺寸。';
      return;
    }

    if (!z) {
      $('pFace').textContent = '—';
      $('pPlat').textContent = '—';
      $('pLimit').textContent = '—';
      bdEl.textContent = '';
      specEl.textContent = '已选系列「' + s.name + '」，请选择尺寸/型号。';
      return;
    }

    var q = currentQuote();
    $('pFace').textContent = '¥' + QuoteCore.fmtMoney(q.face);
    $('pPlat').textContent = '¥' + QuoteCore.fmtMoney(q.plat);
    $('pLimit').textContent = '¥' + QuoteCore.fmtMoney(q.limit);

    /* 面价构成行 */
    var parts = ['基础价 ' + QuoteCore.fmtMoney(q.base)];
    QuoteCore.orderedCategories(s).forEach(function (cat) {
      var name = state.sel[cat.name];
      if (!name) return;
      var opt = QuoteCore.findOption(cat, name);
      if (opt) parts.push(cat.name + ' ' + QuoteCore.fmtMoney(opt.price));
    });
    if (q.os) parts.push('系统 ' + QuoteCore.fmtMoney(q.os));
    bdEl.textContent = '面价构成：' + parts.join(' + ') + ' = ' + QuoteCore.fmtMoney(q.face);

    specEl.innerHTML = '<span class="k">产品名称：</span>' + esc(s.product) + '<br>' +
      '<span class="k">型号：</span>' + esc(modelName(s.name)) + '<br>' +
      '<span class="k">规格参数：</span>' + esc(QuoteCore.buildSpecLine(s, state.sizeName, state.sel, state.osLabel, false, false));
  }

  /* ---------- 更新日志 ---------- */
  function renderLog() {
    var box = $('logPanel');
    box.innerHTML = '';
    var key = src().key;
    var logs = (QUOTE_DATA.updateLogs && QUOTE_DATA.updateLogs[key]) || [];
    var det = el('details');
    var sum = el('summary', null, '近期更新记录（' + src().label + '，最近 ' + logs.length + ' 次）');
    det.appendChild(sum);
    logs.forEach(function (g) {
      var wrap = el('div', 'log-group');
      wrap.appendChild(el('div', 'log-date', fmtLogDate(g.date)));
      var ul = el('ul');
      (g.items || []).forEach(function (it) { ul.appendChild(el('li', null, it)); });
      wrap.appendChild(ul);
      det.appendChild(wrap);
    });
    box.appendChild(det);
  }

  function renderAll() {
    renderHeader();
    renderProduct();
    renderSeries();
    renderSizes();
    renderCats();
    renderOS();
    renderResult();
    renderLog();
  }

  /* 去掉配置里给产线看的技术括号标注 (D3)(D4)(MS)(M.2) 等，
     兼容半角()与全角（）；括号内可能含 '/'（如 CPU 的 (1*D3/8/MS)），
     故先全局去括号、再按 '/' 分段清理空段。
     仅用于对外（合同/发票/复制报价）输出，产线用的生产订单保留括号。 */

  /* ---------- 报价文本（复制 / 导出共用） ---------- */
  function buildQuoteText() {
    var s = curSeries();
    var z = curSize();
    if (!s || !z) return null;
    return assembleQuoteText({
      series: s, sizeName: state.sizeName, selections: state.sel,
      osLabel: state.osLabel, quote: currentQuote(),
      model: modelName(s.name)
    });
  }

  /* ---------- 一键复制 ---------- */
  function doCopy() {
    var text = buildQuoteText();
    if (!text) { toast('请先选择系列与尺寸'); return; }
    copyText(text, function (ok) {
      toast(ok ? '报价已复制，可直接粘贴发送' : '复制失败，请手动选择文本复制');
    });
  }


  /* ---------- 重置 ---------- */
  function doReset() {
    state.product = '';
    state.seriesIdx = -1;
    state.sizeName = null;
    state.sel = {};
    state.osLabel = null;
    state.productionRemark = '';
    var pa = $('prodRemark'); if (pa) pa.value = '';
    renderAll();
    toast('已重置（保留当前目录）');
  }

  /* ---------- 事件绑定 ---------- */
  function bindEvents() {
    $('btnCopy').addEventListener('click', doCopy);
    $('btnReset').addEventListener('click', doReset);
    // ⑥ 生产订单备注：实时写入 state（加入合同时随购物车项一并带入生成）
    var pr = $('prodRemark');
    if (pr) pr.addEventListener('input', function () { state.productionRemark = this.value; });
  }

  /* ---------- 对外暴露 API（供右栏商务助手 docpanel/docgen 调用） ----------
   * 这些函数（state/curSeries/curSize/currentQuote/src）均定义于本 IIFE 作用域内，
   * 因此可直接闭包引用。docpanel/docgen 在用户交互时才调用，加载顺序已保证本文件先执行。 */
  window.QuoteApp = {
    getState: function () { return state; },
    getSeries: function () { return curSeries(); },
    getSize: function () { return curSize(); },
    getQuote: function () { return currentQuote(); },
    getSpecLine: function () {
      return QuoteCore.buildSpecLine(curSeries(), state.sizeName, state.sel, state.osLabel, false, false);
    },
    getSrc: function () { return src(); }
  };

  /* ---------- 暴露选品快照 API 给商务助手（docpanel.js） ---------- */
  window.QuoteApp = {
    getState: function () { return state; },
    getSeries: function () { return curSeries(); },
    getSize: function () { return curSize(); },
    getQuote: function () { return currentQuote(); },
    getSpecLine: function () {
      return QuoteCore.buildSpecLine(curSeries(), state.sizeName, state.sel, state.osLabel, false, false);
    },
    getSrc: function () { return src(); }
  };

  /* ---------- 启动 ---------- */
  bindEvents();
  renderAll();
})();

/* ============================================================
 * quote-core.js —— 威沃报价共享核心
 * 算价引擎(QuoteCore) + 复制/导出文本逻辑(stripSpecParens/copyText/assembleQuoteText)
 * 供「威沃业务助手V3」(桌面) 与「手机版」(GitHub Pages) 共用，V3 为唯一源头。
 * 依赖：biz-data.js 提供的全局 QUOTE_DATA（需在之前加载）。
 * 纯离线、可在 node 中独立对账。
 * ============================================================ */

/* ---------------- 纯算价核心（无 DOM 依赖） ---------------- */
var QuoteCore = (function () {
  'use strict';

  /* 规格参数行中已知类别的固定顺序（任务书规定）；
   * 未列入的类别（主板/电源/显卡/电阻屏等）插入其后第一个已知类别之前。 */
  var SPEC_ORDER = ['CPU', '内存', '固态硬盘', '机械硬盘', 'WIFI', '串口', '其他', '支架'];

  /* 与 Excel ROUND(x,0) 一致的四舍五入（正数 half-up） */
  function xround(x) {
    if (x >= 0) return Math.floor(x + 0.5);
    return -Math.floor(-x + 0.5);
  }

  /* 尺寸名是否为纯数字（纯数字在规格行中显示为“xx寸”，型号名原样显示） */
  function isSizeInch(name) {
    return /^\d+(\.\d+)?$/.test(String(name));
  }

  function sizeLabel(name) {
    return isSizeInch(name) ? String(name) + '寸' : String(name);
  }

  function findSize(series, sizeName) {
    if (!series || sizeName == null) return null;
    for (var i = 0; i < series.sizes.length; i++) {
      if (series.sizes[i].name === sizeName) return series.sizes[i];
    }
    return null;
  }

  function findOption(cat, optName) {
    if (!cat || optName == null) return null;
    for (var i = 0; i < cat.options.length; i++) {
      if (cat.options[i].name === optName) return cat.options[i];
    }
    return null;
  }

  /* 类别按规格行顺序排序：已知8类按 SPEC_ORDER；未知类别排到其后第一个已知类别之前，
   * 若其后没有已知类别则排到末尾；同级保持数据原顺序。 */
  function orderedCategories(series) {
    var items = [];
    var i, j;
    for (i = 0; i < series.categories.length; i++) {
      items.push({ cat: series.categories[i], idx: i, rank: SPEC_ORDER.indexOf(series.categories[i].name) });
    }
    for (i = 0; i < items.length; i++) {
      if (items[i].rank === -1) {
        var r = SPEC_ORDER.length;
        for (j = i + 1; j < items.length; j++) {
          if (items[j].rank !== -1) { r = items[j].rank; break; }
        }
        items[i].rank = r - 0.5;
      }
    }
    items.sort(function (a, b) { return (a.rank - b.rank) || (a.idx - b.idx); });
    var out = [];
    for (i = 0; i < items.length; i++) out.push(items[i].cat);
    return out;
  }

  /* 已选配置加价合计（未选 / 选了但表中不存在 均按 0 计，等价 IFERROR(...,0)） */
  function optionSum(series, selections) {
    var sum = 0;
    if (!selections) return sum;
    for (var i = 0; i < series.categories.length; i++) {
      var cat = series.categories[i];
      var opt = findOption(cat, selections[cat.name]);
      if (opt) sum += Number(opt.price) || 0;
    }
    return sum;
  }

  /**
   * 算价。
   * @param series   biz-data.js 中某个系列对象
   * @param size     系列中的某个尺寸对象（未选尺寸传 null，按基础价 0 计）
   * @param selections {类别名: 选项名}
   * @param osPrice  正版系统/软件价格（不选传 0 / null）
   * @param rule     'total' 总价统一打折（默认）| 'baseOnly' 仅基础价打折、选配按面价
   * @returns {base, optSum, os, face, plat, limit} —— face/plat/limit 均已含系统价
   */
  function computeQuote(series, size, selections, osPrice, rule) {
    var base = size ? (Number(size.price) || 0) : 0;
    var optSum = optionSum(series, selections);
    var os = Number(osPrice) || 0;
    /* 面价 = 基础价 + 选配 + 正版系统/软件；三档价对“含系统的总价”统一打折 */
    var face = base + optSum + os;
    var plat, limit;
    if (series.mode === 'static') {
      plat = (size && size.plat != null) ? Number(size.plat) : face;
      limit = (size && size.limit != null) ? Number(size.limit) : face;
    } else if (series.mode === 'raw') {
      var p = (size && size.p != null) ? Number(size.p) : Number(series.discountP);
      var l = (size && size.l != null) ? Number(size.l) : Number(series.discountL);
      if (rule === 'baseOnly') {
        plat = base * p + optSum + os;
        limit = base * l + optSum + os;
      } else {
        plat = face * p;
        limit = face * l;
      }
    } else { /* round（默认） */
      var dp = Number(series.discountP);
      var dl = Number(series.discountL);
      if (rule === 'baseOnly') {
        plat = xround(base * dp) + optSum + os;
        limit = xround(base * dl) + optSum + os;
      } else {
        plat = xround(face * dp);
        limit = xround(face * dl);
      }
    }

    return {
      base: base, optSum: optSum, os: os,
      face: face, plat: plat, limit: limit
    };
  }

  /* 规格参数行：产品名称/系列/尺寸/各已选配置/系统，空字段跳过，'/' 连接
     includeProduct=false 不带产品名；includeSeries=false 不带系列名（复制/导出文本头部另起两行时两者均 false） */
  function buildSpecLine(series, sizeName, selections, osLabel, includeProduct, includeSeries) {
    if (includeProduct === undefined) includeProduct = true;
    if (includeSeries === undefined) includeSeries = true;
    var parts = [];
    if (includeProduct) parts.push(series.product);
    if (includeSeries) parts.push(series.name);
    if (sizeName) parts.push(sizeLabel(sizeName));
    var cats = orderedCategories(series);
    for (var i = 0; i < cats.length; i++) {
      var name = selections[cats[i].name];
      /* 与计价口径一致：表中不存在的选项名不进规格行（IFERROR 语义） */
      if (name && findOption(cats[i], name)) parts.push(name);
    }
    if (osLabel) parts.push(osLabel);
    return parts.join('/');
  }

  /* 金额显示：整数原样；小数保留至多 2 位并去尾零 */
  function fmtMoney(n) {
    if (n == null || isNaN(Number(n))) return '-';
    var v = Math.round(Number(n) * 100) / 100;
    if (v % 1 === 0) return String(v);
    return v.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
  }

  return {
    SPEC_ORDER: SPEC_ORDER,
    xround: xround,
    isSizeInch: isSizeInch,
    sizeLabel: sizeLabel,
    findSize: findSize,
    findOption: findOption,
    orderedCategories: orderedCategories,
    optionSum: optionSum,
    computeQuote: computeQuote,
    buildSpecLine: buildSpecLine,
    fmtMoney: fmtMoney
  };
})();

/* ---------------- 复制/导出 文本工具（两端共用） ---------------- */

function pad2(n) { return n < 10 ? '0' + n : '' + n; }

/* 去掉配置里给产线看的技术括号标注 (D3)(D4)(MS)(M.2) 等，
   兼容半角()与全角（）；括号内可能含 '/'（如 CPU 的 (1*D3/8/MS)），
   故先全局去括号、再按 '/' 分段清理空段。
   仅用于对外（合同/发票/复制报价）输出，产线用的生产订单保留括号。 */
function stripSpecParens(t) {
  if (!t) return t;
  var cleaned = String(t).replace(/[（(][^()（）]*[)）]/g, '');
  return cleaned.split('/')
    .map(function (seg) { return seg.trim(); })
    .filter(function (seg) { return seg.length > 0; })
    .join('/');
}

/* 剪贴板复制（含 execCommand 兜底） */
function copyText(text, done) {
  function fallback() {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    done(ok);
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function () { done(true); }, fallback);
  } else {
    fallback();
  }
}

/* 复制/导出共用的报价文本拼装：改复制格式只改这里，两端自动同步。
   ctx = { series, sizeName, selections, osLabel, quote, model }
     series     系列对象（curSeries()）
     sizeName   已选尺寸名
     selections {类别名: 选项名}
     osLabel    已选系统/软件 label（可为 null）
     quote      currentQuote() 的结果 {face,plat,limit}
     model      对外显示的型号字符串（V3 传 __pendingModelOverride||BIZ.modelCode；手机版传 modelName） */
function assembleQuoteText(ctx) {
  var series = ctx.series, sizeName = ctx.sizeName, selections = ctx.selections,
      osLabel = ctx.osLabel, quote = ctx.quote, model = ctx.model;
  if (!series) return null;
  var spec = stripSpecParens(QuoteCore.buildSpecLine(series, sizeName, selections, osLabel, false, false));
  var d = new Date();
  var dateOnly = d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
  return [
    '产品名称：' + series.product,
    '型号：' + (model || ''),
    '规格参数：' + spec,
    '报价：¥' + QuoteCore.fmtMoney(quote ? quote.face : 0),
    '报价日期：' + dateOnly
  ].join('\r\n');
}

/* node 环境导出（供对账脚本复用同一套算价与文本逻辑） */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QuoteCore;
  module.exports.stripSpecParens = stripSpecParens;
  module.exports.copyText = copyText;
  module.exports.assembleQuoteText = assembleQuoteText;
  module.exports.pad2 = pad2;
}

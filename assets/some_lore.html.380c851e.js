import{_ as e,o as i,c as n,e as s}from"./app.f824c78a.js";const a={},c=s(`<h1 id="\u5E38\u7528\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u529F\u80FD" aria-hidden="true">#</a> \u5E38\u7528\u529F\u80FD</h1><h2 id="\u4FEE\u6539\u672C\u5730\u7ED1\u5B9A\u7684\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u672C\u5730\u7ED1\u5B9A\u7684\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740" aria-hidden="true">#</a> \u4FEE\u6539\u672C\u5730\u7ED1\u5B9A\u7684\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740</h2><p>\u573A\u666F\uFF1A\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740\u53D8\u66F4\uFF0C\u672C\u5730\u8FD8\u662F\u8001\u5730\u5740\u3002 \u89E3\u51B3\u529E\u6CD5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u8FDC\u7A0B\u5206\u652F</span>
<span class="token function">git</span> remote
<span class="token comment"># origin</span>

<span class="token comment"># \u67E5\u770B\u5F53\u524D\u672C\u5730\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740</span>
<span class="token function">git</span> remote get-url origin
<span class="token comment"># git@github.com:xxx/xxx.git</span>

<span class="token comment"># \u4FEE\u6539\u672C\u5730\u7ED1\u5B9A\u7684\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740</span>
<span class="token function">git</span> remote set-url origin git@github.com:xxx/xxx.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740\u6709 <code>SSH</code> \u548C <code>HTTP</code> \u4E24\u79CD\u7C7B\u578B\uFF0C\u5982\u679C\u4F7F\u7528\u4E86 <code>SSH</code> \u7C7B\u578B\u7684\u5730\u5740\uFF0C\u8BF7\u786E\u4FDD\u4F60\u914D\u7F6E\u4E86 <code>ssh key</code>\u3002</p></div><h2 id="\u64A4\u9500\u6B64\u6B21\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#\u64A4\u9500\u6B64\u6B21\u5408\u5E76" aria-hidden="true">#</a> \u64A4\u9500\u6B64\u6B21\u5408\u5E76</h2><p>\u5F53\u51B2\u7A81\u53D1\u751F\u65F6\uFF0C\u6211\u4EEC\u6709\u591A\u79CD\u9009\u62E9\uFF0C\u8FD9\u5176\u4E2D\u5F53\u7136\u4E5F\u5305\u62EC\u64A4\u9500\u5408\u5E76\u3002</p><p>\u4F7F\u7528 <code>git merge --abort</code>\uFF0C\u6062\u590D\u6216\u56DE\u9000\u5230\u6267\u884C\u5408\u5E76\u4EE5\u524D\u7684\u72B6\u6001\u3002</p><p>\u6216\u8005\uFF0C\u5982\u679C<strong>\u5408\u5E76\u540E\u7684\u63D0\u4EA4\u8FD8\u505C\u7559\u5728\u672C\u5730Git\u5E93</strong>\uFF0C\u6CA1\u6709\u88AB\u63A8\u9001\u5230\u8FDC\u7A0B\uFF0C\u53EF\u4EE5\u5229\u7528 <code>git reset --hard HEAD</code> \u547D\u4EE4\uFF0C\u6062\u590D\u5230\u5F53\u524D\u5206\u652F\u7684\u6700\u8FD1\u4E00\u6B21\u63D0\u4EA4\u3002Git \u5728\u63A5\u5230\u8FD9\u4E2A\u547D\u4EE4\u4EE5\u540E\uFF0C\u4F1A\u6309\u7167\u4E0B\u9762\u7684\u6B65\u9AA4\u4E00\u6B65\u6B65\u8FDB\u884C\u64A4\u9500\uFF1A</p><ul><li>\u628A\u5F53\u524D\u5206\u652F\u7684 <code>HEAD</code> \u6307\u9488\u79FB\u52A8\u5230\u5408\u5E76\u524D\u7684\u63D0\u4EA4\u8BB0\u5F55\u4E0A\uFF1B</li><li>\u628A\u6682\u5B58\u533A\u6062\u590D\u6210 <code>HEAD</code> \u6240\u6307\u5411\u7684\u7248\u672C\uFF1B</li><li>\u628A\u5DE5\u4F5C\u76EE\u5F55\u6062\u590D\u6210\u548C\u6682\u5B58\u533A\u4FDD\u6301\u4E00\u81F4\u3002</li></ul><h2 id="\u56DE\u6EDA\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u56DE\u6EDA\u4EE3\u7801" aria-hidden="true">#</a> \u56DE\u6EDA\u4EE3\u7801</h2><p>\u60F3\u8981\u8BA9Git\u56DE\u9000\u5386\u53F2\uFF0C\u6709\u4EE5\u4E0B\u6B65\u9AA4\uFF1A</p><ul><li>\u4F7F\u7528 <code>git log</code> \u547D\u4EE4\uFF0C\u67E5\u770B\u5206\u652F\u63D0\u4EA4\u5386\u53F2\uFF0C\u786E\u8BA4\u9700\u8981\u56DE\u9000\u7684\u7248\u672C</li><li>\u4F7F\u7528 <code>git reset --hard commit_id</code> \u547D\u4EE4\uFF0C\u8FDB\u884C\u7248\u672C\u56DE\u9000</li><li>\u4F7F\u7528 <code>git push origin</code> \u547D\u4EE4\uFF0C\u63A8\u9001\u81F3\u8FDC\u7A0B\u5206\u652F</li></ul><p>\u5FEB\u6377\u547D\u4EE4\uFF1A</p><ul><li>\u56DE\u9000\u4E0A\u4E2A\u7248\u672C\uFF1A<code>git reset --hard HEAD^</code></li></ul>`,15),d=[c];function o(t,l){return i(),n("div",null,d)}var m=e(a,[["render",o],["__file","some_lore.html.vue"]]);export{m as default};
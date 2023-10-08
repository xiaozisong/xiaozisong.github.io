import{_ as n,o as s,c as a,e}from"./app.1fa09df8.js";const i={},c=e(`<h1 id="\u4E00\u4E9B\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E9B\u4F8B\u5B50" aria-hidden="true">#</a> \u4E00\u4E9B\u4F8B\u5B50</h1><h2 id="nth-child-3n-3-\u6307\u5B9A\u9009\u62E9-3-\u7684\u500D\u6570" tabindex="-1"><a class="header-anchor" href="#nth-child-3n-3-\u6307\u5B9A\u9009\u62E9-3-\u7684\u500D\u6570" aria-hidden="true">#</a> <code>nth-child(3n + 3)</code> \u6307\u5B9A\u9009\u62E9 3 \u7684\u500D\u6570</h2><ul><li><code>3n</code> \u8868\u793A3\u7684\u500D\u6570</li><li><code>+3</code> \u8868\u793A\u4ECE\u7B2C3\u4E2A\u5143\u7D20\u5F00\u59CB</li></ul><p>\u4F8B\u5982\uFF1A</p><p><code>li:nth-child(3n + 3)</code> \u8868\u793A\uFF1A\u4ECE\u7B2C 3 \u4E2A li \u5F00\u59CB\u9009\u62E9\u7B26\u5408 3 \u7684\u500D\u6570\u500D\u6570\u7684 li\uFF0C\u5982\u679C\u6709 10 \u4E2A li\uFF0C\u90A3\u4E48\u7B2C 3\u30016\u30019 \u4E2A li \u5C06\u88AB\u9009\u4E2D</p><p><code>li:nth-child(n + 4)</code> \u8868\u793A\uFF1A\u4ECE\u7B2C 4 \u4E2A li \u5F00\u59CB\u9009\u62E9\u7B26\u5408 1 \u7684\u500D\u6570\u500D\u6570\u7684 li\uFF0C\u5982\u679C\u6709 5 \u4E2A li\uFF0C\u90A3\u4E48\u7B2C 4\u30015 \u4E2A li \u5C06\u88AB\u9009\u4E2D</p><blockquote><p>n \u9ED8\u8BA4\u4E3A 1\uFF0C\u8868\u793A 1 \u7684\u500D\u6570</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">image</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 226rpx<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 226rpx<span class="token punctuation">;</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 12rpx<span class="token punctuation">;</span>
    <span class="token selector">&amp;:nth-child(3n + 3)</span> <span class="token punctuation">{</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u652F\u6301-n-\u6362\u884C" tabindex="-1"><a class="header-anchor" href="#\u652F\u6301-n-\u6362\u884C" aria-hidden="true">#</a> \u652F\u6301 <code>\\n</code> \u6362\u884C</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> break-spaces<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9009\u62E9\u5947\u6570\u548C\u5076\u6570" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u5947\u6570\u548C\u5076\u6570" aria-hidden="true">#</a> \u9009\u62E9\u5947\u6570\u548C\u5076\u6570</h2><ul><li><p><code>:nth-child(odd){}</code> \u9009\u62E9\u5947\u6570\u884C</p></li><li><p><code>:nth-child(even){}</code> \u9009\u62E9\u5076\u6570\u884C</p></li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u9009\u62E9\u5947\u6570\u884C */</span>
<span class="token selector">li:nth-child(odd)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">/* \u9009\u62E9\u5076\u6570\u884C */</span>
<span class="token selector">li:nth-child(even)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6E10\u5165\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u6E10\u5165\u52A8\u753B" aria-hidden="true">#</a> \u6E10\u5165\u52A8\u753B</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.fade-in</span> <span class="token punctuation">{</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> fadeIn 800ms ease both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> fadeIn</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0.2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),l=[c];function t(p,o){return s(),a("div",null,l)}var u=n(i,[["render",t],["__file","some_example.html.vue"]]);export{u as default};

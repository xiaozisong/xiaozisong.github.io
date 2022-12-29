import{_ as n,o as s,c as a,e as p}from"./app.5c33355f.js";const t={},e=p(`<h1 id="python\u4E2D\u7684\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#python\u4E2D\u7684\u6CE8\u89E3" aria-hidden="true">#</a> Python\u4E2D\u7684\u6CE8\u89E3 @</h1><p><code>Python3.0</code> \u4E4B\u540E\u52A0\u5165\u65B0\u7279\u6027 <code>Decorators</code>\uFF0C\u4EE5 <code>@</code> \u4E3A\u6807\u8BB0\u4FEE\u9970 <code>function</code> \u548C <code>class</code>\u3002</p><p><code>Decorators</code> \u7528\u4EE5\u4FEE\u9970\u7EA6\u675F <code>function</code> \u548C <code>class</code>\uFF0C\u5206\u4E3A\u5E26\u53C2\u6570\u548C\u4E0D\u5E26\u53C2\u6570\uFF0C\u5F71\u54CD\u539F\u6709\u8F93\u51FA\uFF0C\u4F8B\u5982\u7C7B\u9759\u6001\u51FD\u6570\u6211\u4EEC\u8981\u8868\u8FBE\u7684\u65F6\u5019\u9700\u8981\u51FD\u6570\u524D\u9762\u52A0\u4E0A\u4FEE\u9970 <code>@ staticmethod</code> \u6216 <code>@ classmethod</code></p><p>\u8BED\u6CD5\uFF0C\u4ECE\u4E0B\u5230\u4E0A\u7684\u987A\u5E8F\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token decorator annotation punctuation">@dec2</span>
<span class="token decorator annotation punctuation">@dec1</span>
<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u76F8\u5F53\u4E8E\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
func <span class="token operator">=</span> dec2<span class="token punctuation">(</span>dec1<span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD8\u5141\u8BB8\u88C5\u9970\u5668\u58F0\u660E\u8C03\u7528\u8FD4\u56DE\u88C5\u9970\u5668\u7684\u51FD\u6570\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token decorator annotation punctuation">@decomaker</span><span class="token punctuation">(</span>argA<span class="token punctuation">,</span> argB<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u76F8\u5F53\u4E8E\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>func <span class="token operator">=</span> decomaker<span class="token punctuation">(</span>argA<span class="token punctuation">,</span> argB<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0B\u9762\u7684\u4F8B\u5B50\u5206\u522B\u6F14\u793A\u4E86\u6CE8\u89E3\u7684\u8FD9\u51E0\u79CD\u4F7F\u7528\u60C5\u51B5\uFF1A</p><ul><li><p>\u4E0D\u5E26\u53C2\u6570\u5355\u6B21\u4F7F\u7528</p></li><li><p>\u4E0D\u5E26\u53C2\u6570\u591A\u6B21\u4F7F\u7528</p></li><li><p>\u5E26\u53C2\u6570\u5355\u6B21\u4F7F\u7528</p></li><li><p>\u5E26\u53C2\u6570\u591A\u6B21\u4F7F\u7528</p></li></ul><h2 id="\u4E0D\u5E26\u53C2\u6570\u5355\u6B21\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u5E26\u53C2\u6570\u5355\u6B21\u4F7F\u7528" aria-hidden="true">#</a> \u4E0D\u5E26\u53C2\u6570\u5355\u6B21\u4F7F\u7528</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">a</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;exec a: &#39;</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
  <span class="token keyword">def</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;exec b: &#39;</span><span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">)</span>
    fn<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span>
  <span class="token keyword">return</span> b

<span class="token decorator annotation punctuation">@a</span>
<span class="token keyword">def</span> <span class="token function">c</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;exec c: &#39;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>

c<span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># \u76F8\u5F53\u4E8E</span>
a<span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># exec a:  &lt;function c at 0x108efef70&gt;</span>
<span class="token comment"># exec b:  hello world</span>
<span class="token comment"># exec c:  hello world</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E0D\u5E26\u53C2\u6570\u591A\u6B21\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u5E26\u53C2\u6570\u591A\u6B21\u4F7F\u7528" aria-hidden="true">#</a> \u4E0D\u5E26\u53C2\u6570\u591A\u6B21\u4F7F\u7528</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">a</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;exec a: &#39;</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span>

  <span class="token keyword">def</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;exec b: &#39;</span><span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">)</span>
    fn<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span>
  <span class="token keyword">return</span> b


<span class="token keyword">def</span> <span class="token function">a1</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;exec a1: &#39;</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
  <span class="token keyword">def</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;exec b1: &#39;</span><span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">)</span>
    fn<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span>
  <span class="token keyword">return</span> b


<span class="token decorator annotation punctuation">@a</span>
<span class="token decorator annotation punctuation">@a1</span>
<span class="token keyword">def</span> <span class="token function">c</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;exec c: &#39;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>


c<span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># \u76F8\u5F53\u4E8E</span>
a1<span class="token punctuation">(</span>a<span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>


<span class="token comment"># exec a1: &lt; function c at 0x108f0bca0 &gt;</span>
<span class="token comment"># exec a: &lt; function a1. &lt; locals &gt; .b at 0x108f2ba60 &gt;</span>
<span class="token comment"># exec b:  hello world</span>
<span class="token comment"># exec b1:  hello world</span>
<span class="token comment"># exec c:  hello world</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E26\u53C2\u6570\u5355\u6B21\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5E26\u53C2\u6570\u5355\u6B21\u4F7F\u7528" aria-hidden="true">#</a> \u5E26\u53C2\u6570\u5355\u6B21\u4F7F\u7528</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token operator">**</span>kwds<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;exec a&#39;</span><span class="token punctuation">,</span> kwds<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">b</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;exec b&#39;</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span>
        <span class="token keyword">for</span> k <span class="token keyword">in</span> kwds<span class="token punctuation">:</span>
            <span class="token builtin">setattr</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> k<span class="token punctuation">,</span> kwds<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> f

    <span class="token keyword">return</span> b


<span class="token decorator annotation punctuation">@a</span><span class="token punctuation">(</span>p1<span class="token operator">=</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> p2<span class="token operator">=</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">c</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">getattr</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token string">&#39;p1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">getattr</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token string">&#39;p2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;exec c: &#39;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>
    
c<span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># \u7B49\u4EF7\u4E8E</span>
a<span class="token punctuation">(</span>p1<span class="token operator">=</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> p2<span class="token operator">=</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># exec a {&#39;p1&#39;: &#39;a&#39;, &#39;p2&#39;: &#39;b&#39;}</span>
<span class="token comment"># exec b &lt;function c at 0x108de9e50&gt;</span>
<span class="token comment"># a</span>
<span class="token comment"># b</span>
<span class="token comment"># exec c:  c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E26\u53C2\u6570\u591A\u6B21\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5E26\u53C2\u6570\u591A\u6B21\u4F7F\u7528" aria-hidden="true">#</a> \u5E26\u53C2\u6570\u591A\u6B21\u4F7F\u7528</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token operator">**</span>kwds<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;exec a&#39;</span><span class="token punctuation">,</span> kwds<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">b</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;exec b&#39;</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span>
        <span class="token keyword">for</span> k <span class="token keyword">in</span> kwds<span class="token punctuation">:</span>
            <span class="token builtin">setattr</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> k<span class="token punctuation">,</span> kwds<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> f

    <span class="token keyword">return</span> b


<span class="token keyword">def</span> <span class="token function">a1</span><span class="token punctuation">(</span><span class="token operator">**</span>kwds<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;exec a1&#39;</span><span class="token punctuation">,</span> kwds<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">b1</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;exec b1&#39;</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span>
        <span class="token keyword">for</span> k <span class="token keyword">in</span> kwds<span class="token punctuation">:</span>
            <span class="token builtin">setattr</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> k<span class="token punctuation">,</span> kwds<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> f

    <span class="token keyword">return</span> b1

<span class="token decorator annotation punctuation">@a1</span><span class="token punctuation">(</span>p3<span class="token operator">=</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> p4<span class="token operator">=</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@a</span><span class="token punctuation">(</span>p1<span class="token operator">=</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> p2<span class="token operator">=</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">c</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">getattr</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token string">&#39;p1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">getattr</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token string">&#39;p2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">getattr</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token string">&#39;p3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">getattr</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token string">&#39;p4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;exec c: &#39;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>


c<span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># \u7B49\u4EF7\u4E8E</span>
a1<span class="token punctuation">(</span>p3<span class="token operator">=</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> p4<span class="token operator">=</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span>a<span class="token punctuation">(</span>p1<span class="token operator">=</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> p2<span class="token operator">=</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># exec a1 {&#39;p3&#39;: &#39;c&#39;, &#39;p4&#39;: &#39;d&#39;}</span>
<span class="token comment"># exec a {&#39;p1&#39;: &#39;a&#39;, &#39;p2&#39;: &#39;b&#39;}</span>
<span class="token comment"># exec b &lt;function c at 0x111332c10&gt;</span>
<span class="token comment"># exec b1 &lt;function c at 0x111332c10&gt;</span>
<span class="token comment"># a</span>
<span class="token comment"># b</span>
<span class="token comment"># c</span>
<span class="token comment"># d</span>
<span class="token comment"># exec c:  c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="python-\u4E2D\u5B58\u5728\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#python-\u4E2D\u5B58\u5728\u95ED\u5305" aria-hidden="true">#</a> Python \u4E2D\u5B58\u5728\u95ED\u5305</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    d <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;qiuxc&#39;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">def</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> d

    <span class="token keyword">return</span> b


b <span class="token operator">=</span> a<span class="token punctuation">(</span><span class="token punctuation">)</span>
nd <span class="token operator">=</span> b<span class="token punctuation">(</span><span class="token punctuation">)</span>
nd1 <span class="token operator">=</span> b<span class="token punctuation">(</span><span class="token punctuation">)</span>
nd<span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">22</span>
<span class="token comment"># \u4FEE\u6539\u4E86 nd \u4F46\u662F nd1 \u7684\u503C\u4E5F\u53D8\u4E86\uFF0C\u8BF4\u660E\u4E24\u8005\u6307\u5411\u4E00\u4E2A\u5730\u65B9</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>nd1<span class="token punctuation">)</span>

<span class="token comment"># {&#39;name&#39;: &#39;qiuxc&#39;, &#39;age&#39;: 22}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),c=[e];function o(i,l){return s(),a("div",null,c)}var d=n(t,[["render",o],["__file","decorators.html.vue"]]);export{d as default};

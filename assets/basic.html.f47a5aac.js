import{_ as a,o as n,c as s,e}from"./app.f824c78a.js";var o="/./assets/java_compile.00ba9923.png",l="/./assets/float_byte_long_issue.md.a990f313.png";const c={},t=e(`<h1 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h1><h2 id="java-\u7F16\u8BD1\u57FA\u672C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#java-\u7F16\u8BD1\u57FA\u672C\u6D41\u7A0B" aria-hidden="true">#</a> Java \u7F16\u8BD1\u57FA\u672C\u6D41\u7A0B</h2><ol><li>\u786C\u76D8\u4E0A\u521B\u5EFA\u4E86\u4E00\u4E2A\u6587\u4EF6 Test.java</li><li>\u6587\u4EF6\u4E2D\u7684\u5185\u5BB9\u662F\u6211\u4EEC\u7F16\u5199\u7684\u6E90\u4EE3\u7801\uFF08\u8DDF\u8BA1\u7B97\u673A\u53D1\u9001\u6307\u4EE4\uFF09</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// Test.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">byte</span> x<span class="token punctuation">;</span>
        x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>    
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u6267\u884C <code>javac Test.java</code> \u5C06 Test.java \u6E90\u6587\u4EF6 -----&gt; \u7F16\u8BD1 -------&gt; Test.class\uFF08\u5B57\u8282\u7801\u6587\u4EF6\uFF0C\u7559\u7ED9\u8BA1\u7B97\u673A\u8BC6\u522B\uFF09</li><li>\u6267\u884C <code>java Test</code> \uFF0C\u7C7B\u52A0\u8F7D\u5668\u5C06 Test.class \u4E2D\u7684\u7C7B\u52A0\u8F7D\u5230\u5185\u5B58\u4E2D\uFF0C\u7136\u540E\u8FD0\u884C Test \u7C7B\uFF0C\u6267\u884C <code>main</code> \u4E3B\u65B9\u6CD5</li><li><code>main</code> \u65B9\u6CD5\u5165\u6808\uFF0C\u53D1\u73B0\u58F0\u660E\u4E86\u5E38\u91CF <code>x</code> \uFF0C\u4ECE\u5E38\u91CF\u7F13\u51B2\u533A\u590D\u5236 <code>1</code> \u5230 \u6808 \u91CC</li></ol><p><img src="`+o+`" alt="java\u7F16\u8BD1\u6D41\u7A0B"></p><h2 id="\u73AF\u5883\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u642D\u5EFA" aria-hidden="true">#</a> \u73AF\u5883\u642D\u5EFA</h2><blockquote><p>JDK\uFF08Java\u5F00\u53D1\u5DE5\u5177\u5305\uFF09 \u5305\u542B JRE\uFF08Java\u8FD0\u884C\u65F6\uFF09\u548C JVM\uFF08Java\u865A\u62DF\u673A\uFF09</p></blockquote><ol><li>\u5B89\u88C5 JDK\uFF08JRE JVM\uFF09</li><li>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF <code>bin/</code></li><li>\u7F16\u5199 <code>.java</code> \u6E90\u4EE3\u7801\uFF0C\u4F7F\u7528 <code>javac</code> \u547D\u4EE4\u7F16\u8BD1\u6E90\u4EE3\u7801</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printLn</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>\u7F16\u8BD1\u5B8C\u6210\u540E\u5F97\u5230 <code>.class</code> \u5B57\u8282\u7801\u6587\u4EF6\uFF0C\u4F7F\u7528 <code>java</code> \u547D\u4EE4\u6267\u884C\u5B57\u8282\u7801\u6587\u4EF6</li></ol><h2 id="java-\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#java-\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> Java \u6570\u636E\u7C7B\u578B</h2><h3 id="\u516B\u5927\u57FA\u672C\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u516B\u5927\u57FA\u672C\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u516B\u5927\u57FA\u672C\u6570\u636E\u7C7B\u578B</h3><ul><li><p>\u6574\u578B <code>byte</code> <code>short</code> <code>int</code> <code>long</code></p></li><li><p>\u6D6E\u70B9\u578B <code>float</code> <code>double</code></p></li><li><p>\u5B57\u7B26\u578B <code>char</code></p></li><li><p>\u5E03\u5C14\u578B <code>boolean</code></p></li></ul><h4 id="\u57FA\u672C\u6570\u636E\u7C7B\u578B\u5185\u5B58\u5BB9\u91CF" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u6570\u636E\u7C7B\u578B\u5185\u5B58\u5BB9\u91CF" aria-hidden="true">#</a> \u57FA\u672C\u6570\u636E\u7C7B\u578B\u5185\u5B58\u5BB9\u91CF</h4><ul><li><p><code>byte</code> \u5B57\u8282\u578B\uFF1A8 \u4E2A bit \u654F\u611F\u5355\u5143\u4F4D</p><ul><li>1byte == 8bit</li><li>256\u79CD\u7EC4\u5408</li><li>\u7528\u7B2C\u4E00\u4E2A bit \u4F4D\u7F6E\u6765\u8BB0\u5F55\u7B26\u53F7 0\u6B63\u6570 1\u8D1F\u6570</li><li>\u53D6\u503C\u8303\u56F4 -2\u76847\u6B21\u65B9 ~ 2\u7684\u4E03\u6B21\u65B9-1\uFF0C\u5373 -128 ~ 127</li></ul></li><li><p><code>short</code> \u77ED\u6574\u578B\uFF1A2 \u4E2A byte\uFF0C16 \u4E2A bit</p><ul><li>65536 \u79CD\u7EC4\u5408</li><li>\u53D6\u503C\u8303\u56F4 -32768 ~ 32767</li></ul></li><li><p><code>int</code> \u6574\u5F62\uFF1A4 \u4E2A byte\uFF0C32 \u4E2A bit</p><ul><li>\u53D6\u503C\u8303\u56F4 -2147483648 ~ 2147483647</li></ul></li><li><p><code>long</code> \u957F\u6574\u578B\uFF1A8 \u4E2A byte\uFF0C64 \u4E2A bit</p><ul><li>\u53D6\u503C\u8303\u56F4 -2\u768464\u6B21\u65B9 ~ 2\u768464\u7684\u6B21\u65B9-1</li></ul></li><li><p><code>float</code> \u5355\u7CBE\u5EA6\u6D6E\u70B9\u578B\uFF1A4 \u4E2A byte\uFF0C32 \u4E2A bit</p></li><li><p><code>double</code> \u53CC\u7CBE\u5EA6\u6D6E\u70B9\u578B\uFF1A8 \u4E2A byte\uFF0C64 \u4E2A bit</p></li><li><p><code>char</code> \u5B57\u7B26\u578B\uFF1A2 \u4E2A byte\uFF0C16 \u4E2A bit</p><ul><li>\u7528\u5355\u5F15\u53F7 &#39; &#39; \u8868\u793A\uFF0C\u82F1\u6587\u5B57\u7B26\u5360\u4E00\u4E2A\u5B57\u8282\uFF0C\u4E2D\u6587\u5360\u4E24\u4E2A\u5B57\u8282</li><li>Unicode \u7F16\u7801</li></ul></li><li><p><code>boolean</code> \u5E03\u5C14\u578B\uFF1A1 \u4E2A byte\uFF0C8 \u4E2A bit</p><ul><li>true false</li></ul></li></ul><h3 id="\u5F15\u7528\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u5F15\u7528\u6570\u636E\u7C7B\u578B</h3><ul><li><p>\u6570\u7EC4 <code>[]</code></p></li><li><p>\u7C7B <code>class</code>(\u62BD\u8C61\u7C7B <code>abstract class</code>)</p></li><li><p>\u63A5\u53E3 <code>interface</code></p></li><li><p>\u679A\u4E3E <code>enum</code></p></li><li><p>\u6CE8\u89E3 <code>@interface</code></p></li></ul><h2 id="\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> \u7C7B\u578B\u8F6C\u6362</h2><h3 id="\u57FA\u672C\u7C7B\u578B-\u{1F501}-\u57FA\u672C\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7C7B\u578B-\u{1F501}-\u57FA\u672C\u7C7B\u578B" aria-hidden="true">#</a> \u57FA\u672C\u7C7B\u578B \u{1F501} \u57FA\u672C\u7C7B\u578B</h3><h4 id="\u5C0F\u6570\u636E\u7C7B\u578B\u76F8\u540C" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u6570\u636E\u7C7B\u578B\u76F8\u540C" aria-hidden="true">#</a> \u5C0F\u6570\u636E\u7C7B\u578B\u76F8\u540C</h4><p>\u90FD\u662F\u6574\u578B\u6216\u90FD\u662F\u6D6E\u70B9</p><ol><li>\u5927\u7A7A\u95F4\u53D8\u91CF\u53EF\u4EE5\u76F4\u63A5\u5B58\u50A8\u7A7A\u95F4\u53D8\u91CF\u7684\u6570\u636E</li><li>\u5C0F\u7A7A\u95F4\u53D8\u91CF\u4E0D\u53EF\u4EE5\u76F4\u63A5\u5B58\u50A8\u5927\u7A7A\u95F4\u7684\u6570\u636E\uFF08\u9700\u8981\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362\uFF09</li><li>\u5F3A\u5236\u8F6C\u6362\u5199\u6CD5\u90FD\u53EF\u4EE5\u901A\u8FC7\u7F16\u8BD1\uFF0C\u4F46\u5982\u679C\u8F6C\u6362\u7684\u8FC7\u7A0B\u4E2D\u6570\u503C\u8303\u56F4\u8D85\u8FC7\u8FB9\u754C\uFF0C\u5C31\u53EF\u80FD\u4F1A\u6709\u635F\u5931</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">byte</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token keyword">int</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span> <span class="token comment">// \u5C0F\u7A7A\u95F4\u53D8\u91CF\u653E\u5165\u5927\u7A7A\u95F4\u53D8\u91CF\uFF0C\u4E0D\u9700\u8981\u624B\u52A8\u8F6C\u6362</span>
<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span>a<span class="token punctuation">;</span> <span class="token comment">// \u5927\u7A7A\u95F4\u8F6C\u7A7A\u95F4\uFF0C\u9700\u8981\u5F3A\u5236\u8F6C\u6362</span>
<span class="token keyword">float</span> x <span class="token operator">=</span> <span class="token number">3.4F</span><span class="token punctuation">;</span> <span class="token keyword">double</span> y <span class="token operator">=</span> x<span class="token punctuation">;</span> <span class="token comment">// \u65E0\u9700\u624B\u52A8\u8F6C\u6362</span>
<span class="token keyword">double</span> x <span class="token operator">=</span> <span class="token number">3.4</span><span class="token punctuation">;</span> <span class="token keyword">float</span> y <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">)</span>x<span class="token punctuation">;</span> <span class="token comment">// \u9700\u8981\u624B\u52A8\u5F3A\u5236\u8F6C\u6362</span>
<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span> <span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span>a<span class="token punctuation">;</span>  <span class="token comment">// \u7F16\u8BD1\u901A\u8FC7\uFF0C\u4F46\u6700\u7EC8 b \u7684\u503C\u4F1A\u53D1\u751F\u6539\u53D8\uFF0C\u56E0\u4E3A int1000 \u8F6C\u5230 byte \u53EA\u4F1A\u4FDD\u7559\u6700\u540E 8 \u4E2A bit \u4F4D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5C0F\u6570\u636E\u7C7B\u578B\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u6570\u636E\u7C7B\u578B\u4E0D\u540C" aria-hidden="true">#</a> \u5C0F\u6570\u636E\u7C7B\u578B\u4E0D\u540C</h4><h5 id="\u6574\u578B-\u8F6C-\u6D6E\u70B9\u578B" tabindex="-1"><a class="header-anchor" href="#\u6574\u578B-\u8F6C-\u6D6E\u70B9\u578B" aria-hidden="true">#</a> \u6574\u578B \u8F6C \u6D6E\u70B9\u578B</h5><ol><li>\u6BD4\u8F83\u7CBE\u786E\u7A0B\u5EA6 \u6D6E\u70B9\u578B\u7CBE\u786E\u5EA6\u66F4\u9AD8\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5B58\u653E\u6574\u6570\uFF0C\u53CD\u4E4B\u5219\u9700\u8981\u5F3A\u5236\u8F6C\u6362</li><li>\u4EFB\u4F55\u4E00\u4E2A\u6D6E\u70B9\u578B(float/double)\u90FD\u53EF\u4EE5\u76F4\u63A5\u5B58\u653E\u4E00\u4E2A\u6574\u578B</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token keyword">float</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span> <span class="token comment">// \u65E0\u9700\u624B\u52A8\u8F6C\u6362</span>
<span class="token keyword">float</span> a <span class="token operator">=</span> <span class="token number">1.0F</span><span class="token punctuation">;</span> <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>a<span class="token punctuation">;</span> <span class="token comment">// \u9700\u8981\u624B\u52A8\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362\uFF0C\u8F6C\u6362\u540E\u820D\u5F03\u5C0F\u6570\u70B9\u540E\u7684\u90E8\u5206</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u6574\u5F62-\u8F6C-\u5B57\u7B26\u578B" tabindex="-1"><a class="header-anchor" href="#\u6574\u5F62-\u8F6C-\u5B57\u7B26\u578B" aria-hidden="true">#</a> \u6574\u5F62 \u8F6C \u5B57\u7B26\u578B</h5><ol><li>\u6BCF\u4E00\u4E2A\u5B57\u7B26\u90FD\u5BF9\u5E94\u7740\u4E00\u4E2A Unicode \u7801\uFF0C\u4F8B\u5982\uFF1Aa -- 97</li><li>\u5B57\u7B26\u53EF\u4EE5\u76F4\u63A5\u8F6C\u6574\u5F62\uFF0C\u6574\u5F62\u8F6C\u5B57\u7B26\u5219\u9700\u8981\u5F3A\u5236\u8F6C\u6362\uFF0C\u56E0\u4E3A\u6574\u5F62\u662F 32bit\uFF0C\u800C\u5B57\u7B26\u662F 16bit</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">char</span> x <span class="token operator">=</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span> <span class="token keyword">int</span> y <span class="token operator">=</span> x<span class="token punctuation">;</span> <span class="token comment">// \u65E0\u9700\u624B\u52A8\u8F6C\u6362\uFF0C\u7ED3\u679C y == 97</span>
<span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">97</span><span class="token punctuation">;</span> <span class="token keyword">char</span> y <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>x<span class="token punctuation">;</span> <span class="token comment">// \u9700\u8981\u5F3A\u5236\u8F6C\u6362\uFF0C\u5C06 32bit \u7684 x \u653E\u5165 16bit \u7684 y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u5E03\u5C14\u7C7B\u578B\u5F88\u7279\u6B8A" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C14\u7C7B\u578B\u5F88\u7279\u6B8A" aria-hidden="true">#</a> \u5E03\u5C14\u7C7B\u578B\u5F88\u7279\u6B8A</h5><p>\u5E03\u5C14\u7C7B\u578B\u4E0D\u80FD\u4E0E\u5176\u4ED6\u57FA\u672C\u7C7B\u578B\u4E4B\u95F4\u53D1\u751F\u8F6C\u6362</p><h2 id="\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u8FD0\u7B97\u7B26</h2><p>\u8FD0\u7B97\u7B26\u662F\u7528\u6765\u6307\u660E\u5BF9\u4E8E\u64CD\u4F5C\u503C\u7684\u8FD0\u7B97\u65B9\u5F0F</p><h3 id="\u6309\u7167\u64CD\u4F5C\u503C\u7684\u6570\u76EE\u8FDB\u884C\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u6309\u7167\u64CD\u4F5C\u503C\u7684\u6570\u76EE\u8FDB\u884C\u5206\u7C7B" aria-hidden="true">#</a> \u6309\u7167\u64CD\u4F5C\u503C\u7684\u6570\u76EE\u8FDB\u884C\u5206\u7C7B</h3><ul><li>\u5355\u76EE <code>a ++;</code></li><li>\u53CC\u76EE <code>a + b;</code></li><li>\u4E09\u76EE <code>(a &gt; b) ? x : y;</code></li></ul><h3 id="\u6309\u7167\u8FD0\u7B97\u7B26\u7684\u529F\u80FD\u8FDB\u884C\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u6309\u7167\u8FD0\u7B97\u7B26\u7684\u529F\u80FD\u8FDB\u884C\u5206\u7C7B" aria-hidden="true">#</a> \u6309\u7167\u8FD0\u7B97\u7B26\u7684\u529F\u80FD\u8FDB\u884C\u5206\u7C7B</h3><ul><li><p>\u7B97\u672F\u8FD0\u7B97</p><ol><li><code>+</code> \u52A0</li><li><code>-</code> \u51CF</li><li><code>*</code> \u4E58</li><li><code>/</code> \u9664</li><li><code>%</code> \u53D6\u4F59\u3001\u53D6\u6A21</li><li><code>++</code> \u81EA\u589E\uFF0C<code>++</code> \u5728\u524D\uFF0C\u5148\u8BA1\u7B97\u518D\u8D4B\u503C\uFF1B<code>++</code> \u5728\u540E\u5148\u8D4B\u503C\u518D\u8BA1\u7B97</li><li><code>--</code> \u81EA\u51CF\uFF0C<code>--</code> \u5728\u524D\uFF0C\u5148\u8BA1\u7B97\u518D\u8D4B\u503C\uFF1B<code>--</code> \u5728\u540E\u5148\u8D4B\u503C\u518D\u8BA1\u7B97</li></ol></li><li><p>\u8D4B\u503C\u8FD0\u7B97</p><ol><li><code>=</code> \u5C06 <code>=</code> \u53F3\u8FB9\u7684\u503C\u5B58\u5165 <code>=</code> \u5DE6\u8FB9\u7684\u53D8\u91CF\u7A7A\u95F4\u5185</li><li><code>+=</code> \u590D\u5408\u8D4B\u503C\uFF0C<code>n = n + 1</code> \u7B49\u4EF7\u4E8E <code>n += 1</code>\uFF0C\u4EE5\u4E0B\u590D\u5408\u7B26\u53F7\u540C\u7406</li><li><code>-=</code></li><li><code>*=</code></li><li><code>/=</code></li><li><code>%=</code></li></ol></li><li><p>\u5173\u7CFB\u8FD0\u7B97\uFF08\u6BD4\u8F83\uFF09</p><ol><li><code>&gt;</code> \u5927\u4E8E</li><li><code>&gt;=</code> \u5927\u4E8E\u7B49\u4E8E</li><li><code>&lt;</code> \u5C0F\u4E8E</li><li><code>&lt;=</code> \u5C0F\u4E8E\u7B49\u4E8E</li><li><code>!=</code> \u4E0D\u7B49\u4E8E</li><li><code>==</code> \u7B49\u4E8E</li><li><code>instanceof</code> \u9A8C\u8BC1\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u662F\u4E00\u4E2A\u7C7B\u7684\u5B9E\u4F8B</li></ol></li><li><p>\u903B\u8F91\u8FD0\u7B97</p><ol><li><code>&amp;</code> \u903B\u8F91\u4E0E\uFF1A\u5DE6\u53F3\u5168\u90E8\u6EE1\u8DB3\u65F6\u8FD4\u56DEtrue</li><li><code>|</code> \u903B\u8F91\u6216\uFF1A\u5DE6\u53F3\u6709\u4E00\u4E2A\u6761\u4EF6\u6EE1\u8DB3\u65F6\u8FD4\u56DEtrue</li><li><code>^</code> \u903B\u8F91\u5F02\u6216\uFF1A\u53EA\u5728\u5DE6\u53F3\u7ED3\u679C\u4E0D\u540C\u65F6\u8FD4\u56DEtrue</li><li><code>!</code> \u903B\u8F91\u975E\uFF1A\u5355\u76EE\uFF0C\u53CD\u8F6C\u7ED3\u679C</li><li><code>&amp;&amp;</code> \u77ED\u8DEF\u4E0E\uFF1A\u5DE6\u8FB9\u6761\u4EF6\u4E0D\u6EE1\u8DB3\u65F6\uFF0C\u76F4\u63A5\u8FD4\u56DEfalse\uFF0C\u4E0D\u518D\u8BA1\u7B97\u53F3\u8FB9\u7ED3\u679C</li><li><code>||</code> \u77ED\u8DEF\u6216\uFF1A\u5DE6\u8FB9\u6761\u4EF6\u6EE1\u8DB3\u65F6\uFF0C\u76F4\u63A5\u8FD4\u56DEtrue\uFF0C\u4E0D\u518D\u8BA1\u7B97\u53F3\u8FB9\u7ED3\u679C</li></ol></li><li><p>\u4F4D\uFF08bit\uFF09\u8FD0\u7B97</p><ol><li><code>&amp;</code> \u6309\u4F4D\u4E0E</li><li><code>|</code> \u6309\u4F4D\u6216</li><li><code>^</code> \u6309\u4F4D\u5F02\u6216</li><li><code>~</code> \u6309\u4F4D\u53D6\u53CD</li><li><code>&lt;&lt;</code>\u6309\u4F4D\u5DE6\u4F4D\u79FB</li><li><code>&gt;&gt;</code>\u6309\u4F4D\u53F3\u4F4D\u79FB</li><li><code>&gt;&gt;&gt;</code>\u6309\u4F4D\u53F3\u4F4D\u79FB\uFF08\u65E0\u7B26\u53F7\uFF09</li></ol></li></ul><h2 id="\u5B57\u7B26-char-\u548C-\u5B57\u7B26\u4E32-string-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26-char-\u548C-\u5B57\u7B26\u4E32-string-\u7684\u533A\u522B" aria-hidden="true">#</a> \u5B57\u7B26 char \u548C \u5B57\u7B26\u4E32 String \u7684\u533A\u522B</h2><p><code>char</code> \u5B57\u7B26\u7C7B\u578B\uFF0C<strong>\u57FA\u672C\u7C7B\u578B</strong>\uFF0C\u6709\u4E14\u53EA\u80FD\u6709\u4E00\u4E2A\u5B57\u7B26</p><p><code>String</code> \u5B57\u7B26\u4E32\uFF0C<strong>\u5F15\u7528\u7C7B\u578B</strong>\uFF0C\u4E0D\u53D7\u9650\u5236</p><table><thead><tr><th>\u5B57\u7B26</th><th>\u5B57\u7B26\u4E32</th></tr></thead><tbody><tr><td><code>char</code></td><td><code>String</code></td></tr><tr><td>\u57FA\u672C\u7C7B\u578B</td><td>\u5F15\u7528\u7C7B\u578B</td></tr><tr><td><code>&#39;a&#39;</code></td><td><code>&quot;a&quot;</code> <code>&quot;abc&quot;</code> <code>&quot;&quot;</code></td></tr></tbody></table><h2 id="float-byte-long-\u8D4B\u503C\u65F6\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#float-byte-long-\u8D4B\u503C\u65F6\u7684\u95EE\u9898" aria-hidden="true">#</a> float &amp; byte &amp; long \u8D4B\u503C\u65F6\u7684\u95EE\u9898</h2><p><img src="`+l+'" alt="float &amp; byte &amp; long \u8D4B\u503C\u65F6\u7684\u95EE\u9898"></p>',45),i=[t];function p(d,r){return n(),s("div",null,i)}var k=a(c,[["render",p],["__file","basic.html.vue"]]);export{k as default};
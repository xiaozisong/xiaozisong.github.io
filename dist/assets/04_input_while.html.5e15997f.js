import{_ as n,o as s,c as a,e}from"./app.5c33355f.js";const t={},p=e(`<h1 id="\u7528\u6237\u8F93\u5165-input-\u548C-while-\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u8F93\u5165-input-\u548C-while-\u5FAA\u73AF" aria-hidden="true">#</a> \u7528\u6237\u8F93\u5165 input \u548C while \u5FAA\u73AF</h1><p>\u901A\u8FC7\u83B7\u53D6\u7528\u6237\u8F93\u5165\u5E76\u5B66\u4F1A\u63A7\u5236\u7A0B\u5E8F\u7684\u8FD0\u884C\u65F6\u95F4\uFF0C\u53EF\u7F16\u5199\u51FA\u4EA4\u4E92\u5F0F\u7A0B\u5E8F</p><h2 id="\u51FD\u6570-input" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570-input" aria-hidden="true">#</a> \u51FD\u6570 input()</h2><p>\u51FD\u6570 <strong>input()</strong> : \u8BA9\u7A0B\u5E8F\u6682\u505C\u8FD0\u884C\uFF0C\u7B49\u5F85\u7528\u6237\u8F93\u5165\u4E00\u4E9B\u6587\u672C\uFF1B \u83B7\u53D6\u7528\u6237\u8F93\u5165\u540E\uFF0CPyhon \u5C06\u5176\u5B58\u50A8\u5728\u4E00\u4E2A\u53D8\u91CF\u4E2D</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>message <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Tell me something, and I will repeat it back to you: &quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
<span class="token comment"># Tell me something, and I will repeat it back to you: hello</span>
<span class="token comment"># hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7F16\u5199\u6E05\u6670\u7684\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u6E05\u6670\u7684\u7A0B\u5E8F" aria-hidden="true">#</a> \u7F16\u5199\u6E05\u6670\u7684\u7A0B\u5E8F</h3><p>\u4F7F\u7528\u51FD\u6570 <strong>input()</strong> \u65F6\uFF0C\u90FD\u5E94\u6307\u5B9A\u6E05\u6670\u800C\u6613\u4E8E\u660E\u767D\u7684\u63D0\u793A\uFF1B \u51C6\u786E\u5730\u6307\u51FA\u5E0C\u671B\u7528\u6237\u63D0\u4F9B\u4EC0\u4E48\u6837\u7684\u4FE1\u606F</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>prompt <span class="token operator">=</span> <span class="token string">&quot;If you tell us who you are, we can personalize the message you see.&quot;</span>
<span class="token comment"># \u8FD0\u7B97\u7B26 += \uFF1A\u5728\u5B58\u50A8\u5728\u53D8\u91CF\u4E2D\u7684\u5B57\u7B26\u4E32\u672B\u5C3E\u9644\u52A0\u4E00\u4E2A\u5B57\u7B26\u4E32</span>
prompt <span class="token operator">+=</span> <span class="token string">&quot;\\nWhat is your first name? &quot;</span>
name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span>prompt<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\\nHello, &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;!&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># If you tell us who you are, we can personalize the message you see.</span>
<span class="token comment"># What is your first name? xiaoming</span>

<span class="token comment"># Hello, xiaoming!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528-int-\u6765\u83B7\u53D6\u6570\u503C\u8F93\u5165" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-int-\u6765\u83B7\u53D6\u6570\u503C\u8F93\u5165" aria-hidden="true">#</a> \u4F7F\u7528 int() \u6765\u83B7\u53D6\u6570\u503C\u8F93\u5165</h3><p>\u4F7F\u7528\u51FD\u6570 <strong>input()</strong> \u65F6\uFF0CPython \u5C06\u7528\u6237\u8F93\u5165\u89E3\u8BFB\u4E3A\u5B57\u7B26\u4E32\uFF1B \u5728\u9700\u8981\u5BF9\u7528\u6237\u8F93\u5165\u7684\u6570\u503C\u505A\u5904\u7406\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u51FD\u6570 <strong>int()</strong> \u5C06\u8F93\u5165\u89C6\u4E3A<strong>\u6570\u503C</strong>\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>age <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u591A\u5927\u4E86?\\n :&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u5DF2\u7ECF\u6210\u5E74\u4E86&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u672A\u6210\u5E74&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># \u4F60\u591A\u5927\u4E86?</span>
<span class="token comment"># :19</span>
<span class="token comment"># \u4F60\u5DF2\u7ECF\u6210\u5E74\u4E86</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6C42\u6A21\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6C42\u6A21\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u6C42\u6A21\u8FD0\u7B97\u7B26</h3><p>\u5904\u7406\u6570\u503C\u4FE1\u606F\u65F6\uFF0C\u6C42\u6A21\u8FD0\u7B97\u7B26 <strong>%</strong> \u662F\u4E00\u4E2A\u5F88\u6709\u7528\u7684\u5DE5\u5177\uFF0C\u5B83\u5C06\u4E24\u4E2A\u6570\u76F8\u9664\u5E76\u8FD4\u56DE<strong>\u4F59\u6570</strong>\uFF1B \u6C42\u6A21\u8FD0\u7B97\u7B26\u4E0D\u4F1A\u6307\u51FA\u4E00\u4E2A\u6570\u662F\u53E6\u4E00\u4E2A\u6570\u7684\u591A\u5C11\u500D\uFF0C\u800C\u53EA\u6307\u51FA\u4F59\u6570\u662F\u591A\u5C11</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token number">4</span> <span class="token operator">%</span> <span class="token number">3</span> <span class="token comment"># 1</span>
<span class="token number">5</span> <span class="token operator">%</span> <span class="token number">3</span> <span class="token comment"># 2</span>
<span class="token number">6</span> <span class="token operator">%</span> <span class="token number">3</span> <span class="token comment"># 0</span>
<span class="token number">7</span> <span class="token operator">%</span> <span class="token number">3</span> <span class="token comment"># 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4E00\u4E2A\u6570\u53EF\u88AB\u53E6\u4E00\u4E2A\u6570\u6574\u9664\uFF0C\u4F59\u6570\u5C31\u4E3A 0\uFF0C\u56E0\u6B64\u6C42\u6A21\u8FD0\u7B97\u7B26\u5C06\u8FD4\u56DE 0\uFF1B \u53EF\u5229\u7528\u8FD9\u4E00\u70B9\u6765\u5224\u65AD\u4E00\u4E2A\u6570\u662F\u5947\u6570\u8FD8\u662F\u5076\u6570\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>number <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Enter a number, and I&#39;ll tell you if it&#39;s even or odd: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> number <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\\nThe number &quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; is even.&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\\nThe number &quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; is odd.&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># Enter a number, and I&#39;ll tell you if it&#39;s even or odd: 5</span>

<span class="token comment"># The number 5 is odd.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="while-\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#while-\u5FAA\u73AF" aria-hidden="true">#</a> while \u5FAA\u73AF</h2><p><strong>for</strong> \u5FAA\u73AF\u7528\u4E8E\u9488\u5BF9\u96C6\u5408\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u90FD\u4E00\u4E2A\u4EE3\u7801\u5757\uFF0C\u800C <strong>while</strong> \u5FAA\u73AF\u4E0D\u65AD\u5730\u8FD0\u884C\uFF0C\u76F4\u5230\u6307\u5B9A\u7684\u6761\u4EF6\u4E0D\u6EE1\u8DB3\u4E3A\u6B62</p><h3 id="\u4F7F\u7528-while-\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-while-\u5FAA\u73AF" aria-hidden="true">#</a> \u4F7F\u7528 while \u5FAA\u73AF</h3><p>\u4F7F\u7528 <strong>while</strong> \u5FAA\u73AF\u6765\u6570\u6570\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>current_number <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">while</span> current_number <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>current_number<span class="token punctuation">)</span>
    current_number <span class="token operator">+=</span> <span class="token number">1</span> <span class="token comment">#current_number = current_number + 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u5C06 current_number \u8BBE\u7F6E\u4E3A 1\uFF0C\u4ECE\u800C\u6307\u5B9A\u4ECE 1 \u5F00\u59CB\u6570\uFF1B \u63A5\u4E0B\u6765\u7684 <strong>while</strong> \u5FAA\u73AF\u88AB\u8BBE\u7F6E\u6210\u8FD9\u6837\uFF1A\u53EA\u8981 current_number \u5C0F\u4E8E\u6216\u7B49\u4E8E 5\uFF0C\u5C31\u63A5\u7740\u8FD0\u884C\u8FD9\u4E2A\u5FAA\u73AF</p><h3 id="\u8BA9\u7528\u6237\u9009\u62E9\u4F55\u65F6\u9000\u51FA" tabindex="-1"><a class="header-anchor" href="#\u8BA9\u7528\u6237\u9009\u62E9\u4F55\u65F6\u9000\u51FA" aria-hidden="true">#</a> \u8BA9\u7528\u6237\u9009\u62E9\u4F55\u65F6\u9000\u51FA</h3><p>\u5B9A\u4E49\u4E86\u4E00\u4E2A\u9000\u51FA\u503C\uFF0C\u53EA\u8981\u7528\u6237\u8F93\u5165\u7684\u4E0D\u662F\u8FD9\u4E2A\u503C\uFF0C\u7A0B\u5E8F\u5C31\u63A5\u7740\u8FD0\u884C\uFF1B \u7528\u6237\u8F93\u5165\u4E86\u9000\u51FA\u503C\uFF0C\u7A0B\u5E8F\u7ED3\u675F\u8FD0\u884C</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>prompt <span class="token operator">=</span> <span class="token string">&quot;\\nTell me something, and I will repeat it back to you: &quot;</span>
prompt <span class="token operator">+=</span> <span class="token string">&quot;\\nEnter &#39;quit&#39; to end the program.\\n:&quot;</span>
message <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
<span class="token keyword">while</span> message <span class="token operator">!=</span> <span class="token string">&#39;quit&#39;</span> <span class="token punctuation">:</span>
    message <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span>prompt<span class="token punctuation">)</span>
    <span class="token keyword">if</span> message <span class="token operator">!=</span> <span class="token string">&#39;quit&#39;</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
<span class="token comment"># Tell me something, and I will repeat it back to you:</span>
<span class="token comment"># Enter &#39;quit&#39; to end the program.</span>
<span class="token comment"># :hello</span>
<span class="token comment"># hello</span>

<span class="token comment"># Tell me something, and I will repeat it back to you:</span>
<span class="token comment"># Enter &#39;quit&#39; to end the program.</span>
<span class="token comment"># :quit # \u7A0B\u5E8F\u7ED3\u675F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u6807\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6807\u5FD7" aria-hidden="true">#</a> \u4F7F\u7528\u6807\u5FD7</h3><p>\u5728\u8981\u6C42\u5F88\u591A\u6761\u4EF6\u90FD\u6EE1\u8DB3\u624D\u7EE7\u7EED\u8FD0\u884C\u7684\u7A0B\u5E8F\u4E2D\uFF0C\u53EF\u5B9A\u4E49\u4E00\u4E2A\u53D8\u91CF\uFF0C\u7528\u4E8E\u5224\u65AD\u6574\u4E2A\u7A0B\u5E8F\u662F\u5426\u5904\u4E8E\u6D3B\u52A8\u72B6\u6001,\u8FD9\u4E2A\u53D8\u91CF\u88AB\u79F0\u4E3A <strong>\u6807\u5FD7</strong>\uFF0C\u5145\u5F53\u4E86\u7A0B\u5E8F\u7684\u4EA4\u901A\u4FE1\u53F7\u706F\uFF1B</p><p>\u8BA9\u7A0B\u5E8F\u5728\u6807\u5FD7\u4E3A <strong>True</strong> \u65F6\u7EE7\u7EED\u8FD0\u884C\uFF0C\u5E76\u5728\u4EFB\u4F55\u4E8B\u4EF6\u5BFC\u81F4\u6807\u5FD7\u7684\u503C\u4E3A <strong>False</strong> \u65F6\u8BA9\u7A0B\u5E8F\u505C\u6B62\u8FD0\u884C</p><p>\u4E0B\u9762\u7684\u4EE3\u7801\u5C06\u53D8\u91CF active \u8BBE\u7F6E\u6210 <strong>True</strong>,\u8BA9\u7A0B\u5E8F\u6700\u521D\u5904\u4E8E\u6D3B\u52A8\u72B6\u6001\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>active <span class="token operator">=</span> <span class="token boolean">True</span>
<span class="token comment"># \u8FDB\u5165while\u5FAA\u73AF\uFF1A</span>
<span class="token keyword">while</span> active<span class="token punctuation">:</span>
    message <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u8BF4\u4EC0\u4E48\u6211\u5C31\u8FD4\u56DE\u4EC0\u4E48\uFF0C\u8F93\u5165&#39;quit&#39; \u9000\u51FA\\n\uFF1A&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> message <span class="token operator">==</span> <span class="token string">&#39;quit&#39;</span><span class="token punctuation">:</span>
        active <span class="token operator">=</span> <span class="token boolean">False</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
<span class="token comment"># \u4F60\u8BF4\u4EC0\u4E48\u6211\u5C31\u8FD4\u56DE\u4EC0\u4E48\uFF0C\u8F93\u5165&#39;quit&#39; \u9000\u51FA</span>
<span class="token comment"># \uFF1Ahello</span>
<span class="token comment"># hello</span>
<span class="token comment"># \u4F60\u8BF4\u4EC0\u4E48\u6211\u5C31\u8FD4\u56DE\u4EC0\u4E48\uFF0C\u8F93\u5165&#39;quit&#39; \u9000\u51FA</span>
<span class="token comment"># \uFF1Aquit # \u6B64\u65F6 active \u7684\u503C\u4E3A False \uFF0C\u7A0B\u5E8F\u7ED3\u675F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528-break-\u9000\u51FA\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-break-\u9000\u51FA\u5FAA\u73AF" aria-hidden="true">#</a> \u4F7F\u7528 break \u9000\u51FA\u5FAA\u73AF</h3><p>\u8981\u7ACB\u5373\u9000\u51FA <strong>while</strong> \u5FAA\u73AF\uFF0C\u4E0D\u518D\u8FD0\u884C\u5FAA\u73AF\u4E2D\u4F59\u4E0B\u7684\u4EE3\u7801\uFF0C\u4E5F\u4E0D\u7BA1\u6761\u4EF6\u6D4B\u8BD5\u7684\u7ED3\u679C\u5982\u4F55\uFF0C\u53EF\u4F7F\u7528 <strong>break</strong> \u8BED\u53E5\uFF1B</p><p><strong>break</strong> \u8BED\u53E5\u7528\u4E8E\u63A7\u5236\u7A0B\u5E8F\u6D41\u7A0B\uFF0C\u53EF\u4F7F\u7528\u5B83\u6765\u63A7\u5236\u54EA\u4E9B\u4EE3\u7801\u884C\u5C06\u6267\u884C\uFF0C\u54EA\u4E9B\u4EE3\u7801\u884C\u4E0D\u6267\u884C\uFF1B</p><p>\u4EE5 <strong>while True</strong> \u5F00\u5934\u7684\u5FAA\u73AF\u5C06\u4E0D\u65AD\u8FD0\u884C\uFF0C\u76F4\u5230\u9047\u89C1 <strong>break</strong> \u8BED\u53E5</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    city <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;\\nPlease enter the name of a city you have bisited:&quot;</span> <span class="token operator">+</span>
                 <span class="token string">&quot;\\nEnter &#39;quit&#39; when you are finished.&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> city <span class="token operator">==</span> <span class="token string">&#39;quit&#39;</span> <span class="token punctuation">:</span>
        <span class="token keyword">break</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;I&#39;d love to go to &quot;</span> <span class="token operator">+</span> city<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;!&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># Please enter the name of a city you have bisited:</span>
<span class="token comment"># Enter &#39;quit&#39; when you are finished.shanghai</span>
<span class="token comment"># I&#39;d love to go to Shanghai!</span>

<span class="token comment"># Please enter the name of a city you have bisited:</span>
<span class="token comment"># Enter &#39;quit&#39; when you are finished.quit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4EFB\u4F55\u7684 Python \u5FAA\u73AF\u4E2D\u90FD\u53EF\u4EE5\u4F7F\u7528<strong>break</strong>\u8BED\u53E5</p><h3 id="\u5728\u5FAA\u73AF\u4E2D\u4F7F\u7528-continue-\u8FD4\u56DE\u5230\u5FAA\u73AF\u5F00\u5934" tabindex="-1"><a class="header-anchor" href="#\u5728\u5FAA\u73AF\u4E2D\u4F7F\u7528-continue-\u8FD4\u56DE\u5230\u5FAA\u73AF\u5F00\u5934" aria-hidden="true">#</a> \u5728\u5FAA\u73AF\u4E2D\u4F7F\u7528 continue \u8FD4\u56DE\u5230\u5FAA\u73AF\u5F00\u5934</h3><p>\u8981\u8FD4\u56DE\u5230\u5FAA\u73AF\u5F00\u5934\uFF0C\u5E76\u6839\u636E\u6761\u4EF6\u6D4B\u8BD5\u7ED3\u679C\u51B3\u5B9A\u662F\u5426\u7EE7\u7EED\u6267\u884C\u5FAA\u73AF\uFF0C\u53EF\u4F7F\u7528 <strong>continue</strong> \u8BED\u53E5\uFF1B \u5B83\u4E0D\u50CF <strong>break</strong> \u8BED\u53E5\u90A3\u6837\u4E0D\u518D\u6267\u884C\u4F59\u4E0B\u7684\u4EE3\u7801\u5E76\u9000\u51FA\u6574\u4E2A\u5FAA\u73AF\uFF0C\u800C\u662F\u4E0D\u6267\u884C\u4F59\u4E0B\u7684\u4EE3\u7801\u5E76\u8FD4\u56DE\u5230\u5FAA\u574F\u5F00\u5934\uFF1B</p><p>\u4E00\u4E2A\u4ECE 1 \u6570\u5230 10\uFF0C\u4F46\u53EA\u6253\u5370\u5176\u4E2D\u5947\u6570\u7684\u5FAA\u73AF\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>current_number <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> current_number <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">:</span>
    current_number <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">if</span> current_number <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">continue</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>current_number<span class="token punctuation">)</span>
<span class="token comment"># 1</span>
<span class="token comment"># 3</span>
<span class="token comment"># 5</span>
<span class="token comment"># 7</span>
<span class="token comment"># 9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u907F\u514D\u65E0\u9650\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u907F\u514D\u65E0\u9650\u5FAA\u73AF" aria-hidden="true">#</a> \u907F\u514D\u65E0\u9650\u5FAA\u73AF</h3><p>\u6BCF\u4E2A <strong>while</strong> \u5FAA\u73AF\u90FD\u5FC5\u987B\u6709\u505C\u6B62\u8FD0\u884C\u7684\u9014\u5F84\uFF0C\u8FD9\u6837\u624D\u4E0D\u4F1A\u6CA1\u5B8C\u6CA1\u4E86\u5730\u6267\u884C\u4E0B\u53BB\uFF1B</p><p>\u5BF9\u6BCF\u4E2A <strong>while</strong> \u5FAA\u73AF\u8FDB\u884C\u6D4B\u8BD5\uFF0C\u786E\u4FDD\u5B83\u6309\u9884\u671F\u90A3\u6837\u7ED3\u675F\uFF1B</p><p>\u786E\u8BA4\u7A0B\u5E8F\u81F3\u5C11\u6709\u4E00\u4E2A\u8FD9\u6837\u7684\u5730\u65B9\u80FD\u8BA9\u5FAA\u73AF\u6761\u4EF6\u4E3A <strong>False</strong> \u6216\u8BA9 <strong>break</strong> \u8BED\u53E5\u5F97\u4EE5\u6267\u884C</p><h2 id="\u4F7F\u7528-while-\u5FAA\u73AF\u5904\u7406\u5217\u8868\u548C\u5B57\u5178" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-while-\u5FAA\u73AF\u5904\u7406\u5217\u8868\u548C\u5B57\u5178" aria-hidden="true">#</a> \u4F7F\u7528 while \u5FAA\u73AF\u5904\u7406\u5217\u8868\u548C\u5B57\u5178</h2><p>\u8981\u8BB0\u5F55\u5927\u91CF\u7684\u7528\u6237\u548C\u4FE1\u606F\uFF0C\u9700\u8981\u5728 <strong>while</strong> \u5FAA\u73AF\u4E2D\u4F7F\u7528\u5217\u8868\u548C\u5B57\u5178\uFF1B</p><p>\u8981\u5728\u904D\u5386\u5217\u8868\u7684\u540C\u65F6\u5BF9\u5176\u8FDB\u884C\u4FEE\u6539\uFF0C\u53EF\u4F7F\u7528 <strong>while</strong> \u5FAA\u73AF\uFF1B</p><p>\u901A\u8FC7\u5C06 <strong>while</strong> \u5FAA\u73AF\u540C\u5217\u8868\u548C\u5B57\u5178\u7ED3\u5408\u8D77\u6765\u4F7F\u7528\uFF0C\u53EF\u6536\u96C6\u3001\u5B58\u50A8\u5E76\u7EC4\u7EC7\u5927\u91CF\u8F93\u5165\uFF0C\u4F9B\u4EE5\u540E\u67E5\u770B\u548C\u663E\u793A</p><h3 id="\u5728\u5217\u8868\u4E4B\u95F4\u79FB\u52A8\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u5728\u5217\u8868\u4E4B\u95F4\u79FB\u52A8\u5143\u7D20" aria-hidden="true">#</a> \u5728\u5217\u8868\u4E4B\u95F4\u79FB\u52A8\u5143\u7D20</h3><p>\u4F7F\u7528 <strong>while</strong> \u5FAA\u73AF\u53EF\u4EE5\u5C06\u4E00\u4E2A\u5217\u8868\u7684\u503C\u79FB\u52A8\u5230\u53E6\u4E00\u4E2A\u5217\u8868\u4E2D\uFF0C\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u9996\u5148\uFF0C\u521B\u5EFA\u4E00\u4E2A\u5F85\u9A8C\u8BC1\u7684\u7528\u6237\u5217\u8868\u548C\u4E00\u4E2A\u7528\u4E8E\u5B58\u50A8\u5DF2\u9A8C\u8BC1\u7528\u6237\u7684\u7A7A\u5217\u8868</span>
unconfirmed_users <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;alice&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;brian&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;candace&#39;</span><span class="token punctuation">]</span>
confirmed_users <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token comment"># \u9A8C\u8BC1\u6BCF\u4E2A\u7528\u6237\uFF0C\u76F4\u5230\u5217\u8868\u4E3A\u7A7A\u81EA\u52A8\u7ED3\u675F\u5FAA\u73AF</span>
<span class="token comment"># \u5C06\u6BCF\u4E2A\u7ECF\u8FC7\u9A8C\u8BC1\u7684\u5217\u8868\u90FD\u79FB\u5230\u5DF2\u9A8C\u8BC1\u7528\u6237\u5217\u8868\u4E2D</span>
<span class="token keyword">while</span> unconfirmed_users<span class="token punctuation">:</span>
    current_user <span class="token operator">=</span> unconfirmed_users<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Verifying user: &quot;</span> <span class="token operator">+</span> current_user<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    confirmed_users<span class="token punctuation">.</span>append<span class="token punctuation">(</span>current_user<span class="token punctuation">)</span>
<span class="token comment"># \u663E\u793A\u6240\u6709\u5DF2\u9A8C\u8BC1\u7528\u6237</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\\nThe following users have been confirmed:&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> confirmed_user <span class="token keyword">in</span> confirmed_users<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>confirmed_user<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># Verifying user: Candace</span>
<span class="token comment"># Verifying user: Brian</span>
<span class="token comment"># Verifying user: Alice</span>

<span class="token comment"># The following users have been confirmed:</span>
<span class="token comment"># Candace</span>
<span class="token comment"># Brian</span>
<span class="token comment"># Alice</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5220\u9664\u5305\u542B\u7279\u5B9A\u503C\u7684\u6240\u6709\u5217\u8868\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u5305\u542B\u7279\u5B9A\u503C\u7684\u6240\u6709\u5217\u8868\u5143\u7D20" aria-hidden="true">#</a> \u5220\u9664\u5305\u542B\u7279\u5B9A\u503C\u7684\u6240\u6709\u5217\u8868\u5143\u7D20</h3><p>\u53EF\u4EE5\u4F7F\u7528 <strong>while</strong> \u5FAA\u574F\u904D\u5386\u5217\u8868\u5E76\u5220\u9664\u5217\u8868\u4E2D\u6240\u6709\u6307\u5B9A\u7684\u503C\uFF0C\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>pets <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;dog&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;cat&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;dog&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;goldfish&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;cat&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;cat&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;rabbit&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>pets<span class="token punctuation">)</span>
<span class="token keyword">while</span> <span class="token string">&#39;cat&#39;</span> <span class="token keyword">in</span> pets<span class="token punctuation">:</span>
    pets<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token string">&#39;cat&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>pets<span class="token punctuation">)</span>
<span class="token comment"># [&#39;dog&#39;, &#39;cat&#39;, &#39;dog&#39;, &#39;goldfish&#39;, &#39;cat&#39;, &#39;cat&#39;, &#39;rabbit&#39;]</span>
<span class="token comment"># [&#39;dog&#39;, &#39;dog&#39;, &#39;goldfish&#39;, &#39;rabbit&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u7528\u6237\u8F93\u5165\u6765\u586B\u5145\u5B57\u5178" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u7528\u6237\u8F93\u5165\u6765\u586B\u5145\u5B57\u5178" aria-hidden="true">#</a> \u4F7F\u7528\u7528\u6237\u8F93\u5165\u6765\u586B\u5145\u5B57\u5178</h3><p>\u53EF\u4F7F\u7528 <strong>while</strong> \u5FAA\u73AF\u63D0\u793A\u7528\u6237\u8F93\u5165\u4EFB\u610F\u6570\u91CF\u7684\u4FE1\u606F\uFF0C\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>esponses <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">#\u8BBE\u7F6E\u4E00\u4E2A\u6807\u5FD7\uFF0C\u6307\u51FA\u8C03\u67E5\u662F\u5426\u7EE7\u7EED</span>
polling_active <span class="token operator">=</span> <span class="token boolean">True</span>
<span class="token keyword">while</span> polling_active<span class="token punctuation">:</span>
<span class="token comment">#\u63D0\u793A\u8F93\u5165\u88AB\u8C03\u67E5\u8005\u7684\u540D\u5B57\u548C\u56DE\u7B54</span>
    name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;\\nWhat is your name? &quot;</span><span class="token punctuation">)</span>
    response <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Which mountain would you like to climb someday? &quot;</span><span class="token punctuation">)</span>
<span class="token comment">#\u5C06\u7B54\u6848\u5B58\u50A8\u5728\u5B57\u5178\u4E2D</span>
    responses<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> response
<span class="token comment">#\u770B\u770B\u662F\u5426\u8FD8\u6709\u4EBA\u8981\u53C2\u4E0E\u8C03\u67E5</span>
    repeat <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Would you like to let another person respond?(yes/no)&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> repeat <span class="token operator">==</span> <span class="token string">&#39;no&#39;</span><span class="token punctuation">:</span>
        polling_active <span class="token operator">=</span> <span class="token boolean">False</span>
<span class="token comment">#\u8C03\u67E5\u7ED3\u675F\uFF0C\u663E\u793A\u7ED3\u679C</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\\n--- Poll Results ---&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> name<span class="token punctuation">,</span>response <span class="token keyword">in</span> responses<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot; would like to climb &quot;</span> <span class="token operator">+</span> response <span class="token operator">+</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># What is your name? xiaoming</span>
<span class="token comment"># Which mountain would you like to climb someday? huangshan</span>
<span class="token comment"># Would you like to let another person respond?(yes/no)no</span>

<span class="token comment"># --- Poll Results ---</span>
<span class="token comment"># xiaoming would like to climb huangshan.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,57),o=[p];function i(l,c){return s(),a("div",null,o)}var u=n(t,[["render",i],["__file","04_input_while.html.vue"]]);export{u as default};
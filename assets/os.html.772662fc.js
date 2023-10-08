import{_ as t,o as e,c as o,a as n,b as s,d as p,e as c,r as i}from"./app.907eeeb1.js";const l={},u=n("h1",{id:"os-\u64CD\u4F5C\u7CFB\u7EDF\u6A21\u5757\u7684\u4F7F\u7528",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#os-\u64CD\u4F5C\u7CFB\u7EDF\u6A21\u5757\u7684\u4F7F\u7528","aria-hidden":"true"},"#"),s(" os\xA0\u64CD\u4F5C\u7CFB\u7EDF\u6A21\u5757\u7684\u4F7F\u7528")],-1),d=n("p",null,[n("strong",null,"os"),s("\xA0\u6A21\u5757\u63D0\u4F9B\u4E86\u4E0E\u64CD\u4F5C\u7CFB\u7EDF\u76F8\u5173\u7684\u5B9E\u7528\u65B9\u6CD5\u548C\u5C5E\u6027\u3002")],-1),r={href:"http://nodejs.cn/api/os.html",target:"_blank",rel:"noopener noreferrer"},m=c(`<p>\u90E8\u5206\u65B9\u6CD5\uFF1A</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td><strong>os.platform()</strong></td><td>\u8FD4\u56DE\u6807\u8BC6\u64CD\u4F5C\u7CFB\u7EDF\u5E73\u53F0\u7684\u5B57\u7B26\u4E32</td></tr><tr><td><strong>os.arch()</strong></td><td>\u8FD4\u56DE\xA0CUP\xA0\u67B6\u6784\u4FE1\u606F</td></tr><tr><td><strong>os.cpus()</strong></td><td>\u8FD4\u56DE\u5305\u542B\xA0cpu\xA0\u6BCF\u4E00\u6838\u7684\u6570\u7EC4</td></tr><tr><td><strong>os.freemem()</strong></td><td>\u4EE5\u6574\u6570\u7684\u5F62\u5F0F\u8FD4\u56DE\u5F53\u524D\u7A7A\u95F2\u7684\u7CFB\u7EDF\u5185\u5B58\u91CF\uFF08\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\uFF09</td></tr><tr><td><strong>os.totalmem()</strong></td><td>\u8FD4\u56DE\u7CFB\u7EDF\u5185\u5B58\u603B\u91CF\uFF08\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\uFF09</td></tr><tr><td><strong>os.homedir()</strong></td><td>\u8FD4\u56DE\u7528\u6237\u7684\u4E3B\u76EE\u5F55\u7684\u5B57\u7B26\u4E32\u8DEF\u5F84</td></tr><tr><td><strong>os.uptime()</strong></td><td>\u8FD4\u56DE\u7CFB\u7EDF\u7684\u8FD0\u884C\u65F6\u95F4\uFF08\u4EE5\u79D2\u4E3A\u5355\u4F4D\uFF09</td></tr></tbody></table><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// os \u64CD\u4F5C\u7CFB\u7EDF\u6A21\u5757\u7684\u4F7F\u7528</span>
<span class="token comment">// API : http://nodejs.cn/api/os.html#os_os</span>
<span class="token comment">// os \u6A21\u5757\u63D0\u4F9B\u4E86\u4E0E\u64CD\u4F5C\u7CFB\u7EDF\u76F8\u5173\u7684\u5B9E\u7528\u65B9\u6CD5\u548C\u5C5E\u6027</span>

<span class="token comment">// \u5F15\u5165 os \u64CD\u4F5C\u7CFB\u7EDF\u6A21\u5757</span>
<span class="token keyword">const</span> os <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;os&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// os.platform()    \u8FD4\u56DE\u6807\u8BC6\u64CD\u4F5C\u7CFB\u7EDF\u5E73\u53F0\u7684\u5B57\u7B26\u4E32</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">platform</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// win32</span>


<span class="token comment">// os.arch()    \u8FD4\u56DE CUP \u67B6\u6784\u4FE1\u606F</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">arch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// x64</span>


<span class="token comment">// os.cpus()    \u8FD4\u56DE\u5305\u542B cpu \u6BCF\u4E00\u6838\u7684\u6570\u7EC4</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">cpus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* 
[
    {
        model: &#39;Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz&#39;,
        speed: 2712,
        times: { user: 800593, nice: 0, sys: 1293796, idle: 18595703, irq: 99625 }
    },
    {
        model: &#39;Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz&#39;,
        speed: 2712,
        times: { user: 759781, nice: 0, sys: 1032265, idle: 18897562, irq: 16796 }
    },
    {
        model: &#39;Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz&#39;,
        speed: 2712,
        times: { user: 898875, nice: 0, sys: 1678125, idle: 18112609, irq: 18000 }
    },
    {
        model: &#39;Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz&#39;,
        speed: 2712,
        times: { user: 922062, nice: 0, sys: 1327328, idle: 18440218, irq: 11062 }
    }
] */</span>


<span class="token comment">// os.freemem()     \u4EE5\u6574\u6570\u7684\u5F62\u5F0F\u8FD4\u56DE\u5F53\u524D\u7A7A\u95F2\u7684\u7CFB\u7EDF\u5185\u5B58\u91CF\uFF08\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\uFF09</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">freemem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// 10890670080\uFF08\u7EA6\u4E3A 10 \u4E2A G\uFF09</span>


<span class="token comment">// os.totalmem()       \u8FD4\u56DE\u7CFB\u7EDF\u5185\u5B58\u603B\u91CF\uFF08\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\uFF09</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">totalmem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 17075154944\uFF08\u7EA6\u4E3A 16 \u4E2A G\uFF09</span>


<span class="token comment">// os.homedir()     \u8FD4\u56DE\u7528\u6237\u7684\u4E3B\u76EE\u5F55\u7684\u5B57\u7B26\u4E32\u8DEF\u5F84</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">homedir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// C:\\Users\\Administrator</span>


<span class="token comment">// os.uptime()      \u8FD4\u56DE\u7CFB\u7EDF\u7684\u8FD0\u884C\u65F6\u95F4\uFF08\u4EE5\u79D2\u4E3A\u5355\u4F4D\uFF09</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">uptime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 26702</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u7CFB\u7EDF\u5F53\u524D\u5DF2\u7ECF\u8FD0\u884C\u4E86 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">uptime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">60</span> <span class="token operator">/</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> \u4E2A\u5C0F\u65F6</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u7CFB\u7EDF\u5F53\u524D\u5DF2\u7ECF\u8FD0\u884C\u4E86 7.5 \u4E2A\u5C0F\u65F6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function v(k,b){const a=i("ExternalLinkIcon");return e(),o("div",null,[u,d,n("p",null,[s("API: "),n("a",r,[s("http://nodejs.cn/api/os.html"),p(a)])]),m])}var g=t(l,[["render",v],["__file","os.html.vue"]]);export{g as default};

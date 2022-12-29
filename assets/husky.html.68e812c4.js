import{_ as o,o as t,c,a as e,b as s,d as a,e as i,r as d}from"./app.f824c78a.js";const r={},l=e("h1",{id:"\u{1FA9D}-husky-\u4E00\u4E2A-git-hooks-\u5E93",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u{1FA9D}-husky-\u4E00\u4E2A-git-hooks-\u5E93","aria-hidden":"true"},"#"),s(" \u{1FA9D} husky \u4E00\u4E2A Git hooks \u5E93")],-1),h=e("p",null,"husky \u65E8\u5728\u4E8E\u5728 Node \u4E2D\u66F4\u597D\u7684\u4F7F\u7528 Git hooks",-1),u={href:"https://typicode.github.io/husky/#/",target:"_blank",rel:"noopener noreferrer"},p=i(`<p>\u5217\u4E3E\u4E00\u4E2A\u53EF\u4EE5\u7528\u5230 husky \u7684\u573A\u666F\uFF1A</p><ul><li>\u6211\u4EEC\u60F3\u8981\u5728 commit \u4EE3\u7801\u4E4B\u524D\uFF0C\u5148\u8D70\u4E00\u904D\u6D4B\u8BD5\u7528\u4F8B\uFF0C\u8FD0\u884C\u6D4B\u8BD5\u7528\u4F8B\u7684 script \u662F <code>npm run test</code>\u3002\u90A3\u6211\u4EEC\u5C31\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E husky\uFF0C\u5B9E\u73B0\u5728 commit \u524D\u81EA\u52A8\u8FD0\u884C <code>npm run test</code> \u811A\u672C\u3002</li></ul><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># npm</span>
<span class="token function">npm</span> <span class="token function">install</span> husky --save-dev

<span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> husky <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><h3 id="\u521D\u59CB\u5316-husky" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316-husky" aria-hidden="true">#</a> \u521D\u59CB\u5316 husky</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npx husky <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u521D\u59CB\u5316\u540E\u4F1A\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u751F\u6210\u4E00\u4E2A <code>.husky</code> \u7684\u76EE\u5F55\uFF0C\u8FD9\u662F husky \u7684\u5DE5\u4F5C\u76EE\u5F55.</p><h3 id="\u6DFB\u52A0\u4E00\u4E2A-hook" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u4E00\u4E2A-hook" aria-hidden="true">#</a> \u6DFB\u52A0\u4E00\u4E2A hook</h3>`,9),m={href:"https://git-scm.com/docs/githooks",target:"_blank",rel:"noopener noreferrer"},k=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6DFB\u52A0 pre-commit commit \u524D\u7F6E\u94A9\u5B50\uFF0C\u5728 commit \u65F6\uFF0C\u5148\u8FD0\u884C npm run test \u811A\u672C</span>
npx husky <span class="token function">add</span> .husky/pre-commit <span class="token string">&quot;npm run test&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6D4B\u8BD5-hook" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5-hook" aria-hidden="true">#</a> \u6D4B\u8BD5 hook</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6DFB\u52A0\u4FEE\u6539</span>
<span class="token function">git</span> <span class="token function">add</span> .husky/pre-commit

<span class="token comment"># \u63D0\u4EA4\u4FEE\u6539</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;Keep calm and commit&quot;</span>

<span class="token comment"># npm run test \u5C06\u4F1A\u8FD0\u884C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function v(b,g){const n=d("ExternalLinkIcon");return t(),c("div",null,[l,h,e("blockquote",null,[e("p",null,[s("\u5B98\u65B9\u6587\u6863: "),e("a",u,[s("https://typicode.github.io/husky/#/"),a(n)])])]),p,e("p",null,[s("husky \u652F\u6301\u6240\u6709\u7684 "),e("a",m,[s("Git hooks"),a(n)])]),k])}var f=o(r,[["render",v],["__file","husky.html.vue"]]);export{f as default};
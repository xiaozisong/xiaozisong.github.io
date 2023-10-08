import{_ as s,o as n,c as a,e}from"./app.1fa09df8.js";const o={},t=e(`<h1 id="react-router-dom" tabindex="-1"><a class="header-anchor" href="#react-router-dom" aria-hidden="true">#</a> react-router-dom</h1><p><code>react-router-dom</code> \u662F <code>react</code> \u7684\u8DEF\u7531\u6A21\u5757\uFF0C\u672C\u6587\u4ECB\u7ECD\u4E86 <code>react-router-dom</code> \u7684\u57FA\u672C\u4F7F\u7528\u65B9\u6CD5\u3002</p><p>\u57FA\u672C\u4F7F\u7528\u6B65\u9AA4\uFF1A</p><ol><li>\u5B89\u88C5\uFF1A<code>yarn add react-router-dom</code></li><li>\u5728<code>src/index.js</code>\u5F15\u5165\uFF1A<code>import { Route, BrowserRouter } from &#39;react-router-dom&#39;</code></li><li>\u4F7F\u7528\uFF1A\u7528\u5305\u88F9\u9700\u8981\u4F7F\u7528\u8DEF\u7531\u7684\u90E8\u5206\uFF08\u4F8B\u5982\uFF1A<code>render</code> \u51FD\u6570\u8FD4\u56DE\u7684\u6807\u7B7E\uFF09</li></ol><h2 id="browserrouter-\u7EC4\u4EF6\u548C-route-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#browserrouter-\u7EC4\u4EF6\u548C-route-\u7EC4\u4EF6" aria-hidden="true">#</a> BrowserRouter \u7EC4\u4EF6\u548C Route \u7EC4\u4EF6</h2><p><code>BrowserRouter</code> \u548C <code>Route</code> \u7EC4\u4EF6\u662F <code>react-router-dom</code> \u7684\u57FA\u672C\u7EC4\u4EF6</p><ul><li><code>BrowserRouter</code>\xA0 \u7EC4\u4EF6\u5305\u88F9\u9700\u8981\u4F7F\u7528\u8DEF\u7531\u7684\u90E8\u5206</li><li><code>Route</code>\xA0 \u7EC4\u4EF6\u7528\u4E8E\u5C06\u8DEF\u5F84\u4E0E\u7EC4\u4EF6\u76F8\u5173\u8054</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/index.js</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> Navbar <span class="token keyword">from</span> <span class="token string">&#39;./components/Navbar&#39;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;./components/Home&#39;</span>
<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&#39;./components/About&#39;</span>
<span class="token keyword">import</span> Contact <span class="token keyword">from</span> <span class="token string">&#39;./components/Contact&#39;</span>
<span class="token comment">// \u5F15\u5165react\u8DEF\u7531</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Route<span class="token punctuation">,</span> BrowserRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
 <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
   <span class="token comment">// BrowserRouter \u7EC4\u4EF6\u5305\u88F9\u9700\u8981\u4F7F\u7528\u8DEF\u7531\u7684\u90E8\u5206\uFF0CRoute \u7EC4\u4EF6\u7528\u4E8E\u5C06\u8DEF\u5F84\u4E0E\u7EC4\u4EF6\u76F8\u5173\u8054</span>
   <span class="token operator">&lt;</span>BrowserRouter<span class="token operator">&gt;</span>
                    
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&#39;App&#39;</span><span class="token operator">&gt;</span>
                         
     <span class="token operator">&lt;</span>Navbar <span class="token operator">/</span><span class="token operator">&gt;</span>
                         
     <span class="token punctuation">{</span><span class="token comment">/* exact \u5F00\u542F\u7CBE\u51C6\u5339\u914D\uFF0C\u6839\u8DEF\u5F84\u5FC5\u987B\u5F00\u542F\u6B64\u914D\u7F6E\uFF0C\u5426\u5219\u53EA\u8981\u5339\u914D\u5230\u5E26\u6709 / \u7684\u8DEF\u7531\u90FD\u4F1A\u663E\u793A\u51FA\u6839\u8DEF\u5F84\u9875\u9762 */</span><span class="token punctuation">}</span>
                         
     <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">&#39;/&#39;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
                         
     <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&#39;/about&#39;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
                         
     <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&#39;/contact&#39;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Contact<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
                     
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                
   <span class="token operator">&lt;</span><span class="token operator">/</span>BrowserRouter<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u58F0\u660E\u5F0F\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u5F0F\u5BFC\u822A" aria-hidden="true">#</a> \u58F0\u660E\u5F0F\u5BFC\u822A</h2><p><code>Link</code> \u548C <code>NavLink</code> \u5BFC\u822A\u7EC4\u4EF6:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/pages/Navbar.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token comment">// \u5F15\u5165react-router-dom \u8DEF\u7531\u8DF3\u8F6C\u7EC4\u4EF6 Link</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Link<span class="token punctuation">,</span> NavLink <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Navbar</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>nav className<span class="token operator">=</span><span class="token string">&#39;nav-wrapper red darken-3&#39;</span><span class="token operator">&gt;</span>
               
   <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&#39;container&#39;</span><span class="token operator">&gt;</span>
                    
    <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&#39;/&#39;</span> className<span class="token operator">=</span><span class="token string">&#39;brand-logo&#39;</span><span class="token operator">&gt;</span>
     React\u8DEF\u7531
    <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
                    
    <span class="token operator">&lt;</span>ul className<span class="token operator">=</span><span class="token string">&#39;right&#39;</span><span class="token operator">&gt;</span>
                         
     <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&#39;/&#39;</span><span class="token operator">&gt;</span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
                         
     <span class="token punctuation">{</span><span class="token comment">/* Link \u7EC4\u4EF6\u8DF3\u8F6C\u65F6\u5C31\u53EA\u662F\u8DF3\u8F6C\u9875\u9762\uFF0CNavLink \u8DF3\u8F6C\u65F6\u4F1A\u5728\u6E32\u67D3\u51FA\u7684 a \u6807\u7B7E\u4E0A\u52A0\u4E0A active \u7684 className */</span><span class="token punctuation">}</span>
                         
     <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>NavLink to<span class="token operator">=</span><span class="token string">&#39;/about&#39;</span><span class="token operator">&gt;</span>About<span class="token operator">&lt;</span><span class="token operator">/</span>NavLink<span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
                         
     <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&#39;/contact&#39;</span><span class="token operator">&gt;</span>Contact<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
                     
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
                
   <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
           
  <span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">&gt;</span>
 <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Navbar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7F16\u7A0B\u5F0F\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u7F16\u7A0B\u5F0F\u5BFC\u822A" aria-hidden="true">#</a> \u7F16\u7A0B\u5F0F\u5BFC\u822A</h2><p>\u88AB <code>&lt;BrowserRouter&gt;&lt;/BrowserRouter&gt;</code> \u5305\u88F9\u7684\u7EC4\u4EF6\u7684 <code>props</code> \u4F1A\u9ED8\u8BA4\u4F20\u5165 <code>history</code>\u3001<code>location</code> \u548C <code>match</code> \u8FD9\u4E09\u4E2A\u5BF9\u8C61\uFF0C<code>history</code> \u5BF9\u8C61\u7C7B\u4F3C <code>bom</code>(\u6D4F\u89C8\u5668\u5BF9\u8C61\u6A21\u578B)\u4E2D\u7684 <code>history</code> \u5BF9\u8C61\uFF1B</p><ul><li><code>history</code> \u5BF9\u8C61\u4E2D\u5305\u542B\u4E00\u4E9B\u7528\u4E8E\u64CD\u4F5C\u5730\u5740\u680F <code>url</code> \u7684 <code>api</code>\uFF0C\u5E38\u7528\u7684\u6709\uFF1A<code>push</code>\u3001<code>replace</code>\u3001<code>go</code></li><li><code>push</code> \u7528\u4E8E\u8DF3\u8F6C\u9875\u9762\uFF0C\u4F1A\u5728\u9875\u9762\u6808\u5C3E\u90E8\u65B0\u589E\u4E00\u6761\u8BB0\u5F55</li><li><code>replace</code> \u7528\u4E8E\u91CD\u5B9A\u5411\u9875\u9762\uFF0C\u4F1A\u5C06\u5F53\u524D\u9875\u9762\u4ECE\u9875\u9762\u6808\u4E2D\u6E05\u9664\uFF0C\u4E0D\u4F1A\u7559\u4E0B\u75D5\u8FF9 <code>go</code> \u65B9\u6CD5\u63A5\u53D7\u4E00\u4E2A\u6570\u5B57\u4F5C\u4E3A\u53C2\u6570\uFF0C\u4F8B\u5982 <code>go(-1)</code> \u8868\u793A\u8FD4\u56DE\u4E0A\u4E00\u6761\u8DEF\u7531\u8BB0\u5F55</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/pages/Contact.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Contact</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
 <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// push \u548C replace \u7684\u533A\u522B\u662F\uFF1A</span>
  <span class="token comment">// push \u4F1A\u5728\u9875\u9762\u6808\u5C3E\u90E8\u6DFB\u52A0\u65B0\u7684\u9875\u9762\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6D4F\u89C8\u5668\u7684\u8FD4\u56DE\u6309\u94AE\u56DE\u5230\u4E4B\u524D\u7684\u9875\u9762</span>
  <span class="token comment">// replace \u4F1A\u4ECE\u9875\u9762\u6808\u4E2D\u5220\u9664\u5F53\u524D\u7684\u9875\u9762\uFF0C\u518D\u8DF3\u8F6C\u5230\u65B0\u7684\u9875\u9762</span>
  props<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u8DF3\u8F6C</span>
  props<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u91CD\u5B9A\u5411</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
 <span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&#39;container&#39;</span><span class="token operator">&gt;</span>
               <span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span>Contact<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
           
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
 <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Contact
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0D\u88AB <code>&lt;BrowserRouter&gt;&lt;/BrowserRouter&gt;</code> \u5305\u88F9\u7684\u7EC4\u4EF6\u7684 <code>props</code> \u4E2D\u5C31\u4E0D\u4F1A\u6709 <code>history</code> \u8DEF\u7531\u5BF9\u8C61\uFF0C\u8981\u60F3\u8BA9\u8FD9\u79CD\u7EC4\u4EF6\u4E2D\u62E5\u6709\u8DEF\u7531\u5BF9\u8C61\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528 <code>react-router-dom</code> \u4E2D\u7684 <code>withRouter</code> \u9AD8\u9636\u7EC4\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//  src/pages/Navbar.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token comment">// \u5F15\u5165react-router-dom \u8DEF\u7531\u8DF3\u8F6C\u7EC4\u4EF6 Link</span>
<span class="token comment">// \u5F15\u5165 withRouter \u9AD8\u9636\u7EC4\u4EF6\u5E76\u5C06\u7EC4\u4EF6\u4F5C\u4E3A\u53C2\u6570\u5BFC\u51FA\u540E\u6B64\u7EC4\u4EF6\u624D\u80FD\u4F7F\u7528 history api</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Link<span class="token punctuation">,</span> NavLink<span class="token punctuation">,</span> withRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Navbar</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> history <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>history<span class="token punctuation">)</span>
 <span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>nav className<span class="token operator">=</span><span class="token string">&#39;nav-wrapper red darken-3&#39;</span><span class="token operator">&gt;</span>
               
   <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&#39;container&#39;</span><span class="token operator">&gt;</span>
                    
    <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&#39;/&#39;</span> className<span class="token operator">=</span><span class="token string">&#39;brand-logo&#39;</span><span class="token operator">&gt;</span>
     React\u8DEF\u7531
    <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
                    
    <span class="token operator">&lt;</span>ul className<span class="token operator">=</span><span class="token string">&#39;right&#39;</span><span class="token operator">&gt;</span>
                   
     <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&#39;/&#39;</span><span class="token operator">&gt;</span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>              
     <span class="token punctuation">{</span><span class="token comment">/* Link \u7EC4\u4EF6\u8DF3\u8F6C\u65F6\u5C31\u53EA\u662F\u8DF3\u8F6C\u9875\u9762\uFF0CNavLink \u8DF3\u8F6C\u65F6\u4F1A\u5728\u6E32\u67D3\u51FA\u7684 a \u6807\u7B7E\u4E0A\u52A0\u4E0A active \u7684 className */</span><span class="token punctuation">}</span>
                    
     <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>NavLink to<span class="token operator">=</span><span class="token string">&#39;/about&#39;</span><span class="token operator">&gt;</span>About<span class="token operator">&lt;</span><span class="token operator">/</span>NavLink<span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
               
     <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&#39;/contact&#39;</span><span class="token operator">&gt;</span>Contact<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
                     
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
                
   <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
           
  <span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">&gt;</span>
 <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528 withRouter \u9AD8\u9636\u7EC4\u4EF6\u540E\u6B64\u7EC4\u4EF6\u5C06\u53EF\u4EE5\u4F7F\u7528 history api</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">withRouter</span><span class="token punctuation">(</span>Navbar<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8DEF\u7531\u4F20\u53C2" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u4F20\u53C2" aria-hidden="true">#</a> \u8DEF\u7531\u4F20\u53C2</h2><p>\u58F0\u660E\u8DEF\u7531\u65F6\u4F7F\u7528 <code>:xxx</code> \u7684\u65B9\u5F0F\uFF0C\u7136\u540E\u5728\u7EC4\u4EF6\u4E2D\u901A\u8FC7 <code>props.match.params.xxx</code> \u6765\u83B7\u53D6</p><p>\u58F0\u660E\u8DEF\u7531\u53C2\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/index.js</span>
<span class="token comment">// BrowserRouter \u7EC4\u4EF6\u5305\u88F9\u9700\u8981\u4F7F\u7528\u8DEF\u7531\u7684\u90E8\u5206\uFF0CRoute \u7EC4\u4EF6\u7528\u4E8E\u5C06\u8DEF\u5F84\u4E0E\u7EC4\u4EF6\u76F8\u5173\u8054</span>
<span class="token operator">&lt;</span>BrowserRouter<span class="token operator">&gt;</span>
         
 <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&#39;App&#39;</span><span class="token operator">&gt;</span>
              
  <span class="token operator">&lt;</span>Navbar <span class="token operator">/</span><span class="token operator">&gt;</span>
              <span class="token punctuation">{</span><span class="token comment">/* \u88AB Switch \u5305\u88F9\u7684\u8DEF\u7531\u53EA\u4F1A\u6E32\u67D3\u7B2C\u4E00\u4E2A\u5339\u914D\u5230\u7684\u8DEF\u5F84 */</span><span class="token punctuation">}</span>
              <span class="token operator">&lt;</span>Switch<span class="token operator">&gt;</span>
                   
   <span class="token punctuation">{</span><span class="token comment">/* exact \u5F00\u542F\u7CBE\u51C6\u5339\u914D\uFF0C\u6839\u8DEF\u5F84\u5FC5\u987B\u5F00\u542F\u6B64\u914D\u7F6E\uFF0C\u5426\u5219\u53EA\u8981\u5339\u914D\u5230\u5E26\u6709 / \u7684\u8DEF\u7531\u90FD\u4F1A\u663E\u793A\u51FA\u6839\u8DEF\u5F84\u9875\u9762 */</span><span class="token punctuation">}</span>
                   
   <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">&#39;/&#39;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
                   
   <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&#39;/about&#39;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
                   
   <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&#39;/contact&#39;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Contact<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
   <span class="token punctuation">{</span><span class="token comment">/* id \u8868\u793A\u8DEF\u7531\u53C2\u6570 */</span><span class="token punctuation">}</span>
                   
   <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&#39;/:id&#39;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>PostDetail<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
               
  <span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token operator">&gt;</span>
          
 <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>BrowserRouter<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u83B7\u53D6\u8DEF\u7531\u53C2\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/pages/PostDetail.js</span>
<span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> match <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props
    <span class="token comment">// \u4ECE match \u5BF9\u8C61\u4E2D\u83B7\u53D6\u8DEF\u7531\u53C2\u6570</span>
    match<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id<span class="token operator">:</span> match<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;http://jsonplaceholder.typicode.com/posts/&#39;</span> <span class="token operator">+</span> match<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span>data <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> post<span class="token operator">:</span> res<span class="token punctuation">.</span>data <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),p=[t];function c(l,r){return n(),a("div",null,p)}var d=s(o,[["render",c],["__file","react_router_dom.html.vue"]]);export{d as default};

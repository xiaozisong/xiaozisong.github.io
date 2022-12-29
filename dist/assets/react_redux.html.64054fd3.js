import{_ as n,o as s,c as a,e as t}from"./app.5c33355f.js";const p={},e=t(`<h1 id="react-redux" tabindex="-1"><a class="header-anchor" href="#react-redux" aria-hidden="true">#</a> react-redux</h1><p><code>react-redux</code> \u662F\u4E00\u4E2A\u7528\u4E8E\u8FDE\u63A5 <code>React</code> \u548C <code>Redux</code> \u7684 <code>npm</code> \u6A21\u5757\uFF0C\u672C\u6587\u4ECB\u7ECD\u4E86 <code>react-redux</code> \u7684\u57FA\u672C\u4F7F\u7528\u65B9\u6CD5\u3002</p><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h2><p><code>react-redux</code> \u7528\u4E8E\u5C06 <code>React App</code> \u548C <code>Redux</code> \u76F8\u8FDE\u63A5\uFF0C\u4EE5\u4E0B\u662F\u8FDE\u63A5\u6B65\u9AA4\uFF1A</p><ol><li>\u5728 <code>index.js</code> \u4E2D\u5F15\u5165 <code>react-redux</code> \u4E2D\u7684 <code>Provider</code> \u7EC4\u4EF6\uFF0C\u4F7F\u7528\u6B64\u7EC4\u4EF6\u5305\u88F9 <code>App</code> \u7EC4\u4EF6\uFF0C\u5E76\u4F20\u5165 <code>redux store</code> \u5B9E\u4F8B\uFF1A</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/index.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./index.css&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span>
<span class="token comment">// react-redux \u4E2D\u7684 Provider \u7EC4\u4EF6\u7528\u4E8E\u5C06 App \u4E0E Redux \u76F8\u5173\u8054</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>
<span class="token comment">// \u5F15\u5165 store</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
 <span class="token operator">&lt;</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>Provider store<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">&gt;</span><span class="token punctuation">,</span>
 document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u7EC4\u4EF6\u4E2D\u5F15\u5165 <code>react-redux</code> \u4E2D\u7684 <code>connect</code> \u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u5177\u4F53\u7EC6\u8282\u770B\u4EE3\u7801\uFF1A</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>
<span class="token comment">// \u5F15\u5165 react-redux \u4E2D\u7684 connect \u7528\u4E8E\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528 redux</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
 <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6B64\u65F6 props \u4E2D\u7684 posts \u662F\u7531 redux -&gt; store -&gt; state \u5F97\u6765\u7684</span>
  <span class="token comment">// \u9664\u6B64\u4E4B\u5916\uFF0Cprops \u5BF9\u8C61\u4E2D\u8FD8\u4F1A\u5F97\u5230\u4E00\u4E2A dispatch \u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u7528\u4E8E\u66F4\u65B0 store \u4E2D\u7684 state</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> posts <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props
  <span class="token keyword">const</span> postList <span class="token operator">=</span> posts<span class="token punctuation">.</span>length <span class="token operator">?</span> <span class="token punctuation">(</span>
   posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&#39;col&#39;</span> key<span class="token operator">=</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&#39;card red darken-1 white-text&#39;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&#39;card-content&#39;</span><span class="token operator">&gt;</span>
       <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>post<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">&#39;card-title white-text&#39;</span><span class="token operator">&gt;</span>
         <span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
       <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
       <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>body<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
   <span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
   <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&#39;center&#39;</span><span class="token operator">&gt;</span>\u6CA1\u6709\u5E16\u5B50<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
   <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&#39;container&#39;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&#39;row&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>postList<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8BE5\u65B9\u6CD5\u4F5C\u4E3A connect \u65B9\u6CD5\u7684\u53C2\u6570\u4F20\u5165\uFF0C\u7136\u540E\u8BE5\u65B9\u6CD5\u7684\u53C2\u6570\u5C06\u4F1A\u63A5\u6536\u5230 store \u4E2D\u7684 state</span>
<span class="token comment">// \u6700\u540E\u8BE5\u65B9\u6CD5\u8981\u5C06\u9700\u8981\u7684\u6570\u636E\u8FD4\u56DE\uFF0C\u8FD4\u56DE\u540E\u5C06\u4F1A\u53D8\u6210\u7EC4\u4EF6\u7684 props \u88AB\u7EC4\u4EF6\u6240\u63A5\u6536</span>
<span class="token comment">// state \u662F store \u4E2D\u7684 state</span>
<span class="token comment">// ownProps \u662F\u5F53\u524D\u7EC4\u4EF6\u7684 props</span>
<span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> ownProps</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">posts</span><span class="token operator">:</span> state<span class="token punctuation">.</span>posts
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// connect \u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u5FC5\u987B\u5C06\u7EC4\u4EF6\u4F5C\u4E3A\u9AD8\u9636\u7EC4\u4EF6\u7684\u53C2\u6570\u4F20\u5165\u540E\u518D\u5BFC\u51FA</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>Home<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528-dispatch-\u66F4\u65B0-state-\u7684\u4E24\u79CD\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-dispatch-\u66F4\u65B0-state-\u7684\u4E24\u79CD\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528 dispatch \u66F4\u65B0 state \u7684\u4E24\u79CD\u65B9\u6CD5</h2><ol><li>\u4F7F\u7528\u7EC4\u4EF6 <code>props</code> \u4E2D\u7684 <code>dispatch</code> \u65B9\u6CD5:</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/index.js</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>
<span class="token keyword">class</span> <span class="token class-name">PostDetail</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">deletePost</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> post<span class="token punctuation">,</span> dispatch<span class="token punctuation">,</span> history <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props
        <span class="token comment">// \u4F7F\u7528 react-redux \u4E2D\u7684 connect \u65B9\u6CD5\u8FD4\u56DE\u7684\u9AD8\u9636\u7EC4\u4EF6\u5305\u88F9\u8BE5\u7EC4\u4EF6\u540E\uFF0C</span>
        <span class="token comment">// props \u4E2D\u5C06\u4F1A\u81EA\u52A8\u4F20\u5165 dispatch \u65B9\u6CD5</span>
        <span class="token keyword">await</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;DELETE&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> post<span class="token punctuation">.</span>id
         <span class="token punctuation">}</span><span class="token punctuation">)</span>
        history<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>PostDetail<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u4F7F\u7528 <code>mapDispatchToProps</code> \u4F20\u5165 <code>connect</code> :</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/index.js</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>
<span class="token keyword">class</span> <span class="token class-name">PostDetail</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
 <span class="token function-variable function">delPost</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// deletePost \u662F\u901A\u8FC7 mapDispatchToProps \u4F20\u5230 this.props \u4E2D\u7684</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> post<span class="token punctuation">,</span> deletePost<span class="token punctuation">,</span> history <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props
  <span class="token keyword">await</span> <span class="token function">deletePost</span><span class="token punctuation">(</span>post<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
  history<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> post <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props
  <span class="token keyword">const</span> renderPost <span class="token operator">=</span> post <span class="token operator">?</span> <span class="token punctuation">(</span>
   <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&#39;post&#39;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h5<span class="token operator">&gt;</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>body<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h5<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&#39;right&#39;</span><span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span>div
      className<span class="token operator">=</span><span class="token string">&#39;waves-effect waves-light btn pink&#39;</span>
      onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>delPost<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      \u5220\u9664
     <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
   <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&#39;progress&#39;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&#39;indeterminate&#39;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&#39;container&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>renderPost<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// state \u662F store \u4E2D\u7684 state</span>
<span class="token comment">// ownProps \u662F\u5F53\u524D\u7EC4\u4EF6\u7684 props</span>
<span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> ownProps</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> <span class="token punctuation">{</span> match <span class="token punctuation">}</span> <span class="token operator">=</span> ownProps
 <span class="token keyword">const</span> id <span class="token operator">=</span> match<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>
 <span class="token keyword">const</span> post <span class="token operator">=</span> state<span class="token punctuation">.</span>posts<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> post<span class="token punctuation">.</span>id <span class="token operator">===</span> <span class="token function">Number</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token keyword">return</span> <span class="token punctuation">{</span>
  post
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8BE5\u65B9\u6CD5\u4F5C\u4E3A connect \u65B9\u6CD5\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4F20\u5165</span>
<span class="token comment">// \u8BE5\u65B9\u6CD5\u7684\u53C2\u6570\u4F1A\u5F97\u5230 store \u4E2D\u7684 dispatch \u65B9\u6CD5\u548C\u5F53\u524D\u7EC4\u4EF6\u7684 props</span>
<span class="token comment">// \u8BE5\u65B9\u6CD5\u9700\u8981\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u5404\u79CD dispatch \u65B9\u6CD5\u7684\u5BF9\u8C61\uFF0C</span>
<span class="token comment">// \u6700\u7EC8\u8FD4\u56DE\u7684\u5BF9\u8C61\u4E2D\u7684\u65B9\u6CD5\u4F1A\u88AB\u653E\u5230\u7EC4\u4EF6\u7684 props \u4E2D\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\uFF0C\u4ECE\u800C\u63D0\u4EA4\u5BF9 state \u7684\u66F4\u65B0</span>
<span class="token keyword">const</span> <span class="token function-variable function">mapDispatchToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dispatch<span class="token punctuation">,</span> ownProps</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">deletePost</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
   <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;DELETE&#39;</span><span class="token punctuation">,</span>
    id
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// connect \u7B2C\u4E00\u4E2A\u53C2\u6570\u5904\u7406 State\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5904\u7406 Dispatch</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>PostDetail<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[e];function c(l,i){return s(),a("div",null,o)}var u=n(p,[["render",c],["__file","react_redux.html.vue"]]);export{u as default};
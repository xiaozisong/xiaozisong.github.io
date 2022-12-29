import{_ as e,o as c,c as d,e as o}from"./app.5c33355f.js";const l={},i=o(`<h1 id="flex-\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#flex-\u5E03\u5C40" aria-hidden="true">#</a> Flex \u5E03\u5C40</h1><p>Flexible Box \u6A21\u578B\uFF0C\u901A\u5E38\u88AB\u79F0\u4E3A flexbox\uFF0C\u662F\u4E00\u79CD\u4E00\u7EF4\u7684\u5E03\u5C40\u6A21\u578B\u3002\u5B83\u7ED9 flexbox \u7684\u5B50\u5143\u7D20\u4E4B\u95F4\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u7A7A\u95F4\u5206\u5E03\u548C\u5BF9\u9F50\u80FD\u529B\u3002</p><p>\u6211\u4EEC\u8BF4 flexbox \u662F\u4E00\u79CD\u4E00\u7EF4\u7684\u5E03\u5C40\uFF0C\u662F\u56E0\u4E3A\u4E00\u4E2A flexbox \u4E00\u6B21\u53EA\u80FD\u5904\u7406\u4E00\u4E2A\u7EF4\u5EA6\u4E0A\u7684\u5143\u7D20\u5E03\u5C40\uFF0C\u4E00\u884C\u6216\u8005\u4E00\u5217\u3002\u4F5C\u4E3A\u5BF9\u6BD4\u7684\u662F\u53E6\u5916\u4E00\u4E2A\u4E8C\u7EF4\u5E03\u5C40 <code>CSS Grid Layout</code>\uFF0C\u53EF\u4EE5\u540C\u65F6\u5904\u7406\u884C\u548C\u5217\u4E0A\u7684\u5E03\u5C40\u3002</p><p>\u5F53\u4F7F\u7528 flex \u5E03\u5C40\u65F6\uFF0C\u9996\u5148\u60F3\u5230\u7684\u662F\u4E24\u6839\u8F74\u7EBF \u2014 \u4E3B\u8F74\u548C\u4EA4\u53C9\u8F74\u3002\u4E3B\u8F74\u7531 <code>flex-direction</code> \u5B9A\u4E49\uFF0C\u53E6\u4E00\u6839\u8F74\u5782\u76F4\u4E8E\u5B83\u3002\u6211\u4EEC\u4F7F\u7528 flexbox \u7684\u6240\u6709\u5C5E\u6027\u90FD\u8DDF\u8FD9\u4E24\u6839\u8F74\u7EBF\u6709\u5173\uFF0C\u6240\u4EE5\u6709\u5FC5\u8981\u5728\u4E00\u5F00\u59CB\u9996\u5148\u7406\u89E3\u5B83\u3002</p><h2 id="\u58F0\u660E-flex-\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E-flex-\u5E03\u5C40" aria-hidden="true">#</a> \u58F0\u660E flex \u5E03\u5C40</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token comment">/* \u6216\u8005 */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u58F0\u660E <code>flex</code> \u5E03\u5C40\u7684\u5143\u7D20\u88AB\u79F0\u4E3A <code>flex \u5BB9\u5668</code>\uFF0C\u5B83\u7684\u5B50\u5143\u7D20\u88AB\u79F0\u4E3A <code>flex \u9879\u76EE</code>\u3002</p><h2 id="flex-direction-\u5B9A\u4E49\u4E3B\u8F74\u65B9\u5411" tabindex="-1"><a class="header-anchor" href="#flex-direction-\u5B9A\u4E49\u4E3B\u8F74\u65B9\u5411" aria-hidden="true">#</a> flex-direction \u5B9A\u4E49\u4E3B\u8F74\u65B9\u5411</h2><p><code>flex-direction</code> \u53D6\u503C\uFF1A</p><ul><li><code>row</code>: \u5143\u7D20\u4ECE\u5DE6\u5230\u53F3\u6446\u653E\u3002</li><li><code>row-reverse</code>: \u5143\u7D20\u6446\u653E\u7684\u65B9\u5411\u4ECE\u53F3\u5230\u5DE6\u3002</li><li><code>column</code>: \u5143\u7D20\u4ECE\u4E0A\u653E\u5230\u4E0B\u3002</li><li><code>column-reverse</code>: \u5143\u7D20\u4ECE\u4E0B\u653E\u5230\u4E0A\u3002</li></ul><h2 id="justify-content-\u6C34\u5E73\u5BF9\u9F50\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#justify-content-\u6C34\u5E73\u5BF9\u9F50\u5143\u7D20" aria-hidden="true">#</a> justify-content \u6C34\u5E73\u5BF9\u9F50\u5143\u7D20</h2><p><code>justify-content</code> \u53D6\u503C\uFF1A</p><ul><li><code>flex-start</code>: \u5143\u7D20\u548C\u5BB9\u5668\u7684\u5DE6\u7AEF\u5BF9\u9F50\u3002</li><li><code>flex-end</code>: \u5143\u7D20\u548C\u5BB9\u5668\u7684\u53F3\u7AEF\u5BF9\u9F50\u3002</li><li><code>center</code>: \u5143\u7D20\u5728\u5BB9\u5668\u91CC\u5C45\u4E2D\u3002</li><li><code>space-between</code>:\u5143\u7D20\u4E4B\u95F4\u4FDD\u6301\u76F8\u7B49\u7684\u8DDD\u79BB\u3002</li><li><code>space-around</code>:\u5143\u7D20\u5468\u56F4\u4FDD\u6301\u76F8\u7B49\u7684\u8DDD\u79BB\u3002</li></ul><h2 id="align-items-\u5782\u76F4\u5BF9\u9F50\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#align-items-\u5782\u76F4\u5BF9\u9F50\u5143\u7D20" aria-hidden="true">#</a> align-items \u5782\u76F4\u5BF9\u9F50\u5143\u7D20</h2><p><code>align-items</code> \u53D6\u503C\uFF1A</p><ul><li><code>flex-start</code>: \u5143\u7D20\u4E0E\u5BB9\u5668\u7684\u9876\u90E8\u5BF9\u9F50\u3002</li><li><code>flex-end</code>: \u5143\u7D20\u4E0E\u5BB9\u5668\u7684\u5E95\u90E8\u5BF9\u9F50\u3002</li><li><code>center</code>: \u5143\u7D20\u7EB5\u5411\u5C45\u4E2D\u3002</li><li><code>baseline</code>: \u5143\u7D20\u5728\u5BB9\u5668\u7684\u57FA\u7EBF\u4F4D\u7F6E\u663E\u793A\u3002</li><li><code>stretch</code>: \u5143\u7D20\u88AB\u62C9\u4F38\u4EE5\u586B\u6EE1\u6574\u4E2A\u5BB9\u5668\u3002</li></ul><h2 id="flex-wrap-\u5143\u7D20\u6362\u884C" tabindex="-1"><a class="header-anchor" href="#flex-wrap-\u5143\u7D20\u6362\u884C" aria-hidden="true">#</a> flex-wrap \u5143\u7D20\u6362\u884C</h2><p><code>flex-wrap</code> \u53D6\u503C\uFF1A</p><ul><li><code>nowrap</code>: \u6240\u6709\u7684\u5143\u7D20\u90FD\u5728\u4E00\u884C\u3002</li><li><code>wrap</code>: \u5143\u7D20\u81EA\u52A8\u6362\u6210\u591A\u884C\u3002</li><li><code>wrap-reverse</code>: \u5143\u7D20\u81EA\u52A8\u6362\u6210\u9006\u5E8F\u7684\u591A\u884C\u3002</li></ul><h2 id="align-content-\u63A7\u5236\u884C\u4E0E\u884C\u95F4\u9694" tabindex="-1"><a class="header-anchor" href="#align-content-\u63A7\u5236\u884C\u4E0E\u884C\u95F4\u9694" aria-hidden="true">#</a> align-content \u63A7\u5236\u884C\u4E0E\u884C\u95F4\u9694</h2><p><code>align-content</code> \u53D6\u503C\uFF1A</p><ul><li><code>flex-start</code>: \u591A\u884C\u90FD\u96C6\u4E2D\u5728\u9876\u90E8\u3002</li><li><code>flex-end</code>: \u591A\u884C\u90FD\u96C6\u4E2D\u5728\u5E95\u90E8\u3002</li><li><code>center</code>: \u591A\u884C\u5C45\u4E2D\u3002</li><li><code>space-between</code>: \u884C\u4E0E\u884C\u4E4B\u95F4\u4FDD\u6301\u76F8\u7B49\u8DDD\u79BB\u3002</li><li><code>space-around</code>: \u6BCF\u884C\u7684\u5468\u56F4\u4FDD\u6301\u76F8\u7B49\u8DDD\u79BB\u3002</li><li><code>stretch</code>: \u6BCF\u4E00\u884C\u90FD\u88AB\u62C9\u4F38\u4EE5\u586B\u6EE1\u5BB9\u5668\u3002</li></ul><h2 id="flex-flow-\u7B80\u5199\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#flex-flow-\u7B80\u5199\u5C5E\u6027" aria-hidden="true">#</a> flex-flow \u7B80\u5199\u5C5E\u6027</h2><p><code>flex-flow</code> \u662F <code>flex-direction</code> \u548C <code>flex-wrap</code> \u7684\u7B80\u5199\uFF0C\u7B2C\u4E00\u4E2A\u6307\u5B9A\u7684\u503C\u4E3A <code>flex-direction</code> \uFF0C\u7B2C\u4E8C\u4E2A\u6307\u5B9A\u7684\u503C\u4E3A <code>flex-wrap</code>.</p><h2 id="flex-\u5BB9\u5668\u5B50\u5143\u7D20\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#flex-\u5BB9\u5668\u5B50\u5143\u7D20\u7684\u5C5E\u6027" aria-hidden="true">#</a> flex \u5BB9\u5668\u5B50\u5143\u7D20\u7684\u5C5E\u6027</h2><p><code>order</code> \u5B9A\u4E49\u5B50\u5143\u7D20\u7684\u6392\u5E8F\uFF0C\u9ED8\u8BA4\u503C\u4E3A<code>0</code>\u3002\u8FD8\u53EF\u4EE5\u8BBE\u7F6E\u8FD9\u4E2A\u5C5E\u6027\u4E3A\u8D1F\u6570\u6216\u6B63\u6570\uFF0C\u503C\u8D8A\u5C0F\u8D8A\u9760\u524D\u3002</p><p><code>align-self</code> \u63A7\u5236\u5B50\u5143\u7D20\u81EA\u8EAB\u7684\u5782\u76F4\u5BF9\u9F50\uFF0C\u53D6\u503C\u548C <code>align-items</code> \u4E00\u6837\u3002</p><p><code>flex</code> \u5B9A\u4E49\u5B50\u5143\u7D20\u6240\u5360\u7684\u5C3A\u5BF8\u3001\u589E\u957F\u5C3A\u5BF8\u4EE5\u53CA\u6536\u7F29\u5C3A\u5BF8\uFF0C\u8BE5\u5C5E\u6027\u7684\u8BED\u6CD5\u4E3A\uFF1A<code>flex: flex-basis flex-grow flex-shrink</code></p><ul><li><code>flex-basis</code>: \u5B9A\u4E49\u4E86\u8BE5\u5143\u7D20\u7684\u7A7A\u95F4\u5927\u5C0F\u3002</li><li><code>flex-grow</code>: \u82E5\u88AB\u8D4B\u503C\u4E3A\u4E00\u4E2A\u6B63\u6574\u6570\uFF0C flex \u5143\u7D20\u4F1A\u4EE5 <code>flex-basis</code> \u4E3A\u57FA\u7840\uFF0C\u6CBF\u4E3B\u8F74\u65B9\u5411\u589E\u957F\u5C3A\u5BF8\u3002</li><li><code>flex-shrink</code>: \u5982\u679C\u6211\u4EEC\u7684\u5BB9\u5668\u4E2D\u6CA1\u6709\u8DB3\u591F\u7684\u7A7A\u95F4\uFF0C\u90A3\u4E48\u53EF\u4EE5\u8BE5\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u6B63\u6574\u6570\u6765\u7F29\u5C0F\u5B83\u6240\u5360\u7A7A\u95F4\u5230<code>flex-basis</code>\u4EE5\u4E0B\u3002</li></ul><p><code>flex</code> \u5C5E\u6027\u7684\u9ED8\u8BA4\u503C\uFF1A<code>flex: 0 1 auto;</code>\uFF0C\u8FD9\u91CC <code>flex-grow</code> \u7684\u503C\u4E3A 0\uFF0C\u6240\u4EE5 flex \u5143\u7D20\u4E0D\u4F1A\u8D85\u8FC7\u5B83\u4EEC <code>flex-basis</code> \u7684\u5C3A\u5BF8\u3002<code>flex-shrink</code> \u7684\u503C\u4E3A 1, \u6240\u4EE5\u53EF\u4EE5\u7F29\u5C0F flex \u5143\u7D20\u6765\u9632\u6B62\u5B83\u4EEC\u6EA2\u51FA\u3002<code>flex-basis</code> \u7684\u503C\u4E3A <code>auto</code>\uFF0C\u610F\u4E3A\u8BA9\u7236\u5143\u7D20\u81EA\u52A8\u5206\u914D\u3002</p>`,30),a=[i];function n(s,r){return c(),d("div",null,a)}var f=e(l,[["render",n],["__file","flex.html.vue"]]);export{f as default};

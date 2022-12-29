import{_ as e,o as i,c as d,e as l}from"./app.5c33355f.js";const r={},a=l('<h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h1><p><code>redis</code>\xA0\u662F\u4E00\u4E2A\u9AD8\u6027\u80FD\u7684\xA0<code>key-value</code>\xA0\u6570\u636E\u5E93\uFF0C\u5B83\u662F\u5B8C\u5168\u5F00\u6E90\u514D\u8D39\u7684\uFF0C\u800C\u4E14\xA0redis\xA0\u662F\u4E00\u4E2A\xA0<code>NOSQL</code>\xA0\u7C7B\u578B\u6570\u636E\u5E93\uFF0C\u662F\u4E3A\u4E86\u89E3\u51B3\u9AD8\u5E76\u53D1\u3001\u9AD8\u6269\u5C55\uFF0C\u5927\u6570\u636E\u5B58\u50A8\u7B49\u4E00\u7CFB\u5217\u95EE\u9898\u800C\u4EA7\u751F\u7684\u6570\u636E\u5E93\u89E3\u51B3\u65B9\u6848\uFF0C\u662F\u4E00\u4E2A\u975E\u5173\u7CFB\u578B\u7684\u6570\u636E\u5E93\u3002</p><p>\u4E3A\u4E86\u63D0\u9AD8\u8BFB\u5199\u6570\u636E\u7684\u6548\u7387\uFF0Credis\xA0\u5C06\u6570\u636E\u5B58\u50A8\u5728\u5185\u5B58\u4E2D\uFF0C\u5B83\u8FD8\u652F\u6301\u5468\u671F\u6027\u7684\u5C06\u6570\u636E\u5199\u5165\u5230\u78C1\u76D8\u4E2D\uFF0C\u5B83\u662F\u4E00\u4E2A\u5185\u5B58\u578B\u7684\u6570\u636E\u5E93\u3002</p><h2 id="redis-\u652F\u6301\u7684\u6570\u636E\u7ED3\u6784\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#redis-\u652F\u6301\u7684\u6570\u636E\u7ED3\u6784\u7C7B\u578B" aria-hidden="true">#</a> Redis \u652F\u6301\u7684\u6570\u636E\u7ED3\u6784\u7C7B\u578B</h2><p>redis\xA0\u662F\u4E00\u4E2A\u4EE5\xA0<code>key-value</code>\xA0\u5B58\u50A8\u7684\u6570\u636E\u5E93\u7ED3\u6784\u578B\u670D\u52A1\u5668\uFF0C\u5B83\u652F\u6301\u7684\u6570\u636E\u7ED3\u6784\u7C7B\u578B\u6709\uFF1A</p><ol><li>\u5B57\u7B26\u4E32\xA0<code>String</code></li><li>\u94FE\u8868\xA0<code>lists</code></li><li>\u54C8\u5E0C\u8868\xA0<code>hash</code></li><li>\u96C6\u5408\xA0<code>set</code></li><li>\u6709\u5E8F\u96C6\u5408\xA0<code>Zset</code></li><li>......</li></ol><h2 id="redis-\u7684\u4F18\u52BF\u548C\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#redis-\u7684\u4F18\u52BF\u548C\u7279\u70B9" aria-hidden="true">#</a> Redis\xA0\u7684\u4F18\u52BF\u548C\u7279\u70B9</h2><ol><li>\u8BFB\u5199\u901F\u5EA6\u975E\u5E38\u5FEB</li><li>\u652F\u6301\u6570\u636E\u6301\u4E45\u5316\u5230\u78C1\u76D8\u5F53\u4E2D</li><li>\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u6570\u636E\u7ED3\u6784</li><li>\u6240\u6709\u64CD\u4F5C\u90FD\u662F\u539F\u5B50\u6027\uFF1A\u66F4\u6539\u8981\u4E48\u5168\u90E8\u6267\u884C\uFF0C\u8981\u4E48\u5168\u90E8\u4E0D\u6267\u884C</li><li>\u652F\u6301\u4E3B\u4ECE\u590D\u5236\uFF0C\u4E3B\u673A\u4F1A\u81EA\u52A8\u5C06\u6570\u636E\u540C\u6B65\u5230\u4ECE\u673A\uFF0C\u53EF\u4EE5\u8FDB\u884C\u8BFB\u5199\u5206\u79BB</li><li>redis\xA0\u4F7F\u7528\xA0C\xA0\u8BED\u8A00\u7F16\u5199\u7684\uFF0C\u6240\u4EE5\u8FD0\u884C\u901F\u5EA6\u6BD4\u8F83\u5FEB</li></ol><h2 id="redis-\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#redis-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> Redis\xA0\u5E94\u7528\u573A\u666F</h2><ol><li>\u7ECF\u5E38\u88AB\u7528\u6765\u505A\u6570\u636E\u5E93\u7684\u7F13\u5B58</li><li>\u5E38\u7528\u7684\u5B9E\u65F6\u8BA1\u7B97\u7684\u529F\u80FD</li><li>\u6D88\u606F\u961F\u5217\uFF1A\u5B9E\u65F6\u804A\u5929</li></ol>',10),s=[a];function o(c,h){return i(),d("div",null,s)}var n=e(r,[["render",o],["__file","redis.html.vue"]]);export{n as default};

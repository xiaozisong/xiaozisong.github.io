import{_ as e,o as a,c as r,e as i}from"./app.5c33355f.js";const t={},c=i('<h1 id="javascript-\u7684\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#javascript-\u7684\u7248\u672C" aria-hidden="true">#</a> JavaScript \u7684\u7248\u672C</h1><p>ECMAScript\uFF0C\u5373ECMA-262\u5B9A\u4E49\u7684\u8BED\u8A00\uFF0C\u5E76\u4E0D\u5C40\u9650\u4E8EWeb\u6D4F\u89C8\u5668\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u8FD9\u95E8\u8BED\u8A00\u6CA1\u6709\u8F93\u5165\u548C\u8F93\u51FA\u4E4B\u7C7B\u7684\u65B9\u6CD5\u3002ECMA-262\u5C06\u8FD9\u95E8\u8BED\u8A00\u4F5C\u4E3A\u4E00\u4E2A\u57FA\u51C6\u6765\u5B9A\u4E49\uFF0C\u4EE5\u4FBF\u5728\u5B83\u4E4B\u4E0A\u518D\u6784\u5EFA\u66F4\u7A33\u5065\u7684\u811A\u672C\u8BED\u8A00\u3002Web\u6D4F\u89C8\u5668\u53EA\u662FECMAScript\u5B9E\u73B0\u53EF\u80FD\u5B58\u5728\u7684\u4E00\u79CD\u5BBF\u4E3B\u73AF\u5883\uFF08host environment\uFF09\u3002\u5BBF\u4E3B\u73AF\u5883\u63D0\u4F9BECMAScript\u7684\u57FA\u51C6\u5B9E\u73B0\u548C\u4E0E\u73AF\u5883\u81EA\u8EAB\u4EA4\u4E92\u5FC5\u9700\u7684\u6269\u5C55\u3002\u6269\u5C55\uFF08\u6BD4\u5982DOM\uFF09\u4F7F\u7528ECMAScript\u6838\u5FC3\u7C7B\u578B\u548C\u8BED\u6CD5\uFF0C\u63D0\u4F9B\u7279\u5B9A\u4E8E\u73AF\u5883\u7684\u989D\u5916\u529F\u80FD\u3002\u5176\u4ED6\u5BBF\u4E3B\u73AF\u5883\u8FD8\u6709\u670D\u52A1\u5668\u7AEFJavaScript\u5E73\u53F0Node.js\u548C\u5373\u5C06\u88AB\u6DD8\u6C70\u7684Adobe Flash\u3002</p><p>\u5982\u679C\u4E0D\u6D89\u53CA\u6D4F\u89C8\u5668\u7684\u8BDD\uFF0CECMA-262\u5230\u5E95\u5B9A\u4E49\u4E86\u4EC0\u4E48\uFF1F\u5728\u57FA\u672C\u7684\u5C42\u9762\uFF0C\u5B83\u63CF\u8FF0\u8FD9\u95E8\u8BED\u8A00\u7684\u5982\u4E0B\u90E8\u5206\uFF1A</p><ul><li>\u8BED\u6CD5</li><li>\u7C7B\u578B</li><li>\u8BED\u53E5</li><li>\u5173\u952E\u5B57</li><li>\u4FDD\u7559\u5B57</li><li>\u64CD\u4F5C\u7B26</li><li>\u5168\u5C40\u5BF9\u8C61</li></ul><p>ECMAScript\u53EA\u662F\u5BF9\u5B9E\u73B0\u8FD9\u4E2A\u89C4\u8303\u63CF\u8FF0\u7684\u6240\u6709\u65B9\u9762\u7684\u4E00\u95E8\u8BED\u8A00\u7684\u79F0\u547C\u3002JavaScript\u5B9E\u73B0\u4E86ECMAScript\uFF0C\u800CAdobe ActionScript\u540C\u6837\u4E5F\u5B9E\u73B0\u4E86ECMAScript\u3002</p><h2 id="\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C" aria-hidden="true">#</a> \u7248\u672C</h2><p>ECMAScript\u4E0D\u540C\u7684\u7248\u672C\u4EE5\u201Cedition\u201D\u8868\u793A\uFF08\u4E5F\u5C31\u662F\u63CF\u8FF0\u7279\u5B9A\u5B9E\u73B0\u7684ECMA-262\u7684\u7248\u672C\uFF09\u3002ECMA-262\u6700\u8FD1\u7684\u7248\u672C\u662F\u7B2C10\u7248\uFF0C\u53D1\u5E03\u4E8E2019\u5E746\u6708\u3002ECMA-262\u7684\u7B2C1\u7248\u672C\u8D28\u4E0A\u8DDF\u7F51\u666F\u7684JavaScript 1.1\u76F8\u540C\uFF0C\u53EA\u4E0D\u8FC7\u5220\u9664\u4E86\u6240\u6709\u6D4F\u89C8\u5668\u7279\u5B9A\u7684\u4EE3\u7801\uFF0C\u5916\u52A0\u5C11\u91CF\u7EC6\u5FAE\u7684\u4FEE\u6539\u3002ECMA-262\u8981\u6C42\u652F\u6301Unicode\u6807\u51C6\uFF08\u4EE5\u652F\u6301\u591A\u8BED\u8A00\uFF09\uFF0C\u800C\u4E14\u5BF9\u8C61\u8981\u4E0E\u5E73\u53F0\u65E0\u5173\uFF08Netscape JavaScript 1.1\u7684\u5BF9\u8C61\u4E0D\u662F\u8FD9\u6837\uFF0C\u6BD4\u5982\u5B83\u7684Date\u5BF9\u8C61\u5C31\u4F9D\u8D56\u5E73\u53F0\uFF09\u3002\u8FD9\u4E5F\u662FJavaScript 1.1\u548CJavaScript 1.2\u4E0D\u7B26\u5408ECMA-262\u7B2C1\u7248\u8981\u6C42\u7684\u539F\u56E0\u3002</p><h3 id="es2" tabindex="-1"><a class="header-anchor" href="#es2" aria-hidden="true">#</a> ES2</h3><p>ECMA-262\u7B2C2\u7248\u53EA\u662F\u505A\u4E86\u4E00\u4E9B\u7F16\u6821\u5DE5\u4F5C\uFF0C\u4E3B\u8981\u662F\u4E3A\u4E86\u66F4\u65B0\u4E4B\u540E\u4E25\u683C\u7B26\u5408ISO/IEC-16262\u7684\u8981\u6C42\uFF0C\u5E76\u6CA1\u6709\u589E\u51CF\u6216\u6539\u53D8\u4EFB\u4F55\u7279\u6027\u3002ECMAScript\u5B9E\u73B0\u901A\u5E38\u4E0D\u4F7F\u7528\u7B2C2\u7248\u6765\u8861\u91CF\u7B26\u5408\u6027\uFF08conformance\uFF09\u3002</p><h3 id="es3" tabindex="-1"><a class="header-anchor" href="#es3" aria-hidden="true">#</a> ES3</h3><p>ECMA-262\u7B2C3\u7248\u7B2C\u4E00\u6B21\u771F\u6B63\u5BF9\u8FD9\u4E2A\u6807\u51C6\u8FDB\u884C\u66F4\u65B0\uFF0C\u66F4\u65B0\u4E86\u5B57\u7B26\u4E32\u5904\u7406\u3001\u9519\u8BEF\u5B9A\u4E49\u548C\u6570\u503C\u8F93\u51FA\u3002\u6B64\u5916\u8FD8\u589E\u52A0\u4E86\u5BF9\u6B63\u5219\u8868\u8FBE\u5F0F\u3001\u65B0\u7684\u63A7\u5236\u8BED\u53E5\u3001try/catch\u5F02\u5E38\u5904\u7406\u7684\u652F\u6301\uFF0C\u4EE5\u53CA\u4E3A\u4E86\u66F4\u597D\u5730\u8BA9\u6807\u51C6\u56FD\u9645\u5316\u6240\u505A\u7684\u5C11\u91CF\u4FEE\u6539\u3002\u5BF9\u5F88\u591A\u4EBA\u6765\u8BF4\uFF0C\u8FD9\u6807\u5FD7\u7740ECMAScript\u4F5C\u4E3A\u4E00\u95E8\u771F\u6B63\u7684\u7F16\u7A0B\u8BED\u8A00\u7684\u65F6\u4EE3\u7EC8\u4E8E\u5230\u6765\u4E86\u3002</p><h3 id="es4" tabindex="-1"><a class="header-anchor" href="#es4" aria-hidden="true">#</a> ES4</h3><p>ECMA-262\u7B2C4\u7248\u662F\u5BF9\u8FD9\u95E8\u8BED\u8A00\u7684\u4E00\u6B21\u5F7B\u5E95\u4FEE\u8BA2\u3002\u4F5C\u4E3A\u5BF9JavaScript\u5728Web\u4E0A\u65E5\u76CA\u6210\u529F\u7684\u56DE\u5E94\uFF0C\u5F00\u53D1\u8005\u5F00\u59CB\u4FEE\u8BA2ECMAScript\u4EE5\u6EE1\u8DB3\u5168\u7403Web\u5F00\u53D1\u65E5\u76CA\u589E\u957F\u7684\u9700\u6C42\u3002\u4E3A\u6B64\uFF0CEcma T39\u518D\u6B21\u88AB\u53EC\u96C6\u8D77\u6765\uFF0C\u4EE5\u51B3\u5B9A\u8FD9\u95E8\u8BED\u8A00\u7684\u672A\u6765\u3002\u7ED3\u679C\uFF0C\u4ED6\u4EEC\u5236\u5B9A\u7684\u89C4\u8303\u51E0\u4E4E\u5728\u7B2C3\u7248\u57FA\u7840\u4E0A\u5B8C\u5168\u5B9A\u4E49\u4E86\u4E00\u95E8\u65B0\u8BED\u8A00\u3002\u7B2C4\u7248\u5305\u62EC\u5F3A\u7C7B\u578B\u53D8\u91CF\u3001\u65B0\u8BED\u53E5\u548C\u6570\u636E\u7ED3\u6784\u3001\u771F\u6B63\u7684\u7C7B\u548C\u7ECF\u5178\u7684\u7EE7\u627F\uFF0C\u4EE5\u53CA\u64CD\u4F5C\u6570\u636E\u7684\u65B0\u624B\u6BB5\u3002</p><p>\u4E0E\u6B64\u540C\u65F6\uFF0CTC39\u59D4\u5458\u4F1A\u7684\u4E00\u4E2A\u5B50\u59D4\u5458\u4F1A\u4E5F\u63D0\u51FA\u4E86\u53E6\u5916\u4E00\u4EFD\u63D0\u6848\uFF0C\u53EB\u4F5C\u201CECMAScript 3.1\u201D\uFF0C\u53EA\u5BF9\u8FD9\u95E8\u8BED\u8A00\u8FDB\u884C\u4E86\u8F83\u5C11\u7684\u6539\u8FDB\u3002\u8FD9\u4E2A\u5B50\u59D4\u5458\u4F1A\u7684\u4EBA\u8BA4\u4E3A\u7B2C4\u7248\u5BF9\u8FD9\u95E8\u8BED\u8A00\u6765\u8BF4\u8DF3\u8DC3\u592A\u5927\u4E86\u3002\u56E0\u6B64\uFF0C\u4ED6\u4EEC\u63D0\u51FA\u4E86\u4E00\u4E2A\u6539\u52A8\u8F83\u5C0F\u7684\u63D0\u6848\uFF0C\u53EA\u8981\u5728\u73B0\u6709JavaScript\u5F15\u64CE\u57FA\u7840\u4E0A\u505A\u4E00\u4E9B\u589E\u6539\u5C31\u53EF\u4EE5\u5B9E\u73B0\u3002\u6700\u7EC8\uFF0CES3.1\u5B50\u59D4\u5458\u4F1A\u8D62\u5F97\u4E86TC39\u59D4\u5458\u4F1A\u7684\u652F\u6301\uFF0CECMA-262\u7B2C4\u7248\u5728\u6B63\u5F0F\u53D1\u5E03\u4E4B\u524D\u88AB\u653E\u5F03\u3002</p><h3 id="es5" tabindex="-1"><a class="header-anchor" href="#es5" aria-hidden="true">#</a> ES5</h3><p>ECMAScript 3.1\u53D8\u6210\u4E86ECMA-262\u7684\u7B2C5\u7248\uFF0C\u4E8E2009\u5E7412\u67083\u65E5\u6B63\u5F0F\u53D1\u5E03\u3002\u7B2C5\u7248\u81F4\u529B\u4E8E\u5398\u6E05\u7B2C3\u7248\u5B58\u5728\u7684\u6B67\u4E49\uFF0C\u4E5F\u589E\u52A0\u4E86\u65B0\u529F\u80FD\u3002\u65B0\u529F\u80FD\u5305\u62EC\u539F\u751F\u7684\u89E3\u6790\u548C\u5E8F\u5217\u5316JSON\u6570\u636E\u7684JSON\u5BF9\u8C61\u3001\u65B9\u4FBF\u7EE7\u627F\u548C\u9AD8\u7EA7\u5C5E\u6027\u5B9A\u4E49\u7684\u65B9\u6CD5\uFF0C\u4EE5\u53CA\u65B0\u7684\u589E\u5F3AECMAScript\u5F15\u64CE\u89E3\u91CA\u548C\u6267\u884C\u4EE3\u7801\u80FD\u529B\u7684\u4E25\u683C\u6A21\u5F0F\u3002\u7B2C5\u7248\u57282011\u5E746\u6708\u53D1\u5E03\u4E86\u4E00\u4E2A\u7EF4\u62A4\u6027\u4FEE\u8BA2\u7248\uFF0C\u8FD9\u4E2A\u4FEE\u8BA2\u7248\u53EA\u66F4\u6B63\u4E86\u89C4\u8303\u4E2D\u7684\u9519\u8BEF\uFF0C\u5E76\u672A\u589E\u52A0\u4EFB\u4F55\u65B0\u7684\u8BED\u8A00\u6216\u5E93\u7279\u6027\u3002</p><h3 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h3><p>ECMA-262\u7B2C6\u7248\uFF0C\u4FD7\u79F0ES6\u3001ES2015\u6216ES Harmony\uFF08\u548C\u8C10\u7248\uFF09\uFF0C\u4E8E2015\u5E746\u6708\u53D1\u5E03\u3002\u8FD9\u4E00\u7248\u5305\u542B\u4E86\u5927\u6982\u8FD9\u4E2A\u89C4\u8303\u6709\u53F2\u4EE5\u6765\u6700\u91CD\u8981\u7684\u4E00\u6279\u589E\u5F3A\u7279\u6027\u3002ES6\u6B63\u5F0F\u652F\u6301\u4E86\u7C7B\u3001\u6A21\u5757\u3001\u8FED\u4EE3\u5668\u3001\u751F\u6210\u5668\u3001\u7BAD\u5934\u51FD\u6570\u3001\u671F\u7EA6\u3001\u53CD\u5C04\u3001\u4EE3\u7406\u548C\u4F17\u591A\u65B0\u7684\u6570\u636E\u7C7B\u578B\u3002</p><h3 id="es7" tabindex="-1"><a class="header-anchor" href="#es7" aria-hidden="true">#</a> ES7</h3><p>ECMA-262\u7B2C7\u7248\uFF0C\u4E5F\u79F0\u4E3AES7\u6216ES2016\uFF0C\u4E8E2016\u5E746\u6708\u53D1\u5E03\u3002\u8FD9\u6B21\u4FEE\u8BA2\u53EA\u5305\u542B\u5C11\u91CF\u8BED\u6CD5\u5C42\u9762\u7684\u589E\u5F3A\uFF0C\u5982Array.prototype.includes\u548C\u6307\u6570\u64CD\u4F5C\u7B26\u3002</p><h3 id="es8" tabindex="-1"><a class="header-anchor" href="#es8" aria-hidden="true">#</a> ES8</h3><p>ECMA-262\u7B2C8\u7248\uFF0C\u4E5F\u79F0\u4E3AES8\u3001ES2017\uFF0C\u5B8C\u6210\u4E8E2017\u5E746\u6708\u3002\u8FD9\u4E00\u7248\u4E3B\u8981\u589E\u52A0\u4E86\u5F02\u6B65\u51FD\u6570\uFF08async/await\uFF09\u3001SharedArrayBuffer\u53CAAtomics API\uFF0C\u4EE5\u53CAObject.values()/Object.entries()/Object. getOwnPropertyDescriptors()\u548C\u5B57\u7B26\u4E32\u586B\u5145\u65B9\u6CD5\uFF0C\u53E6\u5916\u660E\u786E\u652F\u6301\u5BF9\u8C61\u5B57\u9762\u91CF\u6700\u540E\u7684\u9017\u53F7\u3002</p><h3 id="es9" tabindex="-1"><a class="header-anchor" href="#es9" aria-hidden="true">#</a> ES9</h3><p>ECMA-262\u7B2C9\u7248\uFF0C\u4E5F\u79F0\u4E3AES9\u3001ES2018\uFF0C\u53D1\u5E03\u4E8E2018\u5E746\u6708\u3002\u8FD9\u6B21\u4FEE\u8BA2\u5305\u62EC\u5F02\u6B65\u8FED\u4EE3\u3001\u5269\u4F59\u548C\u6269\u5C55\u5C5E\u6027\u3001\u4E00\u7EC4\u65B0\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u7279\u6027\u3001Promise finally()\uFF0C\u4EE5\u53CA\u6A21\u677F\u5B57\u9762\u91CF\u4FEE\u8BA2\u3002</p><h3 id="es10" tabindex="-1"><a class="header-anchor" href="#es10" aria-hidden="true">#</a> ES10</h3><p>ECMA-262\u7B2C10\u7248\uFF0C\u4E5F\u79F0\u4E3AES10\u3001ES2019\uFF0C\u53D1\u5E03\u4E8E2019\u5E746\u6708\u3002\u8FD9\u6B21\u4FEE\u8BA2\u589E\u52A0\u4E86Array.prototype. flat()/flatMap()\u3001String.prototype.trimStart()/trimEnd()\u3001Object.fromEntries()\u65B9\u6CD5\uFF0C\u4EE5\u53CASymbol.prototype.description\u5C5E\u6027\uFF0C\u660E\u786E\u5B9A\u4E49\u4E86Function.prototype.toString()\u7684\u8FD4\u56DE\u503C\u5E76\u56FA\u5B9A\u4E86Array.prototype.sort()\u7684\u987A\u5E8F\u3002\u53E6\u5916\uFF0C\u8FD9\u6B21\u4FEE\u8BA2\u89E3\u51B3\u4E86\u4E0EJSON\u5B57\u7B26\u4E32\u517C\u5BB9\u7684\u95EE\u9898\uFF0C\u5E76\u5B9A\u4E49\u4E86catch\u5B50\u53E5\u7684\u53EF\u9009\u7ED1\u5B9A\u3002</p>',26),h=[c];function p(s,d){return a(),r("div",null,h)}var o=e(t,[["render",p],["__file","version.html.vue"]]);export{o as default};

import{_ as t,o as d,c as r,e as o}from"./app.5c33355f.js";const e={},n=o('<h1 id="javascript\u6B63\u5219\u8868\u8FBE\u5F0F\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#javascript\u6B63\u5219\u8868\u8FBE\u5F0F\u8BED\u6CD5" aria-hidden="true">#</a> Javascript\u6B63\u5219\u8868\u8FBE\u5F0F\u8BED\u6CD5</h1><h2 id="\u5143\u5B57\u7B26" tabindex="-1"><a class="header-anchor" href="#\u5143\u5B57\u7B26" aria-hidden="true">#</a> \u5143\u5B57\u7B26</h2><table><thead><tr><th>\u5143\u5B57\u7B26</th><th>\u5BF9\u5E94\u8BF4\u660E</th></tr></thead><tbody><tr><td><strong>.</strong></td><td>\u5339\u914D\u9664\u6362\u884C\u7B26\u4E4B\u5916\u7684\u4EFB\u610F\u5B57\u7B26</td></tr><tr><td><strong>\\w</strong></td><td>\u5339\u914D\u5B57\u6BCD\u6570\u5B57\u4E0B\u5212\u7EBF\uFF0C\u7B49\u540C\u4E8E\uFF1A<code>[a-zA-Z0-9_]</code></td></tr><tr><td><strong>\\s</strong></td><td>\u5339\u914D\u4EFB\u610F\u7A7A\u767D\u7B26</td></tr><tr><td><strong>\\d</strong></td><td>\u5339\u914D\u6570\u5B57\uFF0C\u7B49\u540C\u4E8E <code>[0-9]</code></td></tr><tr><td><strong>\\b</strong></td><td>\u5339\u914D\u5355\u8BCD\u8FB9\u754C</td></tr><tr><td><strong>|</strong></td><td>\u6216\u5339\u914D\uFF0C\u5982 <code>/x|y/</code> \u6B63\u5219\u53EF\u5339\u914Dx\u6216y\u4E24\u4E2A\u5B57\u7B26</td></tr><tr><td><strong>^</strong></td><td>\u5339\u914D\u5B57\u7B26\u4E32\u7684\u5F00\u59CB</td></tr><tr><td><strong>$</strong></td><td>\u5339\u914D\u5B57\u7B26\u4E32\u7684\u7ED3\u675F</td></tr></tbody></table><h2 id="\u53CD\u4E49\u5B57\u7B26" tabindex="-1"><a class="header-anchor" href="#\u53CD\u4E49\u5B57\u7B26" aria-hidden="true">#</a> \u53CD\u4E49\u5B57\u7B26</h2><table><thead><tr><th>\u53CD\u4E49\u5B57\u7B26</th><th>\u5BF9\u5E94\u8BF4\u660E</th></tr></thead><tbody><tr><td><strong>[^x]</strong></td><td>\u5339\u914D\u9664\u201Cx\u201D\u4E4B\u5916\u7684\u6240\u6709\u5B57\u7B26\uFF0C\u5176\u4E2D\u201Cx\u201D\u53EF\u4EE5\u4E3A\u4EFB\u610F\u5B57\u7B26</td></tr><tr><td><strong>[^xyz]</strong></td><td>\u540C\u4E0A\uFF0C\u5339\u914D\u9664\u201Cx\u3001y\u3001z\u201D\u4E4B\u5916\u7684\u4EFB\u610F\u5B57\u7B26</td></tr><tr><td><strong>\\W</strong></td><td>\u5339\u914D\u9664\u4E86\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF\u4E4B\u5916\u7684\u6240\u6709\u5B57\u7B26\uFF0C\u7B49\u540C\u4E8E\uFF1A<code>[^\\w]</code></td></tr><tr><td><strong>\\S</strong></td><td>\u5339\u914D\u9664\u7A7A\u767D\u7B26\u4E4B\u5916\u7684\u4EFB\u610F\u5B57\u7B26\uFF0C\u7B49\u540C\u4E8E\uFF1A<code>[^\\s]</code></td></tr><tr><td><strong>\\B</strong></td><td>\u5339\u914D\u4E0D\u662F\u5355\u8BCD\u8FB9\u754C\u7684\u5B57\u7B26\uFF0C\u7B49\u540C\u4E8E\uFF1A<code>[^\\b]</code></td></tr><tr><td><strong>\\D</strong></td><td>\u5339\u914D\u4E0D\u662F\u6570\u5B57\u7684\u6240\u6709\u5B57\u7B26\uFF0C\u7B49\u540C\u4E8E\uFF1A<code>[^\\d]</code></td></tr></tbody></table><h2 id="\u8F6C\u4E49\u5B57\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8F6C\u4E49\u5B57\u7B26" aria-hidden="true">#</a> \u8F6C\u4E49\u5B57\u7B26</h2><table><thead><tr><th>\u8F6C\u4E49\u5B57\u7B26</th><th>\u5BF9\u5E94\u8BF4\u660E</th></tr></thead><tbody><tr><td><strong>\\xnn</strong></td><td>\u5339\u914D\u5341\u516D\u8FDB\u5236\u6570</td></tr><tr><td><strong>\\f</strong></td><td>\u5339\u914D\u6362\u9875\u7B26\uFF0C\u7B49\u540C\u4E8E\uFF1A<code>\\x0c</code></td></tr><tr><td><strong>\\n</strong></td><td>\u5339\u914D\u6362\u884C\u7B26\uFF0C\u7B49\u540C\u4E8E\uFF1A<code>\\x0a</code></td></tr><tr><td><strong>\\r</strong></td><td>\u5339\u914D\u56DE\u8F66\u7B26\uFF0C\u7B49\u540C\u4E8E\uFF1A<code>\\x0d</code></td></tr><tr><td><strong>\\t</strong></td><td>\u5339\u914D\u6C34\u5E73\u5236\u8868\u7B26\uFF0C\u7B49\u540C\u4E8E\uFF1A<code>\\x09</code></td></tr><tr><td><strong>\\v</strong></td><td>\u5339\u914D\u5782\u76F4\u5236\u8868\u7B26\uFF0C\u7B49\u540C\u4E8E\uFF1A<code>\\x0b</code></td></tr><tr><td><strong>\\unnnn</strong></td><td>\u5339\u914DUnicode\u5B57\u7B26\uFF0C\u5982\uFF1A<code>\\u00A0</code></td></tr></tbody></table><h2 id="\u91CD\u590D\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#\u91CD\u590D\u5339\u914D" aria-hidden="true">#</a> \u91CD\u590D\u5339\u914D</h2><table><thead><tr><th>\u5339\u914D\u5B57\u7B26</th><th>\u5BF9\u5E94\u8BF4\u660E</th></tr></thead><tbody><tr><td><strong>*</strong></td><td>\u91CD\u590D\u51FA\u73B0\u96F6\u6B21\u6216\u591A\u6B21</td></tr><tr><td><strong>+</strong></td><td>\u91CD\u590D\u51FA\u73B0\u4E00\u6B21\u6216\u591A\u6B21</td></tr><tr><td><strong>?</strong></td><td>\u91CD\u590D\u51FA\u73B0\u96F6\u6B21\u6216\u4E00\u6B21</td></tr><tr><td><strong>{n}</strong></td><td>\u91CD\u590D\u51FA\u73B0n\u6B21</td></tr><tr><td><strong>{n,}</strong></td><td>\u81F3\u5C11\u91CD\u590D\u51FA\u73B0n\u6B21</td></tr><tr><td><strong>{m,n}</strong></td><td>\u91CD\u590D\u91CD\u73B0m\u5230n\u6B21\uFF0C\u5176\u4E2D\uFF0C<code>m&lt;n</code></td></tr></tbody></table><h2 id="\u5206\u7EC4-\u6355\u83B7" tabindex="-1"><a class="header-anchor" href="#\u5206\u7EC4-\u6355\u83B7" aria-hidden="true">#</a> \u5206\u7EC4/\u6355\u83B7</h2><table><thead><tr><th>\u5206\u7EC4\u5B57\u7B26</th><th>\u5BF9\u5E94\u8BF4\u660E</th></tr></thead><tbody><tr><td><strong>(exp)</strong></td><td>\u7528\u5C0F\u5706\u62EC\u53F7\u8FDB\u884C\u5206\u7EC4\uFF0C\u5982\u65E5\u671F\u4E2D\u5E74\u6708\u65E5\u7684\u5206\u7EC4\uFF1A<code>/(\\d{5})-(\\d{1,2})-(\\d{1,2})/</code>\uFF0C\u6BCF\u4E2A\u5206\u7EC4\u5C06\u4EA7\u751F\u5206\u7EC4\u53F7\uFF0C\u4ECE\u7B2C\u4E00\u4E2A\u62EC\u53F7\u5F00\u59CB\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>\\n</code>\u7684\u5F62\u5F0F\u5728\u6B63\u5219\u4E2D\u4F7F\u7528\u5206\u7EC4\u53F7\uFF0C\u5982\u5339\u914D\u6210\u5BF9\u51FA\u73B0\u7684HTML\u6807\u7B7E\uFF0C\u53EF\u4EE5\u5199\u6210\uFF1A<code>/&lt;(\\w+)&gt;&lt;\\/\\1&gt;/</code></td></tr><tr><td><strong>(?:exp)</strong></td><td>\u5339\u914Dexp\u6B63\u5219\uFF0C\u4F46\u4E0D\u4EA7\u751F\u5206\u7EC4\u53F7</td></tr><tr><td><strong>exp1(?=exp2)</strong></td><td>\u524D\u77BB\u65AD\u8A00\uFF0C\u5339\u914Dexp1\uFF0C\u4F46\u540E\u9762\u5FC5\u987B\u662Fexp2\uFF0C\u5982\u5339\u914D\u540D\u5B57\u53EBxianlie\uFF0C\u4F46\u4E0D\u59D3zhao\u7684\u4EBA\uFF1A<code>/zhao(?=xianlie)/</code></td></tr><tr><td><strong>exp1(?!=exp2)</strong></td><td>\u540E\u77BB\u65AD\u8A00\uFF0C\u5339\u914Dexp1\uFF0C\u4F46\u540E\u9762\u4E0D\u80FD\u662Fexp2\uFF0C\u5982\u5339\u914D\u59D3zhao\uFF0C\u4F46\u540D\u5B57\u4E0D\u53EBxianlie\u7684\u4EBA\uFF1A<code>/zhao(?!xianlie)/</code></td></tr></tbody></table><h2 id="\u8D2A\u5A6A\u4E0E\u60F0\u6027" tabindex="-1"><a class="header-anchor" href="#\u8D2A\u5A6A\u4E0E\u60F0\u6027" aria-hidden="true">#</a> \u8D2A\u5A6A\u4E0E\u60F0\u6027</h2><table><thead><tr><th>\u76F8\u5173\u5B57\u7B26</th><th>\u5BF9\u5E94\u8BF4\u660E</th></tr></thead><tbody><tr><td><strong>*?</strong></td><td>\u91CD\u590D\u4EFB\u610F\u6B21\uFF0C\u4F46\u5C3D\u53EF\u80FD\u5C11\u7684\u91CD\u590D</td></tr><tr><td><strong>+?</strong></td><td>\u91CD\u590D\u4E00\u6B21\u6216\u591A\u6B21\uFF0C\u4F46\u5C3D\u53EF\u80FD\u5C11\u7684\u91CD\u590D</td></tr><tr><td><strong>??</strong></td><td>\u91CD\u590D\u96F6\u6B21\u6216\u4E00\u6B21\uFF0C\u4F46\u5C3D\u53EF\u80FD\u5C11\u7684\u91CD\u590D</td></tr><tr><td><strong>{m,n}?</strong></td><td>\u91CD\u590Dm\u5230n\u6B21\uFF0C\u4F46\u5C3D\u53EF\u80FD\u5C11\u7684\u91CD\u590D</td></tr><tr><td><strong>{n,}?</strong></td><td>\u91CD\u590Dn\u6B21\u4EE5\u4E0A\uFF0C\u4F46\u5C3D\u53EF\u80FD\u5C11\u7684\u91CD\u590D</td></tr><tr><td><strong>{n}?</strong></td><td>\u91CD\u590Dn\u6B21\uFF0C\u4F46\u5C3D\u53EF\u80FD\u5C11\u7684\u91CD\u590D</td></tr></tbody></table><h2 id="\u4FEE\u9970\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u9970\u7B26" aria-hidden="true">#</a> \u4FEE\u9970\u7B26</h2><table><thead><tr><th>\u4FEE\u9970\u7B26</th><th>\u5BF9\u5E94\u8BF4\u660E</th></tr></thead><tbody><tr><td><strong>i</strong></td><td>ignoreCase \u7684\u7F29\u5199\uFF0C\u8868\u793A\u5FFD\u7565\u5B57\u6BCD\u7684\u5927\u5C0F\u5199</td></tr><tr><td><strong>m</strong></td><td>multiline \u7684\u7F29\u5199\uFF0C\u66F4\u6539<code>^</code>\u548C<code>$</code>\u7684\u542B\u4E49\uFF0C\u4F7F\u5B83\u4EEC\u5206\u522B\u5728\u4EFB\u610F\u4E00\u884C\u7684\u884C\u9996\u548C\u884C\u5C3E\u5339\u914D\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u5728\u6574\u4E2A\u5B57\u7B26\u4E32\u7684\u5F00\u5934\u548C\u7ED3\u5C3E\u5339\u914D\u3002(\u5728\u6B64\u6A21\u5F0F\u4E0B,<code>$</code>\u7684\u7CBE\u786E\u542B\u610F\u662F:\u5339\u914D<code>\\n</code>\u4E4B\u524D\u7684\u4F4D\u7F6E\u4EE5\u53CA\u5B57\u7B26\u4E32\u7ED3\u675F\u524D\u7684\u4F4D\u7F6E.)</td></tr><tr><td><strong>g</strong></td><td>global \u7684\u7F29\u5199\uFF0C\u8FDB\u884C\u5168\u5C40\u5339\u914D\uFF0C\u5373\u5BF9\u5B57\u7B26\u4E32\u8FDB\u884C\u5168\u6587\u5339\u914D\uFF0C\u76F4\u5230\u5B57\u7B26\u4E32\u904D\u5386\u7ED3\u675F</td></tr></tbody></table>',15),a=[n];function s(h,g){return d(),r("div",null,a)}var i=t(e,[["render",s],["__file","reg_grammar.html.vue"]]);export{i as default};

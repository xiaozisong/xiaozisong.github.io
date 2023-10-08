import{_ as e,o as i,c as l,a as n,b as s,d as c,e as t,r as o}from"./app.1fa09df8.js";var r="/./assets/nginx_welcome.dd00452b.png";const d={},p=t(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1><h2 id="\u5B89\u88C5-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-\u914D\u7F6E" aria-hidden="true">#</a> \u5B89\u88C5&amp;\u914D\u7F6E</h2><h3 id="nginx-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#nginx-\u5B89\u88C5" aria-hidden="true">#</a> Nginx \u5B89\u88C5</h3><ol><li>\u6DFB\u52A0RPM\u5305\u8FDB\u884C\u5B89\u88C5</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u6DFB\u52A0Nginx\u5305</span>
<span class="token function">sudo</span> <span class="token function">rpm</span> <span class="token parameter variable">-Uvh</span> http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm

<span class="token comment">#\u5B89\u88C5</span>
<span class="token function">sudo</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u542F\u52A8Nginx\u5E76\u8BBE\u7F6E\u4E3A\u5F00\u673A\u542F\u52A8</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u542F\u52A8\u670D\u52A1</span>
<span class="token function">sudo</span> systemctl start nginx
<span class="token comment">#\uFF08\u5982\u679C\u542F\u52A8\u5931\u8D25\uFF0C\u53EF\u80FD\u662FApache\u7B49\u670D\u52A1\u5360\u7528\u4E8680\u7AEF\u53E3\uFF0C\u5173\u6389\u76F8\u5E94\u670D\u52A1/\u4FEE\u6539\u7AEF\u53E3\u5373\u53EF\uFF09</span>

<span class="token comment">#\u8BBE\u7F6Enginx\u5F00\u673A\u542F\u52A8</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u5F00\u653E\u7AEF\u53E3</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5F00\u653E80\u7AEF\u53E3\uFF08nginx\u9ED8\u8BA4\u76D1\u542C80\u7AEF\u53E3\uFF09</span>
firewall-cmd --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp <span class="token parameter variable">--permanent</span>

<span class="token comment">#\u91CD\u8F7D\u9632\u706B\u5899\u89C4\u5219</span>
firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>\u8BBF\u95EE\u6D4B\u8BD5 \u6D4F\u89C8\u5668\u8F93\u5165 \u670D\u52A1\u5668IP\uFF0C\u51FA\u73B0\u4EE5\u4E0B\u4FE1\u606F\u8BF4\u660E\u5B89\u88C5\u6210\u529F <img src="`+r+`" alt="nginx_welcome"></li></ol><h3 id="nginx-\u5E38\u7528\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#nginx-\u5E38\u7528\u914D\u7F6E" aria-hidden="true">#</a> Nginx \u5E38\u7528\u914D\u7F6E</h3><h4 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">1</span>\u3001\u5168\u5C40\u914D\u7F6E\u6587\u4EF6\uFF1A/etc/nginx/nginx.conf
<span class="token number">2</span>\u3001\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\uFF1A/etc/nginx/conf.d/default.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B0\u589E\u914D\u7F6E\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#1\u3001\u65B0\u589E\u914D\u7F6E\u6587\u4EF6\u5939</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> /etc/nginx/server
<span class="token comment">#2\u3001\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E\uFF08\u52A0\u8F7D\u8BE5\u6587\u4EF6\u5939\u4E0B\u7684\u914D\u7F6E\uFF09</span>
<span class="token function">sudo</span> <span class="token function">vi</span> /etc/nginx/nginx.conf
<span class="token comment">#3\u3001\u5728http\u5C5E\u6027\u4E0B\u589E\u52A0\uFF1A</span>
include /etc/nginx/server/*.conf<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u53CD\u5411\u4EE3\u7406\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u53CD\u5411\u4EE3\u7406\u914D\u7F6E" aria-hidden="true">#</a> \u53CD\u5411\u4EE3\u7406\u914D\u7F6E</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#1\u3001\u65B0\u5EFA/\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">sudo</span> <span class="token function">vi</span> /etc/nginx/server/default.conf

<span class="token comment">#2\u3001\u914D\u7F6E\u793A\u4F8B</span>
server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>        <span class="token comment">#\u76D1\u542C80\u7AEF\u53E3</span>
    server_name  qiuxc.cn<span class="token punctuation">;</span> <span class="token comment">#\u76D1\u542C\u7684\u57DF\u540D</span>
    location / <span class="token punctuation">{</span>            <span class="token comment">#\u8F6C\u53D1\u6216\u5904\u7406</span>
        proxy_pass https://qiuxc.cn<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span><span class="token comment">#\u9519\u8BEF\u9875</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root   /usr/share/nginx/html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u8D1F\u8F7D\u5747\u8861\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u8D1F\u8F7D\u5747\u8861\u914D\u7F6E" aria-hidden="true">#</a> \u8D1F\u8F7D\u5747\u8861\u914D\u7F6E</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>upstream serverswitch <span class="token punctuation">{</span>
    server <span class="token number">127.0</span>.0.1:80<span class="token punctuation">;</span>
    server <span class="token number">127.0</span>.0.1:81<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>        <span class="token comment">#\u76D1\u542C80\u7AEF\u53E3</span>
    server_name   qiuxc.cn<span class="token punctuation">;</span> <span class="token comment">#\u76D1\u542C\u7684\u57DF\u540D</span>
    location / <span class="token punctuation">{</span>            <span class="token comment">#\u8F6C\u53D1\u6216\u5904\u7406</span>
        proxy_pass https://serverswitch<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span><span class="token comment">#\u9519\u8BEF\u9875</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root   /usr/share/nginx/html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssl-\u8BC1\u4E66\u5B89\u88C5\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#ssl-\u8BC1\u4E66\u5B89\u88C5\u90E8\u7F72" aria-hidden="true">#</a> SSL \u8BC1\u4E66\u5B89\u88C5\u90E8\u7F72</h2>`,20),u={href:"https://cloud.tencent.com/document/product/400/35244",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"SSL",-1);function v(b,h){const a=o("ExternalLinkIcon");return i(),l("div",null,[p,n("p",null,[n("a",u,[s("\u817E\u8BAF\u4E91 "),m,s(" \u8BC1\u4E66\u5B89\u88C5\u90E8\u7F72\u64CD\u4F5C\u6B65\u9AA4"),c(a)])])])}var g=e(d,[["render",v],["__file","nginx.html.vue"]]);export{g as default};

import{_ as n,o as s,c as e,e as a}from"./app.f824c78a.js";const i={},l=a(`<h1 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h1><h2 id="\u5E38\u7528shell\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528shell\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528Shell\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u6587\u4EF6\u5939</span>
<span class="token function">mkdir</span> \u6587\u4EF6\u5939\u540D

<span class="token comment"># \u521B\u5EFA\u6587\u4EF6</span>
<span class="token function">touch</span> \u6587\u4EF6\u540D

<span class="token comment"># \u5220\u9664\u6587\u4EF6</span>
<span class="token function">rm</span> \u6587\u4EF6\u540D
<span class="token comment"># \u5F3A\u5236\u5220\u9664\u6587\u4EF6\u5939</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> \u6587\u4EF6/\u6587\u4EF6\u5939\u540D

<span class="token comment"># \u67E5\u770B\u7AEF\u53E3\u662F\u5426\u88AB\u5360\u7528</span>
<span class="token function">netstat</span> <span class="token parameter variable">-anp</span> <span class="token operator">|</span> <span class="token function">grep</span> \u7AEF\u53E3\u53F7

<span class="token comment"># \u8FDC\u7A0B\u62F7\u8D1D</span>
<span class="token function">scp</span> \u6587\u4EF6 root@xxx.xxx.xxx.xxx:/etc/
<span class="token comment"># \u62F7\u8D1D\u6587\u4EF6\u5939</span>
<span class="token function">scp</span> <span class="token parameter variable">-r</span> \u6587\u4EF6\u5939 root@xxx.xxx.xxx.xxx:/etc/

<span class="token comment"># \u67E5\u770B\u53EF\u6267\u884C\u547D\u4EE4\u6240\u5728\u8DEF\u5F84</span>
<span class="token function">which</span> xxx

<span class="token comment"># \u67E5\u770B\u6587\u4EF6</span>
<span class="token function">du</span> <span class="token parameter variable">-h</span> \u6587\u4EF6/\u76EE\u5F55

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8FDC\u7A0B\u8BBF\u95EE-\u7F51\u7EDC" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u8BBF\u95EE-\u7F51\u7EDC" aria-hidden="true">#</a> \u8FDC\u7A0B\u8BBF\u95EE/\u7F51\u7EDC</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5B89\u88C5\u7F51\u7EDC\u5DE5\u5177\u5305</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> net-tools

<span class="token comment"># \u67E5\u770Bip\u5730\u5740</span>
<span class="token function">ifconfig</span>

<span class="token comment"># \u5B89\u88C5ssh-server</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> openssh-server

<span class="token comment"># \u5B89\u88C5wget</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">wget</span>

<span class="token comment"># \u81EA\u5B9A\u4E49Host</span>
<span class="token function">vi</span> /etc/hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="systemctl-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#systemctl-\u547D\u4EE4" aria-hidden="true">#</a> systemctl \u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5F00\u673A\u8FD0\u884C\u670D\u52A1\uFF1A</span>
systemctl <span class="token builtin class-name">enable</span> *.service

<span class="token comment">#\u53D6\u6D88\u5F00\u673A\u8FD0\u884C</span>
systemctl disable *.service

<span class="token comment">#\u542F\u52A8\u670D\u52A1</span>
systemctl start *.service

<span class="token comment">#\u505C\u6B62\u670D\u52A1</span>
systemctl stop *.service

<span class="token comment">#\u91CD\u542F\u670D\u52A1</span>
systemctl restart *.service

<span class="token comment">#\u91CD\u65B0\u52A0\u8F7D\u670D\u52A1\u914D\u7F6E\u6587\u4EF6</span>
systemctl reload *.service

<span class="token comment">#\u67E5\u8BE2\u670D\u52A1\u8FD0\u884C\u72B6\u6001</span>
systemctl status *.service

<span class="token comment">#\u663E\u793A\u542F\u52A8\u5931\u8D25\u7684\u670D\u52A1</span>
systemctl <span class="token parameter variable">--failed</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7528\u6237\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u76F8\u5173" aria-hidden="true">#</a> \u7528\u6237\u76F8\u5173</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u7528\u6237</span>
<span class="token function">useradd</span> qiuxc

<span class="token comment"># \u4FEE\u6539\u5BC6\u7801</span>
<span class="token function">passwd</span> qiuxc

<span class="token comment"># \u5220\u9664\u7528\u6237</span>
<span class="token function">userdel</span> qiuxc

<span class="token comment"># \u67E5\u770B\u6709\u54EA\u4E9B\u7528\u6237</span>
<span class="token function">cat</span> /etc/passwd

<span class="token comment"># \u67E5\u770B\u5F53\u524D\u7528\u6237\u540D</span>
<span class="token function">whoami</span>

<span class="token comment"># \u5207\u6362\u8EAB\u4EFD</span>
<span class="token function">su</span> qiuxc

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9632\u706B\u5899" tabindex="-1"><a class="header-anchor" href="#\u9632\u706B\u5899" aria-hidden="true">#</a> \u9632\u706B\u5899</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u7248\u672C</span>
firewall-cmd <span class="token parameter variable">--version</span>

<span class="token comment"># \u67E5\u770B\u5E2E\u52A9</span>
firewall-cmd <span class="token parameter variable">--help</span>

<span class="token comment"># \u663E\u793A\u72B6\u6001</span>
firewall-cmd <span class="token parameter variable">--state</span>

<span class="token comment"># \u67E5\u770B\u7AEF\u53E3</span>
firewall-cmd --list-port

<span class="token comment"># \u5F00\u653E\u7AEF\u53E3</span>
firewall-cmd --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp <span class="token parameter variable">--permanent</span>
firewall-cmd --add-port<span class="token operator">=</span><span class="token number">20000</span>-20010/tcp <span class="token parameter variable">--permanent</span>

<span class="token comment"># \u7981\u7528\u7AEF\u53E3</span>
firewall-cmd --remove-port<span class="token operator">=</span><span class="token number">80</span>/tcp <span class="token parameter variable">--permanent</span>
firewall-cmd --remove-port<span class="token operator">=</span><span class="token number">20000</span>-20010/tcp <span class="token parameter variable">--permanent</span>

<span class="token comment"># \u91CD\u65B0\u52A0\u8F7D\u9632\u706B\u5899\u89C4\u5219</span>
firewall-cmd <span class="token parameter variable">--reload</span>

<span class="token comment"># \u5F00\u653E/\u5173\u95ED\u670D\u52A1\u7AEF\u53E3</span>
<span class="token comment"># \u6253\u5F00FTP\u670D\u52A1</span>
firewall-cmd --add-service<span class="token operator">=</span>ftp <span class="token parameter variable">--permanent</span>

<span class="token comment"># \u5173\u95EDFTP\u670D\u52A1</span>
firewall-cmd --remove-service<span class="token operator">=</span>ftp <span class="token parameter variable">--permanent</span>

<span class="token comment">## \u53C2\u6570 --permanent\uFF0C\u8868\u793A\u6C38\u4E45\u751F\u6548</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ssh-\u8FDC\u7A0B\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#ssh-\u8FDC\u7A0B\u8FDE\u63A5" aria-hidden="true">#</a> ssh \u8FDC\u7A0B\u8FDE\u63A5</h3><p>ssh \u76D1\u542C <code>22</code> \u7AEF\u53E3\u3002</p><p>\u57FA\u672C\u8BED\u6CD5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> <span class="token punctuation">[</span>-p PORT<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token environment constant">USER</span>@<span class="token punctuation">]</span><span class="token environment constant">HOSTNAME</span> <span class="token punctuation">[</span>COMMAND<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u76D1\u542C\u7AEF\u53E3\u793A\u4F8B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-p</span> <span class="token number">300</span> git@8.8.8.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6253\u5F00\u8C03\u8BD5\u6A21\u5F0F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># -v \u5197\u8BE6\u6A21\u5F0F\uFF0C\u6253\u5370\u5173\u4E8E\u8FD0\u884C\u60C5\u51B5\u7684\u8C03\u8BD5\u4FE1\u606F</span>
<span class="token function">ssh</span> <span class="token parameter variable">-v</span> git@8.8.8.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u8FDC\u7A0B\u8FDE\u63A5\u5E76\u6267\u884C\u6307\u5B9A\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u8FDE\u63A5\u5E76\u6267\u884C\u6307\u5B9A\u4EFB\u52A1" aria-hidden="true">#</a> \u8FDC\u7A0B\u8FDE\u63A5\u5E76\u6267\u884C\u6307\u5B9A\u4EFB\u52A1</h4><p>\u6267\u884C\u4E00\u6761\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ssh</span> qiuxc@xxx.xxx.xxx.xxx <span class="token string">&quot;df -h&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6267\u884C\u591A\u6761\u547D\u4EE4\uFF0C\u7528 <code>;</code> \u5206\u9694</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ssh</span> qiuxc@xxx.xxx.xxx.xxx <span class="token string">&quot;pwd; cat hello.txt&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6267\u884C\u9700\u8981\u4EA4\u4E92\u7684\u547D\u4EE4\uFF0C\u901A\u8FC7 <code>-t</code> \u53C2\u6570\u663E\u5F0F\u7684\u544A\u8BC9 ssh\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u4E2A TTY \u8FDC\u7A0B shell \u8FDB\u884C\u4EA4\u4E92</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-t</span> qiuxc@xxx.xxx.xxx.xxx <span class="token string">&quot;pwd; cat hello.txt&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="cat" tabindex="-1"><a class="header-anchor" href="#cat" aria-hidden="true">#</a> cat</h3><p>\u67E5\u770B\u6587\u4EF6\u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> ~/.ssh/id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6E05\u7A7A index.html \u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u628A index.html \u7684\u5185\u5BB9\u5199\u5165 second.html\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> index.html <span class="token operator">&gt;</span> second.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u628A index.html \u7684\u5185\u5BB9\u8FFD\u52A0\u5199\u5165 second.html\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> index.html <span class="token operator">&gt;&gt;</span> second.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u628A index.html \u548C second.html \u8FFD\u52A0\u5199\u5165 third.html\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> index.html second.html <span class="token operator">&gt;&gt;</span> third.html

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="chmod-\u66F4\u6539\u6587\u4EF6\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#chmod-\u66F4\u6539\u6587\u4EF6\u6743\u9650" aria-hidden="true">#</a> chmod \u66F4\u6539\u6587\u4EF6\u6743\u9650</h3><p>\u6743\u9650\u9664\u4E86\u7528 <code>r</code>(\u8BFB) <code>w</code>(\u5199) <code>x</code>(\u6267\u884C) \u8FD9\u79CD\u65B9\u5F0F\u8868\u793A\uFF0C\u4E5F\u53EF\u4EE5\u7528\u6570\u5B57\u8868\u793A\uFF0C\u6570\u7EC4\u4E0E\u5B57\u6BCD\u7684\u5BF9\u5E94\u5173\u7CFB\u4E3A\uFF1A</p><ul><li>r:4</li><li>w:2</li><li>x:1</li></ul><p>\u4E4B\u6240\u6709\u5982\u6B64\u5BF9\u5E94\u5173\u7CFB\uFF0C\u4E3B\u8981\u8FD8\u662F\u4E3A\u4E86\u65B9\u4FBF\u63A8\u5BFC\uFF0C\u6BD4\u5982\u6211\u4EEC\u5E0C\u671B\u4E00\u4E2A\u6587\u4EF6\u53EF\u8BFB\u53EF\u5199\uFF0C\u90A3\u6211\u4EEC\u53EF\u4EE5\u65B9\u4FBF\u7684\u8BBE\u7F6E\u6743\u9650\u4E3A 6\uFF084 + 2\uFF09\uFF0C\u540C\u6837\uFF0C\u5982\u679C\u6211\u4EEC\u77E5\u9053\u4E00\u4E2A\u6743\u9650\u4E3A 3\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u63A8\u5BFC\u51FA\u6743\u9650\u4E3A\u53EF\u5199\u53EF\u6267\u884C\uFF0C\u56E0\u4E3A\u53EA\u6709 2 + 1 \u624D\u53EF\u80FD\u7B49\u4E8E 3\u3002\u200B</p><p><code>chmod</code> \uFF08change mode\uFF09 \u7684\u5177\u4F53\u8BED\u6CD5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># -R\uFF1A\u9012\u5F52\u66F4\u6539\u6587\u4EF6\u5C5E\u7EC4</span>
<span class="token function">chmod</span> <span class="token punctuation">[</span>-R<span class="token punctuation">]</span> xyz \u6587\u4EF6\u6216\u76EE\u5F55
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D xyz \u5206\u522B\u8868\u793A Owner\u3001Group\u3001Others \u7684\u6743\u9650\uFF0C\u5982\u679C\u6211\u4EEC\u8FD9\u6837\u8BBE\u7F6E\u4E00\u4E2A\u6587\u4EF6\u7684\u6743\u9650\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">750</span> index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u5F97\u77E5\uFF0COwner \u7684\u6743\u9650\u4E3A 7\uFF0C\u4E3A\u53EF\u8BFB\u53EF\u5199\u53EF\u6267\u884C\uFF0CGroup \u7684\u6743\u9650\u4E3A 5\uFF0C\u4E3A\u53EF\u8BFB\u53EF\u6267\u884C\uFF0COthers \u7684\u6743\u9650\u4E3A 0\uFF0C\u8868\u793A\u4E0D\u53EF\u8BFB\u5199\u4E0D\u53EF\u6267\u884C\u3002\u5BF9\u5E94\u5B57\u6BCD\u4E3A\uFF1A<code>rwxr-x---</code>\u3002</p><p>\u9664\u4E86\u8FD9\u79CD\u6570\u5B57\u7684\u65B9\u5F0F\uFF0C\u8FD8\u6709\u4E00\u79CD\u4F7F\u7528\u7B26\u53F7\u7C7B\u578B\u6539\u53D8\u6743\u9650\u7684\u65B9\u5F0F\uFF1A</p><p>\u5728\u8FD9\u79CD\u65B9\u5F0F\u91CC\uFF0C\u6211\u4EEC\u5C06\u4E09\u79CD\u8EAB\u4EFD <code>Owner</code>\u3001<code>Group</code>\u3001<code>Others</code>\uFF0C\u5206\u522B\u7B80\u5199\u4E3A <code>u\uFF08User\uFF09</code>\u3001<code>g</code>\u3001<code>o</code>\uFF0C\u7528 <code>a</code> \u8868\u793A\u6240\u6709\u8EAB\u4EFD\uFF0C\u518D\u4F7F\u7528 <code>+</code> <code>-</code> <code>=</code> \u8868\u793A\u52A0\u5165\u3001\u53BB\u9664\u3001\u8BBE\u5B9A\u4E00\u4E2A\u6743\u9650\uFF0C<code>r</code> <code>w</code> <code>x</code> \u5219\u7EE7\u7EED\u8868\u793A\u8BFB\uFF0C\u5199\uFF0C\u6267\u884C\u6743\u9650\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> u+x,g-x,o-x index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u610F\u601D\u5C31\u662F Owner \u52A0\u4E0A\u6267\u884C\u6743\u9650\uFF0CGroup \u548C Others \u53BB\u9664\u6267\u884C\u6743\u9650\u3002</p><p>\u5F53\u7136\u6211\u4EEC\u4E5F\u53EF\u4EE5\u76F4\u63A5\u8BBE\u5B9A\u6743\u9650</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token assign-left variable">u</span><span class="token operator">=</span>rwx,g<span class="token operator">=</span>rx,o<span class="token operator">=</span>r index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6B64\u65F6\u6587\u4EF6\u7684\u6743\u9650\u5C31\u76F8\u5F53\u4E8E <code>-rwxr-xr--</code>\u3002</p><p>\u6B64\u5916\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u7701\u7565\u4E0D\u5199 <code>ugoa</code> \u8FD9\u7C7B\u8EAB\u4EFD\u5185\u5BB9\uFF0C\u76F4\u63A5\u5199\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> +x index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6B64\u65F6\u76F8\u5F53\u4E8E\u4F7F\u7528\u4E86 a\uFF0C\u4F1A\u7ED9\u6240\u6709\u8EAB\u4EFD\u6DFB\u52A0\u6267\u884C\u6743\u9650\u3002</p><h2 id="\u5E38\u7528\u5305" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5305" aria-hidden="true">#</a> \u5E38\u7528\u5305</h2><ul><li>\u538B\u7F29zip</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">zip</span>
<span class="token comment"># \u538B\u7F29\u6587\u4EF6</span>
<span class="token function">zip</span> \u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u89E3\u538Bzip</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">unzip</span>
<span class="token function">unzip</span> xxx.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="centos-\u914D\u7F6E\u514D\u5BC6\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#centos-\u914D\u7F6E\u514D\u5BC6\u767B\u5F55" aria-hidden="true">#</a> Centos \u914D\u7F6E\u514D\u5BC6\u767B\u5F55</h2><ol><li>\u5728\u672C\u673A\u751F\u6210\u5BC6\u94A5\u6587\u4EF6 <code>ssh-keygen -t rsa</code></li><li>\u8FDB\u5165\u672C\u673A <code>~/.ssh</code> \u76EE\u5F55\uFF0C\u590D\u5236 <code>id_rsa.pub</code> \u7684\u5185\u5BB9</li><li><code>root</code> \u7528\u6237\u767B\u5F55\u670D\u52A1\u5668\uFF0C\u8FDB\u5165\u5230\u670D\u52A1\u5668 <code>~/.ssh</code> \u76EE\u5F55</li><li>\u5C06\u521A\u624D\u590D\u5236\u7684\u5185\u5BB9\u7C98\u8D34\u5230 <code>~/.ssh/authorized_keys</code> \u6587\u4EF6\u4E2D</li><li>\u914D\u7F6E\u5B8C\u6210\uFF0C\u73B0\u5728\u53EF\u4EE5\u65E0\u9700\u5BC6\u7801\u767B\u5F55\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u4E86</li></ol>`,63),c=[l];function d(r,t){return s(),e("div",null,c)}var p=n(i,[["render",d],["__file","linux.html.vue"]]);export{p as default};

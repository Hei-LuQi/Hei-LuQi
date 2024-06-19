<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>适用于 博客类型的文章。</p>
<p>示例：</p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 文章标题</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">tags</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> tag1</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> tag2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">---</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<h3 id="sticky" tabindex="-1"><a class="header-anchor" href="#sticky"><span>sticky</span></a></h3>
<ul>
<li>类型： <code v-pre>boolean | number</code></li>
<li>默认值： <code v-pre>false</code></li>
</ul>
<p>是否在文章列表中，置顶当前文章。</p>
<p>如果为 <code v-pre>number</code> ，则数字越大，文章置顶的位置越靠前。</p>
<h3 id="article" tabindex="-1"><a class="header-anchor" href="#article"><span>article</span></a></h3>
<ul>
<li>类型： <code v-pre>boolean</code></li>
<li>默认值： <code v-pre>true</code></li>
</ul>
<p>是否在文章列表中，显示当前文章。</p>
<h3 id="tags" tabindex="-1"><a class="header-anchor" href="#tags"><span>tags</span></a></h3>
<ul>
<li>类型： <code v-pre>string[]</code></li>
<li>默认值： <code v-pre>[]</code></li>
</ul>
<p>文章标签。</p>
</div></template>



<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>主题内置的 水印插件，为 全站，或者 单个页面 添加水印。</p>
<p>关联插件：<a href="https://ecosystem.vuejs.press/zh/plugins/features/watermark.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-watermark</a></p>
<h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2>
<h3 id="enabled" tabindex="-1"><a class="header-anchor" href="#enabled"><span>enabled</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>boolean | ((page: Page) =&gt; boolean)</code></p>
</li>
<li>
<p>默认值： <code v-pre>false</code></p>
</li>
<li>
<p>详情：</p>
<p>指定哪些页面需要添加水印。</p>
<p>拥有 <code v-pre>true</code> 值的页面将会被添加水印。</p>
</li>
</ul>
<h3 id="watermarkoptions" tabindex="-1"><a class="header-anchor" href="#watermarkoptions"><span>watermarkOptions</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>WatermarkOptions</code></p>
</li>
<li>
<p>默认值： <code v-pre>undefined</code></p>
</li>
<li>
<p>详情： 配置项请参考 <a href="https://zhensherlock.github.io/watermark-js-plus/zh/config/" target="_blank" rel="noopener noreferrer">watermark-js-plus</a>。</p>
</li>
</ul>
<h4 id="watermarkoptions-parent" tabindex="-1"><a class="header-anchor" href="#watermarkoptions-parent"><span>watermarkOptions.parent</span></a></h4>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>body</code></p>
</li>
<li>
<p>详情：添加水印的父元素选择器。</p>
<p>默认插入到 body 中，可以指定插入到页面的某个元素中。</p>
</li>
</ul>
<h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay"><span>delay</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>number</code></p>
</li>
<li>
<p>默认值： <code v-pre>500</code></p>
</li>
<li>
<p>详情：添加水印的延时。以毫秒为单位。</p>
<p>延迟时间取决于页面过渡动画时间，可以根据实际情况调整。</p>
<p>如果水印的父元素在切换页面时被重新渲染，那么延迟时间应该比页面过渡时间长一些。</p>
</li>
</ul>
<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h2>
<h3 id="watermark" tabindex="-1"><a class="header-anchor" href="#watermark"><span>watermark</span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>boolean | WatermarkOptions</code></p>
</li>
<li>
<p>详情：</p>
<p>当类型为 <code v-pre>boolean</code> 时，表示是否启用水印。</p>
<p>当类型为 <code v-pre>WatermarkOptions</code> 时，表示当前页面水印配置。</p>
<p>可以参考 <a href="https://zhensherlock.github.io/watermark-js-plus/zh/config/" target="_blank" rel="noopener noreferrer">watermark-js-plus</a> 。</p>
</li>
</ul>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">watermark</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  width</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 200</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  height</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 200</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  content</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Your content</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  opacity</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0.5</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">---</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



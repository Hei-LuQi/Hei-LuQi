<template><div><div class="hint-container warning">
<p class="hint-container-title">Deprecated</p>
<p>该插件功能已整合到 <a href="/plugins/plugin-md-power">vuepress-plugin-md-power</a> 。
因此，此插件不再更新维护，并标记为 弃用。</p>
</div>
<h2 id="指南" tabindex="-1"><a class="header-anchor" href="#指南"><span>指南</span></a></h2>
<p>为你的 vuepress 站点，在编写文章时， 提供嵌入 <a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer">can-i-use</a> WEB feature 各平台支持说明 的功能。</p>
<p>方便在描述某个 WEB feature 时，能更直观的表述 该特性的支持程度。</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<CodeTabs id="17" :data='[{"id":"npm"},{"id":"yarn"},{"id":"pnpm"}]' :active="1">
<template #title0="{ value, isActive }">npm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">pnpm</template>
<template #tab0="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @vuepress-plume/plugin-caniuse</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @vuepress-plume/plugin-caniuse</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @vuepress-plume/plugin-caniuse</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<h3 id="step1-添加插件" tabindex="-1"><a class="header-anchor" href="#step1-添加插件"><span>Step1：添加插件</span></a></h3>
<p>将插件添加到你的 vuepress 项目的配置文件中：</p>
<CodeTabs id="37" :data='[{"id":".vuepress/config.ts"}]'>
<template #title0="{ value, isActive }">.vuepress/config.ts</template>
<template #tab0="{ value, isActive }">
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> caniusePlugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@vuepress-plume/plugin-caniuse</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    caniusePlugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  ]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="step2-在markdown中使用" tabindex="-1"><a class="header-anchor" href="#step2-在markdown中使用"><span>Step2：在markdown中使用</span></a></h3>
<p>在你的 文章 markdown文件中，使用以下格式：</p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: caniuse </span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">feature</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> {browser_versions}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例： 获取 css 伪类选择器 <code v-pre>:dir()</code> 在各个浏览器的支持情况图标：</strong></p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: caniuse css-matches-pseudo</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p>
<CanIUseViewer feature="css-matches-pseudo" meta="nyovp" past="2" future="1" /><h2 id="method" tabindex="-1"><a class="header-anchor" href="#method"><span>Method</span></a></h2>
<p><code v-pre>caniusePlugin([options])</code></p>
<p>插件注册函数</p>
<p><strong>options:</strong> <code v-pre>[CanIUsePluginOptions]</code></p>
<ul>
<li><code v-pre>options.mode</code>: 配置 can-i-use 在 文章中的 嵌入模式, 默认： <code v-pre>image</code>
<ul>
<li><code v-pre>image</code>： 嵌入 特性图表图片</li>
<li><code v-pre>embed</code>:  嵌入 iframe， 实时的，可交互的模式</li>
</ul>
</li>
</ul>
<h2 id="markdown-语法" tabindex="-1"><a class="header-anchor" href="#markdown-语法"><span>Markdown 语法</span></a></h2>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: caniuse </span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">feature</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> {browser_versions}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="feature" tabindex="-1"><a class="header-anchor" href="#feature"><span><code v-pre>&lt;feature&gt;</code></span></a></h3>
<p>必填。 正确取值请参考 <a href="https://caniuse.bitsofco.de/" target="_blank" rel="noopener noreferrer">https://caniuse.bitsofco.de/</a></p>
<h3 id="browser-versions" tabindex="-1"><a class="header-anchor" href="#browser-versions"><span><code v-pre>{browser_versions}</code></span></a></h3>
<p>可选。当前特性在多个版本中的支持情况。</p>
<p>默认值为: <code v-pre>{-2,-1,1}</code></p>
<p>格式： <code v-pre>{number,number,...}</code>  取值范围为 <code v-pre>-5 ~ 3</code></p>
<ul>
<li>小于<code v-pre>0</code> 表示低于当前浏览器版本的支持情况</li>
<li><code v-pre>0</code> 表示当前浏览器版本的支持情况</li>
<li>大于<code v-pre>0</code> 表示高于当前浏览器版本的支持情况</li>
</ul>
</div></template>



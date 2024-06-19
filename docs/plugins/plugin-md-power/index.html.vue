<template><div><h2 id="指南" tabindex="-1"><a class="header-anchor" href="#指南"><span>指南</span></a></h2>
<p>插件为 vuepress markdown 注入更多的功能支持。</p>
<p>其中，<code v-pre>@[xxx](xx)</code> 形式的语法，主要用于 资源嵌入类型的支持，包括 嵌入 PDF、视频、代码演示等。</p>
<p>同时，还提供了其它的语法支持。</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<CodeTabs id="15" :data='[{"id":"npm"},{"id":"yarn"},{"id":"pnpm"}]' :active="1">
<template #title0="{ value, isActive }">npm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">pnpm</template>
<template #tab0="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress-plugin-md-power</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress-plugin-md-power</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress-plugin-md-power</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// .vuepress/config.ts</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> markdownPowerPlugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-plugin-md-power</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // ...</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    markdownPowerPlugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      pdf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  ]</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> MarkdownPowerPluginOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  pdf</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">PDFOptions</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // new syntax</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  icons</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">IconsOptions</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // video embed</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  bilibili</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  youtube</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // code embed</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  codepen</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  replit</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  codeSandbox</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  jsfiddle</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  caniuse</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">CanIUseOptions</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  repl</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">false</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    go</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    rust</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    kotlin</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    theme</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | { </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">light</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">dark</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1"><span>使用</span></a></h2>
<h3 id="caniuse" tabindex="-1"><a class="header-anchor" href="#caniuse"><span>caniuse</span></a></h3>
<p>插件默认不启用该功能，你需要手动设置 <code v-pre>caniuse</code> 为 <code v-pre>true</code></p>
<h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h4>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">caniuse</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline">feature</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">caniuse image</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline">feature</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> // 不再推荐使用</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">caniuse embed{versionRange}</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline">feature</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以从 <a href="https://caniuse.pengzhanbo.cn/" target="_blank" rel="noopener noreferrer">caniuse</a> 获取 feature 的值。</p>
<p>默认情况下，插件通过 <code v-pre>iframe</code> 嵌入 <code v-pre>caniuse</code> 的支持情况查看器。
<s>你也可以使用 <code v-pre>@[caniuse image](feature)</code> 直接嵌入图片。</s></p>
<p>caniuse 默认查看最近的5个浏览器版本。你可以通过 <code v-pre>{versionRange}</code> 手动设置查看的浏览器版本。
格式为 <code v-pre>{past,future}</code> 表示 <code v-pre>{过去版本,未来版本}</code>。取值范围为 <code v-pre>-5 ~ 3</code> 。</p>
<ul>
<li>小于0 表示低于当前浏览器版本的支持情况</li>
<li>0 表示当前浏览器版本的支持情况</li>
<li>大于0 表示高于当前浏览器版本的支持情况</li>
</ul>
<p>如 <code v-pre>{-2,2}</code> 表示查看低于当前 2 个版本 到 高于当前 2 个版本的支持情况。</p>
<h3 id="pdf" tabindex="-1"><a class="header-anchor" href="#pdf"><span>pdf</span></a></h3>
<p>插件默认不启用该功能，你需要手动设置 <code v-pre>pdf</code> 为 <code v-pre>true</code></p>
<h4 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1"><span>语法</span></a></h4>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">pdf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">pdf 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">pdf 1 no-toolbar width="100%" height="600px" zoom="1" ratio="16:9"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>url</code> 只支持绝对路径以及完整的资源链接地址，请勿传入相对路径。</p>
<p>你可以在 <code v-pre>pdf</code> 后紧跟空格，设置一个数字表示默认显示的  pdf 页码</p>
<ul>
<li><code v-pre>no-toolbar</code> 表示不显示工具栏</li>
<li><code v-pre>width</code> 设置宽度</li>
<li><code v-pre>height</code> 设置高度</li>
<li><code v-pre>zoom</code> 设置缩放</li>
<li><code v-pre>ratio</code> 设置宽高比， 仅当 <code v-pre>width</code> 有值， <code v-pre>height</code> 未设置时有效</li>
</ul>
<h3 id="icons" tabindex="-1"><a class="header-anchor" href="#icons"><span>icons</span></a></h3>
<p>插件默认不启用该功能，你需要手动设置 <code v-pre>icons</code> 为 <code v-pre>true</code>。</p>
<p>你还需要手动安装 <code v-pre>@iconify/json</code> 依赖。</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @iconify/json</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="语法-2" tabindex="-1"><a class="header-anchor" href="#语法-2"><span>语法</span></a></h4>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">collect:icon</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:[collect:icon size]:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:[collect:icon /color]:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:[collect:icon size/color]:</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以从 <a href="https://icon-sets.iconify.design/" target="_blank" rel="noopener noreferrer">icon-sets.iconify</a> 获取 图标集。</p>
<p>显示 <code v-pre>logos</code> 图标集合下的 <code v-pre>vue</code> 图标</p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">logos:vue</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>图标默认大小为 <code v-pre>1em</code> ，你可以通过 <code v-pre>size</code> 设置图标大小</p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:[logos:vue 1.2em]:</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>图标默认颜色为 <code v-pre>currentColor</code> 你可以通过 <code v-pre>/color</code> 设置图标颜色</p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:[logos:vue /blue]:</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>也可以通过 <code v-pre>size/color</code> 设置图标大小和颜色</p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:[logos:vue 1.2em/blue]:</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="bilibili" tabindex="-1"><a class="header-anchor" href="#bilibili"><span>bilibili</span></a></h3>
<p>插件默认不启用该功能，你需要手动设置 <code v-pre>bilibili</code> 为 <code v-pre>true</code></p>
<h4 id="语法-3" tabindex="-1"><a class="header-anchor" href="#语法-3"><span>语法</span></a></h4>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">bilibili</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline">bvid</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">bilibili autoplay time="0"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline">bvid</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@[bilibili p1 autoplay time="0" ratio="16:9"](aid cid)</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>设置 <code v-pre>autoplay</code> 以自动播放视频。</li>
<li>设置 <code v-pre>time</code> 以指定开始播放的时间点，单位为秒。还可以传入 <code v-pre>mm:ss</code> 或者 <code v-pre>hh:mm:ss</code>。</li>
<li>如果为 分p（非合集），还可以设置 <code v-pre>p\d</code> （第\d 个分p），此时可以只传入 <code v-pre>aid</code> 和 <code v-pre>cid</code>。</li>
<li>设置 <code v-pre>ratio</code> 以指定视频的宽高比。</li>
</ul>
<h3 id="youtube" tabindex="-1"><a class="header-anchor" href="#youtube"><span>youtube</span></a></h3>
<p>插件默认不启用该功能，你需要手动设置 <code v-pre>youtube</code> 为 <code v-pre>true</code></p>
<h4 id="语法-4" tabindex="-1"><a class="header-anchor" href="#语法-4"><span>语法</span></a></h4>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">youtube</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">youtube autoplay loop ratio="16:9" star="0" end="0"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>id</code> 为 YouTube 视频 ID</li>
<li><code v-pre>autoplay</code> 为是否自动播放</li>
<li><code v-pre>loop</code> 为是否循环播放</li>
<li><code v-pre>ratio</code> 为视频的宽高比</li>
<li><code v-pre>star</code> 为开始时间，单位为秒，还可以传入 <code v-pre>mm:ss</code> 或者 <code v-pre>hh:mm:ss</code>。</li>
<li><code v-pre>end</code> 为结束时间，单位为秒，还可以传入 <code v-pre>mm:ss</code> 或者 <code v-pre>hh:mm:ss</code>。</li>
</ul>
<h3 id="codepen" tabindex="-1"><a class="header-anchor" href="#codepen"><span>CodePen</span></a></h3>
<p>插件默认不启用该功能，你需要手动设置 <code v-pre>codepen</code> 为 <code v-pre>true</code></p>
<h4 id="语法-5" tabindex="-1"><a class="header-anchor" href="#语法-5"><span>语法</span></a></h4>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">codepen</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline">user/slash</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">codepen preview editable title="" height="400px" tab="css,result" theme="dark"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline">user/slash</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>user</code> 为 CodePen 用户名</li>
<li><code v-pre>slash</code> 为 CodePen slash</li>
<li><code v-pre>preview</code> 为是否为预览模式</li>
<li><code v-pre>editable</code> 为是否为可编辑模式</li>
<li><code v-pre>title</code> 为标题</li>
<li><code v-pre>height</code> 为高度</li>
<li><code v-pre>tab</code> 为选项卡，默认为 <code v-pre>result</code>, 多个以逗号分隔，如 <code v-pre>css,result</code></li>
<li><code v-pre>theme</code> 为主题， 可选值包括 <code v-pre>dark</code> 和 <code v-pre>light</code></li>
</ul>
<h3 id="replit" tabindex="-1"><a class="header-anchor" href="#replit"><span>Replit</span></a></h3>
<p>插件默认不启用该功能，你需要手动设置 <code v-pre>replit</code> 为 <code v-pre>true</code></p>
<h4 id="语法-6" tabindex="-1"><a class="header-anchor" href="#语法-6"><span>语法</span></a></h4>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">replit</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline">user/repl-name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">replit title="" height="450px" theme="dark"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline">user/repl-name#filepath</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>user</code> 为 Replit 用户名</li>
<li><code v-pre>repl-name</code> 为 Replit Repl 名</li>
<li><code v-pre>filepath</code> 为文件路径</li>
<li><code v-pre>title</code> 为标题</li>
<li><code v-pre>height</code> 为高度</li>
<li><code v-pre>theme</code> 为主题， 可选值包括 <code v-pre>dark</code> 和 <code v-pre>light</code></li>
</ul>
<h3 id="codesandbox" tabindex="-1"><a class="header-anchor" href="#codesandbox"><span>CodeSandbox</span></a></h3>
<p>插件默认不启用该功能，你需要手动设置 <code v-pre>codesandbox</code> 为 <code v-pre>true</code></p>
<h4 id="语法-7" tabindex="-1"><a class="header-anchor" href="#语法-7"><span>语法</span></a></h4>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">codesandbox</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline">id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">codesandbox button</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline">workspace/id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">codesanbox title="xxx" layout="Editor+Preview" height="500px" navbar="false" console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline">id#filepath</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>id</code>: Code Sandbox ID</li>
<li><code v-pre>title</code>: Code Sandbox 标题</li>
<li><code v-pre>layout</code>: 代码预览布局 可选值： <code v-pre>Preview</code>， <code v-pre>Editor</code>， <code v-pre>Editor+Preview</code></li>
<li><code v-pre>height</code>: 代码预览高度</li>
<li><code v-pre>navbar</code>: 是否显示导航栏，默认为 true</li>
<li><code v-pre>console</code>: 是否显示控制台，默认为 false</li>
<li><code v-pre>filepath</code>: 文件路径</li>
</ul>
<h3 id="jsfiddle" tabindex="-1"><a class="header-anchor" href="#jsfiddle"><span>JSFiddle</span></a></h3>
<p>插件默认不启用该功能，你需要手动设置 <code v-pre>jsfiddle</code> 为 <code v-pre>true</code></p>
<h4 id="语法-8" tabindex="-1"><a class="header-anchor" href="#语法-8"><span>语法</span></a></h4>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">jsfiddle</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline">user/id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">jsfiddle theme="dark" tab="js,css,html,result" height="500px"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline">user/id</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>user</code>: 用户</li>
<li><code v-pre>id</code>: jsfiddle id</li>
<li><code v-pre>theme</code>: 主题模式， 可选值： <code v-pre>&quot;light&quot; | &quot;dark&quot;</code></li>
<li><code v-pre>tab</code>: 选项卡， 可选值：<code v-pre>&quot;js&quot; | &quot;css&quot; | &quot;html&quot; | &quot;result&quot;</code>, 多个用 <code v-pre>&quot;,&quot;</code> 分割，
顺序将决定选项卡的排序，默认为 <code v-pre>js,css,html,result</code></li>
<li><code v-pre>height</code>: 高度</li>
</ul>
<h3 id="repl" tabindex="-1"><a class="header-anchor" href="#repl"><span>Repl</span></a></h3>
<p>插件默认不启用该功能，你需要手动设置 <code v-pre>repl</code> 为 <code v-pre>true</code></p>
<p>提供在 markdown 中为 <code v-pre>golang</code> 、<code v-pre>kotlin</code>、<code v-pre>rust</code> 语言的 在线代码演示 支持。
在线编译执行代码，并输出结果。</p>
<h4 id="语法-9" tabindex="-1"><a class="header-anchor" href="#语法-9"><span>语法</span></a></h4>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: go-repl</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">go</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// your go lang code</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: kotlin-repl</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">kotlin</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">// your kotlin code</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::rust-repl</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">rust</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// your rust code</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



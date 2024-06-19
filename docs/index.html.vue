<template><div><div style="max-width: 960px;margin:0 auto;">
<div style="text-align:center">
<p><img src="https://img.shields.io/github/stars/pengzhanbo/vuepress-theme-plume" alt="GitHub Repo stars">
<img src="https://img.shields.io/npm/v/vuepress-theme-plume?color=32A9C3&amp;labelColor=1B3C4A&amp;label=npm" alt="npm version">
<img src="https://img.shields.io/npm/dy/vuepress-theme-plume?color=32A9C3&amp;labelColor=1B3C4A&amp;label=downloads" alt="npm downloads">
<img src="https://img.shields.io/github/license/pengzhanbo/vuepress-theme-plume?color=32A9C3&amp;labelColor=1B3C4A" alt="github license"></p>
</div>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3>
<CodeTabs id="9" :data='[{"id":"pnpm"},{"id":"npm"},{"id":"yarn"}]'>
<template #title0="{ value, isActive }">pnpm</template>
<template #title1="{ value, isActive }">npm</template>
<template #title2="{ value, isActive }">yarn</template>
<template #tab0="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress@next</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress-theme-plume</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vue</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress@next</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress-theme-plume</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress@next</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress-theme-plume</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3>
<CodeTabs id="23" :data='[{"id":".vuepress/config.ts"}]'>
<template #title0="{ value, isActive }">.vuepress/config.ts</template>
<template #tab0="{ value, isActive }">
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // vuepress config...</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // theme config...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="更新记录" tabindex="-1"><a class="header-anchor" href="#更新记录"><span>更新记录</span></a></h3>
<p><RouteLink to="/changelog/">Changelog</RouteLink></p>
<h3 id="贡献者" tabindex="-1"><a class="header-anchor" href="#贡献者"><span>贡献者</span></a></h3>
<p><a href="https://github.com/pengzhanbo/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Contributor-pengzhanbo-32A9C3?style=for-the-badge&amp;labelColor=1B3C4A" alt="Contributor pengzhanbo"></a></p>
<p><a href="https://github.com/huankong233" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Contributor-huan__kong-32A9C3?style=for-the-badge&amp;labelColor=1B3C4A" alt="Contributor huan_kong"></a></p>
</div>
</div></template>



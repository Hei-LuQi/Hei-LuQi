<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>为站点添加 百度统计。该插件默认不启用。</p>
<p>关联插件： <a href="https://github.com/pengzhanbo/vuepress-theme-plume/tree/main/plugins/plugin-baidu-tongji" target="_blank" rel="noopener noreferrer">@vuepress-plume/plugin-baidu-tongji</a></p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<h3 id="key" tabindex="-1"><a class="header-anchor" href="#key"><span>key</span></a></h3>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>默认值：<code v-pre>''</code></li>
</ul>
<p>配置百度统计的key</p>
<h3 id="启用" tabindex="-1"><a class="header-anchor" href="#启用"><span>启用</span></a></h3>
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      baiduTongji</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        key</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">你的百度统计key</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line highlighted"><span style="--shiki-light:#999999;--shiki-dark:#666666">      }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



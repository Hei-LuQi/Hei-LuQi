<template><div><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span>说明</span></a></h2>
<h3 id="在一个-vuepress-项目中" tabindex="-1"><a class="header-anchor" href="#在一个-vuepress-项目中"><span>在一个 vuepress 项目中</span></a></h3>
<p>在默认配置下，如果你 packages.json</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">scripts</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">    "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">serve</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress dev src</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">    "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">build</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress build src</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>即， 你的 <code v-pre>sourceDir</code> 为 <code v-pre>src</code> 目录， 那么，你的functions目录则为 <code v-pre>src/.vuepress/functions</code>。</p>
<p>在这个目录下，直属的 <code v-pre>ts/js</code> 文件，均为一个个独立的 <code v-pre>function</code>， 不包括这个目录下的子目录。</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">src/.vuepress/functions</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">├─my_function.ts</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 这是一个function 通过 /api/my_function 调用</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">├─verify_phone.ts</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 这是一个 function， 通过 /api/verify_phone 调用</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">└─utils</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 子目录中的不会被识别为function</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    └─index.ts</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在一个-vuepress-plugin-项目中" tabindex="-1"><a class="header-anchor" href="#在一个-vuepress-plugin-项目中"><span>在一个 vuepress plugin 项目中</span></a></h3>
<p>以官方仓库插件的基本组织结构为例</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">src/node</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">├─functions</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">│</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">   ├─my_function.ts</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 这是一个function 通过 /api/my_function 调用</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">│</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">   ├─verify_phone.ts</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 这是一个 function， 通过 /api/verify_phone 调用</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">│</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">   └─utils</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 子目录中的不会被识别为function</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">│</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">       └─index.ts</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">├─index.ts</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">└─plugin.ts</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 在这个文件中配置了 directory 为 path.resolve(__dirname, 'functions')</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖"><span>依赖</span></a></h2>
<p>如果你是使用 typescript 作为开发语言，那么可以引入 <code v-pre>@netlify/functions</code> 模块提供类型检查支持。</p>
<p>如果你的 function 依赖其他的第三方模块，请在配置在项目<code v-pre>package.json</code> 的 <code v-pre>dependencies</code> 字段中作为生产依赖。</p>
<p>如果你是通过插件提供 function，请在 插件的使用指南中 说明，你的插件function依赖了哪些第三方模块，
提醒使用者安装这些依赖。</p>
<h2 id="function" tabindex="-1"><a class="header-anchor" href="#function"><span>function</span></a></h2>
<p><code v-pre>functions</code> 通过 导出一个 <code v-pre>handler</code> 函数 提供给 云函数服务调用。</p>
<p>一个 function 的内容一般如下：</p>
<ul>
<li>
<p>异步函数</p>
<p>在异步函数中，支持直接返回一个对象作为 响应体报文</p>
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> Handler</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@netlify/functions</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">handler</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">Handler</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> async function </span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">event</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> context</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // do something</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">  return</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    statusCode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">200</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    body</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">JSON</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">stringify</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({})</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>非异步函数</p>
<p>在非异步函数中，通过 <code v-pre>callback</code> 函数参数返回响应体报文</p>
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> Handler</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@netlify/functions</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">handler</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">Handler</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> function </span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">event</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> context</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> callback</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // do something</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  callback</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    statusCode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">200</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    body</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">JSON</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">stringify</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({})</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>
<p><a href="https://github.com/pengzhanbo/vuepress-theme-plume/tree/main/plugins/plugin-page-collection" target="_blank" rel="noopener noreferrer">plugin-page-collection</a>
页面访问次数插件</p>
</div></template>



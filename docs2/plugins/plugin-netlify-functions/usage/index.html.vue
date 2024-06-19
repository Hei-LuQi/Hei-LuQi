<template><div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<CodeTabs id="3" :data='[{"id":"npm"},{"id":"yarn"},{"id":"pnpm"}]' :active="1">
<template #title0="{ value, isActive }">npm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">pnpm</template>
<template #tab0="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress-plugin-netlify-functions</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress-plugin-netlify-functions</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress-plugin-netlify-functions</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="在vuepress中使用" tabindex="-1"><a class="header-anchor" href="#在vuepress中使用"><span>在vuepress中使用</span></a></h2>
<h3 id="添加插件" tabindex="-1"><a class="header-anchor" href="#添加插件"><span>添加插件</span></a></h3>
<p>在vuepress 的配置文件中 引入并 在 <code v-pre>plugins</code> 字段中添加插件。</p>
<CodeTabs id="23" :data='[{"id":".vuepress/config. "}]'>
<template #title0="{ value, isActive }">.vuepress/config. </template>
<template #tab0="{ value, isActive }">
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> netlifyFunctionsPlugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-plugin-netlify-functions</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // ...</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    netlifyFunctionsPlugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  ]</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="编写-functions" tabindex="-1"><a class="header-anchor" href="#编写-functions"><span>编写 functions</span></a></h3>
<p>启动 vuepress 开发服务后， 就可以在你的 <code v-pre>.vuepress/functions/</code> 目录中，新建并开发你的 <code v-pre>function</code></p>
<p><a href="https://docs.netlify.com/functions/overview/" target="_blank" rel="noopener noreferrer"><code v-pre>functions</code> 开发指南</a></p>
<h2 id="在-vuepress-plugin-中使用" tabindex="-1"><a class="header-anchor" href="#在-vuepress-plugin-中使用"><span>在 vuepress plugin 中使用</span></a></h2>
<h3 id="添加插件钩子" tabindex="-1"><a class="header-anchor" href="#添加插件钩子"><span>添加插件钩子</span></a></h3>
<CodeTabs id="43" :data='[{"id":"typescript"}]'>
<template #title0="{ value, isActive }">typescript</template>
<template #tab0="{ value, isActive }">
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> *</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> as</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> path</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">node:path</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> App</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@vuepress/core</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> useNetlifyFunctionsPlugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-plugin-netlify-functions</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> myPlugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">():</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> Plugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">  return</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">App</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    const </span><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // 请求前缀,  默认 /api</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">      proxyPrefix</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">      preparePluginFunctions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">      generatePluginFunctions</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> useNetlifyFunctionsPlugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // 指定插件的functions目录，相关脚本在此目录中开发</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      directory</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">path</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">resolve</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">__dirname</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">functions</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    })</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-plugin-myPlugin</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">      onPrepared</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: () => </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">preparePluginFunctions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(),</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">      onGenerated</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: () => </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">generatePluginFunctions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>在你的插件开发目录，假如是以下结构：</p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">.</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">└─src</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 开发目录</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">   ├─shared</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">   └─node</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # node 端</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">      ├─functions</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # functions目录</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">      │</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  └─my_function.ts</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # functions脚本</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">      ├─plugin.ts</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">      └─index.ts</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么，就在你的 <code v-pre>src/node/functions</code> 目录下进行 functions 开发</p>
<p><a href="https://docs.netlify.com/functions/overview/" target="_blank" rel="noopener noreferrer"><code v-pre>functions</code> 开发指南</a></p>
<p>如果你已经开发好了一个 <code v-pre>functions/my_function.ts</code> 的function。</p>
<p>那么你可以在 client端，通过以下方式调用：</p>
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">async</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> fetchMyFunction</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">  const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">result</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> await</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> fetch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/api/my_functions</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // do something</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就像调用一个普通接口一个样简单。</p>
<h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量"><span>环境变量</span></a></h2>
<p>你可以在项目根目录中，新建一个 <code v-pre>.env</code> 文件，用于配置开发时环境变量</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>这些环境变量仅用于开发环境时使用，部署生产时不会被加载。</p>
<p>是用于在开发环境中 代替 <code v-pre>Netlify Environment Variables</code> 。
在生产环境中，应该使用 <code v-pre>Netlify Environment Variables</code> 设置这些环境变量。</p>
<p>如果你的 <code v-pre>.env</code> 文件中有比较私密的信息，建议将 <code v-pre>.env</code> 文件添加到 <code v-pre>.gitignore</code> 中，避免提交到 仓库中。</p>
</div>
<CodeTabs id="85" :data='[{"id":".env"},{"id":"functions/my_function.ts"}]'>
<template #title0="{ value, isActive }">.env</template>
<template #title1="{ value, isActive }">functions/my_function.ts</template>
<template #tab0="{ value, isActive }">
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>YOUR_ENV_VAR='your env var'</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">YOUR_ENV_VAR</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> process</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">env</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">YOUR_ENV_VAR</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>
<p>如何使用本插件开发一个 提供 functions 的插件，这里提供了一个 例子：</p>
<p><a href="https://github.com/pengzhanbo/vuepress-theme-plume/tree/main/plugins/plugin-page-collection" target="_blank" rel="noopener noreferrer">plugin-page-collection</a></p>
<p>可以参考此例子进行插件开发。</p>
<p>该例子提供了以下功能：</p>
<ul>
<li>连接 <code v-pre>lean cloud</code></li>
<li>记录页面访问次数，并上报到 <code v-pre>lean cloud</code> 数据库。</li>
<li>查询 当前页面访问次数，并提供组件嵌入到页面中。</li>
</ul>
</div></template>



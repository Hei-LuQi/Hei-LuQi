<template><div><h2 id="依赖环境" tabindex="-1"><a class="header-anchor" href="#依赖环境"><span>依赖环境</span></a></h2>
<ul>
<li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js v18.16.0+</a></li>
<li><a href="https://pnpm.io/zh/" target="_blank" rel="noopener noreferrer">pnpm 8+</a> 或 <a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">Yarn 2+</a></li>
</ul>
<div class="hint-container info">
<p class="hint-container-title">提示</p>
<ul>
<li>使用 <a href="https://pnpm.io/zh/" target="_blank" rel="noopener noreferrer">pnpm</a> 时，你需要安装 <code v-pre>vue</code> 作为 peer-dependencies 。</li>
<li>使用 <a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">Yarn 2+</a> 时，你需要在 <code v-pre>.yarnrc.yml</code> 文件中设置 <code v-pre>nodeLinker: 'node-modules'</code> 。</li>
</ul>
</div>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<p>使用本主题，你需要首先新建一个项目，并安装<code v-pre>vuepress@next</code>以及本主题</p>
<h3 id="步骤-1" tabindex="-1"><a class="header-anchor" href="#步骤-1"><span>步骤 1</span></a></h3>
<p><strong>创建一个新文件夹，并进入目录：</strong></p>
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mkdir</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> my-blog</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> my-blog</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="步骤-2" tabindex="-1"><a class="header-anchor" href="#步骤-2"><span>步骤 2</span></a></h3>
<p><strong>初始化项目：</strong></p>
<CodeTabs id="48" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":"npm"}]'>
<template #title0="{ value, isActive }">pnpm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">npm</template>
<template #tab0="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> init</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> init</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> init</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> init</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> init</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> init</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="步骤-3" tabindex="-1"><a class="header-anchor" href="#步骤-3"><span>步骤 3</span></a></h3>
<p><strong>安装相关依赖：</strong></p>
<p>安装 <code v-pre>vuepress@next</code> 和 <code v-pre>vuepress-theme-plume</code> 作为本地依赖。</p>
<CodeTabs id="68" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":"npm"}]'>
<template #title0="{ value, isActive }">pnpm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">npm</template>
<template #tab0="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 安装 vuepress</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress@next</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vue</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 安装 主题和打包工具</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress-theme-plume</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @vuepress/bundler-vite@next</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 安装 vuepress</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress@next</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 安装 主题和打包工具</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress-theme-plume</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @vuepress/bundler-vite@next</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 安装 vuepress</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress@next</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 安装 主题和打包工具</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress-theme-plume</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @vuepress/bundler-vite@next</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>主题当前版本 已适配至 <code v-pre>vuepress@2.0.0-rc.13</code>，你应该安装这个版本的 VuePress。
高于或低于这个版本，可能会存在潜在的兼容性问题。</p>
</div>
<h3 id="步骤-4" tabindex="-1"><a class="header-anchor" href="#步骤-4"><span>步骤 4</span></a></h3>
<p><strong>在 <code v-pre>package.json</code> 中添加 <code v-pre>script</code></strong></p>
<CodeTabs id="90" :data='[{"id":"package.json"}]'>
<template #title0="{ value, isActive }">package.json</template>
<template #tab0="{ value, isActive }">
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">scripts</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">    "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">dev</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress dev docs</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">    "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">build</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress build docs</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p><code v-pre>vuepress</code> 默认将文档源码放在 <code v-pre>docs</code> 目录下。</p>
<h3 id="步骤-5" tabindex="-1"><a class="header-anchor" href="#步骤-5"><span>步骤 5</span></a></h3>
<p><strong>将默认的临时目录和缓存目录添加到<code v-pre>.gitignore</code> 文件中</strong></p>
<CodeTabs id="104" :data='[{"id":".gitignore"},{"id":"sh"}]'>
<template #title0="{ value, isActive }">.gitignore</template>
<template #title1="{ value, isActive }">sh</template>
<template #tab0="{ value, isActive }">
<div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>node_modules</span></span>
<span class="line"><span>.temp</span></span>
<span class="line"><span>.cache</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">echo</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">node_modules</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> >></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .gitignore</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">echo</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">.temp</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> >></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .gitignore</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">echo</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">.cache</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> >></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .gitignore</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="步骤-6" tabindex="-1"><a class="header-anchor" href="#步骤-6"><span>步骤 6</span></a></h3>
<p><strong>在 <code v-pre>docs/.vuepress/config.{js,ts}</code> 中配置主题</strong></p>
<CodeTabs id="118" :data='[{"id":"docs/.vuepress/config.js"}]'>
<template #title0="{ value, isActive }">docs/.vuepress/config.js</template>
<template #tab0="{ value, isActive }">
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> viteBundler</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@vuepress/bundler-vite</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 请不要忘记设置默认语言</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  lang</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">zh-CN</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // more...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }),</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  bundler</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">viteBundler</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>无论是否需要使用 <strong>多语言</strong> ，你都应该为 VuePress 配置 正确 <code v-pre>lang</code> 选项值。
主题需要根据 <code v-pre>lang</code> 选项来确定语言环境文本。</p>
</div>
<h3 id="步骤-7" tabindex="-1"><a class="header-anchor" href="#步骤-7"><span>步骤 7</span></a></h3>
<p><strong>在 <code v-pre>docs</code> 目录下新建 <code v-pre>README.md</code> 文件</strong></p>
<p>声明首页配置。</p>
<CodeTabs id="137" :data='[{"id":"README.md"}]'>
<template #title0="{ value, isActive }">README.md</template>
<template #tab0="{ value, isActive }">
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">home</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">---</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="步骤-8" tabindex="-1"><a class="header-anchor" href="#步骤-8"><span>步骤 8</span></a></h3>
<p><strong>在本地服务器启动你的文档站点：</strong></p>
<CodeTabs id="148" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":"npm"}]'>
<template #title0="{ value, isActive }">pnpm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">npm</template>
<template #tab0="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dev</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dev</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dev</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>Vuepress 会在 <a href="http://localhost:8080" target="_blank" rel="noopener noreferrer">http://localhost:8080</a> 。启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。</p>
</div></template>



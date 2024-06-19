<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>主题支持在 文章中 嵌入由 <a href="https://mermaid.js.org/" target="_blank" rel="noopener noreferrer">Mermaid</a> 。</p>
<p>该功能由 <a href="https://plugin-md-enhance.vuejs.press/" target="_blank" rel="noopener noreferrer">vuepress-plugin-md-enhance</a> 提供支持。</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>主题默认不启用该功能。</p>
<p>你需要在你的项目中安装 <a href="https://mermaid.js.org/" target="_blank" rel="noopener noreferrer">mermaid</a> 库。</p>
<CodeTabs id="18" :data='[{"id":"pnpm"},{"id":"npm"},{"id":"yarn"}]'>
<template #title0="{ value, isActive }">pnpm</template>
<template #title1="{ value, isActive }">npm</template>
<template #title2="{ value, isActive }">yarn</template>
<template #tab0="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mermaid</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mermaid</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mermaid</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>然后在 <code v-pre>.vuepress/config.ts</code> 配置文件中，启用该功能：</p>
<CodeTabs id="32" :data='[{"id":".vuepress/config.ts"}]'>
<template #title0="{ value, isActive }">.vuepress/config.ts</template>
<template #tab0="{ value, isActive }">
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      markdownEnhance</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        mermaid</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>以下文档 Fork 自 <a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/mermaid.html" target="_blank" rel="noopener noreferrer">vuepress-theme-hope</a>,
遵循 <a href="https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">MIT</a> 许可证。</p>
</div>
<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">mermaid</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">&#x3C;!-- 在此处放置 mermaid 代码 --></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了使用 mermaid 代码块，你也可以直接使用以下代码块：</p>
<ul>
<li>class: <code v-pre>classDiagram</code></li>
<li>c4c: <code v-pre>C4Context</code></li>
<li>er: <code v-pre>erDiagram</code></li>
<li>gantt: <code v-pre>gantt</code></li>
<li>git-graph: <code v-pre>gitGraph</code></li>
<li>journey: <code v-pre>journey</code></li>
<li>mindmap: <code v-pre>mindmap</code></li>
<li>pie: <code v-pre>pie</code></li>
<li>quadrant: <code v-pre>quadrantChart</code></li>
<li>requirement: <code v-pre>requirementDiagram</code></li>
<li>sankey: <code v-pre>sankey-beta</code></li>
<li>sequence: <code v-pre>sequenceDiagram</code></li>
<li>state: <code v-pre>stateDiagram-v2</code></li>
<li>timeline: <code v-pre>timeline</code></li>
<li>xy: <code v-pre>xychart-beta</code></li>
</ul>
<p>你不需要再声明图表类型，也不需要缩进图表代码。</p>
<p>当图表支持设置标题时，你可以直接在代码块信息后添加标题:</p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">sequence 代码标题</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">&#x3C;!-- 顺序图代码内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">... --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文档详见 <a href="https://mermaid.js.org/" target="_blank" rel="noopener noreferrer">Mermaid 文档</a></p>
<h2 id="高级" tabindex="-1"><a class="header-anchor" href="#高级"><span>高级</span></a></h2>
<p>你可以在 <a href="https://vuejs.press/zh/guide/configuration.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6" target="_blank" rel="noopener noreferrer">客户端配置文件</a>
中导入并使用 <code v-pre>defineMermaidConfig</code> 来自定义 Mermaid 配置:</p>
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineClientConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress/client</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineMermaidConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume/client</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">defineMermaidConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 在此设置 mermaid 选项</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineClientConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>
<h3 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图"><span>流程图</span></a></h3>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">mermaid</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">---</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">title: Flowchart</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">---</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">flowchart TB</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    c1-->a2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    subgraph one</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    a1-->a2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    end</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    subgraph two</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    b1-->b2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    end</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    subgraph three</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    c1-->c2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    end</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    one --> two</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    three --> two</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    two --> c2</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">---</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">title: Flowchart</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">---</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">flowchart TB</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    c1-->a2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    subgraph one</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    a1-->a2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    end</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    subgraph two</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    b1-->b2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    end</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    subgraph three</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    c1-->c2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    end</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    one --> two</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    three --> two</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    two --> c2</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循序图" tabindex="-1"><a class="header-anchor" href="#循序图"><span>循序图</span></a></h3>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">sequence Greetings</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Alice ->> Bob: Hello Bob, how are you?</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Bob-->>John: How about you John?</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Bob--x Alice: I am good thanks!</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Bob-x John: I am good thanks!</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Note right of John: Bob thinks a long&#x3C;br/>long time, so long&#x3C;br/>that the text does&#x3C;br/>not fit on a row.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Bob-->Alice: Checking with John...</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Alice->John: Yes... John, how are you?</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-sequence line-numbers-mode" data-ext="sequence" data-title="sequence"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>Alice ->> Bob: Hello Bob, how are you?</span></span>
<span class="line"><span>Bob-->>John: How about you John?</span></span>
<span class="line"><span>Bob--x Alice: I am good thanks!</span></span>
<span class="line"><span>Bob-x John: I am good thanks!</span></span>
<span class="line"><span>Note right of John: Bob thinks a long&#x3C;br/>long time, so long&#x3C;br/>that the text does&#x3C;br/>not fit on a row.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Bob-->Alice: Checking with John...</span></span>
<span class="line"><span>Alice->John: Yes... John, how are you?</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类图" tabindex="-1"><a class="header-anchor" href="#类图"><span>类图</span></a></h3>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">class Animal Example</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">note "From Duck till Zebra"</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Animal &#x3C;|-- Duck</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">note for Duck "can fly\ncan swim\ncan dive\ncan help in debugging"</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Animal &#x3C;|-- Fish</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Animal &#x3C;|-- Zebra</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Animal : +int age</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Animal : +String gender</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Animal: +isMammal()</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Animal: +mate()</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">class Duck{</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  +String beakColor</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  +swim()</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  +quack()</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">class Fish{</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  -int sizeInFeet</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  -canEat()</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">class Zebra{</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  +bool is_wild</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  +run()</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-class line-numbers-mode" data-ext="class" data-title="class"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>note "From Duck till Zebra"</span></span>
<span class="line"><span>Animal &#x3C;|-- Duck</span></span>
<span class="line"><span>note for Duck "can fly\ncan swim\ncan dive\ncan help in debugging"</span></span>
<span class="line"><span>Animal &#x3C;|-- Fish</span></span>
<span class="line"><span>Animal &#x3C;|-- Zebra</span></span>
<span class="line"><span>Animal : +int age</span></span>
<span class="line"><span>Animal : +String gender</span></span>
<span class="line"><span>Animal: +isMammal()</span></span>
<span class="line"><span>Animal: +mate()</span></span>
<span class="line"><span>class Duck{</span></span>
<span class="line"><span>  +String beakColor</span></span>
<span class="line"><span>  +swim()</span></span>
<span class="line"><span>  +quack()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class Fish{</span></span>
<span class="line"><span>  -int sizeInFeet</span></span>
<span class="line"><span>  -canEat()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class Zebra{</span></span>
<span class="line"><span>  +bool is_wild</span></span>
<span class="line"><span>  +run()</span></span>
<span class="line"><span>}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="状态图" tabindex="-1"><a class="header-anchor" href="#状态图"><span>状态图</span></a></h3>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">state Check if n is negative</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">state if_state &#x3C;&#x3C;choice>></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">[*] --> IsPositive</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">IsPositive --> if_state</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">if_state --> False: if n &#x3C; 0</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">if_state --> True : if n >= 0</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-state line-numbers-mode" data-ext="state" data-title="state"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span></span></span>
<span class="line"><span>state if_state &#x3C;&#x3C;choice>></span></span>
<span class="line"><span>[*] --> IsPositive</span></span>
<span class="line"><span>IsPositive --> if_state</span></span>
<span class="line"><span>if_state --> False: if n &#x3C; 0</span></span>
<span class="line"><span>if_state --> True : if n >= 0</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关系图" tabindex="-1"><a class="header-anchor" href="#关系图"><span>关系图</span></a></h3>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">er Er Example</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">CAR ||--o{ NAMED-DRIVER : allows</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">CAR {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    string registrationNumber</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    string make</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    string model</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">PERSON ||--o{ NAMED-DRIVER : is</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">PERSON {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    string firstName</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    string lastName</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    int age</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-er line-numbers-mode" data-ext="er" data-title="er"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>CAR ||--o{ NAMED-DRIVER : allows</span></span>
<span class="line"><span>CAR {</span></span>
<span class="line"><span>    string registrationNumber</span></span>
<span class="line"><span>    string make</span></span>
<span class="line"><span>    string model</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>PERSON ||--o{ NAMED-DRIVER : is</span></span>
<span class="line"><span>PERSON {</span></span>
<span class="line"><span>    string firstName</span></span>
<span class="line"><span>    string lastName</span></span>
<span class="line"><span>    int age</span></span>
<span class="line"><span>}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户日记图" tabindex="-1"><a class="header-anchor" href="#用户日记图"><span>用户日记图</span></a></h3>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">journey</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">title My working day</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">section Go to work</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Make tea: 5: Me</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Go upstairs: 3: Me</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Do work: 1: Me, Cat</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">section Go home</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Go downstairs: 5: Me</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Sit down: 5: Me</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-journey line-numbers-mode" data-ext="journey" data-title="journey"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>title My working day</span></span>
<span class="line"><span>section Go to work</span></span>
<span class="line"><span>  Make tea: 5: Me</span></span>
<span class="line"><span>  Go upstairs: 3: Me</span></span>
<span class="line"><span>  Do work: 1: Me, Cat</span></span>
<span class="line"><span>section Go home</span></span>
<span class="line"><span>  Go downstairs: 5: Me</span></span>
<span class="line"><span>  Sit down: 5: Me</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="甘特图" tabindex="-1"><a class="header-anchor" href="#甘特图"><span>甘特图</span></a></h3>
<p><strong>输入：</strong></p>
<details class="hint-container details"><summary>查看代码</summary>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">gantt</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">dateFormat  YYYY-MM-DD</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">title       Adding GANTT diagram functionality to mermaid</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">excludes    weekends</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">%% (`excludes` accepts specific dates in YYYY-MM-DD format, days of the week ("sunday") or "weekends", but not the word "weekdays".)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">section A section</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Completed task            :done,    des1, 2014-01-06,2014-01-08</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Active task               :active,  des2, 2014-01-09, 3d</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Future task               :         des3, after des2, 5d</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Future task2              :         des4, after des3, 5d</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">section Critical tasks</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Completed task in the critical line :crit, done, 2014-01-06,24h</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Implement parser                    :crit, done, after des1, 2d</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Create tests for parser             :crit, active, 3d</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Future task in critical line        :crit, 5d</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Create tests for renderer           :2d</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Add to mermaid                      :1d</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">section Documentation</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Describe gantt syntax               :active, a1, after des1, 3d</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Add gantt diagram to demo page      :after a1  , 20h</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Add another diagram to demo page    :doc1, after a1  , 48h</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">section Last section</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Describe gantt syntax               :after doc1, 3d</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Add gantt diagram to demo page      :20h</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Add another diagram to demo page    :48h</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p><strong>输出：</strong></p>
<div class="language-gantt line-numbers-mode" data-ext="gantt" data-title="gantt"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>dateFormat  YYYY-MM-DD</span></span>
<span class="line"><span>title       Adding GANTT diagram functionality to mermaid</span></span>
<span class="line"><span>excludes    weekends</span></span>
<span class="line"><span>%% (`excludes` accepts specific dates in YYYY-MM-DD format, days of the week ("sunday") or "weekends", but not the word "weekdays".)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>section A section</span></span>
<span class="line"><span>Completed task            :done,    des1, 2014-01-06,2014-01-08</span></span>
<span class="line"><span>Active task               :active,  des2, 2014-01-09, 3d</span></span>
<span class="line"><span>Future task               :         des3, after des2, 5d</span></span>
<span class="line"><span>Future task2              :         des4, after des3, 5d</span></span>
<span class="line"><span></span></span>
<span class="line"><span>section Critical tasks</span></span>
<span class="line"><span>Completed task in the critical line :crit, done, 2014-01-06,24h</span></span>
<span class="line"><span>Implement parser                    :crit, done, after des1, 2d</span></span>
<span class="line"><span>Create tests for parser             :crit, active, 3d</span></span>
<span class="line"><span>Future task in critical line        :crit, 5d</span></span>
<span class="line"><span>Create tests for renderer           :2d</span></span>
<span class="line"><span>Add to mermaid                      :1d</span></span>
<span class="line"><span></span></span>
<span class="line"><span>section Documentation</span></span>
<span class="line"><span>Describe gantt syntax               :active, a1, after des1, 3d</span></span>
<span class="line"><span>Add gantt diagram to demo page      :after a1  , 20h</span></span>
<span class="line"><span>Add another diagram to demo page    :doc1, after a1  , 48h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>section Last section</span></span>
<span class="line"><span>Describe gantt syntax               :after doc1, 3d</span></span>
<span class="line"><span>Add gantt diagram to demo page      :20h</span></span>
<span class="line"><span>Add another diagram to demo page    :48h</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="饼图" tabindex="-1"><a class="header-anchor" href="#饼图"><span>饼图</span></a></h3>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">pie</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">title What Voldemort doesn't have?</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  "FRIENDS" : 2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  "FAMILY" : 3</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  "NOSE" : 45</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-pie line-numbers-mode" data-ext="pie" data-title="pie"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>title What Voldemort doesn't have?</span></span>
<span class="line"><span>  "FRIENDS" : 2</span></span>
<span class="line"><span>  "FAMILY" : 3</span></span>
<span class="line"><span>  "NOSE" : 45</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-图表" tabindex="-1"><a class="header-anchor" href="#git-图表"><span>Git 图表</span></a></h3>
<p><strong>输入：</strong></p>
<details class="hint-container details"><summary>查看代码</summary>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">git-graph</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">commit</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">branch hotfix</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">checkout hotfix</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">commit</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">branch develop</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">checkout develop</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">commit id:"ash" tag:"abc"</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">branch featureB</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">checkout featureB</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">commit type:HIGHLIGHT</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">checkout main</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">checkout hotfix</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">commit type:NORMAL</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">checkout develop</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">commit type:REVERSE</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">checkout featureB</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">commit</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">checkout main</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">merge hotfix</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">checkout featureB</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">commit</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">checkout develop</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">branch featureA</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">commit</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">checkout develop</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">merge hotfix</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">checkout featureA</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">commit</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">checkout featureB</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">commit</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">checkout develop</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">merge featureA</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">branch release</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">checkout release</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">commit</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">checkout main</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">commit</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">checkout release</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">merge main</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">checkout develop</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">merge release</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p><strong>输出：</strong></p>
<div class="language-git-graph line-numbers-mode" data-ext="git-graph" data-title="git-graph"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>commit</span></span>
<span class="line"><span>branch hotfix</span></span>
<span class="line"><span>checkout hotfix</span></span>
<span class="line"><span>commit</span></span>
<span class="line"><span>branch develop</span></span>
<span class="line"><span>checkout develop</span></span>
<span class="line"><span>commit id:"ash" tag:"abc"</span></span>
<span class="line"><span>branch featureB</span></span>
<span class="line"><span>checkout featureB</span></span>
<span class="line"><span>commit type:HIGHLIGHT</span></span>
<span class="line"><span>checkout main</span></span>
<span class="line"><span>checkout hotfix</span></span>
<span class="line"><span>commit type:NORMAL</span></span>
<span class="line"><span>checkout develop</span></span>
<span class="line"><span>commit type:REVERSE</span></span>
<span class="line"><span>checkout featureB</span></span>
<span class="line"><span>commit</span></span>
<span class="line"><span>checkout main</span></span>
<span class="line"><span>merge hotfix</span></span>
<span class="line"><span>checkout featureB</span></span>
<span class="line"><span>commit</span></span>
<span class="line"><span>checkout develop</span></span>
<span class="line"><span>branch featureA</span></span>
<span class="line"><span>commit</span></span>
<span class="line"><span>checkout develop</span></span>
<span class="line"><span>merge hotfix</span></span>
<span class="line"><span>checkout featureA</span></span>
<span class="line"><span>commit</span></span>
<span class="line"><span>checkout featureB</span></span>
<span class="line"><span>commit</span></span>
<span class="line"><span>checkout develop</span></span>
<span class="line"><span>merge featureA</span></span>
<span class="line"><span>branch release</span></span>
<span class="line"><span>checkout release</span></span>
<span class="line"><span>commit</span></span>
<span class="line"><span>checkout main</span></span>
<span class="line"><span>commit</span></span>
<span class="line"><span>checkout release</span></span>
<span class="line"><span>merge main</span></span>
<span class="line"><span>checkout develop</span></span>
<span class="line"><span>merge release</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c4c-图表" tabindex="-1"><a class="header-anchor" href="#c4c-图表"><span>C4C 图表</span></a></h3>
<p><strong>输入：</strong></p>
<details class="hint-container details"><summary>查看代码</summary>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">c4c</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">title System Context diagram for Internet Banking System</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Person(customerA, "Banking Customer A", "A customer of the bank, with personal bank accounts.")</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Person(customerB, "Banking Customer B")</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Person_Ext(customerC, "Banking Customer C")</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">System(SystemAA, "Internet Banking System", "Allows customers to view information about their bank accounts, and make payments.")</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Person(customerD, "Banking Customer D", "A customer of the bank, &#x3C;br/> with personal bank accounts.")</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Enterprise_Boundary(b1, "BankBoundary") {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  SystemDb_Ext(SystemE, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  System_Boundary(b2, "BankBoundary2") {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    System(SystemA, "Banking System A")</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    System(SystemB, "Banking System B", "A system of the bank, with personal bank accounts.")</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  System_Ext(SystemC, "E-mail system", "The internal Microsoft Exchange e-mail system.")</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  SystemDb(SystemD, "Banking System D Database", "A system of the bank, with personal bank accounts.")</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Boundary(b3, "BankBoundary3", "boundary") {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    SystemQueue(SystemF, "Banking System F Queue", "A system of the bank, with personal bank accounts.")</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    SystemQueue_Ext(SystemG, "Banking System G Queue", "A system of the bank, with personal bank accounts.")</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">BiRel(customerA, SystemAA, "Uses")</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">BiRel(SystemAA, SystemE, "Uses")</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Rel(SystemAA, SystemC, "Sends e-mails", "SMTP")</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Rel(SystemC, customerA, "Sends e-mails to")</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p><strong>输出：</strong></p>
<div class="language-c4c line-numbers-mode" data-ext="c4c" data-title="c4c"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>title System Context diagram for Internet Banking System</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Person(customerA, "Banking Customer A", "A customer of the bank, with personal bank accounts.")</span></span>
<span class="line"><span>Person(customerB, "Banking Customer B")</span></span>
<span class="line"><span>Person_Ext(customerC, "Banking Customer C")</span></span>
<span class="line"><span>System(SystemAA, "Internet Banking System", "Allows customers to view information about their bank accounts, and make payments.")</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Person(customerD, "Banking Customer D", "A customer of the bank, &#x3C;br/> with personal bank accounts.")</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Enterprise_Boundary(b1, "BankBoundary") {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  SystemDb_Ext(SystemE, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  System_Boundary(b2, "BankBoundary2") {</span></span>
<span class="line"><span>    System(SystemA, "Banking System A")</span></span>
<span class="line"><span>    System(SystemB, "Banking System B", "A system of the bank, with personal bank accounts.")</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  System_Ext(SystemC, "E-mail system", "The internal Microsoft Exchange e-mail system.")</span></span>
<span class="line"><span>  SystemDb(SystemD, "Banking System D Database", "A system of the bank, with personal bank accounts.")</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Boundary(b3, "BankBoundary3", "boundary") {</span></span>
<span class="line"><span>    SystemQueue(SystemF, "Banking System F Queue", "A system of the bank, with personal bank accounts.")</span></span>
<span class="line"><span>    SystemQueue_Ext(SystemG, "Banking System G Queue", "A system of the bank, with personal bank accounts.")</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BiRel(customerA, SystemAA, "Uses")</span></span>
<span class="line"><span>BiRel(SystemAA, SystemE, "Uses")</span></span>
<span class="line"><span>Rel(SystemAA, SystemC, "Sends e-mails", "SMTP")</span></span>
<span class="line"><span>Rel(SystemC, customerA, "Sends e-mails to")</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="思维导图" tabindex="-1"><a class="header-anchor" href="#思维导图"><span>思维导图</span></a></h3>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">mindmap</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">root((VuePress))</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Out of box</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    Default theme</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">      Navbar</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">      Sidebar</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">      Darkmode</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    I18n</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    Search</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">      Search</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">      DocSearch&#x3C;br />by algolia</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Customize</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    Theme</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">      (hope)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    Plugins</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">      (components)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">      (md-enhance)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-mindmap line-numbers-mode" data-ext="mindmap" data-title="mindmap"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>root((VuePress))</span></span>
<span class="line"><span>  Out of box</span></span>
<span class="line"><span>    Default theme</span></span>
<span class="line"><span>      Navbar</span></span>
<span class="line"><span>      Sidebar</span></span>
<span class="line"><span>      Darkmode</span></span>
<span class="line"><span>    I18n</span></span>
<span class="line"><span>    Search</span></span>
<span class="line"><span>      Search</span></span>
<span class="line"><span>      DocSearch&#x3C;br />by algolia</span></span>
<span class="line"><span>  Customize</span></span>
<span class="line"><span>    Theme</span></span>
<span class="line"><span>      (hope)</span></span>
<span class="line"><span>    Plugins</span></span>
<span class="line"><span>      (components)</span></span>
<span class="line"><span>      (md-enhance)</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="时序图" tabindex="-1"><a class="header-anchor" href="#时序图"><span>时序图</span></a></h3>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">timeline</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">title Timeline of Industrial Revolution</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">section 17th-20th century</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    Industry 1.0 : Machinery, Water power, Steam &#x3C;br>power</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    Industry 2.0 : Electricity, Internal combustion engine, Mass production</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    Industry 3.0 : Electronics, Computers, Automation</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">section 21st century</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    Industry 4.0 : Internet, Robotics, Internet of Things</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    Industry 5.0 : Artificial intelligence, Big data,3D printing</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-timeline line-numbers-mode" data-ext="timeline" data-title="timeline"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>title Timeline of Industrial Revolution</span></span>
<span class="line"><span>section 17th-20th century</span></span>
<span class="line"><span>    Industry 1.0 : Machinery, Water power, Steam &#x3C;br>power</span></span>
<span class="line"><span>    Industry 2.0 : Electricity, Internal combustion engine, Mass production</span></span>
<span class="line"><span>    Industry 3.0 : Electronics, Computers, Automation</span></span>
<span class="line"><span>section 21st century</span></span>
<span class="line"><span>    Industry 4.0 : Internet, Robotics, Internet of Things</span></span>
<span class="line"><span>    Industry 5.0 : Artificial intelligence, Big data,3D printing</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="桑基图" tabindex="-1"><a class="header-anchor" href="#桑基图"><span>桑基图</span></a></h3>
<p><strong>输入：</strong></p>
<details class="hint-container details"><summary>查看代码</summary>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">sankey</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Agricultural 'waste',Bio-conversion,124.729</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Bio-conversion,Liquid,0.597</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Bio-conversion,Losses,26.862</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Bio-conversion,Solid,280.322</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Bio-conversion,Gas,81.144</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Biofuel imports,Liquid,35</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Biomass imports,Solid,35</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Coal imports,Coal,11.606</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Coal reserves,Coal,63.965</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Coal,Solid,75.571</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">District heating,Industry,10.639</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">District heating,Heating and cooling - commercial,22.505</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">District heating,Heating and cooling - homes,46.184</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Electricity grid,Over generation / exports,104.453</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Electricity grid,Heating and cooling - homes,113.726</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Electricity grid,H2 conversion,27.14</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Electricity grid,Industry,342.165</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Electricity grid,Road transport,37.797</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Electricity grid,Agriculture,4.412</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Electricity grid,Heating and cooling - commercial,40.858</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Electricity grid,Losses,56.691</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Electricity grid,Rail transport,7.863</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Electricity grid,Lighting &#x26; appliances - commercial,90.008</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Electricity grid,Lighting &#x26; appliances - homes,93.494</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Gas imports,Ngas,40.719</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Gas reserves,Ngas,82.233</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Gas,Heating and cooling - commercial,0.129</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Gas,Losses,1.401</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Gas,Thermal generation,151.891</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Gas,Agriculture,2.096</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Gas,Industry,48.58</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Geothermal,Electricity grid,7.013</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">H2 conversion,H2,20.897</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">H2 conversion,Losses,6.242</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">H2,Road transport,20.897</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Hydro,Electricity grid,6.995</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Liquid,Industry,121.066</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Liquid,International shipping,128.69</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Liquid,Road transport,135.835</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Liquid,Domestic aviation,14.458</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Liquid,International aviation,206.267</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Liquid,Agriculture,3.64</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Liquid,National navigation,33.218</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Liquid,Rail transport,4.413</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Marine algae,Bio-conversion,4.375</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Ngas,Gas,122.952</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Nuclear,Thermal generation,839.978</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Oil imports,Oil,504.287</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Oil reserves,Oil,107.703</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Oil,Liquid,611.99</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Other waste,Solid,56.587</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Other waste,Bio-conversion,77.81</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Pumped heat,Heating and cooling - homes,193.026</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Pumped heat,Heating and cooling - commercial,70.672</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Solar PV,Electricity grid,59.901</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Solar Thermal,Heating and cooling - homes,19.263</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Solar,Solar Thermal,19.263</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Solar,Solar PV,59.901</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Solid,Agriculture,0.882</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Solid,Thermal generation,400.12</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Solid,Industry,46.477</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Thermal generation,Electricity grid,525.531</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Thermal generation,Losses,787.129</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Thermal generation,District heating,79.329</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Tidal,Electricity grid,9.452</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">UK land based bioenergy,Bio-conversion,182.01</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Wave,Electricity grid,19.013</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Wind,Electricity grid,289.366</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p><strong>输出：</strong></p>
<div class="language-sankey line-numbers-mode" data-ext="sankey" data-title="sankey"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>Agricultural 'waste',Bio-conversion,124.729</span></span>
<span class="line"><span>Bio-conversion,Liquid,0.597</span></span>
<span class="line"><span>Bio-conversion,Losses,26.862</span></span>
<span class="line"><span>Bio-conversion,Solid,280.322</span></span>
<span class="line"><span>Bio-conversion,Gas,81.144</span></span>
<span class="line"><span>Biofuel imports,Liquid,35</span></span>
<span class="line"><span>Biomass imports,Solid,35</span></span>
<span class="line"><span>Coal imports,Coal,11.606</span></span>
<span class="line"><span>Coal reserves,Coal,63.965</span></span>
<span class="line"><span>Coal,Solid,75.571</span></span>
<span class="line"><span>District heating,Industry,10.639</span></span>
<span class="line"><span>District heating,Heating and cooling - commercial,22.505</span></span>
<span class="line"><span>District heating,Heating and cooling - homes,46.184</span></span>
<span class="line"><span>Electricity grid,Over generation / exports,104.453</span></span>
<span class="line"><span>Electricity grid,Heating and cooling - homes,113.726</span></span>
<span class="line"><span>Electricity grid,H2 conversion,27.14</span></span>
<span class="line"><span>Electricity grid,Industry,342.165</span></span>
<span class="line"><span>Electricity grid,Road transport,37.797</span></span>
<span class="line"><span>Electricity grid,Agriculture,4.412</span></span>
<span class="line"><span>Electricity grid,Heating and cooling - commercial,40.858</span></span>
<span class="line"><span>Electricity grid,Losses,56.691</span></span>
<span class="line"><span>Electricity grid,Rail transport,7.863</span></span>
<span class="line"><span>Electricity grid,Lighting &#x26; appliances - commercial,90.008</span></span>
<span class="line"><span>Electricity grid,Lighting &#x26; appliances - homes,93.494</span></span>
<span class="line"><span>Gas imports,Ngas,40.719</span></span>
<span class="line"><span>Gas reserves,Ngas,82.233</span></span>
<span class="line"><span>Gas,Heating and cooling - commercial,0.129</span></span>
<span class="line"><span>Gas,Losses,1.401</span></span>
<span class="line"><span>Gas,Thermal generation,151.891</span></span>
<span class="line"><span>Gas,Agriculture,2.096</span></span>
<span class="line"><span>Gas,Industry,48.58</span></span>
<span class="line"><span>Geothermal,Electricity grid,7.013</span></span>
<span class="line"><span>H2 conversion,H2,20.897</span></span>
<span class="line"><span>H2 conversion,Losses,6.242</span></span>
<span class="line"><span>H2,Road transport,20.897</span></span>
<span class="line"><span>Hydro,Electricity grid,6.995</span></span>
<span class="line"><span>Liquid,Industry,121.066</span></span>
<span class="line"><span>Liquid,International shipping,128.69</span></span>
<span class="line"><span>Liquid,Road transport,135.835</span></span>
<span class="line"><span>Liquid,Domestic aviation,14.458</span></span>
<span class="line"><span>Liquid,International aviation,206.267</span></span>
<span class="line"><span>Liquid,Agriculture,3.64</span></span>
<span class="line"><span>Liquid,National navigation,33.218</span></span>
<span class="line"><span>Liquid,Rail transport,4.413</span></span>
<span class="line"><span>Marine algae,Bio-conversion,4.375</span></span>
<span class="line"><span>Ngas,Gas,122.952</span></span>
<span class="line"><span>Nuclear,Thermal generation,839.978</span></span>
<span class="line"><span>Oil imports,Oil,504.287</span></span>
<span class="line"><span>Oil reserves,Oil,107.703</span></span>
<span class="line"><span>Oil,Liquid,611.99</span></span>
<span class="line"><span>Other waste,Solid,56.587</span></span>
<span class="line"><span>Other waste,Bio-conversion,77.81</span></span>
<span class="line"><span>Pumped heat,Heating and cooling - homes,193.026</span></span>
<span class="line"><span>Pumped heat,Heating and cooling - commercial,70.672</span></span>
<span class="line"><span>Solar PV,Electricity grid,59.901</span></span>
<span class="line"><span>Solar Thermal,Heating and cooling - homes,19.263</span></span>
<span class="line"><span>Solar,Solar Thermal,19.263</span></span>
<span class="line"><span>Solar,Solar PV,59.901</span></span>
<span class="line"><span>Solid,Agriculture,0.882</span></span>
<span class="line"><span>Solid,Thermal generation,400.12</span></span>
<span class="line"><span>Solid,Industry,46.477</span></span>
<span class="line"><span>Thermal generation,Electricity grid,525.531</span></span>
<span class="line"><span>Thermal generation,Losses,787.129</span></span>
<span class="line"><span>Thermal generation,District heating,79.329</span></span>
<span class="line"><span>Tidal,Electricity grid,9.452</span></span>
<span class="line"><span>UK land based bioenergy,Bio-conversion,182.01</span></span>
<span class="line"><span>Wave,Electricity grid,19.013</span></span>
<span class="line"><span>Wind,Electricity grid,289.366</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="依赖图" tabindex="-1"><a class="header-anchor" href="#依赖图"><span>依赖图</span></a></h3>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">requirement</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">requirement test_req {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">id: 1</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">text: the test text.</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">risk: high</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">verifymethod: test</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">element test_entity {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">type: simulation</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">test_entity - satisfies -> test_req</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-requirement line-numbers-mode" data-ext="requirement" data-title="requirement"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>requirement test_req {</span></span>
<span class="line"><span>id: 1</span></span>
<span class="line"><span>text: the test text.</span></span>
<span class="line"><span>risk: high</span></span>
<span class="line"><span>verifymethod: test</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>element test_entity {</span></span>
<span class="line"><span>type: simulation</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>test_entity - satisfies -> test_req</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="象限图" tabindex="-1"><a class="header-anchor" href="#象限图"><span>象限图</span></a></h3>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">quadrant</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">title Reach and engagement of campaigns</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">x-axis Low Reach --> High Reach</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">y-axis Low Engagement --> High Engagement</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">quadrant-1 We should expand</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">quadrant-2 Need to promote</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">quadrant-3 Re-evaluate</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">quadrant-4 May be improved</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Campaign A: [0.3, 0.6]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Campaign B: [0.45, 0.23]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Campaign C: [0.57, 0.69]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Campaign D: [0.78, 0.34]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Campaign E: [0.40, 0.34]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Campaign F: [0.35, 0.78]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-quadrant line-numbers-mode" data-ext="quadrant" data-title="quadrant"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>title Reach and engagement of campaigns</span></span>
<span class="line"><span>x-axis Low Reach --> High Reach</span></span>
<span class="line"><span>y-axis Low Engagement --> High Engagement</span></span>
<span class="line"><span>quadrant-1 We should expand</span></span>
<span class="line"><span>quadrant-2 Need to promote</span></span>
<span class="line"><span>quadrant-3 Re-evaluate</span></span>
<span class="line"><span>quadrant-4 May be improved</span></span>
<span class="line"><span>Campaign A: [0.3, 0.6]</span></span>
<span class="line"><span>Campaign B: [0.45, 0.23]</span></span>
<span class="line"><span>Campaign C: [0.57, 0.69]</span></span>
<span class="line"><span>Campaign D: [0.78, 0.34]</span></span>
<span class="line"><span>Campaign E: [0.40, 0.34]</span></span>
<span class="line"><span>Campaign F: [0.35, 0.78]</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="xy图" tabindex="-1"><a class="header-anchor" href="#xy图"><span>XY图</span></a></h3>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">xy</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">title "Sales Revenue"</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">x-axis [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">y-axis "Revenue (in $)" 4000 --> 11000</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">bar [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">line [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-xy line-numbers-mode" data-ext="xy" data-title="xy"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>title "Sales Revenue"</span></span>
<span class="line"><span>x-axis [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]</span></span>
<span class="line"><span>y-axis "Revenue (in $)" 4000 --> 11000</span></span>
<span class="line"><span>bar [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]</span></span>
<span class="line"><span>line [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="块图" tabindex="-1"><a class="header-anchor" href="#块图"><span>块图</span></a></h3>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">block</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">columns 3</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">前端 blockArrowId6&#x3C;[" "]>(right) 后端</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">space:2 down&#x3C;[" "]>(down)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">硬盘 left&#x3C;[" "]>(left) Database[("数据库")]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">classDef front fill:#696,stroke:#333;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">classDef back fill:#969,stroke:#333;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">class Frontend front</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">class Backend,Database back</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-block line-numbers-mode" data-ext="block" data-title="block"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>columns 3</span></span>
<span class="line"><span>前端 blockArrowId6&#x3C;[" "]>(right) 后端</span></span>
<span class="line"><span>space:2 down&#x3C;[" "]>(down)</span></span>
<span class="line"><span>硬盘 left&#x3C;[" "]>(left) Database[("数据库")]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>classDef front fill:#696,stroke:#333;</span></span>
<span class="line"><span>classDef back fill:#969,stroke:#333;</span></span>
<span class="line"><span>class Frontend front</span></span>
<span class="line"><span>class Backend,Database back</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复杂例子" tabindex="-1"><a class="header-anchor" href="#复杂例子"><span>复杂例子</span></a></h3>
<p><strong>输入：</strong></p>
<details class="hint-container details"><summary>查看代码</summary>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">mermaid</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">graph TB</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    sq[Square shape] --> ci((Circle shape))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    subgraph A</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        od>Odd shape]-- Two line&#x3C;br/>edge comment --> ro</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        di{Diamond with &#x3C;br/> line break} -.-> ro(Rounded&#x3C;br>square&#x3C;br>shape)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        di==>ro2(Rounded square shape)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    %% Notice that no text in shape are added here instead that is appended further down</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    e --> od3>Really long text with line break&#x3C;br>in an Odd shape]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    %% Comments after double percent signs</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    e((Inner / circle&#x3C;br>and some odd &#x3C;br>special characters)) --> f(,.?!+-*ز)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    cyr[Cyrillic]-->cyr2((Circle shape));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">     classDef green fill:#9f6,stroke:#333,stroke-width:2px;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">     classDef orange fill:#f96,stroke:#333,stroke-width:4px;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">     class sq,e green</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">     class di orange</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p><strong>输出：</strong></p>
<div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">graph TB</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    sq[Square shape] --> ci((Circle shape))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    subgraph A</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        od>Odd shape]-- Two line&#x3C;br/>edge comment --> ro</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        di{Diamond with &#x3C;br/> line break} -.-> ro(Rounded&#x3C;br>square&#x3C;br>shape)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        di==>ro2(Rounded square shape)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    %% Notice that no text in shape are added here instead that is appended further down</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    e --> od3>Really long text with line break&#x3C;br>in an Odd shape]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    %% Comments after double percent signs</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    e((Inner / circle&#x3C;br>and some odd &#x3C;br>special characters)) --> f(,.?!+-*ز)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    cyr[Cyrillic]-->cyr2((Circle shape));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">     classDef green fill:#9f6,stroke:#333,stroke-width:2px;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">     classDef orange fill:#f96,stroke:#333,stroke-width:4px;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">     class sq,e green</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">     class di orange</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



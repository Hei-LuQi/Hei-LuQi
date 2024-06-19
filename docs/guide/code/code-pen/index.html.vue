<template><div><p>主题支持在 Markdown 文件中嵌入 <a href="https://codepen.io/" target="_blank" rel="noopener noreferrer">CodePen</a>。</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>此功能默认不启用，你可以在配置文件中启用它。</p>
<CodeTabs id="9" :data='[{"id":".vuepress/config.ts"}]'>
<template #title0="{ value, isActive }">.vuepress/config.ts</template>
<template #tab0="{ value, isActive }">
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark has-highlighted vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      markdownPower</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        codepen</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2>
<p>简单语法：</p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">codepen</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline">user/slash</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>更多选项支持：</p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">codepen preview editable tab="css,result" theme="dark" height="500px" width="100%"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline">user/slash</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><code v-pre>preview</code>: 是否渲染为预览模式</li>
<li><code v-pre>editable</code>: 是否可编辑</li>
<li><code v-pre>tab</code>: 默认显示的标签， 默认为 <code v-pre>result</code>，多个使用 <code v-pre>,</code> 分隔</li>
<li><code v-pre>theme</code>: 主题， 可选值 <code v-pre>dark</code> 和 <code v-pre>light</code></li>
<li><code v-pre>height</code>: 容器高度， 默认为 <code v-pre>400px</code></li>
<li><code v-pre>width</code>: 容器宽度， 默认为 <code v-pre>100%</code></li>
<li><code v-pre>user</code>: CodePen 用户名</li>
<li><code v-pre>slash</code>: CodePen 代码文件名</li>
</ul>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>
<p>输入：</p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">codepen</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline">leimapapa/RwOZQOW</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>输出：</p>
<iframe class="code-pen-iframe-wrapper" src="https://codepen.io/leimapapa/embed/RwOZQOW?default-tab=result" title="Codepen" style="width:100%;height:400px;margin:16px auto;border-radius:5px;" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">See the Pen <a href="https://codepen.io/leimapapa/pen/RwOZQOW">Codepen</a> by leimapapa (<a href="https://codepen.io/leimapapa">@leimapapa</a>) on <a href="https://codepen.io/">CodePen</a>.</iframe><p><strong>预览模式：</strong></p>
<p>输入：</p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">codepen preview</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline">leimapapa/RwOZQOW</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>输出：</p>
<iframe class="code-pen-iframe-wrapper" src="https://codepen.io/leimapapa/embed/preview/RwOZQOW?default-tab=result" title="Codepen" style="width:100%;height:400px;margin:16px auto;border-radius:5px;" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">See the Pen <a href="https://codepen.io/leimapapa/pen/RwOZQOW">Codepen</a> by leimapapa (<a href="https://codepen.io/leimapapa">@leimapapa</a>) on <a href="https://codepen.io/">CodePen</a>.</iframe><p><strong>编辑模式：</strong></p>
<p>输入：</p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">codepen editable tab="html,result"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline">leimapapa/RwOZQOW</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>输出：</p>
<iframe class="code-pen-iframe-wrapper" src="https://codepen.io/leimapapa/embed/RwOZQOW?editable=true&default-tab=html%2Cresult" title="Codepen" style="width:100%;height:400px;margin:16px auto;border-radius:5px;" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">See the Pen <a href="https://codepen.io/leimapapa/pen/RwOZQOW">Codepen</a> by leimapapa (<a href="https://codepen.io/leimapapa">@leimapapa</a>) on <a href="https://codepen.io/">CodePen</a>.</iframe></div></template>



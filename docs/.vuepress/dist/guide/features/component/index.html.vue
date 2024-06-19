<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>主题提供了一些具有通用性的组件，可以在任何地方使用。</p>
<h2 id="badge" tabindex="-1"><a class="header-anchor" href="#badge"><span><code v-pre>&lt;Badge /&gt;</code> <Badge type="tip" text="badge" /></span></a></h2>
<p>标签，用于在页面中增加一些提示信息。</p>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td><code v-pre>'info' | 'tip' | 'warning' | 'danger'</code></td>
<td><code v-pre>'tip'</code></td>
<td>类型</td>
</tr>
<tr>
<td>text</td>
<td><code v-pre>string</code></td>
<td><code v-pre>''</code></td>
<td>文本</td>
</tr>
</tbody>
</table>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> VuePress - </span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">Badge</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">info</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> text</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">v2</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> VuePress - </span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">Badge</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">tip</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> text</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">v2</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> VuePress - </span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">Badge</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">warning</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> text</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">v2</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> VuePress - </span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">Badge</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">danger</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> text</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">v2</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> /></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<ul>
<li>VuePress - <Badge type="info" text="v2" /></li>
<li>VuePress - <Badge type="tip" text="v2" /></li>
<li>VuePress - <Badge type="warning" text="v2" /></li>
<li>VuePress - <Badge type="danger" text="v2" /></li>
</ul>
<h2 id="iconify" tabindex="-1"><a class="header-anchor" href="#iconify"><span><code v-pre>&lt;Iconify /&gt;</code></span></a></h2>
<p>支持 iconify 所有图标，支持通过 icon name 加载图标。</p>
<p>可在 <a href="https://icon-sets.iconify.design/" target="_blank" rel="noopener noreferrer">iconify search</a> 搜索图标使用。</p>
<h3 id="props-1" tabindex="-1"><a class="header-anchor" href="#props-1"><span>Props</span></a></h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>string</td>
<td><code v-pre>''</code></td>
<td>icon name</td>
</tr>
<tr>
<td>color</td>
<td>string</td>
<td><code v-pre>'currentcolor'</code></td>
<td>icon color</td>
</tr>
<tr>
<td>size</td>
<td>string</td>
<td><code v-pre>'1em'</code></td>
<td>icon size</td>
</tr>
</tbody>
</table>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> home - </span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">Iconify</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">material-symbols:home</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> color</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">currentColor</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> size</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">1em</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> vscode - </span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">Iconify</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">skill-icons:vscode-dark</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> size</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">2em</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> twitter - </span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">Iconify</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">skill-icons:twitter</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> size</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">2em</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> /></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<ul>
<li>home - <Iconify name="material-symbols:home" color="currentColor" size="1em" /></li>
<li>vscode - <Iconify name="skill-icons:vscode-dark" size="2em" /></li>
<li>twitter - <Iconify name="skill-icons:twitter" size="2em" /></li>
</ul>
<h2 id="plot" tabindex="-1"><a class="header-anchor" href="#plot"><span><code v-pre>&lt;Plot /&gt;</code></span></a></h2>
<p><RouteLink to="/guide/markdown/advance/#%E9%9A%90%E7%A7%98-%E6%96%87%E6%9C%AC">“隐秘”文本</RouteLink> 组件。</p>
<p>该组件默认不启用，你需要在 theme 配置中启用。</p>
<CodeTabs id="199" :data='[{"id":".vuepress/config.ts"}]'>
<template #title0="{ value, isActive }">.vuepress/config.ts</template>
<template #tab0="{ value, isActive }">
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      markdownPower</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        plot</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="props-2" tabindex="-1"><a class="header-anchor" href="#props-2"><span>Props</span></a></h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>trigger</td>
<td><code v-pre>'hover' | 'click'</code></td>
<td><code v-pre>'hover'</code></td>
<td>鼠标悬停触发，或者点击触发</td>
</tr>
<tr>
<td>mask</td>
<td><code v-pre>string | { light: string, dark: string }</code></td>
<td><code v-pre>#000</code></td>
<td>遮罩颜色</td>
</tr>
<tr>
<td>color</td>
<td><code v-pre>string | { light: string, dark: string }</code></td>
<td><code v-pre>#fff</code></td>
<td>文本颜色</td>
</tr>
</tbody>
</table>
<p>输入：</p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 鼠标悬停 - </span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">Plot</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">悬停时可见</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">Plot</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 点击 - </span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">Plot</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> trigger</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">click</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">点击时可见</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">Plot</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<ul>
<li>鼠标悬停 - <Plot>悬停时可见</Plot></li>
<li>点击 - <Plot trigger="click">点击时可见</Plot></li>
</ul>
<h2 id="homebox" tabindex="-1"><a class="header-anchor" href="#homebox"><span><code v-pre>&lt;HomeBox /&gt;</code></span></a></h2>
<ul>
<li>类型：<code v-pre>Component</code></li>
</ul>
<p>自定义首页时，提供给 区域 的 包装容器。</p>
<h3 id="props-3" tabindex="-1"><a class="header-anchor" href="#props-3"><span>Props</span></a></h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>string</td>
<td><code v-pre>''</code></td>
<td>区域类型</td>
</tr>
<tr>
<td>full</td>
<td>boolean</td>
<td><code v-pre>false</code></td>
<td>是否全屏</td>
</tr>
<tr>
<td>background-image</td>
<td>string</td>
<td><code v-pre>''</code></td>
<td>区域背景图片</td>
</tr>
<tr>
<td>background-attachment</td>
<td><code v-pre>'fixed'|'local'</code></td>
<td><code v-pre>'local'</code></td>
<td>区域背景定位方式</td>
</tr>
</tbody>
</table>
</div></template>



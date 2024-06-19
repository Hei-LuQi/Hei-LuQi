<template><div><p>主题在代码高亮功能上，进一步支持了更多的特性，它们能够帮助你的代码块更加具备表达力。</p>
<h2 id="代码行号" tabindex="-1"><a class="header-anchor" href="#代码行号"><span>代码行号</span></a></h2>
<p>主题默认显示代码行号，它通过 <code v-pre>plugins.shiki.line-numbers</code> 来控制。</p>
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      shiki</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: { </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">lineNumbers</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你还可以通过 <code v-pre>:line-numbers</code> / <code v-pre>:no-line-numbers</code> 来控制当前代码块是否显示代码行号。
还可以通过在 <code v-pre>:line-numbers</code> 之后添加 <code v-pre>=</code> 来自定义起始行号，例如 <code v-pre>:line-numbers=2</code> 表示代码块中的行号从 <code v-pre>2</code> 开始。</p>
<p><strong>输入：</strong></p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>```ts:line-numbers</span></span>
<span class="line"><span>// 启用行号</span></span>
<span class="line"><span>const line2 = 'This is line 2'</span></span>
<span class="line"><span>const line3 = 'This is line 3'</span></span>
<span class="line"><span>```</span></span>
<span class="line"><span></span></span>
<span class="line"><span>```ts:no-line-numbers</span></span>
<span class="line"><span>// 行号已禁用</span></span>
<span class="line"><span>const line3 = 'This is line 3'</span></span>
<span class="line"><span>const line4 = 'This is line 4'</span></span>
<span class="line"><span>```</span></span>
<span class="line"><span></span></span>
<span class="line"><span>```ts:line-numbers=2</span></span>
<span class="line"><span>// 行号已启用，并从 2 开始</span></span>
<span class="line"><span>const line3 = 'This is line 3'</span></span>
<span class="line"><span>const line4 = 'This is line 4'</span></span>
<span class="line"><span>```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 启用行号</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">line2</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">This is line 2</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">line3</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">This is line 3</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ts" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 行号已禁用</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">line3</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">This is line 3</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">line4</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">This is line 4</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span></code></pre>

</div><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 行号已启用，并从 2 开始</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">line3</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">This is line 3</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">line4</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">This is line 4</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 1"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在代码块中实现行高亮" tabindex="-1"><a class="header-anchor" href="#在代码块中实现行高亮"><span>在代码块中实现行高亮</span></a></h2>
<p>在 <code v-pre>[lang]</code> 之后紧跟随 <code v-pre>{xxxx}</code> ，可以实现行高亮，其中 <code v-pre>xxx</code> 表示要高亮的行号。</p>
<p><strong>输入：</strong></p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>```js{4}</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data () {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      msg: 'Highlighted!'</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  data</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> ()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      msg</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Highlighted!</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了单行之外，还可以指定多个单行、多行，或两者均指定：</p>
<ul>
<li>多行：例如 <code v-pre>{5-8}</code>、<code v-pre>{3-10}</code>、<code v-pre>{10-17}</code></li>
<li>多个单行：例如 <code v-pre>{4,7,9}</code></li>
<li>多行与单行：例如 <code v-pre>{4,7-13,16,23-27,40}</code></li>
</ul>
<p><strong>输入：</strong></p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>```js{1,4,6-8}</span></span>
<span class="line"><span>export default { // Highlighted</span></span>
<span class="line"><span>  data () {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      msg: `Highlighted!</span></span>
<span class="line"><span>      This line isn't highlighted,</span></span>
<span class="line"><span>      but this and the next 2 are.`,</span></span>
<span class="line"><span>      motd: 'VitePress is awesome',</span></span>
<span class="line"><span>      lorem: 'ipsum'</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line highlighted"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // Highlighted</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  data</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> ()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      msg</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> `</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Highlighted!</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">      This line isn't highlighted,</span></span>
<span class="line highlighted"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">      but this and the next 2 are.</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">`</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      motd</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">VitePress is awesome</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      lorem</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ipsum</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以使用 <code v-pre>// [!code highlight]</code> 注释实现行高亮。</p>
<p><strong>输入：</strong></p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>```js</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data () {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      msg: 'Highlighted!' // [!code highlight]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark has-highlighted vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  data</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      msg</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Highlighted!</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码块中聚焦" tabindex="-1"><a class="header-anchor" href="#代码块中聚焦"><span>代码块中聚焦</span></a></h2>
<p>在某一行上添加 <code v-pre>// [!code focus]</code> 注释将聚焦它并模糊代码的其他部分。</p>
<p>此外，可以使用 <code v-pre>// [!code focus:&lt;lines&gt;]</code> 定义要聚焦的行数。</p>
<p><strong>输入：</strong></p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>```js</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data () {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      msg: 'Focused!' // [!code focus]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark has-focused-lines vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  data</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line has-focus"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      msg</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Focused!</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码块中的颜色差异" tabindex="-1"><a class="header-anchor" href="#代码块中的颜色差异"><span>代码块中的颜色差异</span></a></h2>
<p>在某一行添加 <code v-pre>// [!code --]</code> 或 <code v-pre>// [!code ++]</code> 注释将会为该行创建 diff，同时保留代码块的颜色。</p>
<p><strong>输入：</strong></p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>```js</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data () {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      msg: 'Removed', // [!code --]</span></span>
<span class="line"><span>      msg: 'Added' // [!code ++]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  data</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line diff remove"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      msg</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Removed</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      msg</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Added</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高亮-错误-和-警告" tabindex="-1"><a class="header-anchor" href="#高亮-错误-和-警告"><span>高亮“错误”和“警告”</span></a></h2>
<p>在某一行添加 <code v-pre>// [!code warning]</code> 或 <code v-pre>// [!code error]</code> 注释将会为该行相应的着色。</p>
<p><strong>输入：</strong></p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>```js</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data () {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      msg: 'Error', // [!code error]</span></span>
<span class="line"><span>      msg: 'Warning' // [!code warning]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark has-highlighted vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  data</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line highlighted error"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      msg</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Error</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line highlighted warning"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      msg</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Warning</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码块中-词高亮" tabindex="-1"><a class="header-anchor" href="#代码块中-词高亮"><span>代码块中 词高亮</span></a></h2>
<p><strong>输入：</strong></p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>```ts</span></span>
<span class="line"><span>export function foo() { // [!code word:Hello]</span></span>
<span class="line"><span>  const msg = 'Hello World'</span></span>
<span class="line"><span>  console.log(msg) // prints Hello World</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> foo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">  const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">msg</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D" class="highlighted-word">Hello</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> World</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">msg</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // prints </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD" class="highlighted-word">Hello</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> World</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你还可以指定高亮显示的次数，例如 <code v-pre>[!code word:options:2]</code> 会高亮显示近两个 <code v-pre>options</code>。</p>
<p><strong>输入：</strong></p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>```ts</span></span>
<span class="line"><span>// [!code word:options:2]</span></span>
<span class="line"><span>const options = { foo: 'bar' }</span></span>
<span class="line"><span>options.foo = 'baz'</span></span>
<span class="line"><span>console.log(options.foo) // 这个不会被高亮显示</span></span>
<span class="line"><span>```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A" class="highlighted-word">options</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> { </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">foo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">bar</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A" class="highlighted-word">options</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">foo</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">baz</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">options</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">foo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 这个不会被高亮显示</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码块中的-空白符" tabindex="-1"><a class="header-anchor" href="#代码块中的-空白符"><span>代码块中的 空白符</span></a></h2>
<p>将空白字符（Tab 和空格）渲染为可见状态。</p>
<p>渲染每行代码行前的空格：</p>
<p><strong>输入：</strong></p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>```xml whitespace</span></span>
<span class="line"><span>&#x3C;catalog></span></span>
<span class="line"><span>    &#x3C;book></span></span>
<span class="line"><span>        &#x3C;title>Everyday Italian&#x3C;/title></span></span>
<span class="line"><span>    &#x3C;/book></span></span>
<span class="line"><span>&#x3C;/catalog></span></span>
<span class="line"><span>```</span></span>
<span class="line"><span>```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">catalog</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">book</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Everyday Italian</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">book</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">catalog</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>渲染每行代码行前的 Tab ：</p>
<p><strong>输入：</strong></p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>```xml whitespace</span></span>
<span class="line"><span>&#x3C;catalog></span></span>
<span class="line"><span>	&#x3C;book></span></span>
<span class="line"><span>		&#x3C;title>Everyday Italian&#x3C;/title></span></span>
<span class="line"><span>	&#x3C;/book></span></span>
<span class="line"><span>&#x3C;/catalog></span></span>
<span class="line"><span>```</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">catalog</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span class="tab">	</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">book</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span class="tab">	</span><span class="tab">	</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Everyday Italian</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span class="tab">	</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">book</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">catalog</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以在 <code v-pre>theme.plugins.shiki</code> 中全局启用 <code v-pre>whitespace</code> 功能：</p>
<CodeTabs id="176" :data='[{"id":".vuepress/config.ts"}]'>
<template #title0="{ value, isActive }">.vuepress/config.ts</template>
<template #tab0="{ value, isActive }">
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      shiki</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: { </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">whitespace</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
</div></template>



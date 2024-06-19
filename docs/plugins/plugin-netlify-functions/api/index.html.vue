<template><div><h2 id="netlifyfunctionsplugin-options" tabindex="-1"><a class="header-anchor" href="#netlifyfunctionsplugin-options"><span>netlifyFunctionsPlugin(options)</span></a></h2>
<p>在 vuepress 项目中使用， 或者 开发vuepress-theme时使用，提供 netlify-functions 开发时服务。</p>
<p>该插件应该优先于其他有依赖该插件的其他插件之前调用。</p>
<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">netlifyFunctionsPlugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  sourceDirectory</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> ''</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  destDirectory</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> ''</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  proxyPrefix</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> ''</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>options</span></a></h3>
<p><strong>类型：</strong> <code v-pre>{ sourceDirectory: string, destDirectory: string, proxyPrefix: string }</code></p>
<ul>
<li>
<p><code v-pre>options.sourceDirectory</code>:</p>
<p><code v-pre>functions</code> 开发时所在目录， 默认值： <code v-pre>app.dir.source('.vuepress/functions')</code>,
即，如果你的vuepress项目源码目录是 <code v-pre>src</code>， 那么 <code v-pre>sourceDirectory</code> 默认为 <code v-pre>src/.vuepress/functions/</code></p>
</li>
<li>
<p><code v-pre>options.destDirectory</code>:</p>
<p><code v-pre>functions</code> 构建后输出目录，默认值： <code v-pre>app.dir.dest('functions')</code>,
即，如果你的 vuepress项目配置的 <code v-pre>dest</code> 输出目录为 <code v-pre>docs</code>， 那么默认输出目录为 <code v-pre>docs/functions</code>,
一般来说，这个配置不需要手动修改。</p>
</li>
<li>
<p><code v-pre>options.proxyPrefix</code>:</p>
<p>在开发环境中， <code v-pre>Netlify Functions</code> 服务的默认路径是 <code v-pre>/.netlify/functions/*</code>, 但这并不能保持开发环境和
生产部署环境一致，所以需要将路径重写。</p>
<p>默认值： <code v-pre>/api</code></p>
<p>即 <code v-pre>^/api/*</code> 的请求会被转发到 <code v-pre>/.netlify/functions/*</code> ，
如, <code v-pre>functions/my_function.ts</code> ，则请求 <code v-pre>/api/my_function</code> 将会转发到 <code v-pre>/.netlify/functions/my_function</code>。</p>
</li>
</ul>
<h2 id="usenetlifyfunctionsplugin-app-options" tabindex="-1"><a class="header-anchor" href="#usenetlifyfunctionsplugin-app-options"><span>useNetlifyFunctionsPlugin(app, options)</span></a></h2>
<p>在开发 vuepress plugin 时使用，为插件提供 <code v-pre>netlify functiosn</code> 支持</p>
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> useNetlifyFunctionsPlugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-plugin-netlify-functions</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
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

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="options-1" tabindex="-1"><a class="header-anchor" href="#options-1"><span>options</span></a></h3>
<p><strong>类型：</strong> <code v-pre>{ directory: string }</code></p>
<ul>
<li>
<p><code v-pre>options.directory</code></p>
<p>插件中的 functions 开发目录。</p>
<p>一般来说，它的值都设置为 <code v-pre>path.resolve(__dirname, 'functions')</code></p>
</li>
</ul>
</div></template>



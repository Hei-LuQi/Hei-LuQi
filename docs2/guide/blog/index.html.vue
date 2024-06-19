<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>主题默认启用 博客功能，通常您无需进行额外的配置。</p>
<p>主题默认会将 <code v-pre>{sourceDir}</code> 目录下的，除了一些特定的目录（如 <code v-pre>notes</code> 目录将作为笔记所在目录），
所有 md 文件作为博客文章。</p>
<p>同时，主题会生成一个 链接地址为 <code v-pre>/blog/</code> 的 博客文章列表页。
展示所有的博客文章，以及 博主的相关信息。</p>
<h2 id="国际化支持" tabindex="-1"><a class="header-anchor" href="#国际化支持"><span>国际化支持</span></a></h2>
<p>如果启用了 国际化，那么博客列表页将会 根据 不同的语言，展示对应语言目录下的博客列表。
即 每个语言下的 文章列表 都是保持独立的。</p>
<h2 id="博主信息" tabindex="-1"><a class="header-anchor" href="#博主信息"><span>博主信息</span></a></h2>
<p>主题支持展示博主的基本信息。</p>
<div
  style="width: 310px;margin: 0 auto;padding: 20px 20px 1px;text-align:center;border-radius: 4px;
  background-color: var(--vp-c-bg-soft);transition: background-color var(--t-color);"
>
  <VPBlogProfile />
</div>
<h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3>
<p>你可以通过 <code v-pre>profile</code> 属性来设置博主头像等相关信息。</p>
<CodeTabs id="32" :data='[{"id":".vuepress/config.ts"}]'>
<template #title0="{ value, isActive }">.vuepress/config.ts</template>
<template #tab0="{ value, isActive }">
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    profile</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">你的名字</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      description</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">描述文字</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      avatar</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/blogger.png</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      circle</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 是否为圆形头像</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="文章元数据" tabindex="-1"><a class="header-anchor" href="#文章元数据"><span>文章元数据</span></a></h2>
<p>你可以配置展示博客文章的元数据，如标题、作者、日期、标签等。这些数据通过 <code v-pre>frontmatter</code> 配置。</p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 文章标题</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">createTime</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 2024/01/01 00:00:00</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">author</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> your name</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">tags</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> tag1</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> tag2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">---</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code v-pre>title</code> / <code v-pre>createTime</code> / <code v-pre>author</code> 会在新建 md 文件时由主题自动填充，你可以随意修改它们。</p>
<p>以下是在 博客文章中可用的 <code v-pre>frontmatter</code> 属性。</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td><code v-pre>string</code></td>
<td>默认自动填入文件名</td>
<td>文章标题</td>
</tr>
<tr>
<td>createTime</td>
<td><code v-pre>string</code></td>
<td>当前时间</td>
<td>文章创建时间</td>
</tr>
<tr>
<td>author</td>
<td><code v-pre>string</code></td>
<td>默认自动填入 <code v-pre>avatar.name</code></td>
<td>文章作者</td>
</tr>
<tr>
<td>tags</td>
<td><code v-pre>string[]</code></td>
<td><code v-pre>[]</code></td>
<td>文章标签</td>
</tr>
<tr>
<td>sticky</td>
<td><code v-pre>boolean | number</code></td>
<td>false</td>
<td>是否置顶, 如果为数字，则数字越大，置顶越靠前</td>
</tr>
<tr>
<td>article</td>
<td><code v-pre>boolean</code></td>
<td>true</td>
<td>是否在列表页中显示</td>
</tr>
</tbody>
</table>
<h2 id="文章摘要" tabindex="-1"><a class="header-anchor" href="#文章摘要"><span>文章摘要</span></a></h2>
<p>如果你想要为文章添加摘要，你可以使用 <code v-pre>&lt;!-- more --&gt;</code> 注释来标记它。任何在此注释之前的内容会被视为摘要。</p>
<h2 id="标签页和归档页" tabindex="-1"><a class="header-anchor" href="#标签页和归档页"><span>标签页和归档页</span></a></h2>
<p>主题除了自动生成 <strong>博客文章列表页</strong> 以外，还会自动生成 <strong>标签页</strong> 和 <strong>归档页</strong>。</p>
<p>标签页 可以根据 标签 筛选并展示 博客文章。</p>
<p>归档页根据文章的创建时间进行归档。</p>
</div></template>


<script setup lang="ts">
import VPBlogProfile from 'vuepress-theme-plume/components/Blog/VPBlogProfile.vue'
</script>
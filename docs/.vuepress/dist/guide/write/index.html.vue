<template><div><div class="hint-container info">
<p class="hint-container-title">提示</p>
<p>以下内容中，以 <code v-pre>sourceDir</code> 表示 项目中用于保存 <code v-pre>Markdown</code> 文件的目录。</p>
<p>如 <code v-pre>package.json</code>的<code v-pre>scripts</code> 中配置的 <code v-pre>vuepress dev src</code>，则表示 <code v-pre>sourceDir</code> 为 <code v-pre>src</code> 目录</p>
</div>
<h2 id="约定" tabindex="-1"><a class="header-anchor" href="#约定"><span>约定</span></a></h2>
<p>使用本主题编写文章是一件很轻松的事情，你可以在 <code v-pre>sourceDir</code>目录中按照你的个人命名喜好新建任意名字的<code v-pre>Markdown</code>文件，
主题将会自动帮你生成一个文章永久链接，并保存在文章的配置中，以便随时修改。</p>
<p>对于 <code v-pre>sourceDir</code> 中的文件夹命名，主题有一套简单的约定。</p>
<ul>
<li>文件夹的名称将作为 <code v-pre>category</code> 即 <strong>分类</strong>。</li>
<li>允许多级目录，子级目录将作为父目录对应的分类的子项。</li>
<li>如果目录名称 在 <RouteLink to="/vuepress-theme-plume/theme-config/#notes">主题配置 notes</RouteLink> 中声明用于 notes 文章管理，则默认不作为 分类目录。</li>
</ul>
<h3 id="文件夹命名约定" tabindex="-1"><a class="header-anchor" href="#文件夹命名约定"><span>文件夹命名约定</span></a></h3>
<p>由于文件夹名称将作为分类名称，且不在主题配置中进行排序配置，对于有排序需要的场景，使用以下规则进行命名</p>
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">dir</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> /</span><span style="--shiki-light:#5A6AA6;--shiki-dark:#6872AB">\d</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">+</span><span style="--shiki-light:#BDA437;--shiki-dark:#E6CC77">\.</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#5A6AA6;--shiki-dark:#6872AB">\s\S</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">+</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">/</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 即 数字 + . + 分类名称</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 如： 1.前端</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数字将作为 <strong>排序</strong> 的依据。 如果不带数字，则以默认的规则进行排序。</p>
<p><strong>example:</strong></p>
<div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span> .{sourceDir}</span></span>
<span class="line"><span>  - 1.前端</span></span>
<span class="line"><span>    - 1.html</span></span>
<span class="line"><span>    - 2.css</span></span>
<span class="line"><span>    - 3.javascript</span></span>
<span class="line"><span>  - 2.后端</span></span>
<span class="line"><span>  - 运维</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文章写作" tabindex="-1"><a class="header-anchor" href="#文章写作"><span>文章写作</span></a></h2>
<p>你可以使用 <code v-pre>markdown</code> 语法开始在 <code v-pre>sourceDir</code> 下新建 <code v-pre>Markdown</code> 文件，编写你自己的文章了，
关于 markdown 扩展的功能支持，请查看 <RouteLink to="/guide/markdown/extensions/">这个文档</RouteLink>。</p>
</div></template>



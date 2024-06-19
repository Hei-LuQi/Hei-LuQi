<template><div><h2 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h2>
<h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins"><span>plugins</span></a></h3>
<ul>
<li>类型：<code v-pre>PlumeThemePluginOptions</code></li>
<li>默认值： <code v-pre>{}</code></li>
<li>详情： 对主题内部使用的插件进行自定义配置。</li>
</ul>
<p>主题使用的插件默认已进行了配置，大多数情况下您不需要进行任何修改，如果需要使用到细致的定制化，请查阅
<RouteLink to="/config/plugins/">此文档</RouteLink></p>
<h3 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname"><span>hostname</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>''</code></p>
</li>
<li>
<p>详情：</p>
<p>部署站点域名。</p>
<p>当 <code v-pre>hostname</code> 配置为有效域名时，主题将会生成 <code v-pre>sitemap</code> 和 <code v-pre>seo</code> 相关的内容。</p>
</li>
</ul>
<h3 id="blog" tabindex="-1"><a class="header-anchor" href="#blog"><span>blog</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>false | BlogOptions</code></p>
</li>
<li>
<p>默认值： <code v-pre>{ link: '/blog/',  include: ['**/*.md'], exclude: [] }</code></p>
</li>
<li>
<p>详情：</p>
<p>博客配置。</p>
</li>
</ul>
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> BlogOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * blog list link</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">default</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">/blog/</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  link</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * 在 `blog.dir` 目录中，通过 glob string 配置包含文件</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">default</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> -</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> ['**\*.md']</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  include</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * 在 `blog.dir` 目录中，通过 glob string 配置排除的文件</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * README.md 文件一般作为主页或者某个目录下的主页，不应该被读取为 blog文章</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">default</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> -</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> ['.vuepress/', 'node_modules/', '{README,index}.md']</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  exclude</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * 分页配置</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  pagination</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">false</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">     * 每页显示的文章数量</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">     * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">default</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> 10</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">     */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    perPage</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">number</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * 是否启用标签页</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">default</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> true</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  tags</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * 是否启用归档页</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">default</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> true</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  archives</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="article" tabindex="-1"><a class="header-anchor" href="#article"><span>article</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>/article/</code></li>
<li>详情： 文章链接前缀</li>
</ul>
<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3>
<ul>
<li>类型： <code v-pre>Record&lt;string, PlumeThemeLocaleConfig&gt;</code></li>
<li>默认值： <code v-pre>{}</code></li>
<li>详情： 多语言配置</li>
</ul>
<p>多语言配置，参考 <RouteLink to="/config/locales/">此文档</RouteLink></p>
<p>多语言配置支持以下 <a href="#locale-%E9%85%8D%E7%BD%AE">Locale</a> 所有配置选项</p>
<h2 id="locale-配置" tabindex="-1"><a class="header-anchor" href="#locale-配置"><span>Locale 配置</span></a></h2>
<h3 id="home" tabindex="-1"><a class="header-anchor" href="#home"><span>home</span></a></h3>
<ul>
<li>类型： <code v-pre>false | string</code></li>
<li>默认值： <code v-pre>/</code></li>
<li>详情：
首页的路径， 它将被用于：
<ul>
<li>导航栏中 logo的链接；</li>
<li>404页面的 <em>返回首页</em> 的链接；</li>
</ul>
</li>
</ul>
<h3 id="logo" tabindex="-1"><a class="header-anchor" href="#logo"><span>logo</span></a></h3>
<ul>
<li>类型: <code v-pre>false | string</code></li>
<li>默认值： <code v-pre>false</code></li>
<li>详情： 导航栏中的logo。</li>
</ul>
<h3 id="logodark" tabindex="-1"><a class="header-anchor" href="#logodark"><span>logoDark</span></a></h3>
<ul>
<li>类型 <code v-pre>false | string</code></li>
<li>默认值： <code v-pre>false</code></li>
<li>详情： Dark模式下，导航栏中的logo。</li>
</ul>
<h3 id="appearance" tabindex="-1"><a class="header-anchor" href="#appearance"><span>appearance</span></a></h3>
<ul>
<li>类型： <code v-pre>boolean | 'dark' | 'force-dark</code></li>
<li>默认值： <code v-pre>true</code></li>
</ul>
<p>是否启用 深色模式。</p>
<ul>
<li>如果该选项设置为 <code v-pre>true</code>，则默认主题将由用户的首选配色方案决定。</li>
<li>如果该选项设置为 <code v-pre>dark</code>，则默认情况下主题将是深色的，除非用户手动切换它。</li>
<li>如果该选项设置为 <code v-pre>false</code>，用户将无法切换主题。</li>
<li>如果该选项设置为 <code v-pre>force-dark</code>，则用户将无法切换主题，但会强制将主题更改为深色。</li>
</ul>
<p>此选项注入一个内联脚本，从本地存储恢复用户设置。这确保在呈现页面之前应用 <code v-pre>.dark</code> 类以避免闪烁。</p>
<h3 id="appearancetext" tabindex="-1"><a class="header-anchor" href="#appearancetext"><span>appearanceText</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>'Appearance'</code></li>
<li>详情： 导航栏中的主题切换按钮的文本。</li>
</ul>
<h3 id="avatar" tabindex="-1"><a class="header-anchor" href="#avatar"><span>avatar <Badge type="danger" text="弃用" /></span></a></h3>
<p>弃用，请使用 <a href="#profile">profile</a>。</p>
<h3 id="profile" tabindex="-1"><a class="header-anchor" href="#profile"><span>profile</span></a></h3>
<ul>
<li>类型： <code v-pre>PlumeThemeProfile</code></li>
<li>默认值： <code v-pre>{}</code></li>
<li>详情：配置站点博主的个人信息
<ul>
<li><code v-pre>profile.avatar</code>: 头像地址，用于右侧博主信息展示</li>
<li><code v-pre>profile.name</code>: 名称， 用于右侧博主信息展示</li>
<li><code v-pre>profile.description</code>: 个人描述，用于右侧博主信息展示</li>
<li><code v-pre>profile.circle</code>: 是否为圆形头像</li>
<li><code v-pre>profile.location</code>: 用户地理位置</li>
<li><code v-pre>profile.organization</code>: 用户所在组织/公司</li>
</ul>
</li>
</ul>
<p>示例：</p>
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">themePlume</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    profile</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      avatar</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/avatar.jpg</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">张三</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      description</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">此处无银三百两，隔壁王二不曾偷</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      circle</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      location</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">杭州，中国</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      organization</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">xxx公司</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="social" tabindex="-1"><a class="header-anchor" href="#social"><span>social</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>false | SocialLink[]</code></p>
</li>
<li>
<p>默认值： <code v-pre>false</code></p>
</li>
<li>
<p>详情： 个人社交信息配置。</p>
<p>将作为 图标链接 展示在 导航栏最右侧。</p>
<p>图标可选值：</p>
<ul>
<li><code v-pre>'github'</code></li>
<li><code v-pre>'gitlab'</code></li>
<li><code v-pre>'npm'</code></li>
<li><code v-pre>'docker'</code></li>
<li><code v-pre>'discord'</code></li>
<li><code v-pre>'facebook'</code></li>
<li><code v-pre>'instagram'</code></li>
<li><code v-pre>'linkedin'</code></li>
<li><code v-pre>'mastodon'</code></li>
<li><code v-pre>'slack'</code></li>
<li><code v-pre>'twitter'</code></li>
<li><code v-pre>'x'</code></li>
<li><code v-pre>'youtube'</code></li>
<li><code v-pre>'juejin'</code></li>
<li><code v-pre>'stackoverflow'</code></li>
<li><code v-pre>'qq'</code></li>
<li><code v-pre>'weibo'</code></li>
<li><code v-pre>'bilibili'</code></li>
<li><code v-pre>'zhihu'</code></li>
<li><code v-pre>'douban'</code></li>
<li><code v-pre>'steam'</code></li>
<li><code v-pre>'xbox'</code></li>
<li><code v-pre>{ svg: string }</code>: 自定义图标，传入 svg 字符串</li>
</ul>
</li>
</ul>
<p>示例：</p>
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">themePlume</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    social</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      { </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">icon</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">github</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">link</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://github.com/zhangsan</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    ]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="navbarsocialinclude" tabindex="-1"><a class="header-anchor" href="#navbarsocialinclude"><span>navbarSocialInclude</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string[]</code></p>
</li>
<li>
<p>默认值： <code v-pre>['github', 'twitter', 'discord', 'facebook']</code></p>
</li>
<li>
<p>详情：</p>
<p>允许显示在导航栏的社交链接。
该配置仅在 PC 端下有效。</p>
</li>
</ul>
<h3 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar"><span>navbar</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>NavItem[]</code></p>
</li>
<li>
<p>默认值： <code v-pre>[]</code></p>
</li>
<li>
<p>详情： 导航栏配置。</p>
<p>为了配置导航栏元素，你可以将其设置为 导航栏数组 ，其中的每个元素是 <code v-pre>NavItem</code> 对象、</p>
<ul>
<li><code v-pre>NavItem</code> 对象应该有一个 text 字段和一个 link 字段，还有一个可选的 <code v-pre>activeMatch</code> 字段。</li>
</ul>
</li>
</ul>
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> NavItem</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> string</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  text</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  link</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  items</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">NavItem</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[]</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * 支持 iconify 图标，直接使用 iconify name 即可自动加载</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">see</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> https://icon-sets.iconify.design/</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  icon</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * 控制元素何时被激活</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  activeMatch</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>示例1：</p>
<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    navbar</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // NavbarItem</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      {</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> text</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Foo</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> link</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/foo/</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> },</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // NavbarGroup</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        text</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Group</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        item</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/group/foo/</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/group/bar/</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      },</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // 字符串 - 页面文件路径</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">      '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/bar/</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    ],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例2：</p>
<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    navbar</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // 嵌套 Group - 最大深度为 2</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        text</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Group</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        items</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">          {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">            text</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">SubGroup</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">            items</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/group/sub/</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/group/sub/bar/</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">          },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        ],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      },</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // 控制元素何时被激活</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        text</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Group 2</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        items</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">          {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">            text</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Always active</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">            link</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">            // 该元素将一直处于激活状态</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">            activeMatch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">          },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">          {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">            text</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Active on /foo/</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">            link</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/not-foo/</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">            // 该元素在当前路由路径是 /foo/ 开头时激活</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">            // 支持正则表达式</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">            activeMatch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">^/foo/</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">          },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        ],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    ],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer"><span>footer</span></a></h3>
<ul>
<li>类型： <code v-pre>false | { message: string; copyright: string }</code></li>
<li>默认值： <code v-pre>false</code></li>
<li>详情：页脚配置。</li>
</ul>
<h3 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>notes</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>false | PlumeThemeNotesOptions</code></p>
</li>
<li>
<p>默认值： <code v-pre>{ link: '/note', dir: 'notes', notes: [] }</code></p>
</li>
<li>
<p>详情：</p>
<p>笔记配置， 笔记中的文章默认不会出现在首页文章列表</p>
<p>你可以将配置的notes 配置到 navbar中，以便浏览查看</p>
</li>
</ul>
<p>详细配置请查看 <RouteLink to="/config/notes/">此文档</RouteLink></p>
<h3 id="outline" tabindex="-1"><a class="header-anchor" href="#outline"><span>outline</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>false | number | [number, number] | 'deep'</code></p>
</li>
<li>
<p>默认值： <code v-pre>[2, 3]</code></p>
</li>
<li>
<p>详情：</p>
<p>要显示的标题级别。</p>
<p>单个数字表示只显示该级别的标题。</p>
<p>如果传递的是一个元组，第一个数字是最小级别，第二个数字是最大级别。</p>
<p><code v-pre>'deep'</code> 与 <code v-pre>[2, 6]</code> 相同，将显示从 <code v-pre>&lt;h2&gt;</code> 到 <code v-pre>&lt;h6&gt;</code> 的所有标题。</p>
<p>每个页面可以通过 <RouteLink to="/notes/theme/config/frontmatter/basic.html#outline">frontmatter outline</RouteLink> 覆盖层级配置。</p>
</li>
</ul>
<h3 id="selectlanguagename" tabindex="-1"><a class="header-anchor" href="#selectlanguagename"><span>selectLanguageName</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>''</code></p>
</li>
<li>
<p>详情：</p>
<p>Locale 的语言名称。</p>
<p>该配置项 <strong>仅能在主题配置的 <a href="#locales">locales</a> 的内部生效</strong> 。它将被用作 locale 的语言名称，展示在 <em>选择语言菜单</em> 内。</p>
</li>
</ul>
<h3 id="selectlanguagetext" tabindex="-1"><a class="header-anchor" href="#selectlanguagetext"><span>selectLanguageText</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>''</code></p>
</li>
<li>
<p>详情：</p>
<p><em>选择语言菜单</em> 的文字。</p>
<p>如果你在站点配置中设置了多个 <a href="#locales">locales</a> ，那么 <em>选择语言菜单</em> 就会显示在导航栏中仓库按钮的旁边。</p>
</li>
</ul>
<h3 id="selectlanguagearialabel" tabindex="-1"><a class="header-anchor" href="#selectlanguagearialabel"><span>selectLanguageAriaLabel</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>''</code></p>
</li>
<li>
<p>详情：</p>
<p><em>选择语言菜单 的 <code v-pre>aria-label</code> 属性。</em></p>
<p>它主要是为了站点的可访问性 (a11y) 。</p>
</li>
</ul>
<h3 id="sidebarmenulabel" tabindex="-1"><a class="header-anchor" href="#sidebarmenulabel"><span>sidebarMenuLabel</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'Menu'</code></p>
</li>
<li>
<p>详情：</p>
<p>移动设备下的导航栏中 菜单选项的文字。</p>
</li>
</ul>
<h3 id="returntotoplabel" tabindex="-1"><a class="header-anchor" href="#returntotoplabel"><span>returnToTopLabel</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'return to top'</code></p>
</li>
<li>
<p>详情：</p>
<p>移动设备下的导航栏中返回顶部的文字。</p>
</li>
</ul>
<h3 id="outlinelabel" tabindex="-1"><a class="header-anchor" href="#outlinelabel"><span>outlineLabel</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'On this page'</code></p>
</li>
<li>
<p>详情：</p>
<p>移动设备下的导航栏中大纲标题的文字</p>
</li>
</ul>
<h3 id="editlink" tabindex="-1"><a class="header-anchor" href="#editlink"><span>editLink</span></a></h3>
<ul>
<li>类型： <code v-pre>boolean</code></li>
<li>默认值： <code v-pre>true</code></li>
<li>详情： 是否启用 编辑链接</li>
</ul>
<h3 id="editlinktext" tabindex="-1"><a class="header-anchor" href="#editlinktext"><span>editLinkText</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>'Edit this page'</code></li>
<li>详情： 编辑链接文字</li>
</ul>
<h3 id="editlinkpattern" tabindex="-1"><a class="header-anchor" href="#editlinkpattern"><span>editLinkPattern</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>''</code></p>
</li>
<li>
<p>详情： 编辑链接的正则表达式</p>
<p>示例： <code v-pre>':repo/edit/:branch/:path'</code></p>
</li>
</ul>
<h3 id="docsrepo" tabindex="-1"><a class="header-anchor" href="#docsrepo"><span>docsRepo</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>''</code></li>
<li>详情： 文档仓库配置, 用于生成 <code v-pre>Edit this page</code> 链接，如果为空，默认使用 <code v-pre>repo</code> 配置的值</li>
</ul>
<h3 id="docsbranch" tabindex="-1"><a class="header-anchor" href="#docsbranch"><span>docsBranch</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>''</code></li>
<li>详情： 文档仓库分支配置，用于生成 <code v-pre>Edit this page</code> 链接。</li>
</ul>
<h3 id="docsdir" tabindex="-1"><a class="header-anchor" href="#docsdir"><span>docsDir</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>''</code></li>
<li>详情： 文档仓库目录配置，用于生成 <code v-pre>Edit this page</code> 链接。</li>
</ul>
<h3 id="lastupdated" tabindex="-1"><a class="header-anchor" href="#lastupdated"><span>lastUpdated</span></a></h3>
<ul>
<li>类型： <code v-pre>false | LastUpdatedOptions</code></li>
<li>默认值： <code v-pre>{ text: 'Last Updated', formatOptions: { dateStyle: 'short', timeStyle: 'short' } }</code></li>
<li>详情： 最后更新时间</li>
</ul>
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> LastUpdatedOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * 设置 最后更新时间 的文本</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">default</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Last updated</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  text</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * 设置最后更新时间格式的选项。</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">see</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">default</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * { dateStyle: 'short', timeStyle: 'short' }</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  formatOptions</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">Intl</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">DateTimeFormatOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#x26; { </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">forceLocale</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors"><span>contributors</span></a></h3>
<ul>
<li>类型： <code v-pre>boolean</code></li>
<li>默认值： <code v-pre>true</code></li>
<li>详情： 是否显示贡献者</li>
</ul>
<h3 id="contributorstext" tabindex="-1"><a class="header-anchor" href="#contributorstext"><span>contributorsText</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>'Contributors'</code></li>
<li>详情： 贡献者的文字</li>
</ul>
<h3 id="prevpagelabel" tabindex="-1"><a class="header-anchor" href="#prevpagelabel"><span>prevPageLabel</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>'Previous Page'</code></li>
<li>详情： 上一页的文字</li>
</ul>
<h3 id="nextpagelabel" tabindex="-1"><a class="header-anchor" href="#nextpagelabel"><span>nextPageLabel</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>'Next Page'</code></li>
<li>详情： 下一页的文字</li>
</ul>
<h3 id="notfound" tabindex="-1"><a class="header-anchor" href="#notfound"><span>notFound</span></a></h3>
<ul>
<li>类型： <code v-pre>NotFound | undefined</code></li>
<li>默认值： <code v-pre>undefined</code></li>
<li>详情： 404 页面配置</li>
</ul>
<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> NotFound</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  code</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  title</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  quote</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  linkLabel</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  linkText</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



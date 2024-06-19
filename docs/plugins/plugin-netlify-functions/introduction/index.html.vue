<template><div><h2 id="why" tabindex="-1"><a class="header-anchor" href="#why"><span>Why</span></a></h2>
<h3 id="netlify" tabindex="-1"><a class="header-anchor" href="#netlify"><span>Netlify</span></a></h3>
<p><a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a> 是一个提供了免费部署静态站点的平台，可用于作为 <code v-pre>github page</code> 的替代工具。</p>
<p>在 <code v-pre>Netlify</code> 上面部署站点也非常方便，可以直接使用 <code v-pre>github</code> 仓库进行 构建并部署，同时支持 自定义域名。</p>
<p>还提供了 <code v-pre>Netlify Functions</code> 等工具，可以用于给站点提供 自定义云函数。</p>
<h3 id="vuepress" tabindex="-1"><a class="header-anchor" href="#vuepress"><span>VuePress</span></a></h3>
<p><code v-pre>vuepress</code> 是一个很方便的静态网站构建工具，使我们可以直接书写 markdown后，构建为一个高可用的静态站点。</p>
<h3 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h3>
<p>一般情况下，当我们不希望购买一个服务器用于部署我们的站点时，通常都会选择使用 <code v-pre>github page</code> 来进行免费部署。
<code v-pre>Netlify</code> 是一种替代方案，而且当使用 <code v-pre>Netlify</code> 部署时，还可以利用 <code v-pre>Netlify Functions</code> 提供的云函数功能，
使站点能够进行更为丰富的交互。</p>
<h3 id="场景" tabindex="-1"><a class="header-anchor" href="#场景"><span>场景</span></a></h3>
<p>通过 <code v-pre>Functions</code> 连接到 一些提供了 免费服务的 云存储服务，比如 <code v-pre>FireBase</code> ，<code v-pre>Lean Cloud</code> 等。
虽然这些云存储服务提供了 Web 客户端直连服务的功能。但毕竟我们的站点源码是直接放在 <code v-pre>github</code>开源仓库中，
我们不希望将 这些 云存储服务 提供的一些 鉴权信息 直接 保存在 仓库代码中，带来某些安全风险。</p>
<p>在这种场景下，就可以借助 <code v-pre>Netlify Functions</code> ，将这些鉴权信息，作为 <code v-pre>环境变量</code> ，
托管在 <code v-pre>Netlify Environment Variables</code> 中，然后通过 站点调用 <code v-pre>Functions</code> 来获取这些鉴权信息。
或者进一步的，直接将 云存储服务的 连接、功能等，都在 <code v-pre>Netlify Functions</code> 中完成，
站点再调用 <code v-pre>Functions</code> 接口， 获取返回的数据。</p>
<p>有了 <code v-pre>Netlify Functions</code> 加上 一些 第三方的 云服务支持， 可以为我们的 vuepress 站点提供更强大的支持。</p>
<h2 id="如何整合" tabindex="-1"><a class="header-anchor" href="#如何整合"><span>如何整合？</span></a></h2>
<p>在基于以上的背景，下一步就是需要将 <code v-pre>Netlify Functions</code> 能够在 我们的 <code v-pre>Vuepress</code> 项目中进行 整合了。</p>
<ul>
<li>如何使 <code v-pre>Netlify Functions</code> 能够在本地开发环境中进行调试。</li>
<li>如何将 已开发好的 <code v-pre>Functions</code> 作为 <code v-pre>vuepress plugin</code> 提供给 其他 <code v-pre>vuepress theme</code> 或 <code v-pre>vuepress</code> 站点中使用。</li>
</ul>
<h3 id="开发环境" tabindex="-1"><a class="header-anchor" href="#开发环境"><span>开发环境</span></a></h3>
<p>本插件在 vuepress 的开发服务的基础上， 启动了一个 由 <code v-pre>netlify-cli</code> 提供的 服务，并将该服务通过代理的方式，
代理到 vuepress开发服务上，统合开发环境。</p>
<p>并且监听 functions 内容变更，实现热更新。</p>
<h3 id="打包" tabindex="-1"><a class="header-anchor" href="#打包"><span>打包</span></a></h3>
<p>在打包阶段， 生成一个 <code v-pre>netlify.toml</code> 配置文件，配置 functions 相关内容。</p>
<p>并且将 所有 functions 添加在 vuepress 的构建包中。</p>
<p>如何使用插件，请查看 <RouteLink to="/plugins/plugin-netlify-functions/usage/">使用文档</RouteLink></p>
</div></template>



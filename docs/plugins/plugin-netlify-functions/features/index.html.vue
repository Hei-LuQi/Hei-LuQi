<template><div><h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能"><span>功能</span></a></h2>
<p>在启动 vuepress 开发环境后，<code v-pre>plugin-netlify-functions</code> 插件会在 vuepress 开发服务中，
启动一个 <code v-pre>netlify-functions</code> 服务，然后，将通过 vuepress 开发服务代理该服务。</p>
<p>同时，启动对 <code v-pre>functions</code> 的文件监听，实现服务热更新，从而获得与 vuepress 开发服务环境一致的体验。</p>
<h2 id="服务" tabindex="-1"><a class="header-anchor" href="#服务"><span>服务</span></a></h2>
<p>考虑到通用性，本插件仅提供对于 <code v-pre>netlify functions</code> 的开发时和构建时支持，并不提供具体的 <code v-pre>functions</code>功能支持。
一切<code v-pre>functions</code> 功能由插件使用者自定义。</p>
<p>同时，还提供了给其他插件使用本插件的钩子，这使得多个插件之间或者主题，能够共享 本插件提供的基础服务。</p>
</div></template>



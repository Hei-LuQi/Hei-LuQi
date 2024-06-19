import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/demos/index.html.vue"
const data = JSON.parse("{\"path\":\"/demos/\",\"title\":\"案例\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"案例\",\"author\":\"pengzhanbo\",\"createTime\":\"2024/04/18 19:22:07\",\"permalink\":\"/demos/\",\"readingTime\":false,\"prev\":false,\"next\":false,\"article\":false,\"docs\":[{\"name\":\"VuePress Plume\",\"desc\":\"一个简约的，功能丰富的 vuepress 文档&博客 主题。\",\"logo\":\"/plume.png\",\"url\":\"https://plume.pengzhanbo.cn\",\"repo\":\"https://github.com/pengzhanbo/vuepress-theme-plume\",\"preview\":\"/images/demos/plume.png\"}],\"blog\":[{\"name\":\"鹏展博\",\"desc\":\"即使慢，驰而不息，纵会落后，纵会失败，但必须能够到达他所向的目标。\",\"logo\":\"https://pengzhanbo.cn/images/blogger-fav.png\",\"url\":\"https://pengzhanbo.cn/\",\"repo\":\"https://github.com/pengzhanbo/pengzhanbo.cn\",\"preview\":\"/images/demos/pengzhanbo.png\"}],\"gitInclude\":[],\"externalLinkIcon\":false,\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"文档\",\"slug\":\"文档\",\"link\":\"#文档\",\"children\":[]},{\"level\":2,\"title\":\"博客\",\"slug\":\"博客\",\"link\":\"#博客\",\"children\":[]}],\"isBlogPost\":true,\"readingTime\":{\"minutes\":0.57,\"words\":171},\"filePathRelative\":\"demos.md\",\"categoryList\":[]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

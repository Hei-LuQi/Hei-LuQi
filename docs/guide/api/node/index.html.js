import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/api/node/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/api/node/\",\"title\":\"Node\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Node\",\"author\":\"pengzhanbo\",\"icon\":\"fa6-brands:node\",\"createTime\":\"2024/03/07 21:59:13\",\"permalink\":\"/guide/api/node/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"使用\",\"slug\":\"使用\",\"link\":\"#使用\",\"children\":[]},{\"level\":2,\"title\":\"plumeTheme(options)\",\"slug\":\"plumetheme-options\",\"link\":\"#plumetheme-options\",\"children\":[]},{\"level\":2,\"title\":\"defineNavbarConfig(options)\",\"slug\":\"definenavbarconfig-options\",\"link\":\"#definenavbarconfig-options\",\"children\":[]},{\"level\":2,\"title\":\"definePlumeNotesConfig(options)\",\"slug\":\"defineplumenotesconfig-options\",\"link\":\"#defineplumenotesconfig-options\",\"children\":[]}],\"readingTime\":{\"minutes\":0.29,\"words\":87},\"filePathRelative\":\"notes/theme/guide/api-node.md\"}")
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

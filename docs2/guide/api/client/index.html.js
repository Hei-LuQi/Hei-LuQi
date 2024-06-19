import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/api/client/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/api/client/\",\"title\":\"客户端\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"客户端\",\"author\":\"pengzhanbo\",\"icon\":\"nimbus:browser\",\"createTime\":\"2024/03/07 21:58:48\",\"permalink\":\"/guide/api/client/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"使用\",\"slug\":\"使用\",\"link\":\"#使用\",\"children\":[]},{\"level\":2,\"title\":\"布局组件\",\"slug\":\"布局组件\",\"link\":\"#布局组件\",\"children\":[]},{\"level\":2,\"title\":\"通用组件\",\"slug\":\"通用组件\",\"link\":\"#通用组件\",\"children\":[]},{\"level\":2,\"title\":\"组合式 API\",\"slug\":\"组合式-api\",\"link\":\"#组合式-api\",\"children\":[{\"level\":3,\"title\":\"useDarkMode()\",\"slug\":\"usedarkmode\",\"link\":\"#usedarkmode\",\"children\":[]},{\"level\":3,\"title\":\"useData()\",\"slug\":\"usedata\",\"link\":\"#usedata\",\"children\":[]},{\"level\":3,\"title\":\"useLocalePostList()\",\"slug\":\"uselocalepostlist\",\"link\":\"#uselocalepostlist\",\"children\":[]},{\"level\":3,\"title\":\"更多\",\"slug\":\"更多\",\"link\":\"#更多\",\"children\":[]}]}],\"readingTime\":{\"minutes\":1.18,\"words\":354},\"filePathRelative\":\"notes/theme/guide/api-客户端.md\"}")
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

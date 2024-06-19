import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/features/content-search/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/features/content-search/\",\"title\":\"内容搜索\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"内容搜索\",\"author\":\"pengzhanbo\",\"icon\":\"material-symbols:search\",\"createTime\":\"2024/03/04 09:58:39\",\"permalink\":\"/guide/features/content-search/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"本地内容搜索\",\"slug\":\"本地内容搜索\",\"link\":\"#本地内容搜索\",\"children\":[{\"level\":3,\"title\":\"启用\",\"slug\":\"启用\",\"link\":\"#启用\",\"children\":[]}]},{\"level\":2,\"title\":\"Algolia DocSearch\",\"slug\":\"algolia-docsearch\",\"link\":\"#algolia-docsearch\",\"children\":[{\"level\":3,\"title\":\"启用\",\"slug\":\"启用-1\",\"link\":\"#启用-1\",\"children\":[]},{\"level\":3,\"title\":\"获取搜索索引\",\"slug\":\"获取搜索索引\",\"link\":\"#获取搜索索引\",\"children\":[]},{\"level\":3,\"title\":\"配置项\",\"slug\":\"配置项\",\"link\":\"#配置项\",\"children\":[]},{\"level\":3,\"title\":\"配置示例\",\"slug\":\"配置示例\",\"link\":\"#配置示例\",\"children\":[]}]}],\"readingTime\":{\"minutes\":3.59,\"words\":1078},\"filePathRelative\":\"notes/theme/guide/功能/内容搜索.md\"}")
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

import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/config/plugins/search/index.html.vue"
const data = JSON.parse("{\"path\":\"/config/plugins/search/\",\"title\":\"内容搜索\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"内容搜索\",\"author\":\"pengzhanbo\",\"createTime\":\"2024/03/06 09:19:26\",\"permalink\":\"/config/plugins/search/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"本地搜索\",\"slug\":\"本地搜索\",\"link\":\"#本地搜索\",\"children\":[{\"level\":3,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":3,\"title\":\"配置\",\"slug\":\"配置\",\"link\":\"#配置\",\"children\":[]}]},{\"level\":2,\"title\":\"Algolia DocSearch\",\"slug\":\"algolia-docsearch\",\"link\":\"#algolia-docsearch\",\"children\":[{\"level\":3,\"title\":\"概述\",\"slug\":\"概述-1\",\"link\":\"#概述-1\",\"children\":[]},{\"level\":3,\"title\":\"启用\",\"slug\":\"启用\",\"link\":\"#启用\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.73,\"words\":219},\"filePathRelative\":\"notes/theme/config/plugins/搜索.md\"}")
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

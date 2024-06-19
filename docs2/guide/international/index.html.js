import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/international/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/international/\",\"title\":\"国际化\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"国际化\",\"author\":\"pengzhanbo\",\"icon\":\"material-symbols-light:language\",\"createTime\":\"2024/03/05 10:01:26\",\"permalink\":\"/guide/international/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"目录\",\"slug\":\"目录\",\"link\":\"#目录\",\"children\":[]},{\"level\":2,\"title\":\"vuepress 配置\",\"slug\":\"vuepress-配置\",\"link\":\"#vuepress-配置\",\"children\":[]},{\"level\":2,\"title\":\"主题配置\",\"slug\":\"主题配置\",\"link\":\"#主题配置\",\"children\":[]}],\"readingTime\":{\"minutes\":0.76,\"words\":228},\"filePathRelative\":\"notes/theme/guide/国际化.md\"}")
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

import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/config/navigation/index.html.vue"
const data = JSON.parse("{\"path\":\"/config/navigation/\",\"title\":\"导航栏配置\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"导航栏配置\",\"author\":\"pengzhanbo\",\"createTime\":\"2024/03/01 15:07:33\",\"permalink\":\"/config/navigation/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"配置\",\"slug\":\"配置\",\"link\":\"#配置\",\"children\":[{\"level\":3,\"title\":\"嵌套配置示例\",\"slug\":\"嵌套配置示例\",\"link\":\"#嵌套配置示例\",\"children\":[]},{\"level\":3,\"title\":\"activeMatch\",\"slug\":\"activematch\",\"link\":\"#activematch\",\"children\":[]}]},{\"level\":2,\"title\":\"配置帮助函数\",\"slug\":\"配置帮助函数\",\"link\":\"#配置帮助函数\",\"children\":[]}],\"readingTime\":{\"minutes\":2.6,\"words\":779},\"filePathRelative\":\"notes/theme/config/导航栏配置.md\"}")
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

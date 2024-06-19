import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/config/intro/index.html.vue"
const data = JSON.parse("{\"path\":\"/config/intro/\",\"title\":\"配置说明\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"配置说明\",\"author\":\"pengzhanbo\",\"createTime\":\"2024/03/02 10:48:14\",\"permalink\":\"/config/intro/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"类型\",\"slug\":\"类型\",\"link\":\"#类型\",\"children\":[]}],\"readingTime\":{\"minutes\":0.71,\"words\":213},\"filePathRelative\":\"notes/theme/config/配置说明.md\"}")
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

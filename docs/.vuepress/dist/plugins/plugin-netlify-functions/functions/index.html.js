import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/plugins/plugin-netlify-functions/functions/index.html.vue"
const data = JSON.parse("{\"path\":\"/plugins/plugin-netlify-functions/functions/\",\"title\":\"functions 使用指南\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"functions 使用指南\",\"author\":\"pengzhanbo\",\"createTime\":\"2024/03/12 17:56:28\",\"permalink\":\"/plugins/plugin-netlify-functions/functions/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"说明\",\"slug\":\"说明\",\"link\":\"#说明\",\"children\":[{\"level\":3,\"title\":\"在一个 vuepress 项目中\",\"slug\":\"在一个-vuepress-项目中\",\"link\":\"#在一个-vuepress-项目中\",\"children\":[]},{\"level\":3,\"title\":\"在一个 vuepress plugin 项目中\",\"slug\":\"在一个-vuepress-plugin-项目中\",\"link\":\"#在一个-vuepress-plugin-项目中\",\"children\":[]}]},{\"level\":2,\"title\":\"依赖\",\"slug\":\"依赖\",\"link\":\"#依赖\",\"children\":[]},{\"level\":2,\"title\":\"function\",\"slug\":\"function\",\"link\":\"#function\",\"children\":[]},{\"level\":2,\"title\":\"示例\",\"slug\":\"示例\",\"link\":\"#示例\",\"children\":[]}],\"readingTime\":{\"minutes\":1.58,\"words\":474},\"filePathRelative\":\"notes/plugins/netlify-functions/functions.md\"}")
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

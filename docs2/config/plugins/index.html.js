import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/config/plugins/index.html.vue"
const data = JSON.parse("{\"path\":\"/config/plugins/\",\"title\":\"介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"介绍\",\"author\":\"Plume Theme\",\"createTime\":\"2024/03/06 8:26:44\",\"permalink\":\"/config/plugins/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"配置\",\"slug\":\"配置\",\"link\":\"#配置\",\"children\":[]}],\"readingTime\":{\"minutes\":0.35,\"words\":105},\"filePathRelative\":\"notes/theme/config/plugins/README.md\"}")
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

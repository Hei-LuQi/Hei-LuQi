import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/plugins/plugin-content-update/index.html.vue"
const data = JSON.parse("{\"path\":\"/plugins/plugin-content-update/\",\"title\":\"plugin-content-update\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"plugin-content-update\",\"author\":\"pengzhanbo\",\"createTime\":\"2024/03/12 19:53:34\",\"permalink\":\"/plugins/plugin-content-update/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"指南\",\"slug\":\"指南\",\"link\":\"#指南\",\"children\":[]},{\"level\":2,\"title\":\"安装\",\"slug\":\"安装\",\"link\":\"#安装\",\"children\":[]},{\"level\":2,\"title\":\"使用\",\"slug\":\"使用\",\"link\":\"#使用\",\"children\":[]},{\"level\":2,\"title\":\"示例\",\"slug\":\"示例\",\"link\":\"#示例\",\"children\":[]}],\"readingTime\":{\"minutes\":1.2,\"words\":359},\"filePathRelative\":\"notes/plugins/content-updated.md\"}")
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

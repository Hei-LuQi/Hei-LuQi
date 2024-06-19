import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/config/plugins/copy-code/index.html.vue"
const data = JSON.parse("{\"path\":\"/config/plugins/copy-code/\",\"title\":\"代码复制\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"代码复制\",\"author\":\"pengzhanbo\",\"createTime\":\"2024/03/06 16:24:34\",\"permalink\":\"/config/plugins/copy-code/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"配置\",\"slug\":\"配置\",\"link\":\"#配置\",\"children\":[{\"level\":3,\"title\":\"selector\",\"slug\":\"selector\",\"link\":\"#selector\",\"children\":[]},{\"level\":3,\"title\":\"duration\",\"slug\":\"duration\",\"link\":\"#duration\",\"children\":[]},{\"level\":3,\"title\":\"showInMobile\",\"slug\":\"showinmobile\",\"link\":\"#showinmobile\",\"children\":[]}]},{\"level\":2,\"title\":\"禁用\",\"slug\":\"禁用\",\"link\":\"#禁用\",\"children\":[]}],\"readingTime\":{\"minutes\":0.68,\"words\":204},\"filePathRelative\":\"notes/theme/config/plugins/代码复制.md\"}")
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

import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/config/plugins/markdown-enhance/index.html.vue"
const data = JSON.parse("{\"path\":\"/config/plugins/markdown-enhance/\",\"title\":\"Markdown Enhance\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Markdown Enhance\",\"author\":\"pengzhanbo\",\"createTime\":\"2024/03/06 20:25:36\",\"permalink\":\"/config/plugins/markdown-enhance/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"配置\",\"slug\":\"配置\",\"link\":\"#配置\",\"children\":[]}],\"readingTime\":{\"minutes\":1.43,\"words\":429},\"filePathRelative\":\"notes/theme/config/plugins/markdown增强.md\"}")
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

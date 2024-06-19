import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/embed/pdf/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/embed/pdf/\",\"title\":\"PDF 阅读\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"PDF 阅读\",\"author\":\"pengzhanbo\",\"icon\":\"teenyicons:pdf-outline\",\"createTime\":\"2024/03/28 13:30:53\",\"permalink\":\"/guide/embed/pdf/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"配置\",\"slug\":\"配置\",\"link\":\"#配置\",\"children\":[]},{\"level\":2,\"title\":\"语法\",\"slug\":\"语法\",\"link\":\"#语法\",\"children\":[]},{\"level\":2,\"title\":\"示例\",\"slug\":\"示例\",\"link\":\"#示例\",\"children\":[{\"level\":3,\"title\":\"默认\",\"slug\":\"默认\",\"link\":\"#默认\",\"children\":[]},{\"level\":3,\"title\":\"设置页码为 2\",\"slug\":\"设置页码为-2\",\"link\":\"#设置页码为-2\",\"children\":[]},{\"level\":3,\"title\":\"不显示工具栏\",\"slug\":\"不显示工具栏\",\"link\":\"#不显示工具栏\",\"children\":[]},{\"level\":3,\"title\":\"缩放比 90%\",\"slug\":\"缩放比-90\",\"link\":\"#缩放比-90\",\"children\":[]},{\"level\":3,\"title\":\"宽高比 21:29\",\"slug\":\"宽高比-21-29\",\"link\":\"#宽高比-21-29\",\"children\":[]}]}],\"readingTime\":{\"minutes\":1.08,\"words\":324},\"filePathRelative\":\"notes/theme/guide/嵌入/pdf.md\"}")
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

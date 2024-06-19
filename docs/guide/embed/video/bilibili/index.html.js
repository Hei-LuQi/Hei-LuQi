import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/embed/video/bilibili/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/embed/video/bilibili/\",\"title\":\"Bilibili 视频\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Bilibili 视频\",\"author\":\"pengzhanbo\",\"icon\":\"ri:bilibili-fill\",\"createTime\":\"2024/03/28 12:26:47\",\"permalink\":\"/guide/embed/video/bilibili/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"配置\",\"slug\":\"配置\",\"link\":\"#配置\",\"children\":[]},{\"level\":2,\"title\":\"语法\",\"slug\":\"语法\",\"link\":\"#语法\",\"children\":[]},{\"level\":2,\"title\":\"示例\",\"slug\":\"示例\",\"link\":\"#示例\",\"children\":[{\"level\":3,\"title\":\"宽频视频\",\"slug\":\"宽频视频\",\"link\":\"#宽频视频\",\"children\":[]},{\"level\":3,\"title\":\"竖屏视频\",\"slug\":\"竖屏视频\",\"link\":\"#竖屏视频\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.98,\"words\":294},\"filePathRelative\":\"notes/theme/guide/嵌入/bilibili.md\"}")
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

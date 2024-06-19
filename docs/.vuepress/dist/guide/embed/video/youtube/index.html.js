import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/embed/video/youtube/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/embed/video/youtube/\",\"title\":\"Youtube 视频\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Youtube 视频\",\"author\":\"pengzhanbo\",\"icon\":\"mdi:youtube\",\"createTime\":\"2024/03/28 14:30:33\",\"permalink\":\"/guide/embed/video/youtube/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"配置\",\"slug\":\"配置\",\"link\":\"#配置\",\"children\":[]},{\"level\":2,\"title\":\"语法\",\"slug\":\"语法\",\"link\":\"#语法\",\"children\":[]},{\"level\":2,\"title\":\"示例\",\"slug\":\"示例\",\"link\":\"#示例\",\"children\":[{\"level\":3,\"title\":\"宽频视频\",\"slug\":\"宽频视频\",\"link\":\"#宽频视频\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.83,\"words\":248},\"filePathRelative\":\"notes/theme/guide/嵌入/youtube.md\"}")
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

import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/config/frontmatter/home/index.html.vue"
const data = JSON.parse("{\"path\":\"/config/frontmatter/home/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"首页\",\"author\":\"pengzhanbo\",\"createTime\":\"2024/03/03 15:00:43\",\"permalink\":\"/config/frontmatter/home/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"配置\",\"slug\":\"配置\",\"link\":\"#配置\",\"children\":[{\"level\":3,\"title\":\"home\",\"slug\":\"home\",\"link\":\"#home\",\"children\":[]},{\"level\":3,\"title\":\"pageLayout\",\"slug\":\"pagelayout\",\"link\":\"#pagelayout\",\"children\":[]},{\"level\":3,\"title\":\"config\",\"slug\":\"config\",\"link\":\"#config\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.69,\"words\":207},\"filePathRelative\":\"notes/theme/config/frontmatter/home.md\"}")
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

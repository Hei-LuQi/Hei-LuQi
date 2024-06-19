import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/custom-home/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/custom-home/\",\"title\":\"自定义首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"自定义首页\",\"author\":\"pengzhanbo\",\"icon\":\"material-symbols:home-outline\",\"createTime\":\"2024/03/02 10:44:03\",\"permalink\":\"/guide/custom-home/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"配置\",\"slug\":\"配置\",\"link\":\"#配置\",\"children\":[{\"level\":3,\"title\":\"home\",\"slug\":\"home\",\"link\":\"#home\",\"children\":[]},{\"level\":3,\"title\":\"config\",\"slug\":\"config\",\"link\":\"#config\",\"children\":[]}]},{\"level\":2,\"title\":\"区域类型\",\"slug\":\"区域类型\",\"link\":\"#区域类型\",\"children\":[{\"level\":3,\"title\":\"banner\",\"slug\":\"banner\",\"link\":\"#banner\",\"children\":[]},{\"level\":3,\"title\":\"hero\",\"slug\":\"hero\",\"link\":\"#hero\",\"children\":[]},{\"level\":3,\"title\":\"features\",\"slug\":\"features\",\"link\":\"#features\",\"children\":[]},{\"level\":3,\"title\":\"text-image | image-text\",\"slug\":\"text-image-image-text\",\"link\":\"#text-image-image-text\",\"children\":[]},{\"level\":3,\"title\":\"profile\",\"slug\":\"profile\",\"link\":\"#profile\",\"children\":[]},{\"level\":3,\"title\":\"custom\",\"slug\":\"custom\",\"link\":\"#custom\",\"children\":[]}]},{\"level\":2,\"title\":\"自定义区域类型\",\"slug\":\"自定义区域类型\",\"link\":\"#自定义区域类型\",\"children\":[]}],\"readingTime\":{\"minutes\":7.67,\"words\":2300},\"filePathRelative\":\"notes/theme/guide/自定义首页.md\"}")
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

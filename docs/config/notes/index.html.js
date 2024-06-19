import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/config/notes/index.html.vue"
const data = JSON.parse("{\"path\":\"/config/notes/\",\"title\":\"notes配置\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"notes配置\",\"author\":\"pengzhanbo\",\"createTime\":\"2024/03/02 14:00:06\",\"permalink\":\"/config/notes/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"配置\",\"slug\":\"配置\",\"link\":\"#配置\",\"children\":[{\"level\":3,\"title\":\"自动生成侧边栏\",\"slug\":\"自动生成侧边栏\",\"link\":\"#自动生成侧边栏\",\"children\":[]},{\"level\":3,\"title\":\"侧边栏图标\",\"slug\":\"侧边栏图标\",\"link\":\"#侧边栏图标\",\"children\":[]}]}],\"readingTime\":{\"minutes\":2.07,\"words\":622},\"filePathRelative\":\"notes/theme/config/notes配置.md\"}")
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

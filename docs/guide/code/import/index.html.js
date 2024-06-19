import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/code/import/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/code/import/\",\"title\":\"导入代码\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"导入代码\",\"author\":\"pengzhanbo\",\"icon\":\"mdi:import\",\"createTime\":\"2024/04/04 10:39:22\",\"permalink\":\"/guide/code/import/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"语法\",\"slug\":\"语法\",\"link\":\"#语法\",\"children\":[]}],\"readingTime\":{\"minutes\":0.64,\"words\":191},\"filePathRelative\":\"notes/theme/guide/代码/导入代码.md\"}")
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

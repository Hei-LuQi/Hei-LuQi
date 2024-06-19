import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/tools/caniuse/index.html.vue"
const data = JSON.parse("{\"path\":\"/tools/caniuse/\",\"title\":\"caniuse 特性搜索\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"caniuse 特性搜索\",\"author\":\"pengzhanbo\",\"icon\":\"fa-brands:css3\",\"createTime\":\"2024/04/16 12:41:26\",\"permalink\":\"/tools/caniuse/\",\"readingTime\":false,\"editLink\":false,\"contributors\":false,\"lastUpdated\":false,\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.46,\"words\":137},\"filePathRelative\":\"notes/tools/caniuse.md\"}")
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

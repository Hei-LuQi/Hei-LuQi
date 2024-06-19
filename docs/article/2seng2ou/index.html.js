import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/article/2seng2ou/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/2seng2ou/\",\"title\":\"示例文章5\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"示例文章5\",\"author\":\"Plume Theme\",\"createTime\":\"2024/03/01 22:55:23\",\"permalink\":\"/article/2seng2ou/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[],\"isBlogPost\":true,\"readingTime\":{\"minutes\":0.05,\"words\":16},\"filePathRelative\":\"1.示例/示例文章5.md\",\"categoryList\":[{\"type\":1,\"name\":\"示例\"}]}")
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

import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/article/v9fejej9/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/v9fejej9/\",\"title\":\"示例文章6\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"示例文章6\",\"author\":\"Plume Theme\",\"createTime\":\"2024/03/01 22:55:35\",\"permalink\":\"/article/v9fejej9/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[],\"isBlogPost\":true,\"readingTime\":{\"minutes\":0.05,\"words\":16},\"filePathRelative\":\"1.示例/示例文章6.md\",\"categoryList\":[{\"type\":1,\"name\":\"示例\"}]}")
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

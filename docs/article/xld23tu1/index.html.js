import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/article/xld23tu1/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/xld23tu1/\",\"title\":\"示例文章\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"示例文章\",\"author\":\"pengzhanbo\",\"createTime\":\"2023/12/25 01:28:29\",\"permalink\":\"/article/xld23tu1/\",\"tags\":[\"预览\",\"标签\"],\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[],\"isBlogPost\":true,\"readingTime\":{\"minutes\":0.1,\"words\":31},\"filePathRelative\":\"1.示例/示例文章.md\",\"categoryList\":[{\"type\":1,\"name\":\"示例\"}]}")
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

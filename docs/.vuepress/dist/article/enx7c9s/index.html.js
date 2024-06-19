import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/article/enx7c9s/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/enx7c9s/\",\"title\":\"加密文章，密码：123456\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"加密文章，密码：123456\",\"author\":\"pengzhanbo\",\"createTime\":\"2023/12/25 01:28:29\",\"permalink\":\"/article/enx7c9s/\",\"tags\":[\"预览\",\"标签\"],\"sticky\":true,\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[],\"isBlogPost\":true,\"readingTime\":{\"minutes\":0.12,\"words\":35},\"filePathRelative\":\"1.示例/加密文章.md\",\"categoryList\":[{\"type\":1,\"name\":\"示例\"}]}")
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

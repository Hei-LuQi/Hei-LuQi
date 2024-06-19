import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/en/article/xw0awouo/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/article/xw0awouo/\",\"title\":\"english_blog\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"english_blog\",\"author\":\"Plume Theme\",\"createTime\":\"2023/06/15 08:51:31\",\"permalink\":\"/en/article/xw0awouo/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[],\"isBlogPost\":true,\"readingTime\":{\"minutes\":0.04,\"words\":12},\"filePathRelative\":\"en/1.FE/1.Node/english_blog.md\",\"categoryList\":[{\"type\":1,\"name\":\"FE\"},{\"type\":1,\"name\":\"Node\"}]}")
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

import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/en/guide/intro/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/guide/intro/\",\"title\":\"Theme Introduction\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Theme Introduction\",\"author\":\"pengzhanbo\",\"createTime\":\"2024/03/04 11:06:24\",\"permalink\":\"/en/guide/intro/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":13},\"filePathRelative\":\"en/notes/theme/guide/intro.md\",\"categoryList\":[{\"type\":10000,\"name\":\"notes\"},{\"type\":10001,\"name\":\"theme\"},{\"type\":10003,\"name\":\"guide\"}]}")
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

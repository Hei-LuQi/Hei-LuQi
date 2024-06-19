import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/contributing/index.html.vue"
const data = JSON.parse("{\"path\":\"/contributing/\",\"title\":\"贡献指南\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"贡献指南\",\"author\":\"pengzhanbo\",\"createTime\":\"2024/03/13 21:27:45\",\"permalink\":\"/contributing/\",\"article\":false,\"externalLinkIcon\":false,\"readingTime\":false,\"editLink\":false,\"gitInclude\":[\"../CONTRIBUTING.md\"],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[],\"isBlogPost\":true,\"readingTime\":{\"minutes\":0.08,\"words\":25},\"filePathRelative\":\"contributing.md\",\"categoryList\":[]}")
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

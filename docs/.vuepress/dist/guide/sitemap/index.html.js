import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/sitemap/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/sitemap/\",\"title\":\"sitemap\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"sitemap\",\"author\":\"pengzhanbo\",\"icon\":\"mdi:sitemap-outline\",\"createTime\":\"2024/03/02 16:47:00\",\"permalink\":\"/guide/sitemap/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"使用\",\"slug\":\"使用\",\"link\":\"#使用\",\"children\":[]}],\"readingTime\":{\"minutes\":0.19,\"words\":58},\"filePathRelative\":\"notes/theme/guide/功能/sitemap.md\"}")
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

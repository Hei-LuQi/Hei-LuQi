import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/tools/home-hero-tint-plate/index.html.vue"
const data = JSON.parse("{\"path\":\"/tools/home-hero-tint-plate/\",\"title\":\"首页背景色板配置\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"首页背景色板配置\",\"author\":\"pengzhanbo\",\"icon\":\"icon-park-outline:hand-painted-plate\",\"createTime\":\"2024/04/15 20:17:42\",\"permalink\":\"/tools/home-hero-tint-plate/\",\"readingTime\":false,\"editLink\":false,\"contributors\":false,\"lastUpdated\":false,\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.27,\"words\":82},\"filePathRelative\":\"notes/tools/home-hero-tint-plate.md\"}")
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

import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/sponsor/index.html.vue"
const data = JSON.parse("{\"path\":\"/sponsor/\",\"title\":\"喝杯奶茶\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"喝杯奶茶\",\"author\":\"pengzhanbo\",\"createTime\":\"2024/04/18 18:03:50\",\"permalink\":\"/sponsor/\",\"article\":false,\"aside\":false,\"readingTime\":false,\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"打赏记录\",\"slug\":\"打赏记录\",\"link\":\"#打赏记录\",\"children\":[]}],\"isBlogPost\":true,\"readingTime\":{\"minutes\":0.58,\"words\":173},\"filePathRelative\":\"sponsor.md\",\"categoryList\":[]}")
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

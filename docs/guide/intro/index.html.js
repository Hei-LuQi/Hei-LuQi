import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/intro/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/intro/\",\"title\":\"主题介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"主题介绍\",\"author\":\"pengzhanbo\",\"icon\":\"mdi:tooltip-text-outline\",\"createTime\":\"2024/03/04 11:06:24\",\"permalink\":\"/guide/intro/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"介绍\",\"slug\":\"介绍\",\"link\":\"#介绍\",\"children\":[]},{\"level\":2,\"title\":\"优势\",\"slug\":\"优势\",\"link\":\"#优势\",\"children\":[]},{\"level\":2,\"title\":\"功能\",\"slug\":\"功能\",\"link\":\"#功能\",\"children\":[]}],\"readingTime\":{\"minutes\":1.78,\"words\":533},\"filePathRelative\":\"notes/theme/guide/介绍.md\"}")
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

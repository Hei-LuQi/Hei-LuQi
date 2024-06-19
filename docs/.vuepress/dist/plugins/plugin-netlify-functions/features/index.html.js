import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/plugins/plugin-netlify-functions/features/index.html.vue"
const data = JSON.parse("{\"path\":\"/plugins/plugin-netlify-functions/features/\",\"title\":\"功能\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"功能\",\"author\":\"pengzhanbo\",\"createTime\":\"2024/03/12 14:43:12\",\"permalink\":\"/plugins/plugin-netlify-functions/features/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"功能\",\"slug\":\"功能\",\"link\":\"#功能\",\"children\":[]},{\"level\":2,\"title\":\"服务\",\"slug\":\"服务\",\"link\":\"#服务\",\"children\":[]}],\"readingTime\":{\"minutes\":0.65,\"words\":196},\"filePathRelative\":\"notes/plugins/netlify-functions/功能.md\"}")
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

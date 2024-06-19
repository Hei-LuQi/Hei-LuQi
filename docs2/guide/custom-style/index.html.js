import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/custom-style/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/custom-style/\",\"title\":\"自定义样式\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"自定义样式\",\"author\":\"pengzhanbo\",\"icon\":\"icon-park-outline:theme\",\"createTime\":\"2024/03/04 20:18:52\",\"permalink\":\"/guide/custom-style/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"主题定制\",\"slug\":\"主题定制\",\"link\":\"#主题定制\",\"children\":[]},{\"level\":2,\"title\":\"Style 文件\",\"slug\":\"style-文件\",\"link\":\"#style-文件\",\"children\":[]}],\"readingTime\":{\"minutes\":1.36,\"words\":407},\"filePathRelative\":\"notes/theme/guide/自定义样式.md\"}")
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

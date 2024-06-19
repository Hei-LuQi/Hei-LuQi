import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/features/copy-code/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/features/copy-code/\",\"title\":\"代码复制\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"代码复制\",\"author\":\"pengzhanbo\",\"icon\":\"ph:code\",\"createTime\":\"2024/03/04 09:59:29\",\"permalink\":\"/guide/features/copy-code/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"使用\",\"slug\":\"使用\",\"link\":\"#使用\",\"children\":[]},{\"level\":2,\"title\":\"效果\",\"slug\":\"效果\",\"link\":\"#效果\",\"children\":[{\"level\":3,\"title\":\"代码块\",\"slug\":\"代码块\",\"link\":\"#代码块\",\"children\":[]},{\"level\":3,\"title\":\"代码组\",\"slug\":\"代码组\",\"link\":\"#代码组\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.47,\"words\":140},\"filePathRelative\":\"notes/theme/guide/功能/代码复制.md\"}")
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

import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/plugins/plugin-shikiji/index.html.vue"
const data = JSON.parse("{\"path\":\"/plugins/plugin-shikiji/\",\"title\":\"plugin-shikiji\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"plugin-shikiji\",\"author\":\"pengzhanbo\",\"createTime\":\"2024/03/11 17:26:31\",\"permalink\":\"/plugins/plugin-shikiji/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"指南\",\"slug\":\"指南\",\"link\":\"#指南\",\"children\":[]},{\"level\":2,\"title\":\"安装\",\"slug\":\"安装\",\"link\":\"#安装\",\"children\":[]},{\"level\":2,\"title\":\"使用\",\"slug\":\"使用\",\"link\":\"#使用\",\"children\":[]},{\"level\":2,\"title\":\"Options\",\"slug\":\"options\",\"link\":\"#options\",\"children\":[]}],\"readingTime\":{\"minutes\":0.73,\"words\":220},\"filePathRelative\":\"notes/plugins/shiki.md\"}")
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

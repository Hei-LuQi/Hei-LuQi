import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/plugins/plugin-netlify-functions/index.html.vue"
const data = JSON.parse("{\"path\":\"/plugins/plugin-netlify-functions/\",\"title\":\"plugin-netlify-functions\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"plugin-netlify-functions\",\"author\":\"pengzhanbo\",\"createTime\":\"2024/03/12 13:51:09\",\"permalink\":\"/plugins/plugin-netlify-functions/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"安装\",\"slug\":\"安装\",\"link\":\"#安装\",\"children\":[]}],\"readingTime\":{\"minutes\":0.55,\"words\":166},\"filePathRelative\":\"notes/plugins/netlify-functions/README.md\"}")
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

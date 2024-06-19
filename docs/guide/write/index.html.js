import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/write/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/write/\",\"title\":\"编写文章\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"编写文章\",\"author\":\"pengzhanbo\",\"icon\":\"mingcute:edit-4-line\",\"createTime\":\"2024/03/04 10:06:06\",\"permalink\":\"/guide/write/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"约定\",\"slug\":\"约定\",\"link\":\"#约定\",\"children\":[{\"level\":3,\"title\":\"文件夹命名约定\",\"slug\":\"文件夹命名约定\",\"link\":\"#文件夹命名约定\",\"children\":[]}]},{\"level\":2,\"title\":\"文章写作\",\"slug\":\"文章写作\",\"link\":\"#文章写作\",\"children\":[]}],\"readingTime\":{\"minutes\":1.38,\"words\":413},\"filePathRelative\":\"notes/theme/guide/编写文章.md\"}")
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

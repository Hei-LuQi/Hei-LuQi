import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/code/code-sandbox/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/code/code-sandbox/\",\"title\":\"Code Sandbox\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Code Sandbox\",\"author\":\"pengzhanbo\",\"icon\":\"lucide:codesandbox\",\"createTime\":\"2024/04/04 03:42:13\",\"permalink\":\"/guide/code/code-sandbox/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"配置\",\"slug\":\"配置\",\"link\":\"#配置\",\"children\":[]},{\"level\":2,\"title\":\"语法\",\"slug\":\"语法\",\"link\":\"#语法\",\"children\":[{\"level\":3,\"title\":\"简单语法\",\"slug\":\"简单语法\",\"link\":\"#简单语法\",\"children\":[]},{\"level\":3,\"title\":\"更多选项\",\"slug\":\"更多选项\",\"link\":\"#更多选项\",\"children\":[]}]},{\"level\":2,\"title\":\"示例\",\"slug\":\"示例\",\"link\":\"#示例\",\"children\":[]}],\"readingTime\":{\"minutes\":0.71,\"words\":214},\"filePathRelative\":\"notes/theme/guide/代码演示/codeSandbox.md\"}")
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

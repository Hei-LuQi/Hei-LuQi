import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/code/features/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/code/features/\",\"title\":\"特性支持\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"特性支持\",\"author\":\"pengzhanbo\",\"icon\":\"majesticons:code-block-line\",\"createTime\":\"2024/04/04 10:41:28\",\"permalink\":\"/guide/code/features/\",\"gitInclude\":[\"../../snippet/whitespace.snippet.md\"],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"代码行号\",\"slug\":\"代码行号\",\"link\":\"#代码行号\",\"children\":[]},{\"level\":2,\"title\":\"在代码块中实现行高亮\",\"slug\":\"在代码块中实现行高亮\",\"link\":\"#在代码块中实现行高亮\",\"children\":[]},{\"level\":2,\"title\":\"代码块中聚焦\",\"slug\":\"代码块中聚焦\",\"link\":\"#代码块中聚焦\",\"children\":[]},{\"level\":2,\"title\":\"代码块中的颜色差异\",\"slug\":\"代码块中的颜色差异\",\"link\":\"#代码块中的颜色差异\",\"children\":[]},{\"level\":2,\"title\":\"高亮“错误”和“警告”\",\"slug\":\"高亮-错误-和-警告\",\"link\":\"#高亮-错误-和-警告\",\"children\":[]},{\"level\":2,\"title\":\"代码块中 词高亮\",\"slug\":\"代码块中-词高亮\",\"link\":\"#代码块中-词高亮\",\"children\":[]},{\"level\":2,\"title\":\"代码块中的 空白符\",\"slug\":\"代码块中的-空白符\",\"link\":\"#代码块中的-空白符\",\"children\":[]}],\"readingTime\":{\"minutes\":3.02,\"words\":905},\"filePathRelative\":\"notes/theme/guide/代码/特性支持.md\"}")
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

import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/code/intro/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/code/intro/\",\"title\":\"介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"介绍\",\"author\":\"pengzhanbo\",\"icon\":\"ic:outline-code\",\"createTime\":\"2024/04/04 10:35:45\",\"permalink\":\"/guide/code/intro/\",\"gitInclude\":[\"../../snippet/code-block.snippet.md\"],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"语言\",\"slug\":\"语言\",\"link\":\"#语言\",\"children\":[]},{\"level\":2,\"title\":\"高亮主题\",\"slug\":\"高亮主题\",\"link\":\"#高亮主题\",\"children\":[]},{\"level\":2,\"title\":\"更多支持\",\"slug\":\"更多支持\",\"link\":\"#更多支持\",\"children\":[]},{\"level\":2,\"title\":\"示例\",\"slug\":\"示例\",\"link\":\"#示例\",\"children\":[]}],\"readingTime\":{\"minutes\":1.12,\"words\":335},\"filePathRelative\":\"notes/theme/guide/代码/介绍.md\"}")
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

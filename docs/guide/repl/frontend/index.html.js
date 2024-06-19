import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/repl/frontend/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/repl/frontend/\",\"title\":\"前端\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"前端\",\"author\":\"pengzhanbo\",\"icon\":\"icon-park-outline:html-five\",\"createTime\":\"2024/04/04 11:39:05\",\"permalink\":\"/guide/repl/frontend/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"语法\",\"slug\":\"语法\",\"link\":\"#语法\",\"children\":[]},{\"level\":2,\"title\":\"可用的语言\",\"slug\":\"可用的语言\",\"link\":\"#可用的语言\",\"children\":[]},{\"level\":2,\"title\":\"不支持的语言\",\"slug\":\"不支持的语言\",\"link\":\"#不支持的语言\",\"children\":[]},{\"level\":2,\"title\":\"普通代码演示\",\"slug\":\"普通代码演示\",\"link\":\"#普通代码演示\",\"children\":[]},{\"level\":2,\"title\":\"例子\",\"slug\":\"例子\",\"link\":\"#例子\",\"children\":[{\"level\":3,\"title\":\"Vue 代码演示\",\"slug\":\"vue-代码演示\",\"link\":\"#vue-代码演示\",\"children\":[]},{\"level\":3,\"title\":\"React 代码演示\",\"slug\":\"react-代码演示\",\"link\":\"#react-代码演示\",\"children\":[]}]}],\"readingTime\":{\"minutes\":3.53,\"words\":1059},\"filePathRelative\":\"notes/theme/guide/代码演示/前端.md\"}")
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

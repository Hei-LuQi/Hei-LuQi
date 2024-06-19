import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/config/plugins/code-highlight/index.html.vue"
const data = JSON.parse("{\"path\":\"/config/plugins/code-highlight/\",\"title\":\"代码高亮\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"代码高亮\",\"author\":\"pengzhanbo\",\"createTime\":\"2024/03/06 10:21:47\",\"permalink\":\"/config/plugins/code-highlight/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"配置\",\"slug\":\"配置\",\"link\":\"#配置\",\"children\":[{\"level\":3,\"title\":\"theme\",\"slug\":\"theme\",\"link\":\"#theme\",\"children\":[]},{\"level\":3,\"title\":\"languages\",\"slug\":\"languages\",\"link\":\"#languages\",\"children\":[]},{\"level\":3,\"title\":\"defaultHighlightLang\",\"slug\":\"defaulthighlightlang\",\"link\":\"#defaulthighlightlang\",\"children\":[]},{\"level\":3,\"title\":\"lineNumbers\",\"slug\":\"linenumbers\",\"link\":\"#linenumbers\",\"children\":[]},{\"level\":3,\"title\":\"copyCode\",\"slug\":\"copycode\",\"link\":\"#copycode\",\"children\":[]},{\"level\":3,\"title\":\"codeTransformers\",\"slug\":\"codetransformers\",\"link\":\"#codetransformers\",\"children\":[]},{\"level\":3,\"title\":\"twoslash\",\"slug\":\"twoslash\",\"link\":\"#twoslash\",\"children\":[]},{\"level\":3,\"title\":\"whitespace\",\"slug\":\"whitespace\",\"link\":\"#whitespace\",\"children\":[]}]}],\"readingTime\":{\"minutes\":2.18,\"words\":654},\"filePathRelative\":\"notes/theme/config/plugins/代码高亮.md\"}")
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

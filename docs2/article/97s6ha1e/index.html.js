import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/article/97s6ha1e/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/97s6ha1e/\",\"title\":\"全屏水印\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"全屏水印\",\"author\":\"Plume Theme\",\"createTime\":\"2024/04/10 20:28:18\",\"permalink\":\"/article/97s6ha1e/\",\"watermark\":{\"contentType\":\"text\",\"content\":\"全屏水印\"},\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"用途\",\"slug\":\"用途\",\"link\":\"#用途\",\"children\":[{\"level\":3,\"title\":\"行内 HTML\",\"slug\":\"行内-html\",\"link\":\"#行内-html\",\"children\":[]},{\"level\":3,\"title\":\"特殊字元自动转换\",\"slug\":\"特殊字元自动转换\",\"link\":\"#特殊字元自动转换\",\"children\":[]}]}],\"isBlogPost\":true,\"readingTime\":{\"minutes\":4.32,\"words\":1296},\"filePathRelative\":\"1.示例/全屏水印.md\",\"categoryList\":[{\"type\":1,\"name\":\"示例\"}]}")
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

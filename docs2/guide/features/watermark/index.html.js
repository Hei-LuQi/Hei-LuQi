import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/features/watermark/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/features/watermark/\",\"title\":\"文章水印\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"文章水印\",\"author\":\"pengzhanbo\",\"icon\":\"material-symbols-light:branding-watermark-outline\",\"createTime\":\"2024/04/10 20:14:57\",\"permalink\":\"/guide/features/watermark/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"启用水印\",\"slug\":\"启用水印\",\"link\":\"#启用水印\",\"children\":[{\"level\":3,\"title\":\"全局启用\",\"slug\":\"全局启用\",\"link\":\"#全局启用\",\"children\":[]},{\"level\":3,\"title\":\"部分页面启用\",\"slug\":\"部分页面启用\",\"link\":\"#部分页面启用\",\"children\":[]}]},{\"level\":2,\"title\":\"图片水印\",\"slug\":\"图片水印\",\"link\":\"#图片水印\",\"children\":[{\"level\":3,\"title\":\"示例\",\"slug\":\"示例\",\"link\":\"#示例\",\"children\":[]}]},{\"level\":2,\"title\":\"文字水印\",\"slug\":\"文字水印\",\"link\":\"#文字水印\",\"children\":[]},{\"level\":2,\"title\":\"Frontmatter\",\"slug\":\"frontmatter\",\"link\":\"#frontmatter\",\"children\":[]},{\"level\":2,\"title\":\"示例\",\"slug\":\"示例-1\",\"link\":\"#示例-1\",\"children\":[]}],\"readingTime\":{\"minutes\":1.94,\"words\":581},\"filePathRelative\":\"notes/theme/guide/功能/文章水印.md\"}")
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

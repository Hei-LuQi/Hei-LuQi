import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/config/watermark/index.html.vue"
const data = JSON.parse("{\"path\":\"/config/watermark/\",\"title\":\"水印\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"水印\",\"author\":\"Plume Theme\",\"createTime\":\"2024/06/17 15:37:18\",\"permalink\":\"/config/watermark/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"配置项\",\"slug\":\"配置项\",\"link\":\"#配置项\",\"children\":[{\"level\":3,\"title\":\"enabled\",\"slug\":\"enabled\",\"link\":\"#enabled\",\"children\":[]},{\"level\":3,\"title\":\"watermarkOptions\",\"slug\":\"watermarkoptions\",\"link\":\"#watermarkoptions\",\"children\":[]},{\"level\":3,\"title\":\"delay\",\"slug\":\"delay\",\"link\":\"#delay\",\"children\":[]}]},{\"level\":2,\"title\":\"Frontmatter\",\"slug\":\"frontmatter\",\"link\":\"#frontmatter\",\"children\":[{\"level\":3,\"title\":\"watermark\",\"slug\":\"watermark\",\"link\":\"#watermark\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.99,\"words\":298},\"filePathRelative\":\"notes/theme/config/plugins/水印.md\"}")
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

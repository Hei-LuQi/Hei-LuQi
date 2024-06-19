import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/plugins/plugin-netlify-functions/introduction/index.html.vue"
const data = JSON.parse("{\"path\":\"/plugins/plugin-netlify-functions/introduction/\",\"title\":\"介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"介绍\",\"author\":\"pengzhanbo\",\"createTime\":\"2024/03/12 14:11:59\",\"permalink\":\"/plugins/plugin-netlify-functions/introduction/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"Why\",\"slug\":\"why\",\"link\":\"#why\",\"children\":[{\"level\":3,\"title\":\"Netlify\",\"slug\":\"netlify\",\"link\":\"#netlify\",\"children\":[]},{\"level\":3,\"title\":\"VuePress\",\"slug\":\"vuepress\",\"link\":\"#vuepress\",\"children\":[]},{\"level\":3,\"title\":\"部署\",\"slug\":\"部署\",\"link\":\"#部署\",\"children\":[]},{\"level\":3,\"title\":\"场景\",\"slug\":\"场景\",\"link\":\"#场景\",\"children\":[]}]},{\"level\":2,\"title\":\"如何整合？\",\"slug\":\"如何整合\",\"link\":\"#如何整合\",\"children\":[{\"level\":3,\"title\":\"开发环境\",\"slug\":\"开发环境\",\"link\":\"#开发环境\",\"children\":[]},{\"level\":3,\"title\":\"打包\",\"slug\":\"打包\",\"link\":\"#打包\",\"children\":[]}]}],\"readingTime\":{\"minutes\":2.31,\"words\":693},\"filePathRelative\":\"notes/plugins/netlify-functions/介绍.md\"}")
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

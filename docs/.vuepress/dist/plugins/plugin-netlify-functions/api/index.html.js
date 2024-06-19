import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/plugins/plugin-netlify-functions/api/index.html.vue"
const data = JSON.parse("{\"path\":\"/plugins/plugin-netlify-functions/api/\",\"title\":\"API\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"API\",\"author\":\"pengzhanbo\",\"createTime\":\"2024/03/12 13:55:25\",\"permalink\":\"/plugins/plugin-netlify-functions/api/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"netlifyFunctionsPlugin(options)\",\"slug\":\"netlifyfunctionsplugin-options\",\"link\":\"#netlifyfunctionsplugin-options\",\"children\":[{\"level\":3,\"title\":\"options\",\"slug\":\"options\",\"link\":\"#options\",\"children\":[]}]},{\"level\":2,\"title\":\"useNetlifyFunctionsPlugin(app, options)\",\"slug\":\"usenetlifyfunctionsplugin-app-options\",\"link\":\"#usenetlifyfunctionsplugin-app-options\",\"children\":[{\"level\":3,\"title\":\"options\",\"slug\":\"options-1\",\"link\":\"#options-1\",\"children\":[]}]}],\"readingTime\":{\"minutes\":1.2,\"words\":359},\"filePathRelative\":\"notes/plugins/netlify-functions/api.md\"}")
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

import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/component-overrides/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/component-overrides/\",\"title\":\"组件覆写\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"组件覆写\",\"icon\":\"carbon:cics-sit-overrides\",\"author\":\"Plume Theme\",\"createTime\":\"2024/06/17 16:20:15\",\"permalink\":\"/guide/component-overrides/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"使用\",\"slug\":\"使用\",\"link\":\"#使用\",\"children\":[]}],\"readingTime\":{\"minutes\":0.73,\"words\":220},\"filePathRelative\":\"notes/theme/guide/组件覆写.md\"}")
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

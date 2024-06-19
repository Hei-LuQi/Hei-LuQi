import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/features/component/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/features/component/\",\"title\":\"组件\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"组件\",\"author\":\"pengzhanbo\",\"icon\":\"radix-icons:component-2\",\"createTime\":\"2024/03/06 09:42:42\",\"outline\":2,\"permalink\":\"/guide/features/component/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"<Badge />\",\"slug\":\"badge\",\"link\":\"#badge\",\"children\":[{\"level\":3,\"title\":\"Props\",\"slug\":\"props\",\"link\":\"#props\",\"children\":[]}]},{\"level\":2,\"title\":\"<Iconify />\",\"slug\":\"iconify\",\"link\":\"#iconify\",\"children\":[{\"level\":3,\"title\":\"Props\",\"slug\":\"props-1\",\"link\":\"#props-1\",\"children\":[]}]},{\"level\":2,\"title\":\"<Plot />\",\"slug\":\"plot\",\"link\":\"#plot\",\"children\":[{\"level\":3,\"title\":\"Props\",\"slug\":\"props-2\",\"link\":\"#props-2\",\"children\":[]}]},{\"level\":2,\"title\":\"<HomeBox />\",\"slug\":\"homebox\",\"link\":\"#homebox\",\"children\":[{\"level\":3,\"title\":\"Props\",\"slug\":\"props-3\",\"link\":\"#props-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":1.6,\"words\":481},\"filePathRelative\":\"notes/theme/guide/功能/组件.md\"}")
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

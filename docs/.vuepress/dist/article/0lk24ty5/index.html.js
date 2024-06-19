import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/article/0lk24ty5/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/0lk24ty5/\",\"title\":\"主题效果预览\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"主题效果预览\",\"author\":\"pengzhanbo\",\"createTime\":\"2023/12/25 01:28:29\",\"permalink\":\"/article/0lk24ty5/\",\"sticky\":true,\"tags\":[\"预览\",\"标签\"],\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"标题H2\",\"slug\":\"标题h2\",\"link\":\"#标题h2\",\"children\":[{\"level\":3,\"title\":\"标题H3\",\"slug\":\"标题h3\",\"link\":\"#标题h3\",\"children\":[]}]},{\"level\":2,\"title\":\"标题2 Badge\",\"slug\":\"标题2-badge\",\"link\":\"#标题2-badge\",\"children\":[{\"level\":3,\"title\":\"标题3 Badge\",\"slug\":\"标题3-badge\",\"link\":\"#标题3-badge\",\"children\":[]}]}],\"isBlogPost\":true,\"readingTime\":{\"minutes\":3.3,\"words\":990},\"filePathRelative\":\"2.preview/主题效果预览.md\",\"categoryList\":[{\"type\":2,\"name\":\"preview\"}]}")
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

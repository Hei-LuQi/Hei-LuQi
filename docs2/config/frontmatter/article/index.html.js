import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/config/frontmatter/article/index.html.vue"
const data = JSON.parse("{\"path\":\"/config/frontmatter/article/\",\"title\":\"博客文章\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"博客文章\",\"author\":\"pengzhanbo\",\"createTime\":\"2024/03/03 11:01:03\",\"permalink\":\"/config/frontmatter/article/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"配置\",\"slug\":\"配置\",\"link\":\"#配置\",\"children\":[{\"level\":3,\"title\":\"sticky\",\"slug\":\"sticky\",\"link\":\"#sticky\",\"children\":[]},{\"level\":3,\"title\":\"article\",\"slug\":\"article\",\"link\":\"#article\",\"children\":[]},{\"level\":3,\"title\":\"tags\",\"slug\":\"tags\",\"link\":\"#tags\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.38,\"words\":114},\"filePathRelative\":\"notes/theme/config/frontmatter/post.md\"}")
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

import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/en/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"config\":[{\"type\":\"hero\",\"full\":true,\"background\":\"tint-plate\",\"hero\":{\"name\":\"Theme Plume\",\"tagline\":\"Vuepress Next Theme\",\"text\":\"A simple, feature-rich vuepress document & blog theme\",\"actions\":[{\"theme\":\"brand\",\"text\":\"Quick Start →\",\"link\":\"/\"},{\"theme\":\"alt\",\"text\":\"Github\",\"link\":\"https://github.com/pengzhanbo/vuepress-theme-plume\"}]}},{\"type\":\"custom\"}],\"gitInclude\":[],\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.16,\"words\":49},\"filePathRelative\":\"en/README.md\",\"categoryList\":[]}")
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

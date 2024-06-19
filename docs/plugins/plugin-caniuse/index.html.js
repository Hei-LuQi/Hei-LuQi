import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/plugins/plugin-caniuse/index.html.vue"
const data = JSON.parse("{\"path\":\"/plugins/plugin-caniuse/\",\"title\":\"plugin-caniuse\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"plugin-caniuse\",\"author\":\"pengzhanbo\",\"createTime\":\"2024/03/11 17:22:52\",\"permalink\":\"/plugins/plugin-caniuse/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"指南\",\"slug\":\"指南\",\"link\":\"#指南\",\"children\":[]},{\"level\":2,\"title\":\"安装\",\"slug\":\"安装\",\"link\":\"#安装\",\"children\":[]},{\"level\":2,\"title\":\"使用\",\"slug\":\"使用\",\"link\":\"#使用\",\"children\":[{\"level\":3,\"title\":\"Step1：添加插件\",\"slug\":\"step1-添加插件\",\"link\":\"#step1-添加插件\",\"children\":[]},{\"level\":3,\"title\":\"Step2：在markdown中使用\",\"slug\":\"step2-在markdown中使用\",\"link\":\"#step2-在markdown中使用\",\"children\":[]}]},{\"level\":2,\"title\":\"Method\",\"slug\":\"method\",\"link\":\"#method\",\"children\":[]},{\"level\":2,\"title\":\"Markdown 语法\",\"slug\":\"markdown-语法\",\"link\":\"#markdown-语法\",\"children\":[{\"level\":3,\"title\":\"<feature>\",\"slug\":\"feature\",\"link\":\"#feature\",\"children\":[]},{\"level\":3,\"title\":\"{browser_versions}\",\"slug\":\"browser-versions\",\"link\":\"#browser-versions\",\"children\":[]}]}],\"readingTime\":{\"minutes\":1.35,\"words\":406},\"filePathRelative\":\"notes/plugins/caniuse.md\"}")
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

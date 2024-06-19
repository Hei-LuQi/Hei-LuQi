import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/plugins/plugin-netlify-functions/usage/index.html.vue"
const data = JSON.parse("{\"path\":\"/plugins/plugin-netlify-functions/usage/\",\"title\":\"使用\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"使用\",\"author\":\"pengzhanbo\",\"createTime\":\"2024/03/12 15:53:55\",\"permalink\":\"/plugins/plugin-netlify-functions/usage/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"安装\",\"slug\":\"安装\",\"link\":\"#安装\",\"children\":[]},{\"level\":2,\"title\":\"在vuepress中使用\",\"slug\":\"在vuepress中使用\",\"link\":\"#在vuepress中使用\",\"children\":[{\"level\":3,\"title\":\"添加插件\",\"slug\":\"添加插件\",\"link\":\"#添加插件\",\"children\":[]},{\"level\":3,\"title\":\"编写 functions\",\"slug\":\"编写-functions\",\"link\":\"#编写-functions\",\"children\":[]}]},{\"level\":2,\"title\":\"在 vuepress plugin 中使用\",\"slug\":\"在-vuepress-plugin-中使用\",\"link\":\"#在-vuepress-plugin-中使用\",\"children\":[{\"level\":3,\"title\":\"添加插件钩子\",\"slug\":\"添加插件钩子\",\"link\":\"#添加插件钩子\",\"children\":[]}]},{\"level\":2,\"title\":\"环境变量\",\"slug\":\"环境变量\",\"link\":\"#环境变量\",\"children\":[]},{\"level\":2,\"title\":\"示例\",\"slug\":\"示例\",\"link\":\"#示例\",\"children\":[]}],\"readingTime\":{\"minutes\":1.95,\"words\":586},\"filePathRelative\":\"notes/plugins/netlify-functions/使用.md\"}")
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

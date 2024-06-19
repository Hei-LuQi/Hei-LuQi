import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/config/locales/index.html.vue"
const data = JSON.parse("{\"path\":\"/config/locales/\",\"title\":\"多语言\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"多语言\",\"author\":\"pengzhanbo\",\"createTime\":\"2024/03/02 10:07:15\",\"permalink\":\"/config/locales/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"设置语言 重要\",\"slug\":\"设置语言-重要\",\"link\":\"#设置语言-重要\",\"children\":[]},{\"level\":2,\"title\":\"多语言配置\",\"slug\":\"多语言配置\",\"link\":\"#多语言配置\",\"children\":[]},{\"level\":2,\"title\":\"语言适配\",\"slug\":\"语言适配\",\"link\":\"#语言适配\",\"children\":[]},{\"level\":2,\"title\":\"为每个语言设置主题选项\",\"slug\":\"为每个语言设置主题选项\",\"link\":\"#为每个语言设置主题选项\",\"children\":[]}],\"readingTime\":{\"minutes\":1.48,\"words\":445},\"filePathRelative\":\"notes/theme/config/多语言配置.md\"}")
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

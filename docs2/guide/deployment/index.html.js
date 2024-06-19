import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/deployment/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/deployment/\",\"title\":\"部署\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"部署\",\"author\":\"pengzhanbo\",\"icon\":\"material-symbols:deployed-code-outline\",\"createTime\":\"2024/03/20 12:38:48\",\"permalink\":\"/guide/deployment/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"GitHub Pages\",\"slug\":\"github-pages\",\"link\":\"#github-pages\",\"children\":[]},{\"level\":2,\"title\":\"GitLab Pages\",\"slug\":\"gitlab-pages\",\"link\":\"#gitlab-pages\",\"children\":[]},{\"level\":2,\"title\":\"Google Firebase\",\"slug\":\"google-firebase\",\"link\":\"#google-firebase\",\"children\":[]},{\"level\":2,\"title\":\"Heroku\",\"slug\":\"heroku\",\"link\":\"#heroku\",\"children\":[]},{\"level\":2,\"title\":\"Kinsta\",\"slug\":\"kinsta\",\"link\":\"#kinsta\",\"children\":[]},{\"level\":2,\"title\":\"Edgio\",\"slug\":\"edgio\",\"link\":\"#edgio\",\"children\":[]},{\"level\":2,\"title\":\"Netlify\",\"slug\":\"netlify\",\"link\":\"#netlify\",\"children\":[]},{\"level\":2,\"title\":\"Vercel\",\"slug\":\"vercel\",\"link\":\"#vercel\",\"children\":[]},{\"level\":2,\"title\":\"云开发 CloudBase\",\"slug\":\"云开发-cloudbase\",\"link\":\"#云开发-cloudbase\",\"children\":[]},{\"level\":2,\"title\":\"21 云盒子\",\"slug\":\"_21-云盒子\",\"link\":\"#_21-云盒子\",\"children\":[]}],\"readingTime\":{\"minutes\":4.28,\"words\":1284},\"filePathRelative\":\"notes/theme/guide/部署.md\"}")
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

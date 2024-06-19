import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/features/comments/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/features/comments/\",\"title\":\"评论\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"评论\",\"author\":\"pengzhanbo\",\"icon\":\"la:comment\",\"createTime\":\"2024/03/04 11:58:59\",\"permalink\":\"/guide/features/comments/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[{\"level\":3,\"title\":\"服务提供商\",\"slug\":\"服务提供商\",\"link\":\"#服务提供商\",\"children\":[]}]},{\"level\":2,\"title\":\"Giscus\",\"slug\":\"giscus\",\"link\":\"#giscus\",\"children\":[{\"level\":3,\"title\":\"准备工作\",\"slug\":\"准备工作\",\"link\":\"#准备工作\",\"children\":[]},{\"level\":3,\"title\":\"配置\",\"slug\":\"配置\",\"link\":\"#配置\",\"children\":[]},{\"level\":3,\"title\":\"主题\",\"slug\":\"主题\",\"link\":\"#主题\",\"children\":[]}]},{\"level\":2,\"title\":\"Waline\",\"slug\":\"waline\",\"link\":\"#waline\",\"children\":[{\"level\":3,\"title\":\"安装\",\"slug\":\"安装\",\"link\":\"#安装\",\"children\":[]},{\"level\":3,\"title\":\"LeanCloud 设置 (数据库)\",\"slug\":\"leancloud-设置-数据库\",\"link\":\"#leancloud-设置-数据库\",\"children\":[]},{\"level\":3,\"title\":\"Vercel 部署 (服务端)\",\"slug\":\"vercel-部署-服务端\",\"link\":\"#vercel-部署-服务端\",\"children\":[]},{\"level\":3,\"title\":\"绑定域名 (可选)\",\"slug\":\"绑定域名-可选\",\"link\":\"#绑定域名-可选\",\"children\":[]},{\"level\":3,\"title\":\"客户端\",\"slug\":\"客户端\",\"link\":\"#客户端\",\"children\":[]},{\"level\":3,\"title\":\"评论管理 (管理端)\",\"slug\":\"评论管理-管理端\",\"link\":\"#评论管理-管理端\",\"children\":[]}]}],\"readingTime\":{\"minutes\":5.46,\"words\":1638},\"filePathRelative\":\"notes/theme/guide/功能/评论.md\"}")
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

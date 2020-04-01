import http from './http'

export default {
  install: (Vue) => {
    Vue.prototype.$post = http.post
    Vue.prototype.$get = http.get
  }
}

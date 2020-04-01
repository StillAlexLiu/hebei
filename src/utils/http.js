import axios from 'axios'

let handler = (code, url, params, message) => {
  console.error('状态：' + code + '，错误信息：' + message)
  console.log(url)
  if (params) {
    console.log(params)
  }
}

let post = (url, params) => {
  return new Promise((resolve) => {
    axios.post(url, params).then(value => {
      if (value.status === 200) {
        resolve(value.data)
      } else {
        handler(value.status, url, params, '请求失败，请联系管理员')
      }
    }).catch(reason => {
      handler(reason.status, url, params, reason)
    })
  })
}

let get = (url) => {
  return new Promise((resolve) => {
    axios.get(url).then(value => {
      if (value.status === 200) {
        resolve(value.data)
      } else {
        handler(value.status, url, null, '请求失败，请联系管理员')
      }
    }).catch(reason => {
      handler(reason.status, url, null, reason)
    })
  })
}

export default {
  post,
  get
}

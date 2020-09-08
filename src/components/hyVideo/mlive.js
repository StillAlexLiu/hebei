// 监控直播请求接口

// 引入封装好的axios
import { axios } from '@/utils/request'

// 修改请求数据对象,转换成key=value&key2=value2
const transformRequest = data => {
  let queryStr = ''
  for (let key in data) {
    queryStr += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&'
  }
  return queryStr
}

// 增加请求拦截器
axios.interceptors.request.use(
  // 在发送请求之前进行数据处理
  config => {
    // console.log('mlive.js => axios.interceptors.request.use')
    // 在发送post请求之前进行数据处理
    if (config.method === 'post') {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      config.data = transformRequest(config.data)
    }
    // console.log(config)
    return config
  }
  // 对请求错误做些什么
  // error => {
  //   return Promise.reject(error)
  // }
)

const api = {
  dev: 'http://192.168.1.88/insytone/api/',
  pro: 'http://cdn88.cn/api/'
}

export default api

// 获取设备列表
export function getDevList(params) {
  return axios({
    url: api.dev,
    method: 'post',
    data: Object.assign(
      {
        cmdId: 100,
        user: '',
        password: ''
        // autostart: false,
        // dev: null,
        // filter: false
      },
      params
    )
  })
}

// 监看请求
export function playRequest(params) {
  return axios({
    url: api.dev,
    method: 'post',
    data: Object.assign(
      {
        cmdId: 210,
        devId: '', // 设备SN
        channelid: 1, // 监看通道
        streamtype: 1 // 监看码流
      },
      params
    )
  })
}

import http from './../../../../utils/http'
import md5 from 'js-md5'
import axios from 'axios'
const url = 'http://211.90.38.74:7006'
const url2 = ''
export default {
  getList (username, password) {
    const params = {
      cmdId: 100,
      user: username,
      password: md5(password)
    }
    console.log(params)
    return axios.post(url, params)
  },
  getWatch () {
    const params = {}
    return http.post(url2, params)
  }
}

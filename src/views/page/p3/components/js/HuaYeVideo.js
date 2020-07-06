import axios from 'axios'
import md5 from 'md5'
import qs from 'qs'

const url = 'http://211.90.38.74:7006'
const config = {
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  }
}
export default {
  getList (name, password) {
    const str = {
      cmdId: 100,
      user: name,
      password: md5(password),
      autostart: false
    }
    const params = {
      json: JSON.stringify(str)
    }
    return axios.post(url, qs.stringify(params), config)
  },
  checkRequest (name, password, devId, ip) {
    const str = {
      user: name,
      streamtype: 1,
      channelid: 1,
      password: md5(password),
      devId: devId,
      cmdId: 210,
      ip: ip
    }
    const params = {
      json: JSON.stringify(str)
    }
    return axios.post(url, qs.stringify(params), config)
  }
}

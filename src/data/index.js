import http from '../utils/http'
import Mock from 'mockjs'
import isApiDone from './mockCheck'
import common from './common'
import config from './config'
import p1 from './page/p1'
import geo from './china_geo'
import videoUrl from './videoUrl'
// 用mock模拟数据
Mock.setup({ timeout: '40-300' })

const data = {
  geo,
  config, // 页面配置数据，静态数据
  common, // 大屏通用接口
  videoUrl,
  p1,
  // 获取值班人员信息
  getDutyInfo: () => {
    // 模拟数据,如果接口写完传true，否则传false
    if (isApiDone(false)) {
      Mock.mock('/screen/getDutyInfo', 'post', {
        'name|1': [
          '王磊',
          '张强',
          '李莉莉'
        ],
        phone: '0311-00000000'
      })
    }
    return http.post('/screen/getDutyInfo')
  }
}

console.log(data)
export default data

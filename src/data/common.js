import http from '../utils/http'
import Mock from 'mockjs'
import isApiDone from './mockCheck'
// 用mock模拟数据
Mock.setup({ timeout: '40-300' })

let data = {
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
        'phone': '0311-00000000'
      })
    }
    return http.post('/screen/getDutyInfo')
  }
}
export default data

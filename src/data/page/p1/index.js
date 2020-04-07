import http from '../../../utils/http'
import Mock from 'mockjs'
import isApiDone from './../../mockCheck'
import entities from './entities'
// 用mock模拟数据
Mock.setup({ timeout: '40-300' })

export default [
  {
    name: '市场主体趋势',
    component: 'chart',
    data: () => {
      // 模拟数据,如果接口写完传true，否则传false
      if (isApiDone(false)) {
        Mock.mock('/screen/entity/getByYear', 'post', {
          'data|5': [
            {
              'year|+1': 2017,
              'number|+10000': Mock.Random.natural(16000, 18000)
            }
          ]
        })
      }
      return http.post('/screen/entity/getByYear')
    }
  },
  {
    name: '新增市场主体趋势',
    component: 'chart',
    data: () => {
      // 模拟数据,如果接口写完传true，否则传false
      if (isApiDone(false)) {
        Mock.mock('/screen/entity/getNewlyByMonth', 'post', {
          'data|12': [
            {
              'month|+1': 1,
              'number|+100': Mock.Random.natural(1600, 1800)
            }
          ]
        })
      }
      return http.post('/screen/entity/getNewlyByMonth')
    }
  },
  {
    name: '主体数量',
    component: 'NumberGroup',
    data: () => {
      // 模拟数据,如果接口写完传true，否则传false
      if (isApiDone(false)) {
        Mock.mock('/screen/entity/GetQuantity', 'post', {
          'data': [
            {
              'name': '总数',
              'value': Mock.Random.natural(1600, 1800)
            },
            {
              'name': '公有制企业',
              'value': Mock.Random.natural(1600, 1800)
            },
            {
              'name': '外资企业',
              'value': Mock.Random.natural(1600, 1800)
            },
            {
              'name': '私营企业',
              'value': Mock.Random.natural(1600, 1800)
            },
            {
              'name': '个体工商户',
              'value': Mock.Random.natural(1600, 1800)
            },
            {
              'name': '农民合作社',
              'value': Mock.Random.natural(1600, 1800)
            }
          ]
        })
      }
      return http.post('/screen/entity/GetQuantity')
    }
  },
  {
    name: '新增主体数量',
    component: 'NumberGroup',
    data: () => {
      // 模拟数据,如果接口写完传true，否则传false
      if (isApiDone(false)) {
        Mock.mock('/screen/entity/GetQuantityNewly', 'post', {
          'data': [
            {
              'name': '总数',
              'value': Mock.Random.natural(1600, 1800)
            },
            {
              'name': '公有制企业',
              'value': Mock.Random.natural(1600, 1800)
            },
            {
              'name': '外资企业',
              'value': Mock.Random.natural(1600, 1800)
            },
            {
              'name': '私营企业',
              'value': Mock.Random.natural(1600, 1800)
            },
            {
              'name': '个体工商户',
              'value': Mock.Random.natural(1600, 1800)
            },
            {
              'name': '农民合作社',
              'value': Mock.Random.natural(1600, 1800)
            }
          ]
        })
      }
      return http.post('/screen/entity/GetQuantityNewly')
    }
  },
  {
    name: '市场主体产业占比',
    component: null,
    data: () => {
      // 模拟数据,如果接口写完传true，否则传false
      if (isApiDone(false)) {
        Mock.mock('/screen/entity/getRatioByIndustry', 'post', {
          'data': [
            {
              'name': '第一产业',
              'value': 292
            },
            {
              'name': '第二产业',
              'value': 13303
            },
            {
              'name': '第三产业',
              'value': 107657
            }
          ]
        })
      }
      return http.post('/screen/entity/getRatioByIndustry')
    }
  },
  {
    name: '新增市场主体产业占比',
    component: null,
    data: () => {
      // 模拟数据,如果接口写完传true，否则传false
      if (isApiDone(false)) {
        Mock.mock('/screen/entity/getRatioByIndustryNewly', 'post', {
          'data': [
            {
              'name': '第一产业',
              'value': 0
            },
            {
              'name': '第二产业',
              'value': 86
            },
            {
              'name': '第三产业',
              'value': 1225
            }
          ]
        })
      }
      return http.post('/screen/entity/getRatioByIndustryNewly')
    }
  },
  {
    name: '市场主体规模情况',
    component: null,
    data: () => {
      // 模拟数据,如果接口写完传true，否则传false
      if (isApiDone(false)) {
        Mock.mock('/screen/entity/scale', 'post', {
          'data': [
            {
              'year': '2016年',
              'step1': 292,
              'step2': 2292,
              'step3': 392
            },
            {
              'year': '2017年',
              'step1': 392,
              'step2': 2392,
              'step3': 492
            },
            {
              'year': '2018年',
              'step1': 192,
              'step2': 4292,
              'step3': 492
            }
          ]
        })
      }
      return http.post('/screen/entity/scale')
    }
  },
  {
    name: '新增市场主体规模情况',
    component: null,
    data: () => {
      // 模拟数据,如果接口写完传true，否则传false
      if (isApiDone(false)) {
        Mock.mock('/screen/entity/scaleNewly', 'post', {
          'data': [
            {
              'year': '2016年',
              'step1': 292,
              'step2': 792,
              'step3': 392
            },
            {
              'year': '2017年',
              'step1': 292,
              'step2': 892,
              'step3': 492
            },
            {
              'year': '2018年',
              'step1': 192,
              'step2': 492,
              'step3': 792
            }
          ]
        })
      }
      return http.post('/screen/entity/scaleNewly')
    }
  },
  {
    name: '市场主体区域分布',
    component: null,
    data: () => {
      // 模拟数据,如果接口写完传true，否则传false
      if (isApiDone(false)) {
        Mock.mock('/screen/entity/region', 'post', {
          'data': [
            {
              'name': '石家庄市',
              'value': Mock.Random.natural(300, 1800)
            },
            {
              'name': '唐山市',
              'value': Mock.Random.natural(300, 1800)
            },
            {
              'name': '邯郸市',
              'value': Mock.Random.natural(300, 1800)
            },
            {
              'name': '保定市',
              'value': Mock.Random.natural(300, 1800)
            },
            {
              'name': '沧州市',
              'value': Mock.Random.natural(300, 1800)
            },
            {
              'name': '邢台市',
              'value': Mock.Random.natural(300, 1800)
            },
            {
              'name': '廊坊市',
              'value': Mock.Random.natural(300, 1800)
            },
            {
              'name': '承德市',
              'value': Mock.Random.natural(300, 1800)
            },
            {
              'name': '张家口市',
              'value': Mock.Random.natural(300, 1800)
            },
            {
              'name': '衡水市',
              'value': Mock.Random.natural(300, 1800)
            },
            {
              'name': '秦皇岛市',
              'value': Mock.Random.natural(300, 1800)
            }
          ]
        })
      }
      return http.post('/screen/entity/region')
    }
  },
  {
    name: '新增市场主体区域分布',
    component: null,
    data: () => {
      // 模拟数据,如果接口写完传true，否则传false
      if (isApiDone(false)) {
        Mock.mock('/screen/entity/regionNewly', 'post', {
          'data': [
            {
              'name': '石家庄市',
              'value': Mock.Random.natural(10, 500)
            },
            {
              'name': '唐山市',
              'value': Mock.Random.natural(10, 500)
            },
            {
              'name': '邯郸市',
              'value': Mock.Random.natural(10, 500)
            },
            {
              'name': '保定市',
              'value': Mock.Random.natural(10, 500)
            },
            {
              'name': '沧州市',
              'value': Mock.Random.natural(10, 500)
            },
            {
              'name': '邢台市',
              'value': Mock.Random.natural(10, 500)
            },
            {
              'name': '廊坊市',
              'value': Mock.Random.natural(10, 500)
            },
            {
              'name': '承德市',
              'value': Mock.Random.natural(10, 500)
            },
            {
              'name': '张家口市',
              'value': Mock.Random.natural(10, 500)
            },
            {
              'name': '衡水市',
              'value': Mock.Random.natural(10, 500)
            },
            {
              'name': '秦皇岛市',
              'value': Mock.Random.natural(10, 500)
            }
          ]
        })
      }
      return http.post('/screen/entity/regionNewly')
    }
  },
  {
    name: '市场主体行业分布',
    component: null,
    data: () => {
      // 模拟数据,如果接口写完传true，否则传false
      if (isApiDone(false)) {
        Mock.mock('/screen/entity/trade', 'post', {
          'data': [
            {
              'name': '建筑业',
              'value': Mock.Random.natural(10, 500)
            },
            {
              'name': '文化，体育和娱乐业',
              'value': Mock.Random.natural(10, 500)
            },
            {
              'name': '租赁和商务服务业',
              'value': Mock.Random.natural(10, 500)
            },
            {
              'name': '科学研究和技术服务业',
              'value': Mock.Random.natural(10, 500)
            },
            {
              'name': '批发和零售业',
              'value': Mock.Random.natural(10, 500)
            }
          ]
        })
      }
      return http.post('/screen/entity/trade')
    }
  },
  {
    name: '新增市场主体行业分布',
    component: null,
    data: () => {
      // 模拟数据,如果接口写完传true，否则传false
      if (isApiDone(false)) {
        Mock.mock('/screen/entity/tradeNewly', 'post', {
          'data': [
            {
              'name': '建筑业',
              'value': Mock.Random.natural(10, 500)
            },
            {
              'name': '文化，体育和娱乐业',
              'value': Mock.Random.natural(10, 500)
            },
            {
              'name': '租赁和商务服务业',
              'value': Mock.Random.natural(10, 500)
            },
            {
              'name': '科学研究和技术服务业',
              'value': Mock.Random.natural(10, 500)
            },
            {
              'name': '批发和零售业',
              'value': Mock.Random.natural(10, 500)
            }
          ]
        })
      }
      return http.post('/screen/entity/tradeNewly')
    }
  },
  {
    name: '获取主体信息',
    component: null,
    data: (id) => {
      // 模拟数据,如果接口写完传true，否则传false
      if (isApiDone(false)) {
        Mock.mock('/screen/entity/getById', 'post', {
          data: entities[id]
        })
      }
      return http.post('/screen/entity/getById')
    }
  }
]

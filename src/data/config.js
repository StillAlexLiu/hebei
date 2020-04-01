import mapTab from './mapTab'

export default {
  // title: '河北省市场监督管理局智慧监管', // 标题
  // support: '技术支持：天玑智成', // 技术支持名称
  leftTitle: [ // 左侧标题配置
    {
      name: '一网通办'
    },
    {
      name: '事中事后监管'
    },
    {
      name: '企业公示系统'
    },
    {
      name: '公众诉求平台'
    },
    {
      name: '网格联动门户'
    },
    {
      name: '案件处罚系统'
    },
    {
      name: '红盾云桥'
    },
    {
      name: '网页留证'
    }
  ],
  map: {
    center: [115.088171, 39.3706],
    zoom: 8,
    adcode: ['130000'],
    depth: 1
  },
  mapTab // 地图左下角配置文件
}

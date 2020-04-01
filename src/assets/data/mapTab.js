let data = {
  entity: [
    {
      name: '市场主体',
      active: true,
      single: true,
      children: [
        {
          name: '公有制企业',
          icon: require('./../img/p1/tab/tab1.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: require('./guoyou'),
          id: ''
        },
        {
          name: '私营企业',
          icon: require('./../img/p1/tab/tab2.png'),
          fill: '',
          border: '',
          active: false,
          json: require('./siying'),
          id: ''
        },
        {
          name: '农民合作社',
          icon: require('./../img/p1/tab/tab3.png'),
          fill: '',
          border: '',
          active: false,
          json: require('./nongzhuan'),
          id: ''
        },
        {
          name: '个体工商户',
          icon: require('./../img/p1/tab/tab4.png'),
          fill: '',
          border: '',
          active: false,
          json: require('./geti'),
          id: ''
        },
        {
          name: '外资企业',
          icon: require('./../img/p1/tab/tab5.png'),
          fill: '',
          border: '',
          active: false,
          json: require('./waizi'),
          id: ''
        }
      ]
    },
    {
      name: '知识产权',
      active: true,
      single: true,
      children: [
        {
          name: '重点商标',
          icon: require('./../img/p1/tab/p1tab21.png'),
          fill: '',
          border: '',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '专利试点示范',
          icon: require('./../img/p1/tab/p1tab22.png'),
          fill: '',
          border: '',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '优势企业',
          icon: require('./../img/p1/tab/p1tab23.png'),
          fill: '',
          border: '',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '示范企业',
          icon: require('./../img/p1/tab/p1tab24.png'),
          fill: '',
          border: '',
          active: false,
          json: '',
          id: ''
        }
      ]
    }
  ],
  supervision: [
    {
      name: '监督检查',
      active: true,
      single: true,
      children: [
        {
          name: '综合监管',
          icon: require('./../img/p2/tab1.png'),
          fill: '',
          border: '',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '智能预警',
          icon: require('./../img/p2/tab2.png'),
          fill: '',
          border: '',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '无证无照',
          icon: require('./../img/p2/tab3.png'),
          fill: '',
          border: '',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '投诉举报',
          icon: require('./../img/p2/tab4.png'),
          fill: '',
          border: '',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '场地查看',
          icon: require('./../img/p2/tab5.png'),
          fill: '',
          border: '',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '案件管理',
          icon: require('./../img/p2/tab6.png'),
          fill: '',
          border: '',
          active: false,
          json: '',
          id: ''
        }
      ]
    },
    {
      name: '智慧食品监管',
      active: true,
      single: true,
      children: [
        {
          name: '生产',
          icon: require('./../img/p2/tab21.png'),
          fill: '',
          border: '',
          active: false,
          json: require('./p2zonghejianguan'),
          id: ''
        },
        {
          name: '流通',
          icon: require('./../img/p2/tab22.png'),
          fill: '',
          border: '',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '餐饮',
          icon: require('./../img/p2/tab23.png'),
          fill: '',
          border: '',
          active: false,
          json: '',
          id: ''
        }]
    }
  ],
  monitoring: [
    {
      name: '远程监控',
      active: true,
      single: true,
      children: [
        {
          name: '学校食堂',
          icon: require('./../img/p3/tab1.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: require('./p3jiankong'),
          id: ''
        },
        {
          name: '中央厨房',
          icon: require('./../img/p3/tab2.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '老年助餐点',
          icon: require('./../img/p3/tab3.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '煤检卡口',
          icon: require('./../img/p3/tab4.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '桶（盒）饭生产企业',
          icon: require('./../img/p3/tab5.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '中型以上餐饮企业',
          icon: require('./../img/p3/tab6.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '药店',
          icon: require('./../img/p3/tab7.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        }
      ]
    }
  ],
  warning: [
    {
      name: '智能预警',
      active: true,
      single: true,
      children: [
        {
          name: '特种设备',
          icon: require('./../img/p4/tab1.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: require('./p4yujing'),
          id: ''
        },
        {
          name: '食品',
          icon: require('./../img/p4/tab2.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '药品',
          icon: require('./../img/p4/tab3.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '消费维权',
          icon: require('./../img/p4/tab4.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '证照期限',
          icon: require('./../img/p4/tab5.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        }
      ]
    }
  ],
  complaints: [
    {
      name: '投诉举报 ',
      active: true,
      single: true,
      children: [
        {
          name: '广告',
          icon: require('./../img/p5/tab1.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: require('./p5guanggao'),
          id: ''
        },
        {
          name: '药品',
          icon: require('./../img/p5/tab2.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: require('./p5yaopin'),
          id: ''
        },
        {
          name: '食品',
          icon: require('./../img/p5/tab3.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: require('./p5shipin'),
          id: ''
        },
        {
          name: '产品质量',
          icon: require('./../img/p5/tab4.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: require('./p5zhiliang'),
          id: ''
        },
        {
          name: '商标',
          icon: require('./../img/p5/tab5.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '不正当竞争',
          icon: require('./../img/p5/tab6.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '药械化',
          icon: require('./../img/p5/tab7.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '特种设备',
          icon: require('./../img/p5/tab8.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '认证认可',
          icon: require('./../img/p5/tab9.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '价格',
          icon: require('./../img/p5/tab10.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '其他',
          icon: require('./../img/p5/tab11.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '小额有奖举报',
          icon: require('./../img/p5/tab12.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        }
      ]
    }
  ],
  inspect: [
    {
      name: '稽查办案',
      active: true,
      single: true,
      children: [
        {
          name: '商标',
          icon: require('./../img/p6/tab1.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '广告',
          icon: require('./../img/p6/tab2.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '不正当竞争',
          icon: require('./../img/p6/tab3.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '食品生产',
          icon: require('./../img/p6/tab4.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '药械化',
          icon: require('./../img/p6/tab5.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '特种设备',
          icon: require('./../img/p6/tab6.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '产品质量',
          icon: require('./../img/p6/tab7.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '认证认可',
          icon: require('./../img/p6/tab8.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '价格',
          icon: require('./../img/p6/tab9.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '其他',
          icon: require('./../img/p6/tab10.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        },
        {
          name: '计量',
          icon: require('./../img/p6/tab11.png'),
          fill: 'rgb(243,68,85)',
          border: '#fff',
          active: false,
          json: '',
          id: ''
        }
      ]
    }
  ]
}

export default {
  data
}

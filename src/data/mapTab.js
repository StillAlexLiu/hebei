export default [
  {
    name: '综合指挥',
    path: 'command',
    children: [{
      name: '监管力量',
      active: true,
      single: true,
      children: [
        {
          name: '站所',
          icon: require('../assets/images/mapTabs/p0/t1/1.png'),
          active: false,
          number: 20
        },
        {
          name: '网格',
          icon: require('../assets/images/mapTabs/p0/t1/2.png'),
          active: false,
          number: 0
        },
        {
          name: '车辆',
          icon: require('../assets/images/mapTabs/p0/t1/3.png'),
          active: false,
          number: 100
        },
        {
          name: '执法人员',
          icon: require('../assets/images/mapTabs/p0/t1/4.png'),
          active: false,
          number: 200
        }]
    }, {
      name: '市场主体',
      active: false,
      single: true,
      children: [{
        name: '食品生产',
        icon: require('../assets/images/mapTabs/p0/t2/1.png'),
        active: false,
        number: 100
      }, {
        name: '餐饮服务',
        icon: require('../assets/images/mapTabs/p0/t2/2.png'),
        active: false,
        number: 100
      }, {
        name: '食品流通',
        icon: require('../assets/images/mapTabs/p0/t2/3.png'),
        active: false,
        number: 100
      }, {
        name: '中央厨房',
        icon: require('../assets/images/mapTabs/p0/t2/4.png'),
        active: false,
        number: 100
      }, {
        name: '煤检卡口',
        icon: require('../assets/images/mapTabs/p0/t2/5.png'),
        active: false,
        number: 100
      }, {
        name: '小型餐饮备案',
        icon: require('../assets/images/mapTabs/p0/t2/6.png'),
        active: false,
        number: 100
      }, {
        name: '学校食堂',
        icon: require('../assets/images/mapTabs/p0/t2/7.png'),
        active: false,
        number: 100
      }, {
        name: '集体用餐配送',
        icon: require('../assets/images/mapTabs/p0/t2/8.png'),
        active: false,
        number: 100
      }, {
        name: '老年助餐点',
        icon: require('../assets/images/mapTabs/p0/t2/9.png'),
        active: false,
        number: 100
      }, {
        name: '药品生产',
        icon: require('../assets/images/mapTabs/p0/t2/10.png'),
        active: false,
        number: 100
      }, {
        name: '药品流通',
        icon: require('../assets/images/mapTabs/p0/t2/11.png'),
        active: false,
        number: 100
      }, {
        name: '医疗机构',
        icon: require('../assets/images/mapTabs/p0/t2/12.png'),
        active: false,
        number: 100
      }, {
        name: '器械生产',
        icon: require('../assets/images/mapTabs/p0/t2/13.png'),
        active: false,
        number: 100
      }, {
        name: '器械流通',
        icon: require('../assets/images/mapTabs/p0/t2/14.png'),
        active: false,
        number: 100
      }, {
        name: '商业综合体',
        icon: require('../assets/images/mapTabs/p0/t2/15.png'),
        active: false,
        number: 100
      }, {
        name: '电梯',
        icon: require('../assets/images/mapTabs/p0/t2/16.png'),
        active: false,
        number: 100
      }, {
        name: '无照经营',
        icon: require('../assets/images/mapTabs/p0/t2/17.png'),
        active: false,
        number: 100
      }]
    }, {
      name: '监管任务',
      active: false,
      single: true,
      children: [
        {
          name: '双随机检查',
          icon: require('../assets/images/mapTabs/p0/t3/1.png'),
          active: false,
          number: 20
        },
        {
          name: '专项检查',
          icon: require('../assets/images/mapTabs/p0/t3/2.png'),
          active: false,
          number: 0
        },
        {
          name: '无证无照检查',
          icon: require('../assets/images/mapTabs/p0/t3/3.png'),
          active: false,
          number: 100
        },
        {
          name: '异地经营检查',
          icon: require('../assets/images/mapTabs/p0/t3/4.png'),
          active: false,
          number: 200
        },
        {
          name: '主体检查',
          icon: require('../assets/images/mapTabs/p0/t3/5.png'),
          active: false,
          number: 200
        }]
    }, {
      name: '预警信息',
      active: false,
      single: true,
      children: [
        {
          name: '营业执照预警',
          icon: require('../assets/images/mapTabs/p0/t4/1.png'),
          active: false,
          number: 20
        },
        {
          name: '许可证预警',
          icon: require('../assets/images/mapTabs/p0/t4/2.png'),
          active: false,
          number: 0
        },
        {
          name: '电梯预警',
          icon: require('../assets/images/mapTabs/p0/t4/3.png'),
          active: false,
          number: 100
        },
        {
          name: '后厨识别预警',
          icon: require('../assets/images/mapTabs/p0/t4/4.png'),
          active: false,
          number: 200
        },
        {
          name: '冷链车辆预警',
          icon: require('../assets/images/mapTabs/p0/t4/5.png'),
          active: false,
          number: 200
        },
        {
          name: '疑似食物中毒',
          icon: require('../assets/images/mapTabs/p0/t4/6.png'),
          active: false,
          number: 200
        }]
    }, {
      name: '指挥调度',
      active: false,
      single: true,
      children: []
    }]
  },
  {
    name: '主体服务',
    path: 'entity',
    children: [{
      name: '市场主体',
      active: true,
      single: true,
      children: [
        {
          name: '国有、集体及其控股企业',
          type: 'A',
          icon: require('../assets/images/mapTabs/p1/t1/1.png'),
          active: false,
          json: [],
          number: 290,
          id: '',
          children: [{}]
        },
        {
          name: '私营企业',
          type: 'B',
          icon: require('../assets/images/mapTabs/p1/t1/2.png'),
          active: false,
          json: [],
          number: 930,
          id: '',
          children: [{}]
        },
        {
          name: '外资企业',
          type: 'C',
          icon: require('../assets/images/mapTabs/p1/t1/5.png'),
          active: false,
          json: [],
          number: 90,
          id: '',
          children: [{}]
        },
        {
          name: '个体工商户',
          type: 'AA',
          icon: require('../assets/images/mapTabs/p1/t1/4.png'),
          active: false,
          json: [],
          number: 1190,
          id: ''
        },
        {
          name: '农民合作社',
          type: 'D',
          icon: require('../assets/images/mapTabs/p1/t1/3.png'),
          active: false,
          json: [],
          number: 200,
          id: '',
          children: [{}]
        }
      ]
    }, {
      name: '重点监管',
      active: true,
      single: true,
      children: [
        {
          name: '食品',
          icon: require('./../assets/images/mapTabs/p1/t2/1.png'),
          active: false,
          json: [],
          id: '',
          children: [
            {
              name: '食品生产',
              icon: require('./../assets/images/mapTabs/p1/t2/i1/1.png'),
              active: false,
              json: [],
              number: 200,
              id: ''
            },
            {
              name: '餐饮服务',
              icon: require('./../assets/images/mapTabs/p1/t2/i1/2.png'),
              active: false,
              json: [],
              number: 200,
              id: ''
            },
            {
              name: '食品流通',
              icon: require('./../assets/images/mapTabs/p1/t2/i1/3.png'),
              active: false,
              json: [],
              number: 200,
              id: ''
            },
            {
              name: '集体用餐配送',
              icon: require('./../assets/images/mapTabs/p1/t2/i1/4.png'),
              active: false,
              json: [],
              number: 200,
              id: ''
            },
            {
              name: '特殊食品',
              icon: require('./../assets/images/mapTabs/p1/t2/i1/5.png'),
              active: false,
              json: [],
              number: 200,
              id: ''
            },
            {
              name: '酒店',
              icon: require('./../assets/images/mapTabs/p1/t2/i1/6.png'),
              active: false,
              json: [],
              number: 200,
              id: ''
            }
          ]
        },
        {
          name: '特种设备',
          icon: require('./../assets/images/mapTabs/p1/t2/2.png'),
          active: false,
          json: [],
          id: '',
          children: [
            {
              name: '电梯',
              icon: require('./../assets/images/mapTabs/p1/t2/i2/1.png'),
              active: false,
              json: [],
              number: 200,
              id: ''
            },
            {
              name: '压力容器',
              icon: require('./../assets/images/mapTabs/p1/t2/i2/2.png'),
              active: false,
              number: 200,
              json: [],
              id: ''
            },
            {
              name: '大型游乐设施',
              icon: require('./../assets/images/mapTabs/p1/t2/i2/3.png'),
              active: true,
              number: 200,
              json: [],
              id: ''
            },
            {
              name: '场（厂）内专用车辆',
              icon: require('./../assets/images/mapTabs/p1/t2/i2/4.png'),
              active: false,
              number: 200,
              json: [],
              id: ''
            },
            {
              name: '起重机械',
              icon: require('./../assets/images/mapTabs/p1/t2/i2/5.png'),
              active: false,
              number: 200,
              json: [],
              id: ''
            },
            {
              name: '锅炉',
              icon: require('./../assets/images/mapTabs/p1/t2/i2/6.png'),
              active: false,
              number: 200,
              json: [],
              id: ''
            }
          ]
        },
        {
          name: '药械化',
          icon: require('./../assets/images/mapTabs/p1/t2/3.png'),
          active: true,
          json: [],
          id: '',
          children: [{
            name: '医疗机构',
            icon: require('./../assets/images/mapTabs/p1/t2/i3/1.png'),
            active: true,
            number: 200,
            json: [],
            id: ''
          }, {
            name: '器械生产',
            icon: require('./../assets/images/mapTabs/p1/t2/i3/2.png'),
            active: true,
            number: 200,
            json: [],
            id: ''
          }, {
            name: '器械流通',
            icon: require('./../assets/images/mapTabs/p1/t2/i3/3.png'),
            active: true,
            number: 200,
            json: [],
            id: ''
          }, {
            name: '国产非特备案',
            icon: require('./../assets/images/mapTabs/p1/t2/i3/4.png'),
            active: true,
            number: 200,
            json: [],
            id: ''
          }, {
            name: '药店',
            icon: require('./../assets/images/mapTabs/p1/t2/i3/5.png'),
            active: true,
            json: [],
            id: ''
          }]
        },
        {
          name: '商业综合体',
          icon: require('./../assets/images/mapTabs/p1/t2/4.png'),
          active: false,
          number: 200,
          json: [],
          id: ''
        },
        {
          name: '无照经营',
          icon: require('./../assets/images/mapTabs/p1/t2/5.png'),
          active: false,
          number: 200,
          json: [],
          id: ''
        },
        {
          name: '市场',
          icon: require('./../assets/images/mapTabs/p1/t2/6.png'),
          active: false,
          json: [],
          id: '',
          children: [{
            name: '农贸市场',
            icon: require('./../assets/images/mapTabs/p1/t2/i6/1.png'),
            active: false,
            number: 200,
            json: [],
            id: ''
          }, {
            name: '专业市场',
            icon: require('./../assets/images/mapTabs/p1/t2/i6/2.png'),
            active: false,
            number: 200,
            json: [],
            id: ''
          }]
        },
        {
          name: '直销',
          icon: require('./../assets/images/mapTabs/p1/t2/7.png'),
          active: false,
          number: 200,
          json: [],
          id: ''
        },
        {
          name: '进博会接待酒店',
          icon: require('./../assets/images/mapTabs/p1/t2/8.png'),
          active: false,
          number: 200,
          json: [],
          id: ''
        },
        {
          name: '供博企业',
          icon: require('./../assets/images/mapTabs/p1/t2/9.png'),
          active: false,
          number: 200,
          json: [],
          id: ''
        },
        {
          name: '美容美发',
          icon: require('./../assets/images/mapTabs/p1/t2/10.png'),
          active: false,
          number: 200,
          json: [],
          id: ''
        },
        {
          name: '教育培训',
          icon: require('./../assets/images/mapTabs/p1/t2/11.png'),
          active: false,
          json: [],
          id: '',
          children: [{
            name: '培训',
            icon: require('./../assets/images/mapTabs/p1/t2/i11/1.png'),
            active: false,
            number: 200,
            json: [],
            id: ''
          }, {
            name: '教育科技',
            icon: require('./../assets/images/mapTabs/p1/t2/i11/2.png'),
            active: false,
            number: 200,
            json: [],
            id: ''
          }, {
            name: '管理与咨询',
            icon: require('./../assets/images/mapTabs/p1/t2/i11/3.png'),
            active: false,
            number: 200,
            json: [],
            id: ''
          }, {
            name: '投资',
            icon: require('./../assets/images/mapTabs/p1/t2/i11/4.png'),
            active: false,
            number: 200,
            json: [],
            id: ''
          }]
        },
        {
          name: '直单用途预付费卡销',
          icon: require('./../assets/images/mapTabs/p1/t2/12.png'),
          active: false,
          number: 200,
          json: [],
          id: ''
        }
      ]
    }, {
      name: '主体信用',
      active: true,
      single: true,
      children: [
        {
          name: '信用良好',
          icon: require('./../assets/images/mapTabs/p1/t4/1.png'),
          active: false,
          number: 200,
          json: [],
          id: ''
        },
        {
          name: '守信',
          icon: require('./../assets/images/mapTabs/p1/t4/2.png'),
          active: false,
          number: 200,
          json: [],
          id: ''
        },
        {
          name: '信用一般',
          icon: require('./../assets/images/mapTabs/p1/t4/3.png'),
          active: false,
          number: 200,
          json: [],
          id: ''
        },
        {
          name: '失信',
          icon: require('./../assets/images/mapTabs/p1/t4/4.png'),
          active: false,
          number: 200,
          json: [],
          id: ''
        },
        {
          name: '严重失信',
          icon: require('./../assets/images/mapTabs/p1/t4/5.png'),
          active: false,
          number: 200,
          json: [],
          id: ''
        }
      ]
    }, {
      name: '一窗通（一日办）',
      active: false,
      fingle: true
    }]
  }, {
    name: '综合监管',
    path: 'supervision',
    children: [{
      name: '综合监管',
      active: true,
      single: true,
      children: [
        {
          name: '网格化监管',
          icon: require('./../assets/images/mapTabs/p2/t1/7.png'),
          active: false,
          number: 200,
          json: [],
          id: '',
          type: 1
        }, {
          name: '双随机监管',
          icon: require('./../assets/images/mapTabs/p2/t1/8.png'),
          active: false,
          number: 200,
          json: [],
          id: '',
          type: 2
        }
      // {
      //   name: '智能预警',
      //   icon: require('./../assets/images/mapTabs/p2/t1/2.png'),
      //   active: false,
      //   number: 200,
      //   json: [],
      //   id: ''
      // }, {
      //   name: '无证无照',
      //   icon: require('./../assets/images/mapTabs/p2/t1/3.png'),
      //   active: false,
      //   number: 200,
      //   json: [],
      //   id: ''
      // }, {
      //   name: '投诉举报',
      //   icon: require('./../assets/images/mapTabs/p2/t1/4.png'),
      //   active: false,
      //   number: 200,
      //   json: [],
      //   id: ''
      // }, {
      //   name: '场地查看',
      //   icon: require('./../assets/images/mapTabs/p2/t1/5.png'),
      //   active: false,
      //   number: 200,
      //   json: [],
      //   id: ''
      // }, {
      //   name: '案件管理',
      //   icon: require('./../assets/images/mapTabs/p2/t1/6.png'),
      //   active: false,
      //   number: 200,
      //   json: [],
      //   id: ''
      // }
      ]
    },
    {
      name: '智慧食品监管',
      active: false,
      single: true,
      children: [{
        name: '生产',
        icon: require('./../assets/images/mapTabs/p2/t2/1.png'),
        active: false,
        number: 200,
        json: [],
        id: ''
      }, {
        name: '销售',
        icon: require('./../assets/images/mapTabs/p2/t2/4.png'),
        active: false,
        number: 200,
        json: [],
        id: ''
      }, {
        name: '餐饮',
        icon: require('./../assets/images/mapTabs/p2/t2/3.png'),
        active: false,
        number: 200,
        json: [],
        id: ''
      }]
    },
    // {
    //   name: '产品质量监管',
    //   active: false,
    //   single: true,
    //   children: [{
    //     name: '生产',
    //     icon: require('./../assets/images/mapTabs/p2/t2/1.png'),
    //     active: false,
    //     number: 200,
    //     json: [],
    //     id: ''
    //   }, {
    //     name: '流通',
    //     icon: require('./../assets/images/mapTabs/p2/t2/2.png'),
    //     active: false,
    //     number: 200,
    //     json: [],
    //     id: ''
    //   }, {
    //     name: '餐饮',
    //     icon: require('./../assets/images/mapTabs/p2/t2/3.png'),
    //     active: false,
    //     number: 200,
    //     json: [],
    //     id: ''
    //   }]
    // },
    {
      name: '特种设备监管',
      active: false,
      single: true,
      children: [{
        name: '电梯',
        icon: require('./../assets/images/mapTabs/p2/t6/1.png'),
        active: false,
        json: [],
        number: 200,
        id: '',
        type: 3
      }, {
        name: '锅炉',
        icon: require('./../assets/images/mapTabs/p2/t6/2.png'),
        active: false,
        number: 200,
        json: [],
        id: '',
        type: 1
      }, {
        name: '压力容器',
        icon: require('./../assets/images/mapTabs/p2/t6/3.png'),
        active: false,
        number: 200,
        json: [],
        id: '',
        type: 2
      }, {
        name: '压力管道',
        icon: require('./../assets/images/mapTabs/p2/t6/4.png'),
        active: false,
        number: 200,
        json: [],
        id: '',
        type: 8
      }, {
        name: '起重机械',
        icon: require('./../assets/images/mapTabs/p2/t6/5.png'),
        active: false,
        number: 200,
        json: [],
        id: '',
        type: 4
      }, {
        name: '客运索道',
        icon: require('./../assets/images/mapTabs/p2/t6/6.png'),
        active: false,
        number: 200,
        json: [],
        id: '',
        type: 9
      }, {
        name: '大型游乐设施',
        icon: require('./../assets/images/mapTabs/p2/t6/7.png'),
        active: true,
        number: 200,
        json: [],
        id: '',
        type: 6
      }, {
        name: '场（厂）内专用车辆',
        icon: require('./../assets/images/mapTabs/p2/t6/8.png'),
        active: false,
        number: 200,
        json: [],
        id: '',
        type: 5
      }]
    }]
  }, {
    name: '远程监控',
    path: 'monitor',
    children: [{
      name: '远程监控',
      active: true,
      single: true,
      children: [
        {
          name: '餐饮',
          icon: require('../views/page/p3/components/img/9.png'),
          active: false,
          number: 20,
          type: 0
        },
        {
          name: '酒店',
          icon: require('../views/page/p3/components/img/jiu@2x.png'),
          active: false,
          number: 15,
          type: 3
        },
        {
          name: '学校',
          icon: require('../views/page/p3/components/img/youer@2x.png'),
          active: false,
          number: 100,
          type: 4
        },
        {
          name: '煤检卡口',
          icon: require('../views/page/p3/components/img/5.png'),
          active: false,
          number: 200,
          type: 5
        }
        // {
        //   name: '中央厨房',
        //   icon: require('../assets/images/mapTabs/p3/t1/5.png'),
        //   active: false,
        //   number: 20
        // },
        // {
        //   name: '老年助餐点',
        //   icon: require('../assets/images/mapTabs/p3/t1/6.png'),
        //   active: false,
        //   number: 20
        // },
        // {
        //   name: '中型以上餐饮企业',
        //   icon: require('../assets/images/mapTabs/p3/t1/7.png'),
        //   active: false,
        //   number: 100
        // },
        // {
        //   name: '药店',
        //   icon: require('../assets/images/mapTabs/p3/t1/8.png'),
        //   active: false,
        //   number: 200
        // }
      ]
    }]
  }, {
    name: '智能预警',
    path: 'warning',
    children: [{
      name: '食品预警',
      active: true,
      single: true,
      children: [
        {
          name: '食品冷链运输',
          icon: require('../assets/images/mapTabs/p4/t1/1.png'),
          active: false,
          number: 20
        },
        {
          name: '后厨识别',
          icon: require('../assets/images/mapTabs/p4/t1/2.png'),
          active: false,
          number: 20
        },
        {
          name: '网络餐饮',
          icon: require('../assets/images/mapTabs/p4/t1/3.png'),
          active: false,
          number: 20
        }]
    }, {
      name: '药品预警',
      active: false,
      single: true,
      children: [
        {
          name: '药师管理',
          icon: require('../assets/images/mapTabs/p4/t2/1.png'),
          active: false,
          number: 20
        }]
    }, {
      name: '特种设备',
      active: false,
      single: true,
      children: [
        {
          name: '特种设备维保',
          icon: require('../assets/images/mapTabs/p4/t3/1.png'),
          active: false,
          number: 20
        },
        {
          name: '特种设备检验',
          icon: require('../assets/images/mapTabs/p4/t3/2.png'),
          active: false,
          number: 20
        },
        {
          name: '特种设备故障',
          icon: require('../assets/images/mapTabs/p4/t3/3.png'),
          active: false,
          number: 20
        },
        {
          name: '老旧特种设备',
          icon: require('../assets/images/mapTabs/p4/t3/4.png'),
          active: false,
          number: 20
        }]
    }, {
      name: '消费维权预警',
      active: false,
      single: true,
      children: [
        {
          name: '群体性投诉举报',
          icon: require('../assets/images/mapTabs/p4/t4/1.png'),
          active: false,
          number: 20
        },
        {
          name: '集中场所',
          icon: require('../assets/images/mapTabs/p4/t4/2.png'),
          active: false,
          number: 20
        }]
    }, {
      name: '证照期限预警',
      active: false,
      single: true,
      children: [
        {
          name: '营业执照',
          icon: require('../assets/images/mapTabs/p4/t4/1.png'),
          active: false,
          number: 20
        },
        {
          name: '许可证',
          icon: require('../assets/images/mapTabs/p4/t4/2.png'),
          active: false,
          number: 20
        },
        {
          name: '健康证',
          icon: require('../assets/images/mapTabs/p4/t4/2.png'),
          active: false,
          number: 20
        }]
    }]
  }, {
    name: '投诉举报',
    path: 'complaint',
    children: [{
      name: '举报类型',
      active: true,
      single: true,
      children: [
        {
          name: '商标',
          icon: require('../assets/images/mapTabs/p5/t1/1.png'),
          active: false,
          number: 20
        }, {
          name: '广告',
          icon: require('../assets/images/mapTabs/p5/t1/2.png'),
          active: false,
          number: 20
        }, {
          name: '不正当竞争',
          icon: require('../assets/images/mapTabs/p5/t1/3.png'),
          active: false,
          number: 20
        }, {
          name: '食品生产',
          icon: require('../assets/images/mapTabs/p5/t1/4.png'),
          active: false,
          number: 20
        }, {
          name: '药械化',
          icon: require('../assets/images/mapTabs/p5/t1/5.png'),
          active: false,
          number: 20
        }, {
          name: '特种设备',
          icon: require('../assets/images/mapTabs/p5/t1/6.png'),
          active: false,
          number: 20
        }, {
          name: '产品质量',
          icon: require('../assets/images/mapTabs/p5/t1/7.png'),
          active: false,
          number: 20
        }, {
          name: '认证认可',
          icon: require('../assets/images/mapTabs/p5/t1/8.png'),
          active: false,
          number: 20
        }, {
          name: '价格',
          icon: require('../assets/images/mapTabs/p5/t1/9.png'),
          active: false,
          number: 20
        }, {
          name: '食品生产',
          icon: require('../assets/images/mapTabs/p5/t1/10.png'),
          active: false,
          number: 20
        }, {
          name: '小额有奖举报',
          icon: require('../assets/images/mapTabs/p5/t1/11.png'),
          active: false,
          number: 20
        }]
    }, {
      name: '举报来源',
      active: false,
      single: true,
      children: [
        {
          name: '药安食美',
          icon: require('../assets/images/mapTabs/p5/t2/1.png'),
          active: false,
          number: 20
        }, {
          name: '12315',
          icon: require('../assets/images/mapTabs/p5/t2/2.png'),
          active: false,
          number: 20
        }, {
          name: '96365',
          icon: require('../assets/images/mapTabs/p5/t2/3.png'),
          active: false,
          number: 20
        }, {
          name: '网络举报',
          icon: require('../assets/images/mapTabs/p5/t2/4.png'),
          active: false,
          number: 20
        }]
    }]
  },
  {
    name: '稽查办案',
    path: 'audit',
    children: [{
      name: '案件类型',
      active: true,
      single: true,
      children: [
        {
          name: '不正当竞争',
          icon: require('../assets/images/mapTabs/p6/t1/不正当竞争@2x.png'),
          active: false,
          number: 20,
          type: 1
        },
        {
          name: '传销',
          icon: require('../assets/images/mapTabs/p6/t1/传销@2x.png'),
          active: false,
          number: 20,
          type: 2
        },
        {
          name: '登记',
          icon: require('../assets/images/mapTabs/p6/t1/登记@2x.png'),
          active: false,
          number: 20,
          type: 3
        },
        {
          name: '动产抵押',
          icon: require('../assets/images/mapTabs/p6/t1/动产抵押@2x.png'),
          active: false,
          number: 20,
          type: 4
        },
        {
          name: '广告',
          icon: require('../assets/images/mapTabs/p6/t1/广告@2x.png'),
          active: false,
          number: 20,
          type: 5
        },
        {
          name: '合同',
          icon: require('../assets/images/mapTabs/p6/t1/合同@2x.png'),
          active: false,
          number: 20,
          type: 6
        },
        {
          name: '集中贸易',
          icon: require('../assets/images/mapTabs/p6/t1/集中贸易@2x.png'),
          active: false,
          number: 20,
          type: 7
        },
        {
          name: '经纪人',
          icon: require('../assets/images/mapTabs/p6/t1/经纪人@2x.png'),
          active: false,
          number: 20,
          type: 8
        },
        {
          name: '农贸',
          icon: require('../assets/images/mapTabs/p6/t1/农贸@2x.png'),
          active: false,
          number: 20,
          type: 9
        },
        {
          name: '拍卖',
          icon: require('../assets/images/mapTabs/p6/t1/拍卖@2x.png'),
          active: false,
          number: 20,
          type: 10
        },
        {
          name: '其他',
          icon: require('../assets/images/mapTabs/p6/t1/其他@2x.png'),
          active: false,
          number: 20,
          type: 11
        },
        {
          name: '人民币',
          icon: require('../assets/images/mapTabs/p6/t1/人民币@2x.png'),
          active: false,
          number: 20,
          type: 12
        },
        {
          name: '商标',
          icon: require('../assets/images/mapTabs/p6/t1/商标@2x.png'),
          active: false,
          number: 20,
          type: 13
        },
        {
          name: '食品',
          icon: require('../assets/images/mapTabs/p6/t1/食品@2x.png'),
          active: false,
          number: 20,
          type: 14
        },
        {
          name: '投机倒把',
          icon: require('../assets/images/mapTabs/p6/t1/投机倒把@2x.png'),
          active: false,
          number: 20,
          type: 15
        },
        {
          name: '限制竞争',
          icon: require('../assets/images/mapTabs/p6/t1/限制竞争@2x.png'),
          active: false,
          number: 20,
          type: 16
        },
        {
          name: '消费者权益',
          icon: require('../assets/images/mapTabs/p6/t1/消费者权益@2x.png'),
          active: false,
          number: 20,
          type: 17
        },
        {
          name: '招投标',
          icon: require('../assets/images/mapTabs/p6/t1/招投标@2x.png'),
          active: false,
          number: 20,
          type: 18
        },
        {
          name: '直销',
          icon: require('../assets/images/mapTabs/p6/t1/直销@2x.png'),
          active: false,
          number: 20,
          type: 19
        }]
    }, {
      name: '案件预警',
      active: true,
      single: true,
      children: [
        {
          name: '红色预警',
          icon: require('../assets/images/mapTabs/p6/t1/h.png'),
          active: false,
          number: 20,
          type: 20
        },
        {
          name: '橙色预警',
          icon: require('../assets/images/mapTabs/p6/t1/c.png'),
          active: false,
          number: 20,
          type: 21
        },
        {
          name: '黄色预警',
          icon: require('../assets/images/mapTabs/p6/t1/hh.png'),
          active: false,
          number: 20,
          type: 22
        }]
    }]
  },
  {
    name: '效能评价',
    path: 'audit',
    children: [{
      name: '各市区单位',
      active: true,
      single: true,
      children: [
        {
          name: '石家庄市',
          icon: require('../assets/images/mapTabs/p8/t1/1.png'),
          active: false,
          number: 0
        },
        {
          name: '唐山市',
          icon: require('../assets/images/mapTabs/p8/t1/1.png'),
          active: false,
          number: 0
        },
        {
          name: '秦皇岛市',
          icon: require('../assets/images/mapTabs/p8/t1/1.png'),
          active: false,
          number: 0
        },
        {
          name: '邯郸市',
          icon: require('../assets/images/mapTabs/p8/t1/1.png'),
          active: false,
          number: 0
        },
        {
          name: '邢台市',
          icon: require('../assets/images/mapTabs/p8/t1/1.png'),
          active: false,
          number: 0
        },
        {
          name: '保定市',
          icon: require('../assets/images/mapTabs/p8/t1/1.png'),
          active: false,
          number: 0
        },
        {
          name: '张家口市',
          icon: require('../assets/images/mapTabs/p8/t1/1.png'),
          active: false,
          number: 0
        },
        {
          name: '承德市',
          icon: require('../assets/images/mapTabs/p8/t1/1.png'),
          active: false,
          number: 0
        },
        {
          name: '沧州市',
          icon: require('../assets/images/mapTabs/p8/t1/1.png'),
          active: false,
          number: 0
        },
        {
          name: '廊坊市',
          icon: require('../assets/images/mapTabs/p8/t1/1.png'),
          active: false,
          number: 0
        },
        {
          name: '衡水市',
          icon: require('../assets/images/mapTabs/p8/t1/1.png'),
          active: false,
          number: 0
        }]
    }]
  },
  {
    name: '许可备案',
    path: 'keepOnRecord',
    children: [{
      name: '许可备案',
      active: true,
      single: true,
      children: [
        {
          name: '食品',
          icon: require('../assets/images/mapTabs/p10/t1/1.png'),
          active: false,
          number: 20
        },
        {
          name: '药械',
          icon: require('../assets/images/mapTabs/p10/t1/2.png'),
          active: false,
          number: 20
        },
        {
          name: '特种设备',
          icon: require('../assets/images/mapTabs/p10/t1/3.png'),
          active: false,
          number: 20
        },
        {
          name: '计量器具',
          icon: require('../assets/images/mapTabs/p10/t1/4.png'),
          active: false,
          number: 20
        },
        {
          name: '化妆品',
          icon: require('../assets/images/mapTabs/p10/t1/5.png'),
          active: false,
          number: 20
        },
        {
          name: '广告',
          icon: require('../assets/images/mapTabs/p10/t1/6.png'),
          active: false,
          number: 20
        },
        {
          name: '工业产品',
          icon: require('../assets/images/mapTabs/p10/t1/7.png'),
          active: false,
          number: 20
        },
        {
          name: '实验室',
          icon: require('../assets/images/mapTabs/p10/t1/8.png'),
          active: false,
          number: 20
        },
        {
          name: '知识产权 ',
          icon: require('../assets/images/mapTabs/p10/t1/9.png'),
          active: false,
          number: 20
        }]
    }]
  }
]

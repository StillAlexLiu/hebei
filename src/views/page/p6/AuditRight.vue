<template>
    <div class="AuditRight full page-style">
        <container title="案件处理流程跟踪" class="h-2-8 full-width">
            <ChartTree :data="treeData"/>
        </container>
        <div class="h-3-8">
            <container class="w-1-2 full-height" title="案卷流转情况跟踪">
                <NumberGroup :data="numbers"/>
            </container>
            <container class="w-1-2 full-height" title="案件全程电子化">
                <NameOnly :data="nameOnlyData" class="full"/>
            </container>
        </div>
        <div class="h-3-8">
            <container class="w-1-2 full-height" title="物品处理情况">
                <ChartsPieValueLegend :data="pieData" :text="'物品处理\n案件数量\n500件'" :text-size="28"/>
            </container>
            <container class="w-1-2 full-height" title="包容审慎">
                <RadioSimple :data="[{name:'不予处罚'},{name:'减轻处罚'}]" style="height: 45px"/>
                <div style="height: calc(100% - 45px)">
                    <ChartsPie :data="pieData1" :is-pie="true" :show-legend="false" :show-value="true"/>
                </div>
            </container>
        </div>
    </div>
</template>

<script>
import ChartTree from './components/ChartTree'
import ChartsPie from '../p2/compontes/ChartsPie'
import Mock from 'mockjs'
import NumberGroup from './components/numberGroup'
import NameOnly from './components/nameOnly'
import ChartsPieValueLegend from '../p5/compontes/ChartsPieValueLegend'

export default {
  name: 'AuditRight',
  components: {
    ChartsPieValueLegend,
    NameOnly,
    NumberGroup,
    ChartsPie,
    ChartTree
  },
  data () {
    return {
      imgUrl: [
        require('./components/img/大框.png'),
        require('./components/img/绿色.png')
      ],
      p6case: [],
      caseHandler: '',
      treeData: [{
        name: '线索',
        value: 19,
        children: [
          {
            name: '立案',
            value: 24,
            children: [
              {
                name: '调查取证',
                value: 24,
                children: [
                  {
                    name: '调查终结',
                    value: 24,
                    children: [
                      {
                        name: '处罚告知',
                        value: 24,
                        children: [
                          {
                            name: '复核',
                            value: 24,
                            children: [
                              {
                                name: '听证',
                                value: 24,
                                children: [
                                  {
                                    name: '处罚决定',
                                    value: 24,
                                    children: [
                                      {
                                        name: '执行',
                                        value: 24,
                                        children: [
                                          {
                                            name: '归档',
                                            value: 24
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }],
      pieData: [
        {
          name: '已处理',
          value: Mock.Random.natural(1600, 1800)
        },
        {
          name: '未处理',
          value: Mock.Random.natural(1600, 1800)
        }
      ],
      pieData1: [
        {
          name: '广告',
          value: Mock.Random.natural(1000, 1800)
        },
        {
          name: '商标',
          value: Mock.Random.natural(1000, 1800)
        },
        {
          name: '产品质量',
          value: Mock.Random.natural(1000, 1800)
        },
        {
          name: '不正当竞争',
          value: Mock.Random.natural(1000, 1800)
        }
      ],
      numbers: [
        {
          name: '承办部门',
          value: Mock.Random.natural(1000, 1800)
        },
        {
          name: '核审部门',
          value: Mock.Random.natural(1000, 1800)
        },
        {
          name: '会审部门',
          value: Mock.Random.natural(1000, 1800)
        },
        {
          name: '归档部门',
          value: Mock.Random.natural(1000, 1800)
        }
      ],
      nameOnlyData: [
        {
          name: '电子用印',
          value: Mock.Random.natural(1000, 1800)
        },
        {
          name: '移动审批',
          value: Mock.Random.natural(1000, 1800)
        },
        {
          name: '视频证据',
          value: Mock.Random.natural(1000, 1800)
        },
        {
          name: '文书证据',
          value: Mock.Random.natural(1000, 1800)
        },
        {
          name: '图片证据',
          value: Mock.Random.natural(1000, 1800)
        },
        {
          name: '其他证据',
          value: Mock.Random.natural(1000, 1800)
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.AuditRight {

}
</style>

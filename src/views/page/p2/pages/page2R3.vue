<template>
    <div class="page2R3">
      <tableH :data='tableData'></tableH>
    </div>
</template>

<script>
import tableH from '../compontes/RightTable.vue'
export default {
  name: 'page2R3',
  components: {
    tableH
  },
  data () {
    return {
      tableData: [
        {
          level: '黄焖鸡',
          lnboxTime: '川菜',
          surplusTime: '是',
          name: '否',
          institution: '食品安全科',
          type: '良好',
          state: '调查取证',
          nr: '点评商团'
        },
        {
          level: '过桥米线',
          lnboxTime: '川菜',
          surplusTime: '否',
          name: '否',
          institution: '罗西所',
          type: '良好',
          state: '调查取证',
          nr: '很好吃'
        },
        {
          level: '米饭',
          lnboxTime: '川菜',
          surplusTime: '是',
          name: '否',
          institution: '食品安全科',
          type: '良好',
          state: '调查取证',
          nr: '很好吃'
        },
        {
          level: '小吃',
          lnboxTime: '川菜',
          surplusTime: '否',
          name: '否',
          institution: '罗西所',
          type: '良好',
          state: '调查取证',
          nr: '很好吃'
        },
        {
          level: '黄焖鸡',
          lnboxTime: '川菜',
          surplusTime: '是',
          name: '否',
          institution: '食品安全科',
          type: '良好',
          state: '调查取证',
          nr: '点评商团'
        },
        {
          level: '过桥米线',
          lnboxTime: '川菜',
          surplusTime: '否',
          name: '否',
          institution: '罗西所',
          type: '良好',
          state: '调查取证',
          nr: '很好吃'
        },
        {
          level: '米饭',
          lnboxTime: '川菜',
          surplusTime: '是',
          name: '否',
          institution: '食品安全科',
          type: '良好',
          state: '调查取证',
          nr: '很好吃'
        },
        {
          level: '小吃',
          lnboxTime: '川菜',
          surplusTime: '否',
          name: '否',
          institution: '罗西所',
          type: '良好',
          state: '调查取证',
          nr: '很好吃'
        },
        {
          level: '黄焖鸡',
          lnboxTime: '川菜',
          surplusTime: '是',
          name: '否',
          institution: '食品安全科',
          type: '良好',
          state: '调查取证',
          nr: '点评商团'
        },
        {
          level: '过桥米线',
          lnboxTime: '川菜',
          surplusTime: '否',
          name: '否',
          institution: '罗西所',
          type: '良好',
          state: '调查取证',
          nr: '很好吃'
        },
        {
          level: '米饭',
          lnboxTime: '川菜',
          surplusTime: '是',
          name: '否',
          institution: '食品安全科',
          type: '良好',
          state: '调查取证',
          nr: '很好吃'
        },
        {
          level: '小吃',
          lnboxTime: '川菜',
          surplusTime: '否',
          name: '否',
          institution: '罗西所',
          type: '良好',
          state: '调查取证',
          nr: '很好吃'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.page2R3 {

}
</style>

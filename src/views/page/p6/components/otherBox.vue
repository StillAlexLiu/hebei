<template>
  <div class='otherBox'>
    <div class="BoxLeft full-height w-1-3">
        <ul>
            <li v-for="(item, index) in data" :key="index">
                <div class="leftTitle">
                    {{ item.name }}
                </div>
                <div class="leftCon" :style="{'color': color}">
                    {{ item.value }}{{ item.unit }}
                </div>
            </li>
        </ul>
    </div>
    <div class="w-2-3 full-height">
        <slot name="echarts"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    color: {
      type: String,
      default: () => {
        return 'rgba(254, 105, 65, 1)'
      }
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.otherBox{
  width: 100%;
  height: 100%;
  .BoxLeft{
    ul{
        padding-top: 25%;
        li{
            width: 70%;
            text-align: center;
            height: 140px;
            background-image: url('../../p7/components/img/leftBox.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            list-style: none;
            margin-bottom: 20px;
            .leftTitle{
                width: 100%;
                height: 60px;
                line-height: 60px;
                font-size: 30px;
            }
            .leftCon{
                width: 100%;
                height: 60px;
                line-height: 60px;
                font-size: 35px;
                font-family:LESLIE-Regular,LESLIE;
            }
        }
    }
  }
}
</style>

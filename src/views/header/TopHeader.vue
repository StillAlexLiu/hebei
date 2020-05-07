<template>
    <div class="text-center top-header">
        <div class="full-height w-2-7 date">
            <DateTime/>
        </div>
        <div class="full-height w-3-7 title">
            <!--            {{$dataAll.config.title}}-->
            <img src="./img/logo.png" alt>智能管控中心
        </div>
        <div class="full-height w-2-7 info">
            <div class="full-height w-7-8 text-right">
                值班长：{{info.name}}&nbsp;&nbsp;&nbsp;&nbsp;联系电话：{{info.phone}}
            </div>
            <div class="full-height w-1-8">
                <!--                {{$dataAll.config.support}}-->
            </div>
        </div>
    </div>
</template>

<script>
import DateTime from './DateTime'

export default {
  name: 'TopHeader',
  components: { DateTime },
  data () {
    return {
      info: ''
    }
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      this.$dataAll.common.getDutyInfo().then(value => {
        this.info = value
      })
    }
  }
}
</script>

<style scoped lang="less">
.top-header {
    line-height: 100px;

    .date {
        font-size: 36px;
    }

    .title {
        font-size: 64px;
        font-weight: bold;
        padding: 0 200px;
        box-sizing: border-box;
        letter-spacing: 38px;

        img {
            width: 96px;
            vertical-align: middle;
            margin-right: 40px;
        }
    }

    border-bottom: 1px solid #5385D7;

    .text-right {
        font-size: 30px;
    }
}
</style>

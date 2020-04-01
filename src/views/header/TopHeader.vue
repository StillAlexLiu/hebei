<template>
    <div class="text-center top-header">
        <div class="full-height w-2-7 date">
            <DateTime/>
        </div>
        <div class="full-height w-3-7 title">
            <!--            {{$dataAll.config.title}}-->
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
        font-size: 60px;
        font-weight: bold;
        text-align-last: justify;
        padding: 0 200px;
        box-sizing: border-box;
        background-image: url("../../assets/images/河北省市场监督管理.png");
        background-repeat: no-repeat;
        background-position: center;
    }

    border-bottom: 4px solid #1e8db0;

    .text-right {
        font-size: 30px;
    }
}
</style>

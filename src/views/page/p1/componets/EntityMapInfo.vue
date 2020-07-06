<template>
    <div class="EntityMapInfo full-width ">
        <Container :title="data['主体名称']">
            <div class="table">
                <div v-for="(value,key) in data" :key="key">
                    <div>{{key}}</div>
                    <div>{{value}}</div>
                </div>
            </div>
        </Container>
        <!-- <container title="企业五官图" class="sub">
            <ChartRadar :data="radarData" class="full"/>
        </container> -->
    </div>
</template>
<script>
// import ChartRadar from './ChartRadar'
import Mock from 'mockjs'

export default {
  name: 'EntityMapInfo',
  // components: { ChartRadar },
  data () {
    return {
      radarData: [{
        name: '创新力',
        value: Mock.Random.natural(70, 100),
        max: 100
      }, {
        name: '经营力',
        value: Mock.Random.natural(70, 100),
        max: 100
      }, {
        name: '风控值',
        value: Mock.Random.natural(70, 100),
        max: 100
      }, {
        name: '诚信度',
        value: Mock.Random.natural(70, 100),
        max: 100
      }, {
        name: '生命力',
        value: Mock.Random.natural(70, 100),
        max: 100
      }]
    }
  },
  watch: {
    data: {
      immediate: false,
      deep: true,
      handler: function () {
        console.log(this.data, '右上角')
      }
    }
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return null
      }
    }
  }
}
</script>

<style scoped lang="less">
.EntityMapInfo {
    .sub {
        margin-top: 10px;
        height: 500px;
    }

    .title {
        background: rgba(34, 174, 197, .25);
        width: 100%;
        height: 36px;
        font-weight: bold;
        line-height: 36px;
        text-indent: 20px;
        font-size: 20px;
    }

    .table {
        width: 100%;
        margin-top: 10px;
        display: block;
        overflow: hidden;
        margin-bottom: 5px;

        > div {
            width: 100%;
            font-size: 16px;
            display: block;
            overflow: hidden;

            > div {
                float: left;
                display: block;
                overflow: hidden;
                margin-bottom: 5px;

                &:nth-child(1) {
                    color: #fff;
                    width: 11rem;
                    /*text-align: right;*/
                    text-align: justify;
                    text-align-last: justify;

                    &:after {
                        content: "";
                        display: inline;
                        width: 100%;
                    }
                }

                &:nth-child(2) {
                    text-align: left;
                    padding-left: 2rem;
                    width: calc(~"100% - 11rem");
                }
            }
        }
    }

}
</style>

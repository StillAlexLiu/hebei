<template>
    <div class=" full-width" v-if="JSON.stringify(data)!=='null'" >
        <div class="block">
            <div class="title full-width">
                <div class="logo"><img src="./img/logo.png"></div>
                <div class="text"> {{data['注册信息']['基本信息']['主体名称']}}</div>
                <div class="status">{{data['注册信息']['基本信息']['企业状态']}}</div>
            </div>
            <info-table :data="data['注册信息']['基本信息']"/>
        </div>
    </div>
</template>

<script>
import InfoTable from './infoTable'

export default {
  name: 'TableBaseInfo',
  components: {InfoTable},
  props: {
    data: {
      type: Object,
      return: () => {
        return {}
      }
    }
  },
  mounted () {
    console.error(this.data)
  }
}
</script>

<style scoped lang="less">
.block {
    padding: 0 20px;

    .title {
        text-align: left;
        display: block;
        width: 100%;
        overflow: hidden;
        height: 85px;

        > div {
            float: left;
            height: 100%;
        }

        .logo {
            width: 85px;

            > img {
                width: 100%;
                height: 100%;
            }
        }

        .text {
            line-height: 85px;
            font-size: 48px;
            text-indent: 20px;
        }

        .status {
            line-height: 30px;
            height: 30px;
            margin-top: 27px;
            font-size: 22px;
            padding: 0 10px;
            margin-left: 30px;
            background: rgba(126, 211, 33, 0.62);
            border: 2px solid rgba(126, 211, 33, 1);
        }
    }

}
</style>

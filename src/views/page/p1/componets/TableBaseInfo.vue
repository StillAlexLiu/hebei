<template>
    <div class="block full-width" v-if="JSON.stringify(data)!=='null'" style="position: relative">
        <div class="title  full-width">{{data['注册信息']['基本信息']['主体名称']}}</div>
        <info-table :data="data['注册信息']['基本信息']"/>
        <img src="./img/qrcode.png" style="position: absolute;right: 60px"/>
    </div>
</template>

<script>
import InfoTable from './infoTable'

export default {
  name: 'TableBaseInfo',
  components: { InfoTable },
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
    border: 1px solid #1e8db0;
    padding: 10px;
    display: block;
    overflow: hidden;
    background-color: rgba(0, 35, 46, .5);
    border-radius: 10px;

    .title {
        font-size: 48px;
        text-indent: 20px;
        text-align: left;
    }

}
</style>

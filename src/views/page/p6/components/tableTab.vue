<template>
  <div id='tableTab'>
      <ul>
          <li v-for="(item,index) in nameData" :key="index" @click="tabCli(item,index)" :class="{clickColor : active == index}">{{ item.name }}</li>
      </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      nameData: [
        {
          name: '案件',
          key: 'case'
        }, {
          name: '线索',
          key: 'clew'
        }, {
          name: '协查',
          key: 'check'
        }
      ],
      active: 0
    }
  },
  methods: {
    tabCli (item, index) {
      this.active = index
    }
  },
  watch: {
    active: {
      immediate: true,
      deep: true,
      handler: function () {
        this.$emit('active', this.nameData[this.active].key)
      }
    }
  }
}
</script>
<style scoped lang='less'>
#tableTab{
    width: 100%;
    height: 100%;
    text-align: center;
    margin-top: 7rem;
    ul{
        margin: 40px 0 0 0;
        width: 100%;
        padding: 0;
        li{
            list-style: none;
            width: 100%;
            line-height: 60px;
            background: #122E3C;
            margin-bottom: 10px;
            font-size: 25px;
            color: white;
            cursor: pointer;
            border: 1px solid rgb(8,7 41)
        }
    }
    .clickColor{
        background-image: url('./img/png5.png')!important;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
}
</style>

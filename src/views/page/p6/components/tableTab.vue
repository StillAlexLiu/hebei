<template>
    <div id='tableTab'>
        <div class="item" v-for="(item,index) in nameData" :key="index" @click="tabCli(item,index)"
             :class="{clickColor : active == index}">{{ item.name }}
        </div>
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
        }
        // , {
        //   name: '协查',
        //   key: 'check'
        // }
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
#tableTab {
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .item {
        list-style: none;
        width: 220px;
        height: 68px;
        line-height: 68px;
        background: rgba(17, 17, 23, 1) linear-gradient(180deg, rgba(30, 121, 176, 0) 0%, rgba(30, 100, 176, 0.4) 100%);
        border: 2px solid rgba(61, 148, 213, 1);
        font-size: 36px;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .clickColor {
        background-image: url('./img/png5.png') !important;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        border: none;
    }
}
</style>

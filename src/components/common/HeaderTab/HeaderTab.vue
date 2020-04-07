<template>
    <div class="header-tab">
        <div v-for="(item,index) in data" :key="index" :class="index===value?'active':''"
             @click="tabChange(index,item)">
            {{item.name}}
        </div>
    </div>
</template>

<script>
/**
 *传入的props数组中的对象需要包含name，组件的v-model绑定number类型整数，为选中项的index
 *emit了change事件
 * todo 后续可以加入 对齐方式，item样式设定宽度等，justify-content的space-between|space-around等方式
 */
export default {
  name: 'HeaderTab',
  data: () => {
    return {
      activeName: ''
    }
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    value: {
      type: Number,
      default: 0
    }
  },
  methods: {
    tabChange (index, item) {
      this.$emit('input', index)
      this.$emit('change', item, index)
    }
  },
  mounted () {

  }
}
</script>

<style scoped lang="less">
.header-tab {

    text-align: center;
    color: #fff;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: nowrap;

    > div {
        height: 55px;
        width: 260px;
        margin: 0 5px;
        font-size: 32px;
        line-height: 55px;
        background-image: url("./img/tab-default.png");
        background-size: 100% 100%;
        cursor: pointer;
    }

    .active {
        color: #ff7d48;
        font-weight: bold;
        background-image: url("./img/tab-active.png");
    }
}
</style>

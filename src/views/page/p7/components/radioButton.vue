<template>
    <div class="btn-group">
        <div v-for="(item,index) in data " :key="index" :class="selectIndex===index?'active':''"
             @click="click(data,index)">
            {{item.name}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'RadioButton',
  data: () => {
    return {
      selectIndex: 0
    }
  },
  watch: {
    selectIndex: {
      immediate: true,
      deep: true,
      handler: function () {
        this.$emit('input', this.data[this.selectIndex])
      }
    }
  },
  mounted () {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].active) {
        this.selectIndex = i
      }
    }
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    click (data, index) {
      for (let i = 0; i < data.length; i++) {
        data[i].active = i === index
      }
      this.selectIndex = index
    }
  }
}
</script>

<style scoped lang="less">
.btn-group {
    height: 50px;
    display: inline-block;
    width: 100%;

    > div {
        float: left;
        width: 50%;
        height: 100%;
        font-size: 22px;
        line-height: 50px;
        border: 1px solid #4F85DF;
        text-align: center;
        background-color: #131D3A;

        &.active {
            background-color:#315FBC;
        }
    }
}
</style>

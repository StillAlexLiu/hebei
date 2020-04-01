<template>
  <div class="btn-group">
    <div v-for="(item,index) in data " :key="index" :class="selectIndex===index?'active':''" @click="click(data,index)">
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
  padding: 0.3rem 1rem;
  display: inline-block;
  margin-left: 15rem;
  > div {
    float: left;
    width: 18rem;
    height: 100%;
    font-size: 2rem;
    line-height: 2.4rem;
    border: 0.1rem solid #22aec5;
    text-align: center;
    &.active {
      background-color: rgba(30, 141, 176, 0.59);
    }
  }
}
</style>

<template>
    <div class="SelectTable">
        <div class="h-1-4 header row">
            <div class="cell" v-for="(item,index) in dimension" :key="index">{{item.name}}</div>
        </div>
        <div class="row h-1-4 body" :class="index ===selectIndex?'active':''" v-for="(item,index) in data" :key="index"
             @click="click(item,index)">
            <div class="cell" v-for="(itemd,indexd) in dimension" :key="indexd">{{item[itemd.value]}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SelectTable',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    dimension: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      selectIndex: 0
    }
  },
  watch: {
    selectIndex: {
      deep: true,
      immediate: true,
      handler: function () {
        this.$emit('input', this.data[this.selectIndex])
      }
    }
  },
  methods: {
    click (item, index) {
      this.selectIndex = index
    }
  }
}
</script>

<style scoped lang="less">
.SelectTable {
    display: table;
    font-size: 22px;
    text-align: center;
    border-collapse: collapse;

    .header {
        background-color: rgba(30, 141, 176, .59);
        border: 2px solid #37adc3;
    }

    .row {
        display: table-row;

        .cell {
            display: table-cell;
            vertical-align: middle;
        }
    }

    .body {
        cursor: pointer;
        .cell {
            border: 1px solid #37adc3;
        }
    }
    .active{
        background-color: #00232e;
    }

}
</style>

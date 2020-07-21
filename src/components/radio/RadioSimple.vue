<template>
    <div class="RadioSimple">
        <div v-for="(item,index) in data" class="float-left"
             :class="[index===selectIndex?'active':'default','w-1-'+(data.length)]"
             :key="index"
             @click="click(item,index)">
            <p> {{item.name}}</p>
        </div>
    </div>
</template>
<script>
/**
 * 只做了单项绑定，返回结果为object
 */
export default {
  name: 'RadioSimple',
  data () {
    return {
      selectIndex: 0
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
.RadioSimple {
    background-color: #42b983;
    overflow: hidden;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    /*height: auto;*/
    flex-direction: row;

    > div {
        background-image: url("./img/simple_default.png");
        background-size: 100% 100%;
        flex-grow: 1;
        text-align: center;
        display: table;
        height: 100%;
        flex-basis: auto;
        cursor: pointer;
        > p {
            display: table-cell;
            vertical-align: middle;
            font-size: 26px;
            color: #79dfef;
        }
    }

    > .active {
        font-weight: bold;
        background-image: url("./img/simple_active.png");

        > p {
            color: #fff;
            font-size: 26px;
        }
    }
}
</style>

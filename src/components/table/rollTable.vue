<template>
    <div class="rollTable " style="position: relative">
        <div style="overflow:hidden;margin-top:60px;">
            <transition-group name="list" tag='div' ref="table" style="width: 100%" class="table">
                <div class="row  body  list-item full-width" v-for="(item,index) in showData"
                     :key="item.__index+'m'"
                     @click="click(item,index)">
                    <div class="cell" v-for="(itemd,indexd) in dimension" :key="indexd+'&'+item.__index"
                         :style="{width:widths.length>0?widths[index]/wc*100 +'%':(100/dimension.length)+'%'}">
                        <span>     {{item[itemd.value]}}</span>
                    </div>
                </div>
            </transition-group>
        </div>
        <div class="header " :key="-1" style="position: absolute;top:0">
            <div class="cell" v-for="(item,index) in dimension" :key="index"
                 :style="{width:widths.length>0?widths[index]/wc*100 +'%':(100/dimension.length)+'%'}">
                {{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'rollTable',
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
    },
    widths: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      selectIndex: 0,
      showData: [],
      timer: 0,
      wc: 0
    }
  },
  watch: {
    selectIndex: {
      deep: true,
      immediate: true,
      handler: function () {
        this.$emit('input', this.data[this.selectIndex])
      }
    },
    data: {
      deep: true,
      immediate: true,
      handler: function () {
        if (this.data.length > 0) {
          this.startRoll()
        }
      }
    }
  },
  mounted () {
    this.wc = 0
    for (let i = 0; i < this.widths.length; i++) {
      this.wc += this.widths[i] * 1
    }
  },
  methods: {
    click (item, index) {
      this.selectIndex = index
    },
    startRoll () {
      try {
        clearInterval(this.timer)
      } catch (e) {

      }
      let len = this.data.length
      for (let i = 0; i < len; i++) {
        this.$set(this.data[i], '__index', i)
      }
      if (len > 10) {
        len = 10
      }
      this.showData = this.data.slice(0, len)
      console.log(this.showData)
      let i = len
      this.timer = setInterval(() => {
        this.showData.shift()
        this.showData.push(this.data[i])
        i++
        if (i === this.data.length) {
          i = 0
        }
      }, 2000)
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style scoped lang="less">
.rollTable {
    font-size: 22px;
    text-align: center;
    border-collapse: collapse;
    position: relative;
    background-color: rgba(17, 17, 23, .7);
    overflow: hidden;

    > div {
        width: 100%;
    }

    .table {
        /*display: table;*/
    }

    .header {
        background-color: #1D617A;
        border: 2px solid #37adc3;
        width: 100%;
        height: 60px;
        line-height: 60px;

        > div {
            height: 100%;
            float: left;
        }

    }

    .row {
        width: 100%;
        height: 120px;
        overflow: hidden;
        .cell {
            height: 100%;
            float: left;
        }
    }

    .body {
        cursor: pointer;

        .cell {
            border: 1px solid #37adc3;
            display: table;

            span {
                display: table-cell;
                vertical-align: middle;
            }
        }
    }

    .active {
        background-color: #00232e;
    }

}

/*.list-item {*/
/*    !*transition: all 2s linear;*!*/

/*    > div {*/

/*    }*/
/*}*/

.list-move {
    transition: all 2s linear;
}

.list-enter {
    /*transition: transform 2s linear;*/
    /*transition: all .1s linear;*/
    transform: translateY(80px);
}

.list-enter-active, .list-leave-active {
    transition: all 2s linear;
}

.list-leave-to {
    /*background-color: red;*/
    /*opacity: 30%;*/
    /*top:-20px;*/
    /*transform: translateY(-30px);*/
    transform: translateY(-80px);
    transition: all 2s linear;
}

.list-leave-active {
    transition: transform 2s linear;
    position: absolute;
}
</style>

<template>
    <div class="rollTable full-height" style="position: relative">
      <div class="header " :key="-1" style="position: absolute;top:0">
            <div class="cell w-1-4" v-for="(item,index) in dimension" :key="index"
                 :class="{middle: index === 1}">
                {{item.name}}
            </div>
        </div>
        <div class="scroll" style="overflow:hidden;margin-top:60px;height:90%" ref="scroll" @mouseenter="stop" @mouseleave="start">
          <div class="scroll2 full-height" >
            <ul style="width: 98.6%" ref="ul">
              <li class="body full-width" v-for="(item,index) in demo"
                     :key="item.key"
                     @click="click(item,index)"
                     :style="{height:liHeight+'px'}"
                     >
                     <div class="cell w-1-4">
                        <span>{{item.caseTime}}</span>
                    </div>
                     <div class="cell w-1-2">
                        <span>{{item.caseName}}</span>
                    </div>
                     <div class="cell w-1-4">
                        <span>{{item.caseState}}</span>
                    </div>
                </li>
            </ul>
            <ul style="width: 98.6%">
              <li class="body  list-item full-width" v-for="(item,index) in demo"
                     :key="item.key"
                     @click="click(item,index)"
                     :style="{height:liHeight+'px'}"
                     >
                     <div class="cell w-1-4">
                        <span>{{item.caseTime}}</span>
                    </div>
                     <div class="cell w-1-2">
                        <span>{{item.caseName}}</span>
                    </div>
                     <div class="cell w-1-4">
                        <span>{{item.caseState}}</span>
                    </div>
                </li>
            </ul>
          </div>
        </div>
    </div>
</template>

<script>
import Bus from '@/assets/bus.js'
export default {
  name: 'rollTable',
  props: {
    tableData: {
      type: Array,
      default: () => {
        return [
        ]
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
      wc: 0,
      tableIndex: 0,
      demo: [],
      flag: false,
      scrollY: 0,
      scrollBox: '',
      ul: '',
      liHeight: 0
    }
  },
  watch: {
    selectIndex: {
      deep: true,
      immediate: true,
      handler: function () {
        this.$emit('input', this.tableData[this.selectIndex])
      }
    },
    tableData: {
      deep: true,
      immediate: true,
      handler: function () {
        var data = this.tableData
        this.demo = this.initData(data)
      }
    }
  },
  mounted () {
    this.wc = 0
    for (let i = 0; i < this.widths.length; i++) {
      this.wc += this.widths[i] * 1
    }
    this.$nextTick(() => {
      this.scrollBox = this.$refs.scroll
      this.ul = this.$refs.ul
      this.liHeight = this.scrollBox.offsetHeight / 9
      // console.log(this.scrollBox.offsetHeight)
      this.start()
    })
  },
  methods: {
    click (item, index) {
      this.selectIndex = index
      Bus.$emit('caseOn', item)
    },
    initData (data) {
      const rtn = []
      this.tableIndex = data.length
      data.forEach((item, index, arr) => {
        item.key = index
        rtn.push(item)
      })
      return rtn
    },
    // add () {
    //   const item = this.demo.shift()
    //   item.key = this.tableIndex
    //   this.demo.push(item)
    //   this.tableIndex++
    // }
    start () {
      this.flag = false
      window.clearInterval(this.timer)
      this.timer = setInterval(this.scroll, 30)
    },
    scroll () {
      this.scrollY++
      if (this.scrollY === this.ul.offsetHeight) {
        this.scrollY = 0
      }
      this.scrollBox.scrollTop = this.scrollY
      if (this.flag) {
        window.clearInterval(this.timer)
      }
    },
    stop () {
      this.flag = true
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
    overflow: hidden;
    > div {
        width: 100%;
    }
    .table {
        /*display: table;*/
        overflow: hidden;
        margin: 0;
        padding: 0;
        background-color: rgba(17, 17, 23, .7);
    }

    .header {
        background-color: #1D617A;
        border: 2px solid #37adc3;
        width: 100%;
        height: 60px;
        line-height: 60px;
        position: relative;
        z-index: 10;
        > div {
            height: 100%;
            float: left;
        }
    }
    .body {
       width: 100%;
        overflow: hidden;
        cursor: pointer;
        background-color: rgba(0,0,0,.5);
        .cell {
           
            display: table;
             height: 100%;
            float: left;
            span {
               border: 1px solid #37adc3;
                display: table-cell;
                vertical-align: middle;
            }
        }
    }
    // .active {
    //     background-color: #00232e;
    // }
}
  //  .list-move {
  //       transition: all 1s linear;
  //   }
  //   .list-enter {
  //       transition: transform 1s linear;
  //       transform: translateY(60px);
  //   }

  //   .list-enter-active, .list-leave-active {
  //       transition: all 1s linear;
  //   }

  //   .list-leave-to {
  //       opacity: 0;
  //       transition: all 1s linear;
  //       height: 0;
  //       overflow: hidden;

  //       > div {
  //           align-items: end;
  //       }
  //   }

  //   .list-leave-active {
  //       transition: transform 0s linear;
  //   }
    .middle{
      width: 50%!important;
    }
    .scroll2{
      ul{
        margin: 0;
        padding: 0;
      }
    }
</style>

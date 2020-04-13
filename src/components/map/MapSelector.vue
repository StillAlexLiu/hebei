<template>
    <div class="MapSelector">
        <!--        1级分类-->
        <div class="tab-group full-width">
            <div class="tab-item" v-for="(item,index) in data" :class="index===activeIndex?'active':''" :key="index"
                 @click="tabClick(index)">{{item.name}}
            </div>
        </div>
        <!--        2级分类-->
        <div class="btn-group full-width" v-if="data[activeIndex]">
            <template v-for="(item,index) in data[activeIndex].children">
                <div class="btn"
                     :key="index" @click="itemClick(item,index,data[activeIndex].children)">
                    <img class="img" alt :src="item.icon"/>
                    <div>{{item.name}}</div>
                    <img class="icon" v-if="item.active&&!item.children" alt src="./img/item_select.png"/>
                    <font-awesome-icon v-if="item.children" :class="item.active?'rotate-up':'rotate-down'"
                                       class="more"
                                       icon="angle-double-up"/>
                </div>
                <!--                3级分类-->
                <div class="sub-btn-group full-width" :key="'s'+index" v-if="item.children&&item.active">
                    <div class="btn" v-for="(item2,index) in item.children"
                         :key="index" @click="itemClick(item2,index,item.children)">
                        <img class="img" alt :src="item2.icon"/>
                        <img class="icon" v-if="item2.active" alt src="./img/item_select.png"/>
                        <div>{{item2.name}}</div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MapSelector',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      activeIndex: 0,
      single: true,
      selectArray: []
    }
  },
  mounted () {
    this.init()
  },
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler: function () {
        this.activeIndex = 0
      }
    }
  },
  methods: {
    init () {
      this.single = this.data[this.activeIndex].single
      this.send()
    },
    tabClick (index) {
      this.activeIndex = index
      this.init()
      this.removeActive(this.data)
    },
    itemClick (item, index, array) {
      if (this.single) {
        for (let i = 0; i < array.length; i++) {
          if (i !== index) {
            array[i].active = false
          }
          if (array[i].children) {
            for (let j = 0; j < array[i].children.length; j++) {
              array[i].children[j].active = false
            }
          }
        }
      }

      item.active = !item.active
      this.send()
    },
    removeActive (array) {
      for (let i = 0; i < array.length; i++) {
        const item = array[i]
        item.active = false
        if (item.children) {
          this.removeActive(item.children)
        }
      }
    },
    send () {
      this.$emit('getSelect', {
        tab: this.data[this.activeIndex],
        items: this.findActive()
      })
    },
    findActive () {
      this.selectArray = []
      for (let i = 0; i < this.data[this.activeIndex].children.length; i++) {
        const item = this.data[this.activeIndex].children[i]
        if (item.children) {
          item.children.forEach((v) => {
            if (v.active) {
              this.selectArray.push(v)
            }
          })
        } else {
          if (item.active) {
            this.selectArray.push(item)
          }
        }
      }
      return this.selectArray
    }
  }
}
</script>

<style scoped lang="less">
.MapSelector {
    background: linear-gradient(180deg, rgba(32, 35, 58, .8) 0%, rgba(36, 41, 66, .8) 100%);
    position: absolute;
    bottom: 0;
    height: 510px;
    width: 940px;
    text-align: center;

    .tab-group {
        height: 50px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;

        .tab-item {
            flex-grow: 1;
            background-image: url("./img/select_default.png");
            line-height: 50px;
            font-size: 22px;
            padding: 0 10px;
            background-size: 100% 100%;
        }

        .active {
            font-weight: bold;
            background-image: url("./img/select_active.png");
        }
    }

    .btn-group {
        height: calc(~"100% - 50px");
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        overflow-y: auto;
    }

    .sub-btn-group {
        display: flex;
        flex-wrap: wrap;
        overflow-y: auto;
        border: 1px dashed #4294D2;
    }

    .btn {
        align-self: flex-start;
        width: calc(~"100% / 6");
        /*flex-grow: 1;*/
        /*flex-basis: calc(~"100% / 6");*/
        overflow: hidden;
        font-size: 26px;
        position: relative;
        height: 230px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        >div{
            height: 60px;
            margin-top: 10px;
            line-height: 30px;
        }
        > .img {
            height: 84px;
            align-self: center;
        }

        > .icon {
            position: absolute;
            right: 25px;
            top: 45px;
            width: 30px;
            height: 30px;
        }

        > .more {
            position: absolute;
            right: 25px;
            top: 100px;
            width: 30px;
            height: 30px;
        }
    }

    .rotate-up {
        animation: rotate-up .5s;
    }

    .rotate-down {
        animation: rotate-down .5s;
        transform: rotate(180deg);
    }

    @keyframes rotate-up {
        0% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }

    }
    @keyframes rotate-down {
        0% {
            transform: rotate(360deg);
        }
        100% {
            transform: rotate(180deg);
        }

    }
}
</style>

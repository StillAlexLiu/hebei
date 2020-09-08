<template>
    <div class="MapSelector">
        <!--        1级分类-->
        <div class="tab-group full-width">
            <div class="tab-item" v-for="(item,index) in data" :class="index===activeIndex?'active':''" :key="index"
                 @click="tabClick(item, index)">{{item.name}}
            </div>
        </div>
        <div class="btn-group full-width" v-if="$route.name === '主体服务' & activeIndex === 0">
            <template v-for="(item,index) in data[activeIndex].children">
                <div class="btn" v-if="!showBox"
                     :key="index">
                    <img class="img" alt :src="item.icon" @click="itemClick(item,index,data[activeIndex].children)"
                         v-if="!item.children || index === 3"/>
                    <img class="img" alt :src="item.icon" @click="pngClick(item,index,data[activeIndex].children)"
                         v-else>
                    <div>{{item.name}}</div>
                    <img class="icon" v-if="item.active" alt src="./img/item_select.png"/>
                    <font-awesome-icon v-if="item.children" :class="item.active?'rotate-up':'rotate-down'"
                                       @click="itemClick(item,index,data[activeIndex].children)"
                                       class="more"
                                       icon="angle-double-up"/>
                </div>
                <!--                3级分类-->
                <div class="sub-btn-group full-width padding" :key="'s'+index"
                     v-if="item.children&&item.active&&showBox">
                    <img class="imgIcon" alt src="../../assets/images/mapTabs/p1/t2/icon-公有制企业备份 6@2x.png"
                         v-if="item.name === '国有、集体及其控股企业'" @click="showBoxCli(item)"/>
                    <img class="imgIcon" alt src="../../assets/images/mapTabs/p1/t2/icon-农民合作社@2x.png"
                         v-if="item.name === '农民合作社'" @click="showBoxCli(item)"/>
                    <img class="imgIcon" alt src="../../assets/images/mapTabs/p1/t2/icon-外资企业@2x.png"
                         v-if="item.name === '外资企业'" @click="showBoxCli(item)"/>
                    <img class="imgIcon" alt src="../../assets/images/mapTabs/p1/t2/icon-私营企业@2x.png"
                         v-if="item.name === '私营企业'" @click="showBoxCli(item)"/>
                    <div class="btn2" v-for="(item2,index) in item.children"
                         :key="index">
                        <!-- <img class="icon" v-if="item2.active" alt src="./img/item_select.png"/> -->
                        <div class="icon_box" @click="itemClick(item2,index,item.children)"
                             :class="{Tab_background : item2.active === true}">{{item2.name}}
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <!--        2级分类-->
        <div class="btn-group full-width" v-else>
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
// import { linkSync } from 'fs'
import axios from 'axios'
// import { type } from 'os'
import Bus from '@/assets/bus.js'

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
      selectArray: [],
      active: 0,
      showBox: false,
      shouBtn: [],
      itemStatus: ''
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
        const pull = this.$dataAll.config.mapTab[1].children[0].children
        for (let i = 0; i < pull.length; i++) {
          pull[i].active = false
        }
        // //  console.log(pull, 'pulll')
      }
    }
  },
  methods: {
    showBoxCli (item) {
      //  console.log(item, 'iii')
      item.active = false
      this.showBox = false
      this.send()
    },
    init () {
      this.single = this.data[this.activeIndex].single
      this.send()
    },
    tabClick (item, index) {
      // 关闭营业执照
      Bus.$emit('closeMainBox', false)
      if (item.name === '指挥调度') {
        Bus.$emit('zhduTab', true)
      } else if (item.name === '一窗通（一日办）') {
        Bus.$emit('oneDay', true)
      } else {
        this.showBox = false
        this.active = 0
        this.activeIndex = index
        this.init()
        this.removeActive(this.data)
      }
    },
    pullDown (item, all) {
      axios.get('/monitor/main/getSubClassByMain?mainClass=' + item.type).then(res => {
        // this.$dataAll.config.mapTab[1].children[0].children[0].children = []
        const pull = this.$dataAll.config.mapTab[1].children[0].children
        const data = res.data.data
        for (let i = 0; i < pull.length; i++) {
          if (pull[i].type === item.type) {
            this.$dataAll.config.mapTab[1].children[0].children[i].children = []
            if (item.type === 'A') {
              for (let a = 0; a < data.length; a++) {
                this.$dataAll.config.mapTab[1].children[0].children[i].children.push({
                  name: data[a].subClassName,
                  active: false,
                  type: data[a].subClass,
                  mainClass: data[a].mainClass,
                  icon: require('../../assets/images/mapTabs/p1/t1/1.png')
                })
              }
            } else if (item.type === 'C') {
              for (let a = 0; a < data.length; a++) {
                this.$dataAll.config.mapTab[1].children[0].children[i].children.push({
                  name: data[a].subClassName,
                  active: false,
                  type: data[a].subClass,
                  mainClass: data[a].mainClass,
                  icon: require('../../assets/images/mapTabs/p1/t1/5.png')
                })
              }
            } else if (item.type === 'B') {
              for (let a = 0; a < data.length; a++) {
                this.$dataAll.config.mapTab[1].children[0].children[i].children.push({
                  name: data[a].subClassName,
                  active: false,
                  type: data[a].subClass,
                  mainClass: data[a].mainClass,
                  icon: require('../../assets/images/mapTabs/p1/t1/2.png')
                })
              }
            } else if (item.type === 'D') {
              for (let a = 0; a < data.length; a++) {
                this.$dataAll.config.mapTab[1].children[0].children[i].children.push({
                  name: data[a].subClassName,
                  active: false,
                  type: data[a].subClass,
                  mainClass: data[a].mainClass,
                  icon: require('../../assets/images/mapTabs/p1/t1/3.png')
                })
              }
            }
          }
        }
        // //  console.log(res.data.data, this.$dataAll.config.mapTab[1].children[0].children, '下拉数据')
      })
    },
    itemClick (item, index, array) {
       console.log('itemClick', item)
      // 关闭营业执照
      Bus.$emit('closeMainBox', false)
      this.shouBtn = item
      if (this.single) {
        for (let i = 0; i < array.length; i++) {
          if (i !== index) {
            array[i].active = false
          }
        }
      }
      // //  console.log(item, array, '点击')
      if (this.$route.name === '主体服务') {
        if (item.name === '个体工商户') {
          item.active = !item.active
          this.send()
        } else if (!item.children) {
          item.active = true
          this.send()
        } else {
          item.active = true
        }
      } else {
        item.active = !item.active
      }
      if (item.name === '个体工商户' || !item.children) {
        // ????这里send干啥，上面不是send了吗？
        // this.send()
      } else {
        this.pullDown(item, array)
        this.showBox = true
      }
      if (this.data[this.activeIndex].name === '特种设备监管') {
        // 特种设备监管切换开关
        if (item.active) {
          this.$store.state.facilityTab = item
        } else {
          this.$store.state.facilityTab = {
            name: '特种设备',
            type: ''
          }
        }
      }
      if (this.$route.name === '远程监控' || this.$route.name === '稽查办案'|| this.$route.name === '综合监管') {
        this.send()
      }
    },
    // tab切换
    pngClick (item, index, array) {
      // 关闭营业执照
      Bus.$emit('closeMainBox', false)
      //  console.log(item, this.shouBtn, '点击图标')
      if (item === this.shouBtn) {
        this.shouBtn = {
          name: '市场主体',
          type: 0
        }
      } else {
        //  console.log('不一样')
        this.shouBtn = item
      }
      for (let i = 0; i < array.length; i++) {
        if (i === index) {
          item.active = !item.active
          this.selectArray.push(item)
        } else {
          array[i].active = false
        }
      }
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
      //  console.log(this.data, this.activeIndex, 'aaaaaaaaaaaaaaaaaaa')
      this.$emit('getSelect', {
        tab: this.data[this.activeIndex],
        items: this.findActive()
      })
    },
    findActive () {
      //  console.log(this.shouBtn, this.data, 'find')
      this.selectArray = []
      // if (!this.shouBtn.icon) {
      //   this.selectArray.push(this.shouBtn)
      // }
      // }else{
      for (let i = 0; i < this.data[this.activeIndex].children.length; i++) {
        const item = this.data[this.activeIndex].children[i]
        if (item.active) {
          //  console.log(item, 'lllllllllllllllk')
          if (this.shouBtn.name === '国有、集体及其控股企业' || this.shouBtn.name === '外资企业' || this.shouBtn.name === '私营企业' || this.shouBtn.name === '农民合作社') {
            this.selectArray = []
            const listName = item.children
            //  console.log(listName, 'nnnn')
            for (let i = 0; i < listName.length; i++) {
              if (listName[i].active) {
                // //  console.log(listName[i], '1')
                this.selectArray.push(listName[i])
                // //  console.log(this.selectArray, '2')
                return this.selectArray
              } else {
                this.selectArray.push(item)
                return this.selectArray
              }
            }
          } else {
            this.selectArray.push(this.shouBtn)
          }
        }
        // if (item.children) {
        //   //  console.log(item, 'iii')
        //   item.children.forEach((v) => {
        //     //  console.log(v, 'vvv')
        //     if (v.name === this.shouBtn.name) {
        //         //  console.log(listName[i], '1')
        //       this.selectArray.push(v)
        //     }
        //     // //  console.log(this.selectArray, v, 'sssssss')
        //   })
        // } else {
        //   if (item.active) {
        //     this.selectArray.push(item)
        //   }
        //     // //  console.log(this.selectArray, '11aaaaaa')
        // }
      }
      // }
      //  console.log(this.selectArray, 'sssaa')
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

    .Tab_background {
        background: #41C8DE;
    }

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

    .padding {
        padding: 20px 60px;
    }

    .imgIcon {
        height: 80px;
        align-self: center;
        width: 35%;
        cursor: pointer;
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

    .btn2 {
        align-self: flex-start;
        width: calc(~"100% / 6");
        /*flex-grow: 1;*/
        /*flex-basis: calc(~"100% / 6");*/
        overflow: hidden;
        font-size: 26px;
        position: relative;
        width: 100%;
        height: 60px;
        margin: 10px 0;
        display: flex;
        // flex-direction: column;
        // justify-content: center;
        text-align: center;

        .icon_box {
            min-width: 50%;
            height: 60px;
            line-height: 60px;
            border-radius: 20px;
            border: 1px solid #41C8DE;
            cursor: pointer;
            padding: 0 50px;
        }
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

        > div {
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

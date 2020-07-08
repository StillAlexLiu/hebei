<template>
    <div class="searchBox">
        <label v-if="$route.name === '主体服务'">
            <input v-model="text2">
        </label>
        <div class="pullBox">
          <div class="pullBox_li" v-for="(item, index) in rollList" :key="index" @click="clickItem(item)">
            {{index + 1}}、{{item.name}}
          </div>
        </div>
        <i  v-if="$route.name === '主体服务'" @click="inputCli"/>
        <div class="num">总数：{{number}}</div>
        <!-- <div class="num2">地图缩放等级: {{zoom}}</div> -->
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'searchBox',
  props: {
    text: {
      type: String,
      default: ''
    },
    number: {
      type: Number,
      default: 0
    },
    zoom: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      text2: '',
      rollList: [
        {
          name: '测试1'
        }, {
          name: '测试2'
        }, {
          name: '测试3'
        }, {
          name: '测试4'
        }
      ]
    }
  },
  methods: {
    inputCli () {
      if (this.text2) {
        this.$emit('inputData', this.text2)
      }
    },
    clickItem (data) {
      console.log(data)
    }
  }
}
</script>

<style scoped lang="less">
.searchBox {
    position: absolute;
    top: 80px;
    left: 40px;
    height: 106px;
    font-size: 30px;
    width: 500px;
    .pullBox{
      width: 450px;
      height: 500px;
      background: rgba(1, 1, 1, 0.5);
      position: absolute;
      top: 60px;
      .pullBox_li{
        width: 100%;
        height: 70px;
        line-height: 60px;
        cursor: pointer;
        padding: 5px 10px;
      }
    }
    input {
      width: 450px;
      height: 60px;
      color: white;
      font-size: 30px;
      background: rgb(29, 96, 122);
      border: 1px solid rgb(29, 96, 122);
    }
    .num {
      width: 450px;
      height: 36px;
      // display: block;
      text-align: left;
    }
    .num2 {
      width: 450px;
      height: 36px;
      float: left;
      // text-align: left;
    }
    // input {
    //     width: 300px;
    //     height: 100%;
    //     background: rgba(30, 141, 176, .59);
    //     border: 1px solid #22aec5;
    //     font-size: 16px;
    //     color: #fff;
    //     padding-left: 12px;
    //     padding-right: 40px;
    //     border-radius: 0;
    //     line-height: 36px;
    // }

    > div {
        // width: 100px;
        // position: absolute;
        // right: 0;
        // top: 0;
        // height: 100%;
        // font-size: 20px;
        // line-height: 36px;
        // text-indent: 10px;
    }

    i {
        height: 25px;
        width: 25px;
        display: block;
        position: absolute;
        background: url("./img/search.png");
        background-size: 100% 100%;
        right: 80px;
        top: 17px;
        cursor: pointer;
    }
}
</style>

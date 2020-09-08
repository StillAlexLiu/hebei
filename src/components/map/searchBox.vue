<template>
    <div class="searchBox">
        <label v-if="$route.name === '主体服务' || $route.name === '远程监控'">
            <input v-model="text2" @keyup.enter="inputCli">
            <p class="txP" v-if="rollList.length >= 50">{{ msg }}</p>
            <span class="closeInput" @click="close">×</span>
        </label>
        <div class="pullBox" v-if="rollList">
          <div class="pullBox_li" v-if="$route.name === '主体服务'" v-for="(item, index) in rollList" :title="item.name" :key="index" @click="clickItem(item)">
            {{index + 1}}、{{item}}
          </div>
          <div class="pullBox_li" v-if="$route.name === '远程监控'" v-for="(item, index) in rollList" :title="item.name" :key="index" @click="clickItem(item)">
            {{index + 1}}、{{item.name}}
          </div>
        </div>
        <i  v-if="$route.name === '主体服务' || $route.name === '远程监控'" @click="inputCli"/>
        <!-- <div class="num">总数：{{number}}</div> -->
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
      ],
      msg: ''
    }
  },
  watch: {
    $route: {
      deep: true,
      immediate: false,
      handler: function () {
        this.rollList = []
        this.text2 = ''
      }
    }
  },
  methods: {
    close () {
      this.rollList = []
      this.text2 = ''
    },
    main () {
      axios.get('/monitor/baseinfoDm/getEnterpriseByName?name=' + this.text2).then(res => {
        console.log(res.data, '查询')
        this.msg = res.data.msg
        this.rollList = res.data.data
      })
    },
    serchVideo () {
      axios.get('/monitor/main/cmeras/getAllEntlist?name=' + this.text2).then(res => {
        const data = res.data.data
        console.log(data)
        this.rollList = []
        // if (data.)
        for (let i = 0; i < data.length; i++) {
          if (data[i].latitude) {
            this.rollList.push({
              address: data[i].address,
              name: data[i].name,
              latitude: data[i].latitude,
              longitude: data[i].longitude,
              indexCode: data[i].indexCode,
              level: 5,
              coordinate: [data[i].longitude, data[i].latitude],
              sousuo: true,
              icon: require('../../assets/images/mapTabs/p1/t1/撒点.png'),
              firmType: data[i].firmType,
              corpId: data[i].corpId
            })
          }
        }
      })
    },
    inputCli () {
      if (this.text2) {
        if (this.$route.name === '主体服务') {
          this.main()
        } else if (this.$route.name === '远程监控') {
          this.serchVideo()
        }
      }
    },
    clickItem (data) {
      console.log(data)
      if (this.$route.name === '主体服务') {
        this.text2 = data
      } else if (this.$route.name === '远程监控') {
        this.text2 = data.name
      }
      var points = data
      // console.log(points, 'pp')
      this.$emit('inputData', points)
      this.rollList = []
      // this.text2 = ''
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
    width: 1560px;
    .closeInput {
      position: absolute;
      font-size: 43px;
      color: #52bcda;
        right: 840px;
        top: 0px;
      cursor: pointer;
    }
    .txP {
      text-align: center;
      float: left;
      margin: 0;
      line-height: 70px;
      margin-left: 50px;
    }
    .pullBox{
      width: 780px;
      max-height: 500px;
      overflow-y: auto;
      background: rgba(1, 1, 1, 0.5);
      position: absolute;
      top: 67px;
      .pullBox_li{
        width: 100%;
        height: 70px;
        line-height: 60px;
        cursor: pointer;
        padding: 5px 10px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
      }
    }
    input {
      width: 780px;
      height: 70px;
      color: white;
      font-size: 30px;
      background: rgb(29, 96, 122);
      border: 1px solid rgb(29, 96, 122);
      padding-left: 30px;
      float: left;
    }
    .num {
      width: 450px;
      height: 36px;
      // display: block;
      text-align: left;
      position: absolute;
    bottom: -815px;
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
        cursor: pointer;
      right: 800px;
      top: 22px;
    }
}
</style>

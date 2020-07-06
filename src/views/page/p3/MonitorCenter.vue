<template>
    <div class='MonitorCenter full'>
        <div class='w-1-3 h-1-2 video-container' v-for='(item,index) in videoNames' :key='index'>
            <container-calc type='tb' :number='90' class='full-height item border'>
                <div slot='fix' class='top full-height'>
                    <div class='name h-5-9'>{{item.address}}</div>
                    <div class='address h-4-9'>{{item.name}}</div>
                </div>
                <div v-if="item.state === 50" slot='calc'  class='full-height video' :style="{'background-image': 'url(' + imgage + ')' ,'background-size':' 100% 100%', 'background-repeat':' no-repeat'}">
                  <!-- <img src="./components/img/不在线图@2x_wps图片.png" class="full-height full-width" alt=""> -->
                  <div class="full-width full-height" :style="{'text-align':'center','padding-top':'30%','font-size':'35px'}">
                    该监控视频暂不在线...
                  </div>
                </div>
                <player slot='calc' class='full-height video' v-else :index='index'
                        :src='item.url'/>
            </container-calc>
        </div>
    </div>
</template>

<script>
import HuaYeVideo from './components/js/HuaYeVideo'
import Bus from '@/assets/bus.js'
import axios from 'axios'
import Vue from 'vue'

export default {
  name: 'MonitorCenter',
  data () {
    return {
      imgage: require('./components/img/不在线图@2x_wps图片.png'),
      videoUrl: [],
      //   videoNames: []
      videoNames: [
        {
          // name: 'Camera',
          // address: '唐山玉田螺山站',
          // url: 'http://218.11.10.172:83/openUrl/3VhG04E/live.m3u8'
        }, {
          // name: 'Camera',
          // address: '唐山玉田螺山站',
          // url: 'http://218.11.10.172:83/openUrl/3W2NpFm/live.m3u8'
        }, {
          // name: '玉田煤质检查站',
          // address: '唐山玉田螺山站',
          // url: 'http://218.11.10.172:83/openUrl/3WBZFNm/live.m3u8'
        }, {
          // name: '玉田煤质检查站办公',
          // address: '唐山玉田螺山站',
          // url: 'http://218.11.10.172:83/openUrl/3X9LWh2/live.m3u8'
        }, {
          // name: '厨房',
          // address: '河北省唐山市滦州市龙山帝景御园门市B区',
          // url: 'http://211.90.38.80:7020/hls/1275/1/1/1.m3u8'
        }, {
          // name: 'SD-IPC5380-IR-F20161101AACH664766081',
          // address: '河北省唐山市路北区果园乡凤凰世嘉(光明北路)',
          // url: 'http://211.90.38.80:7020/hls/907/1/1/1.m3u8'
        }
      ],
      videoIndex: 0
    }
  },
  created () {
    var that = this
    Bus.$on('message', function (data2) {
      console.log(data2, '远程')
      that.setVideo(data2)
    })
  },
  mounted () {
    const data1 = {
      address: '张家口阳原王府庄站',
      icon: '/img/5.8914f095.png',
      regionsIndexCode: 'd9e6d7cc-3b76-4a61-8338-0b9a05bc6b29'
    }
    this.setVideo(data1)
    const data2 = {
      address: '河北省张家口市涿鹿县涿鹿镇合符小区二期第17幢1号商铺',
      icon: '/img/youer@2x.c70e028f.png',
      name: '涿鹿县今跃小饭桌',
      pwd: 'hyjk123',
      userName: 'zlxjyxfz'
    }
    this.setVideo(data2)
    const data3 = {
      address: '承德围场御道口站',
      icon: '/img/5.8914f095.png',
      regionsIndexCode: 'fe0ccc86-fa00-48c0-aee1-978196a665eb'
    }
    this.setVideo(data3)
  },
  methods: {
    setVideo (data2) {
      var that = this
      console.log(data2, 'rrww')
      if (data2.regionsIndexCode) {
        // 海康
        axios.get('/monitor/main/hik/getHikCameraUrls?regionsIndexCode=' + data2.regionsIndexCode).then(res1 => {
        // axios.get('http://192.168.1.103/blade-camera/camera/hik/getHikCameraUrls?regionsIndexCode=' + data2.regionsIndexCode).then(res1 => {
          const data = res1.data.data
          console.log(data, 'hkkk')
          for (let i = 0; i < data.length; i++) {
            if (that.videoIndex >= 6) {
              that.videoIndex = 0
            }
            Vue.set(that.videoNames, that.videoIndex, {
              name: data[i].cameraName,
              address: data2.address,
              url: data[i].cameraUrl,
              state: 0
            })
            that.videoIndex++
          }
        })
      } else {
        // 华烨
        console.log(data2, '华烨')
        HuaYeVideo.getList(data2.userName, data2.pwd).then(res2 => {
          console.log(res2.data, '华烨22222')
          // if (res2.data.result === 0) {
          const data = res2.data.devlist
          // console.log(data, 'ff')
          for (let i = 0; i < data.length; i++) {
            HuaYeVideo.checkRequest(data2.userName, data2.pwd, data[i].sn, data[i].hlsurl).then(flow => {
              console.log(flow, '华烨3333')
              // for (let a = 0; a < 6; a++) {
              if (that.videoIndex >= 6) {
                that.videoIndex = 0
              }
              Vue.set(that.videoNames, that.videoIndex, {
                // name: data[i].name,
                name: data[i].name,
                address: data2.name,
                // url: 'http://218.11.10.172:83/openUrl/NVAjJcs/live.m3u8'
                url: flow.data.hlsurl,
                state: flow.data.result
              })
              // console.log(that.videoIndex, 'ffxxxxx')
              that.videoIndex++
            })
          }
          // }
        })
      }
      console.log(that.videoNames, '6个视频')
    }
  }
}
</script>

<style scoped lang='less'>
.MonitorCenter {
    padding-top: 60px;

    .video-container {
        padding: 10px;

        > .item {
            padding: 3px;

            .top {
                background-color: #121923;
                text-indent: 30px;

                .name {
                    font-size: 30px;
                    line-height: 50px;
                }

                .address {
                    line-height: 40px;
                    font-size: 20px;
                }
            }

        }
    }
}
</style>

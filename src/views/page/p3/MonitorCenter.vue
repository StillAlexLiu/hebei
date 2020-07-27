<template>
    <div class='MonitorCenter full'>
        <div class='w-1-3 h-1-2 video-container' v-for='(item,index) in videoNames' :key='index'>
            <container-calc type='tb' :number='90' class='full-height item border'>
                <div slot='fix' class='top full-height'>
                    <div class='name h-5-9'>{{item.address}}</div>
                    <div class='address h-4-9'>{{item.name}}</div>
                </div>
                <div v-if="item.state !== 0" slot='calc'  class='full-height video' :style="{'background-image': 'url(' + imgage + ')' ,'background-size':' 100% 100%', 'background-repeat':' no-repeat'}">
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
// import HuaYeVideo from './components/js/HuaYeVideo'
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
    // Bus.$on('message', function (data2) {
    //   //  console.log(data2, '远程')
    //   that.setVideo(data2)
    // })
    Bus.$on('message', target => {
      //  console.log(target, '点击视频')
      that.setVideo(target)
    })
  },
  mounted () {
    const data3 = {
      address: '承德市围场县御道口镇',
      firmType: '2',
      corpId: 'fe0ccc86-fa00-48c0-aee1-978196a665eb',
      name: '承德围场御道口站'
    }
    this.setVideo(data3)
  },
  methods: {
    setVideo (data2) {
      axios.get('/monitor/main/cmeras/gethuyCmeras?corpId=' + data2.corpId + '&firmType=' + data2.firmType).then(res => {
        // const data = res.data.data
        console.log(res.data.data)
        if (Number(data2.firmType) === 1) {
          const data = res.data.data
          for (let i = 0; i < data.length; i++) {
            if (this.videoIndex >= 6) {
              this.videoIndex = 0
            }
            Vue.set(this.videoNames, this.videoIndex, {
              name: data[i].name,
              address: data2.corpId,
              url: data[i].hlsurl,
              state: Number(data[i].result)
            })
            this.videoIndex++
            console.log(data[i].hlsurl)
          }
        } else if (Number(data2.firmType) === 2) {
          const data = res.data.data[0]
          for (let i = 0; i < data.length; i++) {
            if (this.videoIndex >= 6) {
              this.videoIndex = 0
            }
            Vue.set(this.videoNames, this.videoIndex, {
              name: data[i].cameraName,
              address: data2.name,
              url: data[i].cameraUrl,
              state: 0
            })
            this.videoIndex++
            console.log(data[i].hlsUrl)
          }
        } else if (Number(data2.firmType) === 3) {
          const data = res.data.data[0]
          for (let i = 0; i < data.length; i++) {
            if (this.videoIndex >= 6) {
              this.videoIndex = 0
            }
            Vue.set(this.videoNames, this.videoIndex, {
              name: data[i].cameraName,
              address: data2.name,
              url: data[i].hlsUrl,
              state: Number(data[i].state)
            })
            this.videoIndex++
            console.log(data[i].hlsUrl)
          }
        }
      })
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

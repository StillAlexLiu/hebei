<template>
    <div class="MonitorCenter full">
        <div class="w-1-3 h-1-2 video-container" v-for="(item,index) in videoNames" :key="index">
            <container-calc type="tb" :number="90" class="full-height item border">
                <div slot="fix" class="top full-height">
                    <div class="name h-5-9">{{item.name}}</div>
                    <div class="address h-4-9">{{item.address}}</div>
                </div>
                <player slot="calc" class="full-height video" :index="index+99"
                        :src="videoUrl[index%videoUrl.length].url"/>
            </container-calc>
        </div>
    </div>
</template>

<script>
import HuaYeVideo from './components/js/HuaYeVideo'
import Bus from '@/assets/bus.js'

export default {
  name: 'MonitorCenter',
  data () {
    return {
      videoUrl: [],
      //   videoNames: []
      videoNames: [
        {
          name: '厨房',
          address: '涿鹿县诚信小饭桌'
        }, {
          name: '厨房',
          address: '涿鹿县诚信小饭桌'
        }, {
          name: '厨房',
          address: '涿鹿县诚信小饭桌'
        }, {
          name: '厨房',
          address: '涿鹿县诚信小饭桌'
        }, {
          name: '厨房',
          address: '涿鹿县诚信小饭桌'
        }, {
          name: '厨房',
          address: '涿鹿县诚信小饭桌'
        }
      ],
      videoIndex: 0
    }
  },
  created () {
    Bus.$on('message', function (res) {
      console.log(res, this.videoIndex, 'rrr')
      this.videoIndex + 1
      if(this.videoIndex > 6) {
        this.videoIndex = 0
      }
      console.log(this.videoIndex,'ll')
    })
  },
  mounted () {
    HuaYeVideo.getList('zlxgyxfz', 'hyjk123').then(res => {
      const data = res.data.devlist
      for ( let i = 0 ; i < data.length; i++ ) {
          HuaYeVideo.checkRequest('zlxgyxfz', 'hyjk123', data[i].sn, data[i].hlsurl).then(flow => {
                // this.videoNames.push({
                //     name: data[i].name,
                //     address: '涿鹿县诚信小饭桌'
                // })
              this.videoUrl.push({
                name: data[i].name,
                url: flow.data.hlsurl
              })
          })
       }
    })
  }
}
</script>

<style scoped lang="less">
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

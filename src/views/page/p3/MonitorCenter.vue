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
export default {
  name: 'MonitorCenter',
  data () {
    return {
      videoUrl: this.$dataAll.videoUrl,
      videoNames: [{
        name: '康得思酒店',
        address: '河北省石家庄新华区'
      }, {
        name: '康得思酒店',
        address: '河北省石家庄新华区'
      }, {
        name: '康得思酒店',
        address: '河北省石家庄新华区'
      }, {
        name: '康得思酒店',
        address: '河北省石家庄新华区'
      }, {
        name: '康得思酒店',
        address: '河北省石家庄新华区'
      }, {
        name: '康得思酒店',
        address: '河北省石家庄新华区'
      }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.MonitorCenter {
    padding-top: 60px;
    .video-container {
        padding: 20px;

        > .item {
            padding: 3px;

            .top {
                background-color: #132831;
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

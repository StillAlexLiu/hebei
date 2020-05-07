<template>
    <div class="echartsTwoPie">
        <div class="twoHeader h-3-10">
            <div class="w-1-2 full-height img">
                <img :src="data.url" alt="">
            </div>
            <div class="w-1-2 full-height text ">
                <div class="span_name h-1-3">{{data.name}}</div>
                <div class="span_num h-2-3 number-font">{{data.num}}</div>
            </div>
        </div>
        <div class="w-1-2 heightH h-7-10">
            <slot name="slot1"></slot>
        </div>
        <div class="w-1-2 heightH h-7-10 " :class="border?'border-right':''">
            <slot name="slot2"></slot>
        </div>
    </div>
</template>
<script>
export default {
  name: 'echarts-twopie',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less">
.echartsTwoPie {
    width: 100%;
    height: 100%;
    padding-top: 30px;

    .twoHeader {
        text-align: center;

        .img {
            text-align: right;
            overflow: hidden;
        }

        .text {
            text-align: left;
            padding: 0 26px;
        }

        img {
            width: 81px;
            height: 81px;
            vertical-align: middle;
        }

        .span_name {
            font-size: 24px;
            color: #fff;
        }

        .span_num {
            color: #79DFEF;
            font-size: 48px;
        }
    }

    .border-right {
        background-image: linear-gradient(0, #1E8DB0, #1E8DB0);
        background-size: 2px 40%;
        background-position: right center;
        background-repeat: no-repeat;
    }
}
</style>

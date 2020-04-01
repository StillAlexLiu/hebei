<template>
    <div class="selectInfo">
        <div class="full-height w-4-10 left">
            <div class="title">{{data.name}}</div>
            <div class="row">
                <div class="name w-1-3">地址</div>
                <div class="text w-2-3">{{data.address}}</div>
            </div>
            <div class="row">
                <div class="name w-1-3">所属网格</div>
                <div class="text w-2-3">{{data.grid}}</div>
            </div>
            <div class="row">
                <div class="name w-1-3">注册时间</div>
                <div class="text w-2-3">{{data.registerTime}}</div>
            </div>
            <div class="row">
                <div class="name w-1-3">网格员</div>
                <div class="text w-2-3">{{data.grider}}</div>
            </div>
        </div>
        <div class="full-height w-3-10 center">
            <div class="img">
                暂无图片
            </div>
        </div>
        <div class="full-height w-3-10 right">
            <div class="title">{{data.text}}</div>
            <div class="warning">
                <p class="c"></p>
                {{data.type}}
            </div>
            <div class="row">
                <div class="name w-1-2">法定代表人</div>
                <div class="text w-1-2">{{data.faren}}</div>
            </div>
            <div class="row">
                <div class="name w-1-2">注册资本</div>
                <div class="text w-1-2">{{data.ziben}}</div>
            </div>
            <div class="row">
                <div class="name w-1-2">管辖单位</div>
                <div class="text w-1-2">{{data.guanxia}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'selectInfo',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="less">
.selectInfo {
    .title {
        background-color: rgba(34, 174, 197, .25);
        text-align: center;
        font-weight: bold;
        font-size: 24px;
        height: 50px;
        line-height: 50px;
    }

    .row {
        font-size: 16px;
        height: 40px;
        line-height: 40px;

        > div {
            height: 100%;
        }

        .name {
            text-align: right;
        }

        .text {
            text-indent: 10px;
        }
    }

    .right {
        .title {
            color: #fe6941;
        }

        .warning {
            height: 60px;
            line-height: 60px;
            font-weight: bold;
            font-size: 20px;
            > .c {
                height: 20px;
                width: 20px;
                background-color: #4a90e2;
                border-radius: 10px;
                float: left;
                margin: 20px;
            }

            border-bottom: 1px solid #22aec5;;
        }
    }

    .center {
        padding: 0 10px;
        display: table;

        > div {
            display: table-cell;
            vertical-align: middle;
            text-align: center;
            font-size: 36px;
            border: 1px solid rgb(121, 223, 239);
            color: rgb(121, 223, 239);
        }
    }
}
</style>

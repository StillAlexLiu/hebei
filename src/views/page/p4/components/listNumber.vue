<template>
    <div class="listNumber">
        <div class="list_list" v-for="(item, index) in data" :key="index">
            <p class="list_name">{{item.title}}</p>
            <div class="list_btn">
                <div class="btn_left">
                    <p class="left_sp1">{{item.cl}}</p>
                    <p>已处理</p>
                </div>
                <div class="btn_right">
                    <p class="left_sp2">{{item.wcl}}</p>
                    <p>待处理</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'mainInfo',
  props: ['data'],
  data () {
    return {

    }
  }
}
</script>

<style lang="less">
    .listNumber{
        width: 100%;
        height: 100%;
        p{
            margin: 2rem 0;
            text-align: center;
        }
        .list_list{
            width: 14.6%;
            height: 20rem;
            margin-right: 2%;
            background-image:url('./img/png1.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            float: left;
            margin-top: 4rem;
            .list_name{
                font-size: 3.5rem;
                margin: 0;
                line-height: 10rem;
            }
        }
        .list_btn{
            width: 100%;
            height: 10rem;
        }
        .left_sp1{
            color: rgb(79, 136, 62);
            font-size: 2rem!important;
        }
        .left_sp2{
            color: rgb(138, 86, 59);
            font-size: 2rem!important;
        }
        .btn_left{
            width: 50%;
            height: 9.5rem;
            float: left;
            border-right: 1px solid rgb(12, 56, 74);
            p{
                font-size: 3rem!important;
                margin: 0;
                line-height: 4rem;
            }
        }
        .btn_right{
            width: 50%;
            height: 10rem;
            float: left;
            p{
                font-size: 3rem!important;
                margin: 0;
                line-height: 4rem;
            }
        }

    }
</style>

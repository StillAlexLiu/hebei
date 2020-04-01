<template>
    <div class="rightList">
        <p class="listName">本月隐患整改情况</p>
        <div class="list1">
            <div class="list1_1" v-for="(item, index) in data.lest1" :key="index" :style="{'background-image': 'url(' + item.img + ')'}">
                <p class="name">{{item.name}}</p>
                <p class="num">{{item.num}}</p>
            </div>
        </div>
        <p class="listName">本月特种设备事故报告</p>
        <div class="list2">
            <div class="list2_1" v-for="(item, index) in data.lest2" :key="index" :style="{'background-image': 'url(' + item.img + ')'}">
                <p class="name">{{item.name}}</p>
                <p class="num">{{item.num}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'rightList',
    props: ['data'],
    data() {
      return {
            
      }
    }
}
</script>

<style lang="less">
    .rightList{
        width: 100%;
        height: 100%;
        p{
            margin: 0;
        }
        .listName{
          font-size: 2rem;
          margin: 0 0 1rem 0;
          font-weight: bold;
        }
        .list1 {
            width: 100%;
            height: 35%;
            padding: 1rem;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            .list1_1{
                width: 40%;
                margin-right: 5%;
                height: 100%; 
                float: left;
                background-size: 100% 100%;
                background-repeat: no-repeat;
                .name{ 
                  margin-top: 5rem;
                  font-size: 2rem;
                  text-align: center;
                  font-weight: bold;
                }
                .num{ 
                  margin-top: 0rem;
                  font-size: 2rem;
                  text-align: center;
                  font-weight: bold;
                }
            }
        }
        .list2 {
            padding: 1rem;
            width: 100%;
            height: 35%;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            .list2_1{
                width: 28%;
                margin-right: 5%;
                height: 100%; 
                float: left;
                background-size: 100% 100%;
                background-repeat: no-repeat;
                .name{ 
                  margin-top: 3rem;
                  font-size: 2rem;
                  text-align: center;
                  font-weight: bold;
                }
                .num{ 
                  margin-top: 0.5rem;
                  font-size: 2rem;
                  text-align: center;
                  font-weight: bold;
                }
            }
        }
    }
</style>
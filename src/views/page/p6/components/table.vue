<template>
    <div id="table">
        <table border="0" cellspacing="0" cellpadding="0">
            <tr class="table_firstTR">
                <th v-for="(item, index) in header" :key="index">{{ item }}</th>
            </tr>
            <tr v-for="(item,index) in data" :key="index" class="row" @click="warningBox(item)">
                <td>
                    <div class="color-can">
                        <div class="color" :style="{'background': 'red'}" v-if="item.warningName === '红色预警'"></div>
                        <div class="color" :style="{'background': 'yellow'}" v-if="item.warningName === '黄色预警'"></div>
                        <div class="color" :style="{'background': 'orange'}" v-if="item.warningName === '橙色预警'"></div>
                        <div class="value" >{{item.warningName}}</div>
                        <!-- <div class="value" v-if="item.warningLevel === '1'">红色预警</div>
                        <div class="value" v-if="item.warningLevel === '2'">橙色预警</div>
                        <div class="value" v-if="item.warningLevel === '3'">黄色预警</div> -->
                    </div>
                </td>
                <td>{{item.regtime}}</td>
                <td>{{item.surplusTime}}</td>
                <td>{{item.unitname}}</td>
                <td>{{item.casedep}}</td>
                <td>{{item.clueType}}</td>
                <td>{{item.processingCaseState}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import Bus from '@/assets/bus.js'
export default {
  components: {},
  props: ['data', 'header'],
  data () {
    return {}
  },
  methods: {
    warningBox (data) {
      console.log(data)
      Bus.$emit('waringData', data)
    }
  }
}
</script>
<style scoped lang='less'>
#table, table {
    width: 100%;
    max-height: 475px;
    font-size: 2rem;
    text-align: center;
    overflow-y: auto;
    .table_firstTR {
        height: 50px;
        font-size: 22px;
        background: linear-gradient(180deg, rgba(44, 132, 191, 0.87) 0%, rgba(65, 147, 222, 1) 100%);
        border: 1px solid rgba(61, 148, 213, 1);
    }

    .row {
        font-size: 24px;
        cursor: pointer;
        td {
            border-bottom: 1px solid #3D94D5;
            width: 10px;
            height: 70px;

            .color-can {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                .color {
                    // background-color: #FFE43F;
                    width: 23px;
                    height: 23px;
                    border-radius: 50%;
                }

                .value {
                    text-indent: 10px;
                }
            }

        }
    }
}
</style>

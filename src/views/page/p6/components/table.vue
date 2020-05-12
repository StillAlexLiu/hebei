<template>
    <div id="table">
        <table border="0" cellspacing="0" cellpadding="0">
            <tr class="table_firstTR">
                <th>预警级别</th>
                <th>收件时间</th>
                <th>剩余时间</th>
                <th>当事人名称</th>
                <th>经办机构</th>
                <th>线索类型</th>
                <th>当前状态</th>
            </tr>
            <tr v-for="(item,index) in data" :key="index" class="row">
                <td>
                    <div class="color-can">
                        <div class="color"></div>
                        <div class="value">{{item.level}}</div>
                    </div>
                </td>
                <td>{{item.lnboxTime}}</td>
                <td>{{item.surplusTime}}</td>
                <td>{{item.name}}</td>
                <td>{{item.institution}}</td>
                <td>{{item.type}}</td>
                <td>{{item.state}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  components: {},
  props: ['data'],
  data () {
    return {}
  }
}
</script>
<style scoped lang='less'>
#table, table {
    width: 100%;
    height: 100%;
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

        td {
            border-bottom: 1px solid #3D94D5;

            .color-can {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                .color {
                    background-color: #FFE43F;
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

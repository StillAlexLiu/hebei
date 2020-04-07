<template>
    <div class="table_row">
        <table class='discharge_table'>
            <thead>
                <tr style='background:#12475E;'>
                    <th v-for='(item,index) in tableList' :key='index'>{{item.value}}</th>
                </tr>
                </thead>
                <tbody>
                <tr class='tableTr' v-for='(item,index) in data' :key='index'>
                    <td>{{item.place_name}}</td>
                    <td>{{item.place_property}}</td>
                    <td>{{item.total}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'table',
  props: ['data'],
  components: {

  },
  data () {
    return {
      tableList: [
        {
          value: '抽查事项'
        }, {
          value: '联合部门'
        }, {
          value: '抽查主体'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.table_row{
    width: 100%;
    height: 100%;
    .discharge_table {
      width: 98%;
      background: rgba(30, 141, 176, 0.2);
      margin-top: 1.5rem;
      border: 0.33rem solid #1c92d2;
      box-sizing: border-box;
      overflow: auto;
      position: relative;
      cursor: default;
      tbody {
        display: block;
        height: 30rem;
        overflow-y: auto;
        overflow-x: hidden;
        tr {
          display: table;
          width: 100%;
          table-layout: fixed;
        }
      }
      thead {
        display: table;
        width: 100%;
        table-layout: fixed;
        background: rgb(0,34,46);
      }
      th {
        // width: 2.25rem;
        height: 4.2rem;
        font-size: 2.2rem;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 2rem;
      }
      tr {
        font-size: 2rem;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 3.2rem;
        text-align: center;
        border: 1px solid rgb(10, 14, 65);
        td {
          padding: 0.3rem;
          font-size: 2rem;
          word-break: keep-all;
          white-space: nowrap;
          overflow: hidden;
          border-right: 1px solid rgb(10, 14, 65);
        }
      }
      .tableTr {
        border-bottom: 0.3rem solid rgba(black, 0.7);
      }
    }
}
</style>

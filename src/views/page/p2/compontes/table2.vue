<template>
    <div class="table2 full">
        <table class='discharge_table full'>
            <thead>
            <tr style='background:#12475E;'>
                <th v-for='(item,index) in column' :key='index'>{{item}}</th>
            </tr>
            </thead>
            <tbody>
            <tr class='tableTr' v-for='(item,index) in data' :key='index'>
                <td v-for="(itemTd,indexTd) in item" :key="index+'/'+indexTd">{{ itemTd }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'table2',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    column: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.table2 {
    padding: 60px;

    .discharge_table {
        background: #242942;
        border: 1px solid #1c92d2;
        box-sizing: border-box;
        overflow: auto;
        position: relative;
        cursor: default;

        tbody {
            display: block;
            overflow-y: auto;
            overflow-x: hidden;
            height: calc(100% - 50px);

            tr {
                display: table;
                width: 100%;
                table-layout: fixed;
            }
        }

        thead {
            display: table;
            width: 100%;
            height: 50px;
            table-layout: fixed;
            background: linear-gradient(180deg, rgba(44, 132, 191, 0.87) 0%, rgba(65, 147, 222, 1) 100%);
            border: 1px solid rgba(61, 148, 213, 1);
        }

        th {
            // width: 2.25rem;
            height: 100%;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
        }

        tr {

            font-weight: bold;
            height: 50px;
            color: rgba(255, 255, 255, 1);
            text-align: center;
            /*border: 1px solid rgb(10, 14, 65);*/

            td {
                word-break: keep-all;
                white-space: nowrap;
                overflow: hidden;
            }
        }
    }
}
</style>

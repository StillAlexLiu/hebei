<template>
    <div id="table">
        <table border="0" cellspacing="0" cellpadding="0">
            <tr class="table_firstTR">
                <th>序号</th>
                <th>检查内容</th>
                <th>发现问题次数</th>
            </tr>
            <tr v-for="(item,index) in data" :key="index">
                <td>{{index}}</td>
                <td>{{item.text}}</td>
                <td>{{item.count}}</td>
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

    tr {
        height: 50px;
        line-height: 50px;
    }

    .table_firstTR {
        height: 50px;
        background: #175976;
        border: 1px solid #0E203C;
    }

    td {
        border: 1px solid rgb(28, 131, 165, 0.1)
    }
}

table ::-webkit-scrollbar {
    display: none
}
</style>

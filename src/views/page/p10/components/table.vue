<template>
  <div id="table">
    <table  border="0" cellspacing="0" cellpadding="0">
        <tr class="table_firstTR">
            <th>许可证类型</th>
            <th>预警内容</th>
            <th>企业名称</th>
            <th>剩余时间</th>
        </tr>
        <tr v-for="(item,index) in data" :key="index">
            <td>{{item.type}}</td>
            <td>{{item.con}}</td>
            <td>{{item.name}}</td>
            <td>{{item.time}}</td>
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
#table,table{
    width: 100%;
    height: 100%;
    font-size: 2rem;
    text-align: center;
    overflow-y: auto;
    tr{
        height: 50px;
        line-height: 50px;
    }
    .table_firstTR{
        height: 50px;
        background:#175976;
        border:1px solid #0E203C;
    }
    td{
      border: 1px solid rgb(28, 131, 165, 0.1)
    }
}
table ::-webkit-scrollbar {
    display:none
    }
</style>

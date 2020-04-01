<template>
  <div id="table">
    <table  border="0" cellspacing="0" cellpadding="0">
        <tr class="table_firstTR">
            <th>预警级别</th>
            <th>收件时间</th>
            <th>剩余时间</th>
            <th>当事人名称</th>
            <th>经办机构</th>
            <th>线索类型</th>
            <th>当前状态</th>
        </tr>
        <tr v-for="(item,index) in data" :key="index">
            <td>{{item.level}}</td>
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
#table,table{
    width: 100%;
    height: 100%;
    font-size: 2rem;
    text-align: center;
    overflow-y: auto;
    .table_firstTR{
        height: 50px;
        background:#175976;
        border:1px solid #0E203C;
    }
    td{
      border: 1px solid rgb(28, 131, 165, 0.1)
    }
}
</style>

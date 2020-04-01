<template>
  <div id="table">
    <table  border="0" cellspacing="0" cellpadding="0">
        <tr class="table_firstTR">
            <th>门店数</th>
            <th>品类数</th>
            <th>是按差评类型</th>
            <th>吃出异物</th>
            <th>食品变质</th>
            <th>环境卫生</th>
            <th>疑是事故</th>
            <th>评价内容</th>
        </tr>
        <tr v-for="(item,index) in data" :key="index">
            <td>{{item.level}}</td>
            <td>{{item.lnboxTime}}</td>
            <td>{{item.surplusTime}}</td>
            <td>{{item.name}}</td>
            <td>{{item.institution}}</td>
            <td>{{item.type}}</td>
            <td>{{item.state}}</td>
            <td>{{item.nr}}</td>
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
</style>

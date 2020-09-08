<template>
  <div class="tablePeople">
    <div class="table" v-if="tableIF">
      <!-- <div class="close" @click="closeBtn">×</div> -->
      <div class="header">入网协管员</div>
      <div class="list">
        <div class="w-1-12">序号</div>
        <div :class="item === '网格人员姓名'? 'classW2' : 'classW'" v-for="(item, index) in tableHeader" :key="index">{{ item }}</div>
      </div>
      <div class="content" v-for="(item, index) in data" :key="index" @click="tab(item)" >
        <div class="w-1-12" v-if="data">{{ index + 1 }}</div>
        <div class="classW2" v-if="data">{{ item.uname }}</div>
        <div class="classW" v-if="data">{{ item.wglxName }}</div>
        <div class="classW" v-if="data">{{ item.orgname }}</div>
      </div>
    </div>
   
  </div>
</template>

<script>
import tableList from "./table2";
export default {
  components: {
    tableList,
  },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler: function () {
          this.tableIF = true
      }
    }
  },
  props: ["data"],
  data() {
    return {
      tableIF: true,
      tableHeader: ["网格人员姓名", "网格类型", "组织机构"],
      list: '',
    };
  },
  created() {},
  mounted() {},
  methods: {
    tab(item) {
      this.tableIF = false;
      if (item.isFlag === '1') {
          item.isFlag = '启用'
      } else if (item.isFlag === '0') {
          item.isFlag = '停用'
      }
      // this.list = item
      this.$emit('data', item)
    },
    closeBtn () {
        this.$emit('close', false)
    }
  }
};
</script>

<style scoped lang="less">
.tablePeople {
  width: 100%;
  overflow: auto;
  // background: red;
  margin: 0 auto;
  .close {
    position: absolute;
    right: 40px;
    font-size: 50px;
    cursor: pointer;
    top: -10px;
  }
  .classW2 {
    width: 20%;
    float: left;
  }
  .classW {
    width: 35%;
    float: left;
  }
  .table {
    width: 100%;
    height: 100%;
  }
  .header {
    text-align: center;
    background-image: url("./img/btn／mhzhjg_btn_common_zhutixinxi_cunliang_default_bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-size: 30px;
    line-height: 60px;
  }
  .list {
    text-align: center;
    font-size: 30px;
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    background: rgba(34, 79, 197, 0.3);
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.28);
    opacity: 0.89;
  }
  .content {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 22px;
    background: rgba(34, 79, 197, 0.3);
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.28);
    cursor: pointer;
  }
}
</style>

<template>
  <div class="demo">
    <div class="people">
      <div class="close2" @click="closeBtn">×</div>
      <div class="peopleTitle">入网协查员详细信息</div>
      <div class="w-1-2 peopleOther" v-for="(item, index) in tableData" :key="index">
        <div class="tableLeft w-1-3">{{ item.title }}</div>
        <div class="tableRight w-2-3" v-if="item.keyName === 'uname'">{{ data.uname }}</div>
        <div class="tableRight w-2-3" v-if="item.keyName === 'utel'">{{ data.utel }}</div>
        <div class="tableRight w-2-3" v-if="item.keyName === 'rylxName'">{{ data.rylxName }}</div>
        <div class="tableRight w-2-3" v-if="item.keyName === 'deptname'">{{ data.deptname }}</div>
        <div class="tableRight w-2-3" v-if="item.keyName === 'wglxName'">{{ data.wglxName }}</div>
        <div class="tableRight w-2-3" v-if="item.keyName === 'isFlag'">{{ data.isFlag }}</div>
      </div>
      <div
        class="full-width peopleOther"
        v-for="(item2, index2) in tableData2"
        :key="'aa' + index2"
      >
        <div class="tableLeft w-1-6">{{ item2.title }}</div>
        <div class="tableRight w-5-6" v-if="item2.keyName === 'orgname'">{{ data.orgname }}</div>
        <div class="tableRight w-5-6" v-if="item2.keyName === 'deptname'">{{ data.deptname }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      tableData: [
        {
          title: "网格人员姓名",
          keyName: "uname",
        },
        {
          title: "网格人员手机号",
          keyName: "utel",
        },
        {
          title: "人员类型",
          keyName: "rylxName",
        },
        {
          title: "部门名称",
          keyName: "deptname",
        },
        {
          title: "网格类型",
          keyName: "wglxName",
        },
        {
          title: "是否启用",
          keyName: "isFlag",
        },
      ],
      tableData2: [
        {
          title: "组织机构",
          keyName: "orgname",
        },
        {
          title: "部门名称",
          keyName: "deptname",
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
     closeBtn () {
        this.$emit('close', false)
    }
  },
};
</script>

<style scoped lang="less">
 .people {
    width: 1800px;
    height: 990px;
    background-image: url("./img/编组 23.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding-top: 30px;
    .close2 {
    position: absolute;
    right: 40px;
    font-size: 50px;
    cursor: pointer;
    top: 55px;
  }
    .peopleTitle {
      width: 100%;
      height: 80px;
      line-height: 80px;
      // background: red;
      text-align: center;
      font-size: 40px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #92b9ff;
      line-height: 66px;
      letter-spacing: 3px;
      margin-bottom: 100px;
    }
    .tableLeft {
      height: 80px;
      line-height: 80px;
      color: white;
      font-size: 30px;
      text-align: center;
      background: rgba(16, 88, 148, 0.6);
      margin-bottom: 40px;
    }
    .tableRight {
      height: 80px;
      line-height: 80px;
      font-size: 30px;
      text-align: center;
      background: rgba(16, 88, 148, 0.2);
      margin-bottom: 40px;
    }
    .peopleOther {
      padding: 0 3%;
      float: left;
    }
  }
</style>

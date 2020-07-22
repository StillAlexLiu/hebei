<template>
    <div class='CommonTable full '>
        <div class="body" v-if="!showBorder">
            <div class="header">
                <div class="item" v-if="showOrder">序号</div>
                <div v-for="(item,index) in headers" :key="index" class="item">
                    {{ item }}
                </div>
            </div>
            <div v-for="(item,index) in data" :key="index" class="row table">
                <div class="item" v-if="showOrder">{{ index+1 }}</div>
                <div v-for="(item2,index2) in item" :key="index2" class="item">{{ item2 }}</div>
            </div>
        </div>
        <!-- 加边框 -->
        <div class="body" v-else>
            <div class="header">
                <div class="item2" v-if="showOrder">序号</div>
                <div v-for="(item,index) in headers" :key="index" class="item2">
                    {{ item }}
                </div>
            </div>
            <div v-for="(item,index) in data" :key="index" class="row table">
                <div class="item2" v-if="showOrder">{{ index+1 }}</div>
                <div v-for="(item2,index2) in item" :key="index2" class="item2">{{ item2 }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CommonTable',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    headers: {
      type: Array,
      default: () => {
        return []
      }
    },
    showOrder: {
      type: Boolean,
      default: true
    },
    showBorder: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  watch: {
    // headers (data) {
    //   console.log(data, 'dsdsdsaaa')
    // }
  }
}
</script>

<style scoped lang="less">
.CommonTable {
    overflow-y: auto;
    position: relative;
    padding: 10px;

    .table {
        width: 100%;
    }

    .body {
        width: 100%;
        display: table;
        font-size: 22px;
    }

    .header {
        background: rgba(34, 84, 197, 0.25);
        font-size: 24px;
    }

    .header, .row {
        display: table-row;

        > .item {
            display: table-cell;
            height: 50px;
            vertical-align: middle;
            text-align: center;
        }
        > .item2 {
            display: table-cell;
            height: 50px;
            vertical-align: middle;
            text-align: center;
            border: 1px solid rgba(175, 175, 175, 0.2);
        }
    }
}
</style>

<template>
    <div class="main full-width">
        <container-calc type="tb" :number="48" class="full">
            <div slot="fix">
                <div class="item " :class="key===activeKey?'active':''" v-for="(value,key) in data" :key="key"
                     @click="itemClick(key)">{{key}}
                </div>
            </div>
            <div slot="calc" class="tables">
                <div v-for="(value,key) in data[activeKey]" :key="key">
                    <div class="sub-title"> {{key}}</div>
                    <info-table2 :data="value"/>
                </div>
            </div>
        </container-calc>
    </div>
</template>

<script>
import InfoTable2 from './infoTable2'

export default {
  name: 'tabTable',
  components: { InfoTable2 },
  props: {
    data: {
      type: Object,
      return: () => {
        return {}
      }
    }
  },
  data: () => {
    return {
      activeKey: null
    }
  },
  mounted () {
    for (const key in this.data) {
      if (this.activeKey === '' || this.activeKey === null) {
        this.activeKey = key
      }
    }
  },
  methods: {
    itemClick (index) {
      this.activeKey = index
    }
  }

}
</script>

<style scoped lang="less">
.main {
    background: #02203A;
}

.active {
    background-color: #299ACA
}

.tab {
    overflow-x: hidden;
    overflow-y: hidden;
    height: 4rem;
    white-space: nowrap; /* ul中的内容不换行 */
}

.tables {
    overflow-y: auto;
    height: 100%;
    padding: 10px;

    > div {
        display: block;
    }
}

.item {
    width: auto;
    padding: 0 2rem;
    line-height: 4rem;
    font-size: 2rem;
    float: left;
    display: inline-block;
}

.sub-title {
    background: #0A3051;
    text-align: left;
    height: 3rem;
    line-height: 3rem;
    font-size: 2rem;
    text-indent: 2rem;
    margin: 10px 0;
}
</style>

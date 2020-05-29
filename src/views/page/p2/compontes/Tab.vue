<template>
    <div id='tableTab'>
        <ul>
            <li v-for="(item,index) in data" :key="index" @click="tabCli(item,index)"
                :class="{clickColor : active == index}">{{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  components: {},
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      active: 0
    }
  },
  methods: {
    tabCli (item, index) {
      this.active = index
    }
  },
  watch: {
    active: {
      immediate: true,
      deep: true,
      handler: function () {
        this.$emit('active', this.data[this.active].value)
      }
    }
  }
}
</script>
<style scoped lang='less'>
#tableTab {
    width: 100%;
    text-align: center;
    margin-top: 80px;

    ul {
        margin: 40px 0 0 0;
        width: 100%;
        padding: 0;

        li {
            list-style: none;
            width: 100%;
            line-height: 60px;
            background-image: url('./img/t2.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            margin-bottom: 10px;
            font-size: 25px;
            color: white;
            cursor: pointer;
            border: 1px solid rgb(8, 7 41)
        }
    }

    .clickColor {
        background-image: url('./img/t1.png') !important;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
}
</style>

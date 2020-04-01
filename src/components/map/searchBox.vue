<template>
    <div class="searchBox">
        <input v-model="text" @focus="onFocus">
        <i @click="click"/>
        <div>总数：{{number}}</div>
    </div>
</template>

<script>
export default {
  name: 'searchBox',
  props: {
    text: {
      type: String,
      default: ''
    },
    number: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onFocus () {

    },
    click () {

    }
  }
}
</script>

<style scoped lang="less">
.searchBox {
    position: absolute;
    top: 2rem;
    left: 2rem;
    height: 3.6rem;
    width: 40rem;

    input {
        width: 30rem;
        height: 100%;
        background: rgba(30, 141, 176, .59);
        border: .1rem solid #22aec5;
        font-size: 1.8rem;
        color: #fff;
        padding-left: 1.25rem;
        padding-right: 4rem;
        border-radius: 0;
        line-height: 3.6rem;
    }

    > div {
        width: 10rem;
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        font-size: 20px;
        line-height: 3.6rem;
        text-indent: 1rem;
    }

    i {
        height: 2.5rem;
        width: 2.5rem;
        display: block;
        position: absolute;
        background: url("./img/search.png");
        background-size: 100% 100%;
        right: 11rem;
        top: 0.6rem;
        cursor: pointer;
    }
}
</style>

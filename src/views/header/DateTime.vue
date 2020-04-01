<template>
    <div>{{time}}</div>
</template>

<script>
export default {
  name: 'DateTime',
  data () {
    return {
      time: ''
    }
  },
  mounted () {
    this.getTime()
  },
  methods: {
    getTime () {
      this.time = this.$moment().format('YYYY年 MMMM Do dddd HH:mm:ss a')
      setTimeout(this.getTime, 1000)
    }
  }
}
</script>

<style scoped>

</style>

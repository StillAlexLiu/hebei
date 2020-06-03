<template>
    <div class='Short'>
        <div class="img" :style="style">
            {{ text }}
        </div>
    </div>
</template>

<script>
export default {
  name: 'Short',
  computed: {
    style () {
      const bg = this.color !== '' ? this.colorList[this.color] : this.img
      return {
        width: this.size + 'px',
        height: this.size + 'px',
        backgroundSize: this.size + 'px ' + this.size + 'px',
        lineHeight: this.size + 'px',
        fontWeight: 'bold',
        fontSize: this.fontSize + 'px',
        backgroundImage: 'url(' + bg + ')'
      }
    }
  },
  data () {
    return {
      colorList: {
        blue: require('./img/blue.png'),
        green: require('./img/green.png'),
        orange: require('./img/orange.png'),
        pinkPurple: require('./img/pink-purple.png'),
        red: require('./img/red.png'),
        skyBlue: require('./img/sky-blue.png'),
        yellow: require('./img/yellow.png')
      }
    }
  },
  props: {
    img: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 84
    },
    fontSize: {
      type: Number,
      default: 40
    }
  }
}
</script>

<style scoped lang="less">
.Short {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>

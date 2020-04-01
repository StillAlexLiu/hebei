<template>
  <div class="EffectivenessSolving">
    <ul>
      <li v-for="(item,index) in data" :key="index">
        <div class="problemLeft">
          <span>No.{{index+1}}</span>
          <strong>{{item.name}}</strong>
        </div>
        <div class="problemRightS">
          <div class="EffectivenessSolvingtitle">
            <span>总量</span>
            <span>{{item.value1}}户次</span>
            <span></span>已解决
            <span>{{item.value2}}户次</span>
          </div>
          <div class="problemRight">
            <div class="progress">
              <div class="progressTop" :style="'width:' + item.value3 + '%'"></div>
              <div class="progressBottom"></div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['data'],
  data() {
    return {
    };
  },
  created() {},
  mounted() {
  }
};
</script>

<style lang="less">
.EffectivenessSolving {
  width: 100%;
  overflow: auto;
  height: 100%;
  ul {
    width: 100%;
    float: left;
    li {
      list-style-type: none;
      width: 95%;
      margin-bottom: 1rem;
      padding-right: 1rem;
      margin-left: 2%;
      // float: left;
      height: 5rem;
      position: relative;
      .EffectivenessSolvingtitle {
        text-align: right;
        font-size: 2rem;
        font-family: MicrosoftYaHei;
        color: rgba(255, 255, 255, 1);
        line-height: 2.5rem;
        margin-bottom: 0.5rem;
        padding-right: 1rem;
        span {
          padding-left: 2rem;
        }
      }
      .problemLeft {
        float: left;
        width: 20rem;
        font-size: 2rem;
        font-family: MicrosoftYaHei;
        color: rgba(255, 255, 255, 1);
        text-align: left;
        position: absolute;
        bottom: -1rem;
        span {
          padding-right: 2rem;
          font-size: 2rem;
          font-family: MicrosoftYaHei;
          color: rgba(122, 250, 255, 0.54);
          height: 5rem;
          line-height: 5rem
        }
        strong{
          font-size: 2.2rem;
          font-weight: normal;
          display: inline-block;
          width: 11rem;
          line-height: 2.4rem;
        }
      }
      .problemRightS{
        float:right;
        width: calc(100% - 20rem);
      }
      .problemRight {
        // float: right;

        .progress {
          position: relative;
          div {
            position: absolute;
            left: 0;
            top: 0;
            height: 1.5rem;
            border-radius: 3rem;
            background: -webkit-linear-gradient(left, #3cbaff, #0073a9);
            /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(left, #3cbaff, #0073a9);
            /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(left, #3cbaff, #0073a9);
            /* Firefox 3.6 - 15 */
            background: linear-gradient(to right, #3cbaff, #0073a9);
            /* 标准的语法 */
            z-index: 10;
            &.progressBottom {
              width: 100%;
              background: #999;
              z-index: 9;
            }
          }
        }
      }
    }
  }
}
</style>

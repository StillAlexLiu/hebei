<template>
    <div class='NumberGroupRight3'>
        <ContainerBorderStyle1 v-for="(item,index) in data" :key="index">
            <div class="name h-1-2"> {{item.name}}</div>
            <div class="value h-1-2 number-font">{{item.value}}<span class="unit number-font">{{ item.unit }}</span>
            </div>
        </ContainerBorderStyle1>
    </div>
</template>

<script>
export default {
  name: 'NumberGroupRight3',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
.NumberGroupRight3 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 15px 5px;
    text-align: center;

    .name {
        font-size: 20px;
        line-height: 60px;
    }

    .value {
        font-size: 42px;
        line-height: 40px;
    }

    .unit {
        font-size: 22px;
    }
}
</style>

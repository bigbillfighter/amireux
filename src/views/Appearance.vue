<template>
  <el-row class="goods">
   <el-col :span="22" :offset="1">
     <el-image v-for="(item, index) in appList" :src="item" :key="index"></el-image>
   </el-col>
  </el-row>
</template>

<script>
  export default {
    data () {
      let appList = new Array(14)
      for(let i = 1; i<=14; i++){
        appList[i-1] = require('../assets/images/appearance/goods'+i+'.png')
      }
      return {
        appList: appList
      }
    },

  }
</script>

<style scoped>
  .goods {
    background-image: url("../assets/images/appearance/bg.jpg");
    background-repeat: repeat;
  }

</style>

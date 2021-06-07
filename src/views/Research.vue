<template>
  <div>
    <el-row v-for="i in 5" :key="i" :gutter="30" style="margin: 0 30px">
      <el-col v-for="j in 4" :key="j" :span="6" style="margin-top: 50px">
        <el-image :src="research_images[(i-1)*4+j-1]" style="margin: 0 20px"></el-image>
        <p style="text-align: center; font-size: 1.25rem; line-height: 1.5rem; font-family: Campton,arial,sans-serif; font-weight: 700; font-style: normal;">
          {{research_titles[(i-1)*4+j-1]}}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data () {
      let research_images = []
      for (let i = 1; i <= 20; i++) {
        if (i === 2) {
          research_images[i - 1] = require('../assets/images/research/r' + i + '.png')
        } else {
          research_images[i - 1] = require('../assets/images/research/r' + i + '.jpg')
        }
      }
      return {
        research_images: research_images,
        research_titles: [
          '一句宣言，半个世纪，这是属于巴黎欧莱雅的伟大一起庆祝“我值得拥有”诞生50年！',
          '影响世界的女性先锋，Gemma Chan成为巴黎欧莱雅全球代言人',
          'Skin care tips: 3 ways to quench my thirsty skin[Translation]',
          'Sunscreen\'s a must, even when taking a dip[Translation]',
          'Sunscreens: different textures for a sunburn-free summer[Translation]',
          'Pump your skin with antioxydants for a month ![Translation]',
          'Protect your sensitive skin from the sun[Translation]',
          'The 5 beauty benefits of glycolic acid[Translation]',
          'Our anti aging tips to enjoy the sun without paying the price[Translation]',
          'Panthenol, the perfect active ingredient for sensitive skin[Translation]',
          'On the clock : 15 minutes to glowing skin[Translation]',
          'Objective : Fresh Complexion, 3 days tops[Translation]',
          'My skis are prepped, but what about my skin?[Translation]',
          'The benefits of collagen on our skin[Translation]',
          'The best eye contour cream for your age[Translation]',
          'The day cream guide : here\'s which one to pick for mature skin[Translation]',
          'The nomakeup trend: are you ready to give it a whirl?[Translation]',
          'The multimasking trend, the new beauty craze[Translation]',
          'Time to adopt a revolumising beauty routine[Translation]',
          'Tired and tested anti ageing tips for all age groups![Translation]',
        ]
      }
    }
  }
</script>

<style scoped>

</style>

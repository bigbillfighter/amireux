<template>
  <div class="elab" >
    <div class="bg1">
      <el-row>
       <el-col :span="7" :offset="3" style="margin-top: 280px; text-align: left">
         <p class="big-text">现代东方美</p>
         <p class="middle-text">MODERN ORIENTAL</p>
         <p class="small-text">千雀灵来自东方，源于中国，</p>
         <p class="small-text">讲究东方美学的平衡和谐之道。</p>
         <p class="small-text">相信对于肌肤，强施不如调养，雕琢不如自然。</p>
         <p class="small-text">以草本自然能量，滋润养护肌肤。</p>
         <p class="small-text">让属于你的现代东方之美，自然散发。</p>
       </el-col>
        <el-col :span="14" style="margin-top: 210px">
          <video :src="videos[0]" loop muted autoplay type="video/mp4" width="680px"></video>
        </el-col>
      </el-row>
    </div>
    <div class="bg2">
      <el-row>
        <el-col :span="24"  style="margin-top: 140px; text-align: center">
          <p class="middle-text" style="font-size: 17px">NATURAL SHEER POWER</p>
          <p class="big-text" style="font-size: 28px">千雀灵北纬30度 草本生长黄金纬度</p>
          <p class="small-text">天然不刺激，源自天然好产地。</p>
          <p class="small-text">中国北纬30度，气候适宜，降水丰沛，沿线分布着众多国家级自然保护区，包括神农架、九寨沟、黄山等，植被丰富，自然景观荟萃。</p>
          <p class="small-text">中国北纬30度，以其独特的地理气候，孕育众多珍稀草本植物，成为十分适合草本生长的“黄金纬度”。</p>
          <video :src="videos[1]" loop muted autoplay type="video/mp4" width="680px" style="margin-top: 40px"></video>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 0">
      <el-carousel height="850px">
        <el-carousel-item v-for="item in carousel_images" :key="item">
          <el-image :src="item" height="850px"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="bg3">
      <el-row>
        <el-col :span="13" :offset="11" style="margin-top: 120px; text-align: left">
          <p class="big-text" style="font-size: 30px">明星代言</p>
          <video :src="videos[2]" loop muted autoplay type="video/mp4" width="680px"></video>
          <p class="big-text" style="font-size: 30px; margin-top: 20px">迪丽热巴</p>
          <p class="small-text" style="font-size: 18px;">中国内地女演员、歌手。</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    data (){
      return {
        bg: [
          require('../assets/images/botany/BG_01.jpg'),
          require('../assets/images/botany/BG_02.jpg'),
          require('../assets/images/botany/BG_04.jpg'),
        ],
        videos: [
          require('../assets/videos/elaboration/culture.mp4'),
          require('../assets/videos/elaboration/plain.mp4'),
          require('../assets/videos/elaboration/propagate.mp4')
        ],
        carousel_images: [
          require('../assets/images/botany/story1.jpg'),
          require('../assets/images/botany/story2.jpg'),
          require('../assets/images/botany/story3.jpg'),
        ]
      }
    },

  }
</script>

<style scoped>
  .elab {
    margin: 0;
    border: 0;
    padding: 0;
    list-style: none;
  }

  .elab video {
    border-radius: 6px;
  }

  .elab .bg1 {
    background-image: url("../assets/images/botany/BG_01.jpg") ;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 0;
    height: 850px;
  }
  .elab .bg2{
    background-image: url("../assets/images/botany/BG_02.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 0;
    height: 850px;
  }
  .elab .bg3{
    background-image: url("../assets/images/botany/BG_04.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 0;
    height: 850px;
  }

  .big-text{
    font-size: 34px;
    color: #ffffff;
    margin-bottom: 24px;
    font-family: Microsoft YaHei, sans-serif;
  }
  .middle-text{
    font-size: 17px;
    color: #ffffff;
    margin-bottom: 24px;
    font-family: Microsoft YaHei, sans-serif;
  }
  .small-text{
    color: #ffffff;
    font-family: Microsoft YaHei, sans-serif;
    line-height: 24px;
  }
</style>

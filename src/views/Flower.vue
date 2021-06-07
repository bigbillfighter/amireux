<template>
  <div>
    <el-row>
     <el-col :span="20" :offset="2">
       <el-image :src="url"></el-image>
     </el-col>
    </el-row>

    <el-row>
      <el-col :span="20" :offset="2">
        <el-image :src="discount"></el-image>
      </el-col>
    </el-row>

    <el-row>
     <el-col :span="20" :offset="2">
       <el-carousel height="623px" arrow="never">
         <el-carousel-item>
<!--           <div style="position: absolute; width: 39.4%;left: 10.46%;top: 16.85%;height: 68.69%;z-index: 3;">-->
<!--             <video webkit-playsinline="webkit-playsinline" :src="videos[0]" muted loop autoplay style="width: 122%" playsinline="playsinline"></video>-->
<!--           </div>-->
           <el-image :src="video_images[0]" style="height: 623px"></el-image>
         </el-carousel-item>
         <el-carousel-item>
           <el-image :src="video_images[1]" style="height: 623px"></el-image>
         </el-carousel-item>
       </el-carousel>
     </el-col>
    </el-row>

    <el-row>
     <el-col :span="20" :offset="2">
       <el-image :src="trans_image"></el-image>
     </el-col>
    </el-row>

    <el-row>
      <el-col :span="20" :offset="2">
        <el-carousel height="643px" arrow="never">
          <el-carousel-item v-for="item in carousel_items" :key="item">
            <el-image :src="item" style="height: 643px"></el-image>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        url: require('../assets/images/flowers/ad1.png'),
        discount: require('../assets/images/flowers/dis.png'),
        carousel_items: [
          require('../assets/images/flowers/ca1.png'),
          require('../assets/images/flowers/ca2.png'),
          require('../assets/images/flowers/ca3.png')
        ],
        video_images: [
          require('../assets/images/flowers/video1.png'),
          require('../assets/images/flowers/video2.png')
        ],
        videos: [
          require('../assets/videos/flowers/me_video1.mp4'),
          require('../assets/videos/flowers/me_video2.mp4'),
        ],
        trans_image: require('../assets/images/flowers/dis2.png')
      }
    }
  }
</script>

<style scoped>

  /deep/ .el-carousel__button {
    background: #888888;
  }

</style>

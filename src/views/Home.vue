<template>
    <div>
      <el-main class="content">
        <el-row>
          <el-col :span="16" :offset="4">
            <el-carousel height="500px" >
              <el-carousel-item v-for="item in advertises" :key="item" class="content-carousel">
                <el-image style="height: 500px" :src="item"></el-image>
              </el-carousel-item>
            </el-carousel>

          </el-col>
        </el-row>
        <el-row class="tech">
          <el-col :span="8">
            <p class="tech-content1">探索更多技巧和小妙招</p>
            <p class="tech-content2">满足肌肤需求</p>
          </el-col>
          <el-col :span="16">
            <el-container>
              <el-card v-for="(tech, index) in technologys" :key="index" :body-style="{padding: '0px'}" class="tech-card">
                <el-image :src="tech.url"></el-image>
                <div class="tech-content-link">
                  <el-link :underline="false">{{tech.name}}</el-link>
                </div>
              </el-card>
            </el-container>
          </el-col>
        </el-row>
      </el-main>
      <el-main class="news">
        <el-row>
          <el-col :span="20" :offset="2">
            <p class="news-title">耀舞东方</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="20" :offset="2">
            <el-container>
              <el-card shadow="never" v-for="(news, index) in ferodeNews" :key="index" :body-style="{padding: '0px'}" class="news-card">
                <el-image :src="news.url"></el-image>
                <div style="padding: 14px">
                  <el-link :underline="false" class="news-info">{{news.info}}</el-link>
                </div>
              </el-card>
            </el-container>
          </el-col>
        </el-row>
      </el-main>
    </div>
</template>

<script>
  export default {
    name: 'Home',
    data (){
      return {
        advertises: [
          require('../assets/images/advertisement/home1.png'),
          require('../assets/images/advertisement/home2.png'),
          require('../assets/images/advertisement/home3.png'),
          require('../assets/images/advertisement/home4.png')
        ],
        technologys:[
          {
            name: '化妆水的三大优势',
            url: require('../assets/images/techs/tech1.jpg')
          },
          {
            name: '小苏打的10种出色美容功效',
            url: require('../assets/images/techs/tech2.jpg')
          },
          {
            name: '5个小妙招，让肌肤白里透红',
            url: require('../assets/images/techs/tech3.jpg')
          },
          {
            name: '冬季护肤小妙招，还你少女柔嫩肌肤',
            url: require('../assets/images/techs/tech4.jpg')
          }
        ],
        ferodeNews:[
          {
            info: '作为中国首个ifscc金牌会员，千雀灵以实力比肩世界的品质',
            url: require('../assets/images/news/news-01.png')
          },
          {
            info: '千雀灵携手钟华，缔造故宫文化之美，东方匠韵',
            url: require('../assets/images/news/news-02.png')
          },
          {
            info: '千雀灵热心公益事业，积极承担社会责任',
            url: require('../assets/images/news/news-03.png')
          },
          {
            info: '连续四年总冠名中国模特之星大赛，千雀灵助力风尚产业建设',
            url: require('../assets/images/news/news-04.png')
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .content .content-carousel {
    border-radius: 6px
  }

  .content .tech {
    margin: 40px 100px 25px 100px;
  }
  .content .tech .tech-content1 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 80px;
  }
  .content .tech .tech-content2{
    font-size: 40px;
    margin-top: 40px;
  }
  .content .tech .tech-card {
    width: 180px;
    margin: 0 10px;
    height: 380px;
  }
  .content .tech .tech-card > .el-image {
    width: 100%;
  }
  .content .tech .tech-card .tech-content-link{
    padding: 14px;
  }

  .news {
    background-color: azure
  }
  .news .news-title{
    font-size: 30px;
    margin: 20px 0;
  }
  .news .news-card {
    width: 280px;
    height: 380px;
    border: none;
    padding: 20px;
    background-color: azure;
  }
  .news .news-card > .el-image{
    width: 100%;
  }
  .news .news-card .news-info {
    font-size: 16px;
  }
</style>

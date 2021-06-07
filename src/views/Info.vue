<template>
  <div>
    <el-row style="text-align: center; margin-top: 80px">
      <el-col :span="14" :offset="5">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item v-for="(item, index) in awardTitle" :key="index" :title="item.awardEntity" :name="item.name">
            <ul style="text-align: left; font-size: 16px; line-height: 22px; font-family: 'PingFang SC', 'Microsoft YaHei'">
              <li style="margin-bottom: 8px; color: #0a0a0a;" v-for="myEntity in item.details" :key="myEntity">{{myEntity}}</li>
            </ul>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>

    <el-row style="margin-top: 100px; margin-bottom: 60px">
      <el-col :span="14" :offset="5">
        <el-carousel height="350px" type="card">
          <el-carousel-item v-for="award in awards" :key="award">
            <el-image :src="award" style="height: 350px"></el-image>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: '1',
        awardTitle:[
          {
            name: '1',
            awardEntity: '一、产品口碑类',
            details: [
              '2018年度天猫美妆创新营销品牌',
              '2017年度屈臣氏健康美丽大赏十佳产品大奖',
              '2017年度中国化妆品网C2CC草本护肤品类大奖',
              '2017年度太平洋女性网PCLADY人气大奖',
              '2017年度时尚芭莎BAZAAR最佳新品大奖',
              '2016年度瑞丽女性网RAYLI网友爱用国货',
              '2016年度时尚伊人COSMO人气奖',
              '2015年度女人志ONLYLADY最美肌肤大奖'
            ]
          },
          {
            name: '2',
            awardEntity: '二、品牌价值类',
            details: [
              '2018卓美妆头条越影响力品牌',
              '2018年化妆品报社十大畅销化妆品',
              '2018凯度消费者指数消费者十大首选品牌',
              '2018凯度消费者指数最具成长力品牌',
              '2017年度C-NPS顾客最推荐洗面奶品牌',
              '2017年度全球移动营销峰会MORKETING十大移动影响力品牌',
              '2017年度天猫金妆奖化妆水类单品大奖',
              '2017年度天猫IP合作杰出影响力品牌',
              '2017年度屈臣氏公益合作伙伴',
              '2017年度家乐福地区商品合作伙伴',
              '2017年度高鑫零售精诚合作奖',
              '2017年度第一财经“金字招牌”明星品牌',
              '2017年度美柚“她势力”榜国货金品',
              '2017年度天下网商新网商年度创新奖',
              '2017年度快消品网上海畅销金品',
              '2017年度聚美丽中国化妆品黑天鹅奖品牌大奖',
              '2017年度聚美丽中国化妆品黑天鹅奖团队大奖',
              '2017年度化妆品报社中国化妆品G20集团',
              '2017年度化妆品报社中国化妆品G20品牌',
              '2016年度品观网中国化妆品蓝玫奖风云品牌大奖',
              '2016年度化妆品报社中国化妆品百强电商',
              '2016 年度天猫品牌大奖双冠王',
              '2016年度中国美妆十佳品牌',
              '2015年度品观网中国化妆品品牌50强1',
              '2015年度化妆品报社中国化妆品唯美商业模式创新奖'
            ]
          },
          {
            name: '3',
            awardEntity: '三、创意营销类',
            details: [
              '2018年度最佳微电影/短片营销金奖——千雀灵「东方簪」案例',
              '2018年度太平洋女性网PCLADY时尚匠心传承奖',
              '2018金鼠标数字营销传播银奖',
              '2018华扬联众数字传播力最佳表现中国品牌',
              '2017清大数据营销案例传播奖',
              '2017年度中华创意节 One Show社交新媒体营销铜奖',
              '2017年度中国长城奖媒介营销金奖',
              '2017年度中国美容博览会CIBE设计创新奖',
              '2017年度中国美容博览会CIBE创意传播品牌',
              '2017年度新周刊营销创意品牌',
              '2017年度新浪微博蓝V品牌营销价值单位',
              '2017年度新榜内容营销奖',
              '2017年度金触点Top Markting全球商业创新银奖',
              '2017年度化妆品报社唯美影片奖最具人气奖',
              '2017年度化妆品报社唯美营销奖',
              '2016年度爱奇艺网络剧营销领导品牌',
              '2015年度中国长城奖营销传播金奖',
              '2015年度中国长城奖广告主奖'
            ]
          }

        ],
        awards:[
          require('../assets/images/awards/award1.jpg'),
          require('../assets/images/awards/award2.jpg'),
          require('../assets/images/awards/award3.jpg'),
          require('../assets/images/awards/award4.jpg'),
          require('../assets/images/awards/award5.jpg'),
          require('../assets/images/awards/award6.jpg'),
          require('../assets/images/awards/award7.jpg'),
          require('../assets/images/awards/award8.jpg'),
        ]
      }
    }
  }
</script>

<style scoped>

  .el-collapse >>> .el-collapse-item__header {
    font-size: 20px;
    line-height: 24px;
    font-family: Microsoft YaHei, sans-serif;
    padding: 30px 70px 30px 0px;
    color: #888;
  }
  .el-collapse >>> .is-active {
    color: #2cce6c !important;
  }

</style>

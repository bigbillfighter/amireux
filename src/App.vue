<template>
  <div>
    <el-container>
      <el-header class="topbar">
        <el-container>
          <h1 class="icon"><router-link class="amireux-link" to="/home">AMIREUX</router-link></h1>
          <nav class="nav">
            <el-link class="menu-item"><router-link class="amireux-link" to="/home">主页</router-link></el-link>
            <el-link class="menu-item"><router-link class="amireux-link" to="/appearance">臻颜</router-link></el-link>
            <el-link class="menu-item"><router-link class="amireux-link" to="/elaboration">匠心之作</router-link></el-link>
            <el-link class="menu-item"><router-link class="amireux-link" to="/flower">花之季</router-link></el-link>
            <el-link class="menu-item"><router-link class="amireux-link" to="/blogs">口碑心得</router-link></el-link>
            <el-link class="menu-item"><router-link class="amireux-link" to="/info">关于千雀灵</router-link></el-link>
            <el-link class="menu-item"><router-link class="amireux-link" to="/research">研发中心</router-link></el-link>
          </nav>
        </el-container>
      </el-header>
      <router-view></router-view>
      <el-footer class="tail">
        <el-row>
          <el-col :span="6" class="tail-link">
            <el-row><el-link :underline="false" class="tail-link-item"><i class="el-icon-s-custom"></i>员工登录</el-link></el-row>
            <el-row><el-link :underline="false" class="tail-link-item"><i class="el-icon-suitcase"></i>供应商</el-link></el-row>
            <el-row><el-link :underline="false" class="tail-link-item"><i class="el-icon-s-management"></i>管理系统</el-link></el-row>
          </el-col>
          <el-col :span="1">
            <el-divider class="tail-vdivider" direction="vertical"></el-divider>
          </el-col>
          <el-col :span="4" class="tail-qrcode" v-for="(QRCode, index) in QRCodes" :key="index">
            <img :src="QRCode.img" alt="qrcode"/>
            <p>{{QRCode.name}}</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">地址：上海市黄浦区南京路1024号</el-col>
        </el-row>
        <el-row>
          <el-col :span="24">电话：13999999999</el-col>
        </el-row>
        <el-row>
          <el-col :span="24"><p style="margin-bottom: 20px">Copyrights &copy; 2021 - 上海千雀灵股份有限公司</p></el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        QRCodes: [
          {
            name: '官方微信',
            img: require('./assets/images/QRCode/official_chat.png')
          },
          {
            name: '官方微博',
            img: require('./assets/images/QRCode/official_weblog.png')
          },
          {
            name: '官方公众号',
            img: require('./assets/images/QRCode/official_public.png')
          }
        ],
      }
    },
    mounted () {
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          this.screenWidth = window.screenWidth
        })()
      }
    },
  }

</script>

<style>
  *{
    padding: 0;
    margin: 0;
    border: 0;
    list-style: none;
  }
  .topbar {
    height: 60px;
    background-color: #000;
    color: #999;
    /*display: flex;*/
    align-items: center;
  }
  .topbar .icon {
    font-family: serif;
    font-size: 60px;
    line-height: 60px;
    margin-left: 200px;
  }

  .amireux-link{
    text-decoration: none;
    color: inherit;
  }

  .topbar .nav {
    margin: auto;
    text-align: right;
    margin-right: 200px;
    font-family: sans-serif;
  }
  .topbar .nav .menu-item {
    margin: 0.5em;
    color: #999;
    font-size: 18px;
  }

  .tail {
    margin: 0 400px;
    margin-top: 20px;
  }
  .tail > .el-row {
    text-align: center;
    margin: 4px 0;
  }
  .tail .tail-link {
    font-size: 18px;
    line-height: 1.5;
    /*border: 1px solid red;*/
    /*background-color: #999999;*/
    text-align: center
  }
  .tail .tail-link .tail-link-item {
    font-size: 16px;
    border: 1px solid #999;
    border-radius: 4px;
    margin: 3px 0;
  }
  .tail .tail-qrcode {
    text-align: center;
    margin: 0 20px;
  }
  .tail .tail-qrcode >img{
    width: 80px;
  }
  .tail .tail-vdivider {
    height: 6em;
  }
</style>

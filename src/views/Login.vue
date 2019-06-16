<template xmlns:el-col="http://www.w3.org/1999/html">
    <el-container style="background: #fff">
<el-header style="padding: 30px 30px 10px 30px ;">
  <el-row>
    <el-col :span="3">
      <img style="width: 120px;height: 45px" src="../assets/logo/logo.png"/>
    </el-col>
  <el-col :span="21" style="text-align: left;padding-top: 20px;font-size: 15px ;font-family: 黑体">
    中国人寿保险理赔服务共享平台
  </el-col>
  </el-row>
</el-header>

      <el-main  class="bg" style=";width: 100%;height: 500px;margin-top: 30px">
        <el-container class="el-col-24" >

<el-row type="flex" justify="start" class="el-col-24" >
  <el-col :span="18"  >


  </el-col>
  <el-col :span="6">
    <el-container>
      <div style="background: white;width: 100%;height: 300px;padding: 20px 0px;box-shadow: 1px 1px 3px gray">

        <h1>用户登录</h1>
        <login-panel></login-panel>

      </div>


    </el-container>

  </el-col>
</el-row>

        </el-container>


      </el-main>
      <el-footer style="padding: 5px">
        <p style="font-size: 14px;color: #000">  版权所有 zang buqing  © Copyright 2019年6月16日</p>
      </el-footer>
    </el-container>
</template>

<script>
    import LoginPanel from "./LoginPanel";
    export default {
        name: "Login",
      components: {LoginPanel}
    }
</script>

<style scoped>
.bg{
  background: url("../assets/img/adminbg2.jpg") no-repeat;
  background-size: cover;
  background-origin: border-box;
  background-position-x: -350px;
}
</style>

<template>
  <el-dropdown @command="handleCommand" trigger="click">
      <span class="el-dropdown-link">
        {{this.$store.state.userid}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item icon="el-icon-plus">消息</el-dropdown-item>
      <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
      <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
      <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
      <el-dropdown-item icon="el-icon-circle-check-outline" command="logout">注销</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
    export default {
        name: "UserDropDown",
      methods:{
        handleCommand(command){
            let vm=this
          if(command=="logout") {

            localStorage.setItem("token", "")
            vm.$router.push("/login")
          }
          }
      }
    }
</script>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>

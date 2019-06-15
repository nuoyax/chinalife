<template>
 <el-container style="width: 50%">
   <el-form style="width: 100%" >
    <el-row>
      <el-col :span="5">用户名</el-col>
      <el-col :span="19"><el-input type="text"/></el-col>
    </el-row>
     <el-row>
       <el-col :span="5">手机号</el-col>
       <el-col :span="19"><el-input type="text"/></el-col>
     </el-row>
     <el-row >
       <el-col :span="5">用户名</el-col>
       <el-col :span="19"><el-input type="text"/></el-col>
     </el-row>
     <el-row>
       <el-col :span="5">用户名</el-col>
       <el-col :span="19"><el-input type="text"/></el-col>
     </el-row>
     <el-row>
       <el-col :span="5">用户名</el-col>
       <el-col :span="19"><el-input type="text"/></el-col>
     </el-row>
     <el-row>
       <el-col :span="5">手机号</el-col>
       <el-col :span="19"><el-radio-group ><el-radio>企业</el-radio><el-radio>企业</el-radio><el-radio>个人</el-radio></el-radio-group></el-col>
     </el-row>
     <el-row>

       <el-col :span="24"><el-button class="el-button--primary">下一步</el-button></el-col>
     </el-row>
   </el-form>


 </el-container>
</template>
<script>
    export default {
        name: "TaskCreaeUser"
    }
</script>

<style scoped>
>>>.el-row{margin-top: 10px !important}
  .el-col{line-height: 35px}
.el-inputt >>>input{height: 30px}
</style>

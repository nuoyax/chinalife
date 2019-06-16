<template>
<el-form style="color: black;text-align:center;padding: 20px;margin: 0" :model="ruleForm" status-icon :rules="rules" ref="ruleForm"
         label-width="60px"   class="demo-ruleForm">
  <el-form-item label="工号" prop="name">
    <el-input type="username"  placeholder="请输入工号" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password"  placeholder="请输入密码" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="验证码" prop="code">
    <el-row class="el-col-24">
      <el-col :span="13"> <el-input  v-model="ruleForm.code"  ></el-input></el-col>
     <el-col :span="11">  <img  style="width: 100%;height: 40px;border-color: #DCDFE6" src=""/></el-col>

    </el-row>



  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    name:"LoginPanel",
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        token:'1234567',
        ruleForm: {
          name: '',
          pass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let vm=this


            localStorage.setItem("token",vm.token)
            vm.$message.success("登录成功")
            vm.$router.push("/")
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
  >>>.el-form-item__label {
    text-align: center;}
 >>> .el-input__inner{
    border-radius: 0px;
  }

</style>

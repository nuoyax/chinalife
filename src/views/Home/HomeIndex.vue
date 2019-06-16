<template>


<el-container>
  <div class="el-col-24">
    <el-row :gutter="2"   >

      <el-col :span="12"><home-index-echarts-left></home-index-echarts-left></el-col>
      <el-col :span="12"><home-index-echarts-right></home-index-echarts-right></el-col>
    </el-row>
  </div>


</el-container>






</template>
<script>
  import HomeIndexEchartsLeft from "./HomeIndexEchartsLeft";
  import HomeIndexEchartsRight from "./HomeIndexEchartsRight";
  export default {
    components: {HomeIndexEchartsRight, HomeIndexEchartsLeft},
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>


<template>
  <div class="el-col-24">
  <div class="el-col-24">
    <h2>vue中插入Echarts示例</h2>
    <div id="chart_right">

    </div>
  </div>
  <div class="el-col-24" style="padding: 10px">
    <el-row>
      <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">

              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name:"HomeIndexEchartsRight",
    data() {
      return {}
    },
    mounted() {
      let this_ = this;
      let myChart = echarts.init(document.getElementById('chart_right'))
      myChart.setOption({
        series : [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
              {value:235, name:'视频广告'},
              {value:274, name:'联盟广告'},
              {value:310, name:'邮件营销'},
              {value:335, name:'直接访问'},
              {value:400, name:'搜索引擎'}
            ]
          }
        ]
      })

      //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
      // window.addEventListener('resize',function() {myChart.resize()});
    },
    methods: {},
    watch: {},
    created() {

    }
  }
</script>

<style scoped>
  h2{
    text-align: center;
    padding: 30px;
    font-size: 18px;
  }
  #chart_right{
    width: 100%;
    height: 300px;
    box-shadow: 1px 1px 3px gainsboro,-2px -2px 3px gainsboro;
    margin: 0 auto;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>

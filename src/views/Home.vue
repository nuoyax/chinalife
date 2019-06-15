<template>
  <el-container  >
    <el-container style="width:15%;position: absolute;top: 0px;bottom: 0" >
    <el-aside width="100%" style="background: #545c64;height: 100%"  >

        <el-menu

          style=" text-align: left;height: 100%"
          router
          class="el-menu-vertical-demo el-col-24"
          background-color="#545c64"
          text-color="#fff"
          default-active="/HomeIndex"
          active-text-color="#ffd04b">

          <el-menu-item index="/HomeIndex" style="font-size: 10px;">
            <template slot="title">
              <i class="el-icon-s-home"></i>
              <span>首页</span>
            </template>
          </el-menu-item>


          <el-submenu :index="item.id" v-for="item in sub_menu" :key="item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.text}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item style="font-size: 12px;" @click="menuEvent(item.text)" :index="items.index" v-for="items in  item.children" :key="items.index"  >
                <i class="el-icon-alarm-clock"></i>{{items.text}}

              </el-menu-item>

            </el-menu-item-group>

          </el-submenu>




        </el-menu>




    </el-aside>
    </el-container>

    <el-container   style="width:85%;position: absolute;left: 15%;top: 0px;bottom: 0px" >
      <el-header style="background: #fff;color:#000;text-align: left; line-height: 60px;height: 60px;box-shadow: 1px 1px 4px rgba(0,0,0,0.2)">
      <div  class="el-col-2" style="height: inherit;line-height: 86px" > <img class="" style="width:100px;height: 35px;" src="../assets/logo/logo.png" /></div>
      <div class="el-col-1"></div>
        <div  class="el-col-21 " style="margin-left:10px;height: inherit" ><span >{{header}}</span></div>

      </el-header>
      <div style="padding:10px;">
        <el-container style="background: #fff;padding: 5px 10px;height: 40px;line-height: 40px">
          <el-breadcrumb style="height:30px;line-height: 30px;">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item >{{breadcumb}}</el-breadcrumb-item>
          </el-breadcrumb>

        </el-container>
      </div>
      <div style=" padding:10px">
<el-container style="overflow-x: hidden;background: #fff;">


    <router-view ></router-view>

</el-container>

      </div>
      <el-footer></el-footer>
    </el-container>



  </el-container>


</template>

<script>
  import  apiConst from  "../constant/apiConst"
    export default {

        name: "Home",
       created(){
         /**
          * token 判断，如果没有重定向login页面
          */
          this.$router.push("/TaskCreate")
      //      let i=0
      //     let timer=setInterval(()=>{
      //
      //       i++
      //       if (i>=10){
      //
      //
      //         this.$store.dispatch("decFun")
      //         console.log(this.$store.state.count)
      //         if (this.$store.state.count==0){
      //
      //             this.$notify.success(this.$store.state.result+"")
      //
      //
      //           clearInterval(timer)
      //           i=0
      //         }
      //       }else{
      //         this.$store.dispatch("addFun")
      //       }
      //     },1000)

      },
      data(){
          return{
            header:apiConst.HEADER,
            sub_menu:[
              {id:"0",text:"任务操作",children:[{
                  text:"查询任务",index:"/TaskQuery"
                },
                  {index:"/TaskCreate",text:"任务创建"}
                ]},
              {id:"1",text:"服务操作",children:[{index:"/ServiceCreate",text:"服务模型创建"}]},
              {id:"2",text:"用户管理",children:[{index:"/UserManager",text:"用户管理"}]}
            ],
            sub_menu_status:[
              {id:0,text:"模型创建"},
              {id:1,text:"任务查询"},
              {id:2,text:"任务操作1"}
            ],
            breadcumb:""
          }

        }
        ,
      methods:{

          menuEvent(text){
            let vm=this
            vm.breadcumb=text
          // this.$message.success(text)


        }
      }
  }
</script>

<style scoped>
  .el-submenu .el-menu-item {
    height: 40px;
    line-height: 40px;
    padding: 0 45px;
    min-width: 50px;
  }
  >>>.el-menu-item-group__title{
    display: none;
  }
  >>>.el-submenu__title {
    height: 40px;
    line-height: 40px;}
  .el-aside {

  }
</style>

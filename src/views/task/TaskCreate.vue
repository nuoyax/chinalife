<template>
  <el-container style="padding: 10px ">
  <el-tabs v-model="activeName" @tab-click="handleClick" style="width: 100%">
    <el-tab-pane label="用户管理" name="user"><task-create-user></task-create-user></el-tab-pane>
    <el-tab-pane label="配置管理" name="config"><task-create-configure></task-create-configure></el-tab-pane>
    <el-tab-pane label="任务管理" name="misson"><task-create-misson></task-create-misson></el-tab-pane>
    <el-tab-pane label="角色管理" name="roles"><task-create-roles></task-create-roles></el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="interval"><task-create-interval></task-create-interval></el-tab-pane>
  </el-tabs>

  </el-container>
</template>
<script>
  import TaskCreateUser from "./TaskCreateUser";
  import TaskCreateConfigure from "./TaskCreateConfigure";
  import TaskCreateMisson from "./TaskCreateMisson";
  import TaskCreateRoles from "./TaskCreateRoles";
  import TaskCreateInterval from "./TaskCreateInterval";
  export default {
    components: {TaskCreateInterval, TaskCreateRoles, TaskCreateMisson, TaskCreateConfigure, TaskCreateUser},
    data() {
      return {
        activeName: 'user'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<template>
  <div>
    <el-container>
      <goBack></goBack>
      <el-header><div style="color: #409EFF">我是头部</div></el-header>
      <el-container>
        <el-aside>
            <div>我是侧边栏</div>
        </el-aside>
        <el-main><div>我是主题</div></el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  import goBack from '../../components/goBack'
  export default {
    name: 'container',
    components: {
      goBack
    },
  }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 360px;
  }
</style>

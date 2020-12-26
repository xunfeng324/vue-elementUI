<template>
  <el-row>
    <el-col :span="6" :offset="0">
      <go-back></go-back>
      <h2>Backtop 回到顶部</h2>
      <h5>返回页面顶部的操作按钮</h5>
      <h4>¶基础用法&nbsp;<small>滑动页面即可看到右下方的按钮。</small></h4>
      <h5></h5>
      <div>
        Scroll down to see the bottom-right button.
        <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import goBack from '../../components/goBack'

  export default {
    name: 'backtop',
    data() {
      return {}
    },
    components: {
      goBack
    },
    methods: {}
  }
</script>

<style scoped>

</style>

<template>
  <el-row>
    <el-col :span="12" :offset="0">
      <go-back></go-back>
      <h2>PageHeader 页头</h2>
      <h5>如果页面的路径比较简单，推荐使用页头组件而非面包屑组件。</h5>
      <h4>基础 &nbsp;<small></small></h4>
      <el-page-header @back="goBack" content="详情页面" class="block">

      </el-page-header>
      <div class="block">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="block">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

    </el-col>
  </el-row>
</template>

<script>
  import goBack from '../../components/goBack'
  const zujian1 = {
    template: '   <el-breadcrumb separator-class="el-icon-arrow-right">\n' +
      '          <el-breadcrumb-item :to="{ path: \'/\' }">首页</el-breadcrumb-item>\n' +
      '          <el-breadcrumb-item>活动管理</el-breadcrumb-item>\n' +
      '          <el-breadcrumb-item>活动列表</el-breadcrumb-item>\n' +
      '          <el-breadcrumb-item>活动详情</el-breadcrumb-item>\n' +
      '        </el-breadcrumb>'
  };
  export default {
    name: 'pageHeader',
    data() {
      return {}
    },
    components: {
      goBack,
      zujian1
    },
    methods: {
      goBack() {
        console.log('go back');
      }
    }
  }
</script>

<style scoped>

</style>

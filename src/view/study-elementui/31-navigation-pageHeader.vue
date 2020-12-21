<template>
  <el-row>
    <el-col :span="12" :offset="0">
      <go-back></go-back>
      <h2>PageHeader 页头</h2>
      <h5>如果页面的路径比较简单，推荐使用页头组件而非面包屑组件。</h5>
      <h4>基础 &nbsp;<small></small></h4>
      <el-page-header @back="goBack" content="详情页面">
      </el-page-header>
    </el-col>
  </el-row>
</template>

<script>
  import goBack from '../../components/goBack'

  export default {
    name: 'pageHeader',
    data() {
      return {}
    },
    components: {
      goBack
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

<template>
  <el-row>
    <el-col :span="6" :offset="0">
      <go-back></go-back>
      <h2> Divider 分割线</h2>
    </el-col>
  </el-row>
</template>

<script>
  import goBack from '../../components/goBack'

  export default {
    name: '',
    data () {
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

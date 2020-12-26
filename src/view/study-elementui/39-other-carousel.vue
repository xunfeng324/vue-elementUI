<template>
  <el-row>
    <el-col :span="6" :offset="0">
      <go-back></go-back>
      <h2>Carousel 走马灯</h2>
    </el-col>
  </el-row>
</template>

<script>
  import goBack from '../../components/goBack'

  export default {
    name: 'carousel',
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

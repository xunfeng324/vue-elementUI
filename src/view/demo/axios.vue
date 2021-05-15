<template>
  <el-row>
    <el-col :span="24" :offset="0">
      <goIndex></goIndex>
      <h3>axios<p>你好</p></h3>
      <el-button @click="getdata">请求</el-button>
    </el-col>
  </el-row>
</template>
<script>
  import goIndex from "../../components/goIndex";
  export default {
    name: '',
    data() {
      return {}
    },
    components: {
      goIndex
    },
    methods: {

      getdata(){
        this.axios.get('data/data.json').then((response)=>{
          console.log(response);
        }).catch((err)=>{
          console.log(err);
        })


      },
    },
    mounted() {//钩子函数

    }
  }
</script>

<style scoped lang="less">
  h3 {
    background-color: #49ff66;

    p {
      font-size: 10px;
      background-color: red;
    }
  }
</style>

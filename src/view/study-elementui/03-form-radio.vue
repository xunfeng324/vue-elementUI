<template>
  <el-row>
    <goBack></goBack>
    <el-col :span="20" :offset="2">
      <h4>单选框</h4>
      <div>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
      </div>
      <h4>禁用</h4>
      <div>
        <el-radio disabled v-model="radio1" label="1">备选项</el-radio>
        <el-radio v-model="radio1" label="2">备选项</el-radio>
      </div>
      <h4>单选框组</h4>
      <div>
        <el-radio-group v-model="radioGroup" @change="radioGroup1">
          <el-radio :label="3">备选项</el-radio>
          <el-radio :label="6">备选项</el-radio>
          <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
      </div>
      <h4>按钮样式的单选框</h4>
      <!--size：大小'mini,medium,small'-->
      <div>
        <el-radio-group v-model="radioButton" size="mini">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="四川"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      <h4>带边框的按钮</h4>
      <div>
        <el-radio name="radio" v-model="radioBorder" label="1" border>备选项1</el-radio>
        <el-radio name="radio" v-model="radioBorder" label="2" border>备选项2</el-radio>
      </div>
      <h4>按钮的事件</h4>
      <div>
        <el-radio name="radio" @change="radioChange" v-model="radioBorder" label="1" >按钮事件</el-radio>
        <el-radio name="radio" @change="radioChange" v-model="radioBorder" label="2" >按钮事件</el-radio>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import goBack from '../../components/goBack'
  export default {
    name: 'radio',
    data () {
      return {
        radio: '1',
        radio1: '2',
        radioGroup: 3,
        radioButton: '四川',
        radioBorder:'1'

      }
    },
    components:{
      goBack
    },
    methods:{
      radioChange(){
          alert(this.radioBorder)
      },
      radioGroup1(){
        alert(this.radioGroup)
      }
    }
  }
</script>

<style scoped>

</style>

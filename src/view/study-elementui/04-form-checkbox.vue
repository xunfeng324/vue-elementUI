<template>
  <el-row>
    <el-col :span="20" :offset="2">
      <h3>基本复选框</h3>
      <div>
        <el-checkbox v-model="checked">备选项</el-checkbox>
        <el-checkbox v-model="checked1" disabled>备选项</el-checkbox>
        <el-checkbox v-model="checked2">备选项</el-checkbox>
      </div>
      <h3>部分选择复选框组</h3>
      <div>
        <el-checkbox-group v-model="checkList" @change="checkedaa">
          <el-checkbox label="复选框 A">复选框 A</el-checkbox>
          <el-checkbox label="复选框 B">复选框 B</el-checkbox>
          <el-checkbox label="复选框 C">复选框 C</el-checkbox>
          <el-checkbox label="禁用" disabled>禁用</el-checkbox>
          <el-checkbox label="选中且禁用" disabled>选中且禁用</el-checkbox>
        </el-checkbox-group>
      </div>
      <h4>min最少勾选</h4>
      <div>
        <el-checkbox-group v-model="checkListMin" @change="checkListbb">
          <el-checkbox label="四川">四川</el-checkbox>
          <el-checkbox label="北京">北京</el-checkbox>
          <el-checkbox label="武汉">武汉</el-checkbox>
          <el-checkbox label="上海">上海</el-checkbox>
        </el-checkbox-group>
      </div>
      <h4>按钮组复选框</h4>
      <div>
        <el-checkbox-group v-model="checkBtnList" size="medium">
          <el-checkbox-button v-for="val in city" :label="val" :key="val">{{val}}</el-checkbox-button>
        </el-checkbox-group>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import goBack from '../../components/goBack'
  const citys = ['四川','北京','湖北','上海'];
  export default {
    name: 'checkbox',
    data () {
      return {
        checked: false,
        checked1: false,
        checked2: false,
        checkList: ['选中且禁用', '复选框 A', '复选框 C'],
        checkListMin:[],
        city:citys,
        checkBtnList:[]

      }
    },
    methods: {
      checkedaa(){
        console.log(this.checkList);
      },
      checkListbb(){
        console.log(this.checkListMin);
      }
    }
  }
</script>

<style scoped>

</style>

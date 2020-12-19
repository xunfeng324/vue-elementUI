<template>
  <el-row>
    <el-col :span="6" :offset="0">
      <goBack></goBack>
      <h2>ColorPicker 颜色选择器</h2><
      h4>基础用法<br><small>使用 v-model 与 Vue
      实例中的一个变量进行双向绑定，绑定的变量需要是字符串类型。</small></h4>
      <div>
        <div class="block"><span class="demonstration">有默认值</span>
          <el-color-picker v-model="color1"></el-color-picker>
        </div>
        <div class="block"><span class="demonstration">无默认值</span>
          <el-color-picker v-model="color2"></el-color-picker>
        </div>
      </div>
      <h4>透明度<br><small>ColorPicker 支持普通颜色，也支持带 Alpha 通道的颜色，通过show-alpha属性即可控制是否支持透明度的选择。</small></h4>
      <div>
        <el-color-picker v-model="color1" show-alpha></el-color-picker>
      </div>
    </el-col>
    <el-col :span="6"><h4>预定义颜色<br><small>ColorPicker 支持预定义颜色</small></h4>
      <div>
        <el-color-picker v-model="color1" show-alpha :predefine="predefineColoer"></el-color-picker>
      </div>
      <h4>大小</h4>
      <div>
        <el-color-picker v-model="color1"></el-color-picker>
        <el-color-picker v-model="color2" size="medium"></el-color-picker>
        <el-color-picker v-model="color1" size="small"></el-color-picker>
        <el-color-picker v-model="color2" size="mini"></el-color-picker>
      </div>
    </el-col>
  </el-row>
</template>
<script>
  import goBack from '../../components/goBack'

  export default {
    name: 'colorPicker',
    data() {
      return {
        color1: '#409EFF',
        color2: null,
        predefineColoer: ['#ff4500', '#ff8c00', '#ffd700', '#90ee90', '#00ced1', '#1e90ff', '#c71585', 'rgba(255, 69, 0, 0.68)', 'rgb(255, 120, 0)', 'hsv(51, 100, 98)', 'hsva(120, 40, 94, 0.5)', 'hsl(181, 100%, 37%)', 'hsla(209, 100%, 56%, 0.73)', '#c7158577']
      }
    },
    components:{
      goBack
    },
    methods: {}
  }</script>
<style scoped>

</style>

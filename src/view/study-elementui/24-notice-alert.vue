<template>
  <el-row :gutter="10">
    <el-col :span="6" :offset="0">
      <go-back></go-back>
      <h2>Alert 警告</h2>
      <h5>用于页面中展示重要的提示信息。</h5>
      <h4>基本用法<br><small>页面中的非浮层元素，不会自动消失。</small></h4>
      <h5>Alert 组件提供四种主题，由type属性指定，默认值为info。</h5>
      <div class="el-boder">
        <el-alert class="block" type="success" title="success提示的文案"></el-alert>
        <el-alert class="block" type="danger" title="danger提示的文案"></el-alert>
        <el-alert class="block" type="info" title="info提示的文案"></el-alert>
        <el-alert class="block" type="warning" title="warning提示的文案"></el-alert>
      </div>
      <h4>主题<br><small>Alert 组件提供了两个不同的主题：light和dark。</small></h4>
      <h5>通过设置effect属性来改变主题，默认为light</h5>
      <div>
        <el-alert class="block" title="成功提示的文案" type="success" effect="dark"></el-alert>
        <el-alert class="block" title="消息提示的文案" type="info" effect="dark"></el-alert>
        <el-alert class="block" title="警告提示的文案" type="warning" effect="dark"></el-alert>
        <el-alert class="block" title="错误提示的文案" type="error" effect="dark"></el-alert>
      </div>
    </el-col>
    <el-col :span="6">
      <h4>自定义关闭按钮<br><small>自定义关闭按钮为文字或其他符号。</small></h4>
      <h5>在 Alert
        组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。closable属性决定是否可关闭，接受boolean，默认为true。你可以设置close-text属性来代替右侧的关闭图标，注意：close-text必须为文本。设置close事件来设置关闭时的回调。</h5>
      <div>
        <el-alert class="block"
                  title="不可关闭的 alert"
                  type="success"
                  :closable="false">
        </el-alert>
        <el-alert class="block"
                  title="自定义 close-text"
                  type="info"
                  close-text="知道了">
        </el-alert>
        <el-alert class="block"
                  title="设置了回调的 alert"
                  type="warning"
                  @close="hello">
        </el-alert>
      </div>
      <h4>带有 icon
        <br><small>表示某种状态时提升可读性。</small></h4>
      <h5>通过设置show-icon属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。</h5>
    </el-col>
  </el-row>
</template>

<script>
  import goBack from '../../components/goBack'

  export default {
    name: 'alert',
    data() {
      return {}
    },
    components: {
      goBack
    },
    methods: {
      hello() {
        alert('Hello World!')
      }
    }
  }
</script>

<style scoped>

</style>

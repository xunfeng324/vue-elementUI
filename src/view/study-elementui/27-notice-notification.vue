<template>
  <el-row :gutter="10">
    <el-col :span="8" :offset="0">
      <go-back></go-back>
      <h2>Notification 通知</h2>
      <h5>悬浮出现在页面角落，显示全局的通知提醒消息。</h5>
      <h4>基本用法<br><small>适用性广泛的通知栏</small></h4>
      <h5>Notification 组件提供通知功能，Element
        注册了$notify方法，接收一个options字面量参数，在最简单的情况下，你可以设置title字段和message字段，用于设置通知的标题和正文。默认情况下，经过一段时间后 Notification
        组件会自动关闭，但是通过设置duration，可以控制关闭的时间间隔，特别的是，如果设置为0，则不会自动关闭。注意：duration接收一个Number，单位为毫秒，默认为4500。</h5>
      <div>
        <el-button size="mini" plain @click="open1"> 可自动关闭</el-button>
        <el-button size="mini" plain @click="open2">不可自动关闭</el-button>
      </div>
      <h4>带有倾向性<br><small>带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息</small></h4>
      <h5>Element 为 Notification 组件准备了四种通知类型：success, warning, info, error。通过type字段来设置，除此以外的值将被忽略。同时，我们也为 Notification
        的各种 type 注册了方法，可以在不传入type字段的情况下像open3和open4那样直接调用。</h5>
      <div>
        <el-button size="mini" type="success" plain @click="open3">成功</el-button>
        <el-button size="mini" type="warning" plain @click="open4">警告</el-button>
        <el-button size="mini" type="info" plain @click="open5">消息</el-button>
        <el-button size="mini" type="danger" plain @click="open6">错误</el-button>
      </div>
    </el-col>
    <el-col :span="8">
      <h4>自定义弹出位置<br><small>可以让 Notification 从屏幕四角中的任意一角弹出</small></h4>
      <h5>使用position属性定义 Notification 的弹出位置，支持四个选项：top-right、top-left、bottom-right、bottom-left，默认为top-right。</h5>
      <div>
        <el-button size="mini" type="success" plain @click="open7">右上角</el-button>
        <el-button size="mini" type="warning" plain @click="open8">右下角</el-button>
        <el-button size="mini" type="info" plain @click="open9">左上角</el-button>
        <el-button size="mini" type="danger" plain @click="open10">左下角</el-button>
      </div>
      <h4>带有偏移<br><small>让 Notification 偏移一些位置</small></h4>
      <h5>Notification 提供设置偏移量的功能，通过设置 offset 字段，可以使弹出的消息距屏幕边缘偏移一段距离。注意在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量。</h5>
      <div>
        <el-button size="mini" type="success" plain @click="open11">带有偏移的消息</el-button>
      </div>
      <h4>使用 HTML 片段<br><small>message 属性支持传入 HTML 片段</small></h4>
      <h5>将dangerouslyUseHTMLString属性设置为 true，message 就会被当作 HTML 片段处理。</h5>
      <div>
        <el-button size="mini" type="success" plain @click="open12">使用 HTML 片段</el-button>

      </div>
    </el-col>
    <el-col :span="8">
      <h4>隐藏关闭按钮<br><small>可以不显示关闭按钮</small></h4>
      <h5>将showClose属性设置为false即可隐藏关闭按钮。</h5>
      <div>
        <el-button size="mini" type="success" plain @click="open13">隐藏关闭按钮</el-button>
      </div>

      <h4>全局方法</h4>
      <p>Element 为 Vue.prototype 添加了全局方法 $notify。因此在 vue instance 中可以采用本页面中的方式调用 Notification。</p>
    </el-col>
  </el-row>
</template>

<script>
  import goBack from '../../components/goBack'

  export default {
    name: 'notification',
    data() {
      return {}
    },
    components: {
      goBack
    },
    methods: {
      open1() {
        const h = this.$createElement;//this.$createElement创建元素

        this.$notify({
          title: '标题名称',
          message: h('i', {style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
        });
      },
      open2() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
      },
      open3() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },

      open4() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
      },

      open5() {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        });
      },

      open6() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      },
      open7() {
        this.$notify.success({
          title: '右上角',
          message: '这是一条右上角的提示消息',
          position: 'top-right'
        });
      },
      open8() {
        this.$notify.success({
          title: '右下角',
          message: '这是一条右下角的提示消息',
          position: 'bottom-right'
        });
      },
      open9() {
        this.$notify.success({
          title: '左上角',
          message: '这是一条左上角的提示消息',
          position: 'top-left'
        });
      },
      open10() {
        this.$notify.success({
          title: '左下角',
          message: '这是一条左下角的提示消息',
          position: 'bottom-left'
        });
      },
      open11() {
        this.$notify.success({
          title: '偏移量',
          message: '这是一条带有便宜offset提示消息',
          offset: 500
        });
      },
      open12() {
        this.$notify({
          title: 'HTML 片段',
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i style="color: red">HTML</i> 片段</strong>'
        });
      },
      open13() {
        this.$notify.success({
          title: '隐藏关闭按钮',
          message: '这是一个隐藏关闭按钮的消息',
          showClose: false
        })
      }
    }
  }
</script>

<style scoped>

</style>

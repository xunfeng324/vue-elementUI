<template>
  <el-row>
    <el-col :span="6" :offset="0">
      <go-back></go-back>
      <h2>Message 消息提示</h2>
      <h5>常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。</h5>
      <h4>基础用法<br><small>从顶部出现，3 秒后自动消失</small></h4>
      <h5>Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释，文末有 options 列表，可以结合 Notification 的文档理解它们。Element
        注册了一个$message方法用于调用，Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。</h5>
      <div>
        <el-button :plain="true" @click="open">打开消息提示</el-button>
        <el-button :plain="true" @click="openVn">VNode</el-button>
      </div>

      <h4>不同状态<br><small>用来显示「成功、警告、消息、错误」类的操作反馈。</small></h4>
      <h5>当需要自定义更多属性时，Message 也可以接收一个对象为参数。比如，设置type字段可以定义不同的状态，默认为info。此时正文内容以message的值传入。同时，我们也为 Message 的各种 type
        注册了方法，可以在不传入type字段的情况下像open4那样直接调用。</h5>
      <div>
        <el-button :plain="true" @click="open2">成功</el-button>
        <el-button :plain="true" @click="open3">警告</el-button>
        <el-button :plain="true" @click="open1">消息</el-button>
        <el-button :plain="true" @click="open4">错误</el-button>
      </div>
      <h4>¶可关闭<br><small></small></h4>
      <h5>默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用showClose字段。此外，和 Notification 一样，Message
        拥有可控的duration，设置0为不会被自动关闭，默认为 3000 毫秒。</h5>

      <div>
        <el-button :plain="true" @click="open11">消息</el-button>
        <el-button :plain="true" @click="open21">成功</el-button>
        <el-button :plain="true" @click="open31">警告</el-button>
        <el-button :plain="true" @click="open41">错误</el-button>
      </div>
    </el-col>
    <el-col :span="6">
      <h4>文字居中<br><small>使用 center 属性让文字水平居中。</small></h4>
      <h5></h5>
      <div>
        <el-button :plain="true" @click="openCenter">文字居中</el-button>
      </div>
      <h4>使用 HTML 片段<br><small> message 属性支持传入 HTML 片段</small></h4>
      <h5>将dangerouslyUseHTMLString属性设置为 true，message 就会被当作 HTML 片段处理。</h5>
      <div>
        <el-button :plain="false" @click="openHTML">使用 HTML 片段 :plain="false"</el-button>
        <el-button :plain="true" @click="openHTML">使用 HTML 片段 :plain="true"</el-button>
      </div>
      <div>
        <textarea style="width: 90%;height: 250px">
          全局方法
Element 为 Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用 Message。

¶单独引用
单独引入 Message：

import { Message } from 'element-ui';
此时调用方法为 Message(options)。我们也为每个 type 定义了各自的方法，如 Message.success(options)。并且可以调用 Message.closeAll() 手动关闭所有实例。
        </textarea>
      </div>
    </el-col>

  </el-row>
</template>

<script>
  import goBack from '../../components/goBack'

  export default {
    name: 'message',
    data() {
      return {}
    },
    components: {
      goBack
    },
    methods: {
      open() {
        this.$message('这是一条消息提示');
      },

      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', {style: 'color: teal'}, 'VNode')
          ])
        });
      },
      open1() {
        this.$message('这是一条消息提示');
      },
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('错了哦，这是一条错误消息');
      },
      /*---------------*/
      open11() {
        this.$message({
          showClose: true,
          message: '这是一条消息提示'
        });
      },

      open21() {
        this.$message({
          showClose: true,
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open31() {
        this.$message({
          showClose: true,
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open41() {
        this.$message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
      },
      openCenter() {
        this.$message({
          showClose: true,
          message: '文字居中',
          type: 'success',
          center: true
        })
      },
      openHTML() {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>'
        });
      }


    }
  }
</script>

<style scoped>

</style>


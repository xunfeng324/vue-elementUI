<template>
  <el-row>
    <el-col :span="8" :offset="0">
      <go-back></go-back>
      <h2>Badge 标记</h2>
      <h5>出现在按钮、图标旁的数字或状态标记。</h5>
      <h4>¶基础用法<br><small>展示新消息数量。</small></h4>
      <h5>定义value属性，它接受Number或者String。</h5>
      <div>
        <el-badge :value="12" class="item" type="success">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="3" class="item" type="danger">
          <el-button size="small">回复</el-button>
        </el-badge>
        <el-badge :value="1" class="item" type="primary">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="1" class="item" type="info">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="2" class="item" type="warning">
          <el-button size="small">回复</el-button>
        </el-badge>

        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="clearfix">
              评论
              <el-badge class="mark" :value="12"/>
            </el-dropdown-item>
            <el-dropdown-item class="clearfix">
              回复
              <el-badge class="mark" :value="3"/>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <h4>¶最大值<br><small>可自定义最大值。</small></h4>
      <h5>属性定义，它接受一个Number，需要注意的是，只有当value为Number时，它才会生效。</h5>
      <div>
        <el-badge :value="21" :max="10" class="item">
          <el-button size="small">最大</el-button>
        </el-badge>
        <el-badge :value="200" :max="99" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="100" :max="10" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>
      </div>
    </el-col>
    <el-col :span="8">
      <h4>自定义内容<br><small>可以显示数字以外的文本内容。</small></h4>
      <h5>定义value为String类型是时可以用于显示自定义文本。</h5>
      <div>
        <el-badge value="new" class="item" type="primary">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge value="hot" class="item" type="info">
          <el-button size="small">回复</el-button>
        </el-badge>
      </div>
      <h4>小红点<br><small>以红点形式标注需要关注的类内容</small></h4>
      <h5>除了数字外，设置is-dot属性，它接受一个Boolean。</h5>
      <div>
        <el-badge is-dot type="warning">
          <el-button size="mini">连接</el-button>
        </el-badge>
      </div>
      <p>type	类型	string	primary / success / warning / danger / info</p>

    </el-col>
  </el-row>
</template>

<script>
  import goBack from '../../components/goBack'

  export default {
    name: 'badge',
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
  .item {
    margin-top: 10px;
    margin-right: 25px;
  }
</style>

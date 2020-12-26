<template>
  <el-row :gutter="10">
    <el-col :span="8" :offset="0">
      <go-back></go-back>
      <h2>Steps 步骤条</h2>
      <h5>引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。</h5>
      <h4>基础用法&nbsp;<small>简单的步骤条。</small></h4>
      <h5>设置active属性，接受一个Number，表明步骤的 index，从 0
        开始。需要定宽的步骤条时，设置space属性即可，它接受Number，单位为px，如果不设置，则为自适应。设置finish-status属性可以改变已经完成的步骤的状态。</h5>
      <div>
        <el-steps :active="active" finish-status="success">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>
        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
      </div>
      <h4>含状态步骤条&nbsp;<small> 每一步骤显示出该步骤的状态。</small></h4>
      <h5>也可以使用title具名分发，可以用slot的方式来取代属性的设置，在本文档最后的列表中有所有的 slot name 可供参考。</h5>
      <div>
        <el-steps :space="200" :active="active1" finish-status="success">
          <el-step title="已完成"></el-step>
          <el-step title="进行中"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>
        <el-button style="margin-top: 12px;" @click="next1">下一步</el-button>
      </div>
    </el-col>
    <el-col :span="8">
      <h4>有描述的步骤条&nbsp;<small> 每个步骤有其对应的步骤状态描述。 </small></h4>
      <div>
        <el-steps :active="1">
          <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤 3" description="这段就没那么长了"></el-step>
        </el-steps>
      </div>
      <h4>¶居中的步骤条&nbsp;<small> 标题和描述都将居中。 </small></h4>
      <div>
        <el-steps :active="2" align-center>
          <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
        </el-steps>
      </div>
      <h4>¶带图标的步骤条&nbsp;<small> 步骤条内可以启用各种自定义的图标。</small></h4>
      <h5>通过icon属性来设置图标，图标的类型可以参考 Icon 组件的文档，除此以外，还能通过具名slot来使用自定义的图标。</h5>
      <div>
        <el-steps :active="1">
          <el-step title="步骤 1" icon="el-icon-edit"></el-step>
          <el-step title="步骤 2" icon="el-icon-upload"></el-step>
          <el-step title="步骤 3" icon="el-icon-picture"></el-step>
        </el-steps>
      </div>
    </el-col>
    <el-col :span="8">
      <h4>竖式步骤条 &nbsp;<small>竖直方向的步骤条。</small></h4>
      <h5>只需要在el-steps元素中设置direction属性为vertical即可。</h5>
      <div style="height: 300px;">
        <el-steps direction="vertical" :active="1">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
        </el-steps>
      </div>
      <h4>简洁风格的步骤条&nbsp;<small> 设置 simple 可应用简洁风格，该条件下 align-center / description / direction / space 都将失效。</small></h4>
      <h5>设置 simple 可应用简洁风格，该条件下 align-center / description / direction / space 都将失效。</h5>
      <el-steps :active="1" simple>
        <el-step title="步骤 1" icon="el-icon-edit"></el-step>
        <el-step title="步骤 2" icon="el-icon-upload"></el-step>
        <el-step title="步骤 3" icon="el-icon-picture"></el-step>
      </el-steps>

      <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
    </el-col>
  </el-row>
</template>

<script>
  import goBack from '../../components/goBack'

  export default {
    name: 'steps',
    data() {
      return {
        active: 0,
        active1: 0
      }
    },
    components: {
      goBack
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
      next1() {
        if (this.active1++ > 2) this.active1 = 0;
      }
    }
  }
</script>

<style scoped>

</style>

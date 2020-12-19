<template>
  <el-row :gutter="20">
    <el-col :span="6" :offset="0">
      <go-back></go-back>
      <h2>Progress 进度条</h2>
      <h4>¶线形进度条</h4>
      <h5>Progress 组件设置percentage属性即可，表示进度条对应的百分比，必填，必须在 0-100。通过 format 属性来指定进度条文字内容。</h5>
      <div>
        <el-progress :percentage="50" class="el-progress-padding"></el-progress>
        <el-progress :percentage="100" :format="format" class="el-progress-padding"></el-progress>
        <el-progress :percentage="100" status="success" class="el-progress-padding"></el-progress>
        <el-progress :percentage="100" status="warning" class="el-progress-padding"></el-progress>
      </div>
      <h4>百分比内显<br><small>百分比不占用额外控件，适用于文件上传等场景。</small></h4>
      <h5>Progress 组件可通过 stroke-width 属性更改进度条的高度，并可通过 text-inside 属性来将进度条描述置于进度条内部。</h5>
      <div>
        <el-progress class="el-progress-padding" :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
        <el-progress class="el-progress-padding" :text-inside="true" :stroke-width="24" :percentage="100"
                     status="success"></el-progress>
        <el-progress class="el-progress-padding" :text-inside="true" :stroke-width="22" :percentage="80"
                     status="warning"></el-progress>
        <el-progress class="el-progress-padding" :text-inside="true" :stroke-width="20" :percentage="50"
                     status="exception"></el-progress>
      </div>
    </el-col>
    <el-col :span="8">
      <h4>自定义颜色
        <br><small> 可以通过 color 设置进度条的颜色，color 可以接受颜色字符串，函数和数组。</small></h4>
      <div>
        <el-progress class="el-progress-padding" :percentage="percentage" :color="customColor"></el-progress>

        <el-progress class="el-progress-padding" :percentage="percentage" :color="customColorMethod"></el-progress>

        <el-progress class="el-progress-padding" :percentage="percentage" :color="customColors"></el-progress>
        <div>
          <el-button-group>
            <el-button icon="el-icon-minus" @click="decrease"></el-button>
            <el-button icon="el-icon-plus" @click="increase"></el-button>
          </el-button-group>
        </div>
      </div>
      <h4>环形进度条<br><small>Progress 组件可通过 type 属性来指定使用环形进度条，在环形进度条中，还可以通过 width 属性来设置其大小。 0% 25%</small></h4>
      <h5></h5>
      <div>
        <el-progress type="circle" :percentage="0"></el-progress>
        <el-progress type="circle" :percentage="25"></el-progress>
        <el-progress type="circle" :percentage="100" status="success"></el-progress>
        <el-progress type="circle" :percentage="70" status="warning"></el-progress>
        <el-progress type="circle" :percentage="50" status="exception"></el-progress>
      </div>
    </el-col>
    <el-col :span="6">
      <h4>仪表盘形进度条</h4>
      <h5>通过 type 属性来指定使用仪表盘形进度条。</h5>
      <div>
        <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
        <div>
          <el-button-group>
            <el-button icon="el-icon-minus" @click="decrease"></el-button>
            <el-button icon="el-icon-plus" @click="increase"></el-button>
          </el-button-group>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import goBack from '../../components/goBack'

  export default {
    name: '',
    data () {
      return {
        percentage: 20,
        customColor: '#409eff',
        customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ],
        percentage: 10,
      }
    },
    components: {
      goBack
    },
    methods: {
      format (percentage) {
        return percentage === 100 ? '满' : `${percentage}%`
      },
      customColorMethod (percentage) {
        if (percentage < 30) {
          return '#909399'
        } else if (percentage < 70) {
          return '#e6a23c'
        } else {
          return '#67c23a'
        }
      },
      increase () {
        this.percentage += 10
        if (this.percentage > 100) {
          this.percentage = 100
        }
      },
      decrease () {
        this.percentage -= 10
        if (this.percentage < 0) {
          this.percentage = 0
        }
      }
    }
  }
</script>

<style scoped>

</style>

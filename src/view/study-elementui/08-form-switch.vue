<template>
  <el-row :gutter="5">
    <el-col :span="6" :offset="0">
      <goBack></goBack>
      <h3>开关</h3>
      <h4>基本用法<br><small>表示两种相互对立的状态间的切换，多用于触发「开/关」。</small></h4><h5>
      绑定v-model到一个Boolean类型的变量。可以使用active-color属性与inactive-color属性来设置开关的背景色。</h5>
      <div>
        <el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </div>
      <h4>文字描述<br><small>使用active-text属性与inactive-text属性来设置开关的文字描述。</small></h4>
      <div>
        <el-switch v-model="value1" active-text="按月付费" inactive-text="按年付费"></el-switch>
        <el-switch
          style="display: block"
          v-model="value2"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-text="按月付费"
          inactive-text="按年付费">
        </el-switch>
      </div>
      <h4>扩展的 value 类型<br><small>设置active-value和inactive-value属性，接受Boolean, String或Number类型的值。</small></h4>
      <div>
        <el-tooltip :content="'Switch value:'+value3" placement="top">
          <el-switch
            v-model="value3"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="100"
            inactive-text="0">
          </el-switch>
        </el-tooltip>
      </div>
      <h4>禁用<br><small>设置disabled属性，接受一个Boolean，设置true即可禁用。</small></h4>
      <div>
        <el-switch
          v-model="value1"
          disabled>
        </el-switch>
        <el-switch
          v-model="value2"
          disabled>
        </el-switch>
      </div>
    </el-col>
    <el-col :span="6">
      <h3>Slider 滑块</h3>
      <h4>基本用法<br><small>通过拖动滑块在一个固定区间内进行选择</small></h4>
      <div>
        <div class="block">
          <span class="demonstration">默认</span>
          <el-slider v-model="value11"></el-slider>
        </div>
        <div class="block">
          <span class="demonstration">自定义初始值</span>
          <el-slider v-model="value21"></el-slider>
        </div>
        <div class="block">
          <span class="demonstration">隐藏 Tooltip</span>
          <el-slider v-model="value31" :show-tooltip="false"></el-slider>
        </div>
        <div class="block">
          <span class="demonstration">格式化 Tooltip</span>
          <el-slider v-model="value41" :format-tooltip="formatTooltip"></el-slider>
        </div>
        <div class="block">
          <span class="demonstration">禁用</span>
          <el-slider v-model="value51" disabled></el-slider>
        </div>
      </div>
      <h4>离散值<br><small>改变step的值可以改变步长，通过设置show-stops属性可以显示间断点</small></h4>
      <div>
        <small>不间断:</small>
        <el-slider v-model="value11" :step="10"></el-slider>
        <small>间断:</small>
        <el-slider v-model="value11" :step="10" show-stops></el-slider>
      </div>
    </el-col>
    <el-col :span="6">
      <h4>带有输入框<br><small>设置show-input属性会在右侧显示一个输入框</small></h4>
      <div>
        <el-slider v-model="value11" show-input></el-slider>
      </div>
      <h4>范围选择<br><small>设置range即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值</small></h4>
      <div>
        <el-slider v-model="value61" range :max="100"></el-slider>
      </div>
      <h4>竖向模式<br><small>设置vertical可使 Slider 变成竖向模式，此时必须设置高度height属性</small></h4>
      <div>
        <el-slider v-model="value61" vertical height="100px"></el-slider>
      </div>
      <h4>展示标记<br><small>设置 marks 属性可以展示标记</small></h4>
      <div>
        <el-slider v-model="value71" range :marks="marks"></el-slider>
      </div>
    </el-col>

  </el-row>
</template>

<script>

  import goBack from "../../components/goBack";

  export default {
    name: 'switch',
    data() {
      return {
        value: true,
        value1: true,
        value2: false,
        value3: '100',
        value11: 0,
        value21: 50,
        value31: 36,
        value41: 48,
        value51: 42,
        value61: [40, 50],
        value71: [30, 60],
        marks: {
          0: '0°C',
          8: '8°C',
          37: '37°C',
          50: {
            style: {
              color: '#1989FA'
            },
            label: this.$createElement('strong', '50%')
          }
        }
      }
    },
    components: {
      goBack
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
</script>

<style scoped>

</style>

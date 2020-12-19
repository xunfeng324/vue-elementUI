<template>
  <div>
    <el-row>
      <el-col :span="6">
        <goBack></goBack>
        <h2>Rate 评分</h2>
        <h4>基本使用<br><small>评分默认被分为三个等级，可以利用颜色数组对分数及情感倾向进行分级（默认情况下不区分颜色）。三个等级所对应的颜色用colors属性设置，而它们对应的两个阈值则通过low-threshold
          和 high-threshold 设定。你也可以通过传入颜色对象来自定义分段，键名为分段的界限值，键值为对应的颜色。</small></h4>
        <div>
          <div class="block"><span class="demonstration">默认不区分颜色</span>
            <el-rate v-model="value1"></el-rate>
          </div>
          <div class="block"><span class="demonstration">区分颜色</span>
            <el-rate v-model="value2" :colors="colors" @change="getVal"></el-rate>
          </div>
        </div>
        <h4>辅助文字<br><small>用辅助文字直接地表达对应分数</small></h4><h5>为组件设置 show-text 属性会在右侧显示辅助文字。通过设置 texts
        可以为每一个分值指定对应的辅助文字。texts 为一个数组，长度应等于最大值 max。</h5>
        <div>
          <el-rate v-model="value1" show-text :texts="texts" :max="4"></el-rate>
        </div>
      </el-col>
      <el-col :span="6"><h4>其它 icon<br><small>当有多层评价时，可以用不同类型的 icon 区分评分层级</small></h4><h5>
        设置icon-classes属性可以自定义不同分段的图标。若传入数组，共有 3 个元素，为
        3个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名。本例还使用void-icon-class指定了未选中时的图标类名。</h5>
        <div>
          <el-rate v-model="value" :icon-classes="iconClasses" void-icon-class="el-icon-collection"
                   :colors="colors"></el-rate>
        </div>
        <h4>只读<br><small>只读的评分用来展示分数，允许出现半星</small></h4><h5>为组件设置 disabled 属性表示组件为只读，支持小数分值。此时若设置
          show-score，则会在右侧显示目前的分值。可以提供 score-template 作为显示模板，模板为一个包含了 {value}的字符串，{value} 会被解析为分值。</h5>
        <div>
          <el-rate disabled v-model="va" show-score text-color="#ff9900" score-template="{va}"></el-rate>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import goBack from '../../components/goBack'

  export default {
    name: 'rate', data() {
      return {
        value: null, value1: null, value2: null, va: 3.9,
        colors: ['#1929bf', '#F7BA2A', '#FF9900'],  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
        texts: ['一', '二', '三', '四'],
        iconClasses: ['el-icon-collection', 'el-icon-files', 'el-icon-toilet-paper'], // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }

      }
    },
    components: {
      goBack
    },
    methods: {
      getVal() {
        console.log(this.value2);
      }

    }

  }
</script>

<style scoped>

</style>

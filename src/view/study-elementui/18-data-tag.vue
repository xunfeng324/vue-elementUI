<template>
  <el-row>
    <el-col :span="6" :offset="0">
      <go-back></go-back>
      <h2>Tag 标签</h2><h4>基础用法</h4><h5>由type属性来选择tag的类型，也可以通过color属性来自定义背景色。</h5>
      <div>
        <el-tag>标签一</el-tag>
        <el-tag type="success">标签二</el-tag>
        <el-tag type="info">标签三</el-tag>
        <el-tag type="warning">标签四</el-tag>
        <el-tag type="danger">标签五</el-tag>
      </div>
      <h4>可移除标签</h4><h5>设置closable属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置disable-transitions属性，它接受一个Boolean，true
      为关闭。</h5>
      <div>
        <el-tag v-for="tag1 in tags" closable :key="tag1.name" :type="tag1.type">{{tag1.name}}</el-tag>
      </div>
      <h4>动态编辑标签<br><small>态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现</small></h4><h5></h5>
      <div>
        <el-tag v-for="tag2 in dynamicTags" :key="tag2" closable :disable-transitions="false"
                @close="handleClose(tag2)">{{tag2}}
        </el-tag>
        <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small"
                  @keyup.enter.native="
        handleInputConfirm" @blur="handleInputConfirm"></el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
      </div>
    </el-col>
    <el-col :span="6"><h4>不同尺寸<br><small>Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</small></h4><h5>
      额外的尺寸：medium、small、mini，通过设置size属性来配置它们。</h5>
      <div>
        <el-tag closable @click="clickTag">默认标签</el-tag>
        <el-tag size="medium" closable @close="closeTag">中等标签</el-tag>
        <el-tag size="small" closable>小型标签</el-tag>
        <el-tag size="mini" closable>超小标签</el-tag>
      </div>
      <h4>不同主题<br><small>Tag 组件提供了三个不同的主题：dark、light 和 plain</small></h4><h5>通过设置effect属性来改变主题，默认为 light</h5>
      <div>
        <div class="tag-group"><span class="tag-group__title">dark</span>
          <el-tag class="tag-group-body"
                  v-for="item in items"
                  :key="item.label"
                  :type="item.type"
                  effect="dark">
            {{ item.label }}
          </el-tag>
        </div>
        <div class="tag-group">
          <span class="tag-group__title">light</span>
          <el-tag class="tag-group-body"
                  v-for="item in items"
                  :key="item.label"
                  :type="item.type"
                  effect="light">
            {{ item.label }}
          </el-tag>
        </div>
        <div class="tag-group">
          <span class="tag-group__title">Plain</span>
          <el-tag class="tag-group-body"
                  v-for="item in items"
                  :key="item.label"
                  :type="item.type"
                  effect="plain">
            {{ item.label }}
          </el-tag>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import goBack from '../../components/goBack'

  const tags = [
    {name: '标签一', type: ''},
    {name: '标签二', type: 'success'},
    {name: '标签三', type: 'info'},
    {name: '标签四', type: 'warning'},
    {name: '标签五', type: 'danger'}
  ]
  const items = [
    {type: '', label: '标签一'},
    {type: 'success', label: '标签二'},
    {type: 'info', label: '标签三'},
    {type: 'danger', label: '标签四'},
    {type: 'warning', label: '标签五'}
  ]
  export default {
    name: 'tag',
    data() {
      return {
        tags,
        items,
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: ''
      }
    },
    components: {
      goBack
    },
    methods: {
      closeTag(tag) {
        console.log(tag)
      },
      clickTag() {
        alert("点击")
      },
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
      },

      showInput() {
        this.inputVisible = true
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus()
        })
      },

      handleInputConfirm() {
        let inputValue = this.inputValue
        if (inputValue) {
          this.dynamicTags.push(inputValue)
        }
        this.inputVisible = false
        this.inputValue = ''
      }
    }
  }
</script>

<style scoped>

</style>

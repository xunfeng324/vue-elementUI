<template>
  <el-row :gutter="5">
    <el-col :span="6" :offset="0">
      <goBack></goBack>
      <h3>Cascader 级联选择器</h3><small>当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。</small>
      <h4>基础用法<br><small>只需为 Cascader 的options属性指定选项数组即可渲染出一个级联选择器。通过props.expandTrigger可以定义展开子级菜单的触发方式。</small></h4>
      <div class="block">
        <p class="demonstration">默认 click 触发子菜单</p>
        <el-cascader
          v-model="value"
          :options="options"
          @change="handleChange"></el-cascader>
      </div>
      <br>
      <div class="block">
        <p class="demonstration">hover 触发子菜单</p>
        <el-cascader
          v-model="value"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"></el-cascader>
      </div>
      <h4>禁用选项<br><small>options指定的数组中的第一个元素含有disabled: true键值对，因此是禁用的。在默认情况下，Cascader
        会检查数据中每一项的disabled字段是否为true，如果你的数据中表示禁用含义的字段名不为disabled，可以通过props.disabled属性来指定（详见下方 API
        表格）。当然，value、label和children这三个字段名也可以通过同样的方式指定。</small></h4>
      <div>
        <el-cascader :options="options"></el-cascader>
      </div>
    </el-col>
    <el-col :span="6">
      <h4>可清空<br><small>通过 clearable 设置输入框可清空</small></h4>
      <div>
        <el-cascader :options="options" clearable></el-cascader>
      </div>
      <h4>仅显示最后一级<br><small>属性show-all-levels定义了是否显示完整的路径，将其赋值为false则仅显示最后一级</small></h4>
      <div>
        <el-cascader :options="options" clearable :show-all-levels="false"></el-cascader>
      </div>
      <h4>多选<br><small>可通过 props.multiple = true 来开启多选模式</small></h4>
      <div>
        <div class="block">
          <p class="demonstration">默认显示所有Tag</p>
          <el-cascader
            :options="options"
            :props="props"
            clearable></el-cascader>
        </div>
        <div class="block">
          <p class="demonstration">折叠展示Tag</p>
          <el-cascader
            :options="options"
            :props="props"
            collapse-tags
            clearable></el-cascader>
        </div>
      </div>
      <h4>选择任意一级选项<br><small>在单选模式下，你只能选择叶子节点；而在多选模式下，勾选父节点真正选中的都是叶子节点。启用该功能后，可让父子节点取消关联，选择任意一级选项。</small></h4>
      <h5>可通过 props.checkStrictly = true 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。</h5>
      <div>
        <div class="block">
          <p class="demonstration">单选选择任意一级选项</p>
          <el-cascader
            :options="options"
            :props="{ checkStrictly: true }"
            clearable></el-cascader>
        </div>
        <div class="block">
          <p class="demonstration">多选选择任意一级选项</p>
          <el-cascader
            :options="options"
            :props="{ multiple: true, checkStrictly: true }"
            clearable></el-cascader>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <h4>动态加载
        <small><br>当选中某一级时，动态加载该级下的选项。</small></h4>
      <h5>
        通过lazy开启动态加载，并通过lazyload来设置加载数据源的方法。lazyload方法有两个参数，第一个参数node为当前点击的节点，第二个resolve为数据加载完成的回调(必须调用)。为了更准确的显示节点的状态，还可以对节点数据添加是否为叶子节点的标志位
        (默认字段为leaf，可通过props.leaf修改)，否则会简单的以有无子节点来判断是否为叶子节点。</h5>
      <div>
        <el-cascader :props="props1" :options="options"></el-cascader>
      </div>

      <h4>可搜索<br><small>将filterable赋值为true即可打开搜索功能，默认会匹配节点的label或所有父节点的label(由show-all-levels决定)中包含输入值的选项。你也可以用filter-method自定义搜索逻辑，接受一个函数，第一个参数是节点node，第二个参数是搜索关键词keyword，通过返回布尔值表示是否命中。</small></h4>
      <div>
        <div class="block">
          <p class="demonstration">单选可搜索</p>
          <el-cascader
            placeholder="试试搜索：指南"
            :options="options"
            filterable></el-cascader>
        </div>
        <div class="block">
          <p class="demonstration">多选可搜索</p>
          <el-cascader
            placeholder="试试搜索：指南"
            :options="options"
            :props="{ multiple: true }"
            filterable></el-cascader>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <h4>自定义节点内容<br><small>可以自定义备选项的节点内容</small></h4>
      <h5>可以通过scoped slot对级联选择器的备选项的节点内容进行自定义，scoped slot会传入两个字段 node 和 data，分别表示当前节点的 Node 对象和数据。</h5>
      <div>
        <el-cascader :options="options">
          <template slot-scope="{ node, data }">
            <span>{{ data.label }}</span>
            <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
          </template>
        </el-cascader>
      </div>
      <h4>级联面板<br><small>级联面板是级联选择器的核心组件，与级联选择器一样，有单选、多选、动态加载等多种功能。</small></h4>
      <h5>和级联选择器一样，通过options来指定选项，也可通过props来设置多选、动态加载等功能，具体详情见下方API表格。</h5>
      <div>
        <el-cascader-panel :options="options"></el-cascader-panel>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import goBack from '../../components/goBack'
  let id = 0;
  export default {
    name: 'cascader ',
    data () {
      return {
        props: {multiple: true},
        props1: {
          lazy: true,
          lazyLoad (node, resolve) {
            const {level} = node
            setTimeout(() => {
              const nodes = Array.from({length: level + 1})
                .map(item => ({
                  value: ++id,
                  label: `选项${id}`,
                  leaf: level >= 2
                }))
              // 通过调用resolve将子节点数据返回，通知组件数据加载完成
              resolve(nodes)
            }, 1000)
          }
        },
        value: [],
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            disabled: true,
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
      }
    },
    components:{
      goBack
    },
    methods: {
      handleChange (value) {
        console.log(value)
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <el-row>
    <el-col :span="6">
      <goBack></goBack>
      <h4>基本选择框</h4>
      <div>
        <el-select v-model="value" size="small" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <h4>有禁用项</h4>
      <div>
        <el-select v-model="value" size="small" placeholder="请选择">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">
          </el-option>
        </el-select>
      </div>
      <h4>禁用状态<small> 为el-select设置disabled属性，则整个选择器不可用</small></h4>
      <div>
        <el-select v-model="value" disabled size="small" placeholder="请选择">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">
          </el-option>
        </el-select>
      </div>
      <h4>可清空选项<small>为el-select设置clearable属性，则可将选择器清空。需要注意的是，clearable属性仅适用于单选。</small></h4>
      <div>
        <el-select v-model="value" clearable size="small" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">
          </el-option>
        </el-select>
      </div>
      <h4>基础多选<small>为el-select设置multiple属性即可启用多选，此时v-model的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置collapse-tags属性将它们合并为一段文字。</small></h4>
      <div>
        <el-select v-model="value1" multiple collapse-tags placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <div><br></div>
        <el-select v-model="value2" multiple  placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </el-col>
    <el-col :span="6">
      <h4>自定义模板</h4>
      <div>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
      </div>
      <div><br></div>
      <div>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            <my-component :vData="item"></my-component>
          </el-option>
        </el-select>
      </div>
      <h4>分组<small>使用el-option-group对备选项进行分组，它的label属性为分组名</small></h4>
      <div>
        <el-select v-model="value" placeholder="请选择">
          <el-option-group
            v-for="group in options3"
            :key="group.label"
            :label="group.label">
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-option-group>
        </el-select>
      </div>
      <h4>可搜索的下拉选 <br><small>为el-select添加filterable属性即可启用搜索功能。默认情况下，Select 会找出所有label属性包含输入值的选项。如果希望使用其他的搜索逻辑，可以通过传入一个filter-method来实现。filter-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值。</small></h4>
      <div>
        <el-select v-model="value" filterable :filter-method="filterableFun" placeholder="请选择">
          <el-option
            v-for="items in options"
            :value="items.value"
            :label="items.label"
            :key="items.value">
          </el-option>
        </el-select>
      </div>
    </el-col>
    <el-col :span="6">
      <h4>远程搜索<br><small>为了启用远程搜索，需要将filterable和remote设置为true，同时传入一个remote-method。remote-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值。需要注意的是，如果el-option是通过v-for指令渲染出来的，此时需要为el-option添加key属性，且其值需具有唯一性，比如此例中的item.value。</small></h4>
      <div>
        <el-select v-model="value"  multiple filterable remote reserve-keyword placeholder="请输入关键词"
          :remote-method="remoteMethod"
          :loading="loading">
          <el-option
            v-for="item in soptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <h4>创建条目<br><small>使用allow-create属性即可通过在输入框中输入文字来创建新的条目。注意此时filterable必须为真。本例还使用了default-first-option属性，在该属性打开的情况下，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。</small></h4>
      <div>
        <el-select
          v-model="value"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请选择文章标签">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import goBack from '../../components/goBack'
  const val = [{
    value: '选项1',
    label: '黄金糕'
  }, {
    value: '选项2',
    label: '双皮奶',
  }, {
    value: '选项3',
    label: '蚵仔煎'
  }];
  const val1 = [
    {
      value: '选项3',
      label: '蚵仔煎'
    }, {
      value: '选项4',
      label: '龙须面',
      disabled: true
    }, {
      value: '选项5',
      label: '北京烤鸭'
    }
  ];
  const val2 = [{
    value: 'Beijing',
    label: '北京'
  }, {
    value: 'Shanghai',
    label: '上海'
  }, {
    value: 'Nanjing',
    label: '南京'
  }, {
    value: 'Chengdu',
    label: '成都'
  }, {
    value: 'Shenzhen',
    label: '深圳'
  }, {
    value: 'Guangzhou',
    label: '广州'
  }];
  const val3 = [{
    label: '热门城市',
    options: [{
      value: 'Shanghai',
      label: '上海'
    }, {
      value: 'Beijing',
      label: '北京'
    }]
  }, {
    label: '城市名',
    options: [{
      value: 'Chengdu',
      label: '成都'
    }, {
      value: 'Shenzhen',
      label: '深圳'
    }, {
      value: 'Guangzhou',
      label: '广州'
    }, {
      value: 'Dalian',
      label: '大连'
    }]
  }];
  const val4 = ["Alabama", "Alaska", "Arizona",
    "Arkansas", "California", "Colorado",
    "Connecticut", "Delaware", "Florida",
    "Georgia", "Hawaii", "Idaho", "Illinois",
    "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota",
    "Mississippi", "Missouri", "Montana",
    "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York",
    "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania",
    "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas",
    "Utah", "Vermont", "Virginia",
    "Washington", "West Virginia", "Wisconsin",
    "Wyoming"];
  const temp1 = {
    props: ['vData'],
    template:` <div><span style="float: left">{{ vData.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ vData.value }}</span></div>`
  }
  export default {
    name: 'select',
    data () {
      return {
        options: val,
        options1: val1,
        cities :val2,
        options3: val3,
        value: '',
        value1: [],
        value2: [],
        //远程搜索
        soptions: [],
        svalue: [],
        slist: [],
        sloading: false,
        states :val4
      }
    },
    components: {
      'my-component': temp1,
      goBack
    },
    methods: {
      filterableFun(query){
        alert(query)
      },
      remoteMethod (query) {
        if (query !== '') {
          this.sloading = true
          setTimeout(() => {
            this.sloading = false
            this.soptions = this.slist.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1
            })
          }, 200)
        } else {
          this.soptions = []
        }
      }
    },

    mounted() {
      this.slist = this.states.map(item => {
        return { value: `value:${item}`, label: `label:${item}` };
      });
    },
  }
</script>

<style scoped>

</style>

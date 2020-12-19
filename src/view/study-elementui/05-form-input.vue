<template>
  <el-row :gutter="10">
    <goBack></goBack>
    <el-col :span="6">
      <h4>基本输入框</h4>
      <div>
        <el-input v-model="input" @blur="loseFocus" @focus="getFocus"  placeholder="请输入内容" size="small"></el-input>
        <el-input v-model="input" @change="changeValue"  placeholder="请输入内容" size="small"></el-input>
      </div>
      <h4>禁用</h4>
      <div>
        <el-input v-model="input" :disabled="true" placeholder="请输入内容" size="small"></el-input>
      </div>
      <h4>可清空</h4>
      <div>
        <el-input v-model="input" placeholder="内容" clearable size="small"></el-input>
      </div>
      <h4>密码框</h4>
      <div>
        <el-input type="password" show-password v-model="password" placeholder="内容" size="small"></el-input>
      </div>
      <h4>带icon 的输入框</h4>
      <div>
        <el-row :gutter="10">
          <el-col :span="6">属性方式：</el-col>
          <el-col :span="9">
            <el-input
              placeholder="请选择日期"
              suffix-icon="el-icon-date"
              v-model="input1">
            </el-input>
          </el-col>
          <el-col :span="9">
            <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="input2">
            </el-input>
          </el-col>
        </el-row>
      </div>
      <div style="margin-top: 10px">
        <el-row :gutter="10">
          <el-col :span="6"> slot 方式：</el-col>
          <el-col :span="9">
            <el-input
              placeholder="请选择日期"
              v-model="input3">
              <i slot="suffix" class="el-input__icon el-icon-date"></i>
            </el-input>
          </el-col>
          <el-col :span="9">
            <el-input
              placeholder="请输入内容"
              v-model="input4">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-col>
        </el-row>
      </div>

      <h4>文本框 /文本域高度可通过 rows 属性控制</h4>
      <div>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input>
      </div>

    </el-col>
    <el-col :span="6">
      <h4>可自适应文本高度的文本域</h4>
      <div>
        <el-input
          type="textarea"
          autosize
          placeholder="请输入内容"
          v-model="textarea1">
        </el-input>
        <div style="margin: 20px 0;"></div>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          v-model="textarea2">
        </el-input>
      </div>

      <h4>复合型输入框 /可前置或后置元素，一般为标签或按钮</h4>
      <div>
        <div>
          <el-input placeholder="请输入内容" v-model="input1">
            <template slot="prepend">Http://</template>
          </el-input>
        </div>
        <div style="margin-top: 15px;">
          <el-input placeholder="请输入内容" v-model="input2">
            <template slot="append">.com</template>
          </el-input>
        </div>
        <div style="margin-top: 15px;">
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>

      <h4>输入框尺寸</h4>
      <small>可通过 size 属性指定输入框的尺寸，除了默认的大小外，还提供了 large、small 和 mini 三种尺寸。</small>
      <div id="inputSize">
        <el-input v-model="input" placeholder="内容" size=""></el-input>
        <hr>
        <el-input v-model="input" placeholder="内容" size="large"></el-input>
        <hr>
        <el-input v-model="input" placeholder="内容" size="small"></el-input>
        <hr>
        <el-input v-model="input" placeholder="内容" size="mini"></el-input>
        <hr>
      </div>

    </el-col>
    <el-col :span="6">
      <h4>自定义模板</h4><small>使用scoped slot自定义输入建议的模板。该 scope 的参数为item，表示当前输入建议对象。</small>
      <div>
        <el-autocomplete
          popper-class="my-autocomplete"
          v-model="state"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          @select="handleSelect">
          <i
            class="el-icon-edit el-input__icon"
            slot="suffix"
            @click="handleIconClick">
          </i>
          <template slot-scope="{ item }">
            <div class="name">{{ item.value }}</div>
            <span class="addr">{{ item.address }}</span>
          </template>
        </el-autocomplete>
      </div>
      <h4>输入长度限制 <small>maxlength 和 minlength 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。对于类型为 text 或 textarea 的输入框，在使用
        maxlength 属性限制最大输入长度的同时，可通过设置 show-word-limit 属性来展示字数统计。</small></h4>
      <div>
        <el-input v-model="input" type="text" show-word-limit placeholder="输入限制长度" maxlength="10"></el-input>
      </div>
      <hr>
      <h3 style="color: red">InputNumber 计数器</h3>
      <h4>尺寸 <small>额外提供了 medium、small、mini 三种尺寸的数字输入框</small></h4>
      <div>
        <el-input-number v-model="num" size="medium"></el-input-number><hr>
        <el-input-number v-model="num" size="small"></el-input-number><hr>
        <el-input-number v-model="num" size="mini"></el-input-number><hr>
      </div>
      <h4>按钮位置 <small>设置 controls-position 属性可以控制按钮位置。</small></h4>
      <div>
        <el-input-number v-model="num" size="mini" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
      </div>
    </el-col>
    <el-col :span="6">

      <h4>基本用法</h4>
      <div>
        <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
      </div>
      <h4>禁用状态</h4>
      <small>disabled属性接受一个Boolean，设置为true即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置min属性和max属性，不设置min和max时，最小值为 0。</small>
      <div>
        <el-input-number v-model="num1" :disabled="true"></el-input-number>
      </div>
      <h4>步数</h4>
      <small>设置step属性可以控制步长，接受一个Number。</small>
      <div>
        <el-input-number v-model="num2" :step="3" size="medium" ></el-input-number>
      </div>
      <h4>严格步数</h4>
      <small>step-strictly属性接受一个Boolean。如果这个属性被设置为true，则只能输入步数的倍数。</small>
      <div>
        <el-input-number v-model="num3" :step="3" :step-strictly="true" size="small"></el-input-number>
      </div>
      <h4>精度</h4>
      <small>设置 precision 属性可以控制数值精度，接收一个 Number。</small>
      <div>
        <el-input-number v-model="num4" :step="0.4" :precision="3" size="mini"></el-input-number>
      </div>

    </el-col>
  </el-row>
</template>

<script>
  import goBack from '../../components/goBack'
  const dataGroup = {
    input: "你好",
    password: '',
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    textarea: '',
    textarea1: '',
    textarea2: '',
    select: '',
    restaurants: [],
    state: '1',
    num: '2',
    num1: '1',
    num2: '1',
    num3: '1',
    num4: '2',
  }
  export default {
    name: 'input',
    data () {
      return dataGroup
    },
    components:{
      goBack
    },
    methods: {
      loseFocus(){
          alert('失去焦点');
      },
      getFocus(){
        alert('得到焦点')
      },
      changeValue(currentValue,oldValue){
          alert(oldValue);
          alert(currentValue);
      },
      querySearch (queryString, cb) {
        var restaurants = this.restaurants
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
        // 调用 callback 返回建议列表的数据
        cb(results)
      },
      createFilter (queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
        }
      },
      loadAll () {
        return [
          {'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号'},
          {'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号'},
          {'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113'},
          {'value': '泷千家(天山西路店)', 'address': '天山西路438号'},
          {'value': '胖仙女纸杯蛋糕（上海凌空店）', 'address': '上海市长宁区金钟路968号1幢18号楼一层商铺18-101'}
        ]
      },
      handleSelect (item) {
        console.log(item)
      },
      handleIconClick (ev) {
        console.log(ev)
      },
      //计数器
      handleChange () {
        console.log(this.num)
      }
    },
    mounted () {
      this.restaurants = this.loadAll()
    }
  }
</script>

<style scoped>

</style>

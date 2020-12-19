<template>
  <el-row :gutter="10">
    <el-col :span="6">
      <goBack></goBack>
      <h2>DateTimePicker 日期时间选择器</h2>
      <small>在同一个选择器里选择日期和时间</small>
      <h4>时间点和日期<br><small>通过设置type属性为datetime，即可在同一个选择器里同时进行日期和时间的选择。快捷选项的使用方法与 Date Picker 相同。</small></h4>
      <div>
        <div class="block">
          <span class="demonstration">默认"</span>
          <el-date-picker
            v-model="value1"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">带快捷选项:</span>
          <el-date-picker
            v-model="value2"
            type="datetime"
            placeholder="选择日期时间"
            align="right"
            :picker-options="pickerOptions">
          </el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">设置默认时间:</span>
          <el-date-picker
            v-model="value3"
            type="datetime"
            placeholder="选择日期时间"
            default-time="12:00:00">
          </el-date-picker>
        </div>
      </div>
    </el-col>
    <el-col :span="9">
      <h4>日期和时间范围<br><small>设置type为datetimerange即可选择日期和时间范围</small></h4>
      <div>
        <div class="block">
          <span class="demonstration">默认</span>
          <el-date-picker
            v-model="value11"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">带快捷选项</span>
          <el-date-picker
            v-model="value21"
            type="datetimerange"
            :picker-options="pickerOptions1"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            align="right">
          </el-date-picker>
        </div>
      </div>
    </el-col>
    <el-col :span="9">
      <h4>默认的起始与结束时刻<br><small>使用datetimerange进行范围选择时，在日期选择面板中选定起始与结束的日期，默认会使用该日期的00:00:00作为起始与结束的时刻；通过选项default-time可以控制选中起始与结束日期时所使用的具体时刻。default-time接受一个数组，数组每项值为字符串，形如12:00:00，其中第一项控制起始日期的具体时刻，第二项控制结束日期的具体时刻。</small></h4>
      <div>
        <div class="block">
          <span class="demonstration">起始日期时刻为 12:00:00</span>
          <el-date-picker
            v-model="value111"
            type="datetimerange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['12:00:00']">
          </el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</span>
          <el-date-picker
            v-model="value211"
            type="datetimerange"
            align="right"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['12:00:00', '08:00:00']">
          </el-date-picker>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import goBack from '../../components/goBack'
  export default {
    name: 'dateTimePicker',
    data () {
      return {
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          }, {
            text: '昨天',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          }, {
            text: '一周前',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }]
        },
        value1: '',
        value2: '',
        value3: '',
        pickerOptions1: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value11: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value21: '',
        value111:'',
        value211:'',
      }
    },
    components:{
      goBack
    },
    methods: {}
  }
</script>

<style scoped>

</style>

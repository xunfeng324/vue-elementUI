<template>
  <el-row>
    <el-col :span="6">
      <goBack></goBack>
      <h2>TimePicker 时间选择器</h2><small>用于选择或输入日期</small>
      <h4>固定时间点<br><small>使用 el-time-select 标签，分别通过start、end和step指定可选的起始时间、结束时间和步长</small></h4>
      <div>
        <el-time-select
          size="small"
          v-model="value"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'}"
          placeholder="选择时间">
        </el-time-select>
      </div>
      <h4>任意时间点<br><small>使用 el-time-picker
        标签，通过selectableRange限制可选时间范围。提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开arrow-control属性则通过界面上的箭头进行选择。</small></h4>
      <small>设置选取范围picker-options 下 selectableRange</small>
      <div>
        <el-time-picker
          v-model="value"
          :picker-options="time"
          placeholder="任意时间点"
          size="small">
        </el-time-picker>
        <div><br></div>
        <el-time-picker
          v-model="value1"
          :picker-options="time"
          arrow-control
          placeholder="选择箭头"
          size="small"
        ></el-time-picker>
      </div>
      <h4>固定时间范围<br><small>若先选择开始时间，则结束时间内备选项的状态会随之改变</small></h4>
      <div>
        <el-time-select
          placeholder="起始时间"
          v-model="startTime"
          size="small"
          :picker-options="{
              start: '00:00',
              step: '00:15',
              end: '23:45'}">
        </el-time-select>
        <div><br></div>
        <el-time-select
          placeholder="结束时间"
          size="small"
          v-model="endTime"
          :picker-options="{
            start: '00:00',
            step: '00:15',
            end: '23:45',
            minTime: startTime}">
        </el-time-select>
      </div>
    </el-col>
    <el-col :span="6">
      <h4>任意时间范围<br><small>添加is-range属性即可选择时间范围，同样支持arrow-control属性。</small></h4>
      <div>
        <el-time-picker
          is-range
          v-model="date1"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围">
        </el-time-picker>
        <div><br></div>
        <el-time-picker
          is-range
          arrow-control
          v-model="date2"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围">
        </el-time-picker>
      </div>

      <h2>DatePicker 日期选择器</h2>
      <small>用于选择或输入日期</small>
      <h4>选择日<br><small>以「日」为基本单位，基础的日期选择控件</small><br><small>基本单位由type属性指定。快捷选项需配置picker-options对象中的shortcuts，禁用日期通过
        disabledDate 设置，传入函数</small></h4>
      <div>
        <div class="block">
          <span class="demonstration">默认</span>
          <el-date-picker
            v-model="sdate1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">带快捷选项</span>
          <el-date-picker
            v-model="sdate2"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <h4>其他日期单位<br><small>通过扩展基础的日期选择，可以选择周、月、年或多个日期</small></h4>
      <div>
        <div class="block">
          <span class="demonstration">周:</span>
          <el-date-picker
            v-model="sdate3"
            type="week"
            format="yyyy 第 WW 周"
            placeholder="选择周">
          </el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">月:</span>
          <el-date-picker
            v-model="sdate4"
            type="month"
            placeholder="选择月">
          </el-date-picker>
        </div>
      </div>
      <div class="container">
        <div class="block">
          <span class="demonstration">年:</span>
          <el-date-picker
            v-model="sdate4"
            type="year"
            placeholder="选择年">
          </el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">多个日期:</span>
          <el-date-picker
            type="dates"
            v-model="sdate6"
            placeholder="选择一个或多个日期">
          </el-date-picker>
        </div>
      </div>

      <h4>选择日期范围<br><small>在选择日期范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前月份，可以使用unlink-panels属性解除联动。</small></h4>
      <div>
        <div class="block">
          <span class="demonstration">默认</span>
          <el-date-picker
            v-model="sdate5"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">带快捷选项</span>
          <el-date-picker
            v-model="sdate6"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </div>
      </div>
    </el-col>

    <el-col :span="6">
      <h4>日期格式<br><small>使用format指定输入框的格式；使用value-format指定绑定值的格式.默认情况下，组件接受并返回Date对象</small></h4>
      <div>
        <div class="block">
          <span class="demonstration">默认为 Date 对象</span>
          <div class="demonstration">值：{{ sdate1 }}</div>
          <el-date-picker
            v-model="sdate1"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日">
          </el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">使用 value-format</span>
          <div class="demonstration">值：{{ sdate2 }}</div>
          <el-date-picker
            v-model="sdate2"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">时间戳</span>
          <div class="demonstration">值：{{ sdate3 }}</div>
          <el-date-picker
            v-model="sdate3"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="timestamp">
          </el-date-picker>
        </div>
      </div>
      <h4>默认显示日期<br><small>选择日期范围时，默认情况下，起始日期和结束日期的时间部分均为当天的 0 点 0 分 0 秒。通过default-time可以分别指定二者的具体时刻。default-time接受一个数组，其中的值为形如12:00:00的字符串，第一个值控制起始日期的时刻，第二个值控制结束日期的时刻。</small></h4>
      <div>
        <div class="block">
          <p>组件值：{{ sdate7 }}</p>
          <el-date-picker
            v-model="sdate7"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['00:00:00', '23:59:59']">
          </el-date-picker>
        </div>
      </div>
    </el-col>

  </el-row>
</template>

<script>
  import goBack from '../../components/goBack'
  const timeRange = {
    selectableRange: '8:30:00 - 20:30:00'
  }
  export default {
    name: 'dataAndTime',
    data () {
      return {
        value: '',
        value1: '',
        time: timeRange,
        startTime: '',
        endTime: '',
        date1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        date2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        sdate1: '',
        sdate2: '',
        pickerOptions: {
          disabledDate (time) {
            return time.getTime() > Date.now()
          },
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
        sdate3: '',
        sdate4: '',
        sdate5: '',
        sdate6: '',
        sdate7: '',
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

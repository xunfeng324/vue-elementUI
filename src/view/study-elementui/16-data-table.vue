<template>
  <el-row :gutter="10">
    <el-col :span="8" :offset="0">
      <go-back></go-back>
      <h2>Table 表格</h2>
      <h4>基础表格<br><small>用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。</small></h4>
      <h5>当el-table元素中注入data对象数组后，在el-table-column中用prop属性来对应对象中的键名即可填入数据，用label属性来定义表格的列名。可以使用width属性来定义列宽。</h5>
      <div>
        <el-table
          :data="tableData"
          style="width: 100%"
          stripe
          border>
          <el-table-column prop="date" label="日期" width="120"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </div>
      <h4>带斑马纹表格<br><small>使用带斑马纹的表格，可以更容易区分出不同行的数据。</small></h4>
      <h5>stripe属性可以创建带斑马纹的表格。它接受一个Boolean，默认为false，设置为true即为启用。</h5>
      <h4>带边框表格<br><small></small></h4>
      <h5>默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用border属性，它接受一个Boolean，设置为true即可启用</h5>

    </el-col>
    <el-col :span="8">
      <h4>带状态表格<br><small>可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。</small></h4>
      <h5>可以通过指定 Table 组件的 row-class-name 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。</h5>
      <div>
        <el-table
          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName"
          height="250">
          <el-table-column
            prop="date"
            label="日期"
            width="120"
            fixed>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="200">
          </el-table-column>
          <el-table-column
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <h4>固定表头<br><small>纵向内容过多时，可选择固定表头。</small></h4>
      <h5>只要在el-table元素中定义了height属性，即可实现固定表头的表格，而不需要额外的代码。</h5>
      <h4>固定列<br><small>横向内容过多时，可选择固定列。</small></h4>
      <h5>固定列需要使用fixed属性，它接受 Boolean 值或者left/right，表示左边固定还是右边固定。</h5>
      <h4>固定列和表头<br><small>横纵内容过多时，可选择固定列和表头。</small></h4>
      <h5>固定列和表头可以同时使用，只需要将上述两个属性分别设置好即可。</h5>

    </el-col>
    <el-col :span="8">
      <h4>流体高度<br><small>当数据量动态变化时，可以为 Table 设置一个最大高度。</small></h4>
      <h5>通过设置max-height属性为 Table 指定最大高度。此时若表格所需的高度大于最大高度，则会显示一个滚动条。</h5>
      <h4>多级表头<br><small>数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。</small></h4>
      <h5>只需要在 el-table-column 里面嵌套 el-table-column，就可以实现多级表头。</h5>
      <div>
        <el-table
          :data="tableData"
          style="width: 100%"
          max-height="250">
          <el-table-column
            prop="date"
            label="日期"
            width="150">
          </el-table-column>
          <el-table-column label="配送信息">
            <el-table-column
              prop="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column label="地址">
              <el-table-column
                prop="province"
                label="省份"
                width="120">
              </el-table-column>
              <el-table-column
                prop="city"
                label="市区"
                width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                width="300">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="邮编"
                width="120">
              </el-table-column>
            </el-table-column>
          </el-table-column>
        </el-table>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import goBack from '../../components/goBack'

  const tableData = [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }]
  export default {
    name: '',
    data () {
      return {
        tableData: tableData, //等价于tableData
      }
    },
    components: {
      goBack
    },
    methods: {
      tableRowClassName ({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row'
        } else if (rowIndex === 3) {
          return 'success-row'
        }
        return ''
      },
      handleClick (row) {
        console.log(row)
      }
    }
  }
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

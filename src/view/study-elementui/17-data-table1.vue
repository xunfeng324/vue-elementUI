<template>
  <el-row>
    <el-col :span="8" :offset="0">
      <go-back></go-back>
      <h2>Table 表格功能</h2>
      <h4>单选<br><small>选择单行数据时使用色块表示。</small></h4>
      <h5>Table
        组件提供了单选的支持，只需要配置highlight-current-row属性即可实现单选。之后由current-change事件来管理选中时触发的事件，它会传入currentRow，oldCurrentRow。如果需要显示索引，可以增加一列el-table-column，设置type属性为index即可显示从
        1 开始的索引号。</h5>
      <div>
        <el-table
          ref="singleTable"
          :data="tableData"
          highlight-current-row
          @current-change="handleCurrentChange"
          style="width: 100%">
          <el-table-column
            type="index"
            width="50">
          </el-table-column>
          <el-table-column
            property="date"
            label="日期"
            width="120">
          </el-table-column>
          <el-table-column
            property="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            property="address"
            label="地址">
          </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
          <el-button @click="setCurrent()">取消选择</el-button>
        </div>
      </div>
    </el-col>
    <el-col :span="8">
      <h4>多选<br><small>选择多行数据时使用 Checkbox。</small></h4>
      <h5>实现多选非常简单:
        手动添加一个el-table-column，设type属性为selection即可；默认情况下若内容过多会折行显示，若需要单行显示可以使用show-overflow-tooltip属性，它接受一个Boolean，为true时多余的内容会在
        hover 时以 tooltip 的形式显示出来。</h5>
      <div>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="日期"
            width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            show-overflow-tooltip>
          </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
          <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
      </div>
      <h4>排序<br><small>对表格进行排序，可快速查找或对比数据。</small></h4>
      <h5>在列中设置sortable属性即可实现以该列为基准的排序，接受一个Boolean，默认为false。可以通过 Table
        的default-sort属性设置默认的排序列和排序顺序。可以使用sort-method或者sort-by使用自定义的排序规则。如果需要后端排序，需将sortable设置为custom，同时在 Table
        上监听sort-change事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。在本例中，我们还使用了formatter属性，它用于格式化指定列的值，接受一个Function，会传入两个参数：row和column，可以根据自己的需求进行处理。</h5>

      <h4>筛选
        <br><small>对表格进行筛选，可快速查找到自己想看的数据。</small></h4>
      <h5>在列中设置filtersfilter-method属性即可开启该列的筛选，filters 是一个数组，filter-method是一个方法，它用于决定某些数据是否显示，会传入三个参数：value, row 和
        column。</h5>
      <h4>自定义列模板
        <br><small>自定义列的显示内容，可组合其他组件使用。</small></h4>
      <h5>通过 Scoped slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据，用法参考 demo。</h5>

      <h4>展开行
        <br><small>当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。</small></h4>
      <h5>通过设置 type="expand" 和 Scoped slot 可以开启展开行功能，el-table-column 的模板会被渲染成为展开行的内容，展开行可访问的属性与使用自定义列模板时的 Scoped slot
        相同。</h5>
    </el-col>
    <el-col :span="8">
      <h4>树形数据与懒加载<br><small></small></h4>
      <h5>支持树类型的数据的显示。当 row 中包含 children 字段时，被视为树形数据。渲染树形数据时，必须要指定 row-key。支持子节点数据异步加载。设置 Table 的 lazy 属性为 true 与加载函数
        load 。通过指定 row 中的 hasChildren 字段来指定哪些行是包含子节点。children 与 hasChildren 都可以通过 tree-props 配置。</h5>

      <h4>自定义表头<br><small>表头支持自定义。</small></h4>
      <h5></h5>
      <div>
        <el-table
          :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%">
          <el-table-column
            label="Date"
            prop="date">
          </el-table-column>
          <el-table-column
            label="Name"
            prop="name">
          </el-table-column>
          <el-table-column
            align="right">
            <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">Edit
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">Delete
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <h4>表尾合计行<br><small>若表格展示的是各类数字，可以在表尾显示各列的合计。</small></h4>
      <h5>
        将show-summary设置为true就会在表格尾部展示合计行。默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过sum-text配置），其余列会将本列所有数值进行求合操作，并显示出来。当然，你也可以定义自己的合计逻辑。使用summary-method并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中，具体可以参考本例中的第二个表格。</h5>
      <h4>合并行或列<br><small>多行或多列共用一个数据时，可以合并行或列。</small></h4>
      <h5>
        通过给table传入span-method方法可以实现合并行或列，方法的参数是一个对象，里面包含当前行row、当前列column、当前行号rowIndex、当前列号columnIndex四个属性。该函数可以返回一个包含两个元素的数组，第一个元素代表rowspan，第二个元素代表colspan。
        也可以返回一个键名为rowspan和colspan的对象。</h5>
      <h4>自定义索引<br><small>自定义 type=index 列的行号。</small></h4>
      <h5>通过给 type=index 的列传入 index 属性，可以自定义索引。该属性传入数字时，将作为索引的起始值。也可以传入一个方法，它提供当前行的行号（从 0 开始）作为参数，返回值将作为索引展示。</h5>
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
    name: 'table1',
    data () {
      return {
        tableData: tableData, //等价于tableData
        currentRow: null,
        multipleSelection: [],
        search: '',
      }
    },
    components: {
      goBack
    },
    methods: {
      //单选
      setCurrent (row) {
        this.$refs.singleTable.setCurrentRow(row)  //ref别名
      },
      handleCurrentChange (val) {
        this.currentRow = val
      },
      //多选
      toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      //自定义表头
      handleEdit (index, row) {
        console.log(index, row)
      },
      handleDelete (index, row) {
        console.log(index, row)
      }
    }
  }
</script>

<style scoped>

</style>

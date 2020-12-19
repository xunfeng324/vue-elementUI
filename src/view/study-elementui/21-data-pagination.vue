<template>
  <el-row :gutter="10">
    <el-col :span="8" :offset="0">
      <go-back></go-back>
      <h2>Pagination 分页</h2>
      <h5>当数据量过多时，使用分页分解数据。</h5>
      <h4>基础用法</h4>
      <h5>
        设置layout，表示需要显示的内容，用逗号分隔，布局元素会依次显示。prev表示上一页，next为下一页，pager表示页码列表，除此以外还提供了jumper和total，size和特殊的布局符号->，->后的元素会靠右显示，jumper表示跳页元素，total表示总条目数，size用于设置每页显示的页码数量。</h5>
      <div>
        <div class="block">
          <span class="demonstration">页数较少时的效果</span>
          <el-pagination
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
        </div>
        <div class="block">
          <span class="demonstration">大于 7 页时的效果</span>
          <el-pagination
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </div>
      <h4>设置最大页码按钮数<br><small></small></h4>
      <h5>默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。通过pager-count属性可以设置最大页码按钮数。</h5>
      <div>
        <el-pagination
          :page-size="20"
          :pager-count="10"
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>

    </el-col>
    <el-col :span="6">
      <h4>带有背景色的分页<br><small></small></h4>
      <h5>设置background属性可以为分页按钮添加背景色。</h5>
      <div>
        <el-pagination
          background
          :pager-count="5"
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
      <h4>小型分页<br><small>在空间有限的情况下，可以使用简单的小型分页。</small></h4>
      <h5>只需要一个small属性，它接受一个Boolean，默认为false，设为true即可启用。</h5>
      <div>
        <el-pagination
          small
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
      </div>
    </el-col>
    <el-col :span="10">
      <h4>附加功能<br><small>根据场景需要，可以添加其他功能模块。</small></h4>
      <h5>此例是一个完整的用例，使用了size-change和current-change事件来处理页码大小和当前页变动时候触发的事件。page-sizes接受一个整型数组，数组元素为展示的选择每页显示个数的选项，[100,
        200, 300, 400]表示四个选项，每页显示 100 个，200 个，300 个或者 400 个。</h5>
      <div>
        <div class="block">
          <span class="demonstration">显示总数</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
        <div class="block">
          <span class="demonstration">调整每页显示条数</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage2"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="sizes, prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
        <div class="block">
          <span class="demonstration">直接前往</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000">
          </el-pagination>
        </div>
        <div class="block">
          <span class="demonstration">完整功能</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import goBack from '../../components/goBack'

  export default {
    name: 'pagination',
    data () {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },
    components: {
      goBack
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style scoped>

</style>

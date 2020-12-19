<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="6">
        <div>
          <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
          <el-button type="primary" icon="el-icon-share" size="small"></el-button>
          <el-button type="primary" icon="el-icon-delete" size="medium "></el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
        <div>
          <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
          <el-link type="primary">主要链接</el-link>
          <el-link type="success">成功链接</el-link>
          <el-link type="warning">警告链接</el-link>
          <el-link type="danger">危险链接</el-link>
          <el-link type="info">信息链接</el-link>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <div><h2>表单</h2>
          <div><el-link href="layout" type="primary">Layout 布局</el-link></div>
          <div><el-link href="container" type="primary">Container 布局容器</el-link></div>
          <div><el-link href="radio" type="primary">Radio 单选框</el-link></div>
          <div><el-link href="checkbox" type="primary">Checkbox 多选框</el-link></div>
          <div><el-link href="input" type="primary">Input 输入框</el-link></div>
          <div><el-link href="select" type="primary">Select 选择器</el-link></div>
          <div><el-link href="cascader" type="primary">Cascader 级联选择器</el-link></div>
          <div><el-link href="switch" type="primary">Switch 开关/滑块</el-link></div>
          <div><el-link href="dataAndTime" type="primary">时间/日期选择器</el-link></div>
          <div><el-link href="dateTimePicker" type="primary">DateTimePicker 日期时间选择器</el-link></div>
          <div><el-link href="upload" type="primary">Upload 上传</el-link></div>
          <div><el-link href="rate" type="primary">Rate 评分</el-link></div>
          <div><el-link href="colorPicker" type="primary">ColorPicker 颜色选择器</el-link></div>
          <div><el-link href="transfer" type="primary">Transfer 穿梭框</el-link></div>
          <div><el-link href="form" type="primary">Form 表单</el-link></div>
        </div>
      </el-col>
      <el-col :span="6">
        <div><h2>Data</h2>
          <div><el-link href="table" type="success">Table 表格</el-link> </div>
          <div><el-link href="table1" type="success">Table 表格功能</el-link> </div>
          <div><el-link href="tag" type="success">Tag 标签</el-link> </div>
          <div><el-link href="progress" type="success">Progress 进度条</el-link> </div>
          <div><el-link href="tree" type="success">Tree 树形控件</el-link> </div>
          <div><el-link href="pagination" type="success">Pagination 分页</el-link></div>
          <div><el-link href="badge" type="success">Badge 标记</el-link></div>
          <div><el-link href="avatar" type="success">Avatar 头像</el-link></div>
        </div>
      </el-col>
      <el-col :span="6">
        <h2>Alert</h2>
        <div><el-link href="alert" type="danger">Alert 警告</el-link></div>

      </el-col>
    </el-row>
  </div>
</template>

<script>

</script>
<style scoped>

</style>

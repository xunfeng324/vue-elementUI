<template>
  <div>
    <goBack></goBack>
    <h3>layout布局</h3>
    <el-row>
      <el-col :span="12"><div>占了12份</div></el-col>
      <el-col :span="12"><div>占了12份</div></el-col>
    </el-row>
    <h2>偏移</h2>
    <el-row>
      <el-col :span="6"><div style="border: 1px red solid">占了6份</div></el-col>
      <el-col :span="6" :offset="2"><div style="border: 1px yellow solid">占了6份</div></el-col>
      <el-col :span="6"><div style="border: 1px burlywood solid">占了6份</div></el-col>
    </el-row>
    <h2>间隔</h2>
    <el-row :gutter="20">
      <el-col :span="6"><div style="border: 1px red solid">占了6份</div></el-col>
      <el-col :span="6"><div style="border: 1px red solid">占了6份</div></el-col>
      <el-col :span="6"><div style="border: 1px red solid">占了6份</div></el-col>
      <el-col :span="6"><div style="border: 1px red solid">占了6份</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4"><div class="el-boder">
       <el-row :gutter="10">
         <el-col :span="4"><div class="el-boder">  1</div></el-col>
         <el-col :span="4"><div class="el-boder">  1</div></el-col>
         <el-col :span="4"><div class="el-boder">  1</div></el-col>
       </el-row>
      </div></el-col>
      <el-col :span="4"><div class="el-boder">  1</div></el-col>
      <el-col :span="4"><div class="el-boder">  1</div></el-col>
    </el-row>
    <h4>将 type 属性赋值为 'flex'，可以启用 flex 布局，并可通过 justify 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。</h4>
    <div>
      <el-row type="flex" class="row-bg">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="end">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import goBack from '../../components/goBack'
  export default {
    name: 'layout',
    components: {
      goBack
    },
  }

</script>

<style >
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

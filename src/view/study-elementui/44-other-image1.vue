<template>
  <el-row :gutter="10">
    <el-col :span="8" :offset="0">
      <go-back></go-back>
      <h2> Image 图片</h2>
      <h5>图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等</h5>
      <div>
        <h4>基础用法 &nbsp;<small>可通过fit确定图片如何适应到容器框，同原生 object-fit。</small></h4>
        <h5></h5>
        <div class="demo-image">
          <div class="demo-image" v-for="fit in fits" :key="fit">
            <span class="demonstration">{{ fit }}</span>
            <el-image
              style="width: 100px; height: 100px"
              :src="url"
              :fit="fit"></el-image>
          </div>
        </div>
      </div>
      <div>
        <h4>大图预览 &nbsp;<small></small></h4>
        <h5>可通过 previewSrcList 开启预览大图的功能。</h5>
        <div class="demo-image__preview">
          <el-image
            style="width: 100px; height: 100px"
            :src="url"
            :preview-src-list="srcList">
          </el-image>
        </div>
      </div>

    </el-col>
    <el-col :span="8">
      <div>
        <h4>占位内容&nbsp;<small>可通过slot = placeholder可自定义占位内容</small></h4>
        <h5></h5>
        <div class="demo-image__placeholder">
          <div class="block">
            <span class="demonstration">默认</span>
            <el-image :src="src"></el-image>
          </div>
          <div class="block">
            <span class="demonstration">自定义</span>
            <el-image :src="src">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
            </el-image>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="8">
      <div>
        <h4>加载失败 &nbsp;<small>可通过slot = error可自定义加载失败内容</small></h4>
        <div class="demo-image__error">
          <div class="img1">
            <span class="demonstration">默认</span>
            <el-image></el-image>
          </div>
        </div>
        <div class="demo-image__error">
          <div class="img1">
            <span class="demonstration">自定义</span>
            <el-image>
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
        </div>
      </div>
      <div>
        <h4>懒加载 &nbsp;<small></small></h4>
        <h5>可通过lazy开启懒加载功能，当图片滚动到可视范围内才会加载。可通过scroll-container来设置滚动容器，若未定义，则为最近一个overflow值为auto或scroll的父元素。</h5>
        <div class="demo-image__lazy">
          <el-image class="img1" v-for="url in urls" :key="url" :src="url" lazy scroll-container></el-image>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import goBack from '../../components/goBack'

  export default {
    name: 'image1',
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        urls: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ],
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
      }
    },
    components: {
      goBack
    },
    methods: {}
  }
</script>

<style scoped lang="less">
  .demo-image {
    display: inline-block;
    margin: 5px;
  }

  .demo-image__error {
    .img1 {
      border: 1px red solid;
      width: 200px;
      height: 200px;
      margin-bottom: 10px;
    }
  }

  .demo-image__lazy {
    height: 400px;
    overflow-y: auto;
  }
</style>

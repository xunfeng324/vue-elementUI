<template>
  <el-row>
    <el-col :span="12" :offset="0">
      <go-back></go-back>
      <h2>Avatar 头像</h2>
      <h5>用图标、图片或者字符的形式展示用户或事物信息。</h5>
      <h4>基本用法<br><small>通过 shape 和 size 设置头像的形状和大小。</small></h4>
      <h5></h5>
      <div>
        <el-col :span="12">
          <div class="sub-title">circle</div>
          <div class="demo-basic--circle">
            <div class="el-avatar-inline">
              <el-avatar :size="50" :src="circleUrl"></el-avatar>
            </div>
            <div class="el-avatar-inline" v-for="size in sizeList" :key="size">
              <el-avatar :size="size" :src="circleUrl"></el-avatar>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="sub-title">square</div>
          <div class="demo-basic--circle">
            <div class="el-avatar-inline">
              <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
            </div>
            <div class="el-avatar-inline" v-for="size in sizeList" :key="size">
              <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
            </div>
          </div>
        </el-col>
      </div>
      <h4>展示类型<br><small>支持三种类型：图标、图片和字符</small></h4>
      <h5></h5>
      <div class="el-avatar-inline">
        <el-avatar icon="el-icon-user-solid" shape="square"></el-avatar>
      </div>
      <div class="el-avatar-inline">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" shape="square"></el-avatar>
      </div>
      <div class="el-avatar-inline">
        <el-avatar> user</el-avatar>
      </div>
      <h4>图片加载失败的 fallback 行为<br><small>当展示类型为图片的时候，图片加载失败的 fallback 行为</small></h4>
      <div>
        <div class="demo-type">
          <el-avatar :size="60" src="https://empty" @error="errorHandler">
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
          </el-avatar>
        </div>
      </div>
    </el-col>
    <el-col :span="12">
      <h4>图片如何适应容器框</h4>
      <h5> 当展示类型为图片的时候，使用 fit 属性定义图片如何适应容器框，同原生 object-fit。</h5>
      <div class="demo-fit">
        <el-col :span="24" >
          <div :key="fit" v-for="fit in fits">
            <p class="title">{{ fit }}</p>
            <el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar>
          </div>
        </el-col>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import goBack from '../../components/goBack'

  export default {
    name: 'avatar',
    data () {
      return {
        circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
        sizeList: ['large', 'medium', 'small'],
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    },
    components: {
      goBack
    },
    methods: {
      errorHandler () {
        return true
      }
    }
  }
</script>

<style scoped>

</style>

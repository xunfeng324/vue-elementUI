<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <el-form>
          <el-form :model="ruleForm1" status-icon :rules="rules" ref="ruleForm1" label-width="100px" class="formClass"
                   size="mini">
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm1.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm1.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
              <el-input v-model.number="ruleForm1.age"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm1')">提交</el-button>
              <el-button @click="resetForm('ruleForm1')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        ruleForm1: {
          pass: '',
          checkPass: '',
          age: ''
        },
      }
    }

  }
</script>

<style scoped>

</style>

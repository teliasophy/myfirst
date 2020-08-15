<template>
  <div class="login-wrap">
    <el-form
      class="login-form"
      :model="formdata"
      label-width="80px"
      label-position="top"
    >
      <h2>用户登录</h2>
      <el-form-item label="姓名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          class="login-btn"
          type="primary"
          @click.prevent="handleLogin()"
          >登录</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formdata: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async handleLogin() {
      const res = await this.$http.post('login', this.formdata)
      const {
        data,
        meta: { msg, status }
      } = res.data
      //   错误优先，如果有错误，一律return，不往下执行
      if (!data || status !== 200) {
        this.$message.error(msg)
        return
      }
      //   本地保存token
      localStorage.setItem('token', data.token)
      this.$message({ message: msg, type: 'success' })
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="less" scoped>
.login-wrap {
  height: 100%;
  background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrap .login-form {
  width: 400px;
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
}
.login-form .login-btn {
  width: 100%;
}
</style>

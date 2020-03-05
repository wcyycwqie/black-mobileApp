<template>
  <div class="user-login">
    <!-- 导航栏 -->
    <van-nav-bar title="登录"></van-nav-bar>
    <van-form @submit="onSubmit">
      <van-cell-group>
        <van-field
          v-model="loginForm.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          required
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="loginForm.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="loginForm.mobile"
          type="tel"
          label="手机号码"
          placeholder="请输入手机号码"
          name="phone"
          required
          clearable
          error-message="error"
        />
        <van-field
          v-model="loginForm.code"
          name="yzm"
          label="yzm"
          required
          clearable
        />
      </van-cell-group>
      <div style="margin: 20px;">
        <van-button
          class="btn-submit"
          round
          block
          type="info"
          native-type="submit"
        >
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: 'a',
        password: '123',
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    onSubmit (values) {
      console.log('hoho')
      if (this.username == 'a' && this.password == 123) {
        this.$router.push('/')
      }

    }
  }

}
</script>

<style lang="less" scoped>
.van-form {
  margin-top: 15px;
  .btn-submit {
    background: #690069;
  }
}
</style>
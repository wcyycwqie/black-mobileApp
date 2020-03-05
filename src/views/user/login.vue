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
          label="验证码"
          required
          clearable
        >
          <van-button slot="button" size="small" type="primary"
            >发送验证码</van-button
          >
        </van-field>
      </van-cell-group>

      <div style="margin: 20px;">
        <van-button
          class="btn-submit"
          round
          block
          color="#690069"
          native-type="submit"
        >
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
// 导入验证API
import { userLogin } from '@/api/user'

export default {
  data () {
    return {
      loginForm: {
        username: 'a',
        password: '123',
        mobile: '13911111111',
        code: '24681'
      },
      check: true
    }
  },
  methods: {
    async onSubmit (values) {
      console.log('hoho')
      try {
        console.log('try')
        const res =  await userLogin(this.loginForm)
        console.log(res)

      } catch (err) {
        console.log('catch')
        return this.$toast.fail('用户名或密码错误' + err)
      }
      this.$toast.success('登录成功')
      this.$router.push('/home')

    }
  }

}
</script>

<style lang="less" scoped>
.van-form {
  margin-top: 15px;
  // .btn-submit {
  //   background: #690069;
  // }
}
</style>
<template>
  <div class="user-login">
    <!-- 导航栏 -->
    <van-nav-bar title="登录"></van-nav-bar>
    <van-form @submit="onSubmit">
      <van-cell-group>
        <ValidationObserver ref="loginFormRef">
          <ValidationProvider
            name="用户名"
            rules="required"
            v-slot="{ errors }"
          >
            <van-field
              v-model="loginForm.username"
              name="用户名"
              label="用户名"
              placeholder="用户名"
              :error-message="errors[0]"
            />
          </ValidationProvider>
          <ValidationProvider name="密码" rules="min:6" v-slot="{ errors }">
            <van-field
              v-model="loginForm.password"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
              :error-message="errors[0]"
            />
          </ValidationProvider>
          <ValidationProvider
            rules="required|phone"
            name="手机号码"
            v-slot="{ errors }"
          >
            <van-field
              v-model="loginForm.mobile"
              type="tel"
              label="手机号码"
              placeholder="请输入手机号码"
              name="phone"
              required
              clearable
              :error-message="errors[0]"
            />
          </ValidationProvider>
          <ValidationProvider>
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
          </ValidationProvider>
        </ValidationObserver>
      </van-cell-group>

      <div style="margin: 20px;">
        <van-button
          class="btn-submit"
          round
          block
          color="#690069"
          native-type="submit"
          :loading="isLogin"
          loading-text="登录中..."
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
// 导入验证相关模块
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  name: 'user-login',
  data () {
    return {
      loginForm: {
        username: 'a',
        password: '123',
        mobile: '13911111111',
        code: '24681'
      },
      check: true,
      isLogin: false

    }
  },
  components: {
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    async onSubmit (values) {
      console.log('hoho')
      // 对表单进行全部校验
      const rst = await this.$refs.loginFormRef.validate()
      console.log(this.$refs.loginFormRef)
      if (!rst) {
        return false
      }
      this.isLogin = true
      // eslint-disable-next-line no-unreachable
      try {
        console.log('try')
        const res = await userLogin(this.loginForm)
        console.log(res)
        this.$store.commit('updateUser', res)

      } catch (err) {
        console.log('catch')
        this.isLogin = true
        return this.$toast.fail('用户名或密码错误' + err)
      }
      this.isLogin = true

      this.$toast.success('登录成功')
      this.$router.push('/home')


    },

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
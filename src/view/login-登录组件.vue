<template>
   <!-- 登录注册 组件 -->
  <div id="apps">
                <div class="login">
                    <div class="welcome"><img src="../../static/images/welcome.png"></div>
                    <div class="login-form">
                        <div class="login-inp">
                          <label>用户名</label>
                          <input v-model="username"  type="text" placeholder="请输入用户名"
                           @keydown="密码验证规则(username,'user')"/>
                        </div>
                        <div class="login-inp">
                          <label>密码</label>
                          <input v-model="password" type="password" placeholder="请输入密码"
                          @keydown="密码验证规则(password,'pass')"/>
                        </div>
                        <div class="login-inp"><a href="#"
                        @click="submit()">{{btnName}}</a></div>
                    </div>
                    <div class="login-txt"><a href="#" @click="跳转路由('/register')">立即注册</a>|<a href="#" @click="功能正在维护()">忘记密码？</a></div>
                </div>
                <div style="text-align:center;">
                </div>

  </div>
</template>

<script>
import { Toast } from 'vant'
import { loginApi } from '../axios/user-api/index.js'

export default {
  name: 'login',
  data () {
    return {
      username: '18801134129',
      password: '246810',
      btnName: '立即登录'
    }
  },
  methods: {

    // 点击登录
    async submit () {
      let data = {
        mobile: this.username,
        code: this.password
      }
      if (data.username === null || data.password === null) {
        Toast('用户名和密码不能为空 o(╥﹏╥)o')
        return
      }

      if (this.$route.name === 'login' && data.username !== null && data.password !== null) {
        try {
          const res = await loginApi(data)
          this.$store.commit('setUser', res)
          this.$router.push('/')
          Toast('登录成功')
          return
        } catch (error) {
          Toast('账号和密码有问题')
        }
      } else if (this.$route.name === 'register') {
        this.btnName = '立即注册'
        confirm('请用测试账号登录 电话:18801134129,密码:246810')
        this.跳转路由('/login')
      }
    },
    密码验证规则 (v, choose) {
      if (choose === 'user') {
        let username = v.trim()
        let uPattern = /^[a-zA-Z0-9_]{4,12}$/g

        if (username.split('').length > 12) { return false }

        if (!uPattern.test(username)) {
          Toast('请输入4到16位(字母,数字,下划线)')
        }
        console.log(username, v.trim())
      } else if (choose === 'pass') {
        let password = v.trim()
        // 最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
        let pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
        if (!pPattern.test(password)) {
          Toast('密码强度较弱o(╥﹏╥)o')
        } else {
          Toast('密码强度 安全^_^')
        }
      }
    },
    跳转路由 (url) {
      this.$router.push(url)
      if (this.$route.name === 'login') {
        this.btnName = '立即登录'
      } else if (this.$route.name === 'register') {
        this.btnName = '立即注册'
      }
    },
    功能正在维护 () {
      Toast('该功能正在维护 o(╥﹏╥)o')
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../assets/css/login.less');
.login-form{
  font-size: 14px;
}
</style>

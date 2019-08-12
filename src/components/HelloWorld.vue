<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
import { loginApi } from '../axios/user-api'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      queParams: {
        mobile: '18801134129',
        code: '246810'
      }
    }
  },
  created () {
    loginApi(this.queParams).then(res => {
      console.log(res)
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1, h2 {
  font-weight: normal;
  font-size:20px;
  width: 370px;
  background-color: green;
}
ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 10px;
    a {
        color: red;

      }
  }
}

</style>

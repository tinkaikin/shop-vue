<template>
  <div class='home'>
    <!-- 搜索区 -->
     <van-row gutter="20" class="row-1">
      <van-col span="3" class="cols">
        <a href="#" @click="跳转路由('/login')">登录</a>
      </van-col>
      <van-col span="19" class="cols">
        <form action="/">
          <van-search
            class="search"
            v-model="value"
            style="background:white;height:35px;border-radius:22px;"
            placeholder="大家在搜索：衣服"
          />
        </form>
      </van-col>
      <van-col span="2" class="cols">
        <van-icon name="qr" class="classfic" @click="跳转路由('/about')"/>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      value: null // 搜索内容
    }
  },
  methods: {
    跳转路由 (url) {
      this.$router.push(url)
    }
  }
}
</script>

<style scoped lang='less'>
@import url('../assets/css/home.less');
</style>

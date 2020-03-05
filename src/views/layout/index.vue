<template>
  <div class="layout container">
    <van-nav-bar
      fixed
      title="今日欢喜"
      right-text="搜索"
      @click-right="$router.push('/search')"
    >
    </van-nav-bar>
    <div class="my-wrapper">
      <router-view></router-view>
    </div>
    <van-tabbar route>
      <van-tabbar-item to="/home" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item to="/question" icon="question-o">答疑</van-tabbar-item>
      <van-tabbar-item to="/video" icon="video-o">视频</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  .my-wrapper {
    width: 100%;
    height: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
    overflow: hidden;
    box-sizing: border-box;
    &.noTop {
      padding-top: 0;
    }
  }
}

</style>

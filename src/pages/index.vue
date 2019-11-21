<template>
  <div class="container">
   
    <div class="main">
      <router-view />
    </div>
   <van-tabbar v-model="active" route>
  <van-tabbar-item icon="home-o" to="/index/home">首页</van-tabbar-item>
  <van-tabbar-item icon="qr-invalid" to="/index/category">分类</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart-o" to="/index/cart">购物车</van-tabbar-item>
  <van-tabbar-item icon="manager-o" to="/index/my">个人中心</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0
        }
    },
};
</script>

<style lang="less" scoped>
html, body {
  width: 100%;
  height: 100%;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .main {
  flex: 1
  }
  .footer {
    width: 100%;
    height: 50px;
  }
}
</style>
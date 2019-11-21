<template>
  <div>
    <div class="box">
      <div class="header">
        <van-nav-bar title="标题" left-arrow    @click-left="onClickLeft"/>
      </div>
      <div class="mian">
        <div class="tu">
          <img :src="'http://localhost:3000'+data.imgurl" />
        </div>
        <div class="content">
          <p>{{data.title}}</p>
          <p>{{data.cate}}</p>
          <p>￥{{data.price}}</p>
        </div>
        <div class="cont1">
          <van-tabs v-model="activeName">
            <van-tab title="商品详情" name="a">商品详情</van-tab>
            <van-tab title="卖家口碑" name="b">卖家口碑</van-tab>
          </van-tabs>
        </div>
      </div>
      <div class="footer">
        <van-goods-action>
          <van-goods-action-icon text=1999 />
          <van-goods-action-button type="warning" text="加入购物车" @click="showup" />
          <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
      </div>
    </div>
    <popup :show="show" @gshow="gshow" :data="data"></popup>
  </div>
</template>

<script>
import popup from "../components/details/popup"
export default {
  data() {
    return {
      id: this.$route.query.id,
      data: "",
      show: true,
      activeName: "a",
       show:false
    };
  },
   methods: {
    showup() {
           this.show=true
     },
     gshow(i){
       this.show=i
     },
     onClickLeft(){
       this.$router.back()
     }
   },
  created() {
    this.$http.get("/api/goodsinfo", { params: { id: this.id } }).then(res => {
      this.data = res.data.data;
      console.log(res);
    });
  },
  components:{
    popup
  }
};
</script>

<style  lang="less" scoped>
</style>
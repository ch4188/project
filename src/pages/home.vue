<template>
  <div>
    <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image) in images" :key="image._id">
          <img :src= "'http://localhost:3000'+image.imgurl" />
        </van-swipe-item>
      </van-swipe>
      <p>{{id}}</p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            images: []
        }
    },
  created() {
      this.$http.get("/api/bannerlist").then((res)=>{
          console.log(res)
         this.images=res.data.data
      })
  },
  computed: {
    id(){
      return this.$store.state.id
    }
  },
};
</script>

<style scoped>
</style>
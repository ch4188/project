<template>
  <div>
    <div class="list">
      <div class="left">
        <ul>
          <li
            v-for="(item,index) in left"
            :key="item._id"
            :class="{active:index==ind}"
            @click="show(index)"
          >{{item.title}}</li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li v-for="(item,index) in right" :key="item._id" @click="delails(index)">
            <img :src="'http://localhost:3000'+item.imgurl" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      left: "",
      ind: 0,
      right: [],
      data: "",
     
    };
  },
  methods: {
    show(index) {
      this.ind = index;
      this.right = this.data[index].children;
    },
    delails(index){
      this.$http.get("/api/categoods").then((res)=>{
         this.$router.push("/details?id="+res.data.data[this.ind].children[index]._id)
      })
    
    }
  
  },
  created() {
    this.$http.get("/api/catelist").then(res => {
      this.left = res.data.data;
    });
    this.$http.get("/api/categoods").then(res => {
      console.log(res);
      this.data = res.data.data;
      this.right = res.data.data[0].children;
    });
  }
};
</script>

<style  lang="less" scoped>
.list {
  display: flex;
  .left {
    width: 100px;
    li {
      height: 30px;
      background: yellow;
      &.active {
        background: green;
      }
    }
  }
  .right {
    flex: 1;
    padding-left: 20px;
    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
                width: 40%;
                img {
                    width: 100%;
                }
            }
    }
  }
}
</style>
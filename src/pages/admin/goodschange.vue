<template>
  <div>
    <el-form>
      <el-form-item label="分类">
        <el-select v-model="data.cate">
          <el-option
            v-for="(item,index) in cateArr"
            :key="index"
            :label="item.title"
            :value="item.title"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文件">
        <input type="file" ref="file" class="ip" />
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="data.title"></el-input>
      </el-form-item>
      <el-form-item label="价格">
        <el-input v-model="data.price"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="data.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="change">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import contVue from './cont.vue';
export default {
  data() {
    return {
      data: {
        cate: "",
        title: "",
        price: "",
        desc: ""
      },
      cateArr: []
    };
  },
  methods: {
    change() {
      var form = new FormData();
      for (var key in this.data) {
        console.log(key);
        form.append(key, this.data[key]);
      }
      form.append("status", 1);
      form.append("img",this.$refs.file.files[0])
      if (this.$route.query.id) {
          form.append("id",this.$route.query.id)
         // form.append("imgurl",this.$refs.file.files[0])
          console.log(this.$refs.file.files[0],1111111111)
        this.$http.post("/api/goodsedit",form).then(res=>{
            console.log(res)
            this.$router.push("/mian/goods")
        })
      } else {
       this.$http.post("/api/goodsadd", form).then(res => {
          console.log(res);
          this.$router.push("/mian/goods")
        });  
      }
    }
  },
  created() {
      console.log(this.$route.query.id)
    if (this.$route.query.id){
      this.$http.get("/api/catelist").then(res => {
        console.log(res);
        this.cateArr = res.data.data;
      }),
        this.$http
          .get("/api/goodsinfo", {
            params: {
              id: this.$route.query.id
            }
          })
          .then(res => {
            this.data = res.data.data;
            
          });
    }else{
          this.$http.get("/api/catelist").then(res => {
        console.log(res);
        this.cateArr = res.data.data;
    })
  }
}
}
</script>

<style scoped>
</style>
<template>
  <div>
    <el-form ref="form" label-width="80px">
      <el-form-item label="账号" v-if="type=='修改'">
        <el-input v-model="data1._id"></el-input>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="data1.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="data1.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="newdata">立即创建</el-button>
        <el-button @click="qu">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["data","type"],
  data() {
    return {
      data1: {
        username:"",
        password:""
      }
    };
  },
  methods: {
    newdata() {
      if(this.type=="修改"){
  this.$http
        .post("/api/useredit", {
          id: this.data1._id,
          password: this.data1.password,
          username: this.data1.username
        })
        .then(res => {
          console.log(res);
          this.$emit("newdata");
          this.$emit("geng");
        });
    }else{
        this.$http.post("/api/useradd",{
          username:this.data1.username,
          password:this.data1.password
        }).then(res=>{
          console.log(res)

          this.$emit("geng");
        })
    }
    
    } ,
    qu() {
      this.$emit("newdata");
      }
  },
  created() {
    console.log(this.data);
    if(this.type=="修改"){
   this.$http
      .get("/api/userinfo", {
        params: {
          id: this.data
        }
      })
      .then(res => {
        this.data1 = res.data.data;
        console.log(res);
      });
    }
  },
  watch:{
    data(){
      if(this.type=="修改"){
   this.$http
      .get("/api/userinfo", {
        params: {
          id: this.data
        }
      })
      .then(res => {
        this.data1 = res.data.data;
        console.log(res);
      });
    }
    },
    type(){
       if(this.type=="修改"){
   this.$http
      .get("/api/userinfo", {
        params: {
          id: this.data
        }
      })
      .then(res => {
        this.data1 = res.data.data;
        console.log(res);
      });
    }else{
      this.data1={
        username:"",
      password:""
      }
    }
    }
  }
};
</script>

<style scoped>
</style>
<template>
  <div>
    <el-form ref="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="title"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="newclass">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    newclass() {
      if (this.type == "修改") {
        console.log("修改");
        this.$http
          .post("api/cateedit", {
            id: this.dataid,
            title: this.title,
            status: 1
          })
          .then(res => {
            this.$emit("hide");
            this.$emit("geng");
          });
      } else {
        console.log("添加");
        this.$http
          .post("/api/cateadd", {
            title: this.title,
            status: 0
          })
          .then(res => {
            this.$emit("hide");
            this.$emit("geng");
          });
      }
    }
  },
  props: ["dataid", "type"],
  created() {
    if (this.type == "修改") {
      console.log(this.dataid);
      this.$http
        .get("/api/cateinfo", {
          params: {
            id: this.dataid
          }
        })
        .then(res => {
          console.log(res);
          this.title = res.data.data.title;
        });
    } else {
      this.title = "";
    }
  },
  watch: {
    type() {
      if(this.type=="修改"){
          this.$http
        .get("/api/cateinfo", {
          params: {
            id: this.dataid
          }
        })
        .then(res => {
          console.log(res);
          this.title = res.data.data.title;
        });
      }else{
        this.title=''
      }
    },
    dataid() {
      this.$http
        .get("/api/cateinfo", {
          params: {
            id: this.dataid
          }
        })
        .then(res => {
          console.log(res);
          this.title = res.data.data.title;
        });
    }
  }
};
</script>

<style scoped>
</style>
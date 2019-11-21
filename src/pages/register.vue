<template>
  <div>
    <van-nav-bar title="注册" />
    <div class="box">
      <van-cell-group>
        <van-field v-model="zname" required clearable label="用户名" placeholder="请输入用户名" />
        <van-field v-model="zpass" type="password" label="密码" placeholder="请输入密码" required />
      </van-cell-group>
      <van-button type="primary" size="large" @click="zhu">注册</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zname: "",
      zpass: ""
    };
  },
  methods: {
    zhu() {
      this.$http
        .post("/api/memberadd", {
          username: this.zname,
          password: this.zpass
        })
        .then(res => {
          console.log(res);
          if (res.data.status == 1) {
            this.$router.push("/login");
          }else{
              alert("注册失败")
          }
        });
    }
  }
};
</script>

<style scoped>
.box {
  box-sizing: border-box;
  width: 100%;
  height: 500px;
  padding: 20px;
  background: silver;
}
</style>
<template>
  <div>
    <el-form ref="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">登录</el-button>
      </el-form-item>
    </el-form>
    <div id="box" ref="echarts"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    submit() {
      localStorage.setItem("uname", this.username);
      this.$http
        .post("/api/login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          console.log(res);
          this.$router.push("/mian");
        });
    }
  },
  created() {
    let arr = [];
    let arr1 = [];
    this.$http.get("/api/goodslist").then(res => {
      res.data.data.forEach((item, index) => {
        arr.push(item.price);
        arr1.push(item.title);
      });
      console.log(arr);
      this.$nextTick(() => {
          console.log(1)
        var echar = this.$echarts.init(this.$refs.echarts);
          console.log(arr1)

        echar.setOption({
          title: {
            text: "柱形图"
          },
          tooltip: {},
          xAxis: {
            data: arr1
          },
          yAxis: {},
          legend: {
            data: ["价格"]
          },
          series: [
            {
              name: "价格",
              type: "bar",
              data: arr
            }
          ]
        });
      });
    });
  }
};
</script>

<style lang="less" scoped>
#box {
  width: 500px;
  height: 500px;
}
</style>
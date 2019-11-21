<template>
   <div>
    <van-nav-bar title="登录11111" />
    <div class="box">
      <van-cell-group>
        <van-field v-model="uname" required clearable label="用户名" placeholder="请输入用户名" />
        <van-field v-model="upass" type="password" label="密码" placeholder="请输入密码" required />
      </van-cell-group>
      <van-button type="primary" size="large" @click="submit">登录</van-button>
      <van-button type="primary" size="mini" @click="tiao">迷你按钮</van-button>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                uname: "",
                upass:"",
                url:''
            }
        },
        methods: {
            submit() {
               this.$http.post("/api/memberlogin",{
                   username:this.uname,
                   password:this.upass
               }).then(res=>{
                   if(res.data.status==1){
                 
                  this.$store.commit("chid",res.data.data._id)
                   localStorage.setItem("id",res.data.data._id)
                    if(localStorage.getItem("url")){
                        this.$router.push(localStorage.getItem("url"))
                        if(localStorage.getItem("url")=="/register"){
                            this.$router.push("/index/home")
                        }
                    }else{
                        this.$router.push("/index/home")
                    }
                   }else{
                       this.$router.push("/register")
                   }
               })
            },
            tiao(){
                this.$router.push("/register")
            }
        },
        beforeRouteEnter (to, from, next) {
             console.log(from)
             localStorage.setItem("url",from.fullPath)
             next()
        }
    }
</script>

<style lang="less" scoped>

</style>
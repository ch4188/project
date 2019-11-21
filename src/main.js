// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import store from './stroe/index'
import Vant from 'vant'
import 'vant/lib/index.css';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from "echarts"

Vue.prototype.$echarts=echarts

Vue.use(ElementUI)



Vue.use(Vant)
Vue.prototype.$http=axios   

var arr=["/index/cart","/index/my"]
var reg=/^\/mian/
router.beforeEach((to,from,next)=>{
  if(arr.indexOf(to.path)!=-1){
     if(localStorage.getItem("id")){
        next()
     }else{
       router.push("/login")
     }
  }else{
    console.log(11111)
 if(reg.test(to.path)){
   if(localStorage.getItem("uname")){
     next()
   }else{
    next("/mianlogin")
   }
 }else{
   next()
 }
  }
})

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

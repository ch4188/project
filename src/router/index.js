import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import home from '../pages/home'
import my from '../pages/my'
import cart from '../pages/cart'
import category from '../pages/category'
import details from '../pages/details'
import login from '../pages/login'
import register from '../pages/register'
import mian from "../pages/admin/mian"
import classs from "../pages/admin/class"
import vip from "../pages/admin/vip"
import cont from "../pages/admin/cont"
import goods from "../pages/admin/goods"
import banner from "../pages/admin/banner"
import goodschange from "../pages/admin/goodschange"
import mianlogin from "../pages/admin/mianlogin"

Vue.use(Router)



export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/index/home"
    },
      {
        path:"/index",
        component:index,
        children:[
          {
            path:"home",
            component:home
          },
          {
            path:"my",
            component:my
          },
          {
            path:"cart",
            component:cart
          },
          {
            path:"category",
            component:category
          }
        ]
      },
      {
        path:"/details",
        component:details
      },
      {
        path:"/login",
        component:login
      },
      {
        path:"/register",
        component:register
      },
      {
        path:"/mian",
        component:mian,
        children:[
          {
            path:"cont",
            component:cont
          },
          {
            path:"vip",
            component:vip
          },
          {
            path:"class",
            component:classs
          },
          {
            path:"goods",
            component:goods
          },
          {
            path:"banner",
            component:banner
          },
          {
            path:"goodschange",
            component:goodschange
          }
          
        ]
      },
      {
        path:"/mianlogin",
        component:mianlogin
      }
    
  ]
})

<template>
    <div class="cart">
         <van-nav-bar  title="标题" left-arrow  @click-left="onClickLeft"/>
      <div class="main">
          
             <ul>
                 <li v-for="(item,index) in list" :key="index">
                     <input type="checkbox"  v-model="item.checked" >
                    <img :src="'http://localhost:3000'+item.goods_img" />
                     <div class="num">
                         <p>{{item.goods_title}}</p>
                         <button @click="sub(item,index)">-</button>
                         <span>{{item.goods_num}}</span>
                         <button @click="add(item,index)">+</button>
                     </div>
                     <p>￥{{item.goods_price*item.goods_num}}</p>
                     <div @click="remove(item,index)">删除</div>

                 </li>
             </ul>
      </div>
      <div class="zong">
          <div><label for="">全选</label>
          <input type="checkbox" v-model="checkall">
          </div>
          <p>{{zongsum}}</p>
          <div>去结算</div>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [],
               
            }
        },
        methods:{
            sub(item,index){
                this.$http.post("/api/cartedit",{
                    userid:item.userid,
                    goodsid:item.goodsid,
                    type:2
                }).then((res)=>{
                  if(res.data.status==1){
                      if( this.list[index].goods_num==1)return
                      this.list[index].goods_num--

                  }
                })
            },
            add(item,index){
              this.$http.post("/api/cartedit",{
                    userid:item.userid,
                    goodsid:item.goodsid,
                    type:1
                }).then((res)=>{
                  if(res.data.status==1){
                      this.list[index].goods_num++
                  }
                })
            },
            remove(item,index){
this.$http.post("/api/cartdel",{id:item._id}).then(res=>{
    console.log(res)
    if(res.data.status==1){
         this.list.splice(index,1)
    }
})
            },
            onClickLeft(){
                this.$router.back()
            }
        },
        created() {
            this.$http.get("/api/cartlist",{params:{userid:localStorage.getItem("id")}}).then(res=>{
               this.list=res.data.data
               console.log(res)
               console.log(this.list)
            })
        },
        computed: {
            checkall:{
                get(){
                    return this.list.every(item=>{
                        return item.checked
                    })
                },
                set(newVal){
                    this.list.forEach(item=>{
                        item.checked=newVal
                    })
                }
            },
            zongsum(){
                var sum=0
              
                  this.list.forEach((item,index)=>{
                         if(item.checked==true){
                        sum+=item.goods_price*item.goods_num
                         }
                  })
                      return sum
             

               
            }
          
           } 
        }
    
</script>

<style lang="less" scoped>
body{
    display: flex;
    flex-direction: column
}
.cart{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
     .main{
        display: flex;
        flex-direction: column;
        padding: 0px 10px;
         flex: 1;
         ul{
             flex: 1;
               li{
            display: flex;
            justify-content:space-between;
            align-items: center;
         img{
             width: 100px;
             height: 100px;
         }
     }
         }
        
     }
    .zong{
        height: 80px;
        width: 100%;
        display: flex;
        justify-content:space-between;
            align-items: center;
        position: fixed;
        bottom: 52px
    }

    
}
</style>
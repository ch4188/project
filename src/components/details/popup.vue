<template>
  <div>
    <van-popup
      class="box"
      v-model="myshow"
      position="bottom"
      :style="{ height: '70%' }"
      @close="chshow"
    >
      <div class="imgs">
        <img :src="'http://localhost:3000'+data.imgurl" />
        <div>
          <p>{{data.price}}</p>
          <p>{{data.title}}</p>
        </div>
      </div>
      <div class="sum">
        <p>购买数量</p>
        <div>
          <button @click="sub">-</button>
          <span>{{count}}</span>
          <button @click="add">+</button>
        </div>
      </div>
      <h2>颜色</h2>
      <div class="color">
        <ul>
          <li
            v-for="(item,index) in clist"
            :key="index"
            :class="{active:item==ctitle}"
            @click="colorshow(item)"
          >{{item}}</li>
        </ul>
      </div>
      <h2>内存</h2>
      <div class="store">
        <ul>
          <li
            v-for="(item,index) in slist"
            :key="index"
            :class="{active:item==stitle}"
            @click="storeshow(item)"
          >{{item}}</li>
        </ul>
      </div>
      <div class="footer">
        <van-goods-action>
          <van-goods-action-icon :text="'￥'+count*data.price" />
          <van-goods-action-button type="warning" text="加入购物车" @click="showup" />
          <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);

export default {
  data() {
    return {
      myshow: this.show,
      count: 1,
      clist: ["红色", "蓝色", "黄色", "金色"],
      slist: ["16G", "32G"],
      ctitle: "",
      stitle: ""
    };
  },
  props: ["show", "data"],
  created() {
    console.log(this.show);
  },
  watch: {
    show(newVal, oldVal) {
      this.myshow = newVal;
    }
  },
  methods: {
    chshow() {
      this.$emit("gshow", false);
    },
    add() {
      this.count++;
    },
    sub() {
      if (this.count == 1) return;
      this.count--;
    },
    colorshow(item) {
      this.ctitle = item;
    },
    storeshow(item) {
      this.stitle = item;
    },
    showup() {
      if (!this.ctitle || !this.stitle) {
        Toast.fail("失败文案");
      } else {
        let userid = localStorage.getItem("id");
        console.log(userid);
        let goodsid = this.data._id;
        let goodsnum = this.count;
        if (userid == null) {
          this.$router.push("/login");
        }
        this.$http
          .post("/api/cartadd", {
            userid: userid,
            goodsid: goodsid,
            goodsnum: goodsnum
          })
          .then(res => {
            if (res.data.status == 1) {
              this.$router.push("/index/cart");
            }

            console.log(res);
          });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  padding: 10px;
  box-sizing: border-box;
}
h2 {
  margin-top: 10px;
}
.imgs {
  width: 100%;
  height: 100px;
  display: flex;
  img {
    width: 100px;
    height: 100px;
  }
  div {
    display: flex;
    flex-flow: column;
  }
}
.sum {
  display: flex;
  justify-content: space-between;
}
.color {
  ul {
    display: flex;
  }
  li {
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    flex-wrap: wrap;
  }
}
.store {
  ul {
    display: flex;
  }
  li {
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    flex-wrap: wrap;
  }
}
.active {
  border: 1px solid green;
}
</style>
<template>
   <div>
    <el-container>
      <el-header>后台系统管理</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            router
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title"></template>
                <el-menu-item index="/mian/cont">管理员</el-menu-item>
                <el-menu-item index="/mian/vip">会员</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title"></template>
                <el-menu-item index="/mian/class">分类管理</el-menu-item>
                <el-menu-item index="/mian/goods">商品管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
              <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>图片管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title"></template>
                <el-menu-item index="/mian/banner">图片管理</el-menu-item>
              
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
         <el-main> <router-view></router-view></el-main>
      
      </el-container>
    </el-container>
 </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}


</style>
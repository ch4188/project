<template>
      <div>
    <el-button type="success" plain @click="jia">添加</el-button>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed type="index" label="数量"></el-table-column>
      <el-table-column prop="title" label="title"></el-table-column>
             <el-table-column label="图片">
                  <template slot-scope="scope">
                <img :src= "'http://localhost:3000'+scope.row.imgurl" />
                  </template>
           </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button type="success" @click="alter(scope.row,scope.$index)">修改</el-button>
          <el-button type="danger" @click="remove(scope.row,scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
        data() {
          return {
             tableData:[]
           }
          }
        ,
        methods: {
          alter() {
            
          },
          remove(){

          },
          jia(){

          }
        },
        created(){
          this.$http.get("/api/bannerlist").then(res=>{
            
            this.tableData=res.data.data
          })
        }
    }
</script>

<style lang="less" scoped>
img{
  width: 200px;
  height: 100px
}
</style>
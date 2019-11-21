<template>
  <div>
<el-button type="success" @click="show">成功按钮</el-button>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed type="index" label="账号"></el-table-column>
         <el-table-column prop="cate" label="分类"></el-table-column>
          <el-table-column prop="title" label="名称"></el-table-column>
           <el-table-column prop="title" label="图片">
                  <template slot-scope="scope">
                <img :src= "'http://localhost:3000'+scope.row.imgurl" />
                  </template>
           </el-table-column>
         
            <el-table-column prop="price" label="价格"></el-table-column>
             <el-table-column prop="desc" label="描述"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button type="success" @click="alter(scope.row)">编辑</el-button>
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
               tableData: []
            }
        },
        methods: {
            alter(row) {
                 this.$router.push("/mian/goodschange?id="+row._id)
                
            },
            remove(row,scope) {
                   	this.$confirm("此操作将永久删除该管理员?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			})
				.then(() => {
					this.$http
						.post("/api/catedel", {
							id: row._id
						})
						.then(res => {
							if (res.data.status == 1) {
								this.tableData.splice(scope.$index, 1);
								this.$message({
									type: "success",
									message: "删除成功!"
								});
							}
						});
				})
				.catch(() => {
					console.log("取消");
					this.$message({
						type: "info",
						message: "已取消删除"
					});
				});

            },
            show(){
                this.$router.push("/mian/goodschange")
            }
        },
        created(){
            this.$http.get("/api/goodslist").then(res=>{
                console.log(res)
                this.tableData=res.data.data
            })
        }
     
    }
</script>

<style lang="less" scoped>
  img{
      width: 100px;
      height: 100px;
  }
</style>
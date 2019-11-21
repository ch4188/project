<template>
  <div>
    <el-button type="success" plain @click="jia">添加</el-button>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed type="index" label="账号"></el-table-column>
      <el-table-column prop="username" label="姓名"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button type="success" @click="alter(scope.row,scope.$index)">修改</el-button>
          <el-button type="danger" @click="remove(scope.row,scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <mod :data="data" @newdata="newdata" @geng="geng" :type="type"></mod>
    </el-dialog>
  </div>
</template>

<script>
import mod from "../../components/cont/mod";
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      data: "",
      type:""
    };
  },
  methods: {
    alter(row, i) {
      console.log();
      console.log(row);
      this.data = row._id;
      this.dialogVisible = true;
      this.type="修改"
    },
    jia(){
        this.type="添加"
        this.dialogVisible=true
    },
    remove(row, scope) {
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
    newdata() {
      this.dialogVisible = false;
    },
    geng(){
         this.$http.get("/api/userlist").then(res => {
      console.log(res);
      this.tableData = res.data.data;
    });
    }
  },
  created() {
   this.geng()
  },
  components: {
    mod
  }
};
</script>

<style scoped>
</style>
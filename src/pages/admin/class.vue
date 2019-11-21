<template>
  <div>
    <el-button type="success" @click="show">成功按钮</el-button>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed type="index" label="账号"></el-table-column>
         <el-table-column prop="title" label="姓名"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button type="success" @click="alter(scope.row)">编辑</el-button>
          <el-button type="danger" @click="remove(scope.row,scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <modtwo :type="type" :dataid="dataid" @geng="geng" @hide="hide"></modtwo>
    </el-dialog>
  </div>
</template>

<script>

import modtwo from "../../components/class/modtwo";
export default {
  data() {
    return {
      dialogVisible: false,
      type: "",
      tableData: [],
      dataid:''
    };
  },
  methods: {
    alter(row) {
        this. dialogVisible=true
        this.dataid=row._id
        this.type="修改"
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
    hide(){
        this.dialogVisible=false
    },
    show(){
       this. dialogVisible=true
        this.type="添加"
    },

    geng() {
      this.$http.get("/api/catelist").then(res => {
        console.log(res);
        this.tableData = res.data.data;
      });
    }
  },
  created() {
      this.geng()
  },
  components: {
  modtwo
  }
};
</script>

<style scoped>
</style>
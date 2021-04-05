<template>
    <div>
         <el-button type="info" @click="$router.push('/index/user/add')">添加按钮</el-button>
    <el-table :data="tableData" style="width: 100%">
           
         <el-table-column   label="序号"  width="390">
     <template slot-scope="scope">
            <span style="margin-left: 10px" class="to">{{ scope.$index+1 }}</span>
     </template>
 </el-table-column>

    <el-table-column   label="姓名"  width="390">
      <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
       
     <div slot="reference" class="name-wrapper">
    <el-tag size="medium">{{ scope.row.username }}</el-tag>
        </div>
        </el-popover>
      </template>
    </el-table-column>


    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.row._id)">编辑</el-button> 
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row._id) ">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {

  data() {
    return {
      input: "",
      tableData: []
    };
  },
  methods: {
    handleEdit(d) {

      this.$router.push("/index/user/" + d);
    },
    handleDelete(s) {
      if (confirm("确定要删除此用户吗？删除后将不可恢复")) {
        this.http({
          method:"post",
          url: "/api/userdel",
          data: {
            id: s
          }
        }).then(result => {
          var idx = this.tableData.findIndex(item => {
            return item._id == s;
          });
          this.tableData.splice(idx, 1);
          console.log(result);
        });
      }
    },
    totijiao(id){
        this.$router.push('/index/category/'+id)
    }
  },
  mounted() {
    this.http.get("/api/userlist").then(res => {
        console.log(res);
      this.tableData = res.data.data;
    });
  }
};
</script>

<style scoped>

.el-table .cell span{
    width: 157px;
    display:inline-block
}
</style>

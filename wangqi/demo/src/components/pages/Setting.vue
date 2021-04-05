<template>
    <div>
      <el-button type="primary" @click="$router.push('/index/setting/add')">添加</el-button>
       <el-table  :data="tableData" border style="width: 100%">
    <el-table-column type="index"    label="序号"  width="180"></el-table-column>
    <el-table-column   prop="title"  label="分类名称"  width="180"></el-table-column>
     
      <el-table-column   prop="status"  label="状态"  width="180">
          
      </el-table-column>
            
               
    <el-table-column   label="操作">
 <template slot-scope="scope">
    <el-button @click="$router.push('/index/setting/'+scope.row._id)" type="primary">编辑</el-button>
    <el-button @click="del(scope.row._id)" type="danger">删除</el-button>
 </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {

  data(){
    return{
      tableData:[]
    }
    
  },
  mounted(){
      this.http({
         method:"get",
        url:'/api/catelist',
      }).then(result=>{
        result.data.data.findIndex(item => {
        if (item.status) {
          item.status = "启用";
        } else {
          item.status = "禁用";
        }
      });

      this.tableData = result.data.data;
       
      })
  },

 methods: {
    del(uid) {
      if (confirm("")) {
        this.http({
          url: "/api/catedel",
          method: "post",
          data: {
            id: uid
          }
        }).then(result => {
          //  console.log(result)
          var idx = this.tableData.findIndex(item => {
            return item._id == uid;
          });
          this.tableData.splice(idx, 1);
        });
      }
    }
  }
}

</script>

<style scoped>
</style>

<template>
    <div>
      <el-button type="primary" @click="$router.push('/index/category/add')">添加</el-button>
      <el-table  :data="tableData" border style="width: 100%">
         <el-table-column type="index"   label="序号"  width="120"></el-table-column>
         <el-table-column   prop="cate"  label="所属分类"  width="120"></el-table-column>
         <el-table-column   prop="title"  label="商品名称"  width="120"></el-table-column>
         <el-table-column  label="商品图片"   width="120">
             <template slot-scope="scope">
               <img style="width:80px;height:80px" :src="'http://localhost:3000'+scope.row.img" alt="">
             </template>
         </el-table-column>
         <el-table-column  prop="price"  label="商品价格"  width="120"></el-table-column>
         <el-table-column  label="商品状态"  width="180" prop="status"></el-table-column>
         <el-table-column   label="操作">
             <template slot-scope="scope">
                <el-button @click="$router.push('/index/category/'+scope.row._id)" type="primary">编辑</el-button>
                <el-button @click="del(scope.row._id)" type="danger">删除</el-button>
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
      tableData: []
    };
  },
  mounted() {
    this.http({ 
      // 商品列表
      url: "/api/goodslist"
    }).then(result => {
      result.data.data.findIndex(item => {
        if (item.status) {
          item.status = "启用";
        } else {
          item.status = "禁用";
        }
      });

      this.tableData = result.data.data;
      console.log(result)
    });
  },
  methods: {
    del(uid) {
      if (confirm("确定要删除此用户吗")) {
        this.http({
          // 删除
          url: "/api/goodsdel",
          method: "post",
          data: {
            id: uid
          }
        }).then(result => {
          var idx = this.tableData.findIndex(item => {
            return item._id == uid;
          });
          this.tableData.splice(idx, 1);
        });
      }
    }
  }
};
</script>

<style scoped>
</style>

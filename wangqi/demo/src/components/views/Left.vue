<template>
<el-container>
    <ul>
      
         <el-menu>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>用户管理</template>
        <el-menu-item-group>
       
          <el-menu-item index="1-1">
        <router-link to="/index/user" >管理员管理</router-link>    
            </el-menu-item>
          <el-menu-item index="1-2">
           <router-link to="/index/user" >
            会员信息列表</router-link>  
            </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
</el-menu>



        <!-- // <li  @click="Show=!Show"><router-link to="/index/setting"  active-class='active'>商品管理</router-link></li>
        //  <li v-show="Show">
        //   <router-link to="/index/setting"  class="to" active-class='active'>商品分类</router-link>
        // </li>
        // <li v-show="Show" class="only">
        //   <router-link to="/index/setting"  class="to"
        //   active-class='active'>商品管理</router-link>
        // </li> -->
  <el-menu>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>商品管理</template>
        <el-menu-item-group>
       
          <el-menu-item index="1-1">
        <router-link to="/index/setting" >商品分类</router-link>    
            </el-menu-item>
          <el-menu-item index="1-2">
           <router-link to="/index/category" >
            商品管理</router-link>  
            </el-menu-item>
              <el-menu-item index="1-3">
           <router-link to="/index/lunbotu" >
            轮播图</router-link>  
            </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
</el-menu>



    </ul>
      
      
        
</el-container>
</template>

<script>
export default {
  data() {
    return {
      // msg: "noneul",
      isShow: false,
      Show: false
      // isx:false
      // username: ""
    };
  }
};
</script>

<style scoped>
a {
  /* display:block; */
  display: block;
  height: 50px;
  line-height: 50px;
  /* font-size: 25px;   */
  text-decoration: none;
  text-align: center;
  color: #000000;
  width: 200px;
  background: #e9eef3;
  margin-left: -40px;
}
a:hover,
.active {
  background: #f16854;
  color: #fff;
   width: 200px;
}

.to {
   color: #758184;
  font-size: 13px;
  /* background: #a8a7a7; */
  /* background: #758184; */
   width: 200px;
}
.ony {
  color: #758184;
  font-size: 13px;
  /* background: #a8a7a7; */
   width: 200px;
}
</style>

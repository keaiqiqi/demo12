<template>
  <div>
      <el-container>
  <el-header>
      <v-header></v-header>
  </el-header>
  <el-container>
    <el-aside width="200px">
         <v-left></v-left>
      
    </el-aside>
    <el-main>
          <v-right></v-right>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import vHeader from "../views/Header";
import vMain from "../views/Main";
import vLeft from '../views/Left'
import vRight from '../views/Right'
export default {
  components: {
    vHeader,
    vMain,
     vLeft,
     vRight
  }
};
</script>

<style scoped>
.el-header,
.el-footer {
  background: linear-gradient(to right, #a8caba, #5d4157);
  color: #333;
  text-align: center;
  line-height: 60px;
        /* display: flex;  */
}

.el-aside {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 570x;
     
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
  height: 570px;
 
}
</style>

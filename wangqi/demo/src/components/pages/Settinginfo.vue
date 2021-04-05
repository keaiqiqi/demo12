<template>
<div>
<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item><a href="/#/index/setting">分类管理</a></el-breadcrumb-item>
  <el-breadcrumb-item>分类{{tip}}</el-breadcrumb-item>
  
</el-breadcrumb>

  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="分类名称">
    <el-input v-model="form.title"></el-input>
  </el-form-item>
  
<el-form-item label="状态" :model="form">
    <el-switch  v-model="form.status"  active-color="#13ce66" inactive-color="#ff4949"></el-switch>
</el-form-item>

  <el-form-item>
    <el-button type="primary" @click ="onSubmit">提交</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
export default {
  data(){
    return{
      // value:true,
     form:{ 
      title:'',
      status:"true"
    },
    tip:'添加'
    }
    
  },
  methods:{
    onSubmit(){
      //  验证密码:
       if(this.form.title ==""){
         this.swal("请填写用户名和密码");
         return;
                                    
       }
       var url ="/api/cateadd";
       if(this.$route.params.userid){
         url="/api/cateedit";
         this.form.id = this.$route.params.userid;
       }
      //  console.log(this.form);return
       this.http({
         url,
         method:'post',
         data:this.form
       }).then(result=>{
         this.swal(result.data.info).then(()=>{
          this.$router.push('/index/setting')
         });
        
       })
    }
  },
  
 mounted() {
    this.http({
      url: "api/catelist"
    }).then(result => {
      this.options = result.data.data;
    });
    if (this.$route.params.userid) {
      this.tip = "修改";
      this.http({
        method:"post",
        url: "/api/cateedit",
        params: {
          id: this.$route.params.userid
        }
      }).then(result => {
        // this.form = result.data.data[0];
           this.form.title = result.data.data.title
      });
    }
  }
}

</script>

<style scoped>
  .el-breadcrumb{
    margin-bottom: 20px;
  }

</style>

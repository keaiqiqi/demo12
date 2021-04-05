<template>
    <div>
        <div>用户{{tip}}页面</div>
     用户名： <el-input placeholder="请输入内容"  v-model="info.username" clearable> </el-input>
    密码： <el-input placeholder="请输入密码" v-model="info.password" show-password></el-input>
       <el-button type="primary" @click="onSubmit">提交</el-button> 
    </div>
</template>

<script>
export default {
 data() {
    return {
          tip:"添加",
      input: '',
   
      info:{
      username:"",
      password:"",
      }
    }
  },
  // mounted(){
  //       if(this.$route.params.userid){
  //           this.tip="修改"
  //           //根据传递的参数进行请求获取到相应的信息
  //           this.http({
  //               method:"get",
  //               url:'/api/userinfo?id='+this.$route.params.userid
  //           }).then(res=>{
  //                 this.info=res.data.data
  //           })
  //       }
  // },
mounted() {
    // this.http({
    //   url: "api/userlist"
    // }).then(result => {
    //   this.options = result.data.data;
    // });
    if (this.$route.params.userid) {
      this.tip = "修改";
      this.http({
        // method:'post',
        url: "/api/userinfo",
        params: {
          id: this.$route.params.userid
        }
      }).then(result => {
        this.info.username= result.data.data.username;
        // console.log(result)
      });
    }
  },

 methods: {
   onSubmit() {
      if (this.info.username == "" || this.info.password=='') {
        this.swal("请填写用户名和密码");
        return;
      }

     var url = "/api/useradd";
     if(this.$route.params.userid){
       url= '/api/useredit';
       this.info.id = this.$route.params.userid;
       
     }
     this.http({
       url,
       method:'post',
       data:this.info
     }).then(result=>{
       this.swal(result.data.info);
       this.$router.push('/index/user')
     })
    }
  }
}
</script>

<style>

</style>

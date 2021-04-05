<template>
    <div>
        <div class="denglu">
            <div class="denglu1">
                <span class="onedeng"> ＜ </span>
                 <span class="twodeng">注册</span>
                  <span class="theredenglu">登录</span>
            </div>
        </div>
        <!-- 2 -->
        <div class="bao">
            <div class="baoton">
            <div class="shouji">
                <span>手机号:</span>
                <input type="text" name="username" v-model="username" placeholder="请输入手机号">
            </div>
            <div class="mima">
                <span>密码:</span>
                <input type="password" name="password" v-model="password" placeholder="请输入密码">
            </div>
            <div class="mima">
                <span>验证码:</span>
                <input type="text">
                  <span class="tomi">点击获取</span>
            </div>
           
            <button  @click="toLogin(username,password)">下一步</button>
            </div>
            <div class="wo">
                <input type="checkbox">
                <span>我已阅读并同意使用条款和隐私政策</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   data(){
       return{
           username:"",
           password:''
       }
   },

  methods: {
        
        toLogin(a,b){
            if(this.username =='' || this.password == ''){
               alert('请填写用户名和密码');
               return;
           }
            console.log(12121);
            this.$http({
                method:'post',
                url:'/api/memberadd',
                data:{
                    username:this.username,
                    password:this.password
                }
            }).then(res=>{
                this.$router.push('/indexone')
            })
        }
    },

}

 

</script>

<style scoped>
 .denglu{
     width: 100%;
     height: 1.4rem;
     background:#ff9900;
 }
  .denglu1{
      width: 6rem;
      margin:0 auto;
      height: 1.4rem;

 }
  .denglu .denglu1 .onedeng{
      color: #ffffff;
      font-size: 0.3rem;
       float: left;
        margin-top:0.4rem;
  }
    .denglu .denglu1 .twodeng{
      color: #ffffff;
      font-size: 0.3rem;
      float: left;
      margin-left: 2.24rem;
       margin-top:0.4rem;
  }
    .denglu .denglu1 .theredenglu{
      color: #ffffff;
      font-size: 0.3rem;
      float: right;
      margin-top:0.4rem;
  }
.bao{
    width: 5rem;
    height: 8rem;
    margin: 0 auto;
}
.bao .baoton{
    width: 5rem;
    height: 5rem;
    margin: 0 auto;
    margin-top:2rem;

}
.bao .baoton .shouji{
    width:5rem;
    height: 1rem;
    color: #6e6e6e;
    font-size: 0.3rem;
    border-bottom: 0.01rem solid #a3a3a3;
      margin-top:0.4rem;
}
.bao .baoton input{
    border: none;
    outline: 0;
}
.bao .baoton .mima{
    width:5rem;
    height: 1rem;
    color: #6e6e6e;
    font-size: 0.3rem;
    margin-top:0.4rem;
    border-bottom: 0.01rem solid #a3a3a3;
}
.bao .baoton input{
    border: none;
    outline: 0;
    height: 0.8rem;
}
.baotonn{
    width: 4rem;
    margin: 0 auto;
    background: red
}
 .baotonn .tomi{
     width: 1rem;
     color: #6e6e6e;
     float: right;
     font-size: 0.1rem;
 }
 button{
     width: 5rem;
     background: #ff9900;
     text-align: center;
     height:1rem;
     border: none;
     border-radius: 0.09rem 0.09rem;
     color: #ffffff;
 }
 .wo{
     width: 6rem;
    margin: 0 auto;

 }
 .wo input{
     margin-left:0.01rem;
 }
 .wo span{
    font-size: 0.03rem;
 }
 .tomi{
     color: red
 }
</style>

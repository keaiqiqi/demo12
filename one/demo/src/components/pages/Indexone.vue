<template>
    <div>
        <div class="denglu">
            <div class="denglu1">
                <span class="onedeng"> ＜ </span>
                 <span class="twodeng" >登录</span>
                  <span class="theredenglu">注册</span>
            </div>
        </div>
        <!-- 2 -->
        <div class="bao">
            <div class="baoton">
            <div class="shouji">
                <span>手机号:</span>
                <input type="text" name="username" v-model="username">
            </div>
            <div class="mima">
                <span>密码:</span>
                <input type="password" name="password" v-model="password">
            </div>
            <div class="baotonn">
                <span class="tomi">忘记密码</span>
            </div>
            <button  @click="onSubmit(username,password)" >登录</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // methods: {
        data(){
     return{
         username:'',
         password:''
//      }
 }},
 mounted() {
    this.$http({
      url: "/api/categoods"
    }).then(res => {
    //    console.log(res)
      this.arr = res.data.data;
      this.flag = res.data.data[0].title;
    });
  },
  methods:{
      onSubmit(a,b){
            if(this.username =='' || this.password == ''){
               alert('请填写用户名和密码');
               return;
           }
  
            this.$http({
                 method:'post',
                 url:'/api/memberlogin',
               
                data:{
                    username:this.username,
                    password:this.password
                }
            }).then(res=>{
                // this.$router.push('/index')
                console.log(res)
            if (res.data.status == 1) {
            localStorage.setItem("use", this.username);
            this.$router.history.push("/index/Mainbottomone");
               } else {
              alert(res.data.info);
            console.log(localStorage.setItem)
           }
            })
        }
    }      
     
    }
    

 

// }
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
</style>

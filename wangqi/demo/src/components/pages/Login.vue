<template>
       <div id="box"> 
        <div id="boxx">
        
        <h1>Fine Jade后台管理系统</h1>
       <div id="bao">
         <input placeholder="用户名" id="username" v-model="name" autocomplete="off">
         <input type="password" placeholder="密码" id="password" v-model="age" autocomplete="off">
         <div id="gogo" @click="gomy()">Go</div>
         </div>
       </div>
    
       </div>
</template>

<script>
export default {
 data(){
     return{
        name:'',
        age:'',
     }
  },
  methods: {
    gomy() {
      if (this.name == "" && this.age == "") {
              alert("请先输入用户名和密码");
       
        //   return
    //   } else if (this.name == "" ||this.age == "") {
    //     alert("请先输入用户名和密码");
      } else if(this.name ==""){
         alert("请先输入用户名");
      }else if(this.age ==""){
      
          alert("请先输入密码");
      }else {
            sessionStorage.setItem("user",this.name)
            this.$router.history.push("/index");
      }
    }
  },
  data() {
    return {
      name: "",
      age: "",
    };
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#boxx {
  width: 1366px;
  height: 639px;
  background: url("/static/img/login.png");
  padding-top: 150px;
}
#boxx h1 {
  /* margin-left: 500px;
  margin-top: 100px; */
  text-align: center;
}
#boxx #bao {
  width: 690px;
  height: 60px;
  background: #e2e7eb;
  background-color: rgba(255, 255, 255, 0.25);
  margin-left: 340px;
  margin-top: 80px;
}
#boxx #username {
  width: 300px;
  height: 40px;
  border: 2px solid #c7cbce;
  border-radius: 5px;
  margin-top: 7px;
  margin-left: 10px;
  float: left;
  outline: none;

}
#boxx #password {
  width: 300px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid #c7cbce;
  margin-top: 7px;
  float: left;
  outline: none;

}
#boxx #gogo {
  width: 50px;
  height: 40px;
  background: #44546e;
  float: left;
  margin-top: 8px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}
#boxx #gogo:hover {
  background: #f88912;
}
</style>

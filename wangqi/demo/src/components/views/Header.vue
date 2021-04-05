<template>
    <div>
         <div id="dabox">
        <div id="boxx" class="navbar navbar-default navbar-fixed-top">
            <span id="left">Fine Jade</span> <div><img src="/static/img/touxiang.png"><span id="right">{{name}}</span><button class="logout" @click="logout()">退出</button></div>
            
        </div>
        <div id="toleft"></div>
    </div>
    </div>

</template>

<script>
export default {
   data() {
    return {
      name: ""
    };
  },
  methods: {
    logout() {
      //第一种删除指定的key的本地存储数据删删除一个
      // localStorage.removeItem("user")
      // 第二种删除方式
      // localStorage.clear() //清除所有的本地存储数据
      sessionStorage.clear();
      this.$router.push("/login");
    }
  },
  // 页面挂载完成之后
  mounted() {
    //  从本地的存储中去读取到在给它赋值
    this.name = sessionStorage.getItem("user");
  }
};
</script>

<style scoped>
#dabox {
  width: 100%;
  height: 60px;
  background: linear-gradient(to right, #a8caba, #5d4157);
}
#boxx {
  width: 100%;
  height: 60px;
  background: linear-gradient(to right, #a8caba, #5d4157);
}
#boxx #left {
  font-size: 40px;
  color: #ffffff;
  margin-left: 50px;
  float: left;
}
#boxx #right {
  font-size: 17px;
  color: #dddddd;
  /* margin-left: 980px; */
  float: left;
  /* padding-top: 20px; */
}
#boxx img {
  width: 40px;
  height: 40px;
  margin-left: 940px;
  /* padding-top: 10px; */
  float: left;
  margin-top: 10px;
  border-radius: 50%;
}
#toleft {
  /* display: flex; */
  width: 300px;
  background: darkgrey;
}
#right {
  /* margin-top: px; */
  margin-left: 7px;
}
.logout {
  background: linear-gradient(to right, #b20a2c, #536976);
  margin-left: 10px;
  margin-top: 18px;
  color: #ffffff;
}
</style>

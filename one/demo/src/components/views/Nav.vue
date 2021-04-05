<template>
<div class="boxs">
    <ul class="boxbottom">
      <li><router-link to="/index/Mainbottomone" active-class="active">
      <img src="/static/img/tab_home_nor.png" alt="">
      <span>首页</span>
      </router-link></li>
      <li> <router-link to="/index/Mainbottomtwo" active-class="active">
      <img src="/static/img/tab_home_nor.png" alt="">
       <span>分类</span>
      </router-link></li>

       <li> <router-link to="/index/Mainbottomthress" active-class="active">
       <img src="/static/img/tab_home_nor.png" alt="">
       <span>购物车</span>
       </router-link></li>
      <li><router-link to="/index/Mainbottomfirt" active-class="active">
        <img src="/static/img/tab_home_nor.png" alt="">
      <span>我</span>
      </router-link></li>
    </ul>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.boxs{
  width: 100%;

}
.boxbottom{
  width: 6rem;
  margin: 0 auto;
  height:2rem;

}
a{
  font-size: 0.2rem;
    width: 100%;
    height: 0.4rem;
    color: #343434;
    text-decoration: none;
}
li{
  display: inline-block;
  height: 1.6rem;
  /* margin-left: 0.01rem; */
  width: 1.27rem;
  text-align: center
}
ul li img{
   width: 0.5rem;
   height: 0.5rem;
   
}
ul li span{
  width: 1rem;
  height: 0.4rem;
  display: block
}

</style>

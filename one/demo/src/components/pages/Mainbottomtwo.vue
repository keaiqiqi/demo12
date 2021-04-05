<template>
  <div>
    <header>
    <div class="twotop">
         <div class="main-top">
         <input type="text" placeholder="Montagne jeunesse">
         <img  src="/static/img/search.png" class="tu1" alt="">
        </div>
    </div>
    </header>
    <div class="box">
      <div class="left">
        <ul>
          <li :class="{'active':flag == item.title}" v-for="item of arr" :key="item._id" @click="toggle(item.title)" >{{ item.title }}</li>
        </ul>
      </div>
      <div class="right">
        <ul class="one" v-for="goods of arr" :key="goods._id" v-show="flag == goods.title">
          <li v-for="subgoods of goods.children" :key="subgoods._id">
            <img :src="'http://localhost:3000'+subgoods.img" alt />
            <p>{{subgoods.title}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// import vSearch from "../views/search";
export default {
  // components: {
  //   // vSearch
  // },
  data() {
    return {
      flag: "",
      arr: [],
      good: []
    };
  },

  methods: {
    toggle(str) {
      this.flag = str;
    }
  },
  mounted() {
    this.$http({
      url: "/api/categoods"
    }).then(res => {
       console.log(res)
      this.arr = res.data.data;
      this.flag = res.data.data[0].title;
    });
  }
};
</script>
<style scoped>
*{
  margin:0;
  padding: 0;
}
header {
  height: 1.5rem;
  background: #ff9900;
}
.box {
  display: flex;
}
.left {
  width: 1.8rem;
  background: #fafafa;
}
.right {
  flex: 1;
  height: 8.1rem;
}
.right li {
  float: left;
  margin: 0.1rem;
}
.left li {
  font-size: 0.3rem;
  text-align: center;
  line-height: 1rem;
  letter-spacing: 0.07rem;
}
.active{
  color: #ff9900;
  background: #fff;
  border-left: 2px solid #ff9900;
}
.one li{
  width: 2rem;
  border: 1px solid #ff9900;
  border-radius: 0.1rem;
  list-style: none;
}
.one li img{
  width: 2rem;
  height: 2rem;
}
.one li p{
  font-size: 0.1rem;
  background: #ff9900;
  color: #ffff
}
.twotop{
    width: 100%;
    height: 1.37rem;
    background: #fe9900;
}
.twotop .main-top {
  width: 5.17rem;
  height: 0.6rem;
  background: #ffffff;
  position: absolute;
  border-radius: 5px 5px;
  margin-left: 0.62rem;
  margin-top: 0.45rem;
  opacity: 0.7;
}
.twotop .main-top input {
  position: absolute;
  float: left;
  border: none;
  outline: 0;
  margin-left: 0.3rem;
  margin-top: 0.14rem;
}
.twotop .main-top .tu1 {
  position: absolute;
  float: right;
  margin-left: 263px;
  width: 0.39rem;
  height: 0.39rem;
  margin-top: 0.1rem;
}

</style>

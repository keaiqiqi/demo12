<template>
    <div>
      <div class="denglu">
            <div class="denglu1">
                <span class="onedeng" @click="$router.go(-1)"> ＜ </span>
                 <span class="twodeng">购物车</span>
            </div>
        </div>
        <div class="gouwuche" >
            <div class="gou" v-show =" mark=='false'">
                <img src="static/img/tab_shopping_nor.png" alt="">
                  <span>购物车还是空的快去逛逛吧~</span>
           
                 <!-- </div> -->
               </div> 
 <div class="hangzhou" v-show ="mark=='true'" v-for="(song,index) of message" :key='song._id'>
     <img src="static/img/store.png" alt="">
     <span>杭州保税区仓</span>
     <div class="yingd">
         <!-- <span></span> -->
        <input type="checkbox" class="onetu" @click="tout()" >
          <img :src="'http://localhost:3000' + song.goods_img" alt="" class="towtu">
         <div class="twodutp">
          <span class="tongnian">{{song.goods_title}}</span> 
          <div class="tong">
          <span class="tongnian1" @click="jian()">-</span> 
          <span class="tongnian2" >{{wang}}</span> 
          <span class="tongnian3" @click="jia()">+</span> 
</div>


</div>
             
             <span class="ddner">￥{{song.goods_price}}</span>
             <span class="shuzied" ref="shuzie" v-show="su=='false'" @click="shanchu(song._id,index)">删除</span>
         </div>
     </div>
 </div>
       <div class="baowsi">
           <div class="quanquan"><input type="checkbox"  class="quanxuan"  :checked="allchecked" @click="changeAll()">
           <span class="qunx"  @click="qunx()">全选</span>
           </div>
           <div class="bianbian" @click="bianbian()" >
                <input type="checkbox" class="bianji">
                 <span class="bianjix">编辑</span>
           </div>
             
             <span class="heji">合计：118:00(不含运费)</span>
                <span class="jiesuan">去结算</span>
       </div>

        </div>



    <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      // goods:[],
      message: [],
      su: "true",
      wang: "1",
      allchecked: false,
      mark: "false",
      //  checked: true,
      userid: "",
      //   banners: [],
      //   message: [],
      goods: [
        {
          checked: false
        },
        {
          checked: false
        },
        {
          checked: false
        }
      ]
    };
  },
  computed: {
    // totalPrice(){
    //     var sum =0;
    //     this.goods.map(item=>{
    //         sum+=item.
    //     })
    // }
  },
  methods: {
    //    mark("false"){
    //    if(localStorage.getItem("user")){

    // }   },
    changeAll() {
      //把当前全选的状态取反
      //    console.log(this.goods) //这个时候就改变了flase
      //  this.allchecked=!this.allchecked;
      //遍历所有的商品把全选的状态进行同步到每一个商品上map是返回的是组数
      //   this.goods.map(item=>{
      //   item.checked=this.allchecked
      //   })
    },
    bianbian() {
      //   this.$refs.shuzied.style.display = "block";
      if (this.su == "true") {
        this.su = "false";
      } else {
        this.su = "true";
      }
    },
    tout() {
      console.log(1);
    },
    bianjix() {
      this.$refs.de.style.display = "block";
    },
    // qunx(){

    //   },
    shanchu(d,b) {
      // splice根据数组下标删除指定的数组元素
      this.$http({
        method: "post",
        url: "/api/cartdel",
        data: {
          id:d
        }
      }).then(res => {
        console.log(res);
        //    this.message = res.data.data;
        this.message.splice(b, 1);
      });
    },
    jian() {
      //  console.log(this.wang)
      //  this.wang--
      if (this.wang > 1) {
        this.wang--;
      }
    },
    jia() {
      if (this.wang < 99) {
        this.wang++;
      }
    }
  },
  mounted() {
    if (localStorage.getItem("use")) {
       this.mark = "true";
    }

    this.$http({
      url: "/api/cartlist?" + localStorage.getItem("use"),

      params: {
        userid: localStorage.getItem("use")
      }
    }).then(res => {
      console.log(res);
      this.message = res.data.data;
    });
  }
};
</script>

<style scoped>
.heji {
  font-size: 0.09rem;
  color: #686868;
  width: 1.66rem;
  display: inline-block;
}
.jiesuan {
  width: 2.3rem;
  height: 1.07rem;
  background: #ff5500;
  display: inline-block;
  font-size: 0.5rem;
  text-align: center;
  line-height: 1.07rem;
  color: #ffffff;
}
.bianbian {
  width: 1rem;
  height: 1.5rem;
  position: relative;
  float: left;
  margin-top: 0.5rem;
}
.bianbian .bianji {
  position: absolute;
  margin-left: 0.2rem;
}
.bianbian .bianjix {
  position: absolute;
  font-size: 0.4rem;
  margin-top: 0.4rem;
}
.quanquan {
  width: 1rem;
  height: 1.5rem;
  /* background: #000000; */
  position: relative;
  float: left;
  margin-top: 0.5rem;
}
.quanquan .quanxuan {
  position: absolute;
  margin-left: 0.2rem;
}
.quanquan .qunx {
  position: absolute;
  font-size: 0.4rem;
  margin-top: 0.4rem;
}
.baowsi {
  width: 100%;
  height: 2rem;
  background: #ffffff;
}

.shuzied {
  /* float: left; */
  width: -0.3rem;
  /* display: inline-block; */
  /* color: #ffffff; */
  background: #ff9900;
  height: 1.4rem;
  text-align: center;
  line-height: 1.4rem;
  /* display:none; */
}
.ddner {
  /* float: left; */
  display: inline-block;
  margin-top: 0.5rem;
  width: 1rem;
  height: 0.7rem;
  font-size: 0.4rem;
  text-align: center;
  line-height: 0.7rem;
  color: #000000;
}
.twodne {
  float: left;
}
.twodet {
  width: 3rem;
}
.twodet span {
  /* float: left; */
  display: inline-block;
  width: 0.09rem;
  height: 0.3rem;
}
.twodet {
  width: 3rem;
  height: 1rem;
  background: black;
}
.twodddw {
  font-size: 0.04rem;
  display: inline-block;
}
.hangzhou {
  width: 100%;
  height: 3.48rem;
  background: #fafafa;
  float: left;
}
.yingd {
  width: 100%;
  height: 2.37rem;
  float: left;
}
.twodutp {
  width: 2rem;
  height: 1rem;
  display: inline-block;
  font-size: 0.3rem;
  float: left;
  margin-left: 0.3rem;
}
.tong {
  width: 2rem;
  height: 1rem;
  float: left;
  /* margin-left: 0.2rem */
}
.twodutp .tongnian {
  width: 2rem;
  height: 0.9rem;
}
.twodutp .tongnian1 {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border: 0.01rem solid #bbbbbb;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.3rem;
}
.twodutp .tongnian2 {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border: 0.01rem solid #bbbbbb;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.3rem;
}
.twodutp .tongnian3 {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border: 0.01rem solid #bbbbbb;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.3rem;
}
.onetu {
  width: 0.4rem;
  height: 0.4rem;
  margin-left: 0.07rem;
  padding-bottom: 0.3rem;
  float: left;
  margin-top: 0.8rem;
}
.towtu {
  width: 1.63rem;
  height: 1.67rem;
  /* margin-top:0.05rem; */
  margin-left: 0.07rem;
  padding-bottom: 0.3rem;
  float: left;
}
.denglu {
  width: 100%;
  /* height: 1.4rem; */
  height: 100%;
  background: #ff9900;
}
.denglu1 {
  width: 6rem;
  margin: 0 auto;
  height: 1.4rem;
}
.denglu .denglu1 .onedeng {
  color: #ffffff;
  font-size: 0.3rem;
  float: left;
  margin-top: 0.4rem;
}
.denglu .denglu1 .twodeng {
  color: #ffffff;
  font-size: 0.3rem;
  float: left;
  margin-left: 2.24rem;
  margin-top: 0.4rem;
}
.gouwuche {
  width: 100%;
  background: #fafafa;
  overflow: hidden;
}
.gouwuche .gou {
  width: 1.3rem;
  height: 2rem;
  text-align: center;
  margin-left: 2.4rem;
}
.gouwuche span {
  font-size: 0.04rem;
  color: #686868;
  /* width: 1.5rem; */
  display: inline-block;
}
</style>

<template>
<div>
  <!-- <div class="top"> -->
        <!-- <div class="boxt"> -->
         <div class="main-top">
         <input type="text" placeholder="Montagne jeunesse">
         <img  src="/static/img/search.png" class="tu1" alt="">
          <!-- </div> -->
          <!-- </div> -->
              </div>
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide v-for="(banner,index) of banners" :key="index">
   <img :src="banner.imageUrl"  class="tio"/>
    </swiper-slide>
   
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>

    <div class="box">

        <!-- 今日 -->
        <div class="toot" v-for="song of message" :key='song._id'>
            <div class="boxx">
              <img src="static/img/hot.png" class="jintu" alt="">
              <span class="fengqiang">{{song.title}}</span>
            </div>
            <div class="boxxx" >
             <div class="boxxxleft" v-for='wong of song.children ' :key=wong._id @click="go(wong._id)">
                <img :src="'http://localhost:3000' + wong.img"
                 class="tutu1"/>
                <div class="shuju">
                    <span class="qianleft">{{wong.price}}</span>
                    <span class="qianright">￥96.00</span>
                </div>
                <div class="zi">
                 {{wong.title}}
                </div>
             </div>
         </div>
         <!-- 2 -->
         
      </div>

           </div>
          </div>
          <!-- </div> -->
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  // 第二步赋值到我们的页面上
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      banners: [],
      message: [],
      arr: [],
      swiperOption: {
        loop: true,
        autoplay: true,
        speed: 1000,
        //分页小圆点按钮
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
          dynamicBullets: false
        },
        //左右两个箭头可以点击
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  //   第一步获取到数据
  mounted() {
    this.$http({
      url: "/api/categoods"
    }).then(res => {
      console.log(res);
      this.message = res.data.data;
    });
    // 获取轮播图

    this.$http({
      url: "/music/banner"
    }).then(res => {
      // console.log(res);
      this.banners = res.data.banners;
    });
  },
  methods:{
    callback(){

    },
    go(b){
        // console.log(b)
        this.$router.push('mainbottomone/'+b)
    }
  }
};
</script>

<style scoped>
/* .boxt {
  height: 5rem;
}
.top {
  width: 100%;
  height: 5.2rem;
  background: red;
  position: relative;
} */
.main-top {
  width: 5.17rem;
  height: 0.6rem;
  background: #ffffff;
  position: absolute;
  border-radius: 5px 5px;
  margin-left: 0.62rem;
  margin-top: 0.63rem;
  opacity: 0.8;
  z-index: 999
}
.main-top input {
  position: absolute;
  float: left;
  border: none;
  outline: 0;
  margin-left: 0.3rem;
  margin-top: 0.14rem;
}
.main-top .tu1 {
  position: absolute;
  float: right;
  margin-left: 268px;
  width: 0.39rem;
  height: 0.39rem;
  margin-top: 0.1rem;
}

/* 2 */
.box {
  height: 25rem;
  width: 100%;
  background: #fafafa;
  /* background: red */
}
.boxx {
  width: 6rem;
  height: 0.95rem;
  margin: 0 auto;
}
.jintu {
  width: 0.39rem;
  height: 0.39rem;
  float: left;
  margin-top: 0.27rem;
}
.fengqiang {
  height: 0.25rem;
  font-size: 0.25rem;
  float: left;
  margin-left: 0.36rem;
  margin-top: 0.3rem;
}
.boxxx {
  height: 4.66rem;
  width: 6rem;
  margin: 0 auto;
  background: #fafafa;
}
.boxxxleft {
  width: 2.89rem;
  height: 4.66rem;
  background: #ffffff;
  float: left;
  border: 0.01rem solid #eeeeee;
}
.boxxxright {
  width: 2.89rem;
  height: 4.66rem;
  background: #ffffff;
  float: right;
  border: 0.01rem solid #eeeeee;
}
.tuleft {
  width: 1.6rem;
  height: 2.6rem;
  margin-left: 0.6rem;
  margin-top: 0.5rem;
}
.shuju {
  width: 2.89rem;
  height: 0.48rem;
}
.shuju .qianleft {
  font-size: 0.23rem;
  color: #e70014;
  float: left;
  margin-left: 0.15rem;
}
.shuju .qianright {
  font-size: 0.23rem;
  color: #707070;
  float: left;
  margin-left: 0.99rem;
}
.zi {
  width: 2.89rem;
  font-size: 0.24rem;
  margin-left: 0.06rem;
  color: #707070;
}
.toot {
  width: 100%;
  height: 5.63rem;
  background: #fafafa;
}
.tutu1 {
  width: 1.6rem;
  height: 2.6rem;
  margin-left: 0.6rem;
  margin-top: 0.5rem;
}
.tio{
  width: 100%;
  height: 3rem;

}

</style>

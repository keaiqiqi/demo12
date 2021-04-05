<template>
    <div>
        <div class="yinger">
            <div class="yingerr">
             
                 <span class="onetu"  @click="$router.go(-1)"><img src="/static/img/icon_back.png" alt=""></span> 
                 <span  class="twotu"><img src="/static/img/icon_menu.png" alt=""></span>
                  
                  <span  class="threetu"><img src="/static/img/icon_shopping.png" alt=""></span>
                 
                  <div class="zhong">
                      <!-- <img src="/static/img/tab_shopping_hig.png" alt="" class="tuche"> -->
                       <img :src="'http://localhost:3000' + songs.img" class="tuche">
                  </div>

                 <div class="threeguan">
                    <span class="threeguanone">
                        {{songs.desc}}</span>  <span class="threeguantow">收藏</span>
                 </div>

                 <div class="twoguan">
                     <span class="twoguanone">￥{{songs.price}}</span> <span class="twoguantwo">6.5折</span> <span class="twoguanonet">包邮</span>
                   
                 </div>
                  <div class="oneguan">
                     <span class="one1">￥998.00</span> <span class="one2">正品货源</span> <span class="one3">一件代发</span> <span class="one4">全球直邮</span> <span class="one5">售后无忧</span>
                 </div>
            </div>
        </div>
      
           <div class="shang">
           </div>
           <div class="shangpin">
               <div class="shang1">
                   <div class="shangpin1">商品详情</div>
                   <div class="shangpin2">买家口碑 </div>
               </div>
                   <div>我最红！</div>
           </div>

            <div class="zongjiaw">
                <span class="zongone">总价</span>
                   <span class="zongtwo">￥0.00</span>
                      <span class="zongthree" @click="foto()">加入购物车</span>
                         <span class="zongfour" @click="buttonf()">立即购买</span>
           
        </div>
<div class="close" ref="close" >
   
</div>
<!-- 隐藏 -->
  <div class="goumai" ref="goumai" >
      <!-- 上层 -->
       <div class="shangceng">
           <span class="totn"><img :src="'http://localhost:3000' + songs.img"></span>
           <div class="shangcshu">
               <span class="shangcshu1">￥{{songs.price}}</span>
               <span class="shangcshuone1">库存123456件</span>
               <span class="shangcshu3">请选择商品属性</span>
           </div>
           <span class="shang4" ref="shang4" @click="goi()"  >X</span>
       </div>
       <!-- 购买数量 -->
       <div class="shuliang">
           <span class="shuliang1">购买数量</span>
           <div class="shuliang2">
               <span class="shuliangtow" @click="dianji()">-</span>
                  <span class="tod">{{wang}}</span>
                 <span class="shuliangtoww" @click="dian()">+</span>
           </div>
       </div >
       <!-- 大小 -->
       <div class="daxiao">
     <span class="daxiaoone">大小</span>
     <span class="daxiaotwo">1L</span>
     <span class="daxiaothree">2L</span>
     <span class="daxiaofour">3L</span>
     <span class="daxiaofive">4L</span>
       </div>
       <!-- 年龄 -->
    <div class="daxiao">
     <span class="daxiaoone">年龄</span>
     <span class="daxiaotwo">5岁</span>
       <span class="daxiaothree">3岁</span>
       </div>
       <!-- 总价 -->
       <div class="zongjia1d">
           <span class="zongjiaone1" >总价：</span>
            <span class="zongjiaone2"  @click="zongjiadx()">￥{{songs.price *wang}}</span>
             <span class="zongjiaone3" @click="dawo()" >加入购物车</span>
              <span class="zongjiaone4">立即购买</span>
       </div>
       <!-- 没了 -->
     </div>
<div class="toto" ref="toto">

</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      wang: "1",
      songs: []
    };
  },
  methods: {
    dawo() {
      this.$http({
        method: "post",
        url: "api/cartadd",
        data: {
          userid: localStorage.getItem("use"),
          goodsid: this.$route.params.id
        }
      }).then(res => {
        console.log(res);
      });
      this.$router.push("/index/Mainbottomthress");
    },
    foto() {
      this.$refs.close.style.display = "block";
      this.$refs.goumai.style.display = "block";
    },
    close() {
      this.$refs.close.style.display = "none";
      this.$refs.toto.style.display = "none";
    },
    goi() {
      this.$refs.goumai.style.display = "none";
      this.$refs.close.style.display = "none";
    },
    zongjiadx() {
      console.log(this.wang);
    },
    dianji() {
      //  console.log(this.wang)
      //  this.wang--
      if (this.wang > 1) {
        this.wang--;
      }
    },
    dian() {
      if (this.wang < 99) {
        this.wang++;
      }
    }
  },
  mounted() {
    this.$http({
      url: "/api/goodsinfo",
      params: { id: this.$route.params.id }
    }).then(res => {
      console.log(res);
      this.songs = res.data.data;
    });
  }
};
</script>

<style scoped>
.yinger {
  height: 7.72rem;
  width: 100%;
}
.yinger .yingerr {
  width: 6rem;
  margin: 0 auto;
  background: #ffffff;
  height: 7.72rem;
  position: relative;
  border-bottom: 0.01rem solid #eeeeee;
}
.onetu {
  width: 0.52rem;
  height: 0.52rem;
  background: #b2b2b2;
  display: inline-block;
  border-radius: 50% 50%;
  position: absolute;
  margin-top: 0.1rem;
  margin-left: 0.03rem;
}
.onetu img {
  width: 0.2rem;
  height: 0.2rem;
  position: absolute;
  left: 0.13rem;
  top: 0.13rem;
}

.threetu {
  width: 0.52rem;
  height: 0.52rem;
  background: #b2b2b2;
  display: inline-block;
  border-radius: 50% 50%;
  position: absolute;
  margin-left: 4.5rem;
  margin-top: 0.1rem;
}
.threetu img {
  width: 0.2rem;
  height: 0.2rem;
  position: absolute;
  left: 0.13rem;
  top: 0.13rem;
}
.twotu {
  width: 0.52rem;
  height: 0.52rem;
  background: #b2b2b2;
  display: inline-block;
  border-radius: 50% 50%;
  position: absolute;
  margin-left: 5.4rem;
  margin-top: 0.1rem;
}
.twotu img {
  width: 0.2rem;
  height: 0.05rem;
  position: absolute;
  left: 0.15rem;
  top: 0.2rem;
}
.zhong {
  width: 6rem;
  margin: 0 auto;
  background: #ffffff;
  height: 5.39rem;
  text-align: center;
}
.zhong .tuche {
  width: 3.3rem;
  height: 4.82rem;
  margin-top: 0.4rem;
}
.threeguan {
  width: 6rem;
  height: 1rem;
}

.threeguan .threeguanone {
  width: 5rem;
  height: 0.84rem;
  font-size: 0.04rem;
  float: left;
}
.threeguan .threeguantow {
  width: 0.8rem;
  height: 0.84rem;
  font-size: 0.1rem;
  float: right;
  border-left: 0.01rem solid #eeeeee;
  text-align: center;
  line-height: 0.84rem;
  color: #e62017;
}

.oneguan {
  width: 6rem;
  font-size: 0.03rem;
  margin-top: 0.15rem;
  height: 0.7rem;
}
.oneguan .one1 {
  color: #eeeeee;
  font-size: 0.2rem;
}
.oneguan .one2 {
  width: 0.9rem;
  height: 0.4rem;
  border: 0.02rem solid #fe9900;
  color: #fe9900;
  margin-left: 0.4rem;
}
.oneguan .one3 {
  width: 0.9rem;
  height: 0.4rem;
  border: 0.02rem solid #fe9900;
  color: #fe9900;
  margin-left: 0.2rem;
}
.oneguan .one4 {
  width: 0.9rem;
  height: 0.4rem;
  border: 0.02rem solid #fe9900;
  color: #fe9900;
  margin-left: 0.2rem;
}
.oneguan .one5 {
  width: 0.9rem;
  height: 0.4rem;
  border: 0.02rem solid #fe9900;
  color: #fe9900;
  margin-left: 0.2rem;
}
.twoguan {
  width: 6rem;
  font-size: 0.03rem;
  height: 0.6rem;
}
.twoguantwo {
  background: #fe9900;
  color: #ffffff;
  width: 0.8rem;
  display: inline-block;
  text-align: center;
  line-height: 0.4rem;
  margin-left: 0.5rem;
}
.twoguanonet {
  background: #fe9900;
  color: #ffffff;
  width: 0.8rem;
  display: inline-block;
  text-align: center;
  line-height: 0.4rem;
  margin-left: 0.2rem;
}
.twoguanone {
  font-size: 0.4rem;
  color: #e62017;
}
.zongjiaw {
  width: 100%;
  height: 0.96rem;
}

.zongjiaw .zongone {
  font-size: 0.27rem;
  color: #000000;
  position: absolute;
  float: left;
  margin-left: 0.3rem;
  margin-top: 0.3rem;
}
.zongjiaw .zongtwo {
  font-size: 0.27rem;
  position: absolute;
  color: #e62017;
  float: left;
  margin-left: 1.3rem;
  margin-top: 0.3rem;
}
.zongjiaw .zongthree {
  /* font-size: 0.27rem; */
  color: #ffffff;
  position: absolute;
  float: left;
  margin-left: 2.35rem;
  width: 1.97rem;
  height: 0.97rem;
  background: #fe9900;
  font-size: 0.03rem;
  text-align: center;
  line-height: 0.97rem;
}
.zongjiaw .zongfour {
  font-size: 0.27rem;
  color: #ffffff;
  position: absolute;
  float: left;
  background: #e62017;
  margin-left: 4.3rem;
  width: 1.97rem;
  height: 0.97rem;
  font-size: 0.03rem;
  text-align: center;
  line-height: 0.97rem;
}
.shang {
  width: 100%;
  height: 0.5rem;
  background: #ffffff;
}
.shangpin {
  width: 100%;
  height: -5rem;
  background: #ffffff;
}
.shang1 {
  width: 100%;
  height: 2rem;
  background: #ffffff;
}
.shangpin1 {
  width: 3rem;
  height: 0.3rem;
  text-align: center;
  display: inline-block;
  font-size: 0.1rem;
  color: #fe9900;
  border-bottom: 0.02rem solid #fe9900;
}
.shangpin2 {
  width: 3rem;
  height: 0.3rem;
  text-align: center;
  display: inline-block;
  font-size: 0.1rem;
}
.close {
  width: 100%;
  height: 12rem;
  background: #000000;
  position: fixed;
  opacity: 0.7;
  top: 0;
  display: none;
}
.goumai {
  height: 6.78rem;
  width: 100%;
  background: #ffffff;
  position: fixed;
  display: none;
  bottom: 1rem;
}
/* 上层 */
.shangceng {
  height: 1.84rem;
  width: 100%;
}
.shangceng .totn {
  display: inline-block;
  width: 2.15rem;
  height: 2.15rem;
  border: 0.08rem solid #dddddd;
  margin-left: 0.42rem;
  margin-top: -0.4rem;
  float: left;
}
.shangceng .totn img {
  width: 2.1rem;
  height: 2.1rem;
}
.shangcshu {
  width: 2rem;
  height: 1.8rem;
  float: left;
  margin-left: 0.05rem;
}
.shangcshu .shangcshu1 {
  width: 2rem;
  font-size: 0.3rem;
  display: block;
  color: #e62017;
  margin-top: 0.4rem;
  margin-left: 0.03rem;
}
.shangcshu .shangcshuone1 {
  width: 2rem;
  font-size: 0.25rem;
  display: block;
  margin-left: 0.1rem;
  margin-top: 0.04rem;
}
.shangcshu .shangcshu3 {
  font-size: 0.25rem;
  display: block;
  margin-left: 0.1rem;
  margin-top: 0.04rem;
}
.shang4 {
  width: 0.5rem;
  height: 0.5rem;
  border: 0.01rem solid #dddddd;
  border-radius: 50%;
  font-size: 0.3rem;
  display: inline-block;
  text-align: center;
  line-height: 0.5rem;
  margin-left: 0.6rem;
  color: #dddddd;
}
/* 购买数量 */
.shuliang {
  width: 100%;
  height: 1.03rem;
  background: #ffffff;
}
.shuliang .shuliang1 {
  color: #000000;
  font-size: 0.4rem;
  margin-left: -2.6rem;
  float: left;
  margin-top: 0.2rem;
}
.shuliang .shuliang2 {
  float: right;
  font-size: 0.3rem;
  width: 1.8rem;
  margin-right: 0.4rem;
  margin-top: 0.2rem;
}
.shuliang .shuliang2 .shuliangtow {
  width: 0.6rem;
  height: 0.6rem;
  display: block;
  background: #989898;
  float: left;
  text-align: center;
  line-height: 0.6rem;
}
.shuliang .shuliang2 .tod {
  width: 0.6rem;
  height: 0.6rem;
  border: none;
  text-align: center;
  line-height: 0.6rem;
  display: inline-block;
}
.shuliang .shuliang2 .shuliangtoww {
  width: 0.6rem;
  height: 0.6rem;
  display: block;
  background: #989898;
  float: right;
  text-align: center;
  line-height: 0.6rem;
}
/* 大小 */
.daxiao {
  width: 100%;
  height: 1.26rem;
}
.daxiao .daxiaoone {
  width: 100%;
  height: 0.5rem;

  font-size: 0.1rem;
  display: block;
  font-size: 0.4rem;
}
.daxiao .daxiaotwo {
  width: 1.2rem;
  height: 0.6rem;
  background: #fe9900;
  display: inline-block;
  /* margin-left: 0.4rem; */
  font-size: 0.3rem;
  float: left;
  text-align: center;
  line-height: 0.6rem;
  border-radius: 0.1rem 0.1rem;
  color: #ffffff;
}
.daxiao .daxiaothree {
  width: 1.2rem;
  height: 0.6rem;
  background: #fe9900;
  display: inline-block;
  margin-left: 0.1rem;
  font-size: 0.3rem;
  float: left;
  text-align: center;
  line-height: 0.6rem;
  border-radius: 0.1rem 0.1rem;
  color: #ffffff;
}
.daxiao .daxiaofour {
  width: 1.2rem;
  height: 0.6rem;
  background: #fe9900;
  display: inline-block;
  margin-left: 0.1rem;
  font-size: 0.3rem;
  float: left;
  text-align: center;
  line-height: 0.6rem;
  border-radius: 0.1rem 0.1rem;
  color: #ffffff;
}
.daxiao .daxiaofive {
  width: 1.2rem;
  height: 0.6rem;
  background: #fe9900;
  display: inline-block;
  margin-left: 0.1rem;
  font-size: 0.3rem;
  float: left;
  text-align: center;
  line-height: 0.6rem;
  border-radius: 0.1rem 0.1rem;
  color: #ffffff;
}
.zongjia1d {
  width: 100%;
  height: 4rem;
  font-size: 0.4rem;
}
.zongjia1d .zongjiaone1 {
  font-size: 0.4rem;
  font-size: 0.3rem;
  float: left;
  margin-top: 0.3rem;
}
.zongjia1d .zongjiaone2 {
  font-size: 0.4rem;
  font-size: 0.3rem;
  width: 1.7rem;
  float: left;
  color: #e62017;
  margin-top: 0.3rem;
  display: inline-block;
}
.zongjia1d .zongjiaone3 {
  font-size: 0.3rem;
  float: left;
  width: 1.7rem;
  height: 1.1rem;
  background: #fe9900;
  text-align: center;
  line-height: 1.1rem;
  /* margin-left: 0.5rem; */
}
.zongjia1d .zongjiaone4 {
  font-size: 0.3rem;
  float: left;
  width: 2rem;
  height: 1.1rem;
  background: red;
  text-align: center;
  line-height: 1.1rem;
  /* margin-left: 0.01rem; */
  /* display: inline-block */
}
</style>

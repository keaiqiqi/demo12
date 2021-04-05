<template>
    <div class="one1" >
        <!-- 无 -->
         <div class="geren" v-show="mark=='false'">
       <img src="static/img/set.png" alt="" class="tuleid">
         <span class="zhongxin">个人中心</span>
        <img src="static/img/news.png" alt="" class="tulei">
        <span class="yuan">
            <img src="" alt="">
        </span>
       </div>
       <!-- <div class="baise">
           <div class="diandeng">点击登录</div>
         <img src="static/img/keep.png" alt="" >  <span class="shaou">我的收藏</span>
         <span class="wu">(5)</span>
       </div>
       <div class="dingdan">
           <span class="dingdan1">我的订单</span>
           <span class="dingdan2">查看全部订单</span> -->
       <!-- </div> -->
        <!-- 有 -->
       <div class="geren"  v-show="mark=='true'">
       <img src="static/img/set.png" alt="" class="tuleid">
         <span class="zhongxin">个人中心</span>
        <img src="static/img/news.png" alt="" class="tulei">
        <span class="yuan">
            <img src="static/img/1.jpg" alt="">
        </span>
       </div>
       <div class="baise">
           <div class="diandeng">点击登录</div>
         <img src="static/img/keep.png" alt="">  <span class="shaou">我的收藏</span>
         <span class="wu">(5)</span>
       </div>
       <div class="dingdan">
           <span class="dingdan1">我的订单</span>
           <span class="dingdan2">查看全部订单</span>
       </div>
       <!-- 代收款 -->
         <div class="dwuge">
          <div class="fukuan">
            <img src="static/img/icon_boligation.png" alt="">
            <span>代付款</span>
          </div>
             <div class="fahuo">
             <img src="static/img/prepare.png" alt="">
            <span>代发货</span>
             </div>
                <div class="shoukuan">
           <img src="static/img/icon_consignee.png" alt="">
            <span>代收货</span>
                </div>
                   <div class="pingjia">
            <img src="static/img/icon_evaluate.png" alt="">
            <span>代评价</span>
                   </div>
                      <div class="tuikuan">
             <img src="static/img/icon_refund.png" alt="">
            <span>退款/售后</span>
                      </div>
       </div>
       <div class="shouhuot">
           <span class="dizhi">收货地址管理</span>
       </div>
       <div class="wode">

       </div>
    </div>
</template>

<script>
export default {
 data(){
     return{
          mark:"false"
     }
 },
  mounted() {
     if (localStorage.getItem("use")) {
           this.mark = "true";
    }}
}
</script>

<style scoped>
.wu{
    font-size: 0.3rem;
}
.geren{
    width: 100%;
    height: 3.64rem;
    background: #ff9900;
}
.one1{
    width: 100%;
    /* height: 100%; */
    background: #f3f3f3;
    height: 13rem;
}
.yuan{
    width: 2.1rem;
    height: 2.1rem;
    background: #e7dedf;
    display:inline-block;
    border-radius: 50%;
    border: 0.09rem solid #ffffff;
    margin-left:2.1rem;
    margin-top:1rem;
}
.yuan img{
     width: 2.1rem;
     height: 2.1rem;
       border-radius: 50%;
}
.zhongxin{
    font-size: 0.5rem;
    color: #ffffff;
     margin-left: 1rem;
     margin-top:0.05rem;
}
.tuleid{
    
     margin-left: 0.3rem;
     margin-top:0.4rem;
}
.tulei{
margin-left: 1.3rem;
     
}
.baise{
    width: 100%;
    height: 2.63rem;
    background: #ffffff;
}
.diandeng{
    font-size: 0.3rem;
    text-align: center;
    height: 0.3rem;
    padding-top:1rem;
  
    
}
.shaou{
    font-size: 0.3rem;
}
.dingdan{
    width: 100%;
    height: 1.12rem;
    border-bottom: 0.01rem solid #bbbbbb;
    margin-top:0.3rem;
    background: #ffffff;
    position: relative;
}
.dingdan1{
    font-size: 0.3rem;
    display: inline-block;
    width: 1.4rem;
    height: 0.1rem;
    position: absolute;
    top:0.4rem;
    left: 0.2rem;
  
}
.dingdan2{
    font-size: 0.4rem;
     display: inline-block;
     margin-bottom:0.3rem;
     width: rem;
     height: 0.3rem;
     color: #bbbbbb;
     text-align: center;
     margin-left: 2.3rem;
    position: absolute;
    top:0.3rem;
    left: 1.4rem;

}
.dwuge{
    width: 100%;
    height:1.88rem;
    background: #ffffff;
    text-align: center;
 
}
.dwuge img{
    width:0.5rem ;
    display: block;
     text-align: center;
     margin-left: 0.3rem;
     margin-top:0.23rem;
}
.dwuge span{
    font-size: 0.03rem;
    margin-top:0.3rem;
    display: block;
}
.dwuge .fukuan{
  width:1.1rem;
  height: 1.3rem;

   float: left;
     margin-left: 0.2rem;
     margin-top:0.3rem;
     display: block;
  
}

.dwuge .fahuo{
  width:1.1rem;
  height: 1.3rem;

   float: left;
     margin-left: 0.1rem;
       margin-top:0.3rem;
}
.dwuge .shoukuan{
  width:1.1rem;
  height: 1.3rem;

   float: left;
     margin-left: 0.1rem;
       margin-top:0.3rem;
}
.dwuge .pingjia{
  width:1.1rem;
  height: 1.3rem;

  float: left;
    margin-left: 0.1rem;
      margin-top:0.3rem;
}
.dwuge .tuikuan{
  width:1.1rem;
  height: 1.3rem;

   float: left;
   margin-left: 0.1rem;
     margin-top:0.3rem;
}
.shouhuot{
    width: 100%;
    height:1.25rem;
    background: #ffffff;
    position: relative;
}
.shouhuot .dizhi{
    font-size: 0.4rem;
    color: #bbbbbb;
    position: absolute;
    left: 0.1rem;
    top:0.5rem;
}
.wode{
    width: 100%;
    background: #f3f3f3;
    height: 1.33rem;
}
</style>

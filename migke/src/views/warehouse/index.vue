<template>
    <div class="main">
      <img class="top_img" src="../../img/kernel.png" alt="">
      <div class="top_line"> 
          <p></p>
          <span>案例详情</span>
          <b></b>
      </div>
      <div class="box">
          <div class="box_top">
              <p>仓库物流</p>
          </div>
          <div class="box_center">
              <img src="../../img/图层 2.png" alt="">
              <p>
                  明科为中石油实施了物资条码管理系统，实现了需求部门在线计划报批、供应商协同送货、项目现场收、发、盘、存等功能。系统采用了互联网、无线技术条码技术相结合的方案进行实施，为中石油节省大量人力、物力
              </p>
          </div>
          <div class="box_Images">
            <img src="../../img/2-160505111A2623.png" alt="">
            <img src="../../img/2-1605051S943439.png" alt="">
            <img src="../../img/2-160505113619636.png" alt="">
            <img src="../../img/2-160505112K44L.png" alt="">
          </div>
      </div>
        <div class="box wrap">
          <div class="box_right">
              <p>智能制造</p>
          </div>
          <div class="box_center">
              <img src="../../img/index_technology.png" alt="">
              <p>
                明科为中石油实施了物资条码管理系统，实现了需求部门在线计划报批、供应商协同送货、项目现场收、发、盘、存等功能。系统采用了互联网、无线技术条码技术相结合的方案进行实施，为中石油节省大量人力、物力
              </p>
          </div>
          <div class="box_Images">
            <img src="../../img/2-160505110H6429.png" alt="">
            <img src="../../img/2-160505113619627.png" alt="">
            <img src="../../img/2-160505110350318.png" alt="">
            <img src="../../img/2-16042QP513G9.png" alt="">
          </div>
      </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
@media (max-width: 750rem) and (min-width: 0){
.main{
    width: 100%;
    height: 100%
}
.wrap{
    margin-bottom: 0.81rem;
}
.top_img{
    width: 100%;
    height: 100%;
}
.top_line{
    width: 100%;
    height: 100%;
    text-align: center;
    margin-top: .55rem;
    margin-bottom: 0.63rem;
}
.top_line span{
    width:2.18rem;
    height:0.29rem;
    font-size:0.3rem;
    font-family:PingFang-SC-Bold;
    font-weight:bold;
    color:rgba(59,59,60,1);
    // margin-left: 0.86rem;
    text-align: center;
    display: inline-block;
   
}
.top_line p:nth-child(1){
    width:1.39rem;
    height:0.01rem;
    border:0.01rem solid rgba(153,153,153,1);
    margin-right: 0.80rem;
    // margin-top: 0.65rem;
    display: inline-block;
}
.top_line b{
    width:1.40rem;
    height:0.01rem;
    border:0.01rem solid rgba(153,153,153,1);
    margin-left: 0.80rem;
    display: inline-block;
 }
 .box{
    width:6.91rem;
    height:6.95rem;
    background:rgba(249,249,249,1);
    margin: 0 auto;
 }
 .box_top,.box_right{
     width: 100%;
     height: 0.39rem;
     padding-top: 0.46rem;
     padding-bottom: 0.29rem;
     display: flex;
 }
  .box_top p,.box_right p {
    width:5.58rem;
    height:0.39rem;
    font-size:0.40rem;
    font-family:PingFang-SC-Bold;
    font-weight:bold;
    color:rgba(59,59,60,1);
 }
 .box_center{
     width: 100%;
     height:4.3rem;
 }
 .box_center img{
     padding: 0 0.32rem 0 0.26rem;
     margin-top: 0.4rem;
     
 }
 .box_center p{
     width:5.74rem;
    height:1.23rem;
    font-size:0.24rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(254,254,255,1);
    line-height:0.33rem;
    position: relative;
    top:-1.7rem;
    margin-left: 0.5rem;
    text-align: center;
 }
 .box_Images{
     width: 100%;
     height: 0.85rem;
     margin-top: 0.55rem;
     margin-bottom: 0.45rem;
     display: flex;
     justify-content: space-between;
 }
 .box_Images img{
    width: 1.59rem;
    height: 0.85rem;
 }
 .box_right p{
    width: 6.58rem;
    display: flex;
    justify-content: flex-end;
}
 .box_right p::before{
    content: "";
    width:0.07rem;
    height:0.37rem;
    background:rgba(0,112,192,1);
    margin-right: 0.17rem;
    margin-top: 0.1rem;
    
} .box_top:before{
            content: '';
            display: inline-block;
            width:0.07rem;
            height:0.37rem;
            background:rgba(0,112,192,1);
            margin-right: 0.24rem;
            margin-top: 0.12rem;
        } 
}
.box_right{
     width: 100%;
     height: 0.39rem;
     padding-top: 0.46rem;
     padding-bottom: 0.29rem;
     display: flex;
}
.box_right .box_Images{
       width: 100%;
     height: 0.85rem;
     margin-top: 0.55rem;
     margin-bottom: 0.45rem;
     display: flex;
     justify-content: space-between;
}
</style>

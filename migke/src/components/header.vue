<template>
    <div class="header">
        <div class="wrapper">
          <a href="JavaScript：void(0)" class="logo"><img src="../img/index_logo.png" alt=""></a>
          <div class="nav">
              <span class="homeico"><img src="../img/homeico.png" alt=""></span>
              <span class="navico" v-if="!isShow" @click="showNav"><img src="../img/navico.png" alt=""></span>
              <span class="navico" v-else @click="showNav"><img src="../img/close.png" alt=""></span>
              <ul class="nav_ul" ref="nav_ul">
                <li><span @click="goHere('/')">首页</span></li>
                <li><span @click="goHere('/productCenter')">产品中心</span></li>
                <li><span @click="goHere('/successCase')">成功案例</span></li>
                <li><span @click="goHere('/partner')">渠道合作</span></li>
                <li><span @click="goHere('/news')">新闻资讯</span></li>
                <li><span class="showChild" @mouseenter="onMouseenter" @mouseleave="onMouseout" @click="goHere('/companyProfile')">关于明科</span>
                    <ul class="abloutMingKe_ul">
                      <li>企业文化</li>
                      <li>荣誉资质</li>
                      <li>联系明科</li>
                      <li>加入明科</li>
                    </ul>
                </li>
              </ul>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name:'Header',
  data() {
    return {
      isShow:false,
      isShowChild:false

    }
  },
  created() {
  },
  methods: {
    goHere(path){
      this.$router.push({path: path});
    },
    onMouseenter(){
      this.isShowChild = true;
    },
    onMouseout(){
      this.isShowChild = false;
    },
    showNav(){
      this.isShow = !this.isShow;
      this.$refs.nav_ul.style.left=this.isShow?(0+'px'):(-1000+'px')
    }
  }
}
</script>

<style lang="less" scoped>
.header{
  background: #282830;
  position: fixed;
  width: 100%;
  /*padding: 0.08rem 0;*/
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  transition: 0.3s;
  -webkit-animation: gupIn 1s 0.1s both;
  -moz-animation: gupIn 1s 0.1s both;
  animation: gupIn 1s 0.1s both;
  z-index: 8888;
  top: 0;
  .wrapper{
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
  }
  .logo{
    float: left;
    img{
      height: 0.67rem;
    }
  }
  .nav{
    float: right;
    .navico{
      width: 0.45rem;
      img{
        height: 0.39rem;
      }
    }
    .homeico{
      img{
        height: 0.54rem;
        margin-right: 0.46rem;
      }
    }
    li{
      float: left;
      line-height: 0.68rem;
      height: 0.68rem;
      .abloutMingKe_ul{
        background-color: #282830;
        position: absolute;
        margin-top: -0.05rem;
        /* overflow: visible; */
        transition: all .3s ease 0s;
        li{
             
            float: none;
            color: #fff;
            font-size: 0.18rem;
            padding: 0 0.22rem;
            line-height: 0.52rem;
            height: 0.52rem;
        }
      }
    }
    span{
      font-size: 0.18rem;
      color: #fff;
      cursor: pointer;
      padding: 0 0.22rem;
    }
  }
}

@media (max-width: 750px) and (min-width: 0){
  .header .nav .nav_ul {
        position: fixed;
        width: 100%;
        left: -1000px;
        top: 1.29rem;
        bottom: 0;
        background: #212020;
        z-index: 8888;
        li{
          padding: 0.44rem 0;
          text-align: center;
          float:none;
          border-bottom: 1px solid #fff;
          text-align: center;
          line-height: inherit;
          height: auto;
          span{
            font-size: 0.42rem;
          }
        }
    }
    div>.header {
        padding: 0.31rem 0;
    }
    .header .nav .navico,
    .header .nav .homeico {
        display: inline-block;
        padding:0;
    }
    
}
</style>

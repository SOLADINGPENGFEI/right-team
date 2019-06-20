<template>
  <div class="main">
    <div class="banner">
      <img src alt>
    </div>
    <div class="wrapper">
      <h3 class="content_title fadeInUp zoomIn animated">
        <span>主营业务</span>
      </h3>
      <ul class="business_ul">
        <li v-for="(item,index) in 3" :key="index" class="fadeInUp">
          <div class="business">
            <h3>
              <img src="../../img/index_woman.png" alt>
            </h3>
            <h2>
              <a href>明科商业智能开放平台</a>
            </h2>
            <p>MingKeOS</p>
            <p>三屏合一、敏捷开发、多平台接口</p>
          </div>
          <div class="business_box">
            <div class="business_box_t">
              <h2>电商平台</h2>
              <p>MingKeOS帮助企业对接各销售渠道，实现商品，库存，订单，物流，财务等数据的全链路贯通。 OMS拥有作业流程智能设定，可根据企业需求自定义自动化审单流程，灵活的拆单合单规则可满足企业对于复杂订单的处理需求，自动匹配物流方案，全面优化了企业在审单、备货、发货和售后等环节的作业效率。</p>
            </div>
            <ul class="business_box_b">
              <li v-for="(item,index) in 3" :key="index">
                <h3>
                  <img src="../../img/shop.png" alt>
                </h3>
                <div>
                  <p>自建商城</p>
                  <p>B2C、B2B2C</p>
                </div>
              </li>
            </ul>
            <div class="loadMoreBtn">
              <el-button>查看更多</el-button>
            </div>
            <div class="particulars">了解详情 >></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="wrapper">
      <h3 class="content_title fadeInUp zoomIn animated">
        <span>明科商业智能开放平台MingKeOS</span>
      </h3>
      <h4 class="content_subtitle">
        <span>为企业搭建供应链信息化平台</span>
      </h4>
      <ul class="platform_ul">
        <li v-for="(item,index) in 3" :key="index">
          <h3>
            <img src="../../img/NicePSD.com.png" alt>
          </h3>
          <h2>自主的可配置平台</h2>
          <p>众所周知，需求变更是IT项目成败的关键，MingKeOS易变更、可配置的特性可以为企业信息化建设保驾护航</p>
        </li>
      </ul>
    </div>
    <div class="wrapper">
      <h3 class="content_title fadeInUp zoomIn animated">
        <span>成熟的供应链系统解决方案</span>
      </h3>
      <div class="content programme">
        <ul class="programme_ul">
          <li v-for="(item,index) in 12" :key="index">
            <h3>
              <img src="../../img/programmeTool.png" alt>
            </h3>
            <p>电动工具</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <h3 class="content_title fadeInUp zoomIn animated">
        <span>典型案例</span>
      </h3>
      <h4 class="content_subtitle">
        <span>专注大中型企业信息化应用</span>
      </h4>
      <div class="content case">
        <img src="../../img/index_case.png" alt>
        <div class="caseContent">
          <p>
            基于自动识别技术设计，实现了SAP接口入库、出库、盘点、移位、预警、交叉驳运等业务的精细化管理。采购供货协同
            项目物料计划，按需采购，定向配送交叉驳运，自动分拣服务器位于北京总部机房乌兹别克斯坦、俄罗斯跨境实施
          </p>
          <div class="loadMoreBtn">
            <el-button>查看更多</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <h3 class="content_title fadeInUp zoomIn animated">
        <span>明科动态</span>
      </h3>
      <div class="content">
        <ul class="dynamic_ul">
          <li v-for="(item,index) in 3" :key="index">
            <h3>
              <img src="../../img/dynamic.png" alt>
            </h3>
            <div class="dynamic_ul_card">
              <h2>
                <span>明科产品质量安全追溯系统解决方案</span>
                <span>2017-03-08</span>
              </h2>
              <p>明科公司面向生产型企业专门研发了一套质量监管系统，针对商品的生产日期、有效期批号等信息，创建唯一可识别条码，进行产品质量追溯，再根据此识别码的包装关联码查询流通过程中的商品流...</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>
<style scoped lang="less">
@media (max-width: 750px) and (min-width: 0) {
  .main {
    background: #f5f5f5;
  }
  .business {
    display: none;
  }
  .content_title {
    margin: 0.9rem 0 0.6rem;
  }
  li .business_box {
    display: block;
    background: #fff;
    padding: 0 0.41rem 0.41rem 0.29rem;
  }
  .banner {
    background: url(../../img/indexBanner_m.png) no-repeat center;
    min-height: 11.44rem;
    background-size: cover;
  }
  .business_ul li {
    margin-top: 0.3rem;
  }
  .business_box_t h2 {
    text-align: center;
  }
  .business_box_t p {
    margin-top: 0.6rem;
    font-size: 0.32rem;
    line-height: 0.44rem;
  }
  .business_box_b {
    width: 101%;
    overflow: hidden;

    div {
      margin-left: 0.19rem;
      text-align: center;
      p {
        font-size: 0.24rem;
        color: #838383;
      }
    }
  }
  .loadMoreBtn {
    text-align: center;
    margin-top: 0.53rem;
    .el-button {
      border: 2px solid #52b6e7;
      padding: 0.38rem 1.1rem;
      color: #0380be;
      font-size: 0.3rem;
    }
  }
  .business_box li {
    float: left;
    width: 50%;
    display: flex;
    margin-top: 0.39rem;
    align-items: center;
  }
  .content_subtitle {
    display: none;
  }
  .platform_ul {
    li {
      box-shadow: 0px 0px 38px 0px rgba(79, 78, 80, 0.15);
      background: #fff;
      h2,
      h3 {
        text-align: center;
      }
      h3 {
        padding: 0.41rem 0 0.31rem;
      }
      h2 {
        font-size: 0.44rem;
        color: #20242a;
        font-weight: 500;
      }
      p {
        font-size: 0.32rem;
        color: #363636;
        margin-top: 0.52rem;
        padding: 0 0.41rem 0.79rem 0.29rem;
      }
      img {
        max-height: 2.01rem;
      }
    }
  }
  .programme_ul {
    li {
      width: 21%;
      float: left;
      text-align: center;
      margin: 0.49rem 2% 0;
      img {
        max-height: 0.58rem;
      }
      p {
        font-size: 0.24rem;
        margin-top: 0.19rem;
        color: #818181;
      }
    }
  }
  .case {
    background: url(../../img/caseBag_m.png) no-repeat;
    min-height: 9.12rem;
    background-size: contain;
    img {
      display: none;
    }
    .caseContent {
      margin-top: 3.71rem;
      padding: 0 0.87rem 0 0.6rem;
      p {
        font-size: 0.32rem;
        color: #363636;
      }
    }
  }
  .dynamic_ul li {
    text-align: center;
    padding: 0 0.2rem;
    margin-top: 0.3rem;
  }
  .dynamic_ul_card {
    border: 1px solid #d1d1d1;
    padding: 0.3rem 0.47rem 1rem 0.3rem;
    h2 {
      font-weight: bold;
      font-size: 0.36rem;
      span {
        font-size: 0.36rem;
        color: #20242a;
      }
    }
    p {
      margin-top: 0.3rem;
      font-size: 0.32rem;
      line-height: 0.44rem;
      color: #363636;
    }
  }
  .particulars {
    display: none;
  }
  .footer {
    margin-top: 0.57rem;
    .footer_left h3,
    .footer_left h2 {
      text-align: center;
      font-size: 0.34rem;
    }
    .footer_left_address {
      display: none;
    }
    .footer_left,
    .footer_right {
      float: none;
    }
  }
}

@media all and (min-width: 751px) {
  .main {
    margin: 1.84rem 0 0.69rem;
  }
  .center {
    padding-top: 3.92rem;
    text-align: center;
  }
  .business_ul {
    display: flex;
    margin: 0.69rem 0 1.7rem;
  }
  .business_ul > li {
    float: left;
    display: inline-block;
    text-align: center;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 38px 0px rgba(79, 78, 80, 0.15);
    flex: 1;
    padding-bottom: 0.41rem;
    box-sizing: border-box;
    -webkit-transition: transform 1s, opacity 1s;
    -moz-transition: transform 1s, opacity 1s;
    -o-transition: transform 1s, opacity 1s;
    transition: transform 1s, opacity 1s;
    h3 {
      img {
        transition: all 0.6s;
        -webkit-transition: all 0.6s;
      }
    }
    h2 {
      margin: 0.35rem 0 0.2rem;
      a {
        font-size: 0.18rem;
        text-decoration: underline;
      }
    }
    p {
      color: #838383;
      font-size: 0.14rem;
    }
    p:nth-child(4) {
      margin-top: 0.04rem;
    }
  }
  .fadeInUp {
    position: relative;
  }
  .business_box {
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 1;
    width: 110%;
    background: #fff;
    padding: 0 0 0.4rem 0;
    .business_box_t {
      background: url(../../img/business.png) 100% 100%;
      text-align: left;
      padding: 0.2rem 0.2rem 0.2rem 0.15rem;
      color: #fff;
      h2 {
        margin: 0;
      }
      p {
        font-size: 0.035rem;
        color: #fff;
      }
    }
    .business_box_b {
      display: flex;
      margin-top: 0.28rem;
      padding: 0 0.25rem;
      flex-wrap: wrap;
      li {
        width: 33.3%;
        h3 {
          img {
            width: 0.4rem;
            height: 0.4rem;
            margin-bottom: 0.13rem;
          }
        }
        p {
          font-size: 0.035rem;
          color: #838383;
        }
      }
    }
  }
  .caseContent,
  .business_box {
    display: none;
  }

  .business_ul > li:nth-child(2) {
    margin: 0 0.62rem;
  }

  .platform_ul {
    display: flex;
    margin-bottom: 1.1rem;
  }
  .loadMoreBtn {
    display: none;
  }
  .particulars {
    margin-top: 0.2rem;
    padding: 0 0.2rem;
    text-align: right;
    color: #14a9e5;
  }
  .platform_ul > li {
    float: left;
    padding: 0 0.37rem;
    text-align: center;
    h3 {
      img {
        border: 1px dashed #333;
      }
    }
    h2 {
      font-size: 0.22rem;
      color: #20242a;
      margin: 0.45rem 0 0.24rem;
      overflow: hidden;
    }
    p {
      font-size: 0.12rem;
      color: #786f98;
    }
  }

  .content_subtitle {
    text-align: center;
    margin: 0.16rem 0 0.91rem;
    span {
      color: #838383;
      font-size: 0.16rem;
    }
  }
  .content {
    width: 100%;
    overflow: hidden;
  }
  .programme_ul {
    margin-top: 1.05rem;
  }
  .programme_ul > li {
    float: left;
    display: inline-block;
    width: 8.5%;
    margin: 0.37rem 2%;
    text-align: center;
  }

  .content:nth-child(4) {
    .content_title {
      margin: 1.19rem 0 0.17rem;
    }
    .content_subtitle {
      text-align: center;
      margin-bottom: 0.91rem;
    }
    .content_subtitle > span {
      color: #818181;
      font-size: 0.18rem;
    }
  }

  .dynamic_ul {
    display: flex;
    li {
      flex: 1;
      h3 {
      }
      h2 {
        span:first-child {
          color: #20242a;
          font-size: 0.2rem;
        }
        span:nth-child(2) {
          color: #676767;
          font-size: 0.16rem;
          float: right;
        }
      }
      p {
        padding: 0.29rem 0.22rem;
        color: #676767;
        font-size: 0.16rem;
        line-height: 0.3rem;
      }
    }
    li:nth-child(2) {
      margin: 0 0.56rem;
    }
  }

  .dynamic_ul_card {
    background: rgba(243, 243, 243, 1);
    padding-top: 0.27rem;
    h2 {
      padding: 0 0.22rem;
    }
  }

  .wrapper:last-child .content_title {
    margin: 1rem 0 1.21rem;
  }
}
</style>

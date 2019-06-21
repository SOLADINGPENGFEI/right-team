<template>
  <div class="main">
    <div class="banner">
      <img src="../../img/successBanner.png" alt>
    </div>
    <div class="wrapper">
      <!-- <div v-for="(item, index) in 3" :key="index"> -->
      <div class="content_title">
        <span>中石油</span>
        <p>项目实施落地: 北京 行业: 能源行业 时间: 2012年3月</p>
      </div>
      <div class="content">
        <!-- <ul>
                        <li v-for="(item,index) in 12" :key="index">行业</li>
        </ul>-->
        <!-- <a href=""  v-for="(item,index) in 12" :key="index">行业</a> -->
        <div class="contnt-describe">
          <div class="left">
            <h3>企业背景</h3>
            <p>中国石油工程建设公司隶属于中国石油天然气集团公司，是集团公司专门从事石油工程设计、制造、施工和工程总承包的专业公司，现已发展成为集团公司在国内外石油工程建设领域最具代表性的公司 。</p>
            <p>CPECC前身为原石油工业部基建局，1980年经国务院批准成立对外经济合作企业，是中国首批进入国际市场的八大公司之一。1998年经集团公司报经国家经贸委批准，组建为中国石油工程建设（集团）公司，下属中国石油天然气第一、六、七建设公司和华东勘察设计研究院。2000年成为中油国际工程有限责任公司的全资子公司，下属中国石油天然气华东勘察设计研究院。2008年，集团公司将中国石油天然气第一建设公司和华东勘察设计研究院与中国石油工程建设（集团）公司合并重组，组建为中国石油工程建设公司。公司经过内部业务整合，在原第一建设公司和华东设计院的基础上，组建了华东设计、北京设计、第一建设、重工制造、技术服务五个国内专业分公司。</p>
          </div>
          <div class="right">
            <img src="../../img/caseImg.png" alt>
          </div>
        </div>
      </div>
      <div class="content_title">
        <span>项目情况</span>
      </div>
      <div class="content">
        <!-- <ul>
                        <li v-for="(item,index) in 12" :key="index">行业</li>
        </ul>-->
        <!-- <a href=""  v-for="(item,index) in 12" :key="index">行业</a> -->
        <div class="contnt-describe">
          <div class="left">
            <h3>物资条码管理系统</h3>
            <p>
              中国石油工程建设公司在早期实施了SAP系统，当时在乌兹别克斯坦进行开设管道架设项目，许多物料需要从国内采购，通关，再到现场使用，物料众多，并且缺乏管理人员，为物料管理、调配工作带来很大困扰。
              。
            </p>
            <p>经过业务调研，中石油决定采用明科的条码管理系统进行物料管理.</p>
            <p>明科为中石油实施了物资条码管理系统，该系统基于B/S+胖客户端设计，实现了需求部门在线计划报批、供应商协同送货、项目现场收货、领用、库存盘点等功能系统采用了互联网、无线技术、条码技术相结合的方案进行实施，为中石油节省大量人力、物力。</p>
          </div>
          <div class="right double">
            <img src="../../img/2-1610131026424Q@3x.png" alt>
            <img src="../../img/2-1610131026429Q@3x.png" alt>
          </div>
        </div>
      </div>
      <div class="content_title">
        <span>效果评估</span>
      </div>
      <div class="content">
        <!-- <ul>
                        <li v-for="(item,index) in 12" :key="index">行业</li>
        </ul>-->
        <!-- <a href=""  v-for="(item,index) in 12" :key="index">行业</a> -->
        <div class="contnt-describe">
          <div class="left">
            <ul>
              <li>国内条码行业首例境外实施项目</li>
              <li>完成SAP接口实施，条码扫描收发货数据实时回传</li>
              <li>实施交叉驳运模块，减少数据采集工作量，提高库房运转效率</li>
              <li>供应商协同，完成订单确认、备货、条码标识协同</li>
              <li>同时集成无线实时与批处理方案，满足各种环境需要</li>
              <li>实行订单库存管理，库存依据订单需求领用，有效合理控制物料需求计划</li>
            </ul>
          </div>
          <div class="right">
            <div>
              <span>提高工作效率</span>
            </div>
            <img src="../../img/xiaoguopg@3x.png" class="center" alt>
            <div>
              <span>降低管理成本</span>
              <span>提高工作效率</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.ptr() {
}
.content_title {
  margin: 0.6rem 0 0.6rem;
  p {
    color: #838383;
    font-size: 0.16rem;
    text-align: center;
    margin-top: 0.26rem;
  }
}
h3 {
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: #3a3a3c;
  text-align: left;
  margin: 0.2rem 4%;
}
.contnt-describe {
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 0.3rem 0;
  background: #f9f9f9;
  p {
    font-family: PingFang-SC-Regular;
    color: #3e3e3e;
    text-align: left;
    width: 92%;
    margin: 0 auto;
    text-align-last: left;
    font-size: 0.16rem;
    margin-bottom: 0.1rem;
  }
}
.content:nth-child(2) {
  text-align: center;
  a {
    color: #3b3b3c;
    padding: 0.06rem 0.2rem;
    display: inline-block;
    font-size: 0.16rem;
    margin: 0.21rem 0.1rem;
  }
}
.case_list > li {
  width: 19%;
  float: left;
  text-align: center;
  margin: 0.48rem 3% 0;
  display: inline-block;
  border: 1px solid #c0c0c0;
  span {
    display: inline-block;
    background: rgba(0, 0, 0, 1);
    opacity: 0.56;
    width: 100%;
    padding: 0.12rem 0;
    color: #fff;
  }
}
.content:nth-child(3) {
  margin: 0.72rem 0 2.88rem;
}
@media (min-width: 751px) {
  .wrapper > div:nth-child(2n) > .contnt-describe {
    // background: red;
  }
  .contnt-describe {
    height: 5rem;
    .left {
      float: left;
      width: 60%;
    }
    .right {
      float: right;
      width: 3.85rem;
      height: 2.38rem;
      border: 1px dashed #000;
      margin: 0.8rem 0.3rem;
      img {
        display: inline-block;
      }
    }
  }
  .content_title > span::after {
    content: "";
    position: absolute;
    top: 112%;
    left: 39%;
    width: 0.8rem;
    height: 1px;
    background: #838383;
  }
  .content_title > span::before {
    display: none;
  }
  h3 {
    font-size: 0.38rem;
  }
  .contnt-describe {
    p {
    }
  }
}
@media (max-width: 750px) and (min-width: 0) {
  .header {
    padding: 0 2%;
  }
  .wrapper {
    width: 100%;
  }
  .content_title > span::after,
  .content_title > span::before {
    display: none;
  }
  .content_title {
    text-align: center;
  }
  .content_title > span {
    display: inline-block;
    border-bottom: 1px solid #3b3b3c;
  }
  .contnt-describe {
    p {
      line-height: 0.44rem;
    }
    .left {
      ul {
        margin: 0 auto;
        width: 6.48rem;
        color: #3e3e3e;
        line-height: 0.44rem;
        font-family: PingFang-SC-Regular;
        li {
          position: relative;
          &::before {
            content: "";
            box-shadow: 1px 1px 1px 2px #c9c7c7;
            height: 1px;
            width: 1px;
            display: inline-block;
            position: absolute;
            top: 10px;
            left: -10px;
            border-radius: 50%;
          }
        }
      }
    }
    .right {
      text-align: center;
      margin: 0.6rem 0;
      img.center {
        width: 2.36rem;
        height: 1.82rem;
      }
      div {
        span {
          padding: 0 0.3rem;
          font-family: PingFang-SC-Medium;
          color: #3b3b3c;
          font-size: 0.24rem;
        }
      }
    }
    .right > img {
      display: inline-block;
      width: 3.85rem;
      height: 2.38rem;
      margin: 0 0;
      border: 1px dashed #000;
    }
    .double > img {
      height: 2.16rem;
      max-width: auto;
      width: auto;
      margin-left: 0.16rem;
      margin-right: 0.16rem;
    }
  }
}
</style>

<template>
    <div>
        <div class="banner">
            <img src="../../img/newsBanner.png" alt="">
        </div>
        <div class="wrapper">
            <div class="contentTitle">
                <i class="contentTitle_before"></i> 
                <span  :class="{active:cur==0}">全部</span>
                <span class="span" v-for="(tab, i) in tabs" :key="i"
                 @click="cur=i">{{tab.name}}
                </span>
                <i  class="contentTitle_after"></i></div>
                <div class="content">
                <ul class="news_ul">
                    <li  v-for="(item,index) in list " :key="index">
                        <div class="news_ul_card" :style="{'background': 'url('+item.img+') no-repeat center '}">
                            <h2>                        
                                <span>{{item.name}}</span>
                                <span>2017-03-08</span>
                            </h2>
                            <p>{{item.title}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <el-pagination background layout="prev, pager, next" :total="200"></el-pagination>
            <button>查看更多</button>
            
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            cur: 0,
            tabs:[
                {
                    name:'企业资讯'
                },
                {
                    name:'公司活动'
                },
                {
                    name:'解决方案'
                }
            ],
            list:[
                {
                    img:require('../../img/企业资讯.png'),
                    title:"明科公司面向生产型企业专门研发了一套质量监管系统，针对商品的生产日期、有效期批号等信息，创建唯一可识别条码，进行产品质量追溯，再根据此识别码的包装关联码查询流通过程中的商品流...",
                    name:"明科产品质量安全追溯系统解决方案"
                },
                 {
                    img:require('../../img/公司活动.png'),
                    title:"9月22日上午，宝时得电商平台项目启动会在苏州厅隆重召开，专业工具营销中心朱总、财务张总、信息化管理部丁总，携项目组团队参加了此次会议。北京明科普华副总经理张富贵，携顾问代表4人出席了会议。",
                      name:"宝时得电商平台项目启动会议隆重举行"
                }, 
                {
                    img:require('../../img/解决方案.png'),
                    title:'明科服务跟踪系统MK-SES 是由明科公司首创的基于自动识别技术的服务系统，它能让企业能够更好的为用户提供更人性化的跟踪服务，并且能有效的降低服务成本。',
                      name:"明科售后服务跟踪系统解决方案"

                },
                 {
                    img:require('../../img/企业资讯@2x.png'),
                    title:'明科公司面向生产型企业专门研发了一套质量监管系统，针对商品的生产日期、有效期、批号等信息，创建唯一可识别条码，进行产品质量追溯，再根据此识别码的包装关联码，查询流通过程中的商品流向 ...',
                    name:"明科产品质量安全追溯系统解决方案"
                }
            ]
        }
    },
    methods: {
        changeType(index){
            

            
        }
    },

}
</script>

<style lang="less" scoped>
@media (max-width: 750px) and (min-width: 0){
  .banner{
      width: 7.5rem;
      height:4.0rem;
      outline: none;
      img{
          width: 100%;
          height: 100%;
      }
  }
  .span{
      background:rgba(244,244,244,1);
      border:0.02rem solid rgba(215,215,215,1);
  }
    .wrapper{
        width: 100%;
    }
    .contentTitle{
        width: 100%;
        margin-bottom: .2rem;
        span{
            display: block;
            height: .82rem;
            font-size: .38rem;
            text-align: center;
            line-height: .82rem;
        }
    }
    .news_ul{
        width: 100%;
        padding: 0 4%;
         margin-left: 0.2rem;
        li{
            // border: 1px dashed #000;
            margin-bottom: .3rem;
           
          
            div{
             width: 6.56rem;
             height: 6.56rem;
             position: relative;
             border: 1px dashed #000;
            }
            p{
                font-size: .22rem;
                padding: .2rem;
                color:#676767;
                position: absolute;
                top: 4.5rem;
            }
        }
        h2{
            width: 100%;
            position: absolute;
            top: 3.2rem;
            span{
                display: block;
            }
            span:first-child{
                font-size: .27rem;
                font-family:PingFang-SC-Bold;
                font-weight:bold;
                padding: .2rem;
            }
            span:nth-child(2){
                text-align: right;
                font-size: .22rem;
                padding: .2rem;
            }
        }
    }
    .is-background{
        display: none;
    }
    button{
        width: 50%;
        margin-left:25%;
        border: 1px solid #52b6E7;
        color: #52b6E7;
        background: #fff;
        padding: .3rem 0;
        margin-bottom: .4rem;
    }
}
@media (min-width: 751px) {
    .contentTitle{
        position: relative;
        text-align: center;
        margin: 0.99rem 0 1.07rem;
        span{    
            padding: 0.25rem 0.47rem;
            display: inline-block;
            font-size: 0.26rem;
            color: #606267;
            cursor: pointer;
        }
        .contentTitle_before,.contentTitle_after{
            position: absolute;
            height: 1px;
            width: 1.39rem;
            background: #999;
            top: 50%;
        }
        .contentTitle_before{
            margin-left: -1.79rem;
        }
        .contentTitle_after{
            margin-left: 0.4rem;
        }
    }
    .news_ul {
        display: flex;
        li{
            float: left;
            /* width:25.3%;
               margin:0 4%;*/
               flex:1;
            h3{

            }
            h2{
                span:first-child{
                    color: #20242A;
                    font-size: 0.2rem;
                }
                span:nth-child(2){
                    color:#676767;
                    font-size: 0.16rem;
                    float: right;
                }
            }
            p{
                padding: 0.29rem 0.22rem;
                color: #676767;
                font-size: 0.16rem; 
                line-height: 0.3rem;
            }
        }
        li:nth-child(2){
            margin: 0 0.56rem;
        }
    }

    .news_ul_card{
        background:rgba(243,243,243,1);
        padding-top: 0.27rem;
        h2{
            padding:0 0.22rem;
        }
    }
    button{
        display: none;
    }
    .is-background{
        margin: .8rem 1rem;
    }
}
.active{
        background: #20B7FE;
        color: #fff;
        border:none
    }
</style>

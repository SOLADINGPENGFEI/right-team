<template>
    <div class="main">
        <div class="banner"><img src="../../img/aboutText.png" alt=""></div>
        <div class="wrapper introduction">
            <div class="content_title fadeInUp zoomIn animated"><span>企业简介</span></div>
            <div class="content">
                <p>北京明科普华信息技术有限公司是企业供应链管理执行系统软件产品及应用集成解决方案的领导厂商。公司专注于基于互联网技术、自动识别技术的供应链管理执行系统的产品研发和系统集成。致力于把基于先进信息技术的最佳管理方案与业务实践经验普及到客户的管理与业务创新活动中，并全面提供具有自主知识产权的软件产品、服务及解决方案。让企业业务更加高效，获得业务信息更加准确，反应更加迅速，效益更加显著。</p>
                <div class="content_img"><img src="../../img/about_icon.png" alt=""></div>
            </div>
            <div class="content">
                <div>
                    <p>明科核心团队及技术力量，是国内软件研发应用领域的先驱者，掌握了相关应用的核心技术，目前明科软件系统已被广泛应用于企业的ERP应用、GSP质量管理规范应用、仓储管理、配送管理、生产管理、包装赋码、销售管理、服务管理、产品追溯、质量追溯、固定资产管理、档案管理等各个环节，为企业提供了供应链执行管理、仓库管理、生产管理、分销管理等全方位软件产品及解决方案</p>
                    <p>明科2006年成立，总部位于北京，并在沈阳、西安、武汉、成都、上海等地设立服务机构，拥有覆盖全国的销售、服务网络2016年，明科10周年之际，明科世纪成立，专注于电商领域，旨在销售端与客户实现共赢明科以引领企业新思维、提升企业源动力、帮助客户成功为使命，以创造客户满意来赢得客户的忠诚，与客户共成长。致力于成为全球领先的管理软件及解决方案提供商</p>
                </div>
                <div><img src="../../img/about_info.png" alt=""></div>
            </div>
            <div class="three">
                <div class="content_title fadeInUp zoomIn animated"><span>3大优势</span></div>
                <div class="content">
                    <ul class="goods_ul">
                        <li v-for="(item,index) in 3" :key="index">
                            <div><h3><img src="../../img/goods.png" alt=""></h3></div>
                            <h2><a href=""></a>产品优势</h2>
                            <p>国内首推的平台化开发，使项目开发效率提升30%，产品性能稳定、易变更</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="content_title"><span>发展历程</span></div>
        </div>
        <div class="content" style="background:#F9F9F9; height:6.55rem;">
            <div class="wrapper">
            </div>
        </div>
        <div class="wrapper">
            <div class="content_title fadeInUp zoomIn animated"><span>企业愿景</span></div>
            <div class="content vision">
                <p>成为中国信息化价值传递的倡导者，致力于通过信息化手段推动供给侧改革，帮助企业完成中国智造升级。</p>
                <div class="content_img"><img src="../../img/about_info.png" alt=""></div>
            </div>
            <div class="content_title fadeInUp zoomIn animated"><span>企业文化</span></div>
             <div class="enterprise">
                <ul class="culture_ul">
                    <li v-for="(item,index) in 3" :key="index">
                        <div><h3><img src="../../img/goods.png" alt=""></h3></div>
                        <h2><a href="">专业</a></h2>
                        <p>大事业</p>
                        <p>明科希望每一位员工都能够通过这个平台实现自己的事业梦想</p>
                    </li>
                </ul>
            </div>
            <div class="wrapper">
                <div class="content_title fadeInUp zoomIn animated"><span>团队建设</span></div>
                <div class="content teamBuilding" v-for="(item,index) in 2" :key="index">
                    <h2><span>快乐出游，快乐团建</span></h2>
                    <ul class="teamBuilding_ul">
                        <li v-for="(item,index) in 6" :key="index">
                            <h3><img src="" alt=""></h3> 
                            <p>每年1月年会，各地同事齐聚北京，温泉滑雪是对辛苦一年的明科团队最好的奖励</p>
                        </li>
                    
                    </ul>
                </div>
            </div>
            <div class="wrapper">
                <div class="content_title fadeInUp zoomIn animated"><span>荣誉资质</span></div>
                <div class="content honor">
                    <ul class="honor_ul">
                        <li v-for="(item,index) in 6" :key="index">
                            <h3><img src="" alt=""></h3>
                            <span>高新技术企业</span>
                        </li>
                    </ul>
                </div>
                <div class="content_title fadeInUp zoomIn animated"><span>联系明科</span></div>
                <div class="content contact">
                    <ul class="contact_ul">
                        <li v-for="(item,index) in 3" :key="index">
                            <h3><i></i><span>明科总部</span></h3>
                            <p>北京市朝阳区建国路88号SOHO现代城2号楼29层</p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@media (max-width: 750px) and (min-width: 0){
    .wrapper{
        width: 100%;
    }
    .content_title, .content, .content{
        width: 94%;
        margin: 0  auto;
    }
    .banner{
        width: 100%;
        background: url(../../img/aboutBanner.png) no-repeat;
        background-size: 160% auto;
        min-height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 30%;
        }
    }
    .content{
        padding: 0 .1rem .3rem 0;
        p{
            font-size: .24rem;
        }
    }
    .content_title {
        margin: 0.2rem 0 .4rem;
    }
    .content_img{
        width: 100%;
        height: 2.42rem;
        border: 1px dashed #000;
        margin: .4rem 0;
        background: #F1F1F1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .content:nth-child(3){
        height: auto;
        p{
            font-size: 0.24rem;
            margin-bottom: .3rem; 
        }
        div:nth-child(2){
            border: 1px dashed #000;
        }
    }
    .three{
        background: #F1F1F1;
       
        width: 100%;
        height: auto;
       .goods_ul{
           width: 100%;
        height: 4.8rem;
        box-sizing: border-box;
        background: #f9f9f9;
        padding: .3rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        li>div{
            padding: 0 .2rem;
            h3{
                border:1px dashed #000;
            }
        }
        h2{
            margin: 0;
            font-size: .26rem;
            font-family:PingFang-SC-Bold;
            font-weight:bold;
            margin: .2rem 0;
            text-align: center;
        }
       }
    }
    .vision{
        width: 94%;
        height: auto;
        p{
            font-size: 0.21rem;
            color: #00A1E1;
            text-align: center;
        }
        .content_img{
            width: 100%;
            height: auto;
            border: 1px dashed #000;
        }
    }
    .enterprise{
        width: 100%;
        height: 4.8rem;
        box-sizing: border-box;
        background: #f9f9f9;
        padding: .3rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        li>div{
            padding: 0 .2rem;
            h3{
                border:1px dashed #000;
            }
        }
        h2{
            margin: 0;
            font-size: .26rem;
            font-family:PingFang-SC-Bold;
            font-weight:bold;
            margin: .2rem 0;
        }
    }
    .teamBuilding{
        height: 2.6rem;
        overflow: hidden;
        h2{
            display: none;
        }
        .teamBuilding_ul{
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            li{
                display: inline-block;
                width: 33%;
                padding: .1rem;
                h3{
                    width: 100%;
                    height: 1.3rem;
                    border:1px dashed #000;
                }
                p{
                    display: none;
                }
            }
        }
    }
    .teamBuilding:nth-child(2){
        display: none;
    }
    .honor_ul{
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        li{
            width: 50%;
            height: auto;
            padding: .1rem;
            flex-wrap: wrap;
            h3{
                width: 100%;
                height: 2.4rem;
                border: 1px dashed #000;
            }
            span{
                display: none;
            }
        }
    }
    .contact_ul{
        width: 94%;
        height: auto;
        margin: 0 auto;
        box-shadow: 0 0 38px 0 rgba(79,78,80,0.15);
        padding: .4rem;
        li{
            border-bottom: 1px solid #818181;
            padding-bottom: .4rem;
            margin-bottom: .4rem;
            span{
                font-size: .28rem;
            }
        }
        li:last-child{
            border: none;
            margin: 0;
        }
    }
}
@media (min-width: 751px) {
    .banner{
        background: url(../../img/aboutBanner.png) no-repeat center center;
        background-size: cover;
        min-height: 5.65rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .introduction{
        .content:nth-child(2){
            display: flex;
            p{
                flex: 1;
                margin-right: .4rem;
                line-height: 0.25rem;
                font-size: 0.16rem;
            }
            .content_img{
                flex: 1;
                background: #F1F1F1;
                display: flex;
                justify-content: center;
                align-items: center;
            }

        }
        .content:nth-child(3){
            width: 100%;
            height: auto;
            padding: .6rem 0;
            div:first-child{
                float: right;
                p{
                    line-height: 0.25rem;
                    font-size: 0.16rem; 
                    flex:1;
                    text-align: right;
                }
            }
            div{
                width: 48%;
            }
        }

    }
    .content_title{
        margin: 1rem 0 0.55rem;
    }
    .vision{
        display: flex;
        p{
            padding: 0.73rem 1.2rem 0 0;
            font-size: 0.2rem;
            color: #00A1E1;
            flex: 1;
        }
    }
    .content_ul{
        li>h2{ margin: 0.38rem 0 0.18rem;}
    }   
    .teamBuilding{
        h2{
            overflow: hidden;
            span{
                font-size: 0.22rem;
                color:#3B3B3C;
                position: relative;
                display: block;
                width: 100%;
            }
            span::after{
                content: '';
                position: absolute;
                top:50%;
                width: 83.5%;
                height: 1.1px;
                background: #BFBFBF;
                right: -0.16rem;
            }
        }
        .teamBuilding_ul{
            display: flex;
            margin-top: 0.39rem;
            li{
                flex:1;
                float: left;
                text-align: center;
                h3{
                    img{
                        height: 1.65rem;
                        width: 100%;
                        background: antiquewhite;
                        display: inline-block;
                    }
                }
                p{
                    font-size:0.16rem;
                    color:#3B3B3C;
                    margin-top: 0.2rem;
                    padding: 0 0.33rem;
                }
            }
        }
    }
    .contact_ul{
        display: flex;
        margin-bottom: 0.6rem;
        li{
            flex: 1;
            position: relative;
            h3{
                i{
                    height: 0.28rem;
                    width: 0.28rem;
                    background:chocolate;
                    display: inline-block;
                    vertical-align: bottom;
                    margin-right: 0.15rem;
                }
                span{
                    font-size: 0.24rem;
                    color: #666;
                }
            }
            p{
                width: 90%;
                margin-top: 0.45rem;
                color: #3B3B3C;
                font-size:0.16rem;
                line-height: 0.26rem;
            }
        }
        li::before{
            content:'';
            display: inline-block;
            height: 1.19rem;
            width: 1px;
            background: #BFBFBF;
            position: absolute;
            right: 7%;
        }
        li:last-child::before{
           display: none;

        }
    }
    .goods_ul{
        li{
            float: left;
            margin: 0 3%;
            width: 27.3%;
            text-align: center;
            h3{
                img{
                    border:1px dashed;
                }
            }
            h2{
                margin: 0.2rem 0 0.13rem;
                font-size: 0.22rem;
                color:#3A3A3C;
            }
        }
    }

    .wrapper .teamBuilding:last-child{
        margin-top: 0.77rem;
    }

    .honor_ul{
        display: flex;
        li{
            float: left;
            text-align: center;
            width: 19%;
            margin: 0.48rem 3%;
            span{
                display: inline-block;
                background: #000000;
                opacity: 0.56;
                width: 100%;
                padding: 0.12rem 0;
                color: #fff;
            }
            h3{
                img{
                    height: 1.6rem;
                    width: 2.27rem;
                    background: antiquewhite;
                    display: inline-block; 
                }
            }
        }
    }
}
.culture_ul{
    li{
        float: left;
        margin: 0 3%;
        width: 27.3%;
        text-align: center;
        h2>a{
                border-bottom: 1px solid #303030;
            }
    }
    p{
        color: #3B3B3C;
        font-size: 0.18rem;
        line-height: 0.25rem;
    }
}



</style>

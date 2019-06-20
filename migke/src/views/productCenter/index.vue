<template>
    <div class="main">
        <div class="banner"></div>
        <div class="wrapper platform">
            <div class="content_title"><span>明科商业智能开放平台</span></div>
            <p>明科商业智能开放平台(MingKe Business Intelligen OS，简称：MingKeOS)是由明科云计算事业部研发的可配置人工智能开发平台，使用MingKeOS可以让用户通过简单配置、自然语言对话的交互方式，即可实现企业管理过程中复杂的业务逻辑处理，平台内置采购、生产、销售、技术、品控、追溯、售后、供应商、经销商、库存、财务电商、数据中心、接口、人工智能（Kane）等28大业务领域模块的功能操作，明科作为国内首家将人工智能应用于企业管理领域的企业，借助云计算中心，Kane可以进行深度学习，会成为企业管理的好帮手。</p>
        </div>
        <div class="wrapper scene">
            <div class="content_title"><span>应用场景</span></div>
            <div class="content_scene"> 
                <span class="scene" v-for="(item,index) in 6" :key="index">{{index}}</span>
            </div>
        </div>
        <div class="wrapper skill">
            <div class="content_title"><span>核心技术</span></div>
            <div class="content_skill" >
                <div class="content_skill_item" v-for="(item,index) in 5" :key="index">
                    <div><img src="" alt=""></div>
                    <p>三屏合一</p>
                </div>
            </div>
        </div>
        <div class="wrapper industry">
            <div class="content_title"><span>适用行业</span></div>
            <div class="content_industry"  v-for="(item,index) in 2" :key="index">
                <div class="content_industry_card" v-for="(item,index) in 2" :key="index">
                    <h3><a href="">装备制造</a></h3>
                    <p>中国正在成为全球制造业的中心，中国是制造业大国，但还不是强国。因此，国家确定了通过信息化带动工业化的国策，推动制造企业实施制造业信息化，产品设计制造和企业管理的信息化、生产过程控制的智能化、制造装备的数控化以及咨询服务的网络化，全面提升制造业的竞争力。</p>
                    <div class="content_industry_list">
                        <ul>
                            <li v-for="(el,i) in 5" :key="i">供应商协同平台</li>
                        </ul>
                        <img src="" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper join">
            <div class="content_title"><span>加盟代理</span></div>
            <div class="content_skill">
                <div class="content_skill_item" v-for="(item,index) in 5" :key="index">
                    <div><img src="" alt=""></div>
                    <p>注册申请</p>
                </div>
            </div>
        </div>
        <div class="wrapper joinBtnBox">
            <el-button>申请加入</el-button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@media (max-width: 750px) and (min-width: 0){
    .content_scene{
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            span{
                display: inline-block;
                width: 48%;
                height: 2.48rem;
                margin: 1%;
                border:1px dashed #333;
            }
        }
    .content_skill{
        width: 100%;
        overflow: hidden;
        display: flex;
        padding: 0 1%;
        .content_skill_item{
            text-align: center;
            flex: 1;
            font-size: .1rem;
            div{
                width: .75rem;
                height: .75rem;
                border:1px dashed #333;
                display: inline-block;
            }
            p{
                font-size: 0.12rem;
                color:#3A3A3C;
                margin: 0.2rem 0;
                text-align: center;
            }
        }
    }
    .content_title{
        margin: 0.5rem 0 0.38rem;
    }
    .content_industry_card{
        width: 100%;
        height: auto;
        background: #f4f4f4;
        padding: .2rem;
        h3{
            width:1.2rem;
            font-size: .28rem;
            font-family: PingFang-SC-Bold;
            font-weight: bold;
            color:#3A3A3C;
            padding: 0 0 .06rem 0;
            border-bottom: 1px solid #3A3A3C;
        }
        p{
            margin: .32rem 0;
            color: #676767;
        }
        .content_industry_list{
            width: 100%;
            height: auto;
            display: flex;
            font-size: .24rem;
            ul>li{
                list-style-type:disc;
                color: #676767;
                margin: .1rem .4rem;
            }
            img{
                width: 3.8rem;
                height: 2rem;
                border:1px dashed #333;
                margin: auto 0;
            }
        }
    }
    .el-button{
        padding:0.2rem 0.8rem;
        background: #6395ff;
        span{
            font-size: 0.3rem;
            color: #fff;
            font-weight: bold;
        }
    }
    .content_title>span::before{
        display: none;
    }
    .content_title>span::after {
        content: '';
        position: absolute;
        top: 102%;
        left: 29%;
        width: 1.1rem;
        height: 2px;
        background: #000000;
    }
    .content_industry div:nth-child(2n){
        background: #ffff;
    }
}
@media (min-width: 751px){
    .platform{
        .content_title{
            margin: 0.1rem 0 0.38rem;
        }
        p{
            font-size: 0.16rem;
            color: #676767;
            line-height: 0.25rem;
        }
    }
    .scene{
        margin: 0 auto;
        .content_title{
            margin: 1.04rem 0 0.52rem;
        }
        .content_scene{
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            span{
                display: inline-block;
                width: 32%;
                height: 2.48rem;
                border:1px dashed #333;

            }
        }
    }
    .center .skill{
        .content_title{
            margin: 0.69rem 0 0.63rem;
        }
        .content_skill{
            display: flex;
        }
        .content_skill_item{
            flex: 1;
            div{
                text-align: center;
                img{
                    border:1px dashed #333;
                    width:1.36rem;
                    height:1.39rem;
                    display: inline-block;
                }
            }
            p{
                font-size: 0.18rem;
                color:#3A3A3C;
                margin: 0.19rem;
                text-align: center;
            }

        }
    }
    .industry{
        .content_title{
            margin: 1.06rem 0 0.69rem;
        }
        .content_industry{
            display: flex;
            .content_industry_card{
                background: rgba(244,244,244,1);
                margin-right: 0.33rem;
                padding: 0.19rem 0.22rem 0.35rem;
                h3{
                    margin-bottom: 0.33rem;
                    a{
                        font-size: 0.24rem;
                        color: #3A3A3C;
                        text-decoration: underline;
                    }
                }
                p{
                    font-size: 0.14rem;
                    color:#676767;
                }
                .content_industry_list{
                    display: flex;
                    margin-top: 0.27rem;
                    ul{
                        li{
                            line-height: 0.25rem;
                        }
                    }
                }
            }
        }
        .content_industry:last-child{
            margin-top: 0.3rem;
        }
    }
    .join{
        .content_title{
            margin: 0.85rem 0 0.53rem;
        }
    }
    .el-button{
        padding:0.2rem 0.8rem;
        background: #3A3A3C;
        span{
            font-size: 0.3rem;
            color: #fff;
            font-weight: bold;
        }
    }
}
.joinBtnBox{
    text-align: center;
    margin: 1.08rem auto 1.9rem;
}
.content_agent{
    display: flex;
}
.content_agent_item{
    flex: 1;
    div{
        text-align: center;
        img{
            border:1px dashed #333;
            width:1.36rem;
            height:1.39rem;
            display: inline-block;
        }
    }
    p{
        font-size: 0.18rem;
        color:#3A3A3C;
        margin-top: 0.19rem;
        text-align: center;
    }
}
</style>

<template>
    <div class="main">
        <div class="wrapper dynamic">
            <div class="dynamic_l">
                <h3>明科>新闻资讯 >企业资讯 >宝时得电商平台项目启动会议隆重举行</h3>
                <h2 class="dynamic_title">宝时得电商平台项目启动会议隆重举行</h2>
                <h3 class="dynamic_subtitle">企业资讯 | 2018-10-10</h3>
                <div class="dynamic_content" v-for="(item,i) in 2" :key="i">
                    <p>9月22日上午，宝时得电商平台项目启动会在苏州厅隆重召开，专业工具营销中心朱总、财务张总、信息化管理部丁总，携项目组团队参加了此次会议。北京明科普华副总经理张富贵，携顾问代表4人出席了会议。
                    会议由电商销售部经理纪锦露主持召开。</p>
                    <img src="../../img/dynamicDetail.png" alt="">
                </div>
            </div>
            <div class="dynamic_r">
                <h3>热门文章</h3>
                <ul class="dynamic_ul">
                    <li v-for="(item,i) in 6" :key="i">
                        <img src="../../img/caseList.png" alt="">
                        <div>
                            <p>明科产品质量安全追溯系统解决方案</p>
                            <span>2017-03-08</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="wrapper dynamic_b">
            <!-- <p>上一篇： </p> -->

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.dynamic{
    padding-top: 0.31rem;
    display: flex;
}
.dynamic_l{
    flex: 0.75;
    padding: 0 0.19rem 0.93rem 0;
    border-bottom: 1px solid #DBDBDB;
    h3{
        font-size: 0.16rem;
        color: #3A3A3C;
    }
    .dynamic_title{
        margin: 0.43rem 0 0.19rem;
        text-align: center;
        font-size: 0.24rem;
        font-weight: bold;
    }
    .dynamic_subtitle{
        text-align: center;
        color: #838383;
        font-size: 0.18rem;
        padding-bottom: 0.19rem;
        border-bottom: 1px solid #DBDBDB;
    }
    .dynamic_content{
        p{
            font-size: 0.14rem;
            color: #3F3F3F;
            line-height: 0.24rem;
            margin: 0.3rem 0;
        }
    }
}
.dynamic_r{
    flex:0.25;
    h3{
        font-size: 0.16rem;
        color:#3A3A3C;
        font-weight: bold;
    }
    .dynamic_ul{
        padding-top: 0.06rem;
        li{
            display: flex;
            margin-top: 0.1rem;
            div{
                flex: 1;
                margin-left: 0.17rem;
            }
            p{
                font-size: 0.14rem;
                color: #676767;
                line-height: 0.22rem;
            }
            span{
                font-size: 0.12rem;
                color: #AFADAD;
            }
                
        }
    }
}

</style>

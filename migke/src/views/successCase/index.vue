<template>
    <div class="main">
        <div class="banner">
            <img src="../../img/successBanner.png" alt="">
        </div>
        <div class="wrapper">
            <div v-for="(item, index) in 3" :key="index">
                    <div class="content_title">
                    <span>中石油</span>
                    <p>项目实施落地: 北京 行业: 能源行业 时间: 2012年3月</p>
                </div>
                <div class="content">
                    <!-- <ul>
                        <li v-for="(item,index) in 12" :key="index">行业</li>
                    </ul> -->
                    <!-- <a href=""  v-for="(item,index) in 12" :key="index">行业</a> -->
                    <div class="contnt-describe">
                        <div class="left">
                            <h3>企业背景</h3>
                            <p>
                                中国石油工程建设公司隶属于中国石油天然气集团公司，是集团公司专门从事石油工程设计、制造、施工和工程总承包的专业公司，现已发展成为集团公司在国内外石油工程建设领域最具代表性的公司 。
                            </p>
                            <p>
                                CPECC前身为原石油工业部基建局，1980年经国务院批准成立对外经济合作企业，是中国首批进入国际市场的八大公司之一。1998年经集团公司报经国家经贸委批准，组建为中国石油工程建设（集团）公司，下属中国石油天然气第一、六、七建设公司和华东勘察设计研究院。2000年成为中油国际工程有限责任公司的全资子公司，下属中国石油天然气华东勘察设计研究院。2008年，集团公司将中国石油天然气第一建设公司和华东勘察设计研究院与中国石油工程建设（集团）公司合并重组，组建为中国石油工程建设公司。公司经过内部业务整合，在原第一建设公司和华东设计院的基础上，组建了华东设计、北京设计、第一建设、重工制造、技术服务五个国内专业分公司。
                            </p>
                        </div>
                        <div class="right">
                            <img src="/" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="content">
                <ul class="case_list">
                    <li  v-for="(item,index) in 12" :key="index">
                        <h3><img src="../../img/caseImg.png" alt=""></h3>
                        <span>中国石油</span>
                    </li>
                </ul>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>

.content_title{
    margin: 0.94rem 0 1.03rem;
    p{
        color: #838383;
        font-size: .16rem;
        text-align: center;
        margin-top: .26rem;
    }
}
h3{
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    color:#3A3A3C;
    text-align: left;
    margin:.2rem 4%;
}
.contnt-describe{
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding: .3rem 0;
    background: #f9f9f9;
    p{
        width: 92%;
        margin: 0 auto;
        text-align-last: left;
        font-size: .16rem;
        margin-bottom: .4rem;
    }
}
.content:nth-child(2){
    text-align: center;
    a{
        color:#3B3B3C;
        padding: 0.06rem 0.2rem;
        display: inline-block;
        font-size: 0.16rem;
        margin: 0.21rem 0.1rem;
    }
}
.case_list > li{
    width: 19%;
    float: left;
    text-align: center;
    margin: 0.48rem 3% 0;
    display: inline-block;
    border:1px solid #C0C0C0;
    span{
        display: inline-block;
        background: rgba(0,0,0,1);
        opacity: 0.56;
        width: 100%;
        padding: 0.12rem 0;
        color: #fff;
    }

}
.content:nth-child(3){
    margin:0.72rem 0 2.88rem;
}
@media (min-width: 751px) {
    .wrapper>div:nth-child(2n)>.contnt-describe{
        background: red;
    }
    .contnt-describe{
        height: 5rem;
        .left{
            float: left;
            width: 60%;
        }
        .right{
            float: right;
            width: 3.85rem;
            height: 2.38rem;
            border: 1px dashed #000;
            margin: .8rem .3rem;
            img{
                display: inline-block;
            }
        }
    }
    .content_title>span::after {
        content: '';
        position: absolute;
        top: 112%;
        left: 39%;
        width: .8rem;
        height: 1px;
        background: #838383;
    }
    .content_title>span::before{
        display: none;
    }
    h3{
        font-size: .38rem;
    }
    .contnt-describe{
        p{

        }
    }
}
@media (max-width: 750px) and (min-width: 0){
    .header{
        padding: 0 2%;
    }
    .wrapper{
        width: 100%;
    }
    .content_title > span::after ,.content_title > span::before {
        display: none;
    }
    .content_title{
        text-align: center;
    }
    .content_title >span{
        display: inline-block;
        border-bottom: 1px solid #3B3B3C;
    }
    .contnt-describe{
        .right>img{
            display: inline-block;
            margin: .6rem 0;
            width: 3.85rem;
            height: 2.38rem;
            border: 1px dashed #000;
        }
    }
}
</style>

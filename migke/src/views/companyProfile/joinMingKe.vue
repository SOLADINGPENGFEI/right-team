<template>
    <div class="main">
        <div class="banner"><img src="../../img/aboutText.png" alt=""></div>
        <div class="content_title fadeInUp zoomIn animated"><span>加入明科</span></div>
        <div class="wrapper">
            <div class="join">
                <div class="join_t">
                    <span>MingKeOS</span>
                    <div>
                        <p>hr@minkesoft.com</p>
                        <p>400-189-1819</p>
                    </div>
                </div>
                <div class="join_m">
                    <h2>广纳天下有识之士，以明日科技普惠中华！</h2>
                    <p>明科致力于将先进的IT技术推广至广大生产制造企业，为中国制造输送信息技术、IT人才、管理人才；为社会培养有用的栋梁之才。</p>
                    <p>大事业、大家庭、大学校是明科文化的精髓，现在已经很少有人能一生只在一家企业工作，不管将来身在何方，明科都会努力为广大员工创造创业平台，学习知识，享受家庭温暖，并将这份家庭之爱传向全社会。</p>

                    <p>请您将简历命名为（职位-姓名）形式发送至邮箱：<span>hr@mingkesoft.com</span></p>
                </div>
                <div class="join_b">
                    <p>北京明科普华信息技术有限公司</p>
                    <p>www.minkesoft.com</p>
                </div>
            </div>
            <div class="join_content">
                <div class="join_content_card" v-for="(item,i) in 2" :key="i"> 
                    <h2>大客户经理</h2>
                    <ul>岗位要求
                        <li>1、大专及以上学历；</li>
                        <li>2、市场营销、工商管理类相关专业；</li>
                        <li>3、从事销售五年以上工作经验。有一定的客户资源者优先；</li>
                        <li>4、具有较强的公关、谈判、沟通能力，较强的分析问题和解决问题能力；</li>
                        <li>5、责任心强，具备优秀团队合作精神，够承受较大的工作压力。</li>
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
.banner{
    background: url(../../img/aboutBanner.png) no-repeat center center;
    background-size: cover;
    min-height: 5.65rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content_title{
    margin: 1rem 0 0.67rem;
}
.join{
    background: url(../../img/joinBanner.png) no-repeat center center;
    min-height: 11.60rem;
    .join_t{
        padding: 1.12rem 2.02rem 0 2.57rem;
        display: flex;
        justify-content: space-between;
        span{
            font-size: 0.4rem;
            color: #3B3B3C;
        }
        div{
            p{
                font-size: 0.16rem;
                color:#3B3B3C;
            }
            p:last-child{
                margin-top: 0.15rem;
            }
        }
    }
    .join_m{
        margin-top: 2.24rem;
        padding:0 2.2rem 0 2.7rem;
        h2{
        font-size: 0.34rem;
        color: #3B3B3C;
        margin-bottom: 0.41rem;
        }
        p{
            font-size: 0.2rem;
            color:#3E3E3E;
            line-height: 0.28rem;
            margin-top: 0.2rem;
        }
        p:nth-child(2){
            margin-top: 0;
        }
    }
    .join_b{
        margin-top: 2.12rem;
        text-align: right;
        margin-right: 2.02rem;
        p{
            font-size: 0.16rem;
            color: #3B3B3C;
        }
        p:last-child{
            margin-top: 0.12rem;
        }
    }
}
.join_content{
    display:flex;
}
.join_content_card{
    background: #fff;
    border: 1px solid #E8E8E8;
    padding: 0.2rem 0.18rem;
    margin: 0 0.19rem;
    h2{
        text-align: center;
        font-weight: bold;
        color: #3B3B3C;
        font-size: 0.24rem;
    }
    ul{ 
        font-size: 0.16rem;
        color: #3E3E3E;
         font-weight: bold;
        li{
            line-height: 0.25rem;
            font-weight: 400;
        }
    }
}
</style>

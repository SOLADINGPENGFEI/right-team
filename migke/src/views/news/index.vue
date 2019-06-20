<template>
    <div>
        <div class="banner">
            <img src="../../img/newsBanner.png" alt="">
        </div>
        <div class="wrapper">
            <div class="contentTitle">
                <i class="contentTitle_before"></i>  
                <span v-for="(tab, i) in tabs" :key="i" :class="{active:cur==i}"
                @click="cur=i">{{tab.name}}
                </span>
                <i  class="contentTitle_after"></i></div>
            <div class="content">
                <ul class="news_ul">
                    <li v-for="(item,index) in 3" :key="index">
                        <h3><img src="../../img/dynamic.png" alt=""></h3>
                        <div class="news_ul_card"> 
                            <h2>                        
                                <span>明科产品质量安全追溯系统解决方案</span>
                                <span>2017-03-08</span>
                            </h2>
                            <p>明科公司面向生产型企业专门研发了一套质量监管系统，针对商品的生产日期、有效期批号等信息，创建唯一可识别条码，进行产品质量追溯，再根据此识别码的包装关联码查询流通过程中的商品流...</p>
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
                    name:'全部'
                },
                {
                    name:'企业资讯'
                },
                {
                    name:'公司活动'
                },
                {
                    name:'解决方案'
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
        li{
            border: 1px dashed #000;
            margin-bottom: .3rem;
            img{
                width: 100%;
                height: 3.4rem;
            }
            p{
                font-size: .22rem;
                padding: .2rem;
                color:#676767;
            }
        }
        h2{
            width: 100%;
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

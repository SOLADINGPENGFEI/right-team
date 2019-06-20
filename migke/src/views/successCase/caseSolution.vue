<template>
    <div class="content">
        <div class="banner">
            <img src="../../img/解决方案.png" alt="" >
        </div>
        <div class="wrapper">
            <div class="content_title"><span>数字化解决方案</span></div>
            <p>AI与IoT技术最终会将物理世界改造为万物互联世界，同时建立一个全新的数字化世界。基于自身核心的AI算法能力与软硬件结合能力，明科面向核心应用场景，构建了仓储物流、智能制造和商城营销三大业务体系，同时也通过开放基础人工智能算法赋能开发者实现应用创新。
            </p>
            <div class="content_solution">
                <dl class="solution_box" v-for="(item,i) in 3" :key="i">
                    <dt class="solution_box_in">
                        <h3><span>仓储物流</span></h3>
                        <img src="../../img/矩形 43.png" />
                        <p>综合了软件系统、 条码应用、硬件系统、无线网络、系统扩展接 口等多种技术，通过无线移动终端设备，智能信息化应用渗透到仓库作业的每个细节及仓库现场
                        </p>
                        <div class="solution_box-bom">
                            <div class="solution_box-bom_left">
                                <a href="/">智慧仓流</a>
                                <a href="/">智慧仓流</a>
                                <a href="/">智慧仓流</a>
                            </div>
                            <img src="../../img/solution.png" alt="">
                        </div>
                    </dt>
                </dl>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>

<style lang="less" scoped>
@media (min-width: 751px) {
    .content{
        margin-top:1.29rem;
    }
    .content_caseSolution{
        display: flex;
        .caseSolution_box{
            flex: 1;
            padding: 0.2rem 0.2rem 0.5rem; 
            background: #F4F4F4;
            h3{
                font-size: 0.24rem;
                color: #3A3A3C;
               span{
                    border-bottom: 1px solid #313131;
               }
            }
            .caseSolution_box_in{
                margin-top: 0.29rem;
                display: flex;
                p{
                    margin-right: 0.45rem;
                    font-size: 0.14rem;
                    color: #676767;
                }
            }
        }
        .caseSolution_box:last-child{
            margin-left: 0.35rem;
        }
    }
    .solution_box{
        display: flex;
        margin: 1rem 0;
        dt{
            width: 56%;
            margin-right: 8%;
            p{
                margin: .4rem 0 .6rem 0;
            }
        }
    }
    .solution_box_in>h3{
        border-left: #313131 solid 3px;
        padding-left: 5px;
    }
}
@media (max-width: 750px) and (min-width: 0){
    .center{
        padding-top: .6rem;
    }
    .content_solution{
        margin-top: .87rem;
        display: flex;
        flex-direction: column;
        dl{
            background: #F9F9F9;
            padding: .4rem .3rem;
            height:5.66rem;
            background:rgba(249,249,249,1);
            margin:.4rem 0;
            dt{
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                h3{
                    margin-bottom:0.15rem;
                    width:2.4rem;
                    height:.6rem;
                    text-align: center;
                    span{
                        font-size:.5rem;
                        font-family:PingFang-SC-Bold;
                        color:rgba(59,59,60,1);
                    }
                }
                img{
                    width: 1.74rem;
                    height:0.09rem;
                }
                p{
                    width:6.35rem;
                    height:1.11rem;
                    font-size:.24rem;
                    font-family:PingFang-SC-Regular;
                    font-weight:4;
                    color:rgba(62,62,62,1);
                    line-height:.44rem;
                    margin:.46rem 0 .32rem 0;
                }
                .solution_box-bom{
                    width: 100%;
                    flex:1;
                    display: flex;
                    .solution_box-bom_left{
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-around;
                        margin:0 .86rem 0 .57rem;
                        a{
                            width:.97rem;
                            height:.25rem;
                            font-size:.24rem;
                            font-family:PingFang-SC-Regular;
                            font-weight:4;
                            text-decoration:underline;
                            color:rgba(0,112,192,1);
                        }
                    }
                    img{
                        width: 3.84rem;
                        height: 2.33rem;
                    }
                }
            }
        }

    }
    .content_title{
        margin: .55rem 0 .36rem 0;
    }
    .wrapper>p{
        width:6.85rem;
        height:1.99rem;
        font-size:.24rem;
        font-family:PingFang-SC-Regular;
        font-weight:4;
        color:rgba(62,62,62,1);
        line-height:.44rem;
    }
}

</style>

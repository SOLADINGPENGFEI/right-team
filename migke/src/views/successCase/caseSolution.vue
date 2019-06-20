<template>
    <div class="">
        <div class="banner"></div>
        <div class="wrapper">
            <div class="content_title"><span>数字化解决方案</span></div>
            <p>AI与IoT技术最终会将物理世界改造为万物互联世界，同时建立一个全新的数字化世界。基于自身核心的AI算法能力与软硬件结合能力，明科面向核心应用场景，构建了仓储物流、智能制造和商城营销三大业务体系，同时也通过开放基础人工智能算法赋能开发者实现应用创新。
            </p>
            <div class="content_solution">
                <dl class="solution_box" v-for="(item,i) in 3" :key="i">
                    <dt class="solution_box_in">
                        <h3><span>仓储物流</span></h3>
                        <p>综合了软件系统、 条码应用、硬件系统、无线网络、系统扩展接 口等多种技术，通过无线移动终端设备，智能信息化应用渗透到仓库作业的每个细节及仓库现场
                        </p>
                        <a href="/">智慧仓流</a>
                    </dt>
                    <dd>
                        <img src="../../img/solution.png" alt="">
                    </dd>
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
        margin-top: .6rem;
        dl{
            background: #F9F9F9;
            padding: .4rem .3rem;
            h3{
                margin: 0 auto;
                span{
                    display: block;
                    font-family:PingFang-SC-Bold;
                    font-weight:bold;
                    color:rgba(59,59,60,1);
                    font-size: .4rem;
                }
            }
        }

    }
    .content_title{
        margin: 1rem 0 .3rem 0;
    }
}

</style>

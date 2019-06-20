<template>
    <div class="main">
        <div class="banner">
            <img src="../../img/partner.png" alt="">
        </div>
        <div class="wrapper">
            <div class="content_title"><span>合作伙伴</span></div>
            <h2><i></i> <span>partner</span></h2>
            <div class="content">
                <ul class="partner_ul">
                    <li v-for="(item,index) in 3" :key="index">
                        <h3><img src="" alt=""></h3>
                        <p>成为实施伙伴</p>
                    </li>
                </ul>
            </div>
        </div>            
        <div class="partner_info">
            <div class="wrapper">
                <h2><i></i> <span>实施伙伴</span></h2>
                <h1>实施伙伴</h1>
                <h3>Implementing partners</h3>
                <el-form class="ruleForm"  :rules="rules" >
                    <el-row>
                        <el-col :span="12">
                            <el-form-item>
                                <el-input placeholder="公司名称"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item >
                                <el-input placeholder="您的职位"></el-input>
                            </el-form-item>
                        </el-col>

                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item >
                                <el-input placeholder="您的姓名"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item >
                                <el-input placeholder="您的电话"></el-input>
                            </el-form-item>
                        </el-col>

                    </el-row>
                    <el-row>
                        <el-col>
                            <el-form-item >
                                <el-input  type="textarea" placeholder="咨询内容"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row style="text-align:center">
                        <el-col>
                            <el-form-item >
                                <el-button type="primary" >提交</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rules:{

            }

        }
    }

}
</script>

<style lang="less" scoped>
@media (max-width: 750px) and (min-width: 0){
    h2{
        display: none;
    }
    .content_title{
        margin: 0.99rem 0 0.5rem;
    }
    .partner_ul{
        width: 100%;
        height: auto;
        li{
            width: 70%;
            margin: .4rem auto;
            text-align: center;
            h3{
                width: 3rem;
                height: 2.8rem;
                border: 1px dashed #999999;
                margin: 0 auto;
            }
            p{
                margin: .4rem 0;
            }
        }
    }
    .partner_info{
        padding: .5rem .4rem;
        background: #303940;
        h2{
            text-align: center;
            position: absolute;
        }
        h1{
            color:#fff;
            font-size: .26rem;
            text-align: center;
        }
        h3{
            color:#fff;
            font-size: .2rem;
            text-align: center;
            margin-bottom: .4rem;
        }
    }
    .el-col-12 {
        width: 100%;
    }
    .partner_info .ruleForm[data-v-238abfa1] {
        padding: 0;       
    }
    .element.style {
        margin: 0;
    }
    .el-button--primary{
        width: 100%;
        background: #00A1E1;
    }
    .el-input, .el-textarea{
        background: #303940;
    }
    .el-textarea__inner{
        line-height: 1;
    }
}
@media (min-width: 751px) {
    h1{
        display: none;
    }
    .partner_ul{
        padding:0 1.92rem;
        li{
            float: left;
            margin: 0 3%;
            width: 27.3%;
            text-align: center;
            h3{
                img{
                    width: 1.52rem;
                    height: 1.4rem;
                    display: inline-block;
                    border: 1px dashed;

                }
            }
            p{
                font-size:0.2rem;
                color:#3B3B3C;
                margin-top: 0.16rem;
            }
        }
    }
    .partner_info{
        background: url(../../img/formBanner.png) no-repeat;
        padding-top: 0.51rem;
        margin-bottom: 2.64rem;
        background-size: cover;
        h2{
            margin-bottom: 0;
        }
        h3{
            color:#4E6C8D;
            font-size:0.14rem;
            padding-left:0.19rem;
        }
        .ruleForm{
            margin-top: 0.28rem;
            padding:0 1.32rem;
        }

    }
    .el-input--mini .el-input__inner{
        height: 47px;
        line-height: 47px;
    }

    .el-button--primary{
        padding: 0.13rem 1.70rem;
    }
    .el-form-item__content {
        line-height: 40px;
        position: relative;
        font-size: 14px;
        padding: 0 .4rem;
    }
    .el-input, .el-textarea{
        padding: 0 .4rem;
    }
}
.banner{
    // background: url(../../img/partner.png) no-repeat center center;
    // background-size: cover;
    // min-height: 5.28rem;
}

.wrapper,.partner_info{
    .content_title:first-child{
        margin: 0.99rem 0 0.95rem;
    }
    h2{
        margin-bottom: 0.6rem;
        i{
            display: inline-block;
            height: 0.24rem;
            width: 0.03rem;
            background: #00A1E1;
            vertical-align: middle;
        }
        span{
            margin-left: 0.06rem;
        }
    }
}
.content:nth-child(3){
    margin-bottom: 0.82rem;
}
</style>

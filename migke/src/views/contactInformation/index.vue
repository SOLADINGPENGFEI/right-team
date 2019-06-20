<template>
    <div class="content ">
        <div class="wrapper mainContact">
            <h2>联系方式</h2>
            <ul class="contact_ul">
                <li v-for="(item,index) in 3" :key="index">
                    <h3><img src="../../img/call.png" alt=""></h3>
                    <h2>400-189-1819</h2>
                    <p>周一到周五</p>
                </li>
            </ul>
            <h2>留下您的联系方式，我们将尽快和您联系</h2>
            <el-form class="ruleForm" label-width="50px" :rules="rules" >
                <el-row>
                    <el-col :span="12">
                        <el-form-item>
                            <el-input placeholder="手机号码"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item >
                            <el-input placeholder="称呼"></el-input>
                        </el-form-item>
                    </el-col>

                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item >
                            <el-input placeholder="邮箱"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item >
                            <el-input placeholder="公司"></el-input>
                        </el-form-item>
                    </el-col>

                </el-row>
                <el-row>
                    <el-col>
                        <el-form-item >
                            <el-input  type="textarea" placeholder="简单描述您的需求"></el-input>
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
</template>

<script>
export default {
    data() {
        return {
            rules:{

            }
        }
    },

}
</script>

<style lang="less" scoped>
@media (max-width: 750px) and (min-width: 0){
    .content{
        background: url(../../img/contactBanner.png) no-repeat;
        background-size: 100% 100%;
        background-size: cover;
    }
    .el-form-item__content{
        margin: 0
    }
    .mainContact{
        margin: 2.17rem auto 1.84rem;
        >h2{
            font-size: 0.26rem;
            color: #3B3B3C;
            margin:0.6rem 0 0.17rem;
        }
        ul{
            width: 100%;
            height: auto;
            padding: .4rem;
            li{
                width: 80%;
                display: flex;
                align-items: center;
                margin: .2rem auto;
                padding:  .2rem .4rem;
                p{
                    display: none
                }
                h3{
                    display: block;
                    width: .38rem;
                    height: 80%;
                    margin-right: .2rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                h2{
                    color:#fff;
                }
            }
            li:first-child{
                background: #1DA1F2;
            }
            li:nth-child(2){
                background: #3B5998;
            }
            li:nth-child(3){
                 background: #4285F4;
            }
        }
        .el-col-12 {
            width: 84%;
        }
        .partner_info .ruleForm[data-v-238abfa1] {
            padding: 0;       
        }
        .element .style {
            margin: 0;
        }
        .el-button--primary{
            width: 40%;
            background: #00A1E1;
        }
        .el-input, .el-textarea{
            background: #303940;
        }
        .el-textarea {
            width: 82%;
            background: #fff;
        }
    }
}
@media (min-width: 751px) {
    .content{
        background: url(../../img/contactBanner.png) no-repeat;
        min-height: 14.42rem;
        background-size: cover;
    }
    .contact_ul{
        display: flex;
        padding-bottom: 0.72rem;
        margin-top: 0.85rem;
        border-bottom: 1px solid #EBECF0;

        li{
            float: left;
            flex: 1;
            text-align: center;
            h2{
                font-size: 0.3rem;
                color: #3B3B3C;
                margin:0.24rem 0 0.17rem;
            }
            p{
                font-size: 0.16rem;
                color: #4E6C8D;
            }
        }
    }
    .el-button--primary{
        background: #5E8EEB;
        border-color: #5E8EEB;
        padding: 0.13rem 0.79rem;
    }
    .mainContact{
        margin: 2.17rem auto 1.84rem;
        padding:0.72rem 1.65rem 0.69rem;
    }
}
.mainContact{
        background: rgba(255,255,255,1);
        box-shadow: 0px 0px 29px 0px rgba(34,62,114,0.29);
        border-radius: 0.3rem;
        h2{
            text-align: center;
            font-size: 0.3rem;
            color:#3B3B3C;
        }
        h2:nth-child(3){
            margin: 0.85rem 0 0.91rem;
        }
    }
</style>

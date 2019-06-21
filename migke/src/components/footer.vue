<template>
    <div class="footer">
        <div class="wrapper">
            <div class="footer_left">
                <p class="footer_left_img"><img src="../img/about_icon.png" alt="" /></p>
                <h3>北京明科普华信息技术有限公司</h3>
                <h2>帮助企业完成中国智造升级</h2>
            </div>
            <div class="footer_right">
                <h3>联系我们</h3>
                <div class="footer_right_div">
                    <h4>公司官网</h4>
                     <p class="footer_right_website">
                        <i><img src="../img/call.png" /></i>
                        <span>www.minkesoft.com</span>
                    </p>
                    <p class="footer_right_website">
                        <i><img src="../img/call.png" /></i>
                        <span>service@minkesoft.com</span>
                    </p>
                    <p class="footer_right_website">
                        <i><img src="../img/call.png" /></i>
                        <span>400-189-1819</span>
                    </p>
                </div>
               
            </div>

        </div>
        <div class="footer_bottom">
            <div class="footer_bottom_icon">
                <span></span>
                <span></span>
            </div>
            <p>北京市朝阳区建国路88号SOHO现代城2号楼29层</p>
            <p>北京市通州区新华北街156号保利大都汇6-808</p>
            <p>京ICP备12007830号</p>
        </div>
    </div>
</template>
<<script>
export default {
    name:'Footer'
}
</script>
<style lang="less" scoped>
.footer{
    background: #171717;
    display: flex;
}
.footer_left{
    .footer_left_img{
        width: 1.32rem;
        height: 0.45rem;
        margin: 0.59rem auto 0;
        img{
            width: 100%;
            height: 100%;
        }
    }
    h3{
        font-family:"PingFang-SC-Medium";
        font-weight:500;
        color:rgba(255,255,255,1);
        margin-top: 0.39rem;
        font-size:0.34rem;
    }
    h2{
        font-size:0.34rem;
        font-family:"PingFang-SC-Medium";
        font-weight:500;
        color:rgba(153,153,153,1);
        opacity:0.83;
        margin-top: 0.8rem;
    }
}
.footer_right{
    h3{
        font-size:0.34rem;
        font-family:"PingFang-SC-Medium";
        font-weight:500;
        color:rgba(255,255,255,1);
        margin-top: 0.68rem;
    }
    .footer_right_div{
        margin: 0.58rem 0 0 1.18rem;
        color: #fff;
        font-size: 0.28rem;
        h4{
            margin-bottom: 0.32rem;
        }
        .footer_right_website{
            margin-top: 0.2rem;
            font-size: 0.14rem;
        i{
            display: inline-block;
            width: 0.27rem;
            height: 0.27rem;
            border-radius: 50%;
            color: #fff;
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        span{
            font-size:0.3rem;
            font-family:"SimSun";
            font-weight:400;
        }
    }
    }
    
}
.footer_bottom{
    display: none;
}

@media (max-width: 750px) and (min-width: 0){
    .footer_left,.footer_right{
        float: none;
    }
    .footer_left{
        text-align: center;
        h3,h2{
            font-size: 0.34rem;
        }
        .footer_left_address{
            display: none;
        }
    }
    .footer_right{
        h3{
            font-size: 0.34rem;
            text-align: center;
        }
        .footer_right_website span:first-child{
            display: none;
        }
    }
    .footer{
        display: block;
    }
    .footer_bottom{
        display: block;
        background: #252525;
        margin-top: 1.25rem;
        .footer_bottom_icon{
            padding: 0.35rem 0;
            text-align: center;
            border-bottom: 1px solid rgba(169,207,226,0.17);
            margin-bottom: 0.24rem;
            span:first-child{
                margin-right: 0.41rem;
            }
            span{
                display: inline-block;
                width: 0.47rem;
                height: 0.47rem;
                border:1px solid #fff;
            }
        }
        p{
            text-align: center;
            font-size: 0.24rem;
            line-height: 0.32rem;
            color: #fff;
        }
        p:last-child{
            margin-top: 0.32rem;
            padding-bottom: 1.07rem;
        }
    }
}
</style>

<template>
    <div class="footer">
        <div class="wrapper">
            <div class="footer_left">
                <h3>北京明科普华信息技术有限公司</h3>
                <h2>帮助企业完成中国智造升级</h2>
                <div class="footer_left_icon">
                </div>
                <p class="footer_left_address">北京市朝阳区建国路88号SOHO现代城2号楼29层</p>
                <p class="footer_left_address">北京市通州区新华北街156号保利大都汇6-808</p>
                <p class="footer_left_address">京ICP备12007830号</p>
            </div>
            <div class="footer_right">
                <h3>联系我们</h3>
                <p class="footer_right_website">
                    <span>公司官网：</span>
                    <i></i>
                    <span>www.minkesoft.com</span>
                </p>
                <p class="footer_right_website">
                    <span>商务合作：</span>
                    <i></i>
                    <span>service@minkesoft.com</span>
                </p>
                <p class="footer_right_website">
                    <i></i>
                    <span>400-189-1819</span>
                </p>
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
    float: left;
    h3{
        margin: 0.23rem 0 0.53rem;
        font-size: 0.24rem;
        color: #FFFFFF;
    }
    h2{
        font-size: 0.3rem;
        color:#999999;
    }
    .footer_left_icon{
        margin: 0.62rem 0 0.47rem 0;
    }
    .footer_left_address{
        color:#999999;
        font-size: 0.14rem;
        line-height: 0.3rem;
    }
 

}
.footer_right{
    float: right;
    h3{
        font-size: 0.24rem;
        color: #fff;
        margin: 0.16rem 0 0.13rem 0 ;
    }
    .footer_right_website{
        color: #fff;
        margin-top: 0.2rem;
        font-size: 0.14rem;
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
            margin-top: 0;
        }
        .footer_right_website span:first-child{
            display: none;
        }
        .footer_right_website:nth-child(2){
            span:first-child{
                display: block;
                font-size: 0.28rem;
                margin: 0.58rem 0 0.38rem;
            }
        }
        .footer_right_website{
            padding-left: 1.08rem;
            span:last-child{
                font-size: 0.3rem;
            }
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

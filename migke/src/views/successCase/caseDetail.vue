<template>
    <div class="main">
        <div class="banner"><img src="../../img/successBanner.png" alt=""></div>    
        <div class="wrapper caseDetail">
            <div class="content_title"><span>智慧仓储WMS</span></div>
            <p style="margin:.4rem 0">随着人们生活水平的提高，消费者的需求从单一化、标准化逐渐向个性化、多样化转变，这对传统工业制造的生产物流组织形式带来巨大的冲击。明科积极响应“智能+”战略，通过IoT技术连接生产侧物流各环节的不同类型智能终端和执行单元，在统一的平台调度控制下，完成物理世界人、机、物、料、法、环的协同、优化与控制，从而适应大规模个性化生产模式下对物流组织模式柔性化、智能化、透明化的发展要求。

             明科围绕“降本、增效、提质、创收”的本质需求，整合认证生态链中的优秀伙伴，为工业客户提供涵盖原料收货入库、原料货到人及分拣上线、半成品暂存及转运上线、成品下线入库、成品货到人仓储管理、成品排序出库发运等全场景的智慧生产物流产品、解决方案及服务。
            </p>
            <img src="../../img/png2.png" alt="">
            <div class="project">
                <h3><span>方案特点</span></h3>
                <div class="program">
                    <dl v-for="(item,i) in 3" :key="i">
                        <dt><img src="" alt=""></dt>
                        <dd>可配置开发</dd>
                    </dl>
                </div>
            </div>
            <h3><span>应用场景</span></h3>
            <div class="scene"></div>
            <h3><span>合作伙伴</span></h3>
            <div class="partner">
                <img src="../../img/png9.png" alt="">
            </div>
            <div style="text-align: center; margin: .2rem;">
                了解更多
            </div>
        </div>    
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.caseDetail{
    margin-top: 0.91rem;
}
h3{
    font-size: 0.16rem;
    color: #3A3A3C;
    border-left: 3px solid #313131;
    padding-left: .06rem;
}
.program{
    width: 100%;
    height: auto;
    display: flex;
    margin: .2rem 0;
    dl{
        margin-right: .8rem;
        dt{
            width: .94rem;
            height: .94rem;
            border: 1px #000 dashed;
        }
    }
}
.scene{
    width: 100%;
    height: 4.82rem;
    border: 1px #000 dashed;
    margin: .2rem 0;
}
.partner{
    width: 100%;
    height: auto;
    border: 1px #000 dashed;
    box-sizing: border-box;
    margin: .2rem 0 .4rem 0;
}
</style>

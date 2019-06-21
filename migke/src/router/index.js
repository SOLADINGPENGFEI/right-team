import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = resolve => require(['@/views/home'], resolve)
    // 首页
const Index = resolve => require(['@/views/index'], resolve)
    // 产品中心
const ProductCenter = resolve => require(['@/views/productCenter'], resolve)
    // 成功案例
const SuccessCase = resolve => require(['@/views/successCase'], resolve)
    // 渠道合作
const Partner = resolve => require(['@/views/partner'], resolve)
    // 新闻资讯
const News = resolve => require(['@/views/news'], resolve)
    // 关于明科
const CompanyProfile = resolve => require(['@/views/companyProfile'], resolve)
    // 联系我们
const ContactInformation = resolve => require(['@/views/contactInformation'], resolve)
    // 案例详情
const CaseDetail = resolve => require(['@/views/successCase/caseDetail'], resolve)
    // 加入明科
const JoinMingKe = resolve => require(['@/views/companyProfile/joinMingKe'], resolve)
    // 动态详情
const DynamicDetail = resolve => require(['@/views/index/dynamicDetail'], resolve)

// 解决方案
const CaseSolution = resolve => require(['@/views/successCase/caseSolution'], resolve)

const Warehouse= resolve => require(['@/views/warehouse/index'], resolve)

const FactoryNumber = resolve => require(['@/views/factoryNumber/index'], resolve)

const constantRouterMap = [{
        path: '/',
        // name: 'Home',
        component: Home,
        children: [{
                path: '/',
                name: 'Index',
                component: Index
            },
            {
                name: 'ProductCenter',
                path: '/productCenter',//3 产品中心
                component: ProductCenter
            },
            {
                name: 'SuccessCase',
                path: '/successCase',//成功案例 中国石油小图
                component: SuccessCase,

            },
            {
                name: 'CaseDetail',
                path: '/caseDetail',//6 成功案例  详情 版本1 
                component: CaseDetail
            },
            {
                name: 'Partner',
                path: '/partner',//8 合作伙伴
                component: Partner
            },
            {
                name: 'News',
                path: '/news',//7 明科动态
                component: News
            },
            {
                name: 'CompanyProfile',
                path: '/companyProfile',//11 企业文化
                component: CompanyProfile
            },
            {
                name: 'JoinMingKe',
                path: '/joinMingKe',//12 关于明科
                component: JoinMingKe
            },
            {
                name: 'ContactInformation',
                path: '/contactInformation',//13 申请加入
                component: ContactInformation
            },
            {
                name: 'DynamicDetail',
                path: '/dynamicDetail',//7 明科动态 详情
                component: DynamicDetail
            },
            {
                name: 'CaseSolution',
                path: '/caseSolution',//成功案例
                component: CaseSolution
            },
            {
                name: 'Warehouse',
                path: '/warehouse', //6.仓库物流
                component: Warehouse
            },
            {
                name: 'FactoryNumber',
                path: '/factoryNumber',//5 工厂制造数字化  版本1 
                component: FactoryNumber
            }
        ]
    },

]

export default new Router({
    routes: constantRouterMap,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
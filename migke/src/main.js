// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from './config/axios_init'
import VueAxios from 'vue-axios'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import '@/css/reset.css'
import '@/css/index.css'
import '@/css/animate.css'
import '@/css/el_reset.css'
import '@/js/main.js'

import Header from "@/components/header.vue";
Vue.component(Header.name, Header); // 头部组件

import Footer from "@/components/footer.vue";
Vue.component(Footer.name, Footer); // 底部组件

// import '!style-loader!css-loader!less-loader!./less/base.less'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(VueAxios, axios);
Vue.use(ElementUi);
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const state = { //全局状态值
    loginType: false,
    userId:'',
}

const mutations = {
    loginType: (state, val) => {
        state.loginType = val;
    },
    userId:(state, val) => {
        state.userId = val;
    },
}

const getters = {
    getLoginType: (state) => {
        return state.loginType;
    },
    getUserId:(state) => {
        return state.userId;
    },
}

const actions = {

}

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
})

export default store;
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import { reqbannerList } from '../../util/request'
const state = {
    list: [], //请求回来的数据

}
const mutations = {
    changeList(state, arr) {
        state.list = arr
    },

}
const actions = {
    requestbannerList(context) {
        reqbannerList({
            istree: true
        }).then(res => {
            context.commit('changeList', res.data.list)
        })
    },

}
const getters = {
    list(state) {
        return state.list
    },

}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}
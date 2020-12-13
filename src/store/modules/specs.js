import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import { reqspecsList } from '../../util/request'
const state = {
    list: [], //请求回来的数据

}
const mutations = {
    changeList(state, arr) {
        state.list = arr
    },

}
const actions = {
    requestspecsList(context) {
        reqspecsList({
            size: 10,
            page: 1
        }).then(res => {
            var arr = res.data.list;
            // attrs:'['27','28]'
            // console.log(arr)  ->包含所有属性
            arr.forEach(item => {
                item.attrs = JSON.parse(item.attrs)
                console.log(item.attrs) //=>['27,28,29']
            })

            context.commit('changeList', arr)
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
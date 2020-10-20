import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//声明仓库实例对象
const store =  new Vuex.Store({
    //初始状态存放
    state: {
        count: '初始状态',
        num: 1
    },
    getters: {
        doneTodos: state => {
            return state.num + 1000;
        }
    },
    //更新初始状态
    mutations: {
        increment (state,status){
            state.count = status
        }
    },

    actions: {
        increment (context) {
            context.commit('increment')
        }
    }
})

//抛出仓库实例
export default store
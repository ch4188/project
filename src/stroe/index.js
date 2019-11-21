import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

console.log(Vuex)
export default new Vuex.Store({
    state:{
        id:''
    },
    mutations:{
        chid(state,lazyload){
            state.id=lazyload
        }
    }
})
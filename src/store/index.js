import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 1,
  },
  mutations: {
    increament(state) {
      state.counter++
    },
    decrease(state) {
      state.counter--
    }
  },
  actions: {
    
  },
  modules: {},
});

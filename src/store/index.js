import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 1,
    products:[],
  },
  getters: {
    products: state => {
      return state.products;
    }
  },
  mutations: {
    SET_Item(state, products) {
      state.products = products
    },

    increament(state) {
      state.counter++
    },
    decrease(state) {
      state.counter--
    }
  },
  actions: {
    async loadProducts({ commit }) {
      try {
        const response = await this.$http.get("/api/products");
        this.products = response.data
        commit('SET_Items', 'products')
      }
      catch (error) {
        console.log(error);
      }
    }
  },
  modules: {},
});

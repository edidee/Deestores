import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 1,
    products: [],
  },
  getters: {
    products: state => {
      return state.products;
    }
  },
  mutations: {
    SET_ITEMS(state, products) {
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
        const response = await axios.get("api/products");
        commit("SET_ITEMS", response.data.products);
      }
      catch (error) {
        console.log(error);
      }
    }
  },
  modules: {},
});

import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 1,
    products: [],
    cart: [],
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
    },
    ADD_TO_CART(state, { product, quantity }) {
      state.cart.push({
        product,
        quantity
      })
    }
  },
  actions: {
    async loadProducts({ commit }) {
      try {
        const response = await axios.get("http://localhost:3000/products");
        commit("SET_ITEMS", response.data);
      }
      catch (error) {
        console.log(error); //you can handle error properly here instead of logging the error 
      }
    },
    addProductToCart({ commit }, { product, quantity }) {
      commit("ADD_TO_CART", { product, quantity });
    }
  },
  modules: {},
});

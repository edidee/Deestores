import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 1,
    products: [],
    cart: [],
    searchQuery: ''
  },
  getters: {
    // filter products 
    products: (state) => {
      if (state.searchQuery === '') {   
        return state.products;
      } else {
        return state.products.filter((prod) => {
          return prod.title.toLowerCase().includes(state.searchQuery.toLowerCase())
        });
      }
    },
    cartProducts(state) {
      return state.cart.map((cartItem) => {
        const product = state.products.find(
          (product) => product.id === cartItem.id
        );
        return {
          price: product.price,
          title: product.title,
          description: product.description,
          quantity: cartItem.quantity,
          image: product.image,
          id: product.id
        };
      });
    },
    cartTotal(state, getters) {
      return getters.cartProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
  },
  mutations: {
    SET_ITEMS(state, products) {
      state.products = products;
    },

    increament(state) {
      state.counter++;
    },
    decrease(state) {
      state.counter--;
    },

    pushProductToCart(state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1,
      });
    },

    increaseItemQuantity(state, cartItem) {
      cartItem.quantity++;
    },

    decreaseProductInventory(state, product) {
      product.inventory--;
    },   
    deleteItem(state, product) {
      state.cart = state.cart.filter(x=> x.id !== product.id)
    
    },

    // Filter product
    FILTER_PRODUCTS(state, payload) {
      state.searchQuery= payload
    }
  },

  actions: {
    async loadProducts({ commit }) {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/edidee/products-json/products"
        );
        commit("SET_ITEMS", response.data);
      } catch (error) {
        console.log(error); //you can handle error properly here instead of logging the error
      }
    },
    addProductToCart(context, product) {
      if (product.inventory > 0) {
        const cartItem = context.state.cart.find(
          (item) => item.id === product.id
        );
        if (!cartItem) {
          context.commit("pushProductToCart", product.id);
        } else {
          context.commit("increaseItemQuantity", cartItem);
        }
        context.commit("decreaseProductInventory", product);
      }
    },
    deleteItemFromCart({ commit }, product) {
      commit("deleteItem", product);
    },

    // filter products
    filteredProducts({ commit }, searchQuery) {
      commit('FILTER_PRODUCTS', searchQuery);
    }
  },
  modules: {},
});

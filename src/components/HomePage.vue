<template>
  <div class="container">
    <div></div>
    <div class="row">
      <div class="col-md-3 mt-5" v-for="product in products" :key="product.id">
        <b-card
          :title="product.title"
          :img-src="product.image"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: auto"
          class="mb-2 text-left font-size card"
        >
          <!-- <b-card-text class="text-left fs-3">
            {{ product.description}}
        </b-card-text> -->
          <b-card-text class="text-left price">
            US ${{ product.price }}
          </b-card-text>
          <button
            type="button"
            class="btn btn-success"
            @click="addToCart(product)"
          >
            Add to Cart
          </button>

          <!-- <b-card-text class="text-left">
          {{ product.category}}
        </b-card-text> -->
        </b-card>
      </div>
      <div>
    <b-button v-b-toggle.sidebar-right>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      cart:[],
      url: "http://localhost:3000/products?_limit=20",
    };
  },
  methods: {
    async fetchAPIData() {
      try {
        const response = await this.$http.get(this.url);
        this.products = response.data;
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },

    // addToCart(product) {
    //   //push prudt to cart
    //   let isTrue = this.cart.some(el=> el === 'product')
    //   if (isTrue) {
    //     product++
    //   }
    //     this.cart.push(product);
    //   // console.log(product);
    // },
  },
  mounted() {
    this.fetchAPIData();
  },
};
</script>
<style scoped>
.card:hover {
  margin-top: 2rem;
}

b-card-text {
  font-size: 0.8rem;
}

h4 {
  font-size: 0.9rem;
  font-weight: 500;
}

.card-title {
  margin-bottom: 0.3rem;
}

.price {
  font-weight: 600;
}

.btn-success {
  background-color: #fb9811;
  border: 1px solid #fb9811;
}
</style>
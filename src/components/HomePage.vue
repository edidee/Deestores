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
          @click="showDetails(product)"
          v-b-toggle.sidebar-right
        >
          <b-card-text class="text-left price">
            US ${{ product.price }}
          </b-card-text>
          <button type="button" class="btn" @click="addToCart(product)">
            Add to Cart
          </button>
        </b-card>
      </div>

      <div class="text-left" v-if="product">
        <!-- <b-button >Toggle Sidebar</b-button> -->
        <b-sidebar id="sidebar-right" :title="product.title" right shadow v-model="visible">
          <div class="px-3 py-2">
            <b-img :src="product.image" fluid thumbnail></b-img>
            <p>
              {{ product.description }}
            </p>
            <p class="price">US ${{ product.price }}</p>
            <div class="d-flex justify-content-between">
              <div style="width: auto; margin-right: 6%" class="mb-3 mt-2">
                <button
                  @click="increase"
                  style="
                    border-radius: 50%;
                    border: 0;
                    width: 20px;
                    height: 25px;
                  "
                >
                  +
                </button>
                &nbsp;&nbsp; <span :disabled="disablebtn">1</span>&nbsp;&nbsp;
                <button
                  @click="decrease"
                  style="
                    border-radius: 50%;
                    border: 0;
                    width: 20px;
                    height: 25px;
                  "
                >
                  -
                </button>
              </div>
              <b-form inline class="mb-3">
                <label class="mr-sm-2" for="inline-form-custom-select-pref"
                  >Color</label
                >
                <b-form-select
                  id="inline-form-custom-select-pref"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  :options="[
                    { text: 'Choose...', value: null },
                    'Blue',
                    'Pink',
                    'Black',
                  ]"
                  :value="null"
                >
                </b-form-select>
              </b-form>
            </div>
            <button type="button" class="btn">Add to Cart</button>
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
      product: null,
      visible:true,
      cart: [],
      url: "http://localhost:3000/products?_limit=20",
    };
  },
  methods: {
    showDetails(product) {
      this.product = product;
      console.log(this.product);
    },
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

.btn {
  background-color: #fb9811;
  border: 1px solid #fb9811;
  color: #ffff;
}
</style>
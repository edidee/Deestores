<template>
  <div>
    <Header />
    <b-container class="mt-5">
      <div class="row">
        <div
          
          v-for="product in products"
          :key="product.id"
          class="col-lg-8 col-sm-12 products"
        >
          <b-card
            :img-src="product.image"
            img-alt="product image"
            img-top
            tag="article"
            style="max-width: auto"
            class="mb-3 cart-card"
          >
            <b-card-text class="text-left">
              <div class="card-head">
                <h5>{{ product.title }}</h5>
                <ion-icon
                  name="trash-outline"
                  @click="deleteItem(product)"
                ></ion-icon>
              </div>
              <hr />
              <p>{{ product.description }}</p>
              <p>
                <b>Price: $ {{ product.price }}</b>
              </p>
              <p>Quantity: {{ product.quantity }}</p>
            </b-card-text>
          </b-card>
        </div>


        
        <b-col col lg="4" class="summary" v-if="products.length">
          <b-card>
            <h3>Order Total</h3>
            <b-card-text> ${{ total }} </b-card-text>

            <b-button href="#" class="btn">BUY</b-button>
          </b-card>
        </b-col>
        <b-col v-else>
          <h3>Your Cart is empty</h3>
          <b-img
            src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif"
            alt="Empty cart"
            fluid
            class="empty-cart-img"
          ></b-img>
          <router-link to="/">
            <b-button class="btn">Start shopping</b-button>
          </router-link>
        </b-col>
      </div>
    </b-container>
  </div>
</template>

<script>
import Header from "../components/Navigation/Header";
export default {
  components: {
    Header,
  },
  computed: {
    products() {
      return this.$store.getters.cartProducts;
    },
    total() {
      return this.$store.getters.cartTotal;
    },

    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    deleteItem(product) {

      this.$store.dispatch("deleteItemFromCart", product);
    },
  },
};
</script>

<style scoped>
/*.products {
   position: relative; 
   } */
@media only screen and (min-width: 992px) {
  .summary {
    position: fixed !important;
    top: 106px;
    right: 0;
    z-index: 1;
  }
}
.card-head {
  display: flex;
  justify-content: space-between;
}
.btn {
  background-color: #fb9811;
  border: 1px solid #fb9811;
  color: #ffff;
}
/* .empty-cart-img{
  width: 100%;
} */

.cart-card {
  flex-shrink: 0;
}
</style>

<template>
  <div class="cart">
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
            img-left
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


        
        <div  class="col-lg-4 summary" v-if="products.length">
          <b-card>
            <h3>Order Total</h3>
            <b-card-text> ${{ total }} </b-card-text>
            

            <b-button class="btn">BUY</b-button>
            
          </b-card>
        </div>
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
export default {
  components: {
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
.cart {
  height: auto;
}
@media only screen and (min-width: 992px) {
  .products {
     position: relative; 
     }
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

.cart-card {
  flex-shrink: 0;
}
</style>

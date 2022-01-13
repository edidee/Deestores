<template>
  <div>
    <Header />
    <b-container class="mt-5">
      <b-row>
        <b-col cols="8" v-for="product in products" :key="product.id" class="products">
          <b-card
            :img-src="product.image"
            img-alt="image"
            img-left
            fluid
            class="mb-3"
          >
            <b-card-text>
              <h5>{{ product.title }}</h5>
              <hr />
              <p>{{ product.description }}</p>
              <p>
                <b>$ {{ product.price }}</b>
              </p>
              <p>Quantity: {{ product.quantity }}</p>
              <b-button href="#" variant="primary">Buy case</b-button>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="4" class="summary">
          <b-card>
            <h3>Order Total</h3>
            <b-card-text>
             ${{ total }}
            </b-card-text>

            <b-button href="#" variant="primary">BUY</b-button>
          </b-card>
        </b-col>
      </b-row>
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
  },
};
</script>

<style scoped>
.products {
  position: relative;
}
.summary {
    position: fixed!important;
    top: 106px;
    right: 0;
    z-index: 1
}


</style>

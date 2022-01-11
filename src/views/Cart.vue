<template>
  <div>
    <Header />
    <b-container class="mt-5">
      <b-row>
        <b-col cols="8" v-for="product in products" :key="product.id">
          <b-card
            
            :img-src="product.image"
            img-alt="image"
            img-left
            class="mb-3"
          >
            <b-card-text>
                <h5>{{ product.title}}</h5>
                <hr>
              <p>{{ product.description}}</p>
              <p><b>$ {{ product.price}}</b></p>
              <p>Quantity: {{product.quantity}}</p>
              <b-button href="#" variant="primary">Buy case</b-button>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
            <b-card>
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
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
      products () {
          return this.$store.getters.cartProducts
      }
  }
};
</script>

<style scoped>

</style>

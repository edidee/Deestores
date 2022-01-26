<template>
<header>
  <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
   <router-link to="/" class="navbar-brand">DeeStores</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent ">
    
    <form class="form-inline my-2 my-lg-0 ml-auto" v-on:keyup="filteredProducts()">
      <input class="form-control mr-sm-2" type="search" placeholder="I'm shopping for..." aria-label="Search" v-model="searchQuery">
      <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
    </form>
    <ul class="navbar-nav mt-2">
      <li class="nav-item active">
          <router-link to="/login" class="nav-link ml-2" >
          Login
          </router-link>
      </li>
      <li class="nav-item">
          <router-link to="/signup" class="nav-link">
            Sign Up
          </router-link>
      </li>
      <li class="nav-item" >
          <router-link to="/cart" class="nav-link">
           <ion-icon name="cart-outline" class="cart-icon"></ion-icon>
          </router-link>
      </li>
    </ul>
  </div>
</nav>
  </div>
</header>
</template>

<script>
// import { mapGetters } from "vuex"

export default {
  data () {
    return {
      searchQuery: ''
    }
  },
  methods: {
    filteredProducts() {
      this.$store.dispatch('filteredProducts', this.searchQuery)
    }
  },
  // computed: {
  //   ...mapGetters(["products"]),
  //   filteredData() {
  //     return this.products.filter(prod => prod.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
  //   }
  // },
}
</script>


<style scoped>
.nav-bar{
    background-color: #ffff;
}

.navbar-dark .navbar-brand,
.navbar-dark .navbar-nav .nav-link {
    color: #1a1b1b;
}

.btn-secondary {
    background-color: #FF4500;
    color: #ffff;
}

.navbar-brand {
  font-weight: 600;
  font-size: 2.5rem;
  color: #FB9811;
}

.cart-icon {
  font-size: 1.9rem;
  color: #FB9811 !important;
}

.btn-outline-success{
  color: #FB9811;
  border: 1px solid #FB9811;
}

.btn-outline-success:hover {
  background-color:#FB9811; 
  color: #fff;
}

.nav-link {
  font-weight: 600;
  /* font-size: 0.9rem; */
}
</style>
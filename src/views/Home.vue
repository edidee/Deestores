<template>
  <div class="home">
    
    <HomePage />
    <AppFooter />
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src

import HomePage from "../components/HomePage";
import AppFooter from "../components/Navigation/AppFooter.vue";


export default {
  name: "Home",
  components: {
    
    HomePage,
    AppFooter
    
  },
};
</script>

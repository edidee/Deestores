<template>
  <div class="home">
    <Header />
    <HomePage />
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Navigation/Header";
import HomePage from "../components/HomePage";


export default {
  name: "Home",
  components: {
    Header,
    HomePage,
    
  },
};
</script>

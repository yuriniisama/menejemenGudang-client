<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>
<script>
import navbar from "./components/Navbar";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  components: {
    navbar
  },
  methods: {
    show() {}
  }
};
</script>


<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>

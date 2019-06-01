<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="info">
      <b-navbar-brand href="#">Gudang</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{name:'Stock'}">stock</b-nav-item>
          <b-nav-item right>pengiriman</b-nav-item>
          <!-- <b-nav-item  disabled>Disabled</b-nav-item> -->
        </b-navbar-nav>
        <!-- <router-link :to="{name:about}">/usesdsds</router-link> -->
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item right :to="{name:'Register'}">Register</b-nav-item>
          <b-nav-item right :to="{name:'Login'}" v-if="isLogin">Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    // ...mapState(["registerType"])
  },
  data() {
    return {
      isLogin: true
    };
  },
  methods: {
    ...mapMutations(["setRegisterType", "setLoginType"])
    //   var payload = this.$route.params.type;
    // this.setRegisterType(payload);
  },
  mounted() {
    var token = localStorage.getItem("tg");
    if (token !== null) {
      this.isLogin = false;
    }
  }
};
</script>

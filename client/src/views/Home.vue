<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/img/home3.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="@/img/home2.gif" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="@/img/home1.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>
 <script>
// import navbar from "@/views/navbar.vue";

export default {
  data() {
    return {
      slides: true,
      coming: false
    };
  },

  methods: {
    hideSlide() {
      console.log("ookok");

      this.slide = false;
      this.coming = true;
    },
    getComing() {
      this.coming = false;
    },
    showSlide() {
      console.log("reload");
      this.coming = false;
      this.slide = true;
    }
  },
  mounted() {
    console.log("balik");
    this.slide = true;

    // this.showSlide();
    // this.$store.state.allUserData = true;
    // this.$store.dispatch("getData");
  }
};
</script>

<style scope>
#carouselExampleIndicators {
  /* z-index: 1; */
}
img {
  /* padding-top: 1%; */
  width: 100%;
  height: 90vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
  /* opacity: 0.5; */
}
</style>




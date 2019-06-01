<template>
  <div class="form">
    <b-form @submit.prevent="onSubmit" @reset="onReset">
      <b-form-group
        label="Email address:"
        description="We'll never share your email with anyone else."
      >
        <b-form-input v-model="form.email" type="email" required placeholder="Enter Email"></b-form-input>
      </b-form-group>

      <b-form-group label="Your Password:">
        <b-form-input v-model="form.password" type="password" required placeholder="Enter Password"></b-form-input>
      </b-form-group>
      <b-form-group label="Role Code :">
        <b-form-input v-model="form.roleCode" required placeholder="Enter Role Code"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
// const axios = require("axios");

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        roleCode: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      console.log(process.env.VUE_APP_BASE_URL);
      this.$api
        .post("http://localhost:3000" + "/user/register", this.form)
        .then(({ data }) => {
          this.$swal({
            title: `Success!`,
            text: ` you telah register `,
            type: "success",
            showConfirmButton: false,
            timer: 1500
          });
          this.$router.push("/");
          this.onReset();
        })
        .catch(({ response }) => {
          // console.log(response.data);
          this.$swal({
            title: `Opps!`,
            text: `${response.data.message}`,
            type: "error",
            timer: 2500
          });
        });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.roleCode = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },
  mounted() {
    console.log(process.env.NODE_ENV, "<<<<<<<<<<<<");
    console.log(process.env.VUE_APP_BASE_URL, ">>>>>>>>");
  }
};
</script>
<style scoped>
.form {
  margin: 50px;
}
</style>

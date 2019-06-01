<template>
  <div>
    <div class="feedback">
      <center>
        <h2>Please Submit Your Opinion for this App</h2>
      </center>
    </div>
    <div class="form">
      <b-form-group label="User Friendly">
        <b-form-input v-model="userFriendly" type="range" min="0" max="5"></b-form-input>
        <div>Value: {{ userFriendly +" from 5"}}</div>
      </b-form-group>
      <b-form-group label="User Feature">
        <b-form-input v-model="feature" type="range" min="0" max="5"></b-form-input>
        <div>Value: {{ feature +" from 5"}}</div>
      </b-form-group>
      <b-form-group label="Commentary">
        <b-form-textarea
          v-model="commentar"
          id="textarea-rows"
          placeholder="Fill your Commentary please "
          rows="8"
        ></b-form-textarea>
      </b-form-group>
      <b-button variant="success">Button</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userFriendly: "2",
      feature: "2",
      commentar: ""
    };
  }
};
</script>
<style scoped>
.form {
  margin: 50px;
}
.feedback {
  margin-top: 20px;
}
</style>


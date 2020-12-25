<template>
  <b-container fluid="sm">
    <b-row>
      <b-col></b-col>
      <b-col>
        <b-form @submit="onLogin">
          <b-form-group
            id="username-group"
            label="Username:"
            label-for="username"
          >
            <b-form-input
              id="username"
              v-model="user.username"
              type="text"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="password-group"
            label="Password:"
            label-for="password"
          >
            <b-form-input
              id="password"
              v-model="user.password"
              type="text"
              required
            ></b-form-input>
          </b-form-group>

          <b-button-group>
            <b-button type="submit" variant="primary">Login</b-button>
          </b-button-group>
        </b-form>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>
<script>
import UserDataService from "../../services/user/UserDataService";

export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    onLogin(evt) {
      evt.preventDefault();
      UserDataService.login(this.user)
        .then((response) => {
          let user = response.data;
          if (user) {
            user.authdata = window.btoa(
              this.user.username + ":" + this.user.password
            );
            localStorage.setItem("user", JSON.stringify(user));
            this.$router.push(this.$route.query.returnUrl || 'tasks');
            this.$emit('logged-in', true)
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
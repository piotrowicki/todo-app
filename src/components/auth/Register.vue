<template>
  <b-container fluid="sm">
    <b-row>
      <b-col></b-col>
      <b-col>
        <b-form @submit="onRegister">
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
            id="first-name-group"
            label="First Name:"
            label-for="first-name"
          >
            <b-form-input
              id="first-name"
              v-model="user.firstName"
              type="text"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="last-name-group"
            label="Last Name:"
            label-for="last-name"
          >
            <b-form-input
              id="last-name"
              v-model="user.lastName"
              type="text"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="email-group" label="Email:" label-for="email">
            <b-form-input
              id="email"
              v-model="user.email"
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

          <b-form-group id="role-group" label="Role:" label-for="role">
            <b-form-input
              id="role"
              v-model="user.role"
              type="text"
              required
            ></b-form-input>
          </b-form-group>

          <b-button-group>
            <b-button type="submit" variant="primary">Register</b-button>
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
    onRegister(evt) {
      evt.preventDefault();
      console.log(this.user);
      UserDataService.save(this.user)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
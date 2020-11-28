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
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    onLogin() {},
  },
};
</script>
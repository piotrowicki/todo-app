<template>
  <div id="app">
    <alert :alertMessage="msg" />
    <b-nav>
      <b-nav-item active>
        <router-link to="/tasks">Tasks</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/tasks/new">New</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/register">Register</router-link>
      </b-nav-item>
      <b-nav-item v-if="!logged">
        <router-link to="/login">Login</router-link>
      </b-nav-item>
      <b-nav-item v-if="logged">
        <b-link @click="logout()">Logout</b-link>
      </b-nav-item>
    </b-nav>
    <router-view @logged-in="setLogged"></router-view>
  </div>
</template>

<script>
import alert from "./components/err/Alert";

export default {
  name: "app",
  components: {
    alert,
  },
  data() {
    return {
      msg: "",
      logged: true,
    };
  },
  methods: {
    setLogged(value) {
      this.logged = value;
    },
    logout() {
      let user = localStorage.getItem("user");
      if (user) {
        this.logged = false;
        localStorage.removeItem("user");
        this.$router.push("login");
      }
    },
  },
};
</script>

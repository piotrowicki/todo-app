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
      <b-nav-item>
        <router-link to="/login">Login</router-link>
      </b-nav-item>
       <b-nav-item>
        <router-link to="/event">Event</router-link>
      </b-nav-item>
    </b-nav>
    <router-view @listener-msg="listenerAlertMsg"></router-view>
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
    };
  },
  methods: {
    listenerAlertMsg(msg) {
      this.msg = msg;
    },
  },
};
</script>

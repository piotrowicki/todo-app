<template>
  <div id="app">
    <b-nav>
      <b-nav-item active>
        <router-link to="/tasks">Tasks</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/tasks/new">New</router-link>
      </b-nav-item><b-nav-item>
        <router-link to="/register">Register</router-link>
      </b-nav-item>
    </b-nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

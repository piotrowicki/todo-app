<template>
  <div id="app">
    <b-nav>
      <b-nav-item active>
        <router-link to="/tasks">tasks</router-link>
      </b-nav-item>
    </b-nav>

    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

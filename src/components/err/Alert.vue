<template>
  <b-alert v-if="alertMessage" :show="5" dismissible fade variant="danger">
    {{ alertMessage }}
  </b-alert>
</template>
<script>
export default {
  props: {
    alertMessage: String,
  },
};
</script>


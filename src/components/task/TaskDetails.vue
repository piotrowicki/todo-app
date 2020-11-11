<template>
  <b-container fluid="sm" v-if="task">
    <b-row>
      <b-col><h4>Title:</h4></b-col>
      <b-col cols="10">{{ task.title }}</b-col>
    </b-row>
    <b-row>
      <b-col><h4>Description:</h4></b-col>
      <b-col cols="10">{{ task.description }}</b-col>
    </b-row>
    <b-button-group>
      <b-button type="reset" to="/tasks">Back</b-button>
      <b-button type="submit" :to="`${task.id}/edit`" variant="primary">Edit</b-button>
      <b-button type="submit" variant="danger">Delete</b-button>
    </b-button-group>
  </b-container>
</template>
<script>
import TaskDataService from "../../services/task/TaskDataService";

export default {
  data() {
    return {
      task: null,
    };
  },
  methods: {
    loadTask() {
      TaskDataService.getById(this.$route.params.id)
        .then((response) => {
          this.task = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.loadTask();
  }
};
</script>
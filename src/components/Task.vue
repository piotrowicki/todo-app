<template>
  <b-container fluid="sm" v-if="task">
    <b-form @submit="onSubmit">
      <b-form-group
        id="title-group"
        label="Title:"
        label-for="title"
        description="The title of your task."
      >
        <b-form-input
          id="title"
          v-model="task.title"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="description-group"
        label="Description:"
        label-for="description"
      >
        <b-form-textarea
          id="description"
          v-model="task.description"
          required
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" to="/tasks" variant="danger">Back</b-button>
    </b-form>
  </b-container>
</template>

<script>
import TaskDataService from "../services/TaskDataService";

export default {
  data() {
    return {
      task: null,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.task));
    },
    loadTask() {
      TaskDataService.getById(this.$route.params.id)
        .then((response) => {
          this.task = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.loadTask();
  },
};
</script>
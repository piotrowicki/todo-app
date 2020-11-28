<template>
  <b-container fluid="sm">
    <b-form @submit="onSave">
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
      <b-button-group>
        <b-button type="submit" variant="primary">Save</b-button>
        <b-button type="reset" to="/tasks" variant="danger">Back</b-button>
      </b-button-group>
    </b-form>
     <b-alert variant="success" show v-if="msg">{{ msg }}</b-alert>
  </b-container>
</template>

<script>
import TaskDataService from "../../services/task/TaskDataService";

export default {
  data() {
    return {
      task: {},
      msg: ''
    };
  },
  methods: {
    onSave(evt) {
      evt.preventDefault();
      TaskDataService.save(this.task)
        .then((response) => {
          console.log(response);
          this.msg = "Task added successfully."
        })
        .catch((e) => {
          console.log(e);
        });
    },
  }
};
</script>

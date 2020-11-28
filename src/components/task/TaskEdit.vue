<template>
  <b-container fluid="sm">
    <b-form @submit="onUpdate" v-if="task">
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
      </b-button-group>
    </b-form>
  </b-container>
</template>

<script>
import TaskDataService from "../../services/task/TaskDataService";

export default {
  data() {
    return {
      task: null
    };
  },
  methods: {
    onUpdate(evt) {
      evt.preventDefault();
      var data = {
        id: this.task.id,
        title: this.task.title,
        description: this.task.description,
      };

      TaskDataService.update(this.task.id, data)
        .then((response) => {
          this.task = response.data;
          this.$router.push({ path: "/" });
        })
        .catch((e) => {
          console.log(e);
        });
      // alert(JSON.stringify(this.task));
    },
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

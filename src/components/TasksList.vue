<template>
  <div>
    <b-table striped :items="tasks" :fields="fields">
      <template #cell(action)="data">
        <b-button pill size="sm" variant="info" :to="`tasks/${data.item.id}`"> Details </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import TaskDataService from "../services/TaskDataService";

export default {
  data() {
    return {
      fields: [
        {
          key: "title",
          sortable: true,
        },
        {
          key: "description",
          sortable: true,
        },
        {
          key: "createDate",
          sortable: false,
        },
        {
          key: "action",
        },
      ],
      tasks: [],
    };
  },
  methods: {
    getAll() {
      TaskDataService.getAll()
        .then((response) => {
          this.tasks = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getAll();
  },
};
</script>
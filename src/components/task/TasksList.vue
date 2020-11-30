<template>
  <div>
    <b-table
      striped
      :items="tasks"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
    >
      <template #cell(action)="data">
        <b-button pill size="sm" variant="info" :to="`tasks/${data.item.id}`">
          Details
        </b-button>
      </template>
    </b-table>
    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage">
    </b-pagination>
  </div>
</template>

<script>
import TaskDataService from "../../services/task/TaskDataService";

export default {
  data() {
    return {
      perPage: 10,
      currentPage: 1,
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
  computed: {
    rows() {
      return this.tasks.length;
    },
  },
};
</script>
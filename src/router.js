import Vue from "vue";
import Router from "vue-router";

import TasksList from './components/task/TasksList'
import TaskDetails from './components/task/TaskDetails'
import TaskEdit from './components/task/TaskEdit'
import TasksNew from './components/task/TaskNew'

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            alias: "/tasks",
            name: "tasks",
            component: TasksList
        },
        {
            path: "/tasks/:id",
            name: "task-details",
            component: TaskDetails
        },
        {
            path: "/tasks/:id/edit",
            name: "task-edit",
            component: TaskEdit
        },
        {
            path: "/tasks/new",
            name: "task-new",
            component: TasksNew
        }
    ]
});

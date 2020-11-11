import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            alias: "/tasks",
            name: "tasks",
            component: () => import("./components/task/TasksList")

        },
        {
            path: "/tasks/:id",
            name: "task-details",
            component: () => import("./components/task/TaskDetails")
        },
        {
            path: "/tasks/:id/edit",
            name: "task-edit",
            component: () => import("./components/task/TaskEdit")
        },
        {
            path: "/new",
            name: "task-new",
            component: () => import("./components/task/TaskNew")
        }
    ]
});

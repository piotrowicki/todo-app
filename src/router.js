import Vue from "vue";
import Router from "vue-router";

import List from './components/task/TasksList'
import Details from './components/task/TaskDetails'
import Edit from './components/task/TaskEdit'
import New from './components/task/TaskNew'
import Register from './components/user/Register'
import Login from './components/user/Login'

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        { path: '/', redirect: '/tasks' },
        { path: '/tasks', component: List },
        { path: '/tasks/new', component: New },
        {
            path: '/tasks/:id', component: Details,
            children: [
                { path: '/tasks/:id/edit', component: Edit }
            ]
        },
        { path: '/register', component: Register },
        { path: '/login', component: Login }
    ]
});
import Vue from "vue";
import Router from "vue-router";

import List from './components/task/TasksList'
import Details from './components/task/TaskDetails'
import Edit from './components/task/TaskEdit'
import New from './components/task/TaskNew'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Event from './components/EventTrigger'

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
        { path: '/login', component: Login },
        { path: '/event', component: Event }
    ]
});
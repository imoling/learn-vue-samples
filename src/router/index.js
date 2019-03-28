import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Main from '../pages/Main.vue'
import Dashboard from '../pages/Dashboard.vue'

let routes = [{
    path: '/',
    component: Main,
    hidden: true,
    children: [{
        path: '/',
        component: Dashboard,
        name: 'hello dashboard!'
    }]
}]

const router = new Router({
    routes: routes
})

export default router
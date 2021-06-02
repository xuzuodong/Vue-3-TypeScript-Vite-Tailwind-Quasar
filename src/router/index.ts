import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/about',
        component: () => import('/src/views/About.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

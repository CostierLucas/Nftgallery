import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Gallery from '/src/views/Gallery.vue'
import Whatis from '/src/views/Whatis.vue'
import Calendar from '/src/views/Calendar.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Whatisnft',
        name: 'Whatisnft',
        component: Whatis,
    },
    {
        path: '/Gallery',
        name: 'Gallery',
        component: Gallery,
    },
    {
        path: '/Calendar',
        name: 'Calendar',
        component: Calendar,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
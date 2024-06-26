import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import ProfileView from "@/views/ProfileView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/profile/:username',
            name: 'profile',
            component: ProfileView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        }
    ]
})

export default router

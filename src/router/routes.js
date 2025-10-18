import Login from '@/views/auth/LoginPage.vue'
import AppDashboard from '@/views/dashboard/AppDashboard.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: AppDashboard,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
})

export default router

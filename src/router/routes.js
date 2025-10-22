import DashboardLayout from '@/layouts/DashboardLayout.vue'
import Login from '@/views/auth/LoginPage.vue'
import AppCourses from '@/views/dashboard/AppCourses.vue'
import CourseDashboard from '@/views/dashboard/CourseDashboard.vue'
// import AppDashboard from '@/views/dashboard/AppDashboard.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '',
          component: CourseDashboard,
        },
      ],
    },
    {
      path: '/courses',
      name: 'courses',
      component: AppCourses,
    },
  ],
})

export default router

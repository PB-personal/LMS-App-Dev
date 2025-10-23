import { ROUTE_NAMES } from '@/constants/routeNames'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import Login from '@/views/LoginPage.vue'
import AppCourses from '@/views/dashboard/AppCourses.vue'
import CourseDashboard from '@/views/CourseDashboard.vue'
import ProfilePage from '@/views/ProfilePage.vue'
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
      name: ROUTE_NAMES.LOGIN,
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
    {
      path: '/profile',
      name: ROUTE_NAMES.PROFILE,
      component: ProfilePage,
    },
  ],
})

export default router

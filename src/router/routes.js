import { ROUTE_NAMES } from '@/constants/routeNames'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import Login from '@/views/LoginPage.vue'
import CourseDashboard from '@/views/CourseDashboard.vue'
import QuizPage from '@/views/QuizPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import QuizListPage from '@/views/QuizListPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/login',
      name: ROUTE_NAMES.LOGIN,
      component: Login,
    },
    {
      path: '/dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: CourseDashboard,
        },
        {
          path: '/quiz',
          name: ROUTE_NAMES.QUIZZES,
          component: QuizListPage,
        },
        {
          path: '/quiz/:courseId',
          name: ROUTE_NAMES.QUIZ,
          component: QuizPage,
        },
      ],
    },
    // {
    //   path: '/courses',
    //   name: 'courses',
    //   component: AppCourses,
    // },
    // {
    //   path: '/profile',
    //   name: ROUTE_NAMES.PROFILE,
    //   component: ProfilePage,
    // },
  ],
})

export default router

import { defineStore } from 'pinia'

export const useCourseStore = defineStore('courses', {
  state: () => ({
    courses: [],
  }),
  actions: {
    async getCourses() {
      try {
        const response = await fetch('/src/assets/mock/courses.json')
        this.courses = await response.json()
      } catch (error) {
        console.error('Error loading mock data', error)
      }
    },

    enrollCourse(courseId) {
      const course = this.courses.find((c) => c.id === courseId)
      if (course) {
        course.enrolled = true
      }
    },
  },
})

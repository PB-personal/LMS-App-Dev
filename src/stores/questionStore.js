import { defineStore } from 'pinia'

export const useCourseStore = defineStore('courses', {
  state: () => ({
    courses: [],
  }),
  actions: {
    async getQuestions() {
      try {
        const response = await fetch('/src/mock/questions.json');
        console.log(response)
        this.courses = await response.json()
      } catch (error) {
        console.error('Error loading mock data', error)
      }
    }
  },
})

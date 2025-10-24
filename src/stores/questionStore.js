import { defineStore } from 'pinia'

export const useQuestionStore = defineStore('questions', {
  state: () => ({
    questions: [],
  }),
  actions: {
    async getQuestions() {
      try {
        const response = await fetch('/src/assets/mock/questions.json')
        const data = await response.json()
        this.questions = data
        console.log('Questions loaded:', this.questions)
      } catch (error) {
        console.error('Error loading mock data', error)
        this.questions = []
      }
    },
  },
})

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCourseStore = defineStore('courses', () => {
  const courseList = ref([])

  return {
    courseList,
  }
})

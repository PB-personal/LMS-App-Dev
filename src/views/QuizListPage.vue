<template>
  <div class="quiz-container p-4">
    <h2 class="mb-4">Available Quizzes</h2>

    <div v-if="isLoading" class="alert alert-info">Loading quizzes...</div>

    <div v-else-if="error" class="alert alert-danger">
      {{ error }}
    </div>

    <div v-else-if="questionStore.questions.length" class="quiz-list mb-4">
      <div
        v-for="(question, index) in questionStore.questions"
        :key="question.id"
        class="quiz-item p-3 mb-3 border rounded"
      >
        <h5>{{ index + 1 }}. {{ question.title }}</h5>
        <RouterLink :to="`quiz/${question.courseId}`" class="btn btn-primary">
          Start Quiz
        </RouterLink>
      </div>
    </div>

    <div v-else class="quiz-list">
      <div class="alert alert-info">No quizzes available yet. Check back soon!</div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useQuestionStore } from '@/stores/questionStore'

const questionStore = useQuestionStore()
const isLoading = ref(false)
const error = ref(null)

onMounted(async () => {
  try {
    isLoading.value = true
    await questionStore.getQuestions()
    error.value = null
  } catch (e) {
    error.value = 'Failed to load quizzes. Please try again later.'
    console.error('Error loading quizzes:', e)
  } finally {
    isLoading.value = false
  }
})
</script>

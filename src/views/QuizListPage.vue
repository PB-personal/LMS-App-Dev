<template>
  <div class="quiz-container p-4">
    <h2 class="mb-4">Available Quizzes</h2>

    <div v-if="quizList.length" class="quiz-list mb-4">
      <div
        v-for="(question, index) in quizList"
        :key="index"
        class="quiz-item p-3 mb-3 border rounded"
      >
        <h5>{{ index + 1 }}. {{ question.title }}</h5>
        <RouterLink :to="`/quiz/${question.courseId}`">Start Quiz</RouterLink>
      </div>
    </div>

    <div v-else class="quiz-list">
      <div class="alert alert-info">No quizzes available yet. Check back soon!</div>
    </div>
  </div>
</template>
<script setup>
import questions from '@/mock/questions.json'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const quizList = ref(questions)
</script>

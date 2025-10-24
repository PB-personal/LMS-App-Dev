<template>
  <div class="quiz-container">
    <h2 class="quiz-title">{{ quizTitle }}</h2>

    <div v-if="questions.length">
      <!-- Question Loop -->
      <div v-for="(question, index) in questions" :key="index" class="question-card">
        <h3>{{ index + 1 }}. {{ question.text }}</h3>

        <div class="options">
          <label v-for="(option, i) in question.options" :key="i" class="option-label">
            <input
              type="radio"
              :name="'question-' + index"
              :value="option"
              v-model="userAnswers[index]"
              :disabled="isSubmitted"
            />
            {{ option }}
          </label>
        </div>
      </div>

      <!-- Submit Button -->
      <button @click="submitQuiz" v-if="!isSubmitted" class="submit-btn">Submit Quiz</button>

      <!-- Results -->
      <div v-if="isSubmitted" class="result-box">
        <h3>Quiz Completed ✅</h3>
        <p>
          You scored <strong>{{ score }}</strong> out of
          <strong>{{ questions.length }}</strong>
        </p>
        <button @click="resetQuiz" class="reset-btn">Retry Quiz</button>
      </div>
    </div>

    <p v-else class="no-data">No quiz data found for this course.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import quizData from '@/mock/questions.json'

const route = useRoute()
const courseId = route.params.courseId // e.g. "vueFundamentals"

// If no courseId in route, fallback to first quiz
const quiz = courseId ? quizData.find((q) => q.courseId === courseId) : quizData[0]
console.log('quiz', quiz)
const quizTitle = quiz?.title || 'Quiz'
const questions = ref(quiz?.questions || [])

const userAnswers = ref(Array(questions.value.length).fill(null))
const score = ref(0)
const isSubmitted = ref(false)

const submitQuiz = () => {
  score.value = questions.value.reduce((total, q, i) => {
    return total + (userAnswers.value[i] === q.answer ? 1 : 0)
  }, 0)
  isSubmitted.value = true
}

const resetQuiz = () => {
  userAnswers.value = Array(questions.value.length).fill(null)
  score.value = 0
  isSubmitted.value = false
}
</script>

<style scoped>
.quiz-container {
  max-width: 700px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.quiz-title {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}
.question-card {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #fafafa;
}
.options {
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
}
.option-label {
  margin-bottom: 0.4rem;
  cursor: pointer;
}
.submit-btn,
.reset-btn {
  display: block;
  margin: 1rem auto;
  padding: 0.6rem 1.5rem;
  border: none;
  border-radius: 8px;
  background-color: #42b883;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.submit-btn:hover,
.reset-btn:hover {
  background-color: #2c9c72;
}
.result-box {
  text-align: center;
  margin-top: 1.5rem;
  background: #e6ffed;
  padding: 1rem;
  border-radius: 10px;
}
.no-data {
  text-align: center;
  color: #777;
  margin-top: 2rem;
}
</style>

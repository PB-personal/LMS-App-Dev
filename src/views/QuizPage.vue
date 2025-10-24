<template>
  <div class="quiz-page">
    <h2>{{ quiz?.title || 'Quiz Not Found' }}</h2>
    <div v-if="quiz && quiz.questions && quiz.questions.length" class="">
      <form @submit.prevent="submitQuiz">
        <div v-for="(question, qIndex) in quiz.questions" :key="`question-${qIndex}`">
          <h5>{{ qIndex + 1 }}. {{ question.text }}</h5>
          <div v-for="(option, oIndex) in question.options" :key="`option-${qIndex}-${oIndex}`">
            <label for="">
              <input
                type="radio"
                :name="'question-' + qIndex"
                :value="option"
                v-model="userAnswers[qIndex]"
              />
              {{ option }}
            </label>
          </div>
        </div>

        <button type="submit" class="btn btn-success">Submit Quiz</button>
      </form>

      <div v-if="showResult">
        <h3>Quiz Result</h3>
        <p>
          You scored <strong>{{ score }}</strong> out of
          <strong>{{ quiz.questions.length }}</strong>
        </p>
      </div>
    </div>

    <div v-else></div>
  </div>
</template>

<script setup>
import { useQuestionStore } from '@/stores/questionStore'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const quizStore = useQuestionStore()
const route = useRoute()
const userAnswers = ref([])
const score = ref(0)
const showResult = ref(false)
const quiz = ref(null)

onMounted(async () => {
  try {
    await quizStore.getQuestions()

    const quizId = route.params.courseId
    quiz.value = quizStore.questions.find((q) => q.courseId == quizId)

    if (quiz.value && quiz.value.questions) {
      // initialize answers array so v-model has reactive slots
      userAnswers.value = Array(quiz.value.questions.length).fill(null)
    } else {
      userAnswers.value = []
    }
  } catch (e) {
    console.error('Error loading quiz:', e)
  }
})

const submitQuiz = () => {
  score.value = 0
  if (!quiz.value) return

  quiz.value.questions.forEach((q, idx) => {
    if (userAnswers.value[idx] === q.answer) {
      score.value++
    }
  })

  showResult.value = true
}
</script>
<style scoped>
.quiz-page {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
}
</style>

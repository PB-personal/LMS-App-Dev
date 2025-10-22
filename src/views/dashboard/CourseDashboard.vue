<template>
  <div class="course-list">
    <h1 class="fw-bold text-white mb-4">LMS App development</h1>
    <div v-if="courseStore.courses.length">
      <div v-for="course in courseStore.courses" :key="course.id" class="course-card">
        <h5>{{ course.title }}</h5>
        <p>Category: {{ course.category }}</p>
        <p>Difficulty: {{ course.difficulty }}</p>
        <p>Rating: ⭐ {{ course.rating }}</p>
      </div>
    </div>

    <p v-else>No courses found</p>
  </div>
</template>
<script setup>
import { useCourseStore } from '@/stores/courseStore'
import { onMounted } from 'vue'
const courseStore = useCourseStore()

onMounted(() => {
  courseStore.getCourses()
})
</script>
<style scoped>
.course-list {
  padding: 1rem;
}
.course-card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 10px;
}
</style>

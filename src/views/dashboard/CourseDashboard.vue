<template>
  <div class="course-list">
    <h3>List of courses</h3>
    <div class="grid">
      <CourseCard v-for="course in courseStore.courses" :key="course.id" :course="course" />
    </div>
  </div>
</template>
<script setup>
import { useCourseStore } from '@/stores/courseStore'
import { onMounted } from 'vue'
import CourseCard from '@/components/CourseCard.vue'
const courseStore = useCourseStore()

onMounted(() => {
  courseStore.getCourses()
})
</script>
<style scoped>
.course-list {
  padding: 5rem 2rem;
}
.course-card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 10px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}
</style>

<template>
  <div class="course-card">
    <!-- <div v-if="courseStore.courses.length">
      <div v-for="course in courseStore.courses" :key="course.id" class="course-card"> -->
    <h5>{{ course.title }}</h5>
    <p>Category: {{ course.category }}</p>
    <p>Difficulty: {{ course.difficulty }}</p>
    <p>Rating: ⭐ {{ course.rating }}</p>
    <!-- </div> -->
  </div>

  <!-- <p v-else>No courses found</p> -->
  <!-- </div> -->
</template>
<script setup>
defineProps({
  course: {
    type: Object,
  },
})
</script>
<style scoped>
.course-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  background: #fff;
  transition: box-shadow 0.2s;
}
.course-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>

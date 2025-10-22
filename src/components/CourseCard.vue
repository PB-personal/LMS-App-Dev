<template>
  <div :class="['course-card', { enrolled: course.enrolled }]">
    <h5>{{ course.title }}</h5>
    <p>Category: {{ course.category }}</p>
    <p>Difficulty: {{ course.difficulty }}</p>
    <p>Rating: ⭐ {{ course.rating }}</p>
    <button :disabled="course.enrolled" class="btn btn-success" @click="$emit('enroll', course.id)">
      {{ course.enrolled ? 'Enrolled' : 'Enroll' }}
    </button>
    <div v-if="course.enrolled" class="progress-container">
      <div class="progress-bar" :style="{ width: course.progress + '%' }">
        <span>{{ course.progress }}%</span>
      </div>
    </div>
  </div>
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
.enrolled {
  border-color: green;
  background: #f0fff0;
}
.course-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.progress-container {
  position: relative;
  height: 12px;
  background: #eee;
  border-radius: 6px;
  margin-top: 0.5rem;
}
.progress-bar {
  height: 100%;
  background: #4caf50;
  border-radius: 6px;
}
.progress-container span {
  position: absolute;
  right: 0.5rem;
  top: -20px;
  font-size: 0.8rem;
}
</style>

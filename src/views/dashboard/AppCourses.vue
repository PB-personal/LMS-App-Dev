<template>courses</template>
<script setup>
import { useCourseStore } from '@/stores/courseStore'
import { onMounted } from 'vue'
const courseStore = useCourseStore()

onMounted(() => {
  courseStore.getCourses()
})
</script>

<template>
  <div class="course-list">
    <div class="py-3 d-flex">
      <input
        class="form-control py-1 px-4 w-50 me-3"
        type="text"
        placeholder="Search courses..."
        v-model="searchCourse"
      />

      <div>
        <label for=""
          >Sort By Rating:
          <select v-model="selectedSort" class="ms-2">
            <option value="">Default</option>
            <option value="high">High to Low</option>
            <option value="low">Low to High</option>
          </select>
        </label>
      </div>
    </div>
    <div class="filer-dropdown">
      <label for=""> Category: </label>
      <select v-model="selectedCategory" class="me-5 ms-2">
        <option value="">All</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
      <label for=""> Difficulty: </label>
      <select v-model="selectedDifficulty" class="me-5 ms-2">
        <option value="">All</option>
        <option v-for="difficulty in difficulties" :key="difficulty" :value="difficulty">
          {{ difficulty }}
        </option>
      </select>
    </div>
    <h3>List of courses</h3>
    <div class="grid">
      <template v-if="filteredCourses.length">
        <CourseCard
          v-for="course in filteredCourses"
          :key="course.id"
          :course="course"
          @enroll="handleEnroll"
        />
      </template>
      <p v-else class="pt-3">
        No courses found for category: {{ selectedCategory }} and Difficulty:
        {{ selectedDifficulty }}
      </p>
    </div>
  </div>
</template>
<script setup>
import { useCourseStore } from '@/stores/courseStore'
import { computed, onMounted, ref } from 'vue'
import CourseCard from '@/components/CourseCard.vue'
import { storeToRefs } from 'pinia'
const courseStore = useCourseStore()
const { courses } = storeToRefs(courseStore)
const selectedCategory = ref('')
const selectedDifficulty = ref('')
const searchCourse = ref('')
const selectedSort = ref('')

onMounted(async () => {
  try {
    await courseStore.getCourses()
  } catch (e) {
    console.log(e)
  }
})

const categories = computed(() => [...new Set(courses.value.map((c) => c.category))])

const difficulties = computed(() => [...new Set(courses.value.map((c) => c.difficulty))])

const handleEnroll = (cId) => {
  // mark enrolled in the store state (Pinia allows direct mutation of reactive state)
  const course = courseStore.courses.find((c) => c.id === cId)
  if (course) course.enrolled = true
}

const filteredCourses = computed(() => {
  let res = courses.value

  // search
  if (searchCourse.value) {
    const q = searchCourse.value.toLowerCase()
    res = res.filter((c) => c.title.toLowerCase().includes(q))
  }

  // category filter
  if (selectedCategory.value) {
    res = res.filter((c) => c.category === selectedCategory.value)
  }

  // difficulty filter
  if (selectedDifficulty.value) {
    res = res.filter((c) => c.difficulty === selectedDifficulty.value)
  }

  // sort by rating
  if (selectedSort.value === 'high') {
    res.sort((a, b) => b.rating - a.rating)
  } else if (selectedSort.value === 'low') {
    res.sort((a, b) => a.rating - b.rating)
  }

  return res
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

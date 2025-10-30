<template>
  <div class="d-flex flex-column min-vh-100">
    <AppHeader />
    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './layouts/AppHeader.vue'
</script>

<style scoped>
.app-main {
  padding-top: 10px; /* match header height */
  flex: 1;
}
</style>

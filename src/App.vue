<template>
  <div class="d-flex flex-column min-vh-100">
    <AppHeader />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue'
</script>

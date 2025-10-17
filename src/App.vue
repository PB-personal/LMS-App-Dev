<template>
  <div class="d-flex flex-column min-vh-100">
    <Header />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from './components/layout/Header.vue'
</script>

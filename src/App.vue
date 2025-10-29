<template>
  <div class="d-flex flex-column min-vh-100">
    <AppHeader />

    <!--
      Main wrapper: add top padding to account for fixed header for pages
      that don't already apply their own padding (eg. LoginPage).
      DashboardLayout already adds padding, so we disable the global
      padding when the route is under /dashboard to avoid double spacing.
    -->
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
  padding-top: 56px; /* match header height */
  flex: 1;
}
</style>

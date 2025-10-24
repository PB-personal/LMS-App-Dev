<template>
  <nav class="navbar headerbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">MyLMS</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="{ name: ROUTE_NAMES.DASHBOARD }"
              >Dashboard</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link">My Courses</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: ROUTE_NAMES.QUIZZES }">Quizzes</router-link>
          </li>
        </ul>
        <ul class="d-flex navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link">Profile</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ROUTE_NAMES } from '@/constants/routeNames'
</script>
<style scoped>
.headerbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>

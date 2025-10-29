<template>
  <!-- Sidebar -->
  <div class="sidebar d-flex flex-column p-3">
    <div class="sidebar-header">My Dashboard</div>
    <ul class="nav flex-column mt-3">
      <li class="nav-item">
        <router-link
          :to="{ name: ROUTE_NAMES.DASHBOARD }"
          :class="['nav-link', { active: route.name === ROUTE_NAMES.DASHBOARD }]"
        >
          🏠 Dashboard
        </router-link>
      </li>
      <!-- <li class="nav-item">
        <a href="#" class="nav-link"> 📚 My Courses </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link"> 📈 Progress </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">📝 Assessments </a>
      </li> -->
      <li class="nav-item">
        <router-link
          :to="{ name: ROUTE_NAMES.QUIZZES }"
          :class="[
            'nav-link',
            { active: route.name === ROUTE_NAMES.QUIZZES || route.name === ROUTE_NAMES.QUIZ },
          ]"
        >
          📝 Quizzes
        </router-link>
      </li>
      <!-- <li class="nav-item mt-auto">
        <a href="#" class="nav-link text-danger"> 👤 Profile </a>
      </li> -->
    </ul>
  </div>
</template>
<script setup>
import { ROUTE_NAMES } from '@/constants/routeNames'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
<style>
.sidebar {
  width: 100%;
  max-width: 260px;
  height: 100vh;
  background: linear-gradient(180deg, #343a40 0%, #212529 100%);
  color: #fff;
  transition: all 0.3s ease;
  position: sticky;
  top: 0;
}

.sidebar .nav-link {
  color: #adb5bd;
  border-radius: 10px;
  margin: 5px 0;
  transition: all 0.2s;
}

.sidebar .nav-link:hover,
.sidebar .nav-link.active {
  background-color: #495057;
  color: #fff;
}

.sidebar .nav-link i {
  margin-right: 10px;
}

.sidebar-header {
  font-size: 1.3rem;
  padding: 1.2rem;
  text-align: center;
  background: #212529;
  border-bottom: 1px solid #444;
}

main {
  flex: 1;
  padding: 2rem;
}

.content-box {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
}

/* Responsive */
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    left: -260px;
    height: 100%;
    z-index: 1000;
  }
  .sidebar.show {
    left: 0;
  }
}

.toggle-btn {
  display: none;
}

@media (max-width: 768px) {
  .toggle-btn {
    display: block;
    background: #343a40;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
  }
}
</style>

<template>
  <div class="dashboard-layout">
    <div class="sidebar-content">
      <AppSidebar />
    </div>
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>
<script setup>
import AppSidebar from './AppSidebar.vue'
</script>
<style scoped>
.dashboard-layout {
  display: flex;
  min-height: 100vh;
}
.sidebar-content {
  width: 20%;
  height: calc(100vh - 56px);
  position: sticky;
  top: 56px;
}
.main-content {
  flex: 1;
  flex-direction: column;
}

/* account for fixed header height (default bootstrap navbar ~56px) */
.main-content {
  padding-top: 56px;
}
</style>

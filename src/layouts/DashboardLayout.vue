<template>
  <div class="dashboard-layout">
    <div class="sidebar-content">
      <AppSidebar />
    </div>
    <div class="main-content">
      <AppHeader />
      <router-view />
    </div>
  </div>
</template>
<script setup>
import AppSidebar from './AppSidebar.vue'
import AppHeader from './AppHeader.vue'
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
</style>

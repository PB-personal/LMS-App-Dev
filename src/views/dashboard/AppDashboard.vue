<template>
  <div class="dashboard-wrapper">
    <aside class="dashboard-sidebar">
      <AppSidebar />
    </aside>

    <main class="dashboard-content">
      <AppContent />
    </main>
  </div>
</template>

<script setup>
import AppContent from '@/components/layout/AppContent.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'
</script>

<style scoped>
.dashboard-wrapper {
  display: flex;
  gap: 1.5rem;
  min-height: calc(100vh - 56px); /* viewport height minus header height */
  margin-top: 56px; /* space for fixed header */
}

.dashboard-sidebar {
  flex: 0 0 30%;
  max-width: 30%;
  height: calc(100vh - 56px); /* viewport height minus header height */
  position: sticky;
  top: 56px; /* stick below the header */
}

.dashboard-content {
  flex: 1 1 70%;
  min-width: 0; /* allow children to truncate properly */
}
</style>

<template>
  <div class="min-h-screen bg-[#0b0e11] text-white flex flex-col">
    <AppHeader />

    <main class="flex-1">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Components are now auto-imported globally
</script>

<template>
  <footer class="bg-[#0b0e11] border-t border-white/5 py-12 px-6 lg:px-20">
    <div class="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <NuxtLink to="/" class="flex items-center gap-2">
        <div class="size-6 bg-primary/20 rounded flex items-center justify-center text-primary">
          <span class="material-symbols-outlined text-sm">bolt</span>
        </div>
        <h2 class="text-white text-lg font-black tracking-tight">CRYPTO<span class="text-[#0d7ff2]">BOT</span></h2>
      </NuxtLink>
      <div class="flex gap-8 text-white/40 text-sm font-medium">
        <NuxtLink to="/terms" class="hover:text-white transition-colors">Terms of Service</NuxtLink>
        <NuxtLink to="/privacy" class="hover:text-white transition-colors">Privacy Policy</NuxtLink>
        <NuxtLink to="/security" class="hover:text-white transition-colors">Security Audit</NuxtLink>
        <NuxtLink to="/api-docs" class="hover:text-white transition-colors">API Documentation</NuxtLink>
      </div>
      <div class="flex gap-4">
        <button class="size-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors" aria-label="Email">
          <span class="material-symbols-outlined">alternate_email</span>
        </button>
        <button class="size-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors" aria-label="Share">
          <span class="material-symbols-outlined">share</span>
        </button>
      </div>
    </div>
    <div class="text-center mt-12 text-white/20 text-[10px] uppercase tracking-widest font-bold">
      © {{ currentYear }} CryptoBot Trading Ltd. All Rights Reserved.
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

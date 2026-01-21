<template>
  <header class="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0b0e11]/80 backdrop-blur-md px-6 lg:px-20 py-3">
    <div class="max-w-[1440px] mx-auto flex items-center justify-between">
      <div class="flex items-center gap-10">
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span class="material-symbols-outlined">bolt</span>
          </div>
          <h2 class="text-white text-xl font-black tracking-tight">CRYPTO<span class="text-[#0d7ff2]">BOT</span></h2>
        </NuxtLink>
        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink to="/markets" class="text-white/70 hover:text-white text-sm font-medium transition-colors">Markets</NuxtLink>
          <NuxtLink to="/bots" class="text-white/70 hover:text-white text-sm font-medium transition-colors flex items-center gap-1">
            Trading Bots <span class="bg-[#FFB11A] text-[10px] px-1 rounded text-black font-bold">HOT</span>
          </NuxtLink>
          <NuxtLink to="/leaderboard" class="text-white/70 hover:text-white text-sm font-medium transition-colors">Leaderboard</NuxtLink>
          <NuxtLink to="/copy-trading" class="text-white/70 hover:text-white text-sm font-medium transition-colors">Copy Trading</NuxtLink>
        </nav>
      </div>
      <div class="flex items-center gap-4">
        <div class="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 gap-2">
          <span class="material-symbols-outlined text-white/40 text-sm">search</span>
          <input 
            v-model="searchQuery"
            class="bg-transparent border-none text-sm focus:ring-0 p-0 placeholder:text-white/30 text-white w-32 outline-none" 
            placeholder="Search pairs..." 
            type="text" 
          />
        </div>
        <div class="flex gap-2">
          <!-- Authenticated user -->
          <div v-if="authStore.isAuthenticated" class="flex items-center gap-3">
            <NuxtLink to="/dashboard" class="text-white/70 hover:text-white text-sm font-medium transition-colors">
              Dashboard
            </NuxtLink>
            <div class="flex items-center gap-2">
              <button
                @click="handleLogout"
                class="px-4 py-2 text-sm font-bold text-white hover:text-red-400 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>

          <!-- Unauthenticated user -->
          <div v-else class="flex gap-2">
            <NuxtLink
              to="/auth/login"
              class="px-4 py-2 text-sm font-bold text-white hover:text-primary transition-colors"
            >
              Login
            </NuxtLink>
            <NuxtLink
              to="/auth/register"
              class="hover:bg-primary/90 bg-primary/20 px-5 py-2 rounded-xl text-sm font-bold text-white transition-all shadow-lg"
            >
              Sign Up
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const authStore = useAuthStore()
const searchQuery = ref('')

const handleLogout = () => {
  authStore.logout()
  navigateTo('/')
}
</script>

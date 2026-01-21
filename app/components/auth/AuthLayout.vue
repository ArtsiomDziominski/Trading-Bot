<template>
  <div class="min-h-screen bg-[#0b0e11] flex items-center justify-center px-4">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <NuxtLink to="/" class="inline-flex items-center gap-2 mb-4">
          <div class="size-12 bg-primary rounded-lg flex items-center justify-center text-white">
            <span class="material-symbols-outlined">bolt</span>
          </div>
          <h1 class="text-white text-2xl font-black tracking-tight">CRYPTO<span class="text-[#0d7ff2]">BOT</span></h1>
        </NuxtLink>

        <h2 class="text-white text-xl font-semibold">{{ title }}</h2>
        <p class="text-white/60 text-sm mt-2">{{ subtitle }}</p>
      </div>

      <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle: string
}

defineProps<Props>()
</script>

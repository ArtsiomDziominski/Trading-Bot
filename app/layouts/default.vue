<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Навигационная панель -->
    <UHeader>
      <template #left>
        <UButton
          variant="ghost"
          icon="i-heroicons-bars-3"
          size="sm"
          class="lg:hidden"
          @click="isMenuOpen = !isMenuOpen"
        />
        <NuxtLink to="/" class="flex items-center gap-2">
          <UIcon name="i-heroicons-chart-bar" class="h-6 w-6 text-primary-600" />
          <span class="font-semibold text-lg">Trading Bot</span>
        </NuxtLink>
      </template>

      <template #right>
        <div class="flex items-center gap-2">
          <UButton
            variant="ghost"
            icon="i-heroicons-bell"
            size="sm"
          />
          <UButton
            variant="ghost"
            icon="i-heroicons-user"
            size="sm"
          />
        </div>
      </template>
    </UHeader>

    <!-- Боковое меню -->
    <USlideover v-model="isMenuOpen">
      <div class="flex flex-col h-full">
        <div class="p-4 border-b">
          <h2 class="font-semibold">Меню</h2>
        </div>
        <nav class="flex-1 p-4">
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/"
                class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
                @click="isMenuOpen = false"
              >
                <UIcon name="i-heroicons-home" class="h-5 w-5" />
                Главная
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/analytics"
                class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
                @click="isMenuOpen = false"
              >
                <UIcon name="i-heroicons-chart-bar" class="h-5 w-5" />
                Аналитика
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/settings"
                class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
                @click="isMenuOpen = false"
              >
                <UIcon name="i-heroicons-cog-6-tooth" class="h-5 w-5" />
                Настройки
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </USlideover>

    <!-- Основной контент -->
    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)
</script>
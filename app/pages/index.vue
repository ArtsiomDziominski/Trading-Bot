<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="container mx-auto px-4 py-16">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Trading Bot Dashboard
        </h1>
        <p class="text-xl text-gray-600 mb-8">
          Управляйте своими торговыми стратегиями с помощью мощного интерфейса
        </p>
        <div class="flex justify-center gap-4">
          <UButton size="lg" color="primary">
            Начать торговлю
          </UButton>
          <UButton size="lg" variant="outline">
            Просмотреть отчеты
          </UButton>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <UCard>
          <div class="text-center">
            <UIcon name="i-heroicons-chart-bar" class="mx-auto h-12 w-12 text-blue-600 mb-4" />
            <h3 class="text-lg font-semibold mb-2">Аналитика</h3>
            <p class="text-gray-600">Отслеживайте производительность ваших стратегий</p>
          </div>
        </UCard>

        <UCard>
          <div class="text-center">
            <UIcon name="i-heroicons-cog-6-tooth" class="mx-auto h-12 w-12 text-green-600 mb-4" />
            <h3 class="text-lg font-semibold mb-2">Настройки</h3>
            <p class="text-gray-600">Настройте параметры торгового бота</p>
          </div>
        </UCard>

        <UCard>
          <div class="text-center">
            <UIcon name="i-heroicons-bell-alert" class="mx-auto h-12 w-12 text-orange-600 mb-4" />
            <h3 class="text-lg font-semibold mb-2">Уведомления</h3>
            <p class="text-gray-600">Получайте оповещения о важных событиях</p>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Главная страница торгового бота
</script>
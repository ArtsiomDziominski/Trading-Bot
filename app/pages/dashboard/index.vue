<template>
  <div class="min-h-screen bg-[#0b0e11] text-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-20 py-8">
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Добро пожаловать в CryptoBot</h1>
        <p class="text-white/60">Управляйте своими торговыми ботами и отслеживайте их производительность</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <!-- Stats Cards -->
        <div class="bg-white/5 border border-white/10 rounded-xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="size-10 bg-green-500/20 rounded-lg flex items-center justify-center">
              <span class="material-symbols-outlined text-green-400">trending_up</span>
            </div>
            <div>
              <p class="text-white/60 text-sm">Активные боты</p>
              <p class="text-2xl font-bold text-white">0</p>
            </div>
          </div>
        </div>

        <div class="bg-white/5 border border-white/10 rounded-xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="size-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <span class="material-symbols-outlined text-blue-400">account_balance_wallet</span>
            </div>
            <div>
              <p class="text-white/60 text-sm">Общий баланс</p>
              <p class="text-2xl font-bold text-white">$0.00</p>
            </div>
          </div>
        </div>

        <div class="bg-white/5 border border-white/10 rounded-xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="size-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <span class="material-symbols-outlined text-orange-400">show_chart</span>
            </div>
            <div>
              <p class="text-white/60 text-sm">Прибыль сегодня</p>
              <p class="text-2xl font-bold text-white">$0.00</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Welcome message -->
      <div class="bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/20 rounded-xl p-6">
        <div class="flex items-center gap-4">
          <div class="size-12 bg-primary rounded-lg flex items-center justify-center">
            <span class="material-symbols-outlined">celebration</span>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-white mb-1">Начать торговлю</h3>
            <p class="text-white/60">Создайте своего первого торгового бота и начните автоматизированную торговлю</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>

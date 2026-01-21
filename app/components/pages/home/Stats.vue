<script setup lang="ts">
const stats = [
  { label: 'Active Traders', value: '500,000+', trend: '+12% WoW' },
  { label: 'Daily Volume', value: '$2.15B', trend: '+5.4%' },
  { label: 'Total Profit Shared', value: '$150M+', trend: '+18.2%' },
  { label: 'Uptime', value: '99.99%', suffix: 'SLA Guaranteed' }
]
</script>

<template>
  <section class="bg-card-dark/50 border-y border-white/5 py-12">
    <div class="max-w-[1440px] mx-auto px-6 lg:px-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
      <div v-for="stat in stats" :key="stat.label" class="flex flex-col gap-1">
        <p class="text-white/40 text-sm font-medium uppercase tracking-wider">{{ stat.label }}</p>
        <div class="flex items-baseline gap-2">
          <h3 class="text-3xl font-black text-white">{{ stat.value }}</h3>
          <span v-if="stat.trend" class="text-trading-green text-sm font-bold">{{ stat.trend }}</span>
          <span v-if="stat.suffix" class="text-white/20 text-xs font-medium">{{ stat.suffix }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

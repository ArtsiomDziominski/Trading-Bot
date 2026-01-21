<script setup lang="ts">
const bots = [
  {
    title: 'Spot Grid Bot',
    description: 'Buy low and sell high automatically in a set price range. Best for volatile markets.',
    icon: 'i-material-symbols-grid-on',
    iconBg: 'bg-primary/10 text-primary',
    roi: '+24.5%',
    roiLabel: '7D ROI',
    risk: 'Medium Risk',
    riskColor: 'orange' as const
  },
  {
    title: 'DCA Bot (Dollar Cost)',
    description: 'Average your purchase price over time. Best for long-term accumulation in trends.',
    icon: 'i-material-symbols-stacked-line-chart',
    iconBg: 'bg-accent-orange/10 text-accent-orange',
    roi: '+12.2%',
    roiLabel: '30D ROI',
    risk: 'Low Risk',
    riskColor: 'green' as const
  },
  {
    title: 'Martingale Bot',
    description: 'Recover losses by doubling down with smart scaling. Best for fast trend reversals.',
    icon: 'i-material-symbols-keyboard-double-arrow-up',
    iconBg: 'bg-trading-red/10 text-trading-red',
    roi: '+18.9%',
    roiLabel: '14D ROI',
    risk: 'High Risk',
    riskColor: 'red' as const
  }
]
</script>

<template>
  <section class="py-24 px-6 lg:px-20 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:40px_40px]">
    <div class="max-w-[1440px] mx-auto flex flex-col gap-12">
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div class="flex flex-col gap-3">
          <h2 class="text-white text-3xl font-black lg:text-4xl tracking-tight">Top Performing Bots</h2>
          <p class="text-white/50 text-lg">Proven strategies battle-tested across various market conditions.</p>
        </div>
        <div class="flex bg-white/5 p-1 rounded-xl border border-white/10 self-start">
          <UButton color="primary" class="font-bold px-6 py-2.5 rounded-lg shadow-md">Pre-built Templates</UButton>
          <UButton variant="ghost" class="text-white/60 hover:text-white font-bold px-6 py-2.5 rounded-lg hover:bg-white/5">Custom Builder</UButton>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="bot in bots" :key="bot.title" class="bg-card-dark border border-white/10 rounded-2xl p-6 flex flex-col gap-6 hover:border-primary/50 transition-all group">
          <div class="flex justify-between items-start">
            <div :class="`size-12 rounded-xl flex items-center justify-center text-3xl ${bot.iconBg}`">
              <UIcon :name="bot.icon" />
            </div>
            <div class="flex flex-col items-end">
              <span class="text-trading-green text-xl font-black">{{ bot.roi }}</span>
              <span class="text-white/30 text-[10px] uppercase font-bold tracking-widest">{{ bot.roiLabel }}</span>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-xl font-bold text-white">{{ bot.title }}</h3>
            <p class="text-white/50 text-sm leading-relaxed">{{ bot.description }}</p>
          </div>
          <div class="pt-4 border-t border-white/5 flex flex-col gap-4">
            <div class="flex justify-between text-sm items-center">
              <span class="text-white/40 font-medium">Risk Level</span>
              <UBadge :color="bot.riskColor" variant="subtle" size="sm" class="font-bold uppercase">{{ bot.risk }}</UBadge>
            </div>
            <UButton block class="bg-white/5 hover:bg-primary py-3 rounded-xl text-white font-bold transition-all group-hover:bg-primary border-none">
              Copy Bot
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  'Connect to 20+ major global exchanges via secure API.',
  'Backtest strategies with 5 years of historical tick-data.',
  'Real-time risk management with trailing stop-loss.'
]
</script>

<template>
  <section class="py-24 px-6 lg:px-20 bg-background-dark overflow-hidden">
    <div class="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
      <div class="relative order-2 lg:order-1">
        <div class="absolute -top-20 -left-20 size-80 bg-primary/10 rounded-full blur-[80px]"></div>
        <div class="relative bg-card-dark border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div class="flex flex-col gap-6">
            <h4 class="text-white font-bold text-lg">Bot Configuration</h4>
            <div class="space-y-4">
              <div class="flex flex-col gap-2">
                <label class="text-[10px] text-white/40 font-bold uppercase tracking-widest">Select Pair</label>
                <div class="w-full bg-white/5 border border-white/10 rounded-lg p-3 flex justify-between items-center text-white">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-material-symbols-currency-bitcoin" class="text-accent-orange text-lg" />
                    <span class="font-bold">BTC/USDT</span>
                  </div>
                  <UIcon name="i-material-symbols-expand-more" class="text-white/40" />
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="flex flex-col gap-2">
                  <label class="text-[10px] text-white/40 font-bold uppercase tracking-widest">Lower Price</label>
                  <UInput color="primary" variant="outline" class="[&_input]:bg-white/5 [&_input]:border-white/10 [&_input]:text-white font-mono" value="62,000" />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-[10px] text-white/40 font-bold uppercase tracking-widest">Upper Price</label>
                  <UInput color="primary" variant="outline" class="[&_input]:bg-white/5 [&_input]:border-white/10 [&_input]:text-white font-mono" value="78,000" />
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-[10px] text-white/40 font-bold uppercase tracking-widest">Grid Quantity (10-200)</label>
                <div class="flex items-center gap-4">
                  <input class="flex-1 accent-primary h-1.5 bg-white/10 rounded-full cursor-pointer" type="range"/>
                  <span class="text-white font-mono font-bold">50</span>
                </div>
              </div>
              <div class="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-2">
                <div class="flex justify-between items-center">
                  <span class="text-xs text-primary font-bold">Estimated Profit per Grid</span>
                  <span class="text-xs text-trading-green font-black">0.45% ~ 0.82%</span>
                </div>
              </div>
              <UButton block size="xl" color="primary" class="py-4 rounded-xl font-bold shadow-xl shadow-primary/20 mt-2">
                Create Custom Bot
              </UButton>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-8 order-1 lg:order-2">
        <h2 class="text-white text-4xl lg:text-5xl font-black leading-tight">Your Strategy, <span class="text-accent-orange">Precision-Engineered.</span></h2>
        <p class="text-white/60 text-lg leading-relaxed">
          Not satisfied with templates? Our Advanced Bot Builder gives you granular control over every parameter. Configure multi-layered entry points, stop losses, and take-profit triggers with surgical precision.
        </p>
        <ul class="space-y-4">
          <li v-for="feature in features" :key="feature" class="flex items-start gap-3">
            <div class="bg-primary/10 rounded-full p-1 flex items-center justify-center">
              <UIcon name="i-material-symbols-check" class="text-primary text-base" />
            </div>
            <span class="text-white/80 font-medium">{{ feature }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const trusts = [
  {
    title: 'Cold Storage Partner',
    desc: 'Official integration with leading institutional custody providers.',
    icon: 'i-material-symbols-verified-user',
    iconBg: 'bg-accent-orange/10 text-accent-orange'
  },
  {
    title: '$500M Insurance',
    desc: 'Protected by our SAFU fund against any platform-wide technical errors.',
    icon: 'i-material-symbols-shield-with-heart',
    iconBg: 'bg-primary/10 text-primary'
  },
  {
    title: '256-bit Encryption',
    desc: 'Military-grade encryption for all API data and user communications.',
    icon: 'i-material-symbols-lock',
    iconBg: 'bg-trading-green/10 text-trading-green'
  }
]
</script>

<template>
  <section class="py-20 bg-card-dark">
    <div class="max-w-[1440px] mx-auto px-6 lg:px-20">
      <div class="text-center mb-16">
        <h2 class="text-white text-2xl font-bold mb-4">Bank-Grade Security for Your Peace of Mind</h2>
        <p class="text-white/40">Your funds never leave your exchange. We only execute trades via encrypted API keys.</p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="trust in trusts" :key="trust.title" class="flex flex-col items-center text-center gap-4 p-8 bg-background-dark/30 rounded-2xl border border-white/5">
          <div :class="`size-16 rounded-full flex items-center justify-center text-4xl ${trust.iconBg}`">
            <UIcon :name="trust.icon" />
          </div>
          <h4 class="text-white font-bold text-xl">{{ trust.title }}</h4>
          <p class="text-white/50 text-sm">{{ trust.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

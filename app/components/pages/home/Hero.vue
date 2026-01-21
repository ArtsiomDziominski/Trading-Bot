<template>
  <section class="relative pt-12 pb-20 px-6 lg:px-20 overflow-hidden">
    <div class="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-accent-orange/10 rounded-full blur-[100px] pointer-events-none"></div>
    
    <div class="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div class="flex flex-col gap-8 z-10">
        <div class="flex flex-col gap-4">
          <div class="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1 self-start">
            <span class="flex h-2 w-2 rounded-full bg-trading-green animate-pulse"></span>
            <span class="text-xs font-medium text-white/70">Over $2.1B Trading Volume in 24h</span>
          </div>
          <h1 class="text-white text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
            Automate Your Wealth with <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Institutional-Grade</span> Bots
          </h1>
          <p class="text-white/60 text-lg max-w-xl leading-relaxed">
            Join 500,000+ professional traders maximizing profits with Grid, DCA, and Martingale strategies. Start your first bot in under 30 seconds.
          </p>
        </div>
        
        <div class="flex flex-wrap gap-4">
          <UButton 
            size="xl" 
            color="primary" 
            class="px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-xl shadow-primary/30"
            icon="i-material-symbols-arrow-forward"
            trailing
          >
            Get Started Now
          </UButton>
          <UButton 
            size="xl" 
            variant="outline" 
            class="bg-white/5 hover:bg-white/10 border-white/10 px-8 py-4 rounded-xl text-lg font-bold text-white transition-all"
            icon="i-material-symbols-play-circle"
          >
            View Live Demo
          </UButton>
        </div>
        
        <div class="flex items-center gap-6 pt-4 grayscale opacity-60">
          <p class="text-white/40 text-xs uppercase tracking-widest font-bold">Trusted by</p>
          <div class="flex gap-6">
            <UIcon name="i-material-symbols-currency-bitcoin" class="text-3xl text-white" />
            <UIcon name="i-material-symbols-token" class="text-3xl text-white" />
            <UIcon name="i-material-symbols-account-balance-wallet" class="text-3xl text-white" />
          </div>
        </div>
      </div>

      <!-- Trading Terminal Mockup -->
      <div class="relative z-10 group">
        <div class="relative rounded-2xl overflow-hidden border border-white/10 bg-card-dark shadow-2xl transition-transform duration-500 group-hover:rotate-1">
          <div class="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/10">
            <div class="flex gap-1.5">
              <div class="size-2.5 rounded-full bg-trading-red/50"></div>
              <div class="size-2.5 rounded-full bg-accent-orange/50"></div>
              <div class="size-2.5 rounded-full bg-trading-green/50"></div>
            </div>
            <div class="mx-auto bg-white/5 rounded px-4 py-0.5 text-[10px] text-white/40 font-mono">cryptobot.io/terminal/dashboard</div>
          </div>
          <div class="aspect-[4/3] bg-background-dark p-6 overflow-hidden relative">
            <div class="flex flex-col gap-6">
              <div class="flex justify-between items-end">
                <div class="flex flex-col gap-1">
                  <div class="text-xs text-white/40 font-bold uppercase tracking-wider">Total Equity</div>
                  <div class="text-3xl font-black text-white">$142,502.67 <span class="text-sm font-bold text-trading-green ml-2">+12.4%</span></div>
                </div>
                <div class="h-16 w-32 bg-primary/10 rounded border border-primary/20 flex items-center justify-center p-2">
                  <!-- Small Sparkline Chart -->
                  <div class="flex items-end gap-1 h-full w-full">
                    <div class="flex-1 bg-primary/40 rounded-t h-[40%]"></div>
                    <div class="flex-1 bg-primary/40 rounded-t h-[60%]"></div>
                    <div class="flex-1 bg-primary/40 rounded-t h-[55%]"></div>
                    <div class="flex-1 bg-primary/40 rounded-t h-[80%]"></div>
                    <div class="flex-1 bg-primary/40 rounded-t h-[75%]"></div>
                    <div class="flex-1 bg-primary/60 rounded-t h-[100%]"></div>
                  </div>
                </div>
              </div>
              
              <div class="grid grid-cols-2 gap-4">
                <div class="p-4 rounded-lg bg-white/5 border border-white/10 flex flex-col gap-3">
                  <div class="flex justify-between items-center">
                    <span class="text-xs font-bold text-white/60">Active Bots</span>
                    <UIcon name="i-material-symbols-more-horiz" class="text-xs text-primary" />
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="size-10 rounded bg-trading-green/20 flex items-center justify-center text-trading-green">
                      <UIcon name="i-material-symbols-grid-view" />
                    </div>
                    <div>
                      <div class="text-sm font-bold text-white">BTC Grid Bot</div>
                      <div class="text-[10px] text-trading-green">+24.5% APR</div>
                    </div>
                  </div>
                </div>
                <div class="p-4 rounded-lg bg-white/5 border border-white/10 flex flex-col gap-3">
                  <div class="flex justify-between items-center">
                    <span class="text-xs font-bold text-white/60">Portfolio Mix</span>
                    <UIcon name="i-material-symbols-pie-chart" class="text-xs text-primary" />
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="size-10 rounded bg-accent-orange/20 flex items-center justify-center text-accent-orange">
                      <UIcon name="i-material-symbols-analytics" />
                    </div>
                    <div>
                      <div class="text-sm font-bold text-white">DCA Strategy</div>
                      <div class="text-[10px] text-white/40">14 Active Pairs</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full h-32 bg-white/5 border border-white/10 rounded-lg p-2 overflow-hidden relative">
                <svg class="absolute bottom-0 left-0 w-full h-24 opacity-40" preserveaspectratio="none" viewbox="0 0 100 100">
                  <path d="M0 100 L0 80 L10 75 L20 85 L30 60 L40 70 L50 40 L60 55 L70 20 L80 35 L90 5 L100 15 L100 100 Z" fill="url(#hero-grad)"></path>
                  <defs>
                    <lineargradient id="hero-grad" x1="0%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" style="stop-color:#0d7ff2;stop-opacity:0.8"></stop>
                      <stop offset="100%" style="stop-color:#0d7ff2;stop-opacity:0"></stop>
                    </lineargradient>
                  </defs>
                </svg>
                <div class="relative z-10 flex justify-between px-2 pt-2">
                  <span class="text-[10px] font-mono text-white/20 uppercase">Live Market Data</span>
                  <span class="text-[10px] font-mono text-trading-green uppercase">Executing Orders...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

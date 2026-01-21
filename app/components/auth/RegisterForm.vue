<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <!-- Email -->
    <div>
      <label for="email" class="block text-sm font-medium text-white/80 mb-2">
        Email адрес
      </label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        required
        class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
        placeholder="your@email.com"
      />
      <p v-if="errors.email" class="text-red-400 text-sm mt-1">
        {{ errors.email }}
      </p>
    </div>

    <!-- Password -->
    <div>
      <label for="password" class="block text-sm font-medium text-white/80 mb-2">
        Пароль
      </label>
      <input
        id="password"
        v-model="form.password"
        type="password"
        required
        class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
        placeholder="••••••••"
      />
      <p v-if="errors.password" class="text-red-400 text-sm mt-1">
        {{ errors.password }}
      </p>
      <p class="text-white/40 text-xs mt-1">
        Минимум 8 символов, включая заглавную букву, строчную букву и цифру
      </p>
    </div>

    <!-- Confirm Password -->
    <div>
      <label for="confirmPassword" class="block text-sm font-medium text-white/80 mb-2">
        Подтверждение пароля
      </label>
      <input
        id="confirmPassword"
        v-model="form.confirmPassword"
        type="password"
        required
        class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
        placeholder="••••••••"
      />
      <p v-if="errors.confirmPassword" class="text-red-400 text-sm mt-1">
        {{ errors.confirmPassword }}
      </p>
    </div>

    <!-- Error Message -->
    <div v-if="authStore.error" class="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
      <p class="text-red-400 text-sm">{{ authStore.error }}</p>
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      :disabled="authStore.isLoading"
      class="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
    >
      <span v-if="authStore.isLoading" class="material-symbols-outlined animate-spin text-sm">refresh</span>
      {{ authStore.isLoading ? 'Регистрация...' : 'Создать аккаунт' }}
    </button>
  </form>

  <div class="mt-6 text-center">
    <p class="text-white/60 text-sm">
      Уже есть аккаунт?
      <NuxtLink to="/auth/login" class="text-primary hover:text-primary/80 font-medium">
        Войти
      </NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { registerSchema, type RegisterForm } from '~/utils/validation'

const authStore = useAuthStore()
const router = useRouter()

const form = reactive<RegisterForm>({
  email: '',
  password: '',
  confirmPassword: '',
})

const errors = ref<Record<string, string>>({})

const handleSubmit = async () => {
  errors.value = {}
  authStore.clearError()

  const result = registerSchema.safeParse(form)
  if (!result.success) {
    result.error.errors.forEach((error) => {
      errors.value[error.path[0] as string] = error.message
    })
    return
  }

  const response = await authStore.register({
    email: form.email,
    password: form.password,
  })

  if (response.success) {
    await router.push('/dashboard')
  }
}

defineExpose({
  form,
  errors,
  handleSubmit
})
</script>

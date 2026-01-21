export default defineNuxtPlugin(async () => {
  const authStore = useAuthStore()

  if (process.server && authStore.token) {
    try {
      await authStore.initializeAuth()
    } catch (error) {
      console.warn('SSR: Failed to initialize auth on server, will retry on client:', error)
    }
  }
})

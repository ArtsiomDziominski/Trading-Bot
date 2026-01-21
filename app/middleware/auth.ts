export default defineNuxtRouteMiddleware((to) => {
    const authStore = useAuthStore()

    const hasToken = !!authStore.token
    const isAuthenticated = authStore.isAuthenticated
    const isAuthPage = to.path === '/auth/login' || to.path === '/auth/register'
    const isProtectedPage = to.path.startsWith('/dashboard')

    if (!hasToken && isProtectedPage) return navigateTo('/auth/login')

    if (isAuthenticated && isAuthPage) return navigateTo('/dashboard')
})

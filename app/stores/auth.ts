import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { apiClient, type LoginRequest, type RegisterRequest, type User } from '~/utils/api'
import { useNotifications } from '~/composables/useNotifications'

export const useAuthStore = defineStore('auth', () => {
    // State
    const token = useState<string | null>('auth-token', () => null)
    const user = useState<User | null>('auth-user', () => null)
    const isLoading = ref(false)
    const error = ref<string | null>(null)

    const tokenCookie = useCookie<string | null>('auth_token', {
        httpOnly: false, // Allow client-side access
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        default: () => null
    })

    // Getters
    const isAuthenticated = computed(() => !!token.value && !!user.value)

    // Actions
    const initializeAuth = async () => {
        const savedToken = tokenCookie.value
        if (savedToken) {
            token.value = savedToken
            try {
                const response = await apiClient.auth.getCurrentUser()
                setUser(response)
            } catch (error) {
                logout()
            }
        }
    }

    const login = async (credentials: LoginRequest) => {
        isLoading.value = true
        error.value = null

        const { handleSystemNotification } = useNotifications()

        try {
            const response = await apiClient.auth.login(credentials)
            token.value = response.access_token
            tokenCookie.value = response.access_token
            user.value = await apiClient.auth.getCurrentUser()

            handleSystemNotification({
                title: 'Вход выполнен',
                description: 'Добро пожаловать!',
                color: 'success'
            })

            return { success: true }
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Login failed'

            handleSystemNotification({
                title: 'Ошибка входа',
                description: error.value || 'Произошла ошибка при входе',
                color: 'error'
            })

            return { success: false, error: error.value }
        } finally {
            isLoading.value = false
        }
    }

    const register = async (userData: RegisterRequest) => {
        isLoading.value = true
        error.value = null

        const { handleSystemNotification } = useNotifications()

        try {
            await apiClient.auth.register(userData)

            handleSystemNotification({
                title: 'Регистрация выполнена',
                description: 'Аккаунт успешно создан!',
                color: 'success'
            })

            return await login(userData)
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Registration failed'

            handleSystemNotification({
                title: 'Ошибка регистрации',
                description: error.value || 'Произошла ошибка при регистрации',
                color: 'error'
            })

            return { success: false, error: error.value }
        } finally {
            isLoading.value = false
        }
    }

    const setUser = (userData: User | null) => {
        user.value = userData
    }

    const logout = () => {
        setUser(null)
        token.value = null
        error.value = null
        tokenCookie.value = null
    }

    const clearError = () => {
        error.value = null
    }

    token.value = tokenCookie.value || null

    return {
        // State
        token: computed(() => token.value),
        user: computed(() => user.value),
        isLoading: computed(() => isLoading.value),
        error: computed(() => error.value),

        // Getters
        isAuthenticated,

        // Actions
        initializeAuth,
        login,
        register,
        logout,
        clearError,
    }
})

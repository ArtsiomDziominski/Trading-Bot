import { AuthApi } from './auth'

export type {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
  User,
} from './auth'

export { ApiError } from './base'

export const authApi = new AuthApi()

export const apiClient = {
  auth: authApi,
}

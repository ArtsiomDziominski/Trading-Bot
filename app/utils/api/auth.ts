import { BaseApiClient } from './base'

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
}

export interface AuthResponse {
  access_token: string
  token_type: string
}

export interface User {
  id: number
  email: string
  is_active: boolean
  created_at: string
}

export class AuthApi extends BaseApiClient {
  async login(data: LoginRequest): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async register(data: RegisterRequest): Promise<User> {
    return this.request<User>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async getCurrentUser(): Promise<User> {
    return this.request<User>('/auth/me')
  }

  async changePassword(token: string, data: {
    current_password: string
    new_password: string
  }): Promise<User> {
    return this.request<User>('/auth/password', {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

export class ApiError extends Error {
  public status: number
  public data?: any

  constructor(message: string, status: number, data?: any) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.data = data
  }
}

export class BaseApiClient {
  protected baseUrl: string

  constructor(baseUrl = 'http://localhost:8000/api') {
    this.baseUrl = baseUrl
  }

  protected async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    }

    const response = await fetch(url, config)

    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: 'Unknown error' }))
      throw new ApiError(
        error.detail || `HTTP ${response.status}`,
        response.status,
        error
      )
    }

    return response.json()
  }

  protected getAuthHeaders(token?: string): Record<string, string> {
    const headers: Record<string, string> = {}

    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }

    return headers
  }
}
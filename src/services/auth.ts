const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? '/api').replace(/\/$/, '')
const TOKEN_KEY = 'intranet_auth_token'
const DEMO_USER_KEY = 'intranet_demo_username'
const DEMO_AUTH = import.meta.env.VITE_DEMO_AUTH === 'true'

export interface AuthUser {
  id: number
  username: string
  name?: string
  nombre?: string
  empresa_id?: number
  empresa?: { id: number; nombre?: string; nombre_formal?: string; nombre_comercial?: string; imagen?: string }
  empresas?: Array<{ id: number; nombre?: string; nombre_formal?: string; nombre_comercial?: string; imagen?: string }>
  [key: string]: unknown
}

function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

function demoUser(): AuthUser {
  const username = localStorage.getItem(DEMO_USER_KEY) || 'Usuario Demo'
  return {
    id: 1,
    username,
    name: username,
    empresa_id: 1,
    empresa: { id: 1, nombre: 'EPS Demo', nombre_formal: 'EPS Demo', nombre_comercial: 'Agua Cañete', imagen: 'logo-intranet-canete.png' },
    empresas: [{ id: 1, nombre: 'EPS Demo', nombre_formal: 'EPS Demo', nombre_comercial: 'Agua Cañete', imagen: 'logo-intranet-canete.png' }],
  }
}

export async function apiRequest<T>(path: string, options: RequestInit = {}): Promise<T> {
  const headers = new Headers(options.headers)
  headers.set('Accept', 'application/json')
  if (!(options.body instanceof FormData)) headers.set('Content-Type', 'application/json')

  const token = getToken()
  if (token) headers.set('Authorization', `Bearer ${token}`)

  const response = await fetch(`${API_BASE_URL}${path}`, { ...options, headers })
  const contentType = response.headers.get('content-type') ?? ''
  const payload: unknown = contentType.includes('application/json')
    ? await response.json()
    : await response.text()

  if (!response.ok) {
    if (response.status === 401 || response.status === 422) {
      throw new Error(extractErrorMessage(payload) ?? 'Usuario o contraseña incorrectos.')
    }

    throw new Error(extractErrorMessage(payload) ?? 'No se pudo conectar con el servidor.')
  }

  if (!contentType.includes('application/json') && typeof payload === 'string' && /<html|<!doctype/i.test(payload)) {
    throw new Error('La API no está disponible en esta presentación. La interfaz puede seguir utilizándose en modo demostración.')
  }

  return payload as T
}

export async function apiDownload(path: string, fallbackName: string) {
  const headers = new Headers({ Accept: '*/*' })
  const token = getToken()
  if (token) headers.set('Authorization', `Bearer ${token}`)
  const response = await fetch(`${API_BASE_URL}${path}`, { headers })
  if (!response.ok) throw new Error('No se pudo generar el archivo solicitado.')
  const disposition = response.headers.get('content-disposition') ?? ''
  const match = disposition.match(/filename\*?=(?:UTF-8''|["']?)([^"';]+)/i)
  const name = match?.[1] ? decodeURIComponent(match[1]) : fallbackName
  const url = URL.createObjectURL(await response.blob())
  const anchor = document.createElement('a'); anchor.href = url; anchor.download = name; anchor.click()
  URL.revokeObjectURL(url)
}

function extractErrorMessage(payload: unknown): string | null {
  if (!payload || typeof payload !== 'object') return null

  const data = payload as { message?: unknown; errors?: Record<string, unknown> }
  if (typeof data.message === 'string' && data.message !== 'The given data was invalid.') {
    return data.message
  }

  const firstError = data.errors && Object.values(data.errors)[0]
  if (Array.isArray(firstError) && typeof firstError[0] === 'string') return firstError[0]
  if (typeof firstError === 'string') return firstError

  return null
}

export const authService = {
  hasToken: () => Boolean(getToken()),

  clearToken: () => localStorage.removeItem(TOKEN_KEY),

  async login(username: string, password: string) {
    if (DEMO_AUTH) {
      localStorage.setItem(TOKEN_KEY, 'demo-session')
      localStorage.setItem(DEMO_USER_KEY, username)
      return
    }
    const token = await apiRequest<string>('/lecturita/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    })

    localStorage.setItem(TOKEN_KEY, token)
  },

  me: () => DEMO_AUTH ? Promise.resolve(demoUser()) : apiRequest<AuthUser>('/lecturita/auth/me'),
  cambiarEmpresa: (empresa_id: number) => DEMO_AUTH ? Promise.resolve(demoUser()) : apiRequest<AuthUser>('/lecturita/auth/cambiar-empresa', { method:'POST', body:JSON.stringify({ empresa_id }) }),

  async logout() {
    if (DEMO_AUTH) {
      localStorage.removeItem(TOKEN_KEY)
      localStorage.removeItem(DEMO_USER_KEY)
      return
    }
    try {
      if (getToken()) await apiRequest('/lecturita/auth/logout', { method: 'POST' })
    } finally {
      localStorage.removeItem(TOKEN_KEY)
    }
  },
}

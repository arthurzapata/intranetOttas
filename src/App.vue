<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { authService, type AuthUser } from '@/services/auth'

const username = ref('')
const password = ref('')
const showPassword = ref(false)
const isLoading = ref(false)
const isRestoringSession = ref(true)
const errorMessage = ref('')
const user = ref<AuthUser | null>(null)

onMounted(async () => {
  if (!authService.hasToken()) {
    isRestoringSession.value = false
    return
  }

  try {
    user.value = await authService.me()
  } catch {
    authService.clearToken()
  } finally {
    isRestoringSession.value = false
  }
})

async function submitLogin() {
  errorMessage.value = ''

  if (!username.value.trim() || !password.value) {
    errorMessage.value = 'Ingresa tu nombre de usuario y contraseña.'
    return
  }

  isLoading.value = true

  try {
    await authService.login(username.value.trim(), password.value)
    user.value = await authService.me()
    password.value = ''
  } catch (error) {
    errorMessage.value = error instanceof Error
      ? error.message
      : 'No fue posible iniciar sesión. Inténtalo nuevamente.'
  } finally {
    isLoading.value = false
  }
}

async function logout() {
  isLoading.value = true

  try {
    await authService.logout()
  } finally {
    user.value = null
    isLoading.value = false
  }
}
async function refreshUser() { user.value = await authService.me() }
</script>

<template>
  <main v-if="isRestoringSession" class="loading-screen" aria-live="polite">
    <span class="spinner" aria-hidden="true"></span>
    <span>Verificando sesión...</span>
  </main>

  <RouterView v-else-if="user" :user="user" @logout="logout" @refresh-user="refreshUser" />

  <main v-else class="login-layout">
    <section class="hero-panel" aria-label="Presentación de la Intranet">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-title">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5S5.5 10 5.5 15a6.5 6.5 0 0 0 13 0C18.5 10 12 2.5 12 2.5Z" /></svg>
          <h1>Intranet</h1>
        </div>
        <p>Bienvenido a la plataforma Intranet para empresas del sector saneamiento.</p>
      </div>
    </section>

    <section class="form-panel">
      <form class="login-form" novalidate @submit.prevent="submitLogin">
        <div class="mobile-brand" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M12 2.5S5.5 10 5.5 15a6.5 6.5 0 0 0 13 0C18.5 10 12 2.5 12 2.5Z" /></svg>
          <span>Intranet</span>
        </div>

        <div class="form-heading">
          <p class="eyebrow">Acceso seguro</p>
          <h2>Iniciar sesión</h2>
          <p>Ingresa tus credenciales para continuar.</p>
        </div>

        <div v-if="errorMessage" class="error-alert" role="alert">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 9v4m0 4h.01M10.3 3.8 2.1 18a2 2 0 0 0 1.7 3h16.4a2 2 0 0 0 1.7-3L13.7 3.8a2 2 0 0 0-3.4 0Z" /></svg>
          <span>{{ errorMessage }}</span>
        </div>

        <label class="field">
          <span>Nombre de usuario</span>
          <span class="input-wrapper">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21a8 8 0 0 0-16 0m8-9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" /></svg>
            <input v-model="username" name="username" type="text" autocomplete="username" placeholder="Tu nombre de usuario" autofocus :disabled="isLoading" />
          </span>
        </label>

        <label class="field">
          <span>Contraseña</span>
          <span class="input-wrapper">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10V7a5 5 0 0 1 10 0v3m-11 0h12a2 2 0 0 1 2 2v8H4v-8a2 2 0 0 1 2-2Z" /></svg>
            <input v-model="password" name="password" :type="showPassword ? 'text' : 'password'" autocomplete="current-password" placeholder="Ingresa tu contraseña" :disabled="isLoading" />
            <button class="visibility-button" type="button" :aria-label="showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'" @click="showPassword = !showPassword">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /></svg>
            </button>
          </span>
        </label>

        <button class="submit-button" type="submit" :disabled="isLoading">
          <span v-if="isLoading" class="button-spinner" aria-hidden="true"></span>
          {{ isLoading ? 'Ingresando...' : 'Ingresar' }}
        </button>
      </form>
    </section>
  </main>
</template>

<style>
</style>

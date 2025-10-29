import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    isAuthenticated: !!localStorage.getItem('token'),
    isLoading: false,
    error: null,
  }),
  actions: {
    async login(email, password) {
      this.isLoading = true
      this.error = null
      try {
        // Basic client-side validation
        if (!email || !password) throw new Error('Email and password are required')

        // Simulate an async auth call (replace with real API call)
        await new Promise((r) => setTimeout(r, 500))

        // Mock successful response
        const token = 'fake-jwt-token'
        const user = { email }

        this.token = token
        this.user = user
        this.isAuthenticated = true

        // Persist
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))

        return true
      } catch (err) {
        this.error = err?.message || 'Login failed'
        this.isAuthenticated = false
        return false
      } finally {
        this.isLoading = false
      }
    },

    logout() {
      this.token = null
      this.user = null
      this.isAuthenticated = false
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    },
  },
})

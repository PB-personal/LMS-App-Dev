<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4">
        <div class="shadow-sm border">
          <div class="card-body p-4">
            <h4 class="text-center mb-4">Login</h4>

            <div v-if="errors.general" class="alert alert-danger">{{ errors.general }}</div>

            <form @submit.prevent="handleLogin">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model="form.email" type="email" class="form-control" id="email" required />
                <p v-if="errors.email" class="error">{{ errors.email }}</p>
              </div>

              <div class="mb-4">
                <label for="password" class="form-label">Password</label>
                <input
                  v-model="form.password"
                  type="password"
                  class="form-control"
                  id="password"
                  required
                />
                <p v-if="errors.password" class="error">{{ errors.password }}</p>
              </div>

              <button type="submit" class="btn btn-success w-100" :disabled="auth.isLoading">
                <span v-if="auth.isLoading" class="spinner-border spinner-border-sm me-2"></span>
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

const router = useRouter()
const auth = useAuthStore()

const form = reactive({
  email: '',
  password: '',
})

const errors = reactive({
  email: '',
  password: '',
  general: '',
})

const validateForm = () => {
  errors.email = ''
  errors.password = ''
  errors.general = ''
  let valid = true
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email'
    valid = false
  }
  if (form.password.length <= 3) {
    errors.password = 'Password must be at least 4 characters long'
    valid = false
  }
  return valid
}

const handleLogin = async () => {
  if (!validateForm()) return

  const ok = await auth.login(form.email, form.password)
  if (ok) {
    router.push('/dashboard')
  } else {
    errors.general = auth.error || 'Login failed'
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>

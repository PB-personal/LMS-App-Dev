<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4 border">
        <div class="shadow-sm">
          <div class="card-body p-4">
            <h4 class="text-center mb-4">Login</h4>
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
              <button type="submit" class="btn btn-success w-100">
                <!-- <span class="spinner-border spinner-border-sm me-2"></span> -->
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
// const isLoading = ref(false)
const router = useRouter()
const form = reactive({
  email: '',
  password: '',
})
const errors = reactive({
  email: '',
  password: '',
})

const validateForm = () => {
  errors.email = ''
  errors.password = ''
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
const handleLogin = () => {
  if (validateForm()) {
    alert('Form is validated successfully!')
    router.push('/dashboard')
  }
}
</script>
<style scoped>
.error {
  color: red;
}
</style>

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('users', () => {
  const name = ref('')
  const email = ref('')
  const isLoggedIn = ref(false)

  const loginUser = (name, email) => {
    console.log(name, email)
  }

  return {
    name,
    email,
    isLoggedIn,
    loginUser,
  }
})

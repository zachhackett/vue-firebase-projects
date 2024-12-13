<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Log in</button>
  </form>
</template>

<script>
import useLogin from '@/composables/useLogin';
import { ref } from 'vue';


export default {
  setup(props, context) {
    // refs
    const email = ref('')
    const password = ref('')
    const { error, login } = useLogin()

    const handleSubmit = async () => {
      await login(email.value, password.value)
      if(!error.value) {
        console.log('user logged in')
        context.emit('login')
      }
    }

    return { email, password, handleSubmit, error }
  }
}
</script>

<style>

</style>
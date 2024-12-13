import { projectAuth } from "@/firebase/config"
import { ref } from "vue"

const error = ref(null)
const isPending = ref(false)

const login = async (email, password) => {
  isPending.value = true
  error.value = null

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password)
    error.value = null
    isPending.value = false
    console.log(res)

    return res

  } catch(err) {
    console.log(err.message)
    error.value = 'Incorrect login credentials'
    isPending.value = false
  }
}

const useLogin = () => {
  return { error, login, isPending }
}

export default useLogin
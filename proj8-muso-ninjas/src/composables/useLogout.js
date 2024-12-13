import { projectAuth } from "@/firebase/config"
import { ref } from "vue"

const error = ref(null)
const isPending = ref(false)

const logout = async () => {
  isPending.value = true
  error.value = null

  try {
    await projectAuth.signOut()
    isPending.value = false
  } catch(err) {
    console.log(err.message)
    error.value = err.message
    isPending.value = false
  }
}

const useLogout = () => {
  return { error, logout, isPending }
}

export default useLogout
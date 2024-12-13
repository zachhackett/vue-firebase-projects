import { projectFirestore } from "@/firebase/config"
import { ref } from "vue"

const useDocument = (collection, id) => {
  const error = ref(null)
  const isPending = ref(false)

  let docRef = projectFirestore.collection(collection).doc(id)

  const deleteDoc = async () => {
    isPending.value = true
    error.value = null

    try {
      const res = await docRef.delete()
      isPending = false
      return res
    } catch(err) {
      console.log(err.message)
      error.value = 'could not delete the document'
      isPending.value = false
    }
  }

  const updateDoc = async (updates) => {
    isPending.value = true
    error.value = null

    try {
      const res = await docRef.update(updates)
      isPending = false
      return res
    } catch(err) {
      console.log(err.message)
      error.value = 'could not update the document'
      isPending.value = false
    }
  }

  return { error, isPending, deleteDoc, updateDoc }
}

export default useDocument
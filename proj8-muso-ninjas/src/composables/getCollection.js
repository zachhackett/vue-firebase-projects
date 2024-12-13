import { projectFirestore } from "@/firebase/config"
import { ref, watchEffect } from "vue"

const getCollection = (collection, query) => {
  const documents = ref(null)
  const error = ref(null)

  let collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')

  if (query) {
    collectionRef = collectionRef.where(...query)
  }

  const unsub = collectionRef.onSnapshot((snapshot) => {
    let results = []
    snapshot.docs.forEach(doc => {
      doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
    })

    documents.value = results
    error.value = null
  }, (err) => {
    console.log(err.message)
    documents.value = null
    error.value = 'could not fetch data'
  })

  watchEffect((onInvalidate) => {
    // unsub from prev collection when watcher is stopped (component unmounted)
    onInvalidate(() => unsub())
  })

  return { documents, error }
}

export default getCollection
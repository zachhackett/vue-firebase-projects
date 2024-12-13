import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA2q6apVXyPJn_5JPScdlZTKWiYXRpZf6o",
  authDomain: "fb9-reading-list-540cf.firebaseapp.com",
  projectId: "fb9-reading-list-540cf",
  storageBucket: "fb9-reading-list-540cf.firebasestorage.app",
  messagingSenderId: "953787691560",
  appId: "1:953787691560:web:ddba7e13d6ca529c7fbb1d"
};

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()

export { db, auth }
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDZgqD_LY2MPfKp75k_pZ_B7NZl4TcOdXE",
  authDomain: "muso-ninjas-6a548.firebaseapp.com",
  projectId: "muso-ninjas-6a548",
  storageBucket: "muso-ninjas-6a548.firebasestorage.app",
  messagingSenderId: "477231458168",
  appId: "1:477231458168:web:a189c0ef4ec96b7738ca8d"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth      = firebase.auth()
const projectStorage   = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
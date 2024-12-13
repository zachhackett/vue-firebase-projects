import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDVf352XUsqrLepYswkCFQkTV8NzfN-mg8",
  authDomain: "udemy-vue-firebase-sites-1b825.firebaseapp.com",
  projectId: "udemy-vue-firebase-sites-1b825",
  storageBucket: "udemy-vue-firebase-sites-1b825.firebasestorage.app",
  messagingSenderId: "208331505094",
  appId: "1:208331505094:web:eaf70c9ecca5362086c6c7"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

// init authentication
const projectAuth = firebase.auth()

export { projectAuth, projectFirestore, timestamp }
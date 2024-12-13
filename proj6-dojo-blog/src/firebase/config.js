import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDVf352XUsqrLepYswkCFQkTV8NzfN-mg8",
  authDomain: "udemy-vue-firebase-sites-1b825.firebaseapp.com",
  projectId: "udemy-vue-firebase-sites-1b825",
  storageBucket: "udemy-vue-firebase-sites-1b825.firebasestorage.app",
  messagingSenderId: "208331505094",
  appId: "1:208331505094:web:76f0550fed8ad4b686c6c7"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }
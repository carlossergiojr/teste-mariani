// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyACA_OsOHqFsrNTq1xWH7Wsmsjog1B0zoQ',
  authDomain: 'mymoney-405ce.firebaseapp.com',
  projectId: 'mymoney-405ce',
  storageBucket: 'mymoney-405ce.appspot.com',
  messagingSenderId: '373025150284',
  appId: '1:373025150284:web:2d68dc747dc46c78b22be9'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app)

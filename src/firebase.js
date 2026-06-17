import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

// ⚠️ REEMPLAZÁ estos valores con los de tu proyecto Firebase
// Los obtenés en: Firebase Console → Tu proyecto → Configuración → Tu app
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROJECT.firebaseapp.com",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_PROJECT.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)

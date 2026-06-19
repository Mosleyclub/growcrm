// Importamos las funciones que necesitamos del SDK de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Tus credenciales reales de growcrm-highpro
const firebaseConfig = {
  apiKey: "AIzaSyAFYtOo_23sBn-5-C0VGTaITHXtYnfPexQ",
  authDomain: "growcrm-highpro.firebaseapp.com",
  projectId: "growcrm-highpro",
  storageBucket: "growcrm-highpro.firebasestorage.app",
  messagingSenderId: "382190286267",
  appId: "1:382190286267:web:be784fc9415801a5ae409e"
};

// Inicializamos la aplicación de Firebase
const app = initializeApp(firebaseConfig);

// Inicializamos y exportamos las bases de datos para usarlas en la app
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

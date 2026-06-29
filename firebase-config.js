import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-storage.js";

// Reemplazar estos datos por la configuracion web del proyecto Firebase nuevo.
const firebaseConfig = {
  apiKey: "AIzaSyBnfLiV6_Fd_70DeXdK-WKaH2VRGjIJMNM",
  authDomain: "tymmarcoempresa.firebaseapp.com",
  projectId: "tymmarcoempresa",
  storageBucket: "tymmarcoempresa.firebasestorage.app",
  messagingSenderId: "688392141",
  appId: "1:688392141:web:e83a41d5c7f7dc163ee684",
  measurementId: "G-230RKXT8H2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage, firebaseConfig };

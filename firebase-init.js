// Import Firebase functions from the web
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase, ref, push, set, onValue, update } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Your Keys
const firebaseConfig = {
  apiKey: "AIzaSyAbWq1FuQtwuvl-JgwTH03iXLk3qPQyrc8",
  authDomain: "retail--app.firebaseapp.com",
  projectId: "retail--app",
  storageBucket: "retail--app.firebasestorage.app",
  messagingSenderId: "961300370216",
  appId: "1:961300370216:web:6fc39f48752bb5189ef61d",
  measurementId: "G-K7FJTFPGBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Export tools so other files can use them
export { app, auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, ref, push, set, onValue, update };

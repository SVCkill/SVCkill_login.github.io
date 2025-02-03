// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// 🔹 Skopiuj dane z Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBFjiGzBDGjStru3gAo2eEh6GXLqDzy4Do",
  authDomain: "svccomet.firebaseapp.com",
  projectId: "svccomet",
  storageBucket: "svccomet.firebasestorage.app",
  messagingSenderId: "388894140528",
  appId: "1:388894140528:web:c0240da9afbf62197d2cb5"
};

// Inicjalizacja Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Funkcja rejestracji użytkownika
function register() {
    let email = document.getElementById("registerEmail").value;
    let password = document.getElementById("registerPassword").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            document.getElementById("status").innerText = "Zarejestrowano pomyślnie!";
        })
        .catch((error) => {
            document.getElementById("status").innerText = "Błąd: " + error.message;
        });
}

// Funkcja logowania użytkownika
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            document.getElementById("status").innerText = "Zalogowano pomyślnie!";
        })
        .catch((error) => {
            document.getElementById("status").innerText = "Błąd: " + error.message;
        });
}

// Eksport funkcji
window.register = register;
window.login = login;

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpA99IC2TkDJIphcpy-JvnDdqJhsxnSg8",
    authDomain: "unisole-8c002.firebaseapp.com",
    projectId: "unisole-8c002",
    storageBucket: "unisole-8c002.appspot.com",
    messagingSenderId: "583986063217",
    appId: "1:583986063217:web:62d5f2ae6da456859638d0",
    measurementId: "G-BYDGD4MD6S"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get Auth instance
const auth = getAuth(app);

// Create an instance of GoogleAuthProvider
const provider = new GoogleAuthProvider();

// Export auth and provider
export { auth, provider, RecaptchaVerifier, signInWithPhoneNumber };

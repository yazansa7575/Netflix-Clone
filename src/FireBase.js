import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.env.VITE_FIREBASE_API_KEY,
    authDomain: process.env.env.VITE_AUTH_DOMAIN,
    projectId: process.env.env.VITE_PROJECT_ID,
    storageBucket: process.env.env.VITE_STORGE_BUCKET,
    messagingSenderId: process.env.env.VITE_SENDER_ID,
    appId: process.env.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication 
export const auth = getAuth(app)
// Initialize Firebase DB 
export const db = getFirestore(app);

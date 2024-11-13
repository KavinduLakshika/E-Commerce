import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDqOwoQXLQl0L1xxLcgjwZe1jC4ZPmB07g",
    authDomain: "nm-test-b0ec3.firebaseapp.com",
    projectId: "nm-test-b0ec3",
    storageBucket: "nm-test-b0ec3.firebasestorage.app",
    messagingSenderId: "10126262904",
    appId: "1:10126262904:web:29a2855a9d4d4531d3638d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
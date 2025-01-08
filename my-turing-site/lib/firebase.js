import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADFFrxtp1zK7lyLCSzJGZa8fN3lepv5g8",
  authDomain: "next-turing.firebaseapp.com",
  projectId: "next-turing",
  storageBucket: "next-turing.firebasestorage.app",
  messagingSenderId: "489718342744",
  appId: "1:489718342744:web:cc453657c5a442f064d62d",
  measurementId: "G-FJ186HRVDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

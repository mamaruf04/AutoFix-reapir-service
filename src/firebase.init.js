import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV18jZ3Tpd8pYH6WpNTdfVGX8Bdb-yNlo",
  authDomain: "autofix-7cfa7.firebaseapp.com",
  projectId: "autofix-7cfa7",
  storageBucket: "autofix-7cfa7.appspot.com",
  messagingSenderId: "276927858003",
  appId: "1:276927858003:web:e89a43226bed5cdb3a4da6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
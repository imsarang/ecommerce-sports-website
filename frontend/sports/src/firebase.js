import { initializeApp } from "firebase/app";
import 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB1Is23UERnZ1CC5UGkXE-T3FYZItTXrog",
  authDomain: "ecommerce-otp-f3d79.firebaseapp.com",
  projectId: "ecommerce-otp-f3d79",
  storageBucket: "ecommerce-otp-f3d79.appspot.com",
  messagingSenderId: "946440944193",
  appId: "1:946440944193:web:49895c5d339b2aecf564c0",
  measurementId: "G-SZCBKGETQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
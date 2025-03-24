import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRGepWDn5ysewseoPBZ0KaJ695D3Y5Fjo",
  authDomain: "green-shop-demo.firebaseapp.com",
  projectId: "green-shop-demo",
  storageBucket: "green-shop-demo.firebasestorage.app",
  messagingSenderId: "680999331063",
  appId: "1:680999331063:web:a41d88cb92d4bf5d8b5ff2",
  measurementId: "G-QHQK0XLKCE",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { signInWithGoogle };

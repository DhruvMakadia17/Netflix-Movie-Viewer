import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCnyEoVb_OQOGg2dGTgNEVdG020hYykKVY",
  authDomain: "netflix-clone-3b305.firebaseapp.com",
  projectId: "netflix-clone-3b305",
  storageBucket: "netflix-clone-3b305.appspot.com",
  messagingSenderId: "540961477511",
  appId: "1:540961477511:web:667baf9889d3e292717922",
  measurementId: "G-QXPLWCBQYF"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

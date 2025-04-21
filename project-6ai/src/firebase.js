import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBgJeJpfuDXVbg6OIlh6Loh-J6LeDwoUUk",
  authDomain: "project-6ai.firebaseapp.com",
  projectId: "project-6ai",
  storageBucket: "project-6ai.firebasestorage.app",
  messagingSenderId: "430638851730",
  appId: "1:430638851730:web:1974c190e109809d10684b",
  measurementId: "G-7FDX2LQQCZ"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, provider };

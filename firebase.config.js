import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY ,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN ,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId:import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_API_ID,
//   measurementId: import.meta.env.VITE_MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyC4PsZXF8iLfWUQtWvO461DR6neIxkcODM",
  authDomain: "fir-auth-2-e2b93.firebaseapp.com",
  projectId: "fir-auth-2-e2b93",
  storageBucket: "fir-auth-2-e2b93.appspot.com",
  messagingSenderId: "939137526931",
  appId: "1:939137526931:web:967856a58c5f5648adb166",
  measurementId: "G-RN2XW1N345"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: process.env.CREATE_REACT_APP_API_KEY,
  authDomain: process.env.CREATE_REACT_APP_AUTH__DOMAIN,
  projectId: process.env.CREATE_REACT_APP_PROJECT_ID,
  storageBucket: process.env.CREATE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.CREATE_REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.CREATE_REACT_APP_APP_ID,
  measurementId: process.env.CREATE_REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
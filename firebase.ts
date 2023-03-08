import { getFirestore } from 'firebase/firestore'
import { initializeApp, getApp, getApps } from "firebase/app";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOP8mXpx8pxHeCmynp_HWI2C2dDK9SAWQ",
  authDomain: "chatgpt-messenger-ad439.firebaseapp.com",
  projectId: "chatgpt-messenger-ad439",
  storageBucket: "chatgpt-messenger-ad439.appspot.com",
  messagingSenderId: "520552267876",
  appId: "1:520552267876:web:33500d8e29e4ecdd925f71"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

// const app = initializeApp(firebaseConfig);


export {db}
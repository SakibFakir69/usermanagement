

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebase_api_key,
  authDomain:firebase_auth_doamin,
  projectId: firebase_project_id,

  storageBucket: firebase_stroage_bucket,
  messagingSenderId: process.env.firebase_messaggin_sender_id,
  appId: process.env.firebase_app_id
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth =  getAuth(app);

export default Auth;

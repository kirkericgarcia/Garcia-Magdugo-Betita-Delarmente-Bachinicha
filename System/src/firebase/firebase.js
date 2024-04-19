import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgGxfXJpg1aWUc0DfDf2fmgVmoLVJTb1g",
  authDomain: "kirk-fb2f5.firebaseapp.com",
  projectId: "kirk-fb2f5",
  storageBucket: "kirk-fb2f5.appspot.com",
  messagingSenderId: "439124004254",
  appId: "1:439124004254:web:ae1308b0ca0d590ab85a8f",
  measurementId: "G-RXL0DHK3RY"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };

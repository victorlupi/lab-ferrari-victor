// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyARKBzHmQqbEen1F66cHQPyfcsnV6tW5Ds",
  authDomain: "lab-ferrari-victor.firebaseapp.com",
  projectId: "lab-ferrari-victor",
  storageBucket: "lab-ferrari-victor.appspot.com",
  messagingSenderId: "715829819068",
  appId: "1:715829819068:web:9f8ad801afbaf3b185c2b9",
  measurementId: "G-FDJRM9ZYZT"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
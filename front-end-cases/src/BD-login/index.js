import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAC7eSVXMvnsgCCy7g5nBolw1Y3heQC1WU",
  authDomain: "cases-87987.firebaseapp.com",
  projectId: "cases-87987",
  storageBucket: "cases-87987.appspot.com",
  messagingSenderId: "142930053326",
  appId: "1:142930053326:web:250103403549d5bee1289f",
  measurementId: "G-NH3FQPFE3M"
};

// Inicialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export{ auth };
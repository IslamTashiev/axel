import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgFM7sMf05_v_lMpQtch6syzPXTX0sQN8",
  authDomain: "axel-one.firebaseapp.com",
  projectId: "axel-one",
  storageBucket: "axel-one.appspot.com",
  messagingSenderId: "773021010026",
  appId: "1:773021010026:web:932e12d0be99b93692e213",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

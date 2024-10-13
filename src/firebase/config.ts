import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAut2zIjTH1ruTpKoX4f2bKLWr11geRB8I",
  authDomain: "partymilano-378f6.firebaseapp.com",
  projectId: "partymilano-378f6",
  storageBucket: "partymilano-378f6.appspot.com",
  messagingSenderId: "571200478793",
  appId: "1:571200478793:web:5c8b933d442a1a8592a998"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
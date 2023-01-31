// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBfLH0RSfsYD7C86uqDv-yyXBw1qb1bbcY',
  authDomain: 'ecommerce-coder-react-3e966.firebaseapp.com',
  projectId: 'ecommerce-coder-react-3e966',
  storageBucket: 'ecommerce-coder-react-3e966.appspot.com',
  messagingSenderId: '633781604101',
  appId: '1:633781604101:web:6d970464ad474de452716c'
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

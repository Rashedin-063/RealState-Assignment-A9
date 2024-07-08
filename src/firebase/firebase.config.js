// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBrcrLqePR7WMU0yMCWTK723IyBxP1OduE',
  authDomain: 'a9-real-estate-9f975.firebaseapp.com',
  projectId: 'a9-real-estate-9f975',
  storageBucket: 'a9-real-estate-9f975.appspot.com',
  messagingSenderId: '993154019566',
  appId: '1:993154019566:web:6a253ae66970851d1643ff',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
 
export default auth;
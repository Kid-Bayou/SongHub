// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByGkC6tPsxRUw9DdSVdZdb73WHunFsMBY",
  authDomain: "songhub-48b99.firebaseapp.com",
  projectId: "songhub-48b99",
  storageBucket: "songhub-48b99.appspot.com",
  messagingSenderId: "308408026258",
  appId: "1:308408026258:web:1d2a58159392828376124b",
  measurementId: "G-SZ8HZLCKRR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
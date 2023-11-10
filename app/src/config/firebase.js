import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyByGkC6tPsxRUw9DdSVdZdb73WHunFsMBY",
  authDomain: "songhub-48b99.firebaseapp.com",
  projectId: "songhub-48b99",
  storageBucket: "songhub-48b99.appspot.com",
  messagingSenderId: "308408026258",
  appId: "1:308408026258:web:1d2a58159392828376124b",
  measurementId: "G-SZ8HZLCKRR",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
export const db = getFirestore(app);

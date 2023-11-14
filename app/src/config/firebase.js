
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBbXLANXL6CdkghNQe44PRSuClPSRQTDAQ",
  authDomain: "songhub-46ca7.firebaseapp.com",
  projectId: "songhub-46ca7",
  storageBucket: "songhub-46ca7.appspot.com",
  messagingSenderId: "37367776365",
  appId: "1:37367776365:web:23acd1d41d5afa3a9beb64",
  measurementId: "G-2CHPFSD0SG"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
export const db = getFirestore(app);

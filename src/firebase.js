import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-jsQGHmxCDjf9k0SWMrjsS6R1E9gs4QI",
  authDomain: "cs4800-cpp-tutorplatform.firebaseapp.com",
  projectId: "cs4800-cpp-tutorplatform",
  storageBucket: "cs4800-cpp-tutorplatform.appspot.com",
  messagingSenderId: "692396275639",
  appId: "1:692396275639:web:7bd1c939063bdda32b1a32"
};

// initializes the Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

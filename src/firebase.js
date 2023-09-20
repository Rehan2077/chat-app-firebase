import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDiJBOHt-RPYzkNpem2i1pc0aSsQkkWbZA",
  authDomain: "chat-8b4f3.firebaseapp.com",
  projectId: "chat-8b4f3",
  storageBucket: "chat-8b4f3.appspot.com",
  messagingSenderId: "61894375876",
  appId: "1:61894375876:web:5ef12f38409b3dedf34c91",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app); 

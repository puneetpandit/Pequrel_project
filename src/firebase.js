import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwPPcTgOVu5ltWlwwzV6OcHQWupSgObSM",
  authDomain: "pequrel.firebaseapp.com",
  projectId: "pequrel",
  storageBucket: "pequrel.appspot.com",
  messagingSenderId: "469175001305",
  appId: "1:469175001305:web:02231dc773a416380d1ec8",
  measurementId: "G-ZH1FZYDRPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDijeTPD8t6YRa2pMnGDqRZPya9SAq_9NQ",
  authDomain: "miprimeraapp1-d4f6c.firebaseapp.com",
  projectId: "miprimeraapp1-d4f6c",
  storageBucket: "miprimeraapp1-d4f6c.appspot.com",
  messagingSenderId: "427522262324",
  appId: "1:427522262324:web:cb7228d0679f67d128d161",
  measurementId: "G-ZQDLCDHPFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
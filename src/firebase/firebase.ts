import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCnR1NA4x8l3HeQBZ0pr8x3Q3HLewFEO-A",
  authDomain: "moinda-chat.firebaseapp.com",
  databaseURL:
    "https://moinda-chat-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "moinda-chat",
  storageBucket: "moinda-chat.appspot.com",
  messagingSenderId: "297148886200",
  appId: "1:297148886200:web:ca8296da841c0ae330184d",
  measurementId: "G-H63PZ1KGL3",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// const firebaseConfig = {
//   apiKey: process.env.FB_KEY,
//   authDomain: process.env.FB_AUTH_DOMAIN,
//   databaseURL: process.env.FB_DB_URL,
//   projectId: process.env.FB_PROJECT_ID,
//   storageBucket: process.env.FB_STORAGE_BUCKET,
//   messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
//   appId: process.env.FB_APP_ID,
//   measurementId: process.env.FB_MEASUREMENTID,
// };

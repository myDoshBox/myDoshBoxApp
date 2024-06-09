// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASUREMENT_ID,
// };

const firebaseConfig = {
  //   apiKey: "AIzaSyD64i8g0WufbmZ3sgdGK4HZkPv-aQjXito",
  apiKey: "AIzaSyD64i8g0WufbmZ3sgdGK4HZkPv-aQjXito",
  authDomain: "mydoshboxapp.firebaseapp.com",
  projectId: "mydoshboxapp",
  storageBucket: "mydoshboxapp.appspot.com",
  messagingSenderId: "523049804056",
  appId: "1:523049804056:web:e3e27d8f44e8b32cb0fe6d",
  measurementId: "G-0HM8QSTN12",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

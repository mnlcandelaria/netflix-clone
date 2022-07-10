// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAUltnqPfO5kS6DZMxuHG9myxm4DXH8bzE",
//   authDomain: "netflix-clone-858a4.firebaseapp.com",
//   projectId: "netflix-clone-858a4",
//   storageBucket: "netflix-clone-858a4.appspot.com",
//   messagingSenderId: "442976154169",
//   appId: "1:442976154169:web:20f9dab2b5e7eed22a53e8",
//   measurementId: "G-HZW6LGCYSG"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUltnqPfO5kS6DZMxuHG9myxm4DXH8bzE",
  authDomain: "netflix-clone-858a4.firebaseapp.com",
  projectId: "netflix-clone-858a4",
  storageBucket: "netflix-clone-858a4.appspot.com",
  messagingSenderId: "442976154169",
  appId: "1:442976154169:web:20f9dab2b5e7eed22a53e8",
  measurementId: "G-HZW6LGCYSG"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
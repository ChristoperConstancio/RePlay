// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTqQRNpQ1EDtLMniev1lfBGgdxga2WEBM",
  authDomain: "replay-5dbfd.firebaseapp.com",
  projectId: "replay-5dbfd",
  storageBucket: "replay-5dbfd.appspot.com",
  messagingSenderId: "223768605677",
  appId: "1:223768605677:web:89ffa37bfcca6be6efade4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db =  getFirestore(app);

export default db;
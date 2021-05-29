import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH52hLP4v1lYGaMzq95T2bCyeS70hnk3M",
  authDomain: "linkedin-clone-adi.firebaseapp.com",
  projectId: "linkedin-clone-adi",
  storageBucket: "linkedin-clone-adi.appspot.com",
  messagingSenderId: "1084512783153",
  appId: "1:1084512783153:web:2143ea5a6c4cf6ac46be10",
  measurementId: "G-1QSQ8Q8MBX",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

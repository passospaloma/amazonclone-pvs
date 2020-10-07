import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUpJY5lQmPhou_IoFmkDROHZKR-FwadyU",
  authDomain: "clonepvs.firebaseapp.com",
  databaseURL: "https://clonepvs.firebaseio.com",
  projectId: "clonepvs",
  storageBucket: "clonepvs.appspot.com",
  messagingSenderId: "711448939602",
  appId: "1:711448939602:web:60da1c8820a5283e3fe38b",
  measurementId: "G-5PBQMVQH2L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

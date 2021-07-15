import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCfp5DeD0VuLpNKG-46bVIekWvHt85HagU",
    authDomain: "ig-reels-17b5c.firebaseapp.com",
    projectId: "ig-reels-17b5c",
    storageBucket: "ig-reels-17b5c.appspot.com",
    messagingSenderId: "1004985778214",
    appId: "1:1004985778214:web:36acb3d88dcd361d0a26e7",
    measurementId: "G-B0MG5R2C1J"
  };

  const firebaseApp = 
  firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
// import firebase from 'firebase';/
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';



 

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBr_prUKAxZhlnkiT-JtNh_D5R0iIaAU0o",
    authDomain: "olx123-6dcab.firebaseapp.com",
    databaseURL: "https://olx123-6dcab.firebaseio.com",
    projectId: "olx123-6dcab",
    storageBucket: "olx123-6dcab.appspot.com",
    messagingSenderId: "871960993004",
    appId: "1:871960993004:web:b6f0f7e3186c36690c99c9"
  };
  // Initialize Firebase
  

  firebase.initializeApp(firebaseConfig);

export default firebase;
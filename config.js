import firebase from 'firebase';
require('@firebase/firestore');
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAsp-v-Rhdv_yv5V7OQgBGppFL6AkvqjIk",
    authDomain: "fashion-fiesta-89928.firebaseapp.com",
    projectId: "fashion-fiesta-89928",
    storageBucket: "fashion-fiesta-89928.appspot.com",
    messagingSenderId: "49027769308",
    appId: "1:49027769308:web:ea1255404f76029b7a6519"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()
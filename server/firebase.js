import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "sollys-way.firebaseapp.com",
  databaseURL: "https://sollys-way.firebaseio.com",
  projectId: "sollys-way",
  storageBucket: "sollys-way.appspot.com",
};


firebase.initializeApp(config);

export default firebase

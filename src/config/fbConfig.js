import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDhaDcO1ldX74cM2Jedor06E0Il-sFoJSk",
    authDomain: "lab-19082017.firebaseapp.com",
    databaseURL: "https://lab-19082017.firebaseio.com",
    projectId: "lab-19082017",
    storageBucket: "lab-19082017.appspot.com",
    messagingSenderId: "832581485358"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });


  export default firebase;
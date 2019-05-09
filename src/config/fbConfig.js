import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  var config = {
    apiKey: "<API key>",
    authDomain: "<Auth domain name>",
    databaseURL: "<database url>",
    projectId: "<project id>",
    storageBucket: "<storage bucket id></storage>",
    messagingSenderId: "<message sender id>"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });


  export default firebase;
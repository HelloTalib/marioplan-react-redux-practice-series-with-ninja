import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBXcK_3svl-Yae9uwQDdjz0VorLzI09WaA",
    authDomain: "react-redux-59417.firebaseapp.com",
    databaseURL: "https://react-redux-59417.firebaseio.com",
    projectId: "react-redux-59417",
    storageBucket: "react-redux-59417.appspot.com",
    messagingSenderId: "779062420016"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true})


  export default firebase;

import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
// import firebase from 'react-native-firebase';


 const FirebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
}

    firebase.initializeApp(FirebaseConfig);
   var dbFirestore = firebase.firestore();
   var firebaseStorage = firebase.storage();

export { dbFirestore, firebaseStorage }
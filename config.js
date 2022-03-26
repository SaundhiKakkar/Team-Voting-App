import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCqWU8jJhjoDOcz0_9kFPc2mHxisDIrtXU",
    authDomain: "project-67-3deec.firebaseapp.com",
    projectId: "project-67-3deec",
    storageBucket: "project-67-3deec.appspot.com",
    messagingSenderId: "260927258908",
    appId: "1:260927258908:web:6d1a47d062e4e7b54abad9",
    measurementId: "G-E8B4Z3PMGH"
      
      
      
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();


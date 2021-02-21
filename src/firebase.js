import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAgq9dBC9zIifSCQR6ri0J06c7IImmNshs",
    authDomain: "linkedin-clone-a75ff.firebaseapp.com",
    projectId: "linkedin-clone-a75ff",
    storageBucket: "linkedin-clone-a75ff.appspot.com",
    messagingSenderId: "78463901156",
    appId: "1:78463901156:web:a3ebb24bbcdd50be863bf1"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth} ;
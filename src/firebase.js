import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyASNSasFnzTDUTdiOIFZAUOeHmWcyTyMeY",
    authDomain: "todolist-tut-1d9d9.firebaseapp.com",
    databaseURL: "https://todolist-tut-1d9d9.firebaseio.com",
    projectId: "todolist-tut-1d9d9",
    storageBucket: "todolist-tut-1d9d9.appspot.com",
    messagingSenderId: "1096623279640",
    appId: "1:1096623279640:web:41ae8175a7ba38386a3d6d"
});

export { firebaseConfig as firebase };
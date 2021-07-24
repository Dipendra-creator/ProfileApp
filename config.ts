import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCtvLigxKWLoVXx7zyJDSCQYNud3EZhiLU",
    authDomain: "dipendra-28d0b.firebaseapp.com",
    databaseURL: "https://dipendra-28d0b-default-rtdb.firebaseio.com",
    projectId: "dipendra-28d0b",
    storageBucket: "dipendra-28d0b.appspot.com",
    messagingSenderId: "993711944241",
    appId: "1:993711944241:web:f4c13586033b3ce69edb10",
    measurementId: "G-H4PQWGPGQ7"
};
firebase.initializeApp(firebaseConfig);
export default firebase.database();

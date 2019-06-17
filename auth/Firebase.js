import firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsUUOw0l5iioLkCVgTQy8EkM9xvjaIwgI",
    authDomain: "projetologin-1b48f.firebaseapp.com",
    databaseURL: "https://projetologin-1b48f.firebaseio.com",
    projectId: "projetologin-1b48f",
    storageBucket: "projetologin-1b48f.appspot.com",
    messagingSenderId: "990846765750",
    appId: "1:990846765750:web:14b62189e572c5e3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
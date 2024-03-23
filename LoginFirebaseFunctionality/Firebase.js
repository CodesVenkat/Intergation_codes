import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD_S60l2IthKe3uiaqADuQWFV6h8B2UU-U",
    authDomain: "varuvaaireact.firebaseapp.com",
    projectId: "varuvaaireact",
    storageBucket: "varuvaaireact.appspot.com",
    messagingSenderId: "126461443957",
    appId: "1:126461443957:web:f7bc0914b47a23f3f21d3c",
    measurementId: "G-8N42XJN16E"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const firestore = app.firestore();

// Create Google Auth Provider instance
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth, firestore, googleAuthProvider };
export default app;

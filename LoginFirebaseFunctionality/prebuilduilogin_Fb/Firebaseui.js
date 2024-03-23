// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_S60l2IthKe3uiaqADuQWFV6h8B2UU-U",
    authDomain: "varuvaaireact.firebaseapp.com",
    projectId: "varuvaaireact",
    storageBucket: "varuvaaireact.appspot.com",
    messagingSenderId: "126461443957",
    appId: "1:126461443957:web:f7bc0914b47a23f3f21d3c",
    measurementId: "G-8N42XJN16E"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// export default app;
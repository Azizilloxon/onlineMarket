import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyACTLONvt2jx3Nx-oICmiMkp63K1vsUVaE",
    authDomain: "react-online-market-db.firebaseapp.com",
    projectId: "react-online-market-db",
    storageBucket: "react-online-market-db.appspot.com",
    messagingSenderId: "512378387538",
    appId: "1:512378387538:web:124fbb451fc2a78d83b38b",
    measurementId: "G-NT1YPNPY7W"
};




firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);




export default firebase;
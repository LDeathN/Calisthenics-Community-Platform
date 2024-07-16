import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyACjkWH0ftv2nUEXmVG2W2dfjYRN-hDG04",
    authDomain: "calisthenics-community-5ebea.firebaseapp.com",
    projectId: "calisthenics-community-5ebea",
    storageBucket: "calisthenics-community-5ebea.appspot.com",
    messagingSenderId: "831582693661",
    appId: "1:831582693661:web:49121df1301bb31e49d9f4",
    measurementId: "G-Y2HK9D3SML"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
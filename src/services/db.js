import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth' 

const firebaseConfig = {
    apiKey: "AIzaSyCiR-RJm2U_L886kXBTWruKkjYencB3VDo",
    authDomain: "live-lol.firebaseapp.com",
    databaseURL: "https://live-lol.firebaseio.com",
    projectId: "live-lol",
    storageBucket: "live-lol.appspot.com",
    messagingSenderId: "782884057595",
    appId: "1:782884057595:web:6828604572bfe82fa6db5e",
    measurementId: "G-7FM9PQ729L"
  };

firebase.initializeApp(firebaseConfig)


export const auth = firebase.auth();

export const firestore = firebase.firestore();

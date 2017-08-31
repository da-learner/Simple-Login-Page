import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCl0lNj5AumNdnII-MjP-7EVgrXZNZLVow",
    authDomain: "simpleapp-e4f4d.firebaseapp.com",
    databaseURL: "https://simpleapp-e4f4d.firebaseio.com",
    projectId: "simpleapp-e4f4d",
    storageBucket: "",
    messagingSenderId: "524867160300"
  };

export const firebaseApp = firebase.initializeApp(config);
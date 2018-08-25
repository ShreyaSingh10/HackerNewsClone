import * as firebase from 'firebase';
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBpLNwT89AEVeMffp3jeG33NVtyyTcqWjU",
    authDomain: "hacker-news-26d9b.firebaseapp.com",
    databaseURL: "https://hacker-news-26d9b.firebaseio.com",
    projectId: "hacker-news-26d9b",
    storageBucket: "hacker-news-26d9b.appspot.com",
    messagingSenderId: "699534444801"
  };
firebase.initializeApp(config);

//export default fire;
export const auth = firebase.auth();

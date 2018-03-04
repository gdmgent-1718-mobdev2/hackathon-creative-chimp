import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCTc6-IT_V_Y8k7Yqpib876WXVkD4yhLDM",
    authDomain: "kig-app-17e67.firebaseapp.com",
    databaseURL: "https://kig-app-17e67.firebaseio.com",
    projectId: "kig-app-17e67",
    storageBucket: "kig-app-17e67.appspot.com",
    messagingSenderId: "562819550250"
  }
  
export const firebaseInit = firebase.initializeApp(firebaseConfig);


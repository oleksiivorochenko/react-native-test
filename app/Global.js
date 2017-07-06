import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD9nnY60AoEyhw9EBTwby05RYTpD5ILO3U",
    authDomain: "reactnativetest-64d44.firebaseapp.com",
    databaseURL: "https://reactnativetest-64d44.firebaseio.com",
    projectId: "reactnativetest-64d44",
    storageBucket: "reactnativetest-64d44.appspot.com",
    messagingSenderId: "1084468979936"
};

export default firebaseApp = firebase.initializeApp(firebaseConfig);
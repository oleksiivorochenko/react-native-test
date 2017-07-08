import * as firebaseConf from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCrKNGwBPUo1diwd1wimrqoBnsF_vUmE7I",
    authDomain: "react-native-test-d37ef.firebaseapp.com",
    databaseURL: "https://react-native-test-d37ef.firebaseio.com",
    projectId: "react-native-test-d37ef",
    storageBucket: "",
    messagingSenderId: "666752834987"
};

export default firebase = firebaseConf.initializeApp(firebaseConfig);
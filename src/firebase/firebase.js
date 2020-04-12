import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCMQk5kjFWiAcpHineVlx1JiUiodQzmO2A",
    authDomain: "react-trello-69e96.firebaseapp.com",
    databaseURL: "https://react-trello-69e96.firebaseio.com",
    projectId: "react-trello-69e96",
    storageBucket: "react-trello-69e96.appspot.com",
    messagingSenderId: "714722186911",
    appId: "1:714722186911:web:4130f24b0aeb7c7c9c74aa",
    measurementId: "G-7LHQD904WF"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

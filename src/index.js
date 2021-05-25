import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDbS0bKcznnGiTt1RC55ara0mm3zn-tSuk",
    authDomain: "neustweb.firebaseapp.com",
    databaseURL: "https://neustweb.firebaseio.com",
    projectId: "neustweb",
    storageBucket: "neustweb.appspot.com",
    messagingSenderId: "429426550791",
    appId: "1:429426550791:web:b1f7beeca09794e2d322a2",
    measurementId: "G-6RNBHJQG9E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

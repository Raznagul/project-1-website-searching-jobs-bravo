import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyAGVAvGZ3RXl5GeHdX4kJtbe7-iYYmzZng",
  authDomain: "github-jobs-webdesign-project.firebaseapp.com",
  databaseURL: "https://github-jobs-webdesign-project.firebaseio.com",
  projectId: "github-jobs-webdesign-project",
  storageBucket: "github-jobs-webdesign-project.appspot.com",
  messagingSenderId: "141022938222"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { auth, db };

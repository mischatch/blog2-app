import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBELSzoI616Vc4Ahfqn2CsYXNE1E3bARak",
    authDomain: "blog2-app.firebaseapp.com",
    databaseURL: "https://blog2-app.firebaseio.com",
    projectId: "blog2-app",
    storageBucket: "blog2-app.appspot.com",
    messagingSenderId: "859977827593"
  };

  if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};

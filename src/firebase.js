import firebase,{ firestore } from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCVZ0Z_hrCqsQI9eax3QSi1arSJhoamJOs",
    authDomain: "jons-fb-clone.firebaseapp.com",
    databaseURL: "https://jons-fb-clone.firebaseio.com",
    projectId: "jons-fb-clone",
    storageBucket: "jons-fb-clone.appspot.com",
    messagingSenderId: "82070535776",
    appId: "1:82070535776:web:71c2df3855d813c4c6cd05",
    measurementId: "G-28M2VQHEKJ"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
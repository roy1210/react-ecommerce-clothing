import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Firebase SDK snippet
const config = {
  apiKey: 'AIzaSyCXDJc3Yg9ISFh-eiA_dfCEM31yCfi4r40',
  authDomain: 'crwn-db-1210.firebaseapp.com',
  databaseURL: 'https://crwn-db-1210.firebaseio.com',
  projectId: 'crwn-db-1210',
  storageBucket: '',
  messagingSenderId: '711115196794',
  appId: '1:711115196794:web:0ea16aef3f4a6411'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export whole library
export default firebase;

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

export const createUserProfileDocument = async (userAuth, AdditionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // Document ref >> DocumentSnapshot: .get(), .set(), .update(), .delete
  const snapShot = await userRef.get();

  // !snapShot.exist: If data is not exist => User haven't sign up yet => Add in collection
  // Collection ref >> querySnapshot: .add(), .get()
  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...AdditionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
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

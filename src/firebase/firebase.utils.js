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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Document ref >> DocumentSnapshot: .get(), .set(), .update(), .delete
  // Collection ref >> querySnapshot: .add(), .get()
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // !snapShot.exist: If data is not exist => User haven't sign up yet => Add in collection
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  // batch: group all calls together into one big request
  const batch = firestore.batch();
  // ForEach(): Same as map(), but not return a new array
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export whole library
export default firebase;

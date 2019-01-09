import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyC5aoy2IrFSdXyYJOI5z9hTQVjQArOwGaI',
  authDomain: 'insideland-a1eae.firebaseapp.com',
  databaseURL: 'https://insideland-a1eae.firebaseio.com',
  projectId: 'insideland-a1eae',
  storageBucket: 'insideland-a1eae.appspot.com',
  messagingSenderId: '110475419154',
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;

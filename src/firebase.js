import firebase from 'firebase';
//
// const config = {
//   apiKey: 'AIzaSyC5aoy2IrFSdXyYJOI5z9hTQVjQArOwGaI',
//   authDomain: 'insideland-a1eae.firebaseapp.com',
//   databaseURL: 'https://insideland-a1eae.firebaseio.com',
//   projectId: 'insideland-a1eae',
//   storageBucket: 'insideland-a1eae.appspot.com',
//   messagingSenderId: '110475419154',
// };
//

const config = {
  apiKey: 'AIzaSyBmRvFOyC535DEUyRYfi85mBYoJIquAoVg',
  authDomain: 'insideland-d53aa.firebaseapp.com',
  databaseURL: 'https://insideland-d53aa.firebaseio.com',
  projectId: 'insideland-d53aa',
  storageBucket: 'gs://insideland-d53aa.appspot.com',
  messagingSenderId: '413218801184',
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;

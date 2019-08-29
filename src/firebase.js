import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyDV0pBNiDAf2DVagomi_M4Zo7uLh-SAcYg  ',
  authDomain: 'AIzaSyDV0pBNiDAf2DVagomi_M4Zo7uLh-SAcYg.firebaseapp.com',
  databaseURL: 'https://think-piece.firebaseio.com',
  projectId: 'fir-a39b7',
  storageBucket: 'fir-a39b7.appspot.com',
};

firebase.initializeApp(config);

export default firebase;
import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBYBVJVD8tK0dMbpnXVgmLiAQFwP3HNczQ",
  authDomain: "skystone-capital-f4e0f.firebaseapp.com",
  databaseURL: "https://skystone-capital-f4e0f.firebaseio.com",
  projectId: "skystone-capital-f4e0f",
  storageBucket: "skystone-capital-f4e0f.appspot.com",
  messagingSenderId: "458219554905",
  appId: "1:458219554905:web:69a7b0323b8464fff0c948",
  measurementId: "G-82JS8VTSQB"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();
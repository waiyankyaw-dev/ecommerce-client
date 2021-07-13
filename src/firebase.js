import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCGxdQlZp5_TCUnPb_GLNVoudDvcyO6Zpc',
  authDomain: 'ecommerce-ee66f.firebaseapp.com',
  projectId: 'ecommerce-ee66f',
  storageBucket: 'ecommerce-ee66f.appspot.com',
  messagingSenderId: '1066562894691',
  appId: '1:1066562894691:web:0fe359f666d9ed3bb93156',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

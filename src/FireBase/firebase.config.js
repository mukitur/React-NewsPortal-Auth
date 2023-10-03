// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBU-d9m-ZHAp-sy_BkgEjayr710_QUke1M',
  authDomain: 'react-newsportal-ath.firebaseapp.com',
  projectId: 'react-newsportal-ath',
  storageBucket: 'react-newsportal-ath.appspot.com',
  messagingSenderId: '916570072686',
  appId: '1:916570072686:web:fa99c967a102323ffee87f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

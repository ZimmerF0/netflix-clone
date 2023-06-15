import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAsXyRxYqlG09EMN4wVNlQj34_XZcXDSmo",
  authDomain: "netflix-clone-82804.firebaseapp.com",
  projectId: "netflix-clone-82804",
  storageBucket: "netflix-clone-82804.appspot.com",
  messagingSenderId: "350294532023",
  appId: "1:350294532023:web:a46aeef2b2195bfdbbd232"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore();

export { auth, db };
export default firebaseApp;
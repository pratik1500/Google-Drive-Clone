import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyBMLv8Zse42BXi4WcS6zBkC-dkBKMyJbfM",
  authDomain: "drive-clone-74629.firebaseapp.com",
  projectId: "drive-clone-74629",
  storageBucket: "drive-clone-74629.appspot.com",
  messagingSenderId: "646665363813",
  appId: "1:646665363813:web:b58131cc4734a8d378818c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }
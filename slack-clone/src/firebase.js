
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBYlFLR85RG9ROCsiDDhsgBKZjbDlvKBUE",
  authDomain: "slack-clone-e5f93.firebaseapp.com",
  databaseURL: "https://slack-clone-e5f93.firebaseio.com",
  projectId: "slack-clone-e5f93",
  storageBucket: "slack-clone-e5f93.appspot.com",
  messagingSenderId: "1018275074107",
  appId: "1:1018275074107:web:05d5343cab3aae0c610c1e",
  measurementId: "G-FW4FKTCF8R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
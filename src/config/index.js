import firebase from 'firebase/app'
import 'firebase/firestore'
import { API_KEY } from './key'

// Initialize Firebase
const config = {
    apiKey:  API_KEY,
    authDomain: "todo-react-e7201.firebaseapp.com",
    databaseURL: "https://todo-react-e7201.firebaseio.com",
    projectId: "todo-react-e7201",
    storageBucket: "",
    messagingSenderId: "904655298484",
    appId: "1:904655298484:web:30cf255bc221586d"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase
 
 

import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFkCOb-H2geKtEfPKSmhA0bNj-tS1LDbE",
    authDomain: "covidhelpdesk-in.firebaseapp.com",
    projectId: "covidhelpdesk-in",
    storageBucket: "covidhelpdesk-in.appspot.com",
    messagingSenderId: "82016696036",
    appId: "1:82016696036:web:bc32b72b77f21eea2f9ef1",
    measurementId: "G-ZNFFJW8VR6",
}
const fire = firebase.initializeApp(firebaseConfig)
export default fire

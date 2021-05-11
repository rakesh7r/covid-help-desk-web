import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAk2FOACjNY5FNo-3M5l3YDVhexmdByG9U",
    authDomain: "covidhelpdesk-ts.firebaseapp.com",
    projectId: "covidhelpdesk-ts",
    storageBucket: "covidhelpdesk-ts.appspot.com",
    messagingSenderId: "385787199862",
    appId: "1:385787199862:web:35695e1e9f426e7223fa57",
    measurementId: "G-JQCFQ7ECW6",
}
const fire = firebase.initializeApp(firebaseConfig)
export default fire

import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var config = {
    apiKey: "AIzaSyAk2FOACjNY5FNo-3M5l3YDVhexmdByG9U",
    authDomain: "covidhelpdesk-ts.firebaseapp.com",
    projectId: "covidhelpdesk-ts",
    storageBucket: "covidhelpdesk-ts.appspot.com",
    messagingSenderId: "385787199862",
    appId: "1:385787199862:web:12ebe7d55a8632d523fa57",
    measurementId: "G-V86QYJ9T5M",
}
const AdminFire = firebase.initializeApp(config)
export default AdminFire

import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDUhJIEITgAjkfhy2cQepvWCK5yRXmg-Os",
    authDomain: "covid19-bed-tracker-27cc5.firebaseapp.com",
    projectId: "covid19-bed-tracker-27cc5",
    storageBucket: "covid19-bed-tracker-27cc5.appspot.com",
    messagingSenderId: "453017607259",
    appId: "1:453017607259:web:af5fde96b7a1ac5415b37e",
    measurementId: "G-GGHNBZRBS1",
}
const fire = firebase.initializeApp(firebaseConfig)
export default fire

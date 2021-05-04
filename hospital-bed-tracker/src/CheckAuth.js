import React, { useState, useEffect } from "react"
import fire from "./Config/fire"
import App from "./App"
import Login from "./Login"
import HospitalPanel from "./HospitalPanel"

const CheckAuth = () => {
    const [user, setUser] = useState(null)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [hospitalName, setHospitalName] = useState("")
    const [hospitalArea, setHospitalArea] = useState("")
    const [hospitalDistrict, setHospitalDistrict] = useState("")
    const [verifyPassword, setVerifyPassword] = useState("")
    const [hasAccount, setHasAccount] = useState(true)

    const handleLogin = () => {
        clearErrors()
        fire.auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-defined":
                        setEmailError(err.message)
                        break
                    case "auth/wrong-password":
                        setPasswordError(err.message)
                        break
                    default:
                        break
                }
            })
    }

    const firestore = fire.firestore()
    const handleSignup = () => {
        if (password !== verifyPassword) {
            setEmailError("Password mismatched!")
            return false
        }
        clearErrors()
        fire.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
                firestore
                    .collection("hospitals")
                    .doc(email)
                    .set({
                        name: hospitalName,
                        area: hospitalArea,
                        district: hospitalDistrict,
                        email: email,
                    })
                    .then(() => {
                        console.log("Document successfully written!")
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error)
                    })
            })
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message)
                        break
                    case "auth/weak-password":
                        setPasswordError(err.message)
                        break
                    default:
                        break
                }
            })
    }

    useEffect(() => {
        const unsubscribe = fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs()
                setUser(user)
            } else setUser(null)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const handleLogout = () => {
        fire.auth().signOut()
    }
    const clearInputs = () => {
        setUser("")
        setPassword("")
    }
    const clearErrors = () => {
        setEmailError("")
        setPasswordError("")
    }
    return (
        <div>
            {!user ? (
                <Login
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    handleSignup={handleSignup}
                    handleLogin={handleLogin}
                    clearErrors={clearErrors}
                    clearInputs={clearInputs}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}
                    hospitalName={hospitalName}
                    hospitalArea={hospitalArea}
                    hospitalDistrict={hospitalDistrict}
                    verifyPassword={verifyPassword}
                    setHospitalName={setHospitalName}
                    setHospitalArea={setHospitalArea}
                    setHospitalDistrict={setHospitalDistrict}
                    setVerifyPassword={setVerifyPassword}
                />
            ) : (
                <HospitalPanel user={user} handleLogout={handleLogout} />
            )}
        </div>
    )
}

export default CheckAuth

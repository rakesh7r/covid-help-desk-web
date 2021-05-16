import React, { useEffect, useState } from "react"
import fire from "../Config/fire"
import Loading from "../Loading"
import AdminLogin from "./AdminLogin"
import AdminPanel from "./AdminPanel"

function CheckAuthForAdmin() {
    const [user, setUser] = useState(null)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [loading, setLoading] = useState(true)

    const clearErrors = () => {
        setEmailError("")
        setPasswordError("")
    }

    const handleLogin = () => {
        clearErrors()
        fire.firestore()
            .collection("adminData")
            .doc(email)
            .get()
            .then((doc) => {
                if (!doc.exists) {
                    setEmailError("Invalid Admin data")
                } else {
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
                                    setEmailError(err.message)
                                    break
                            }
                        })
                }
            })
    }

    useEffect(() => {
        const unsubscribe = fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs()
                setUser(user)
                setLoading(false)
            } else {
                setLoading(false)
                setUser(null)
            }
        })
        return () => {
            unsubscribe()
            fire.auth().signOut()
            setUser(null)
        }
    }, [])

    const handleLogout = () => {
        fire.auth().signOut()
    }

    const clearInputs = () => {
        setUser("")
        setPassword("")
    }

    return (
        <div>
            {loading ? (
                <Loading />
            ) : !user ? (
                <AdminLogin
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    emailError={emailError}
                    setEmailError={setEmailError}
                    passwordError={passwordError}
                    setPasswordError={setPasswordError}
                    handleLogin={handleLogin}
                />
            ) : (
                <AdminPanel />
            )}
        </div>
    )
}

export default CheckAuthForAdmin

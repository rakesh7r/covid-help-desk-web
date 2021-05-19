import { Button, TextField } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import "./EditAccountSettings.css"
import SaveIcon from "@material-ui/icons/Save"
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined"
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined"
function EditAccountSettings({ user }) {
    const editTextStyle = { width: "100%", marginBottom: "7px" }
    const btnStyle = {
        marginTop: "10px",
        marginBottom: "10px",
        padding: "8px",
        backgroundColor: "#2685d3",
        color: "white",
    }
    const btnDisabled = {
        marginTop: "10px",
        marginBottom: "10px",
        padding: "8px",
        backgroundColor: "#69a7db",
        color: "white",
    }
    const [name, setName] = useState("")
    const [nameUpdated, setnameUpdated] = useState(false)
    const [emailVerified, setEmailVerified] = useState(false)
    const [password, setPassword] = useState("")
    const [reEnteredPassword, setReEnteredPassword] = useState("")
    const [error, setError] = useState("")
    const [passwordUpdated, setPasswordUpdated] = useState(false)
    const [verEmailSent, setVerEmailSent] = useState("")
    useEffect(() => {
        setName(user.displayName)
        setEmailVerified(user.emailVerified)
    }, [])
    const updateName = () => {
        user.updateProfile({
            displayName: name,
        }).then(() => {
            setnameUpdated(true)
            setTimeout(() => {
                setnameUpdated(false)
            }, 2000)
        })
    }
    const updatePassword = () => {
        if (password.length < 5) {
            setError("Password must be 6 Letters long")
            return false
        }
        if (password !== reEnteredPassword) {
            setError("Passwords do not match")
            return false
        }
        setError("")
        user.updatePassword(password).then(() => {
            setPasswordUpdated(true)
            setTimeout(() => {
                setPasswordUpdated(false)
            }, 2000)
        })
    }
    const verifyEmail = () => {
        setVerEmailSent("")
        user.sendEmailVerification()
            .then(() => {
                setVerEmailSent("Email Verification Link sent to Your mail")
            })
            .catch((err) => {
                setVerEmailSent(err.message)
            })
    }
    return (
        <div className="edit-settings-main">
            <h2 className="edit-s-title">Edit Account Settings</h2>
            {user ? (
                <div className="width-100">
                    <p className="edit-set-update-name">Update Name : </p>
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        style={editTextStyle}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Button onClick={updateName} style={btnStyle}>
                        Update Name{" "}
                        {nameUpdated ? (
                            <CheckCircleOutlinedIcon />
                        ) : (
                            <SaveIcon />
                        )}
                    </Button>
                    <p className="edit-set-update-name">Update Password : </p>
                    <TextField
                        id="outlined-basic"
                        label="Enter Password"
                        variant="outlined"
                        style={editTextStyle}
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Re-enter Password"
                        variant="outlined"
                        style={editTextStyle}
                        type="password"
                        value={reEnteredPassword}
                        onChange={(e) => setReEnteredPassword(e.target.value)}
                    />
                    <Button
                        onClick={() => {
                            updatePassword()
                        }}
                        style={btnStyle}
                    >
                        Update Password{" "}
                        {passwordUpdated ? (
                            <CheckCircleOutlinedIcon />
                        ) : (
                            <SaveIcon />
                        )}
                    </Button>{" "}
                    {error ? <span className="error-text">{error}</span> : null}{" "}
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        style={editTextStyle}
                        value={user.email}
                    />
                    {emailVerified ? (
                        <Button style={btnDisabled} disabled>
                            Email Already Verified
                            <VerifiedUserOutlinedIcon />
                        </Button>
                    ) : (
                        <Button
                            style={
                                verEmailSent.length === 0
                                    ? btnStyle
                                    : btnDisabled
                            }
                            onClick={verifyEmail}
                        >
                            Verify Email
                        </Button>
                    )}
                    <br />
                    {verEmailSent ? <span>{verEmailSent}</span> : null}
                </div>
            ) : null}
        </div>
    )
}

export default EditAccountSettings

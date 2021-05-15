import {
    Backdrop,
    Button,
    makeStyles,
    Modal,
    TextField,
} from "@material-ui/core"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import fire from "./Config/fire"
import "./ForgotPassword.css"
const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}))

function ForgotPassword() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(true)
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const handleClose = () => {
        setOpen(false)
    }
    const sendVerificationLink = () => {
        if (email.length === 0) {
            setError("Enter an Email Address first!")
            return false
        }
        fire.auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                setError("Reset link sent successfully")
            })
            .catch((err) => setError(err.message))
    }
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                disableBackdropClick
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <div className="forgotPassword-cont">
                    <center className="forgotPassword-title">
                        <h2>Forgot Password?</h2>
                    </center>
                    <TextField
                        variant="outlined"
                        label="Enter your email"
                        style={{ width: "100%" }}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error ? (
                        <center>
                            <p
                                style={{ maxWidth: "300px" }}
                                className="error-text"
                            >
                                {error}
                            </p>
                        </center>
                    ) : null}
                    <Button
                        variant="contained"
                        style={{
                            width: "100%",
                            marginTop: "25px",
                            backgroundColor: "#277fd8",
                            color: "white",
                            padding: "7px",
                        }}
                        onClick={sendVerificationLink}
                    >
                        Send Password Reset Link
                    </Button>
                    <Link
                        to="/hospitalpanel"
                        style={{
                            textDecoration: "none",
                            color: "white",
                        }}
                    >
                        <center>
                            <Button
                                variant="contained"
                                style={{
                                    width: "100%",
                                    backgroundColor: "#277fd8",
                                    marginTop: "15px",
                                    color: "white",
                                    padding: "6px",
                                }}
                            >
                                BAck To sign in
                            </Button>
                        </center>
                    </Link>
                </div>
            </Modal>
        </div>
    )
}

export default ForgotPassword

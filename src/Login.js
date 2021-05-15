import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Districts from "./Distircts"
import MandalSelector from "./Mandals/MandalSelector"
import "./Login.css"
import { Link } from "react-router-dom"
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
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}))

const Login = (props) => {
    const classes = useStyles()
    const [open, setOpen] = useState(true)
    const {
        email,
        password,
        setEmail,
        setPassword,
        handleSignup,
        handleLogin,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
        hospitalName,
        hospitalArea,
        hospitalDistrict,
        verifyPassword,
        setHospitalName,
        setHospitalArea,
        setHospitalDistrict,
        setVerifyPassword,
    } = props

    const handleClose = () => {
        setOpen(false)
    }

    return (
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
            style={{ width: "100%", height: "100%", borderRadius: "55px" }}
        >
            <div
                className="login-modal-cont"
                style={{
                    width: "30%",
                    backgroundColor: "white",
                    padding: "50px",
                    borderRadius: "5px",
                    paddingTop: "30px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <center>
                    <span className="span-bold">
                        {hasAccount ? (
                            <h1 style={{ marginBottom: "25px" }}>Sign in</h1>
                        ) : (
                            <h1 style={{ marginBottom: "25px" }}>Sign up</h1>
                        )}
                    </span>
                </center>
                {hasAccount ? null : (
                    <TextField
                        id="outlined-basic"
                        label="Hospital Name"
                        type="text"
                        variant="outlined"
                        style={{
                            marginBottom: "15px",
                        }}
                        value={hospitalName}
                        onChange={(e) => setHospitalName(e.target.value)}
                    />
                )}

                {hasAccount ? null : (
                    <Districts
                        district={hospitalDistrict}
                        setDistrict={setHospitalDistrict}
                    />
                )}
                {hasAccount && hospitalDistrict ? null : (
                    <MandalSelector
                        district={hospitalDistrict}
                        mandal={hospitalArea}
                        setMandal={setHospitalArea}
                    />
                )}
                <TextField
                    id="outlined-basic"
                    label="Email"
                    type="email"
                    variant="outlined"
                    style={{
                        marginBottom: "15px",
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    type="password"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    style={{
                        marginBottom: "15px",
                    }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {hasAccount ? (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-end",
                        }}
                    >
                        <Link to="/forgotPassword">Forgot Password</Link>
                    </div>
                ) : null}
                {hasAccount ? null : (
                    <TextField
                        type="password"
                        id="outlined-basic"
                        label="Verify Password"
                        variant="outlined"
                        style={{
                            marginBottom: "15px",
                        }}
                        value={verifyPassword}
                        onChange={(e) => setVerifyPassword(e.target.value)}
                    />
                )}
                {emailError || passwordError ? (
                    <span
                        className="login-error error-message"
                        style={{ color: "red" }}
                    >
                        {emailError || passwordError}
                    </span>
                ) : null}
                {hasAccount ? (
                    <Button
                        variant="contained"
                        color="primary"
                        style={{
                            marginBottom: "15px",
                            height: "49px",
                            backgroundColor: "#006FE6",
                        }}
                        onClick={handleLogin}
                    >
                        Signin
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        color="primary"
                        style={{
                            marginBottom: "15px",
                            height: "49px",
                            backgroundColor: "#006FE6",
                        }}
                        onClick={handleSignup}
                    >
                        Signup
                    </Button>
                )}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setHasAccount(!hasAccount)}
                    style={{
                        backgroundColor: "#006FE6",
                        height: "49px",
                    }}
                >
                    {hasAccount ? (
                        <span>New User?</span>
                    ) : (
                        <span>Already a User?</span>
                    )}
                </Button>
            </div>
        </Modal>
    )
}
export default Login
